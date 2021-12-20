// core imports
import Container, { Service, Inject } from 'typedi';

// third party 
import * as mathjs from "mathjs";
import * as fs from "fs";

// application imports
import { CalculatorOption, Units } from "../constants";
import { getErrorMessage } from "../helpers";
import { IGlandSizeCalculatorRequest } from '../interfaces/IGlandSizeCalculatorRequest';
import ORingGlandService from './O-Ring-gland-Analysis-cal.service';

const math = mathjs;
/** This function convert degree to radians **/
const rad = (input: any) => {
    return input * math.pi / 180;
};

@Service()
export default class GlandSizeCalcService {

    constructor(
        @Inject('oringAndGlandDetailsModel') private oRingSizesModel: Models.ORingSizes,
        @Inject('metricORingAndGlandDetailsModel') private metricORingSizesModel: Models.ORingSizes,
        @Inject('as568aRectangleSeriesModel') private as568aRectangleSeriesModel: Models.As568aRectangleSeriesModel,
        @Inject('as568aDovetailSeriesModel') private as568aDovetailSeriesModel: Models.As568aDovetailSeriesModel,
        @Inject('as568aHalfDovetailSeriesModel') private as568aHalfDovetailSeriesModel: Models.As568aHalfDovetailSeriesModel,
        @Inject('metricAs568aRectangleSeriesModel') private metricAs568aRectangleSeriesModel: Models.MetricAs568aRectangleSeriesModel,
        @Inject('metricAs568aDovetailSeriesModel') private metricAs568aDovetailSeriesModel: Models.MetricAs568aDovetailSeriesModel,
        @Inject('metricAs568aHalfDovetailSeriesModel') private metricAs568aHalfDovetailSeriesModel: Models.MetricAs568aHalfDovetailSeriesModel,
        @Inject('logger') private logger
    ) { }

    // service for getting GlandSize JSON
    public async getGlandSizeCalcJSON(): Promise<any> {
        const dataPath = "data/Gland-Size-Calculator.json";
        const data = await fs.promises.readFile(dataPath, "utf8");
        return new Promise((resolve, reject) => {
            if (data) {
                this.logger.info('[Gland-Size-cal.service] if condition called.');
                // parse JSON
                let jsonContent = JSON.parse(data);

                return resolve(jsonContent);
            }
            else {
                this.logger.info('[Gland-Size-cal.service] else condition called.');
                return reject("No data found in json file.");
            }
        });
    }

    // createGland
    public async createGland(data: IGlandSizeCalculatorRequest): Promise<any> {
        return new Promise((resolve, reject) => {
            let dashSize = data.dashSize;
            let unit = data.unit;
            let result: any;
            let output: any = {};
            output.operatingTemperatureNominal = data.operatingTemperatureNominal;
            output.ctedata = data.ctedata;
            output.materialCteNominal = data.materialCteNominal;
            output.unit = data.unit;
            output.unitTemp = data.unitTemp;
            output.gapNominal = data.gapNominal;
            output.gapMin = data.gapMin;
            output.gapMax = data.gapMax;
            output.oringCrossSectionNominal = data.oringCrossSectionNominal;
            output.oringIdNominal = data.oringIdNominal;
            let glandType = 'rectangle';
            if (data.glandType == 'dovetail') {
                glandType = 'dovetail';
            }
            if (data.glandType == 'halfDovetail') {
                glandType = 'halfDovetail';
            }
            this.getSeriesForCustomSizes(data).then((response: any) => {
                // on resolve
                let series = response.series;
                this.getGlandDetailsAccordingToDashSize(data.unit, data, glandType, series).then((calculatedData: any) => {
                    // on promise resolve
                    if (calculatedData !== null) {
                        return resolve({ 'data': calculatedData.data });
                    } else {
                        output.error = "ERRS";
                        return resolve({ 'data': output });
                    }
                });
            }, (rejected: any) => {
                // on reject
                this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', rejected.data);
                throw new Error(getErrorMessage(rejected));
            });
        });
    }

