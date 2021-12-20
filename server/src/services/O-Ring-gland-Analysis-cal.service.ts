// core imports
import { Service, Inject } from 'typedi';
import { DocumentQuery, Document, NativeError } from 'mongoose';
// third party 
import * as mathjs from "mathjs";
import * as fs from "fs";
// application imports
import { Units, Temperature, CalculatorOption, ErrorTypes } from "../constants";
import { convertToDecimal, getErrorMessage } from "../helpers";
import { IORingSizes } from "../interfaces/IORingSizes";
import { ICalculationTypeMaster } from '../interfaces/ICalculationTypeMaster';
import { IORingCalculatorRequest } from '../interfaces/IORingCalculatorRequest';

const math = mathjs;
/** This function convert degree to radians **/
const rad = (input: any) => {
    return input * math.pi / 180;
};

@Service()
export default class ORingGlandAnalysisService {
    constructor(
        @Inject('oringAndGlandDetailsModel') private readonly oRingSizesModel: Models.ORingSizes,
        @Inject('metricORingAndGlandDetailsModel') private readonly metricORingSizesModel: Models.ORingSizes,
        @Inject('calculationTypeMasterModel') private readonly calculationTypeMasterModel: Models.CalculationTypeMasterModel,
        @Inject('calculationIdToleranceModel') private readonly calculationIdToleranceModel: Models.CalculationIdToleranceModel,
        @Inject('metricCalculationIdToleranceModel') private readonly metricCalculationIdToleranceModel: Models.MetricCalculationIdToleranceModel,
        @Inject('logger') private readonly logger
    ) { }

    // service for getting ORing JSON
    public async getORingCalcJSON(): Promise<any> {
        const dataPath = "data/O-Ring-gland-Analysis-cal.json";
        const data = await fs.promises.readFile(dataPath, "utf8");
        return new Promise((resolve, reject) => {
            if (data) {
                this.logger.info('[O-Ring-gland-Analysis-cal.service] if condition called.');
                // parse JSON                
                return resolve(JSON.parse(data));
            }
            else {
                this.logger.info('[O-Ring-gland-Analysis-cal.service] else condition called.');
                return reject("No data found in json file.");
            }
        });
    }

    public async getDashsizeDetails(unit: number): Promise<IORingSizes[]> {
        return new Promise((resolve) => {
            if (Units.INCH === (+unit)) {
                this.oRingSizesModel.find().sort({ 'dashSize': -1 }).exec((err, cursor) => {
                    const d = this.callbackOringAndGlandDetails(err, cursor);
                    resolve(d);
                });
            }
            else if (Units.MILLI_METER === (+unit)) {
                this.metricORingSizesModel.find().sort({ 'dashSize': -1 }).exec((err, cursor) => {
                    const d = this.callbackOringAndGlandDetails(err, cursor);
                    resolve(d);
                });
            }
        });
    }

    // create o-ring
    public async createRectangleOring(data: IORingCalculatorRequest): Promise<any> {
        return new Promise((resolve, reject) => {
            this.logger.info('[O-Ring-gland-Analysis-cal.service] createRectangleOring called.');
            const output: any = {};
            let query: DocumentQuery<(ICalculationTypeMaster & Document)[], ICalculationTypeMaster & Document, {}>;
            if (data.rectangleType) {
                query = this.calculationTypeMasterModel.find({ 'calType': 'rectangularGlandOD' }).sort('-calType');
            }
            else {
                query = this.calculationTypeMasterModel.find({ 'calType': 'rectangularGland' }).sort('-calType');
            }
            query.exec((err, glandDetails: any) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    // Donot remove unused variables  // unused variables is used by formula's and internal calculation                    
                    const glandWidthNominal: number = parseFloat(data.glandWidthNominal);
                    output.glandWidthNominal = convertToDecimal((+data.unit), glandWidthNominal);
                    const glandDepthNominal: number = parseFloat(data.glandDepthNominal);
                    output.glandDepthNominal = convertToDecimal((+data.unit), glandDepthNominal);
                    const bottomRadiiNominal: number = parseFloat(data.bottomRadiiNominal);
                    output.bottomRadiiNominal = convertToDecimal((+data.unit), bottomRadiiNominal);
                    const gapNominal = parseFloat(data.gapNominal);
                    output.gapNominal = convertToDecimal((+data.unit), gapNominal);
                    let glandIdNominal: number;
                    if (data.glandIdNominal) {
                        glandIdNominal = parseFloat(data.glandIdNominal);
                        output.glandIdNominal = convertToDecimal((+data.unit), glandIdNominal);
                    }
                    const chermazArray = [1, 2, 3, 7];
                    const oringCrossSectionNominal = parseFloat(data.oringCrossSectionNominal);
                    output.oringCrossSectionNominal = convertToDecimal((+data.unit), oringCrossSectionNominal);
                    const oringIdNominal = parseFloat(data.oringIdNominal);
                    output.oringIdNominal = convertToDecimal((+data.unit), oringIdNominal);
                    const materialCteNominal = parseFloat(data.materialCteNominal.cte);
                    const materialCteMin = parseFloat(data.materialCteNominal.cte);
                    const materialCteMax = parseFloat(data.materialCteNominal.cte);
                    const materialTemp = parseFloat(data.materialCteNominal.maxtemp);
                    let glandWidthMin: number, glandWidthMax: number, glandDepthMin: number,
                        glandDepthMax: number, bottomRadiiMin: number, bottomRadiiMax: number,
                        gapMin: number, gapMax: number, glandIdMin: number, glandIdMax: number;
                    let gapAreaMin: any, gapAreaMax: any, calculatedAreaNoGapMin: any,
                        calculatedAreaNoGapMax: any, calculatedAreaWithGapMin: any,
                        calculatedAreaWithGapMax: any, glandVolumeMin: any, glandVolumeMax: any,
                        oringCrossSectionMin: number, oringCrossSectionMax: number;
                    let inputOption = data.inputOption;
                    let glandODNominal: number, glandODMin: number, glandODMax: number;
                    let rectangleType: string;
                    let gapAreaNominal: any;
                    let calculatedAreaNoGapNominal: any;
                    let calculatedAreaWithGapNominal: any;
                    let glandVolumeNominal: any;
                    let oringAreaNominal: any;
                    let oringVolumeNominal: any;
                    let aOringNominal: any;
                    let vOringNominal: any;
                    let newAreaOringNominal: any;
                    let newOringCrossSectionNominal: any;
                    let newOringVolumeNominal: any;
                    let aOringMin: any, aOringMax: any, vOringMin: any, vOringMax: any,
                        newAreaOringMin: any, newAreaOringMax: any, newOringCrossSectionMin: any,
                        newOringCrossSectionMax: any, newOringVolumeMin: any, newOringVolumeMax: any;
                    let oringAreaMin: any, oringAreaMax: any, oringVolumeMin: any,
                        oringVolumeMax: any;

                    let tempCNominal: any;
                    let tempCMin: any;
                    let tempCMax: any;

                    if (data.rectangleType) {
                        rectangleType = data.rectangleType;
                    }

                    if (data.rectangleType && rectangleType === "rectangleOD") {
                        glandODNominal = parseFloat(data.glandODNominal);
                        output.glandODNominal = convertToDecimal((+data.unit), glandODNominal);
                    }

                    let compressionMinRange = 15; // min allowed value for the Operating Temperature -> compression at temp
                    const compressionMaxRange = 25; // maximum allowed value for the Operating Temperature -> compression at temp
                    let glandfillMaxRange = 95; // maximum allowed value for the Operating Temperature -> gland fill at temp
                    let compressionMinforMin = 15; // min allowed value for the Operating Temperature -> compression at temp

                    if (data.calculationType == 'glandSizing') {
                        compressionMinRange = 12;
                        glandfillMaxRange = 90;
                        compressionMinforMin = -1000;
                    }

                    if (CalculatorOption.WithTolerance === (+data.inputOption)) {
                        inputOption = CalculatorOption.WithMinMax.toString();
                    }

                    if ((+inputOption) === CalculatorOption.WithMinMax) {
                        glandWidthMin = parseFloat(data.glandWidthMin);
                        output.glandWidthMin = convertToDecimal((+data.unit), glandWidthMin);
                        glandWidthMax = parseFloat(data.glandWidthMax);
                        output.glandWidthMax = convertToDecimal((+data.unit), glandWidthMax);
                        glandDepthMin = parseFloat(data.glandDepthMin);
                        output.glandDepthMin = convertToDecimal((+data.unit), glandDepthMin);
                        glandDepthMax = parseFloat(data.glandDepthMax);
                        output.glandDepthMax = convertToDecimal((+data.unit), glandDepthMax);
                        bottomRadiiMin = parseFloat(data.bottomRadiiMin);
                        output.bottomRadiiMin = convertToDecimal((+data.unit), bottomRadiiMin);
                        bottomRadiiMax = parseFloat(data.bottomRadiiMax);
                        output.bottomRadiiMax = convertToDecimal((+data.unit), bottomRadiiMax);
                        gapMin = parseFloat(data.gapMin);
                        output.gapMin = convertToDecimal((+data.unit), gapMin);
                        gapMax = parseFloat(data.gapMax);
                        output.gapMax = convertToDecimal((+data.unit), gapMax);
                        if (data.glandIdMin && data.glandIdMax) {
                            glandIdMin = parseFloat(data.glandIdMin);
                            output.glandIdMin = convertToDecimal((+data.unit), glandIdMin);
                            glandIdMax = parseFloat(data.glandIdMax);
                            output.glandIdMax = convertToDecimal((+data.unit), glandIdMax);
                        }
                        if (data.rectangleType) {
                            glandODMin = parseFloat(data.glandODMin);
                            output.glandODMin = convertToDecimal((+data.unit), glandODMin);
                            glandODMax = parseFloat(data.glandODMax);
                            output.glandODMax = convertToDecimal((+data.unit), glandODMax);
                        }
                    }

                    let oringCrossSectionToleranceNominal: number;

                    // get cross section tolerance
                    this.getCrossSectionTolerance(oringCrossSectionNominal, (+data.unit)).then((crossSectionResult: oringCrossSection) => {
                        if (err) {
                            throw new Error(getErrorMessage(err));
                        } else {
                            oringCrossSectionToleranceNominal = parseFloat(crossSectionResult.crossSectionTolerance.toString());
                            let oringIdToleranceNominal = parseFloat("0.025");
                            // get oring id tolerances
                            this.getOringIdTolerance(oringCrossSectionNominal, oringIdNominal, (+data.unit)).then(
                                (result: idTolerance) => {
                                    if (err) {
                                        throw new Error(getErrorMessage(err));
                                    } else {
                                        oringIdToleranceNominal = parseFloat(result.idTolerance.toString());
                                        const rule = [];
                                        const warning = [];
                                        let i = 0;
                                        if (oringIdToleranceNominal === 0) {
                                            rule[i] = {
                                                'field': 'oringIdNominal',
                                                'detail': 'Cannot calculate O-ring cross section Tolerance. Please contact Greene Tweed for assistance if needed.'
                                            };
                                            i++;
                                        }
                                        // calculated value not shown to user
                                        gapAreaNominal = eval(glandDetails[0].gapArea.nominal.formula);
                                        calculatedAreaNoGapNominal = eval(glandDetails[0].calculatedAreaNoGap.nominal.formula);
                                        calculatedAreaWithGapNominal = eval(glandDetails[0].calculatedAreaWithGap.nominal.formula);
                                        glandVolumeNominal = eval(glandDetails[0].glandVolume.nominal.formula);

                                        if ((+inputOption) === CalculatorOption.WithMinMax) {
                                            gapAreaMin = eval(glandDetails[0].gapArea.min.formula);
                                            gapAreaMax = eval(glandDetails[0].gapArea.max.formula);
                                            calculatedAreaNoGapMin = eval(glandDetails[0].calculatedAreaNoGap.min.formula);
                                            calculatedAreaNoGapMax = eval(glandDetails[0].calculatedAreaNoGap.max.formula);
                                            calculatedAreaWithGapMin = eval(glandDetails[0].calculatedAreaWithGap.min.formula);
                                            calculatedAreaWithGapMax = eval(glandDetails[0].calculatedAreaWithGap.max.formula);
                                            glandVolumeMin = eval(glandDetails[0].glandVolume.min.formula);
                                            glandVolumeMax = eval(glandDetails[0].glandVolume.max.formula);
                                            oringCrossSectionMin = eval(glandDetails[0].oringCrossSection.min.formula);
                                            oringCrossSectionMin = parseFloat(oringCrossSectionMin.toFixed(3));
                                            output.oringCrossSectionMin = convertToDecimal((+data.unit), oringCrossSectionMin);
                                            oringCrossSectionMax = eval(glandDetails[0].oringCrossSection.max.formula);
                                            oringCrossSectionMax = parseFloat(oringCrossSectionMax.toFixed(3));
                                            output.oringCrossSectionMax = convertToDecimal((+data.unit), oringCrossSectionMax);
                                        }

                                        if (oringIdToleranceNominal !== 0) {
                                            let oringIdMin: number, oringIdMax: number;
                                            if ((+inputOption) === CalculatorOption.WithMinMax) {
                                                oringIdMin = eval(glandDetails[0].oringId.min.formula);
                                                oringIdMin = output.oringIdMin = parseFloat(oringIdMin.toFixed(3));
                                                oringIdMax = eval(glandDetails[0].oringId.max.formula);
                                                oringIdMax = output.oringIdMax = parseFloat(oringIdMax.toFixed(3));
                                            }
                                            let stretchCalculationNominal: number;
                                            if (!data.rectangleType) {
                                                stretchCalculationNominal = eval(glandDetails[0].stretchCalculation.nominal.formula);
                                                stretchCalculationNominal = parseFloat(stretchCalculationNominal.toFixed(1));
                                                output.stretchCalculationNominal = convertToDecimal((+data.unit), stretchCalculationNominal);
                                                if (!(stretchCalculationNominal >= 0 && stretchCalculationNominal <= 3) && oringIdNominal >= 1) {
                                                    rule[i] = {
                                                        'field': 'stretchCalculationNominal',
                                                        'title': 'Stretch Calculation at Ambient Temperature: ',
                                                        'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.'
                                                    };
                                                    i++;
                                                }
                                                if (!(stretchCalculationNominal >= 0 && stretchCalculationNominal <= 3) && oringIdNominal < 1) {
                                                    rule[i] = {
                                                        'field': 'stretchCalculationNominal',
                                                        'title': 'Stretch Calculation at Ambient Temperature: ',
                                                        'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.'
                                                    };
                                                    i++;
                                                }
                                            }
                                            let radialCompressionCalculationNominal: number;
                                            if (data.rectangleType) {
                                                radialCompressionCalculationNominal = eval(glandDetails[0].radialCompressionCalculation.nominal.formula);
                                                radialCompressionCalculationNominal = parseFloat(radialCompressionCalculationNominal.toFixed(1));
                                                output.radialCompressionCalculationNominal = convertToDecimal((+data.unit), radialCompressionCalculationNominal);
                                                if (parseFloat(radialCompressionCalculationNominal ? radialCompressionCalculationNominal.toString() : "") < -0.5
                                                    || parseFloat(radialCompressionCalculationNominal ? radialCompressionCalculationNominal.toString() : "") > 0.5) {
                                                    rule[i] = {
                                                        'field': 'radialCompressionCalculationNominal',
                                                        'title': 'Radial Compression at Ambient Temperature: ',
                                                        'detail': 'Radial Compression nominal should target to 0%. Please contact Greene Tweed for assistance if needed.'
                                                    };
                                                    i++;
                                                }
                                            }

                                            let stretchCalculationMin: number, stretchCalculationMax: number;

                                            if (CalculatorOption.WithMinMax === (+inputOption)) {
                                                if (!data.rectangleType) {
                                                    stretchCalculationMin = eval(glandDetails[0].stretchCalculation.min.formula);
                                                    stretchCalculationMin = parseFloat(stretchCalculationMin.toFixed(1));
                                                    output.stretchCalculationMin = convertToDecimal((+data.unit), stretchCalculationMin);
                                                    if (!(stretchCalculationMin >= 0 && stretchCalculationMin <= 3)) {
                                                        rule[i] = {
                                                            'field': 'stretchCalculationMin',
                                                            'title': 'Stretch Calculation at Ambient Temperature: ',
                                                            'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }
                                                    stretchCalculationMax = eval(glandDetails[0].stretchCalculation.max.formula);
                                                    stretchCalculationMax = parseFloat(stretchCalculationMax.toFixed(1));
                                                    output.stretchCalculationMax = convertToDecimal((+data.unit), stretchCalculationMax);
                                                    if (!(stretchCalculationMax >= 0 && stretchCalculationMax <= 3)) {
                                                        rule[i] = { 'field': 'stretchCalculationMax', 'title': 'Stretch Calculation at Ambient Temperature: ', 'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                }
                                                let radialCompressionCalculationMin: number, radialCompressionCalculationMax: number;
                                                if (data.rectangleType) {
                                                    radialCompressionCalculationMin = eval(glandDetails[0].radialCompressionCalculation.min.formula);
                                                    radialCompressionCalculationMin = parseFloat(radialCompressionCalculationMin.toFixed(1));
                                                    output.radialCompressionCalculationMin = convertToDecimal((+data.unit), radialCompressionCalculationMin);

                                                    radialCompressionCalculationMax = eval(glandDetails[0].radialCompressionCalculation.max.formula);
                                                    radialCompressionCalculationMax = parseFloat(radialCompressionCalculationMax.toFixed(1));
                                                    output.radialCompressionCalculationMax = convertToDecimal((+data.unit), radialCompressionCalculationMax);
                                                }
                                            }

                                            oringAreaNominal = eval(glandDetails[0].oringArea.nominal.formula);
                                            oringVolumeNominal = eval(glandDetails[0].oringVolume.nominal.formula);
                                            
                                            if (CalculatorOption.WithMinMax === (+inputOption)) {
                                                oringAreaMin = eval(glandDetails[0].oringArea.min.formula);
                                                oringAreaMax = eval(glandDetails[0].oringArea.max.formula);
                                                oringVolumeMin = eval(glandDetails[0].oringVolume.min.formula);
                                                oringVolumeMax = eval(glandDetails[0].oringVolume.max.formula);
                                            }

                                            let compressionNominal = eval(glandDetails[0].compression.nominal.formula);
                                            compressionNominal = parseFloat(compressionNominal.toFixed(1));
                                            output.compressionNominal = convertToDecimal((+data.unit), compressionNominal);
                                            if (compressionNominal > 25 || compressionNominal < 15) {
                                                rule[i] = {
                                                    'field': 'compressionNominal',
                                                    'title': 'Compression at Ambient Temperature: ',
                                                    'detail': 'Nominal compression recommended to be between 20-25% at ambient temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.'
                                                };
                                                i++;
                                            }

                                            if (parseFloat(compressionNominal) < 0) {
                                                output.compressionNominal = compressionNominal = 0;
                                            }

                                            let glandFillNominal = eval(glandDetails[0].glandFill.nominal.formula);
                                            glandFillNominal = parseFloat(glandFillNominal.toFixed(1));
                                            output.glandFillNominal = convertToDecimal((+data.unit), glandFillNominal);

                                            if (glandFillNominal > 95) {
                                                rule[i] = {
                                                    'field': 'glandFillNominal',
                                                    'title': 'Gland Fill at Ambient Temperature: ',
                                                    'detail': 'Nominal gland fill recommended to be between 85-90% at ambient temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.'
                                                };
                                                i++;
                                            }

                                            let compressionMin: number, compressionMax: number, glandFillMin: number, glandFillMax: number;
                                            if (CalculatorOption.WithMinMax === (+inputOption)) {
                                                compressionMin = eval(glandDetails[0].compression.min.formula);
                                                compressionMin = parseFloat(compressionMin.toFixed(1));
                                                output.compressionMin = convertToDecimal((+data.unit), compressionMin);
                                                if ((+compressionMin) > 25 || (+compressionMin) < 15) {
                                                    rule[i] = {
                                                        'field': 'compressionMin',
                                                        'title': 'Compression at Ambient Temperature: ',
                                                        'detail': 'Nominal compression recommended to be between 20-25% at ambient temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.'
                                                    };
                                                    i++;
                                                }
                                                if (parseFloat(compressionMin.toString()) < 0) {
                                                    output.compressionMin = compressionMin = 0;
                                                }
                                                compressionMax = eval(glandDetails[0].compression.max.formula);
                                                compressionMax = parseFloat(compressionMax.toFixed(1));
                                                output.compressionMax = convertToDecimal((+data.unit), compressionMax);

                                                if ((+compressionMax) > 25 || (+compressionMax) < 15) {
                                                    rule[i] = { 'field': 'compressionMax', 'title': 'Compression at Ambient Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at ambient temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(compressionMax.toString()) < 0) {
                                                    output.compressionMax = compressionMax = 0;
                                                }

                                                glandFillMin = eval(glandDetails[0].glandFill.min.formula);
                                                glandFillMin = parseFloat(glandFillMin.toFixed(1));
                                                output.glandFillMin = convertToDecimal((+data.unit), glandFillMin);
                                                if (glandFillMin > 95) {
                                                    rule[i] = {
                                                        'field': 'glandFillMin',
                                                        'title': 'Gland Fill at Ambient Temperature: ',
                                                        'detail': 'Nominal gland fill recommended to be between 85-90% at ambient temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.'
                                                    };
                                                    i++;
                                                }

                                                glandFillMax = eval(glandDetails[0].glandFill.max.formula);

                                                glandFillMax = parseFloat(glandFillMax.toFixed(1));
                                                output.glandFillMax = convertToDecimal((+data.unit), glandFillMax);
                                                if (glandFillMax > 95) {
                                                    rule[i] = {
                                                        'field': 'glandFillMax',
                                                        'title': 'Gland Fill at Ambient Temperature: ',
                                                        'detail': 'Nominal gland fill recommended to be between 85-90% at ambient temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.'
                                                    };
                                                    i++;
                                                }

                                            }

                                            // start of operating temperature Nominal  condition
                                            if (data.operatingTemperatureNominal) {
                                                let operatingTemperatureNominal = parseFloat(data.operatingTemperatureNominal.toString());

                                                if (Temperature.FAHRENHEIT === (+(data.unitTemp) as Temperature)) {
                                                    operatingTemperatureNominal = parseFloat(((operatingTemperatureNominal - 32) * 5 / 9).toString());
                                                }

                                                tempCNominal = eval(glandDetails[0].tempC.nominal.formula);
                                                aOringNominal = eval(glandDetails[0].aOring.nominal.formula);
                                                vOringNominal = eval(glandDetails[0].vOring.nominal.formula);
                                                newAreaOringNominal = eval(glandDetails[0].newAreaOring.nominal.formula);
                                                newOringCrossSectionNominal = eval(glandDetails[0].newOringCrossSection.nominal.formula);
                                                newOringVolumeNominal = eval(glandDetails[0].newOringVolume.nominal.formula);

                                                if ((+inputOption) === CalculatorOption.WithMinMax) {
                                                    tempCMin = eval(glandDetails[0].tempC.min.formula);
                                                    tempCMax = eval(glandDetails[0].tempC.max.formula);
                                                    aOringMin = eval(glandDetails[0].aOring.min.formula);
                                                    aOringMax = eval(glandDetails[0].aOring.max.formula);
                                                    vOringMin = eval(glandDetails[0].vOring.min.formula);
                                                    vOringMax = eval(glandDetails[0].vOring.max.formula);
                                                    newAreaOringMin = eval(glandDetails[0].newAreaOring.min.formula);
                                                    newAreaOringMax = eval(glandDetails[0].newAreaOring.max.formula);
                                                    newOringCrossSectionMin = eval(glandDetails[0].newOringCrossSection.min.formula);
                                                    newOringCrossSectionMax = eval(glandDetails[0].newOringCrossSection.max.formula);
                                                    newOringVolumeMin = eval(glandDetails[0].newOringVolume.min.formula);
                                                    newOringVolumeMax = eval(glandDetails[0].newOringVolume.max.formula);
                                                }

                                                // compression at temp nominal
                                                let compressionAtTempNominal = eval(glandDetails[0].compressionAtTemp.nominal.formula);
                                                compressionAtTempNominal = parseFloat(compressionAtTempNominal.toFixed(1));
                                                output.compressionAtTempNominal = convertToDecimal((+data.unit), compressionAtTempNominal);

                                                if (compressionAtTempNominal > compressionMaxRange || compressionAtTempNominal < 15) {
                                                    rule[i] = { 'field': 'compressionAtTempNominal', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(compressionAtTempNominal) < 0) {
                                                    output.compressionAtTempNominal = compressionAtTempNominal = 0;
                                                }

                                                // glandFill at temp Nominal
                                                let glandFillAtTempNominal = eval(glandDetails[0].glandFillAtTemp.nominal.formula);
                                                glandFillAtTempNominal = parseFloat(glandFillAtTempNominal.toFixed(1));
                                                output.glandFillAtTempNominal = convertToDecimal((+data.unit), glandFillAtTempNominal);
                                                if (glandFillAtTempNominal > glandfillMaxRange) {
                                                    rule[i] = { 'field': 'glandFillAtTempNominal', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                let compressionAtTempMin: number, compressionAtTempMax: number, glandFillAtTempMin: number, glandFillAtTempMax: number;

                                                if (CalculatorOption.WithMinMax === (+inputOption)) {
                                                    // compression at temp Min
                                                    compressionAtTempMin = eval(glandDetails[0].compressionAtTemp.min.formula);
                                                    compressionAtTempMin = parseFloat(compressionAtTempMin.toFixed(1));
                                                    output.compressionAtTempMin = convertToDecimal((+data.unit), compressionAtTempMin);

                                                    if ((+compressionAtTempMin) > compressionMaxRange || (+compressionAtTempMin) < compressionMinforMin) { //compressionMinRange
                                                        rule[i] = {
                                                            'field': 'compressionAtTempMin',
                                                            'title': 'Compression at Temperature: ',
                                                            'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }

                                                    if (parseFloat(compressionAtTempMin.toString()) < 0) {
                                                        output.compressionAtTempMin = compressionAtTempMin = 0;
                                                    }

                                                    // compression at temp Max
                                                    compressionAtTempMax = eval(glandDetails[0].compressionAtTemp.max.formula);
                                                    compressionAtTempMax = output.compressionAtTempMax = parseFloat(compressionAtTempMax.toFixed(1));

                                                    if (data.calculationType == 'glandSizing') {
                                                        compressionMinRange = 20;
                                                    }

                                                    if ((+compressionAtTempMax) > compressionMaxRange || (+compressionAtTempMax) < compressionMinRange) {
                                                        rule[i] = {
                                                            'field': 'compressionAtTempMax',
                                                            'title': 'Compression at Temperature: ',
                                                            'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }

                                                    if (parseFloat(compressionAtTempMax.toString()) < 0) {
                                                        output.compressionAtTempMax = compressionAtTempMax = 0;
                                                    }

                                                    // glandFill at temp Min
                                                    glandFillAtTempMin = eval(glandDetails[0].glandFillAtTemp.min.formula);
                                                    glandFillAtTempMin = output.glandFillAtTempMin = parseFloat(glandFillAtTempMin.toFixed(1));
                                                    if (glandFillAtTempMin > glandfillMaxRange) {
                                                        rule[i] = {
                                                            'field': 'glandFillAtTempMin',
                                                            'title': 'Gland Fill at Temperature: ',
                                                            'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }

                                                    // glandFill at temp Max
                                                    glandFillAtTempMax = eval(glandDetails[0].glandFillAtTemp.max.formula);
                                                    glandFillAtTempMax = output.glandFillAtTempMax = parseFloat(glandFillAtTempMax.toFixed(1));
                                                    if (glandFillAtTempMax > 95) {
                                                        rule[i] = {
                                                            'field': 'glandFillAtTempMax',
                                                            'title': 'Gland Fill at Temperature: ',
                                                            'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }
                                                }// end with min max condition
                                            }
                                            // end of operating temperature Nominal  condition

                                            // start of operating temperature Min  condition
                                            if (data.operatingTemperatureMin) {
                                                let operatingTemperatureNominal = parseFloat(data.operatingTemperatureMin.toString());

                                                if (Temperature.FAHRENHEIT === (+(data.unitTemp) as Temperature)) {
                                                    operatingTemperatureNominal = parseFloat(((operatingTemperatureNominal - 32) * 5 / 9).toString());
                                                }

                                                tempCNominal = eval(glandDetails[0].tempC.nominal.formula);
                                                aOringNominal = eval(glandDetails[0].aOring.nominal.formula);
                                                vOringNominal = eval(glandDetails[0].vOring.nominal.formula);
                                                newAreaOringNominal = eval(glandDetails[0].newAreaOring.nominal.formula);
                                                newOringCrossSectionNominal = eval(glandDetails[0].newOringCrossSection.nominal.formula);
                                                newOringVolumeNominal = eval(glandDetails[0].newOringVolume.nominal.formula);

                                                if ((+inputOption) === CalculatorOption.WithMinMax) {
                                                    tempCMin = eval(glandDetails[0].tempC.min.formula);
                                                    tempCMax = eval(glandDetails[0].tempC.max.formula);
                                                    aOringMin = eval(glandDetails[0].aOring.min.formula);
                                                    aOringMax = eval(glandDetails[0].aOring.max.formula);
                                                    vOringMin = eval(glandDetails[0].vOring.min.formula);
                                                    vOringMax = eval(glandDetails[0].vOring.max.formula);
                                                    newAreaOringMin = eval(glandDetails[0].newAreaOring.min.formula);
                                                    newAreaOringMax = eval(glandDetails[0].newAreaOring.max.formula);
                                                    newOringCrossSectionMin = eval(glandDetails[0].newOringCrossSection.min.formula);
                                                    newOringCrossSectionMax = eval(glandDetails[0].newOringCrossSection.max.formula);
                                                    newOringVolumeMin = eval(glandDetails[0].newOringVolume.min.formula);
                                                    newOringVolumeMax = eval(glandDetails[0].newOringVolume.max.formula);
                                                }

                                                // operating temperature min -> compression at temp nominal
                                                // oT -> Operating Temperature
                                                let oTMinCompressionAtTempNominal = eval(glandDetails[0].compressionAtTemp.nominal.formula);
                                                oTMinCompressionAtTempNominal = output.oTMinCompressionAtTempNominal = parseFloat(oTMinCompressionAtTempNominal.toFixed(1));

                                                if (oTMinCompressionAtTempNominal > compressionMaxRange || oTMinCompressionAtTempNominal < 15) {
                                                    rule[i] = { 'field': 'oTMinCompressionAtTempNominal', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(oTMinCompressionAtTempNominal) < 0) {
                                                    output.oTMinCompressionAtTempNominal = oTMinCompressionAtTempNominal = 0;
                                                }

                                                // operating temperature min -> glandFill at temp Nominal
                                                let oTMinGlandFillAtTempNominal = eval(glandDetails[0].glandFillAtTemp.nominal.formula);
                                                oTMinGlandFillAtTempNominal = output.oTMinGlandFillAtTempNominal = parseFloat(oTMinGlandFillAtTempNominal.toFixed(1));
                                                if (oTMinGlandFillAtTempNominal > glandfillMaxRange) {
                                                    rule[i] = { 'field': 'oTMinGlandFillAtTempNominal', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                let oTMinCompressionAtTempMin: number, oTMinCompressionAtTempMax: number, oTMinGlandFillAtTempMin: number, oTMinGlandFillAtTempMax: number;

                                                if (CalculatorOption.WithMinMax === (+inputOption)) {
                                                    // compression at temp Min
                                                    oTMinCompressionAtTempMin = eval(glandDetails[0].compressionAtTemp.min.formula);
                                                    oTMinCompressionAtTempMin = output.oTMinCompressionAtTempMin = parseFloat(oTMinCompressionAtTempMin.toFixed(1));

                                                    if ((+oTMinCompressionAtTempMin) > compressionMaxRange || (+oTMinCompressionAtTempMin) < compressionMinforMin) { //compressionMinRange
                                                        rule[i] = {
                                                            'field': 'oTMinCompressionAtTempMin',
                                                            'title': 'Compression at Temperature: ',
                                                            'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }

                                                    if (parseFloat(oTMinCompressionAtTempMin.toString()) < 0) {
                                                        output.oTMinCompressionAtTempMin = oTMinCompressionAtTempMin = 0;
                                                    }

                                                    // compression at temp Max
                                                    oTMinCompressionAtTempMax = eval(glandDetails[0].compressionAtTemp.max.formula);
                                                    oTMinCompressionAtTempMax = output.oTMinCompressionAtTempMax = parseFloat(oTMinCompressionAtTempMax.toFixed(1));

                                                    if (data.calculationType == 'glandSizing') {
                                                        compressionMinRange = 20;
                                                    }

                                                    if ((+oTMinCompressionAtTempMax) > compressionMaxRange || (+oTMinCompressionAtTempMax) < compressionMinRange) {
                                                        rule[i] = {
                                                            'field': 'oTMinCompressionAtTempMax',
                                                            'title': 'Compression at Temperature: ',
                                                            'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }

                                                    if (parseFloat(oTMinCompressionAtTempMax.toString()) < 0) {
                                                        output.oTMinCompressionAtTempMax = oTMinCompressionAtTempMax = 0;
                                                    }

                                                    // glandFill at temp Min
                                                    oTMinGlandFillAtTempMin = eval(glandDetails[0].glandFillAtTemp.min.formula);
                                                    oTMinGlandFillAtTempMin = output.oTMinGlandFillAtTempMin = parseFloat(oTMinGlandFillAtTempMin.toFixed(1));
                                                    if (oTMinGlandFillAtTempMin > glandfillMaxRange) {
                                                        rule[i] = {
                                                            'field': 'oTMinGlandFillAtTempMin',
                                                            'title': 'Gland Fill at Temperature: ',
                                                            'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }

                                                    // glandFill at temp Max
                                                    oTMinGlandFillAtTempMax = eval(glandDetails[0].glandFillAtTemp.max.formula);
                                                    oTMinGlandFillAtTempMax = output.oTMinGlandFillAtTempMax = parseFloat(oTMinGlandFillAtTempMax.toFixed(1));
                                                    if (oTMinGlandFillAtTempMax > 95) {
                                                        rule[i] = {
                                                            'field': 'oTMinGlandFillAtTempMax',
                                                            'title': 'Gland Fill at Temperature: ',
                                                            'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }
                                                }
                                            }
                                            // end of operating temperature Min  condition

                                            // start of operating temperature Max  condition
                                            if (data.operatingTemperatureMax) {
                                                let operatingTemperatureNominal = parseFloat(data.operatingTemperatureMax.toString());

                                                if (Temperature.FAHRENHEIT === (+(data.unitTemp) as Temperature)) {
                                                    operatingTemperatureNominal = parseFloat(((operatingTemperatureNominal - 32) * 5 / 9).toString());
                                                }

                                                tempCNominal = eval(glandDetails[0].tempC.nominal.formula);
                                                aOringNominal = eval(glandDetails[0].aOring.nominal.formula);
                                                vOringNominal = eval(glandDetails[0].vOring.nominal.formula);
                                                newAreaOringNominal = eval(glandDetails[0].newAreaOring.nominal.formula);
                                                newOringCrossSectionNominal = eval(glandDetails[0].newOringCrossSection.nominal.formula);
                                                newOringVolumeNominal = eval(glandDetails[0].newOringVolume.nominal.formula);

                                                if ((+inputOption) === CalculatorOption.WithMinMax) {
                                                    tempCMin = eval(glandDetails[0].tempC.min.formula);
                                                    tempCMax = eval(glandDetails[0].tempC.max.formula);
                                                    aOringMin = eval(glandDetails[0].aOring.min.formula);
                                                    aOringMax = eval(glandDetails[0].aOring.max.formula);
                                                    vOringMin = eval(glandDetails[0].vOring.min.formula);
                                                    vOringMax = eval(glandDetails[0].vOring.max.formula);
                                                    newAreaOringMin = eval(glandDetails[0].newAreaOring.min.formula);
                                                    newAreaOringMax = eval(glandDetails[0].newAreaOring.max.formula);
                                                    newOringCrossSectionMin = eval(glandDetails[0].newOringCrossSection.min.formula);
                                                    newOringCrossSectionMax = eval(glandDetails[0].newOringCrossSection.max.formula);
                                                    newOringVolumeMin = eval(glandDetails[0].newOringVolume.min.formula);
                                                    newOringVolumeMax = eval(glandDetails[0].newOringVolume.max.formula);
                                                }

                                                // operating temperature max -> compression at temp nominal
                                                // oT -> Operating Temperature
                                                let oTMaxCompressionAtTempNominal = eval(glandDetails[0].compressionAtTemp.nominal.formula);
                                                oTMaxCompressionAtTempNominal = output.oTMaxCompressionAtTempNominal = parseFloat(oTMaxCompressionAtTempNominal.toFixed(1));

                                                if (oTMaxCompressionAtTempNominal > compressionMaxRange || oTMaxCompressionAtTempNominal < 15) {
                                                    rule[i] = { 'field': 'oTMaxCompressionAtTempNominal', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(oTMaxCompressionAtTempNominal) < 0) {
                                                    output.oTMaxCompressionAtTempNominal = oTMaxCompressionAtTempNominal = 0;
                                                }

                                                // operating temperature Max -> glandFill at temp Nominal
                                                let oTMaxGlandFillAtTempNominal = eval(glandDetails[0].glandFillAtTemp.nominal.formula);
                                                oTMaxGlandFillAtTempNominal = output.oTMaxGlandFillAtTempNominal = parseFloat(oTMaxGlandFillAtTempNominal.toFixed(1));
                                                if (oTMaxGlandFillAtTempNominal > glandfillMaxRange) {
                                                    rule[i] = { 'field': 'oTMaxGlandFillAtTempNominal', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                let oTMaxCompressionAtTempMin: number, oTMaxCompressionAtTempMax: number, oTMaxGlandFillAtTempMin: number, oTMaxGlandFillAtTempMax: number;

                                                if (CalculatorOption.WithMinMax === (+inputOption)) {
                                                    // compression at temp Max
                                                    oTMaxCompressionAtTempMin = eval(glandDetails[0].compressionAtTemp.min.formula);
                                                    oTMaxCompressionAtTempMin = output.oTMaxCompressionAtTempMin = parseFloat(oTMaxCompressionAtTempMin.toFixed(1));

                                                    if ((+oTMaxCompressionAtTempMin) > compressionMaxRange || (+oTMaxCompressionAtTempMin) < compressionMinforMin) { //compressionMinRange
                                                        rule[i] = {
                                                            'field': 'oTMaxCompressionAtTempMin',
                                                            'title': 'Compression at Temperature: ',
                                                            'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }

                                                    if (parseFloat(oTMaxCompressionAtTempMin.toString()) < 0) {
                                                        output.oTMaxCompressionAtTempMin = oTMaxCompressionAtTempMin = 0;
                                                    }

                                                    // compression at temp Max
                                                    oTMaxCompressionAtTempMax = eval(glandDetails[0].compressionAtTemp.max.formula);
                                                    oTMaxCompressionAtTempMax = output.oTMaxCompressionAtTempMax = parseFloat(oTMaxCompressionAtTempMax.toFixed(1));

                                                    if (data.calculationType == 'glandSizing') {
                                                        compressionMinRange = 20;
                                                    }

                                                    if ((+oTMaxCompressionAtTempMax) > compressionMaxRange || (+oTMaxCompressionAtTempMax) < compressionMinRange) {
                                                        rule[i] = {
                                                            'field': 'oTMaxCompressionAtTempMax',
                                                            'title': 'Compression at Temperature: ',
                                                            'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }

                                                    if (parseFloat(oTMaxCompressionAtTempMax.toString()) < 0) {
                                                        output.oTMaxCompressionAtTempMax = oTMaxCompressionAtTempMax = 0;
                                                    }

                                                    // glandFill at temp Min
                                                    oTMaxGlandFillAtTempMin = eval(glandDetails[0].glandFillAtTemp.min.formula);
                                                    oTMaxGlandFillAtTempMin = output.oTMaxGlandFillAtTempMin = parseFloat(oTMaxGlandFillAtTempMin.toFixed(1));
                                                    if (oTMaxGlandFillAtTempMin > glandfillMaxRange) {
                                                        rule[i] = {
                                                            'field': 'oTMaxGlandFillAtTempMin',
                                                            'title': 'Gland Fill at Temperature: ',
                                                            'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }

                                                    // glandFill at temp Max
                                                    oTMaxGlandFillAtTempMax = eval(glandDetails[0].glandFillAtTemp.max.formula);
                                                    oTMaxGlandFillAtTempMax = output.oTMaxGlandFillAtTempMax = parseFloat(oTMaxGlandFillAtTempMax.toFixed(1));
                                                    if (oTMaxGlandFillAtTempMax > 95) {
                                                        rule[i] = {
                                                            'field': 'oTMaxGlandFillAtTempMax',
                                                            'title': 'Gland Fill at Temperature: ',
                                                            'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.'
                                                        };
                                                        i++;
                                                    }
                                                }
                                            }
                                            // end of operating temperature Max  condition
                                        } // end of oringIdTolerance condition

                                        output.unit = data.unit; // add ***
                                        output.unitTemp = data.unitTemp; // add ***
                                        output.inputOption = data.inputOption; // add ***

                                        if (data.rectangleType) {
                                            output.rectangleType = data.rectangleType;
                                        }

                                        if (CalculatorOption.WithTolerance === (+data.inputOption)) {
                                            output.glandWidthTolerance = parseFloat(data.glandWidthTolerance);
                                            output.glandDepthTolerance = parseFloat(data.glandDepthTolerance);
                                            output.bottomRadiiTolerance = parseFloat(data.bottomRadiiTolerance);
                                            output.gapTolerance = parseFloat(data.gapTolerance);
                                            if (data.glandIdTolerance) {
                                                output.glandIdTolerance = parseFloat(data.glandIdTolerance);
                                            }
                                            if (data.glandODTolerance) {
                                                output.glandODTolerance = parseFloat(data.glandODTolerance);
                                            }
                                        }

                                        // output.ctedata = data.ctedata;
                                        output.materialCteNominal = data.materialCteNominal;

                                        if (data.operatingTemperatureNominal) {
                                            output.operatingTemperatureNominal = parseFloat(data.operatingTemperatureNominal.toString());
                                        }

                                        if (data.operatingTemperatureMin) {
                                            output.operatingTemperatureMin = parseFloat(data.operatingTemperatureMin.toString());
                                        }

                                        if (data.operatingTemperatureMax) {
                                            output.operatingTemperatureMax = parseFloat(data.operatingTemperatureMax.toString());
                                        }

                                        /* following two condition add for rectangle gland*/
                                        if (data.dashSize) {
                                            output.dashSize = parseFloat(data.dashSize);
                                        }
                                        if (data.glandIdTolerance) {
                                            output.glandIdTolerance = parseFloat(data.glandIdTolerance);
                                        }
                                        if (oringIdToleranceNominal !== 0) {
                                            if (data.operatingTemperatureNominal) {
                                                output.operatingTemperatureNominal = parseFloat(data.operatingTemperatureNominal.toString());
                                                output.tempCNominal = convertToDecimal((+data.unit), tempCNominal);
                                            }
                                        }// end of oringtolerance condition
                                        if (rule.length != 0) {
                                            output.error = rule;
                                        }
                                        if (warning.length != 0) {
                                            output.warning = warning;
                                        }
                                        return resolve({ 'data': output });
                                    } // end of else oring id tolerance    
                                }
                            ); // end func oring id tolerance
                        }//end else of oring cross toleranceN
                    });
                } // end of else
            });
        });
    }

    private callbackOringAndGlandDetails(err: NativeError, cursor: any[]): IORingSizes[] {
        let output: IORingSizes[] = [];
        if (err) {
            this.logger.error('🔥 error: File [O-Ring-gland-Analysis-cal.service]   %o', err);
            throw new Error(getErrorMessage(err));
        } else {
            cursor.forEach(function (data: { dashSize: any; oringCrossSectionSize: any; oringDiameterSize: any; internalVacuumGlandIdSize: any; internalVacuumGlandIdTolerance: any; }) {
                // old code
                let obj: IORingSizes = {
                    dashSize: data.dashSize,
                    oringCrossSectionSize: data.oringCrossSectionSize,
                    oringDiameterSize: data.oringDiameterSize,
                    glandIdSize: data.internalVacuumGlandIdSize,
                    glandIdTolerance: data.internalVacuumGlandIdTolerance
                };

                output.push(obj);
            });
        }
        return output;
    }

    /* O-Ring Dovetail Gland - Vacuum Only */
    public async createDovetailOring(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.logger.info('[O-Ring-gland-Analysis-cal.service] createDovetailOring called.');
            /* error and warning title and messages */
            const radiiSlippingOutOfGrooveWarningTitle = "Gland Width, Top Radii, O-ring Cross Section: ";
            const radiiSlippingOutOfGrooveWarningMessage = "Gland width at maximum condition + top radius at maximum condition with o-ring at minimum cross section could result in the o-ring slipping out of the groove.";

            let output: any = {};
            let query: DocumentQuery<(ICalculationTypeMaster & Document)[], ICalculationTypeMaster & Document, {}>;
            query = this.calculationTypeMasterModel.find({ 'calType': 'dovetailGland' }).sort('-calType');
            query.exec((err, glandDetails: any) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    // Donot remove unused variables
                    // unused variables is used by formula's and internal calculation
                    // const math = mathjs;
                    let glandWidthNominal = output.glandWidthNominal = parseFloat(data.glandWidthNominal);
                    let glandDepthNominal = output.glandDepthNominal = parseFloat(data.glandDepthNominal);
                    let glandAngleNominal = output.glandAngleNominal = parseFloat(data.glandAngleNominal);
                    let topRadiiNominal = output.topRadiiNominal = parseFloat(data.topRadiiNominal);
                    let bottomRadiiNominal = output.bottomRadiiNominal = parseFloat(data.bottomRadiiNominal);
                    let gapNominal = output.gapNominal = parseFloat(data.gapNominal);
                    let glandCenterlineNominal = output.glandCenterlineNominal = parseFloat(data.glandCenterlineNominal);
                    let inputOption: number = (+data.inputOption);
                    let compressionMinRange = 15;
                    const compressionMaxRange = 25;
                    let glandfillMaxRange = 95;
                    let compressionMinforMin = 15;

                    if (data.calculationType == 'glandSizing') {
                        compressionMinRange = 12;
                        glandfillMaxRange = 90;
                        compressionMinforMin = -1000;
                    }
                    if ((+data.inputOption) === CalculatorOption.WithTolerance) {
                        inputOption = CalculatorOption.WithMinMax;
                    }
                    let glandWidthMin: number, glandWidthMax: number, glandDepthMin: number,
                        glandDepthMax: number;
                    let glandAngleMin: number, glandAngleMax: number, topRadiiMin: number,
                        topRadiiMax: number;
                    let bottomRadiiMin: number, bottomRadiiMax: number, gapMin: number,
                        gapMax: number, glandCenterlineMin: number;
                    let glandCenterlineMax: number;
                    if (inputOption === CalculatorOption.WithMinMax) {
                        glandWidthMin = output.glandWidthMin = parseFloat(data.glandWidthMin);
                        glandWidthMax = output.glandWidthMax = parseFloat(data.glandWidthMax);
                        glandDepthMin = output.glandDepthMin = parseFloat(data.glandDepthMin);
                        glandDepthMax = output.glandDepthMax = parseFloat(data.glandDepthMax);
                        glandAngleMin = output.glandAngleMin = parseFloat(data.glandAngleMin);
                        glandAngleMax = output.glandAngleMax = parseFloat(data.glandAngleMax);
                        topRadiiMin = output.topRadiiMin = parseFloat(data.topRadiiMin);
                        topRadiiMax = output.topRadiiMax = parseFloat(data.topRadiiMax);
                        bottomRadiiMin = output.bottomRadiiMin = parseFloat(data.bottomRadiiMin);
                        bottomRadiiMax = output.bottomRadiiMax = parseFloat(data.bottomRadiiMax);
                        gapMin = output.gapMin = parseFloat(data.gapMin);
                        gapMax = output.gapMax = parseFloat(data.gapMax);
                        glandCenterlineMin = output.glandCenterlineMin = parseFloat(data.glandCenterlineMin);
                        glandCenterlineMax = output.glandCenterlineMax = parseFloat(data.glandCenterlineMax);
                    }
                    let chermazArray = [1, 2, 3, 7];
                    const oringCrossSectionNominal = output.oringCrossSectionNominal = parseFloat(data.oringCrossSectionNominal);
                    const oringIdNominal = output.oringIdNominal = parseFloat(data.oringIdNominal);
                    const materialCteNominal = parseFloat(data.materialCteNominal.cte);
                    const materialCteMin = parseFloat(data.materialCteNominal.cte);
                    const materialCteMax = parseFloat(data.materialCteNominal.cte);
                    const materialTemp = parseFloat(data.materialCteNominal.maxtemp);
                    let oringCrossSectionToleranceNominal: number;
                    // get cross section tolerance
                    this.getCrossSectionTolerance(oringCrossSectionNominal, (+data.unit)).then((crossSectionResult: oringCrossSection) => {
                        if (err) {
                            throw new Error(getErrorMessage(err));
                        } else {
                            oringCrossSectionToleranceNominal = parseFloat(crossSectionResult.crossSectionTolerance.toString());
                            let oringIdToleranceNominal = parseFloat("0.025");
                            // get oring id tolerances
                            this.getOringIdTolerance(oringCrossSectionNominal, oringIdNominal, (+data.unit)).then(
                                (result: idTolerance) => {
                                    if (err) {
                                        throw new Error(getErrorMessage(err));
                                    } else {
                                        oringIdToleranceNominal = parseFloat(result.idTolerance.toString());
                                        const rule = [];
                                        const warning = [];
                                        let k = 0;
                                        let i = 0;
                                        if (oringIdToleranceNominal === 0) {
                                            rule[i] = {
                                                'field': 'oringIdNominal',
                                                'detail': 'Cannot calculate O-ring cross section Tolerance. Please contact Greene Tweed for assistance if needed.'
                                            };
                                            i++;
                                        }
                                        // calculated value not shown to user
                                        let noRadiiAreaNominal = eval(glandDetails[0].noRadiiArea.nominal.formula);
                                        let topRadiiAreaNominal = eval(glandDetails[0].topRadiiArea.nominal.formula);
                                        let topRadiiAreaTriangleNominal = eval(glandDetails[0].topRadiiAreaTriangle.nominal.formula);
                                        let bottomRadiiAreaNominal = eval(glandDetails[0].bottomRadiiArea.nominal.formula);
                                        let bottomRadiiTriangleNominal = eval(glandDetails[0].bottomRadiiTriangle.nominal.formula);
                                        let gapAreaNominal = eval(glandDetails[0].gapArea.nominal.formula);
                                        let calculatedAreaNoGapNominal = eval(glandDetails[0].calculatedAreaNoGap.nominal.formula);
                                        let calculatedAreaWithGapNominal = eval(glandDetails[0].calculatedAreaWithGap.nominal.formula);
                                        let glandVolumeNominal = eval(glandDetails[0].glandVolume.nominal.formula);
                                        let noRadiiAreaMin: any, noRadiiAreaMax: any, topRadiiAreaMin: any, topRadiiAreaMax: any,
                                            topRadiiAreaTriangleMin: any;
                                        let topRadiiAreaTriangleMax: any, bottomRadiiAreaMin: any, bottomRadiiAreaMax: any,
                                            bottomRadiiTriangleMin: any;
                                        let bottomRadiiTriangleMax: any, gapAreaMin: any, gapAreaMax: any, calculatedAreaNoGapMin: any,
                                            calculatedAreaNoGapMax: any;
                                        let calculatedAreaWithGapMin: any, calculatedAreaWithGapMax: any,
                                            glandVolumeMin: any, glandVolumeMax: any;
                                        let oringCrossSectionMin: number, oringCrossSectionMax: number;

                                        if (inputOption === CalculatorOption.WithMinMax) {
                                            noRadiiAreaMin = eval(glandDetails[0].noRadiiArea.min.formula);
                                            noRadiiAreaMax = eval(glandDetails[0].noRadiiArea.max.formula);
                                            topRadiiAreaMin = eval(glandDetails[0].topRadiiArea.min.formula);
                                            topRadiiAreaMax = eval(glandDetails[0].topRadiiArea.max.formula);
                                            topRadiiAreaTriangleMin = eval(glandDetails[0].topRadiiAreaTriangle.min.formula);
                                            topRadiiAreaTriangleMax = eval(glandDetails[0].topRadiiAreaTriangle.max.formula);
                                            bottomRadiiAreaMin = eval(glandDetails[0].bottomRadiiArea.min.formula);
                                            bottomRadiiAreaMax = eval(glandDetails[0].bottomRadiiArea.max.formula);
                                            bottomRadiiTriangleMin = eval(glandDetails[0].bottomRadiiTriangle.min.formula);
                                            bottomRadiiTriangleMax = eval(glandDetails[0].bottomRadiiTriangle.max.formula);
                                            gapAreaMin = eval(glandDetails[0].gapArea.min.formula);
                                            gapAreaMax = eval(glandDetails[0].gapArea.max.formula);
                                            calculatedAreaNoGapMin = eval(glandDetails[0].calculatedAreaNoGap.min.formula);
                                            calculatedAreaNoGapMax = eval(glandDetails[0].calculatedAreaNoGap.max.formula);
                                            calculatedAreaWithGapMin = eval(glandDetails[0].calculatedAreaWithGap.min.formula);
                                            calculatedAreaWithGapMax = eval(glandDetails[0].calculatedAreaWithGap.max.formula);
                                            glandVolumeMin = eval(glandDetails[0].glandVolume.min.formula);
                                            glandVolumeMax = eval(glandDetails[0].glandVolume.max.formula);
                                            oringCrossSectionMin = eval(glandDetails[0].oringCrossSection.min.formula);
                                            oringCrossSectionMin = parseFloat(oringCrossSectionMin.toFixed(3));
                                            output.oringCrossSectionMin = convertToDecimal((+data.unit), oringCrossSectionMin);
                                            oringCrossSectionMax = eval(glandDetails[0].oringCrossSection.max.formula);
                                            oringCrossSectionMax = parseFloat(oringCrossSectionMax.toFixed(3));
                                            output.oringCrossSectionMax = convertToDecimal((+data.unit), oringCrossSectionMax);
                                        }
                                        if (oringIdToleranceNominal !== 0) {
                                            let oringIdMin: number, oringIdMax: number;
                                            if (inputOption === CalculatorOption.WithMinMax) {
                                                oringIdMin = eval(glandDetails[0].oringId.min.formula);

                                                oringIdMin = parseFloat(oringIdMin.toFixed(3));
                                                output.oringIdMin = convertToDecimal((+data.unit), oringIdMin);
                                                oringIdMax = eval(glandDetails[0].oringId.max.formula);
                                                oringIdMax = parseFloat(oringIdMax.toFixed(3));
                                                output.oringIdMax = convertToDecimal((+data.unit), oringIdMax);
                                                if ((+data.inputOption) === CalculatorOption.WithTolerance) {
                                                    if ((parseFloat(glandWidthMax.toString()) + parseFloat(topRadiiMax.toString())) > parseFloat(oringCrossSectionMin.toString())) {
                                                        warning[k] = { 'field': 'glandWidthTolerance', 'title': radiiSlippingOutOfGrooveWarningTitle, 'type': ErrorTypes.Warning, 'detail': radiiSlippingOutOfGrooveWarningMessage }; k++;
                                                        warning[k] = { 'field': 'topRadiiTolerance', 'title': radiiSlippingOutOfGrooveWarningTitle, 'type': ErrorTypes.Warning, 'detail': radiiSlippingOutOfGrooveWarningMessage }; k++;
                                                        warning[k] = { 'field': 'oringCrossSectionMin', 'title': radiiSlippingOutOfGrooveWarningTitle, 'type': ErrorTypes.Warning, 'detail': radiiSlippingOutOfGrooveWarningMessage };
                                                        k++;
                                                    }
                                                } else if ((+data.inputOption) === CalculatorOption.WithMinMax) {
                                                    if ((parseFloat(glandWidthMax.toString()) + parseFloat(topRadiiMax.toString())) > parseFloat(oringCrossSectionMin.toString())) {
                                                        warning[k] = { 'field': 'glandWidthMax', 'title': radiiSlippingOutOfGrooveWarningTitle, 'type': ErrorTypes.Warning, 'detail': radiiSlippingOutOfGrooveWarningMessage }; k++;
                                                        warning[k] = { 'field': 'topRadiiMax', 'title': radiiSlippingOutOfGrooveWarningTitle, 'type': ErrorTypes.Warning, 'detail': radiiSlippingOutOfGrooveWarningMessage }; k++;
                                                        warning[k] = { 'field': 'oringCrossSectionMin', 'title': radiiSlippingOutOfGrooveWarningTitle, 'type': ErrorTypes.Warning, 'detail': radiiSlippingOutOfGrooveWarningMessage };
                                                        k++;
                                                    }
                                                }
                                            }
                                            if ((+data.inputOption) === CalculatorOption.Nominal) {
                                                if ((parseFloat(glandWidthNominal.toString()) + parseFloat(topRadiiNominal.toString())) > parseFloat(oringCrossSectionNominal.toString())) {
                                                    warning[k] = { 'field': 'glandWidthNominal', 'title': radiiSlippingOutOfGrooveWarningTitle, 'type': ErrorTypes.Warning, 'detail': radiiSlippingOutOfGrooveWarningMessage }; k++;
                                                    warning[k] = { 'field': 'topRadiiNominal', 'title': radiiSlippingOutOfGrooveWarningTitle, 'type': ErrorTypes.Warning, 'detail': radiiSlippingOutOfGrooveWarningMessage }; k++;
                                                    warning[k] = { 'field': 'oringCrossSectionNominal', 'title': radiiSlippingOutOfGrooveWarningTitle, 'type': ErrorTypes.Warning, 'detail': radiiSlippingOutOfGrooveWarningMessage };
                                                    k++;
                                                }
                                            }

                                            let stretchCalculationNominal = eval(glandDetails[0].stretchCalculation.nominal.formula);
                                            stretchCalculationNominal = output.stretchCalculationNominal = parseFloat(stretchCalculationNominal.toFixed(1));
                                            if (!(stretchCalculationNominal >= 0 && stretchCalculationNominal <= 3) && oringIdNominal >= 1) {
                                                rule[i] = { 'field': 'stretchCalculationNominal', 'title': 'Stretch Calculation at Ambient Temperature: ', 'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.' };
                                                i++;
                                            }
                                            if (!(stretchCalculationNominal >= 0 && stretchCalculationNominal <= 3) && oringIdNominal < 1) {
                                                rule[i] = { 'field': 'stretchCalculationNominal', 'title': 'Stretch Calculation at Ambient Temperature: ', 'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.' };
                                                i++;
                                            }

                                            let stretchCalculationMin: number, stretchCalculationMax: number;
                                            if (inputOption === CalculatorOption.WithMinMax) {
                                                stretchCalculationMin = eval(glandDetails[0].stretchCalculation.min.formula);
                                                stretchCalculationMin = output.stretchCalculationMin = parseFloat(stretchCalculationMin.toFixed(1));
                                                if (!(stretchCalculationMin >= 0 && stretchCalculationMin <= 3)) {
                                                    rule[i] = { 'field': 'stretchCalculationMin', 'title': 'Stretch Calculation at Ambient Temperature: ', 'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                stretchCalculationMax = eval(glandDetails[0].stretchCalculation.max.formula);

                                                stretchCalculationMax = output.stretchCalculationMax = parseFloat(stretchCalculationMax.toFixed(1));
                                                if (!(stretchCalculationMax >= 0 && stretchCalculationMax <= 3)) {
                                                    rule[i] = { 'field': 'stretchCalculationMax', 'title': 'Stretch Calculation at Ambient Temperature: ', 'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                            }
                                            let oringAreaNominal = eval(glandDetails[0].oringArea.nominal.formula);
                                            let oringVolumeNominal = eval(glandDetails[0].oringVolume.nominal.formula);

                                            let oringAreaMin: any, oringAreaMax: any, oringVolumeMin: any, oringVolumeMax: any;
                                            if (inputOption === CalculatorOption.WithMinMax) {
                                                oringAreaMin = eval(glandDetails[0].oringArea.min.formula);
                                                oringAreaMax = eval(glandDetails[0].oringArea.max.formula);
                                                oringVolumeMin = eval(glandDetails[0].oringVolume.min.formula);
                                                oringVolumeMax = eval(glandDetails[0].oringVolume.max.formula);
                                            }

                                            let compressionNominal = eval(glandDetails[0].compression.nominal.formula);
                                            compressionNominal = output.compressionNominal = parseFloat(compressionNominal.toFixed(1));
                                            if (compressionNominal > 25 || compressionNominal < 15) {
                                                rule[i] = { 'field': 'compressionNominal', 'title': 'Compression at Ambient Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at ambient temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                i++;
                                            }
                                            if (parseFloat(compressionNominal) < 0)
                                                compressionNominal = output.compressionNominal = 0;
                                            let glandFillNominal = eval(glandDetails[0].glandFill.nominal.formula);
                                            glandFillNominal = output.glandFillNominal = parseFloat(glandFillNominal.toFixed(1));
                                            if (glandFillNominal > 95) {
                                                rule[i] = { 'field': 'glandFillNominal', 'title': 'Gland Fill at Ambient Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at ambient temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                i++;
                                            }
                                            let compressionMin: number, compressionMax: number, glandFillMin: number, glandFillMax: number;
                                            if (inputOption === CalculatorOption.WithMinMax) {
                                                compressionMin = eval(glandDetails[0].compression.min.formula);
                                                compressionMin = output.compressionMin = parseFloat(compressionMin.toFixed(1));

                                                if ((+compressionMin) > 25 || (+compressionMin) < 15) {
                                                    rule[i] = { 'field': 'compressionMin', 'title': 'Compression at Ambient Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at ambient temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(compressionMin.toString()) < 0) {
                                                    compressionMin = output.compressionMin = 0;
                                                }

                                                compressionMax = eval(glandDetails[0].compression.max.formula);
                                                compressionMax = output.compressionMax = parseFloat(compressionMax.toFixed(1));

                                                if ((+compressionMax) > 25 || (+compressionMax) < 15) {
                                                    rule[i] = { 'field': 'compressionMax', 'title': 'Compression at Ambient Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at ambient temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(compressionMax.toString()) < 0) {
                                                    compressionMax = output.compressionMax = 0;
                                                }

                                                glandFillMin = eval(glandDetails[0].glandFill.min.formula);
                                                glandFillMin = output.glandFillMin = parseFloat(glandFillMin.toFixed(1));
                                                if (glandFillMin > 95) {
                                                    rule[i] = { 'field': 'glandFillMin', 'title': 'Gland Fill at Ambient Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at ambient temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }
                                                glandFillMax = eval(glandDetails[0].glandFill.max.formula);
                                                glandFillMax = output.glandFillMax = parseFloat(glandFillMax.toFixed(1));

                                                if (glandFillMax > 95) {
                                                    rule[i] = { 'field': 'glandFillMax', 'title': 'Gland Fill at Ambient Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at ambient temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }
                                            }
                                            let tempCNominal: any;
                                            let tempCMin: any;
                                            let tempCMax: any;
                                            let aOringNominal: any;

                                            // start of operating temperature Nominal  condition
                                            if (data.operatingTemperatureNominal) {
                                                let operatingTemperatureNominal = parseFloat(data.operatingTemperatureNominal);

                                                if (Temperature.FAHRENHEIT === (+(data.unitTemp) as Temperature)) {
                                                    operatingTemperatureNominal = parseFloat(((operatingTemperatureNominal - 32) * 5 / 9).toString());
                                                }

                                                tempCNominal = eval(glandDetails[0].tempC.nominal.formula);
                                                let aOringNominal = eval(glandDetails[0].aOring.nominal.formula);
                                                let vOringNominal = eval(glandDetails[0].vOring.nominal.formula);
                                                let newAreaOringNominal = eval(glandDetails[0].newAreaOring.nominal.formula);
                                                let newOringCrossSectionNominal = eval(glandDetails[0].newOringCrossSection.nominal.formula);
                                                let newOringVolumeNominal = eval(glandDetails[0].newOringVolume.nominal.formula);

                                                let aOringMin: any, aOringMax: any, vOringMin: any,
                                                    vOringMax: any, newAreaOringMin: any, newAreaOringMax: any, newOringCrossSectionMin: any,
                                                    newOringCrossSectionMax: any, newOringVolumeMin: any, newOringVolumeMax: any;
                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    tempCMin = eval(glandDetails[0].tempC.min.formula);
                                                    tempCMax = eval(glandDetails[0].tempC.max.formula);
                                                    aOringMin = eval(glandDetails[0].aOring.min.formula);
                                                    aOringMax = eval(glandDetails[0].aOring.max.formula);
                                                    vOringMin = eval(glandDetails[0].vOring.min.formula);
                                                    vOringMax = eval(glandDetails[0].vOring.max.formula);
                                                    newAreaOringMin = eval(glandDetails[0].newAreaOring.min.formula);
                                                    newAreaOringMax = eval(glandDetails[0].newAreaOring.max.formula);
                                                    newOringCrossSectionMin = eval(glandDetails[0].newOringCrossSection.min.formula);
                                                    newOringCrossSectionMax = eval(glandDetails[0].newOringCrossSection.max.formula);
                                                    newOringVolumeMin = eval(glandDetails[0].newOringVolume.min.formula);
                                                    newOringVolumeMax = eval(glandDetails[0].newOringVolume.max.formula);
                                                }

                                                let compressionAtTempNominal = eval(glandDetails[0].compressionAtTemp.nominal.formula);
                                                compressionAtTempNominal = output.compressionAtTempNominal = parseFloat(compressionAtTempNominal.toFixed(1));
                                                if (compressionAtTempNominal > compressionMaxRange || compressionAtTempNominal < 15) {
                                                    rule[i] = { 'field': 'compressionAtTempNominal', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }
                                                if (parseFloat(compressionAtTempNominal) < 0)
                                                    compressionAtTempNominal = output.compressionAtTempNominal = 0;
                                                let glandFillAtTempNominal = eval(glandDetails[0].glandFillAtTemp.nominal.formula);
                                                glandFillAtTempNominal = output.glandFillAtTempNominal = parseFloat(glandFillAtTempNominal.toFixed(1));
                                                if (glandFillAtTempNominal > glandfillMaxRange) {
                                                    rule[i] = { 'field': 'glandFillAtTempNominal', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                let compressionAtTempMin: number, compressionAtTempMax: number, glandFillAtTempMin: number, glandFillAtTempMax: number;
                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    compressionAtTempMin = eval(glandDetails[0].compressionAtTemp.min.formula);
                                                    compressionAtTempMin = output.compressionAtTempMin = parseFloat(compressionAtTempMin.toFixed(1));
                                                    if ((+compressionAtTempMin) > compressionMaxRange || (+compressionAtTempMin) < compressionMinforMin) { //compressionMinRange
                                                        rule[i] = { 'field': 'compressionAtTempMin', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                    if (parseFloat(compressionAtTempMin.toString()) < 0)
                                                        compressionAtTempMin = output.compressionAtTempMin = 0;
                                                    compressionAtTempMax = eval(glandDetails[0].compressionAtTemp.max.formula);
                                                    compressionAtTempMax = output.compressionAtTempMax = parseFloat(compressionAtTempMax.toFixed(1));
                                                    if (data.calculationType == 'glandSizing')
                                                        compressionMinRange = 20;
                                                    if ((+compressionAtTempMax) > compressionMaxRange || (+compressionAtTempMax) < compressionMinRange) {
                                                        rule[i] = { 'field': 'compressionAtTempMax', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                    if (parseFloat(compressionAtTempMax.toString()) < 0)
                                                        compressionAtTempMax = output.compressionAtTempMax = 0;
                                                    glandFillAtTempMin = eval(glandDetails[0].glandFillAtTemp.min.formula);
                                                    glandFillAtTempMin = output.glandFillAtTempMin = parseFloat(glandFillAtTempMin.toFixed(1));
                                                    if (glandFillAtTempMin > glandfillMaxRange) {
                                                        rule[i] = { 'field': 'glandFillAtTempMin', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                    glandFillAtTempMax = eval(glandDetails[0].glandFillAtTemp.max.formula);
                                                    glandFillAtTempMax = output.glandFillAtTempMax = parseFloat(glandFillAtTempMax.toFixed(1));
                                                    if (glandFillAtTempMax > 95) {
                                                        rule[i] = { 'field': 'glandFillAtTempMax', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                } // end of with min max condition

                                            }
                                            // end of operating temperature Nominal  condition

                                            // start of operating temperature Min  condition
                                            if (data.operatingTemperatureMin) {
                                                let operatingTemperatureNominal = parseFloat(data.operatingTemperatureMin);

                                                if (Temperature.FAHRENHEIT === (+(data.unitTemp) as Temperature)) {
                                                    operatingTemperatureNominal = parseFloat(((operatingTemperatureNominal - 32) * 5 / 9).toString());
                                                }

                                                tempCNominal = eval(glandDetails[0].tempC.nominal.formula);
                                                let aOringNominal = eval(glandDetails[0].aOring.nominal.formula);
                                                let vOringNominal = eval(glandDetails[0].vOring.nominal.formula);
                                                let newAreaOringNominal = eval(glandDetails[0].newAreaOring.nominal.formula);
                                                let newOringCrossSectionNominal = eval(glandDetails[0].newOringCrossSection.nominal.formula);
                                                let newOringVolumeNominal = eval(glandDetails[0].newOringVolume.nominal.formula);

                                                let aOringMin: any, aOringMax: any, vOringMin: any,
                                                    vOringMax: any, newAreaOringMin: any, newAreaOringMax: any,
                                                    newOringCrossSectionMin: any, newOringCrossSectionMax: any,
                                                    newOringVolumeMin: any, newOringVolumeMax: any;
                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    tempCMin = eval(glandDetails[0].tempC.min.formula);
                                                    tempCMax = eval(glandDetails[0].tempC.max.formula);
                                                    aOringMin = eval(glandDetails[0].aOring.min.formula);
                                                    aOringMax = eval(glandDetails[0].aOring.max.formula);
                                                    vOringMin = eval(glandDetails[0].vOring.min.formula);
                                                    vOringMax = eval(glandDetails[0].vOring.max.formula);
                                                    newAreaOringMin = eval(glandDetails[0].newAreaOring.min.formula);
                                                    newAreaOringMax = eval(glandDetails[0].newAreaOring.max.formula);
                                                    newOringCrossSectionMin = eval(glandDetails[0].newOringCrossSection.min.formula);
                                                    newOringCrossSectionMax = eval(glandDetails[0].newOringCrossSection.max.formula);
                                                    newOringVolumeMin = eval(glandDetails[0].newOringVolume.min.formula);
                                                    newOringVolumeMax = eval(glandDetails[0].newOringVolume.max.formula);
                                                }

                                                let oTMinCompressionAtTempNominal = eval(glandDetails[0].compressionAtTemp.nominal.formula);
                                                oTMinCompressionAtTempNominal = output.oTMinCompressionAtTempNominal = parseFloat(oTMinCompressionAtTempNominal.toFixed(1));
                                                if (oTMinCompressionAtTempNominal > compressionMaxRange || oTMinCompressionAtTempNominal < 15) {
                                                    rule[i] = { 'field': 'oTMinCompressionAtTempNominal', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(oTMinCompressionAtTempNominal) < 0) {
                                                    oTMinCompressionAtTempNominal = output.oTMinCompressionAtTempNominal = 0;
                                                }

                                                let oTMinGlandFillAtTempNominal = eval(glandDetails[0].glandFillAtTemp.nominal.formula);
                                                oTMinGlandFillAtTempNominal = output.oTMinGlandFillAtTempNominal = parseFloat(oTMinGlandFillAtTempNominal.toFixed(1));
                                                if (oTMinGlandFillAtTempNominal > glandfillMaxRange) {
                                                    rule[i] = { 'field': 'oTMinGlandFillAtTempNominal', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                let oTMinCompressionAtTempMin: number, oTMinCompressionAtTempMax: number, oTMinGlandFillAtTempMin: number, oTMinGlandFillAtTempMax: number;
                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    oTMinCompressionAtTempMin = eval(glandDetails[0].compressionAtTemp.min.formula);
                                                    oTMinCompressionAtTempMin = output.oTMinCompressionAtTempMin = parseFloat(oTMinCompressionAtTempMin.toFixed(1));
                                                    if ((+oTMinCompressionAtTempMin) > compressionMaxRange || (+oTMinCompressionAtTempMin) < compressionMinforMin) { //compressionMinRange
                                                        rule[i] = { 'field': 'oTMinCompressionAtTempMin', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    if (parseFloat(oTMinCompressionAtTempMin.toString()) < 0) {
                                                        oTMinCompressionAtTempMin = output.oTMinCompressionAtTempMin = 0;
                                                    }

                                                    oTMinCompressionAtTempMax = eval(glandDetails[0].compressionAtTemp.max.formula);
                                                    oTMinCompressionAtTempMax = output.oTMinCompressionAtTempMax = parseFloat(oTMinCompressionAtTempMax.toFixed(1));
                                                    if (data.calculationType == 'glandSizing')
                                                        compressionMinRange = 20;
                                                    if ((+oTMinCompressionAtTempMax) > compressionMaxRange || (+oTMinCompressionAtTempMax) < compressionMinRange) {
                                                        rule[i] = { 'field': 'oTMinCompressionAtTempMax', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                    if (parseFloat(oTMinCompressionAtTempMax.toString()) < 0) {
                                                        oTMinCompressionAtTempMax = output.oTMinCompressionAtTempMax = 0;
                                                    }

                                                    oTMinGlandFillAtTempMin = eval(glandDetails[0].glandFillAtTemp.min.formula);
                                                    oTMinGlandFillAtTempMin = output.oTMinGlandFillAtTempMin = parseFloat(oTMinGlandFillAtTempMin.toFixed(1));
                                                    if (oTMinGlandFillAtTempMin > glandfillMaxRange) {
                                                        rule[i] = { 'field': 'oTMinGlandFillAtTempMin', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                    oTMinGlandFillAtTempMax = eval(glandDetails[0].glandFillAtTemp.max.formula);
                                                    oTMinGlandFillAtTempMax = output.oTMinGlandFillAtTempMax = parseFloat(oTMinGlandFillAtTempMax.toFixed(1));
                                                    if (oTMinGlandFillAtTempMax > 95) {
                                                        rule[i] = { 'field': 'oTMinGlandFillAtTempMax', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                } // end of with min max condition
                                            }
                                            // end of operating temperature Min  condition

                                            // start of operating temperature Max  condition
                                            if (data.operatingTemperatureMax) {
                                                let operatingTemperatureNominal = parseFloat(data.operatingTemperatureMax);

                                                if (Temperature.FAHRENHEIT === (+(data.unitTemp) as Temperature)) {
                                                    operatingTemperatureNominal = parseFloat(((operatingTemperatureNominal - 32) * 5 / 9).toString());
                                                }

                                                tempCNominal = eval(glandDetails[0].tempC.nominal.formula);
                                                let aOringNominal = eval(glandDetails[0].aOring.nominal.formula);
                                                let vOringNominal = eval(glandDetails[0].vOring.nominal.formula);
                                                let newAreaOringNominal = eval(glandDetails[0].newAreaOring.nominal.formula);
                                                let newOringCrossSectionNominal = eval(glandDetails[0].newOringCrossSection.nominal.formula);
                                                let newOringVolumeNominal = eval(glandDetails[0].newOringVolume.nominal.formula);

                                                let aOringMin: any, aOringMax: any, vOringMin: any, vOringMax: any,
                                                    newAreaOringMin: any, newAreaOringMax: any, newOringCrossSectionMin: any,
                                                    newOringCrossSectionMax: any, newOringVolumeMin: any, newOringVolumeMax: any;
                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    tempCMin = eval(glandDetails[0].tempC.min.formula);
                                                    tempCMax = eval(glandDetails[0].tempC.max.formula);
                                                    aOringMin = eval(glandDetails[0].aOring.min.formula);
                                                    aOringMax = eval(glandDetails[0].aOring.max.formula);
                                                    vOringMin = eval(glandDetails[0].vOring.min.formula);
                                                    vOringMax = eval(glandDetails[0].vOring.max.formula);
                                                    newAreaOringMin = eval(glandDetails[0].newAreaOring.min.formula);
                                                    newAreaOringMax = eval(glandDetails[0].newAreaOring.max.formula);
                                                    newOringCrossSectionMin = eval(glandDetails[0].newOringCrossSection.min.formula);
                                                    newOringCrossSectionMax = eval(glandDetails[0].newOringCrossSection.max.formula);
                                                    newOringVolumeMin = eval(glandDetails[0].newOringVolume.min.formula);
                                                    newOringVolumeMax = eval(glandDetails[0].newOringVolume.max.formula);
                                                }

                                                let oTMaxCompressionAtTempNominal = eval(glandDetails[0].compressionAtTemp.nominal.formula);
                                                oTMaxCompressionAtTempNominal = output.oTMaxCompressionAtTempNominal = parseFloat(oTMaxCompressionAtTempNominal.toFixed(1));
                                                if (oTMaxCompressionAtTempNominal > compressionMaxRange || oTMaxCompressionAtTempNominal < 15) {
                                                    rule[i] = { 'field': 'oTMaxCompressionAtTempNominal', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(oTMaxCompressionAtTempNominal) < 0) {
                                                    oTMaxCompressionAtTempNominal = output.oTMaxCompressionAtTempNominal = 0;
                                                }

                                                let oTMaxGlandFillAtTempNominal = eval(glandDetails[0].glandFillAtTemp.nominal.formula);
                                                oTMaxGlandFillAtTempNominal = output.oTMaxGlandFillAtTempNominal = parseFloat(oTMaxGlandFillAtTempNominal.toFixed(1));
                                                if (oTMaxGlandFillAtTempNominal > glandfillMaxRange) {
                                                    rule[i] = { 'field': 'oTMaxGlandFillAtTempNominal', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                let oTMaxCompressionAtTempMin: number, oTMaxCompressionAtTempMax: number, oTMaxGlandFillAtTempMin: number, oTMaxGlandFillAtTempMax: number;
                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    oTMaxCompressionAtTempMin = eval(glandDetails[0].compressionAtTemp.min.formula);
                                                    oTMaxCompressionAtTempMin = output.oTMaxCompressionAtTempMin = parseFloat(oTMaxCompressionAtTempMin.toFixed(1));
                                                    if ((+oTMaxCompressionAtTempMin) > compressionMaxRange || (+oTMaxCompressionAtTempMin) < compressionMinforMin) { //compressionMinRange
                                                        rule[i] = { 'field': 'oTMaxCompressionAtTempMin', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                    if (parseFloat(oTMaxCompressionAtTempMin.toString()) < 0) {
                                                        oTMaxCompressionAtTempMin = output.oTMaxCompressionAtTempMin = 0;
                                                    }

                                                    oTMaxCompressionAtTempMax = eval(glandDetails[0].compressionAtTemp.max.formula);
                                                    oTMaxCompressionAtTempMax = output.oTMaxCompressionAtTempMax = parseFloat(oTMaxCompressionAtTempMax.toFixed(1));
                                                    if (data.calculationType == 'glandSizing')
                                                        compressionMinRange = 20;
                                                    if ((+oTMaxCompressionAtTempMax) > compressionMaxRange || (+oTMaxCompressionAtTempMax) < compressionMinRange) {
                                                        rule[i] = { 'field': 'oTMaxCompressionAtTempMax', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                    if (parseFloat(oTMaxCompressionAtTempMax.toString()) < 0) {
                                                        oTMaxCompressionAtTempMax = output.oTMaxCompressionAtTempMax = 0;
                                                    }

                                                    oTMaxGlandFillAtTempMin = eval(glandDetails[0].glandFillAtTemp.min.formula);
                                                    oTMaxGlandFillAtTempMin = output.oTMaxGlandFillAtTempMin = parseFloat(oTMaxGlandFillAtTempMin.toFixed(1));
                                                    if (oTMaxGlandFillAtTempMin > glandfillMaxRange) {
                                                        rule[i] = { 'field': 'oTMaxGlandFillAtTempMin', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                    oTMaxGlandFillAtTempMax = eval(glandDetails[0].glandFillAtTemp.max.formula);
                                                    oTMaxGlandFillAtTempMax = output.oTMaxGlandFillAtTempMax = parseFloat(oTMaxGlandFillAtTempMax.toFixed(1));
                                                    if (oTMaxGlandFillAtTempMax > 95) {
                                                        rule[i] = { 'field': 'oTMaxGlandFillAtTempMax', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                } // end of with min max condition

                                            }
                                            // end of operating temperature Max  condition

                                        } // end of oringIdTolerance condition          
                                        output.unit = data.unit; // add ***
                                        output.unitTemp = data.unitTemp; // add ***
                                        output.inputOption = data.inputOption; // add *** 
                                        if ((+data.inputOption) === CalculatorOption.WithTolerance) {
                                            output.glandWidthTolerance = parseFloat(data.glandWidthTolerance);
                                            output.glandDepthTolerance = parseFloat(data.glandDepthTolerance);
                                            output.glandAngleTolerance = parseFloat(data.glandAngleTolerance);
                                            output.bottomRadiiTolerance = parseFloat(data.bottomRadiiTolerance);
                                            output.topRadiiTolerance = parseFloat(data.topRadiiTolerance);
                                            output.gapTolerance = parseFloat(data.gapTolerance);
                                            output.glandCenterlineTolerance = parseFloat(data.glandCenterlineTolerance);
                                        }
                                        output.ctedata = data.ctedata;
                                        output.materialCteNominal = data.materialCteNominal;
                                        if (data.operatingTemperatureNominal || data.operatingTemperatureNominal == 0) {
                                            output.operatingTemperatureNominal = parseFloat(data.operatingTemperatureNominal);
                                        }
                                        if (oringIdToleranceNominal !== 0) {
                                            if (data.operatingTemperatureNominal) {
                                                output.operatingTemperatureNominal = parseFloat(data.operatingTemperatureNominal);
                                            }
                                        } // end of oringtolerance condition
                                        if (rule.length != 0) {
                                            output.error = rule;
                                        }
                                        if (warning.length != 0) {
                                            output.warning = warning;
                                        }
                                        return resolve({ 'data': output });
                                    } // end of else oring id tolerance
                                }) // end func oring id tolerance
                        }//end else of oring cross toleranceN
                    });  //end func of oring cross toleranceN
                }  // end of else
            });
        });
    }

    /* O-Ring Half Dovetail Gland - Internal Vacuum Only */
    public async createHalfDovetailOringInternalVacuumOnly(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.logger.info('[O-Ring-gland-Analysis-cal.service] createHalfDovetailOringInternalVacuumOnly called.');
            let output: any = {};
            let query: DocumentQuery<(ICalculationTypeMaster & Document)[], ICalculationTypeMaster & Document, {}>;

            query = this.calculationTypeMasterModel.find({ 'calType': 'halfDovetailGland' }).sort('-calType');
            query.exec((err, glandDetails: any) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    let glandWidthNominal = output.glandWidthNominal = parseFloat(data.glandWidthNominal);
                    let glandDepthNominal = output.glandDepthNominal = parseFloat(data.glandDepthNominal);
                    let glandAngleNominal = output.glandAngleNominal = parseFloat(data.glandAngleNominal);
                    let topRadiiNominal = output.topRadiiNominal = parseFloat(data.topRadiiNominal);
                    let bottomRadiiNominal = output.bottomRadiiNominal = parseFloat(data.bottomRadiiNominal);
                    let gapNominal = output.gapNominal = parseFloat(data.gapNominal);
                    let glandCenterlineNominal = output.glandCenterlineNominal = parseFloat(data.glandCenterlineNominal);
                    let inputOption = (+data.inputOption);
                    let compressionMinRange = 15;
                    const compressionMaxRange = 25;
                    let glandfillMaxRange = 95;
                    let compressionMinforMin = 15;

                    if (data.calculationType == 'glandSizing') {
                        compressionMinRange = 12;
                        glandfillMaxRange = 90;
                        compressionMinforMin = -1000;
                    }

                    if ((+data.inputOption) === CalculatorOption.WithTolerance) {
                        inputOption = CalculatorOption.WithMinMax;
                    }

                    let glandWidthMin: number, glandWidthMax: number, glandDepthMin: number,
                        glandDepthMax: number;
                    let glandAngleMin: number, glandAngleMax: number, topRadiiMin: number,
                        topRadiiMax: number;
                    let bottomRadiiMin: number, bottomRadiiMax: number, gapMin: number,
                        gapMax: number, glandCenterlineMin: number;
                    let glandCenterlineMax: number;

                    if (inputOption === CalculatorOption.WithMinMax) {
                        glandWidthMin = output.glandWidthMin = parseFloat(data.glandWidthMin);
                        glandWidthMax = output.glandWidthMax = parseFloat(data.glandWidthMax);
                        glandDepthMin = output.glandDepthMin = parseFloat(data.glandDepthMin);
                        glandDepthMax = output.glandDepthMax = parseFloat(data.glandDepthMax);
                        glandAngleMin = output.glandAngleMin = parseFloat(data.glandAngleMin);
                        glandAngleMax = output.glandAngleMax = parseFloat(data.glandAngleMax);
                        topRadiiMin = output.topRadiiMin = parseFloat(data.topRadiiMin);
                        topRadiiMax = output.topRadiiMax = parseFloat(data.topRadiiMax);
                        bottomRadiiMin = output.bottomRadiiMin = parseFloat(data.bottomRadiiMin);
                        bottomRadiiMax = output.bottomRadiiMax = parseFloat(data.bottomRadiiMax);
                        gapMin = output.gapMin = parseFloat(data.gapMin);
                        gapMax = output.gapMax = parseFloat(data.gapMax);
                        glandCenterlineMin = output.glandCenterlineMin = parseFloat(data.glandCenterlineMin);
                        glandCenterlineMax = output.glandCenterlineMax = parseFloat(data.glandCenterlineMax);
                    }

                    let chermazArray = [1, 2, 3, 7];
                    const oringCrossSectionNominal = output.oringCrossSectionNominal = parseFloat(data.oringCrossSectionNominal);
                    const oringIdNominal = output.oringIdNominal = parseFloat(data.oringIdNominal);
                    const materialCteNominal = parseFloat(data.materialCteNominal.cte);
                    const materialCteMin = parseFloat(data.materialCteNominal.cte);
                    const materialCteMax = parseFloat(data.materialCteNominal.cte);
                    const materialTemp = parseFloat(data.materialCteNominal.maxtemp);
                    let oringCrossSectionToleranceNominal: number;

                    // get cross section tolerance
                    this.getCrossSectionTolerance(oringCrossSectionNominal, (+data.unit)).then((crossSectionResult: oringCrossSection) => {
                        if (err) {
                            throw new Error(getErrorMessage(err));
                        } else {
                            oringCrossSectionToleranceNominal = parseFloat(crossSectionResult.crossSectionTolerance.toString());
                            let oringIdToleranceNominal = parseFloat("0.025");

                            this.getOringIdTolerance(oringCrossSectionNominal, oringIdNominal, (+data.unit)).then(
                                (result: idTolerance) => {
                                    if (err) {
                                        throw new Error(getErrorMessage(err));
                                    } else {
                                        oringIdToleranceNominal = parseFloat(result.idTolerance.toString());
                                        const rule = [];
                                        const warning = [];
                                        let k = 0;
                                        let i = 0;

                                        if (oringIdToleranceNominal === 0) {
                                            rule[i] = {
                                                'field': 'oringIdNominal',
                                                'detail': 'Cannot calculate O-ring cross section Tolerance. Please contact Greene Tweed for assistance if needed.'
                                            };
                                            i++;
                                        }

                                        // calculated value not shown to user
                                        let noRadiiAreaNominal = eval(glandDetails[0].noRadiiArea.nominal.formula);
                                        let topRadiiAreaAngledNominal = eval(glandDetails[0].topRadiiAreaAngled.nominal.formula);
                                        let topRadiiAreaTriangleNominal = eval(glandDetails[0].topRadiiAreaTriangle.nominal.formula);
                                        let topRadiiAreaRectangleNominal = eval(glandDetails[0].topRadiiAreaRectangle.nominal.formula);
                                        let topRadiiAreaSquareNominal = eval(glandDetails[0].topRadiiAreaSquare.nominal.formula);
                                        let bottomRadiiAreaAngledNominal = eval(glandDetails[0].bottomRadiiAreaAngled.nominal.formula);
                                        let bottomRadiiTriangleNominal = eval(glandDetails[0].bottomRadiiTriangle.nominal.formula);
                                        let bottomRadiiAreaRectangleNominal = eval(glandDetails[0].bottomRadiiAreaRectangle.nominal.formula);
                                        let bottomRadiiAreaSquareNominal = eval(glandDetails[0].bottomRadiiAreaSquare.nominal.formula);
                                        let gapAreaNominal = eval(glandDetails[0].gapArea.nominal.formula);
                                        let calculatedAreaNoGapNominal = eval(glandDetails[0].calculatedAreaNoGap.nominal.formula);
                                        let calculatedAreaWithGapNominal = eval(glandDetails[0].calculatedAreaWithGap.nominal.formula);
                                        // start: centroid calculation
                                        let squareAreaCentroidNominal = eval(glandDetails[0].squareAreaCentroid.nominal.value);
                                        let squareAreaNominal = eval(glandDetails[0].squareArea.nominal.formula);
                                        let triangleAreaCentroidNominal = eval(glandDetails[0].triangleAreaCentroid.nominal.formula);
                                        let triangleAreaNominal = eval(glandDetails[0].triangleArea.nominal.formula);
                                        let xDistAreaInsideTriangles21Nominal = eval(glandDetails[0].xDistAreaInsideTriangles21.nominal.formula);
                                        let xDistAreaInsideTriangles27Nominal = eval(glandDetails[0].xDistAreaInsideTriangles27.nominal.formula);
                                        let centroidInsideTriangles22Nominal = eval(glandDetails[0].centroidInsideTriangles22.nominal.formula);
                                        let centroidInsideTriangles28Nominal = eval(glandDetails[0].centroidInsideTriangles28.nominal.formula);
                                        let xDistAreaInsideTriangles18Nominal = eval(glandDetails[0].xDistAreaInsideTriangles18.nominal.formula);
                                        let centroidOfInsideCircle19Nominal = eval(glandDetails[0].centroidOfInsideCircle19.nominal.formula);
                                        let xDistOfAreaInsideCircle24Nominal = eval(glandDetails[0].xDistOfAreaInsideCircle24.nominal.formula);
                                        let centroidOfInsideCircle25Nominal = eval(glandDetails[0].centroidOfInsideCircle25.nominal.formula);
                                        let centroidInsideSquare32Nominal = eval(glandDetails[0].centroidInsideSquare32.nominal.formula);
                                        let centroidOfInsideCircle30Nominal = eval(glandDetails[0].centroidOfInsideCircle30.nominal.formula);
                                        let centroidInsideSquare36Nominal = eval(glandDetails[0].centroidInsideSquare36.nominal.formula);
                                        let centroidOfInsideCircle34Nominal = eval(glandDetails[0].centroidOfInsideCircle34.nominal.formula);
                                        let centroidNominal = eval(glandDetails[0].centroid.nominal.formula);
                                        // end: centroid calculation
                                        let glandVolumeNominal = eval(glandDetails[0].glandVolume.nominal.formula);
                                        let noRadiiAreaMin: any, noRadiiAreaMax: any, topRadiiAreaAngledMin: any, topRadiiAreaAngledMax: any, topRadiiAreaTriangleMin: any, topRadiiAreaTriangleMax: any, bottomRadiiAreaAngledMin: any, bottomRadiiAreaAngledMax: any, bottomRadiiAreaRectangleMin: any, bottomRadiiAreaRectangleMax: any, bottomRadiiTriangleMin: any, bottomRadiiTriangleMax: any, bottomRadiiAreaSquareMin: any, bottomRadiiAreaSquareMax: any, gapAreaMin: any, gapAreaMax: any, calculatedAreaNoGapMin: any, calculatedAreaNoGapMax: any, calculatedAreaWithGapMin: any, calculatedAreaWithGapMax: any, glandVolumeMin: any, glandVolumeMax: any, oringCrossSectionMin: number, oringCrossSectionMax: number, topRadiiAreaRectangleMin: any, topRadiiAreaRectangleMax: any, topRadiiAreaSquareMin: any, topRadiiAreaSquareMax: any;
                                        if (inputOption === CalculatorOption.WithMinMax) {
                                            noRadiiAreaMin = eval(glandDetails[0].noRadiiArea.min.formula);
                                            noRadiiAreaMax = eval(glandDetails[0].noRadiiArea.max.formula);
                                            topRadiiAreaAngledMin = eval(glandDetails[0].topRadiiAreaAngled.min.formula);
                                            topRadiiAreaAngledMax = eval(glandDetails[0].topRadiiAreaAngled.max.formula);
                                            topRadiiAreaTriangleMin = eval(glandDetails[0].topRadiiAreaTriangle.min.formula);
                                            topRadiiAreaTriangleMax = eval(glandDetails[0].topRadiiAreaTriangle.max.formula);
                                            topRadiiAreaRectangleMin = eval(glandDetails[0].topRadiiAreaRectangle.min.formula);
                                            topRadiiAreaRectangleMax = eval(glandDetails[0].topRadiiAreaRectangle.max.formula);
                                            topRadiiAreaSquareMin = eval(glandDetails[0].topRadiiAreaSquare.min.formula);
                                            topRadiiAreaSquareMax = eval(glandDetails[0].topRadiiAreaSquare.max.formula);
                                            bottomRadiiAreaAngledMin = eval(glandDetails[0].bottomRadiiAreaAngled.min.formula);
                                            bottomRadiiAreaAngledMax = eval(glandDetails[0].bottomRadiiAreaAngled.max.formula);
                                            bottomRadiiAreaRectangleMin = eval(glandDetails[0].bottomRadiiAreaRectangle.min.formula);
                                            bottomRadiiAreaRectangleMax = eval(glandDetails[0].bottomRadiiAreaRectangle.max.formula);
                                            bottomRadiiTriangleMin = eval(glandDetails[0].bottomRadiiTriangle.min.formula);
                                            bottomRadiiTriangleMax = eval(glandDetails[0].bottomRadiiTriangle.max.formula);
                                            bottomRadiiAreaSquareMin = eval(glandDetails[0].bottomRadiiAreaSquare.min.formula);
                                            bottomRadiiAreaSquareMax = eval(glandDetails[0].bottomRadiiAreaSquare.max.formula);
                                            gapAreaMin = eval(glandDetails[0].gapArea.min.formula);
                                            gapAreaMax = eval(glandDetails[0].gapArea.max.formula);
                                            calculatedAreaNoGapMin = eval(glandDetails[0].calculatedAreaNoGap.min.formula);
                                            calculatedAreaNoGapMax = eval(glandDetails[0].calculatedAreaNoGap.max.formula);
                                            calculatedAreaWithGapMin = eval(glandDetails[0].calculatedAreaWithGap.min.formula);
                                            calculatedAreaWithGapMax = eval(glandDetails[0].calculatedAreaWithGap.max.formula);
                                            // start: centroid calculation
                                            // centroid Min

                                            let squareAreaCentroidMin = eval(glandDetails[0].squareAreaCentroid.min.value);
                                            let squareAreaMin = eval(glandDetails[0].squareArea.min.formula);
                                            let triangleAreaCentroidMin = eval(glandDetails[0].triangleAreaCentroid.min.formula);
                                            let triangleAreaMin = eval(glandDetails[0].triangleArea.min.formula);
                                            let xDistAreaInsideTriangles21Min = eval(glandDetails[0].xDistAreaInsideTriangles21.min.formula);
                                            let xDistAreaInsideTriangles27Min = eval(glandDetails[0].xDistAreaInsideTriangles27.min.formula);
                                            let centroidInsideTriangles22Min = eval(glandDetails[0].centroidInsideTriangles22.min.formula);
                                            let centroidInsideTriangles28Min = eval(glandDetails[0].centroidInsideTriangles28.min.formula);
                                            let xDistAreaInsideTriangles18Min = eval(glandDetails[0].xDistAreaInsideTriangles18.min.formula);
                                            let centroidOfInsideCircle19Min = eval(glandDetails[0].centroidOfInsideCircle19.min.formula);
                                            let xDistOfAreaInsideCircle24Min = eval(glandDetails[0].xDistOfAreaInsideCircle24.min.formula);
                                            let centroidOfInsideCircle25Min = eval(glandDetails[0].centroidOfInsideCircle25.min.formula);
                                            let centroidInsideSquare32Min = eval(glandDetails[0].centroidInsideSquare32.min.formula);
                                            let centroidOfInsideCircle30Min = eval(glandDetails[0].centroidOfInsideCircle30.min.formula);
                                            let centroidInsideSquare36Min = eval(glandDetails[0].centroidInsideSquare36.min.formula);
                                            let centroidOfInsideCircle34Min = eval(glandDetails[0].centroidOfInsideCircle34.min.formula);
                                            let centroidMin = eval(glandDetails[0].centroid.min.formula);
                                            // centroid Max
                                            let squareAreaCentroidMax = eval(glandDetails[0].squareAreaCentroid.max.value);
                                            let squareAreaMax = eval(glandDetails[0].squareArea.max.formula);
                                            let triangleAreaCentroidMax = eval(glandDetails[0].triangleAreaCentroid.max.formula);
                                            let triangleAreaMax = eval(glandDetails[0].triangleArea.max.formula);
                                            let xDistAreaInsideTriangles21Max = eval(glandDetails[0].xDistAreaInsideTriangles21.max.formula);
                                            let xDistAreaInsideTriangles27Max = eval(glandDetails[0].xDistAreaInsideTriangles27.max.formula);
                                            let centroidInsideTriangles22Max = eval(glandDetails[0].centroidInsideTriangles22.max.formula);
                                            let centroidInsideTriangles28Max = eval(glandDetails[0].centroidInsideTriangles28.max.formula);
                                            let xDistAreaInsideTriangles18Max = eval(glandDetails[0].xDistAreaInsideTriangles18.max.formula);
                                            let centroidOfInsideCircle19Max = eval(glandDetails[0].centroidOfInsideCircle19.max.formula);
                                            let xDistOfAreaInsideCircle24Max = eval(glandDetails[0].xDistOfAreaInsideCircle24.max.formula);
                                            let centroidOfInsideCircle25Max = eval(glandDetails[0].centroidOfInsideCircle25.max.formula);
                                            let centroidInsideSquare32Max = eval(glandDetails[0].centroidInsideSquare32.max.formula);
                                            let centroidOfInsideCircle30Max = eval(glandDetails[0].centroidOfInsideCircle30.max.formula);
                                            let centroidInsideSquare36Max = eval(glandDetails[0].centroidInsideSquare36.max.formula);
                                            let centroidOfInsideCircle34Max = eval(glandDetails[0].centroidOfInsideCircle34.max.formula);
                                            let centroidMax = eval(glandDetails[0].centroid.max.formula);
                                            // end: centroid calculation

                                            glandVolumeMin = eval(glandDetails[0].glandVolume.min.formula);
                                            glandVolumeMax = eval(glandDetails[0].glandVolume.max.formula);
                                            oringCrossSectionMin = eval(glandDetails[0].oringCrossSection.min.formula);
                                            oringCrossSectionMin = output.oringCrossSectionMin = parseFloat(oringCrossSectionMin.toFixed(3));
                                            oringCrossSectionMax = eval(glandDetails[0].oringCrossSection.max.formula);
                                            oringCrossSectionMax = output.oringCrossSectionMax = parseFloat(oringCrossSectionMax.toFixed(3));
                                        }

                                        if (oringIdToleranceNominal !== 0) {
                                            let oringIdMin: number, oringIdMax: number;
                                            if (inputOption === CalculatorOption.WithMinMax) {
                                                oringIdMin = eval(glandDetails[0].oringId.min.formula);
                                                oringIdMin = output.oringIdMin = parseFloat(oringIdMin.toFixed(3));
                                                oringIdMax = eval(glandDetails[0].oringId.max.formula);
                                                oringIdMax = output.oringIdMax = parseFloat(oringIdMax.toFixed(3));
                                            }

                                            let stretchCalculationNominal = eval(glandDetails[0].stretchCalculation.nominal.formula);
                                            stretchCalculationNominal = output.stretchCalculationNominal = parseFloat(stretchCalculationNominal.toFixed(1));
                                            if (!(stretchCalculationNominal >= 0 && stretchCalculationNominal <= 3) && oringIdNominal >= 1) {
                                                rule[i] = {
                                                    'field': 'stretchCalculationNominal',
                                                    'title': 'Stretch Calculation at Ambient Temperature: ',
                                                    'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.'
                                                };
                                                i++;
                                            }
                                            if (!(stretchCalculationNominal >= 0 && stretchCalculationNominal <= 3) && oringIdNominal < 1) {
                                                rule[i] = {
                                                    'field': 'stretchCalculationNominal',
                                                    'title': 'Stretch Calculation at Ambient Temperature: ',
                                                    'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.'
                                                };
                                                i++;
                                            }
                                            let stretchCalculationMin: number, stretchCalculationMax: number;
                                            if (inputOption === CalculatorOption.WithMinMax) {
                                                stretchCalculationMin = eval(glandDetails[0].stretchCalculation.min.formula);
                                                stretchCalculationMin = output.stretchCalculationMin = parseFloat(stretchCalculationMin.toFixed(1));
                                                if (!(stretchCalculationMin >= 0 && stretchCalculationMin <= 3)) {
                                                    rule[i] = {
                                                        'field': 'stretchCalculationMin',
                                                        'title': 'Stretch Calculation at Ambient Temperature: ',
                                                        'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.'
                                                    };
                                                    i++;
                                                }

                                                stretchCalculationMax = eval(glandDetails[0].stretchCalculation.max.formula);
                                                stretchCalculationMax = output.stretchCalculationMax = parseFloat(stretchCalculationMax.toFixed(1));
                                                if (!(stretchCalculationMax >= 0 && stretchCalculationMax <= 3)) {
                                                    rule[i] = {
                                                        'field': 'stretchCalculationMax',
                                                        'title': 'Stretch Calculation at Ambient Temperature: ',
                                                        'detail': 'Maximum stretch recommended for Chemraz materials is 3%. Stretch above 3% can result in reduced lifetime. Please contact Greene Tweed for assistance if needed.'
                                                    };
                                                    i++;
                                                }

                                            }

                                            let oringAreaNominal = eval(glandDetails[0].oringArea.nominal.formula);
                                            let oringVolumeNominal = eval(glandDetails[0].oringVolume.nominal.formula);
                                            let oringAreaMin: any, oringAreaMax: any, oringVolumeMin: any, oringVolumeMax: any;

                                            if (inputOption === CalculatorOption.WithMinMax) {
                                                oringAreaMin = eval(glandDetails[0].oringArea.min.formula);
                                                oringAreaMax = eval(glandDetails[0].oringArea.max.formula);
                                                oringVolumeMin = eval(glandDetails[0].oringVolume.min.formula);
                                                oringVolumeMax = eval(glandDetails[0].oringVolume.max.formula);
                                            }

                                            let compressionNominal = eval(glandDetails[0].compression.nominal.formula);
                                            compressionNominal = output.compressionNominal = parseFloat(compressionNominal.toFixed(1));
                                            if (compressionNominal > 25 || compressionNominal < 15) {
                                                rule[i] = { 'field': 'compressionNominal', 'title': 'Compression at Ambient Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at ambient temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                i++;
                                            }

                                            if (parseFloat(compressionNominal) < 0) {
                                                compressionNominal = output.compressionNominal = 0;
                                            }

                                            let glandFillNominal = eval(glandDetails[0].glandFill.nominal.formula);
                                            glandFillNominal = output.glandFillNominal = parseFloat(glandFillNominal.toFixed(1));
                                            if (glandFillNominal > 95) {
                                                rule[i] = { 'field': 'glandFillNominal', 'title': 'Gland Fill at Ambient Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at ambient temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                i++;
                                            }

                                            let compressionMin: number, compressionMax: number, glandFillMin: number, glandFillMax: number;
                                            if (inputOption === CalculatorOption.WithMinMax) {
                                                compressionMin = eval(glandDetails[0].compression.min.formula);
                                                compressionMin = output.compressionMin = parseFloat(compressionMin.toFixed(1));
                                                if (compressionMin > 25 || compressionMin < 15) {
                                                    rule[i] = { 'field': 'compressionMin', 'title': 'Compression at Ambient Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at ambient temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(compressionMin.toString()) < 0) {
                                                    compressionMin = output.compressionMin = 0;
                                                }

                                                compressionMax = eval(glandDetails[0].compression.max.formula);
                                                compressionMax = output.compressionMax = parseFloat(compressionMax.toFixed(1));
                                                if (compressionMax > 25 || compressionMax < 15) {
                                                    rule[i] = { 'field': 'compressionMax', 'title': 'Compression at Ambient Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at ambient temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(compressionMax.toString()) < 0) {
                                                    compressionMax = output.compressionMax = 0;
                                                }

                                                glandFillMin = eval(glandDetails[0].glandFill.min.formula);
                                                glandFillMin = output.glandFillMin = parseFloat(glandFillMin.toFixed(1));
                                                if (glandFillMin > 95) {
                                                    rule[i] = { 'field': 'glandFillMin', 'title': 'Gland Fill at Ambient Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at ambient temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                glandFillMax = eval(glandDetails[0].glandFill.max.formula);
                                                glandFillMax = output.glandFillMax = parseFloat(glandFillMax.toFixed(1));
                                                if (glandFillMax > 95) {
                                                    rule[i] = { 'field': 'glandFillMax', 'title': 'Gland Fill at Ambient Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at ambient temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }
                                            }

                                            let tempCNominal: any;
                                            let tempCMin: any;
                                            let tempCMax: any;
                                            let aOringNominal: any;

                                            // start of operating temperature Nominal  condition
                                            if (data.operatingTemperatureNominal) {
                                                let operatingTemperatureNominal = parseFloat(data.operatingTemperatureNominal);

                                                if (Temperature.FAHRENHEIT === (+(data.unitTemp) as Temperature)) {
                                                    operatingTemperatureNominal = parseFloat(((operatingTemperatureNominal - 32) * 5 / 9).toString());
                                                }

                                                tempCNominal = eval(glandDetails[0].tempC.nominal.formula);
                                                let aOringNominal = eval(glandDetails[0].aOring.nominal.formula);
                                                let vOringNominal = eval(glandDetails[0].vOring.nominal.formula);
                                                let newAreaOringNominal = eval(glandDetails[0].newAreaOring.nominal.formula);
                                                let newOringCrossSectionNominal = eval(glandDetails[0].newOringCrossSection.nominal.formula);
                                                let newOringVolumeNominal = eval(glandDetails[0].newOringVolume.nominal.formula);

                                                let aOringMin: any, aOringMax: any, vOringMin: any, vOringMax: any,
                                                    newAreaOringMin: any, newAreaOringMax: any,
                                                    newOringCrossSectionMin: any, newOringCrossSectionMax: any,
                                                    newOringVolumeMin: any, newOringVolumeMax: any;

                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    tempCMin = eval(glandDetails[0].tempC.min.formula);
                                                    tempCMax = eval(glandDetails[0].tempC.max.formula);
                                                    aOringMin = eval(glandDetails[0].aOring.min.formula);
                                                    aOringMax = eval(glandDetails[0].aOring.max.formula);
                                                    vOringMin = eval(glandDetails[0].vOring.min.formula);
                                                    vOringMax = eval(glandDetails[0].vOring.max.formula);
                                                    newAreaOringMin = eval(glandDetails[0].newAreaOring.min.formula);
                                                    newAreaOringMax = eval(glandDetails[0].newAreaOring.max.formula);
                                                    newOringCrossSectionMin = eval(glandDetails[0].newOringCrossSection.min.formula);
                                                    newOringCrossSectionMax = eval(glandDetails[0].newOringCrossSection.max.formula);
                                                    newOringVolumeMin = eval(glandDetails[0].newOringVolume.min.formula);
                                                    newOringVolumeMax = eval(glandDetails[0].newOringVolume.max.formula);
                                                }

                                                let compressionAtTempNominal = eval(glandDetails[0].compressionAtTemp.nominal.formula);
                                                compressionAtTempNominal = output.compressionAtTempNominal = parseFloat(compressionAtTempNominal.toFixed(1));
                                                if (compressionAtTempNominal > compressionMaxRange || compressionAtTempNominal < 15) {
                                                    rule[i] = { 'field': 'compressionAtTempNominal', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(compressionAtTempNominal) < 0) {
                                                    compressionAtTempNominal = output.compressionAtTempNominal = 0;
                                                }

                                                let glandFillAtTempNominal = eval(glandDetails[0].glandFillAtTemp.nominal.formula);
                                                glandFillAtTempNominal = output.glandFillAtTempNominal = parseFloat(glandFillAtTempNominal.toFixed(1));
                                                if (glandFillAtTempNominal > glandfillMaxRange) {
                                                    rule[i] = { 'field': 'glandFillAtTempNominal', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                let compressionAtTempMin: number, compressionAtTempMax: number, glandFillAtTempMin: number,
                                                    glandFillAtTempMax: number;

                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    compressionAtTempMin = eval(glandDetails[0].compressionAtTemp.min.formula);
                                                    compressionAtTempMin = output.compressionAtTempMin = parseFloat(compressionAtTempMin.toFixed(1));
                                                    if (compressionAtTempMin > compressionMaxRange || compressionAtTempMin < compressionMinforMin) { //compressionMinRange
                                                        rule[i] = { 'field': 'compressionAtTempMin', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    if (parseFloat(compressionAtTempMin.toString()) < 0) {
                                                        compressionAtTempMin = output.compressionAtTempMin = 0;
                                                    }

                                                    compressionAtTempMax = eval(glandDetails[0].compressionAtTemp.max.formula);
                                                    compressionAtTempMax = output.compressionAtTempMax = parseFloat(compressionAtTempMax.toFixed(1));

                                                    if (data.calculationType == 'glandSizing') {
                                                        compressionMinRange = 20;
                                                    }

                                                    if (compressionAtTempMax > compressionMaxRange || compressionAtTempMax < compressionMinRange) {
                                                        rule[i] = { 'field': 'compressionAtTempMax', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    if (parseFloat(compressionAtTempMax.toString()) < 0) {
                                                        compressionAtTempMax = output.compressionAtTempMax = 0;
                                                    }

                                                    glandFillAtTempMin = eval(glandDetails[0].glandFillAtTemp.min.formula);
                                                    glandFillAtTempMin = output.glandFillAtTempMin = parseFloat(glandFillAtTempMin.toFixed(1));
                                                    if (glandFillAtTempMin > glandfillMaxRange) {
                                                        rule[i] = { 'field': 'glandFillAtTempMin', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    glandFillAtTempMax = eval(glandDetails[0].glandFillAtTemp.max.formula);
                                                    glandFillAtTempMax = output.glandFillAtTempMax = parseFloat(glandFillAtTempMax.toFixed(1));
                                                    if (glandFillAtTempMax > 95) {
                                                        rule[i] = { 'field': 'glandFillAtTempMax', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                } // end of with min max condition
                                            }
                                            // end of operating temperature Nominal  condition

                                            // start of operating temperature Min  condition
                                            if (data.operatingTemperatureMin) {
                                                let operatingTemperatureNominal = parseFloat(data.operatingTemperatureMin);

                                                if (Temperature.FAHRENHEIT === (+(data.unitTemp) as Temperature)) {
                                                    operatingTemperatureNominal = parseFloat(((operatingTemperatureNominal - 32) * 5 / 9).toString());
                                                }

                                                tempCNominal = eval(glandDetails[0].tempC.nominal.formula);
                                                let aOringNominal = eval(glandDetails[0].aOring.nominal.formula);
                                                let vOringNominal = eval(glandDetails[0].vOring.nominal.formula);
                                                let newAreaOringNominal = eval(glandDetails[0].newAreaOring.nominal.formula);
                                                let newOringCrossSectionNominal = eval(glandDetails[0].newOringCrossSection.nominal.formula);
                                                let newOringVolumeNominal = eval(glandDetails[0].newOringVolume.nominal.formula);

                                                let aOringMin: any, aOringMax: any, vOringMin: any, vOringMax: any,
                                                    newAreaOringMin: any, newAreaOringMax: any,
                                                    newOringCrossSectionMin: any, newOringCrossSectionMax: any,
                                                    newOringVolumeMin: any, newOringVolumeMax: any;

                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    tempCMin = eval(glandDetails[0].tempC.min.formula);
                                                    tempCMax = eval(glandDetails[0].tempC.max.formula);
                                                    aOringMin = eval(glandDetails[0].aOring.min.formula);
                                                    aOringMax = eval(glandDetails[0].aOring.max.formula);
                                                    vOringMin = eval(glandDetails[0].vOring.min.formula);
                                                    vOringMax = eval(glandDetails[0].vOring.max.formula);
                                                    newAreaOringMin = eval(glandDetails[0].newAreaOring.min.formula);
                                                    newAreaOringMax = eval(glandDetails[0].newAreaOring.max.formula);
                                                    newOringCrossSectionMin = eval(glandDetails[0].newOringCrossSection.min.formula);
                                                    newOringCrossSectionMax = eval(glandDetails[0].newOringCrossSection.max.formula);
                                                    newOringVolumeMin = eval(glandDetails[0].newOringVolume.min.formula);
                                                    newOringVolumeMax = eval(glandDetails[0].newOringVolume.max.formula);
                                                }

                                                let oTMinCompressionAtTempNominal = eval(glandDetails[0].compressionAtTemp.nominal.formula);
                                                oTMinCompressionAtTempNominal = output.oTMinCompressionAtTempNominal = parseFloat(oTMinCompressionAtTempNominal.toFixed(1));
                                                if (oTMinCompressionAtTempNominal > compressionMaxRange || oTMinCompressionAtTempNominal < 15) {
                                                    rule[i] = { 'field': 'oTMinCompressionAtTempNominal', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(oTMinCompressionAtTempNominal) < 0) {
                                                    oTMinCompressionAtTempNominal = output.oTMinCompressionAtTempNominal = 0;
                                                }

                                                let oTMinGlandFillAtTempNominal = eval(glandDetails[0].glandFillAtTemp.nominal.formula);
                                                oTMinGlandFillAtTempNominal = output.oTMinGlandFillAtTempNominal = parseFloat(oTMinGlandFillAtTempNominal.toFixed(1));
                                                if (oTMinGlandFillAtTempNominal > glandfillMaxRange) {
                                                    rule[i] = { 'field': 'oTMinGlandFillAtTempNominal', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                let oTMinCompressionAtTempMin: number, oTMinCompressionAtTempMax: number, oTMinGlandFillAtTempMin: number,
                                                    oTMinGlandFillAtTempMax: number;

                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    oTMinCompressionAtTempMin = eval(glandDetails[0].compressionAtTemp.min.formula);
                                                    oTMinCompressionAtTempMin = output.oTMinCompressionAtTempMin = parseFloat(oTMinCompressionAtTempMin.toFixed(1));
                                                    if (oTMinCompressionAtTempMin > compressionMaxRange || oTMinCompressionAtTempMin < compressionMinforMin) { //compressionMinRange
                                                        rule[i] = { 'field': 'oTMinCompressionAtTempMin', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    if (parseFloat(oTMinCompressionAtTempMin.toString()) < 0) {
                                                        oTMinCompressionAtTempMin = output.oTMinCompressionAtTempMin = 0;
                                                    }

                                                    oTMinCompressionAtTempMax = eval(glandDetails[0].compressionAtTemp.max.formula);
                                                    oTMinCompressionAtTempMax = output.oTMinCompressionAtTempMax = parseFloat(oTMinCompressionAtTempMax.toFixed(1));

                                                    if (data.calculationType == 'glandSizing') {
                                                        compressionMinRange = 20;
                                                    }

                                                    if (oTMinCompressionAtTempMax > compressionMaxRange || oTMinCompressionAtTempMax < compressionMinRange) {
                                                        rule[i] = { 'field': 'oTMinCompressionAtTempMax', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    if (parseFloat(oTMinCompressionAtTempMax.toString()) < 0) {
                                                        oTMinCompressionAtTempMax = output.oTMinCompressionAtTempMax = 0;
                                                    }

                                                    oTMinGlandFillAtTempMin = eval(glandDetails[0].glandFillAtTemp.min.formula);
                                                    oTMinGlandFillAtTempMin = output.oTMinGlandFillAtTempMin = parseFloat(oTMinGlandFillAtTempMin.toFixed(1));
                                                    if (oTMinGlandFillAtTempMin > glandfillMaxRange) {
                                                        rule[i] = { 'field': 'oTMinGlandFillAtTempMin', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    oTMinGlandFillAtTempMax = eval(glandDetails[0].glandFillAtTemp.max.formula);
                                                    oTMinGlandFillAtTempMax = output.oTMinGlandFillAtTempMax = parseFloat(oTMinGlandFillAtTempMax.toFixed(1));
                                                    if (oTMinGlandFillAtTempMax > 95) {
                                                        rule[i] = { 'field': 'oTMinGlandFillAtTempMax', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                } // end of with min max condition
                                            }
                                            // end of operating temperature Min  condition

                                            // start of operating temperature Max  condition
                                            if (data.operatingTemperatureMax) {
                                                let operatingTemperatureNominal = parseFloat(data.operatingTemperatureMax);

                                                if (Temperature.FAHRENHEIT === (+(data.unitTemp) as Temperature)) {
                                                    operatingTemperatureNominal = parseFloat(((operatingTemperatureNominal - 32) * 5 / 9).toString());
                                                }

                                                tempCNominal = eval(glandDetails[0].tempC.nominal.formula);
                                                let aOringNominal = eval(glandDetails[0].aOring.nominal.formula);
                                                let vOringNominal = eval(glandDetails[0].vOring.nominal.formula);
                                                let newAreaOringNominal = eval(glandDetails[0].newAreaOring.nominal.formula);
                                                let newOringCrossSectionNominal = eval(glandDetails[0].newOringCrossSection.nominal.formula);
                                                let newOringVolumeNominal = eval(glandDetails[0].newOringVolume.nominal.formula);

                                                let aOringMin: any, aOringMax: any, vOringMin: any, vOringMax: any,
                                                    newAreaOringMin: any, newAreaOringMax: any,
                                                    newOringCrossSectionMin: any, newOringCrossSectionMax: any,
                                                    newOringVolumeMin: any, newOringVolumeMax: any;

                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    tempCMin = eval(glandDetails[0].tempC.min.formula);
                                                    tempCMax = eval(glandDetails[0].tempC.max.formula);
                                                    aOringMin = eval(glandDetails[0].aOring.min.formula);
                                                    aOringMax = eval(glandDetails[0].aOring.max.formula);
                                                    vOringMin = eval(glandDetails[0].vOring.min.formula);
                                                    vOringMax = eval(glandDetails[0].vOring.max.formula);
                                                    newAreaOringMin = eval(glandDetails[0].newAreaOring.min.formula);
                                                    newAreaOringMax = eval(glandDetails[0].newAreaOring.max.formula);
                                                    newOringCrossSectionMin = eval(glandDetails[0].newOringCrossSection.min.formula);
                                                    newOringCrossSectionMax = eval(glandDetails[0].newOringCrossSection.max.formula);
                                                    newOringVolumeMin = eval(glandDetails[0].newOringVolume.min.formula);
                                                    newOringVolumeMax = eval(glandDetails[0].newOringVolume.max.formula);
                                                }

                                                let oTMaxCompressionAtTempNominal = eval(glandDetails[0].compressionAtTemp.nominal.formula);
                                                oTMaxCompressionAtTempNominal = output.oTMaxCompressionAtTempNominal = parseFloat(oTMaxCompressionAtTempNominal.toFixed(1));
                                                if (oTMaxCompressionAtTempNominal > compressionMaxRange || oTMaxCompressionAtTempNominal < 15) {
                                                    rule[i] = { 'field': 'oTMaxCompressionAtTempNominal', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                if (parseFloat(oTMaxCompressionAtTempNominal) < 0) {
                                                    oTMaxCompressionAtTempNominal = output.oTMaxCompressionAtTempNominal = 0;
                                                }

                                                let oTMaxGlandFillAtTempNominal = eval(glandDetails[0].glandFillAtTemp.nominal.formula);
                                                oTMaxGlandFillAtTempNominal = output.oTMaxGlandFillAtTempNominal = parseFloat(oTMaxGlandFillAtTempNominal.toFixed(1));
                                                if (oTMaxGlandFillAtTempNominal > glandfillMaxRange) {
                                                    rule[i] = { 'field': 'oTMaxGlandFillAtTempNominal', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                    i++;
                                                }

                                                let oTMaxCompressionAtTempMin: number, oTMaxCompressionAtTempMax: number, oTMaxGlandFillAtTempMin: number,
                                                    oTMaxGlandFillAtTempMax: number;

                                                if (inputOption === CalculatorOption.WithMinMax) {
                                                    oTMaxCompressionAtTempMin = eval(glandDetails[0].compressionAtTemp.min.formula);
                                                    oTMaxCompressionAtTempMin = output.oTMaxCompressionAtTempMin = parseFloat(oTMaxCompressionAtTempMin.toFixed(1));
                                                    if (oTMaxCompressionAtTempMin > compressionMaxRange || oTMaxCompressionAtTempMin < compressionMinforMin) { //compressionMinRange
                                                        rule[i] = { 'field': 'oTMaxCompressionAtTempMin', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    if (parseFloat(oTMaxCompressionAtTempMin.toString()) < 0) {
                                                        oTMaxCompressionAtTempMin = output.oTMaxCompressionAtTempMin = 0;
                                                    }

                                                    oTMaxCompressionAtTempMax = eval(glandDetails[0].compressionAtTemp.max.formula);
                                                    oTMaxCompressionAtTempMax = output.oTMaxCompressionAtTempMax = parseFloat(oTMaxCompressionAtTempMax.toFixed(1));

                                                    if (data.calculationType == 'glandSizing') {
                                                        compressionMinRange = 20;
                                                    }

                                                    if (oTMaxCompressionAtTempMax > compressionMaxRange || oTMaxCompressionAtTempMax < compressionMinRange) {
                                                        rule[i] = { 'field': 'oTMaxCompressionAtTempMax', 'title': 'Compression at Temperature: ', 'detail': 'Nominal compression recommended to be between 20-25% at operating temperature. Higher compression than 25% can result in reduced lifetime of product. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    if (parseFloat(oTMaxCompressionAtTempMax.toString()) < 0) {
                                                        oTMaxCompressionAtTempMax = output.oTMaxCompressionAtTempMax = 0;
                                                    }

                                                    oTMaxGlandFillAtTempMin = eval(glandDetails[0].glandFillAtTemp.min.formula);
                                                    oTMaxGlandFillAtTempMin = output.oTMaxGlandFillAtTempMin = parseFloat(oTMaxGlandFillAtTempMin.toFixed(1));
                                                    if (oTMaxGlandFillAtTempMin > glandfillMaxRange) {
                                                        rule[i] = { 'field': 'oTMaxGlandFillAtTempMin', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }

                                                    oTMaxGlandFillAtTempMax = eval(glandDetails[0].glandFillAtTemp.max.formula);
                                                    oTMaxGlandFillAtTempMax = output.oTMaxGlandFillAtTempMax = parseFloat(oTMaxGlandFillAtTempMax.toFixed(1));
                                                    if (oTMaxGlandFillAtTempMax > 95) {
                                                        rule[i] = { 'field': 'oTMaxGlandFillAtTempMax', 'title': 'Gland Fill at Temperature: ', 'detail': 'Nominal gland fill recommended to be between 85-90% at operating temperature. Higher gland fill can be used with possibility of reduced lifetime. The closer to 100% gland fill has higher risk. Please contact Greene Tweed for assistance if needed.' };
                                                        i++;
                                                    }
                                                } // end of with min max condition
                                            }
                                            // end of operating temperature Max  condition

                                        } // end of oringIdTolerance condition          
                                        output.unit = data.unit; // add ***
                                        output.unitTemp = data.unitTemp; // add ***
                                        output.inputOption = data.inputOption; // add ***  

                                        if ((+data.inputOption) === CalculatorOption.WithTolerance) {
                                            output.glandWidthTolerance = parseFloat(data.glandWidthTolerance);
                                            output.glandDepthTolerance = parseFloat(data.glandDepthTolerance);
                                            output.glandAngleTolerance = parseFloat(data.glandAngleTolerance);
                                            output.bottomRadiiTolerance = parseFloat(data.bottomRadiiTolerance);
                                            output.topRadiiTolerance = parseFloat(data.topRadiiTolerance);
                                            output.gapTolerance = parseFloat(data.gapTolerance);
                                            output.glandCenterlineTolerance = parseFloat(data.glandCenterlineTolerance);
                                        }

                                        output.ctedata = data.ctedata;
                                        output.materialCteNominal = data.materialCteNominal;

                                        if (data.operatingTemperatureNominal || data.operatingTemperatureNominal == 0) {
                                            output.operatingTemperatureNominal = parseFloat(data.operatingTemperatureNominal);
                                        }

                                        if (oringIdToleranceNominal !== 0) {
                                            if (data.operatingTemperatureNominal) {
                                                output.operatingTemperatureNominal = parseFloat(data.operatingTemperatureNominal);
                                            }
                                        } // end of oringtolerance condition

                                        if (rule.length != 0) {
                                            output.error = rule;
                                        }

                                        if (warning.length != 0) {
                                            output.warning = warning;
                                        }

                                        return resolve({ 'data': output });
                                    } // end of else oring id tolerance
                                }) // end func oring id tolerance
                        }//end else of oring cross toleranceN
                    });  //end func of oring cross toleranceN
                }  // end of else
            });
        });
    }

    /** This function use to get O-ring Cross Section tolerance according to 
    *  cross section and O-ring ID
    **/
    async getCrossSectionTolerance(crossSection: number, unit: Units): Promise<oringCrossSection> {
        const oringCrossSectionTolerancePromise = new Promise<oringCrossSection>((resolve, reject) => {
            let oringCrossSectionTolerance: number = 0;
            let toleranceQuery: { exec: (arg0: (err: any, tolerance: any) => any) => void; };

            if (Units.INCH === (+unit)) {
                toleranceQuery = this.oRingSizesModel.find({ 'oringCrossSectionSize': crossSection }).limit(1);
            }

            if (Units.MILLI_METER === (+unit)) {
                toleranceQuery = this.metricORingSizesModel.find({ 'oringCrossSectionSize': crossSection }).limit(1);
            }

            // return tolerancence based on crosssection
            toleranceQuery.exec((err, tolerance) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    if (tolerance.length > 0) {
                        // got tolerance data from DB
                        oringCrossSectionTolerance = parseFloat(tolerance[0].oringCrossSectionTolerance);
                        return resolve({ "crossSectionTolerance": oringCrossSectionTolerance });
                    }
                    else {
                        // no standard data inputted so didn't get any tolerance data from DB
                        // INCH
                        if (Units.INCH === (+unit)) {
                            if (crossSection <= 0.121) {
                                oringCrossSectionTolerance = 0.003;
                                return resolve({ "crossSectionTolerance": oringCrossSectionTolerance });
                            } else if (crossSection >= 0.122 && crossSection <= 0.174) {
                                oringCrossSectionTolerance = 0.004;
                            }
                            else if (crossSection >= 0.175 && crossSection <= 0.243) {
                                oringCrossSectionTolerance = 0.005;
                            }
                            else if (crossSection >= 0.244 && crossSection <= 0.331) {
                                oringCrossSectionTolerance = 0.006;
                            }
                            return resolve({ "crossSectionTolerance": oringCrossSectionTolerance });
                        }

                        // millimeter
                        if (Units.MILLI_METER === (+unit)) {
                            if (crossSection <= 3.07) {
                                oringCrossSectionTolerance = 0.08;
                                return resolve({ "crossSectionTolerance": oringCrossSectionTolerance });
                            } else if (crossSection >= 3.10 && crossSection <= 4.42) {
                                oringCrossSectionTolerance = 0.10;
                            }
                            else if (crossSection >= 4.45 && crossSection <= 6.17) {
                                oringCrossSectionTolerance = 0.13;
                            }
                            else if (crossSection >= 6.20 && crossSection <= 8.41) {
                                oringCrossSectionTolerance = 0.15;
                            }

                            return resolve({ "crossSectionTolerance": oringCrossSectionTolerance });
                        }
                    } // end of else for length condition
                } // end of else for query execution
            }); // end of exec 
        });
        return oringCrossSectionTolerancePromise;
    }


    /** This function use to get O-ring ID tolerance accorfing to 
    *  cross section and O-ring ID
    **/
    async getOringIdTolerance(crossSection: any, oringId: number, unit: number): Promise<idTolerance> {
        const tolerancePromise = new Promise<idTolerance>((resolve, reject) => {
            let tolerance: number = 0;
            let idToleranceQuery: { exec: (arg0: (err: any, toleranceDetails: any) => any) => void; };

            if (Units.INCH === (+unit)) {
                idToleranceQuery = this.calculationIdToleranceModel.find({
                    $or:
                        [
                            {
                                $and:
                                    [
                                        { "crossSectionMin": crossSection },
                                        { "crossSectionMax": crossSection },
                                        { "diameterMin": oringId },
                                        { "diameterMax": oringId }
                                    ]
                            },
                            {
                                $and:
                                    [
                                        { "crossSectionMin": { $lte: crossSection } },
                                        { "crossSectionMax": { $gte: crossSection } },
                                        { "diameterMin": { $lte: oringId } },
                                        { "diameterMax": { $gte: oringId } }
                                    ]
                            }
                        ]
                }).sort({ "_id": -1 });
            }

            if (Units.MILLI_METER === (+unit)) {
                idToleranceQuery = this.metricCalculationIdToleranceModel.find({
                    $or:
                        [
                            {
                                $and:
                                    [
                                        { "crossSectionMin": crossSection },
                                        { "crossSectionMax": crossSection },
                                        { "diameterMin": oringId },
                                        { "diameterMax": oringId }
                                    ]
                            },
                            {
                                $and:
                                    [
                                        { "crossSectionMin": { $lte: crossSection } },
                                        { "crossSectionMax": { $gte: crossSection } },
                                        { "diameterMin": { $lte: oringId } },
                                        { "diameterMax": { $gte: oringId } }
                                    ]
                            }
                        ]
                }).sort({ "_id": -1 });//descending order is for custom sizes
            }

            idToleranceQuery.exec((err: any, toleranceDetails: string | any[]) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    if (toleranceDetails.length > 0) {
                        tolerance = toleranceDetails[0].diameterTolerance;
                        return resolve({ "idTolerance": tolerance });
                    }
                    else {
                        let idToleranceQuery1: { exec: (arg0: (err: any, toleranceDetails: any) => any) => void; };

                        if (Units.INCH === (+unit)) {
                            idToleranceQuery1 = this.calculationIdToleranceModel.find({
                                $and:
                                    [
                                        { "crossSectionMin": { $lte: crossSection } },
                                        { "crossSectionMax": { $gte: crossSection } },
                                        { "customDesign": { $ne: 1 } }
                                    ]
                            }).sort({ "_id": -1 }).limit(1); // descending order made to take last entry
                        }

                        if (Units.MILLI_METER === (+unit)) {
                            idToleranceQuery1 = this.metricCalculationIdToleranceModel.find({
                                $and:
                                    [
                                        { "crossSectionMin": { $lte: crossSection } },
                                        { "crossSectionMax": { $gte: crossSection } },
                                        { "customDesign": { $ne: 1 } }
                                    ]
                            }).sort({ "_id": -1 }).limit(1);
                        }

                        idToleranceQuery1.exec((err: any, toleranceDetails: string | any[]) => {
                            if (err) {
                                throw new Error(getErrorMessage(err));
                            } else {
                                if (toleranceDetails.length > 0 && toleranceDetails[0].diameterMax < oringId) {
                                    tolerance = parseFloat((oringId * 0.008).toString());
                                    return resolve({ "idTolerance": tolerance });
                                } else {
                                    return resolve({ "idTolerance": tolerance });
                                }

                            }
                        });
                    }
                }
            });
        });

        return tolerancePromise;
    }
}

interface oringCrossSection {
    crossSectionTolerance: number
}

interface idTolerance {
    idTolerance: number
}