    private async getSeriesForCustomSizes(req: IGlandSizeCalculatorRequest): Promise<any> {
        return new Promise((resolve, reject) => {
            let fixedTo = 2;
            let query: any;
            if (Units.INCH === (+req.unit)) {
                fixedTo = 3;
            } else {
                fixedTo = 2;
            }

            let fixedCompression = parseFloat((20 / 100).toString());
            let unit = req.unit;
            let glandDepthNominal = -((parseFloat(req.oringCrossSectionNominal) * parseFloat(fixedCompression.toString())) - parseFloat(req.oringCrossSectionNominal)) - parseFloat(req.gapNominal);
            glandDepthNominal = (+glandDepthNominal.toFixed(fixedTo));

            if (Units.INCH === (+unit)) {
                query = this.as568aRectangleSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                if (req.glandType == 'dovetail') {
                    query = this.as568aDovetailSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                }
                if (req.glandType == 'halfDovetail') {
                    query = this.as568aHalfDovetailSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                }
            }

            if (Units.MILLI_METER === (+unit)) {
                query = this.metricAs568aRectangleSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                if (req.glandType == 'dovetail') {
                    query = this.metricAs568aDovetailSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                }
                if (req.glandType == 'halfDovetail') {
                    query = this.metricAs568aHalfDovetailSeriesModel.find({ 'glandDepthNominal': { $gte: glandDepthNominal } }).sort({ "glandDepthNominal": 1 }).limit(1);
                }
            }
            query.exec((err: any, data: string | any[]) => {
                if (data.length > 0) {
                    let series = data[0].as568aSeries;
                    return resolve({ 'series': series });
                } else {
                    return reject({ 'data': "Can not Find Series for Selected Details" });
                }
            });
        });
    }

    private async getGlandDetailsAccordingToDashSize(unit: string, req: IGlandSizeCalculatorRequest, glandType: string, series: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let index = 0, inputValues = {};
            let arrInput = [];
            if (glandType === 'rectangle') {
                let query: any;
                if (Units.INCH === (+unit)) {
                    query = this.as568aRectangleSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                if (Units.MILLI_METER === (+unit)) {
                    query = this.metricAs568aRectangleSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                query.exec((err: any, cursor: string | any[]) => {
                    if (err) {
                        this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                        throw new Error(getErrorMessage(err));
                    } else {
                        let count = cursor.length;
                        this.iterate(index, cursor, req, series, unit).then((rectangleOutput: any) => {
                            return resolve({ 'data': rectangleOutput });
                        });
                    }
                });
            }

            if (glandType === 'dovetail') {
                let query: any;
                if (Units.INCH === (+unit)) {
                    query = this.as568aDovetailSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                if (Units.MILLI_METER === (+unit)) {
                    query = this.metricAs568aDovetailSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                query.exec((err: any, cursor: string | any[]) => {
                    if (err) {
                        this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                        throw new Error(getErrorMessage(err));
                    } else {
                        let count = cursor.length;
                        this.iterateDovetail(index, cursor, req, series, unit).then((dovetailOutput: any) => {
                            return resolve({ 'data': dovetailOutput });
                        });
                    }
                });
            }

            if (glandType === 'halfDovetail') {
                let query: any;
                if (Units.INCH === (+unit)) {
                    query = this.as568aHalfDovetailSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                if (Units.MILLI_METER === (+unit)) {
                    query = this.metricAs568aHalfDovetailSeriesModel.find().sort({ "glandDepthNominal": 1 });
                }
                query.exec((err: any, cursor: string | any[]) => {
                    if (err) {
                        this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                        throw new Error(getErrorMessage(err));
                    } else {
                        let count = cursor.length;
                        this.iterateDovetail(index, cursor, req, series, unit).then((dovetailOutput: any) => {
                            return resolve({ 'data': dovetailOutput });
                        });
                    }
                });
            }
        });
    }

    /*
    * This function iterate throught details of series record to find optimum 
    * Output for gland calculation
    */
    private async iterate(index: number, cursor: string | any[], req: IGlandSizeCalculatorRequest, series: any, unit: string | number): Promise<any> {
        return new Promise((resolve, reject) => {
            let inputValues: any = {};
            let fixedTo = 2;
            let query: any;
            if (Units.INCH === (+unit)) {
                fixedTo = 3;
            } else {
                fixedTo = 2;
            }
            inputValues.glandWidthNominal = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo));
            inputValues.glandWidthMin = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo)) - parseFloat(cursor[index].glandWidthTolerance.toFixed(fixedTo));
            inputValues.glandWidthMax = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo)) + parseFloat(cursor[index].glandWidthTolerance.toFixed(fixedTo));
            inputValues.glandDepthNominal = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo));
            inputValues.glandDepthMin = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo)) - parseFloat(cursor[index].glandDepthTolerance.toFixed(fixedTo));
            inputValues.glandDepthMax = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo)) + parseFloat(cursor[index].glandDepthTolerance.toFixed(fixedTo));
            inputValues.bottomRadiiNominal = parseFloat(cursor[index].bottomRadii.toFixed(fixedTo));
            inputValues.bottomRadiiMin = parseFloat(cursor[index].bottomRadii.toFixed(fixedTo));
            inputValues.bottomRadiiMax = parseFloat(cursor[index].bottomRadii.toFixed(fixedTo));
            inputValues.oringCrossSectionNominal = parseFloat(req.oringCrossSectionNominal);
            inputValues.oringIdNominal = parseFloat(req.oringIdNominal.toString());
            inputValues.gapNominal = parseFloat(req.gapNominal);
            inputValues.gapMin = parseFloat(req.gapMin);
            inputValues.gapMax = parseFloat(req.gapMax);
            inputValues.operatingTemperatureNominal = req.operatingTemperatureNominal;
            inputValues.ctedata = req.ctedata;
            inputValues.materialCteNominal = req.materialCteNominal;
            inputValues.unit = unit;
            inputValues.unitTemp = req.unitTemp;
            inputValues.inputOption = CalculatorOption.WithMinMax;
            inputValues.calculationType = 'glandSizing';
            if (req.rectangleType) {
                inputValues.rectangleType = "rectangleOD";
            }
            let rectangleType = "";
            if (req.rectangleType) {
                rectangleType = "rectangleOD";
            }

            this.getGlandIdTolerance(unit, rectangleType, series).then((resp: any) => {
                // on promise resolve
                let glandTolerance = resp.tolerance;
                if (req.rectangleType) {
                    inputValues.glandODNominal = parseFloat(req.oringIdNominal) + (2 * parseFloat(req.oringCrossSectionNominal));//parseFloat((req.oringIdNominal*(0/100)))+parseFloat(req.oringIdNominal);		
                    inputValues.glandODNominal = inputValues.glandODNominal.toFixed(fixedTo);
                    inputValues.glandODMin = parseFloat(inputValues.glandODNominal) - parseFloat(glandTolerance);
                    inputValues.glandODMin = inputValues.glandODMin.toFixed(fixedTo);

                    inputValues.glandODMax = parseFloat(inputValues.glandODNominal) + parseFloat(glandTolerance);
                    inputValues.glandODMax = inputValues.glandODMax.toFixed(fixedTo);
                } else {
                    inputValues.glandIdNominal = parseFloat((parseFloat(req.oringIdNominal) * (1.5 / 100)).toString()) + parseFloat(req.oringIdNominal);
                    inputValues.glandIdNominal = inputValues.glandIdNominal.toFixed(fixedTo);
                    inputValues.glandIdMin = parseFloat(inputValues.glandIdNominal) - parseFloat(glandTolerance);
                    inputValues.glandIdMin = inputValues.glandIdMin.toFixed(fixedTo);

                    inputValues.glandIdMax = parseFloat(inputValues.glandIdNominal) + parseFloat(glandTolerance);
                    inputValues.glandIdMax = inputValues.glandIdMax.toFixed(fixedTo);
                }

                const oRingGlandServiceInstance = Container.get(ORingGlandService);
                oRingGlandServiceInstance.createRectangleOring(inputValues).then((rectangleOutput: any) => {
                    if (!rectangleOutput.data.error || this.isError(rectangleOutput.data.error) === false) {
                        index = index + 1;
                        resolve(rectangleOutput.data);
                        return;
                    } else {
                        index = index + 1;
                        if (index === cursor.length) {
                            resolve(rectangleOutput.data);
                            return;
                        }
                        // recursive call
                        this.iterate(index, cursor, req, series, unit).then(resolve);
                    }
                });
            });
        });
    }

    /*
    * This function iterate throught details of series record to find optimum 
    * Output for gland calculation of dovetail
    */
    private async iterateDovetail(index: number, cursor: string | any[], req: any, series: number, unit: string | number): Promise<any> {
        return new Promise((resolve, reject) => {
            let inputValues: any = {};
            let fixedTo = 2;
            let query: any;

            if (Units.INCH === (+unit)) {
                fixedTo = 3;
                if (req.dashSize) {
                    query = this.oRingSizesModel.find({ dashSize: req.dashSize }).limit(1);
                }
            } else {
                fixedTo = 2;
                if (req.dashSize) {
                    query = this.metricORingSizesModel.find({ dashSize: req.dashSize }).limit(1);
                }
            }

            inputValues.glandWidthNominal = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo));
            inputValues.glandWidthMin = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo)) - parseFloat(cursor[index].glandWidthTolerance.toFixed(fixedTo));
            inputValues.glandWidthMax = parseFloat(cursor[index].glandWidthNominal.toFixed(fixedTo)) + parseFloat(cursor[index].glandWidthTolerance.toFixed(fixedTo));
            inputValues.glandDepthNominal = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo));
            inputValues.glandDepthMin = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo)) - parseFloat(cursor[index].glandDepthTolerance.toFixed(fixedTo));
            inputValues.glandDepthMax = parseFloat(cursor[index].glandDepthNominal.toFixed(fixedTo)) + parseFloat(cursor[index].glandDepthTolerance.toFixed(fixedTo));
            inputValues.bottomRadiiNominal = inputValues.bottomRadiiMin = inputValues.bottomRadiiMax = parseFloat(cursor[index].bottomRadii.toFixed(fixedTo));
            inputValues.topRadiiNominal = inputValues.topRadiiMin = inputValues.topRadiiMax = parseFloat(cursor[index].topRadii.toFixed(fixedTo));
            inputValues.glandAngleNominal = inputValues.glandAngleMin = inputValues.glandAngleMax = parseFloat(cursor[index].glandAngle);
            inputValues.oringCrossSectionNominal = parseFloat(req.oringCrossSectionNominal);
            inputValues.oringIdNominal = parseFloat(req.oringIdNominal);
            inputValues.gapNominal = parseFloat(req.gapNominal);
            inputValues.gapMin = parseFloat(req.gapMin);
            inputValues.gapMax = parseFloat(req.gapMax);
            inputValues.dashSize = req.dashSize;
            inputValues.operatingTemperatureNominal = req.operatingTemperatureNominal;
            inputValues.ctedata = req.ctedata;
            inputValues.materialCteNominal = req.materialCteNominal;
            inputValues.unit = req.unit;
            inputValues.unitTemp = req.unitTemp;
            inputValues.inputOption = CalculatorOption.WithMinMax;
            inputValues.calculationType = 'glandSizing';
            inputValues.token = req.token;

            // get gland centerline tolerance
            this.getGlandCenterlineTolerance(series, unit).then((tolerance: any) => {

                let glandTolerance = tolerance.tolerance;
                let interCalculation = parseFloat(req.oringCrossSectionNominal) + parseFloat(req.oringIdNominal);

                inputValues.glandCenterlineNominal = (1.5 / 100 * interCalculation) + interCalculation;
                inputValues.glandCenterlineNominal = inputValues.glandCenterlineNominal.toFixed(fixedTo);
                inputValues.glandCenterlineMin = parseFloat(inputValues.glandCenterlineNominal) - parseFloat(glandTolerance);
                inputValues.glandCenterlineMin = inputValues.glandCenterlineMin.toFixed(fixedTo);
                inputValues.glandCenterlineMax = parseFloat(inputValues.glandCenterlineNominal) + parseFloat(glandTolerance);
                inputValues.glandCenterlineMax = inputValues.glandCenterlineMax.toFixed(fixedTo);

                if (req.glandType == "dovetail") {
                    const oRingGlandServiceInstance = Container.get(ORingGlandService);
                    oRingGlandServiceInstance.createDovetailOring(inputValues).then((dovetailOutput: any) => {
                        if (!dovetailOutput.data.error || this.isError(dovetailOutput.data.error) === false) {
                            index = index + 1;
                            resolve(dovetailOutput.data);
                            return;
                        } else {
                            index = index + 1;
                            if (index === cursor.length) {
                                resolve(dovetailOutput.data);
                                return;
                            }
                            // recursive call
                            this.iterateDovetail(index, cursor, req, series, unit).then(resolve);
                        }
                    });
                } else {
                    // gland size half dovetail internal vacuum only
                    const oRingGlandServiceInstance = Container.get(ORingGlandService);
                    oRingGlandServiceInstance.createHalfDovetailOringInternalVacuumOnly(inputValues).then((dovetailOutput: any) => {
                        if (!dovetailOutput.data.error || this.isError(dovetailOutput.data.error) === false) {
                            index = index + 1;
                            resolve(dovetailOutput.data);
                            return;
                        } else {
                            index = index + 1;
                            if (index === cursor.length) {
                                resolve(dovetailOutput.data);
                                return;
                            }
                            // recursive call
                            this.iterateDovetail(index, cursor, req, series, unit).then(resolve);
                        }
                    });
                }
            });
        });
    }

    /* 
    * This function is used to get gland id tolerance according to dash size by comparing series 
    *
    */
    private async getGlandIdTolerance(unit: string | number, rectangleType: string, series: number): Promise<any> {
        return new Promise((resolve, reject) => {
            series = series * -1;
            let query: any;
            if (Units.INCH === (+unit)) {
                query = this.oRingSizesModel.find({ dashSize: { $lte: series } }).limit(1);
            }
            if (Units.MILLI_METER === (+unit)) {
                query = this.metricORingSizesModel.find({ dashSize: { $lte: series } }).limit(1);
            }
            query.exec((err: any, data: any[]) => {
                if (err) {
                    this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                    throw new Error(getErrorMessage(err));
                } else {
                    if (rectangleType === "rectangleOD") {
                        return resolve({ 'tolerance': data[0].internalPressureGlandIdTolerance });
                    }
                    else {
                        return resolve({ 'tolerance': data[0].internalVacuumGlandIdTolerance });
                    }
                }
            });
        });
    }

    /* 
    * This function is used to get gland Centerline tolerance according to dash size by comparing series 
    *
    */
    private async getGlandCenterlineTolerance(series: number, unit: string | number): Promise<any> {
        return new Promise((resolve, reject) => {
            series = series * -1;
            let query: any;
            if (Units.INCH === (+unit)) {
                query = this.oRingSizesModel.find({ dashSize: { $lte: series } }).limit(1);
            }
            if (Units.MILLI_METER === (+unit)) {
                query = this.metricORingSizesModel.find({ dashSize: { $lte: series } }).limit(1);
            }
            query.exec((err: any, data: { dovetailGlandClDiameterTolerance: any; }[]) => {
                if (err) {
                    this.logger.error('🔥 error: File [Gland-Size-cal.service]   %o', err);
                    throw new Error(getErrorMessage(err));
                } else {
                    return resolve({ 'tolerance': data[0].dovetailGlandClDiameterTolerance });
                }
            });
        });
    }

    /*
    * This function take field name in form
    * and check this field available in error array
    * according to return true or false
    */
    private isError(errorArr: string | any[]) {
        let fieldArray = ['compressionAtTempNominal', 'compressionAtTempMin', 'compressionAtTempMax', 'glandFillAtTempNominal', 'glandFillAtTempMin', 'glandFillAtTempMax'];
        if (errorArr.length > 0) {
            for (let j = 0; j < errorArr.length; j++) {
                if (fieldArray.indexOf(errorArr[j].field) > -1)
                    return true;
            }
            return false;
        }
        return false;
    }
    /* end success error check method*/
}