// core imports
import { Service, Inject } from 'typedi';
import { DocumentQuery, Document } from 'mongoose';

// third party 
import * as mathjs from "mathjs";
import * as fs from "fs";

// application imports
import { Units, customValue, WrArCalcTypes } from "../constants";
import { convertToBar, FormatTenPowerSix, getErrorMessage } from "../helpers";
import { IWrArCalculatorRequest } from '../interfaces/IWrArCalculatorRequest';
import { IWrArCalculationTypeMaster } from '../interfaces/IWrArCalculationTypeMaster';
import { IWrArMaterial } from '../interfaces/IWrArMaterial';
import { IWrArCalculatedIntereference } from '../interfaces/IWrArCalculatedIntereference';
import { IWrArCompositeMatlCheck, IWrArTemperature } from '../interfaces/IWrArCompositeMatlCheck';
import { DropDownModel } from '../models/dropdown';
import { IWrArCTECalcs } from '../interfaces/IWrArCTECalcs';
import { number, unit } from 'mathjs';

const math = mathjs;
/** This function convert degree to radians **/
const rad = (input: any) => {
    return input * math.pi / 180;
};

@Service()
export default class ORingGlandAnalysisService {
    constructor(
        @Inject('logger') private logger,
        @Inject('wrArCalculationTypeMaster') private wrArCalculationTypeMaster: Models.WrArCalculationTypeMaster,
        @Inject('wrArMaterial') private wrArMaterial: Models.WrArMaterial,
        @Inject('wrArMetricMaterial') private wrArMetricMaterial: Models.WrArMetricMaterial,
        @Inject('wrArPressInInterference') private wrArPressInInterference: Models.WrArPressInInterference,
        @Inject('wrArCompositeMatlCheck') private wrArCompositeMatlCheck: Models.WrArCompositeMatlCheck,
        @Inject('wrArMetricCompositeMatlCheck') private wrArMetricCompositeMatlCheck: Models.WrArMetricCompositeMatlCheck,
        @Inject('wrArPressInCTECalculationMaster') private wrArPressInCTECalculationMaster: Models.WrArPressInCTECalculationMaster,
        @Inject('wrArCTECalcs') private wrArCTECalcs: Models.WrArCTECalcs,
        @Inject('wrArMetricCTECalcs') private wrArMetricCTECalcs: Models.WrArMetricCTECalcs
    ) { }

    // service for getting dropdown items from JSON
    public async getArWrCalcDropDownItems(): Promise<any> {
        const dataPath = "data/wr-ar-dropdown-items.json";
        const data = await fs.promises.readFile(dataPath, "utf8");
        return new Promise((resolve, reject) => {
            if (data) {
                this.logger.info('[ar-wr-cal.service] function getArWrCalcDropDownItems if condition called.');
                // parse JSON
                let jsonContent = JSON.parse(data);
                return resolve(jsonContent);
            }
            else {
                this.logger.info('[ar-wr-cal.service] function getArWrCalcDropDownItems else condition called.');
                return reject("No data found in json file.");
            }
        });
    }

    // service for getting ORing from JSON
    public async getArWrCalcJSON(): Promise<any> {
        const dataPath = "data/ar-wr-cal.json";
        const data = await fs.promises.readFile(dataPath, "utf8");
        return new Promise((resolve, reject) => {
            if (data) {
                this.logger.info('[ar-wr-cal.service] if condition called.');
                // parse JSON
                let jsonContent = JSON.parse(data);
                return resolve(jsonContent);
            }
            else {
                this.logger.info('[ar-wr-cal.service] else condition called.');
                return reject("No data found in json file.");
            }
        });
    }

    // PressIn calculation
    public async pressInCalculation(data: IWrArCalculatorRequest): Promise<any> {
        try {
            this.logger.info('[ar-wr-cal.service] PressIn calculation.' + JSON.stringify(data));
            let output: any = {};
            let rule = [];
            let warning = [];
            let k = 0;
            let i = 0;
            let query: DocumentQuery<(IWrArCalculationTypeMaster & Document)[], IWrArCalculationTypeMaster & Document, {}>;
            query = this.wrArCalculationTypeMaster.find({ 'calType': 'pressIn' }).sort('-calType');
            // get formula's fro db
            const pressInDetails: any = await query.exec();
            const compositeMatlCheckDetail = await this.getMatlCheck((+data.unit), data.composite);
            // check max temperature is greater than allowed max value for the composite(material)
            if (data.serviceStorageTemperatureAmbient75FMax > compositeMatlCheckDetail.serviceStorageTemperatureAmbientMax) {
                rule[i] = {
                    'field': 'serviceStorageTemperatureAmbient75FMax',
                    'title': 'Service / Storage Temperature Max: ',
                    'detail': `Check Temperature Range, Allowed maximum temperature is ${compositeMatlCheckDetail.serviceStorageTemperatureAmbientMax}.`
                };
                i++;

                output.machineCompositeOALInch = "0.000";
                output.machineCompositeOALTol = "Check";
            }
            else {
                // Machine Composite OAL
                if (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3) {
                    //  for composite material AR®1(1) && AR®HT(2) && WR®300(3)
                    output.machineCompositeOALInch = data.stationaryBoreDepthMin;
                }
                else if (data.composite.id === 4 || data.composite.id === 5 || data.composite.id === 6) {
                    // for composite material WR®525(4) && WR®650(6) && WR®600(5)
                    let maxTempConst = 300;
                    if (data.composite.id === 5) // WR®600(5)
                    {
                        maxTempConst = 150;
                    }

                    // Metric                    
                    if ((+data.unit === Units.MILLI_METER)) {
                        // WR®525(4) && WR®650(6)
                        if ((+data.unit === Units.MILLI_METER) && (data.composite.id === 4 || data.composite.id === 6)) {
                            maxTempConst = 149;
                        }
                        else if (data.composite.id === 5) { // WR®600 (5)
                            maxTempConst = 65;
                        }
                    }

                    if (data.serviceStorageTemperatureAmbient75FMax > maxTempConst) {
                        const agGrowth = await this.getSumOfPressInAGGrowth(WrArCalcTypes.PressIn, (+data.unit), (+data.serviceStorageTemperatureAmbient75FMax), (+data.stationaryBoreDepthMin), data.composite);
                        this.logger.info(`agGrowth : ${agGrowth}`);
                        const calcMachineCompositeOALInch = ((+data.stationaryBoreDepthMin) - agGrowth);
                        if (calcMachineCompositeOALInch) {
                            output.machineCompositeOALInch = calcMachineCompositeOALInch;
                        }
                        else {
                            output.machineCompositeOALInch = "0.000";
                        }
                    }
                    else {
                        output.machineCompositeOALInch = data.stationaryBoreDepthMin;
                    }
                }

                if (output.machineCompositeOALInch) {
                    if (Units.MILLI_METER === (+data.unit)) { // metric
                        output.machineCompositeOALTol = "-.25";
                    }
                    else {
                        // Imperial
                        // default consider unit is Inch and return value
                        output.machineCompositeOALTol = "-.010";
                    }
                }
            }

            const rotatingElementODMax: number = (+data.rotatingElementODMax);
            // calculate lowTempChange
            const serviceStorageTemperatureAmbient75FMin = data.serviceStorageTemperatureAmbient75FMin ? data.serviceStorageTemperatureAmbient75FMin : 0.00;
            const serviceStorageTemperatureAmbient75FMax = data.serviceStorageTemperatureAmbient75FMax ? data.serviceStorageTemperatureAmbient75FMax : 0.00;
            // TODO: remove
            this.logger.info(`serviceStorageTemperatureAmbient75FMin ${serviceStorageTemperatureAmbient75FMin}`);
            this.logger.info(`serviceStorageTemperatureAmbient75FMax ${serviceStorageTemperatureAmbient75FMax}`);

            const tempChanges: any = this.temperatureChangeHighLow((+data.unit), (+data.serviceStorageTemperatureAmbient75FMin), (+data.serviceStorageTemperatureAmbient75FMax), pressInDetails[0].lowTempChange.formula, pressInDetails[0].highTempChange.formula);
            const lowTempChange: number = tempChanges.lowTempChange;
            // TODO: remove
            this.logger.info(`lowTempChange ${lowTempChange}`);
            // calculate highTempChange                                   
            const highTempChange: number = tempChanges.highTempChange;
            // TODO: remove
            this.logger.info(`highTempChange ${highTempChange}`);
            // get and set stationaryElementIDMax
            const stationaryElementIDMax = data.stationaryElementIDMax ? parseFloat(data.stationaryElementIDMax) : 0.00;
            // TODO: remove
            this.logger.info(`stationaryElementIDMax ${stationaryElementIDMax}`);
            // get stationaryMaterial detail                        
            const stationaryMaterialResult: IWrArMaterial = await this.getMaterialDetail(data.stationaryMaterial, (+data.unit), FormatTenPowerSix((+data.customRotatingMaterial)), FormatTenPowerSix((+data.customStationaryMaterial)));
            // get stator value based on selected "stationary material"
            const statorCTE = stationaryMaterialResult.statorCTE;
            // TODO: remove
            this.logger.info(`statorCTE ${statorCTE}`);
            // calculate statorIDShrinkageAtMinTemp
            const statorIDShrinkageAtMinTemp = eval(pressInDetails[0].statorIDShrinkageAtMinTemp.formula);
            // TODO: remove
            this.logger.info(`statorIDShrinkageAtMinTemp ${statorIDShrinkageAtMinTemp}`);
            // calculate maxStatorIDAtMinTemp
            const maxStatorIDAtMinTemp: number = eval(pressInDetails[0].maxStatorIDAtMinTemp.formula);
            // TODO: remove
            this.logger.info(`maxStatorIDAtMinTemp ${maxStatorIDAtMinTemp}`);
            const statorIDGrowthAtMaxTemp: number = eval(pressInDetails[0].statorIDGrowthAtMaxTemp.formula);
            // TODO: remove
            this.logger.info(`statorIDGrowthAtMaxTemp ${statorIDGrowthAtMaxTemp}`);
            // get intereference
            const interferenceResult: IWrArCalculatedIntereference = await this.getInterferenceInt((+data.unit), data.composite, data.interferenceTarget, data.customInterferenceTarget, stationaryElementIDMax);
            // check max interference
            if (interferenceResult.TargetValue > interferenceResult.Max) {
                rule[i] = {
                    'field': 'interferenceTarget',
                    'title': 'Interference Target: ',
                    'detail': 'Check maximum interference against maximum allowable.'
                };
                i++;
            }
            // check min interference
            if (interferenceResult.TargetValue < interferenceResult.Min) {
                rule[i] = {
                    'field': 'interferenceTarget',
                    'title': 'Interference Target: ',
                    'detail': 'Check minimum interference against minimum allowable.'
                };
                i++;
            }
            const interferenceInt: number = parseFloat(interferenceResult.TargetValue.toString());
            // TODO: remove
            this.logger.info(`interferenceInt ${interferenceInt}`);
            const minAr1Arht300ODAtMinTemp = eval(pressInDetails[0].minAr1Arht300ODAtMinTemp.formula);
            // TODO: remove
            this.logger.info(`minAr1Arht300ODAtMinTemp ${minAr1Arht300ODAtMinTemp}`);
            let machineCompositeODInch: number = 0.000;
            let odTol: number = 0.000, compositeODShrinkage: number = 0.000;
            // get CTE temperature based on temperature inputted in serviceStorageTemperatureAmbient
            const cteAtTemperatureResult: IWrArTemperature = await this.getCTEAtTemperature((+data.unit), data.composite, data.serviceStorageTemperatureAmbient75FMin);
            if (cteAtTemperatureResult) {
                const compositeODCTEAtMinTemp = cteAtTemperatureResult.cteAtTemperature.odCTE;
                // TODO: remove
                this.logger.info(`compositeODCTEAtMinTemp ${compositeODCTEAtMinTemp}`);
                compositeODShrinkage = eval(pressInDetails[0].compositeODShrinkage.formula);
                // TODO: remove
                this.logger.info(`compositeODShrinkage ${compositeODShrinkage}`);
            }
            else {
                let minTemperature = 75, maxTemperature = 500;
                if (Units.MILLI_METER === (+data.unit)) {
                    minTemperature = 24;
                    maxTemperature = 260;
                }
                rule[i] = {
                    'field': 'serviceStorageTemperatureAmbient75FMin',
                    'title': 'Service Storage Temperature Min',
                    'detail': `Temperature value should be between ${minTemperature} and ${maxTemperature}.`
                };
                i++;
            }

            let cteAtTemperatureIDCTE: Number = 0.00, compositeIDGrowth: Number = 0.00,
                cteAtTemperatureODCTE: Number = 0.00, compositeODGrowth: Number = 0.00,
                finishMachineCompositeIDAfterInstallationTol: Number = 0.00;
            // get idcte for temperature 75
            let minTemperatureToGetCTEMatlCheck = 75; // // default Inch
            if (Units.MILLI_METER === (+data.unit)) {
                // MilliMeter or metric
                minTemperatureToGetCTEMatlCheck = 24;
            }

            const idCTEAtTemperatureResult: IWrArTemperature = await this.getCTEAtTemperature((+data.unit), data.composite, minTemperatureToGetCTEMatlCheck);
            if (idCTEAtTemperatureResult) {
                cteAtTemperatureIDCTE = idCTEAtTemperatureResult.cteAtTemperature.idCTE;
                // TODO: remove
                this.logger.info(`cteAtTemperatureIDCTE ${cteAtTemperatureIDCTE}`);
                // compositeIDGrowth for the Composite material AR®1(id=1),AR®HT(id=2),WR®300(id=3)
                if (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3) {
                    compositeIDGrowth = eval(pressInDetails[0].compositeIDGrowth.formula);
                }
                else if (data.composite.id === 4 || data.composite.id === 6) {
                    // compositeIDGrowth for the Composite material WR®525(id=4) and WR®650(id=6)
                    compositeIDGrowth = await this.getSumOfPressInACGrowth(WrArCalcTypes.PressIn, (+data.unit), data.serviceStorageTemperatureAmbient75FMax, data.rotatingElementODMax, data.composite);
                }
                else if (data.composite.id === 5) {
                    // compositeIDGrowth for the Composite material WR®600(id=5)
                    compositeIDGrowth = await this.getSumOfPressInACGrowthWR600(WrArCalcTypes.PressIn, (+data.unit), data.serviceStorageTemperatureAmbient75FMax, data.rotatingElementODMax, stationaryElementIDMax, data.composite);
                }

                // TODO: remove
                this.logger.info(`compositeIDGrowth ${compositeIDGrowth}`);
                cteAtTemperatureODCTE = idCTEAtTemperatureResult.cteAtTemperature.odCTE;
                // TODO: remove
                this.logger.info(`cteAtTemperatureODCTE ${cteAtTemperatureODCTE}`);
                // compositeODGrowth for the Composite material AR®1(id=1),AR®HT(id=2),WR®300(id=3)
                if (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3) {
                    compositeODGrowth = eval(pressInDetails[0].compositeODGrowth.formula);
                }
                else if (data.composite.id === 4 || data.composite.id === 6 || data.composite.id === 5) {
                    // compositeODGrowth for the Composite material WR®525(id=4), WR®650(id=6) and WR®600(id=5)
                    compositeODGrowth = await this.getSumOfPressInAEGrowth(WrArCalcTypes.PressIn, (+data.unit), data.serviceStorageTemperatureAmbient75FMax, data.rotatingElementODMax, stationaryElementIDMax, data.composite);
                }

                // TODO: remove
                this.logger.info(`compositeODGrowth ${compositeODGrowth}`);
            }

            // get rotating Material detail
            const rotatingMaterialResult: IWrArMaterial = await this.getMaterialDetail(data.rotatingMaterial, (+data.unit), FormatTenPowerSix((+data.customRotatingMaterial)), FormatTenPowerSix((+data.customStationaryMaterial)));
            // get stator value based on selected "stationary material"
            const rotorCTE = rotatingMaterialResult.rotorCTE;
            const rotorODGrowthAtMaxTemp = eval(pressInDetails[0].rotorODGrowthAtMaxTemp.formula);
            // TODO: remove
            this.logger.info(`rotorODGrowthAtMaxTemp ${rotorODGrowthAtMaxTemp}`);
            const clearanceCLR: number = this.getClearance((+data.unit), data.pumpType, data.componentType, data.clearanceTarget, (+data.customClearanceTarget), (+data.rotatingElementODMax));
            // TODO: remove
            this.logger.info(`clearanceCLR ${clearanceCLR}`);
            // const finalID = output.finishMachineCompositeIDAfterInstallationInch = eval(pressInDetails[0].finalID.formula);
            const finalID = eval(pressInDetails[0].finalID.formula);
            if (finalID) {
                output.finishMachineCompositeIDAfterInstallationInch = finalID;
            }

            // TODO: remove
            this.logger.info(`finalID ${finalID}`);
            // calculate final dimensions -> "Finish Machine Composite ID After Installation" -> Tol
            if (finalID !== null || finalID !== undefined) {
                finishMachineCompositeIDAfterInstallationTol = this.getTolValue((+data.unit), finalID, data.composite);
                if (finishMachineCompositeIDAfterInstallationTol) {
                    output.finishMachineCompositeIDAfterInstallationInchTol = `+ ${((+data.unit) === Units.MILLI_METER) ? finishMachineCompositeIDAfterInstallationTol.toFixed(2) : finishMachineCompositeIDAfterInstallationTol.toFixed(3)}`;
                }
                else {
                    output.finishMachineCompositeIDAfterInstallationInchTol = "Check";
                    // check 
                    rule[i] = {
                        'field': 'finishMachineCompositeIDAfterInstallationInchTol',
                        'title': 'Finish Machine Composite ID After Installation',
                        'detail': 'Check.'
                    };
                    i++;
                }
            }

            // Pressure Info r/t calculation
            const maxRotorODAtMaxTemp: number = eval(pressInDetails[0].maxRotorODAtMaxTemp.formula);
            const maxStatorIDAtMaxTemp: number = eval(pressInDetails[0].maxStatorIDAtMaxTemp.formula);
            const rt: number = eval(pressInDetails[0].rt.formula);
            // TODO: remove
            this.logger.info(`rt ${rt}`);
            if (rt && isFinite(rt)) {
                output.pressureInfoRT = math.round(rt);
            }
            else {
                // default rt value
                output.pressureInfoRT = "0.0";
            }

            output.unit = data.unit;
            output.unitTemp = data.unitTemp;

            // final OD or Machine Composite OD 
            let finalOD: number = 0.000;
            // composite material AR®1(1) && AR®HT(2) && WR®300(3)
            if (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3) {
                // finalOD = machineCompositeODInch = output.machineCompositeODInch = eval(pressInDetails[0].finalOD.formula);
                finalOD = machineCompositeODInch = eval(pressInDetails[0].finalOD.formula);
                if (machineCompositeODInch) {
                    output.machineCompositeODInch = machineCompositeODInch;
                }
                else {
                    output.machineCompositeODInch = "0.000";
                }
            }
            else if (data.composite.id === 4 || data.composite.id === 5 || data.composite.id === 6) {
                // composite material WR®525 && WR®650 && WR®600
                // finalOD = machineCompositeODInch = output.machineCompositeODInch = eval(pressInDetails[0].finalOD2.formula);
                finalOD = machineCompositeODInch = eval(pressInDetails[0].finalOD2.formula);
                if (machineCompositeODInch) {
                    output.machineCompositeODInch = machineCompositeODInch;
                }
                else {
                    output.machineCompositeODInch = "0.000";
                }
            }
            // TODO: remove
            this.logger.info(`finalOD ${finalOD}`);

            // calculate final dimensions -> Machine Composite OD -> Tol
            if (finalOD !== null || finalOD !== undefined) {
                odTol = this.getTolValue((+data.unit), finalOD, data.composite);
                // TODO: remove
                this.logger.info(`odTol ${odTol}`);
                if (odTol) {
                    output.machineCompositeODTol = `+ ${((+data.unit) === Units.MILLI_METER) ? odTol.toFixed(2) : odTol.toFixed(3)}`;
                }
                else {
                    output.machineCompositeODTol = "Check";
                    // check 
                    rule[i] = {
                        'field': 'machineCompositeODTol',
                        'title': 'Machine Composite OD Tol',
                        'detail': 'Check.'
                    };
                    i++;
                }
            }

            // "Estimated Interface Pressure at Highest Temperature" calculation
            const matlCheckByMaxTemp: IWrArTemperature = await this.getCTEAtTemperature((+data.unit), data.composite, data.serviceStorageTemperatureAmbient75FMax);
            const wrModulus: Number = matlCheckByMaxTemp.propertyAtTemperature.compressiveModulus;
            this.logger.info(`wrModulus ${wrModulus}`);
            const etComposite = eval(pressInDetails[0].etComposite.formula);
            this.logger.info(`etComposite ${etComposite}`);
            const r2 = eval(pressInDetails[0].r2.formula);
            this.logger.info(`r2 ${r2}`);
            const r2EtComposite = eval(pressInDetails[0].r2EtComposite.formula);
            this.logger.info(`r2EtComposite ${r2EtComposite}`);
            const metalModulus: Number = stationaryMaterialResult.modulusPSI;
            const etMetal: number = eval(pressInDetails[0].etMetal.formula);
            const r2r2: number = eval(pressInDetails[0].r2r2.formula);
            const r2EtMetal: number = eval(pressInDetails[0].r2EtMetal.formula);
            this.logger.info(`r2EtMetal ${r2EtMetal}`);
            const interferenceRadial: number = eval(pressInDetails[0].interferenceRadial.formula);            
            this.logger.info(`interferenceRadial ${interferenceRadial}`);
            
            let interfaceP: number = eval(pressInDetails[0].interfaceP.formula);
            
            if (interfaceP) {
                output.estimatedInterfacePressureAtHighestTemperature = interfaceP;
            }
            else {
                output.estimatedInterfacePressureAtHighestTemperature = "0.000";
            }
            this.logger.info(`interfaceP ${interfaceP}`);
            
            // "Estimated Collapse Pressure at Highest Temperature" calculation
            const clearanceRadial: number = eval(pressInDetails[0].clearanceRadial.formula);
            const collapseP: number = eval(pressInDetails[0].collapseP.formula);
            
            let maxP: number = eval(pressInDetails[0].maxP.formula);
            if (maxP) {
                output.estimatedCollapsePressureatHighestTemperature = maxP;
            }
            else {
                output.estimatedCollapsePressureatHighestTemperature = "0.000";
            }
            this.logger.info(`maxP ${maxP}`);
            // WRrAr convert megapascal (MPa) to bar
            if ((+data.unit) === Units.MILLI_METER) {
                interfaceP = output.estimatedInterfacePressureAtHighestTemperature = math.round(convertToBar(interfaceP));
            }
            this.logger.info(`estimatedInterfacePressureAtHighestTemperature ${output.estimatedInterfacePressureAtHighestTemperature}`);

            // WRrAr convert megapascal (MPa) to bar
            if ((+data.unit) === Units.MILLI_METER) {
                maxP = output.estimatedCollapsePressureatHighestTemperature = math.round(convertToBar(maxP));
            }

            this.logger.info(`estimatedCollapsePressureatHighestTemperature ${output.estimatedCollapsePressureatHighestTemperature}`);

            // "Minimum Clearance at Ambient" calculation
            const minimumClearanceAtAmbient: number = eval(pressInDetails[0].minimumClearanceAtAmbient.formula);
            if (minimumClearanceAtAmbient) {
                output.minimumClearanceAtAmbient = minimumClearanceAtAmbient;
            }
            else {
                output.minimumClearanceAtAmbient = "0.000";
            }
            // If Estimating ID After Installation (No Finish Machining)
            const stationaryElementIDMin = data.stationaryElementIDMin;
            let estimatingIDAfterInstallationInch: number;
            if (odTol && machineCompositeODInch && finalID) {
                estimatingIDAfterInstallationInch = eval(pressInDetails[0].estimatingIDAfterInstallationInch.formula);
                if (estimatingIDAfterInstallationInch) {
                    output.estimatingIDAfterInstallationInch = estimatingIDAfterInstallationInch;
                }
                else {
                    output.estimatingIDAfterInstallationInch = "0.000";
                }
            }
            else {
                // output.estimatingIDAfterInstallationInch = "Check";
                output.estimatingIDAfterInstallationInch = "0.000";
            }

            if (finishMachineCompositeIDAfterInstallationTol) {
                output.estimatingIDAfterInstallationTol = `+ ${((+data.unit) === Units.MILLI_METER) ? finishMachineCompositeIDAfterInstallationTol.toFixed(2) : finishMachineCompositeIDAfterInstallationTol.toFixed(3)}`;
            }
            else {
                output.estimatingIDAfterInstallationTol = "Check";
                // check 
                rule[i] = {
                    'field': 'estimatingIDAfterInstallationTol',
                    'title': 'Finish Machine Composite ID After Installation',
                    'detail': 'Check.'
                };
                i++;
            }
            // Thermal Fitting
            // TODO: remove
            this.logger.info(`machineCompositeODInch ${machineCompositeODInch}`);
            this.logger.info(`odTol ${odTol}`);
            this.logger.info(`stationaryElementIDMin ${stationaryElementIDMin}`);
            this.logger.info(`statorCTE ${statorCTE}`);
            this.logger.info(`stationaryElementIDMax ${stationaryElementIDMax}`);

            // For Thermal Fitting, Heat Carrier to a Minimum
            let thermalFitTempConst1 = 0.002; // default Inch or Imperial
            let thermalFitTempConst2 = 75;
            if (Units.MILLI_METER === (+data.unit)) {
                thermalFitTempConst1 = 0.05;
                thermalFitTempConst2 = 24;
            }

            // composite => WR®525, WR®600, WR®650
            if (data.composite && (data.composite.id === 4 || data.composite.id === 5 || data.composite.id === 6)) {
                const thermalFitTemp = eval(pressInDetails[0].thermalFitTemp.formula);
                // TODO: remove
                this.logger.info(`thermalFitTemp ${thermalFitTemp}`);
                // output - For Thermal Fitting, Heat Carrier to a Minimum
                if (thermalFitTemp) {
                    output.thermalFitTemp = Number.parseInt(thermalFitTemp);
                }
                else {
                    output.thermalFitTemp = null;
                }

                // max allowed temperature is greater than thermalFitTemp                
                if (thermalFitTemp && (thermalFitTemp > compositeMatlCheckDetail.serviceStorageTemperatureAmbientMax)) {
                    rule[i] = {
                        'field': 'thermalFitTemp',
                        'title': 'Thermal Fit Temperature: ',
                        'detail': `Thermal Fitting Temperature Exceeds Composite Temperature Limit`
                    };
                    i++;
                }
            }
            else {
                output.thermalFitTemp = null;
            }

            // Finish Machine Composite ID After Installation "Tol"

            // return promise
            return new Promise((resolve, reject) => {
                if (!data.composite) {
                    rule[i] = {
                        'field': 'composite',
                        'title': 'Composite: ',
                        'detail': `Composite data not available.`
                    };
                    i++;
                }

                // error
                if (rule.length > 0) {
                    output.error = rule;
                }
                // warning
                if (warning.length > 0) {
                    output.warning = warning;
                }

                return resolve({ 'data': output });
            });
        } catch (error) {
            // throw error so that promise automatically will be rejected
            // handle error
            throw new Error(getErrorMessage(error));
        }
    }

    // floating calculation
    public async floatingCalculation(data: IWrArCalculatorRequest): Promise<any> {
        try {
            this.logger.info('[ar-wr-cal.service] Floating calculation.' + JSON.stringify(data));
            let output: any = {};
            let rule = [];
            let warning = [];
            let k = 0;
            let i = 0;
            let machineCompositeODInch: number = 0.000;
            const stationaryElementIDMin = data.stationaryElementIDMin;
            let odTol: number = 0.000;
            let query: DocumentQuery<(IWrArCalculationTypeMaster & Document)[], IWrArCalculationTypeMaster & Document, {}>;
            query = this.wrArCalculationTypeMaster.find({ 'calType': 'floating' }).sort('-calType');
            // get formula's fro db
            const floatingDetails: any = await query.exec();
            const compositeMatlCheckDetail = await this.getMatlCheck((+data.unit), data.composite);
            const stationaryBoreDepth = data.stationaryBoreDepthMin ? (+data.stationaryBoreDepthMin) : 0.000;
            // Machine Composite OD calculation and validation
            // check max temperature is greater than allowed max value for the composite(material)
            if (data.serviceStorageTemperatureAmbient75FMax > compositeMatlCheckDetail.serviceStorageTemperatureAmbientMax) {
                rule[i] = {
                    'field': 'serviceStorageTemperatureAmbient75FMax',
                    'title': 'Service / Storage Temperature Max: ',
                    'detail': 'Check Temperature'
                };
                i++;
            }
            else {
                let finalODConstant = 0.002;
                if ((+data.unit) === Units.MILLI_METER) {
                    finalODConstant = 0.05;
                }
                // machineCompositeODInch => finalOD
                const finalOD = machineCompositeODInch = eval(floatingDetails[0].finalOD.formula);
                if (machineCompositeODInch) {
                    output.machineCompositeODInch = machineCompositeODInch;
                }
                else {
                    output.machineCompositeODInch = "0.000"
                }

                // TODO: remove
                this.logger.info(`finalOD OR machineCompositeODInch ${machineCompositeODInch}`);

                // calculate final dimensions -> Machine Composite OD -> Tol
                if (finalOD !== null || finalOD !== undefined) {
                    odTol = this.getTolValue((+data.unit), finalOD, data.composite);
                    // TODO: remove
                    this.logger.info(`odTol ${odTol}`);
                    if (odTol) {
                        output.machineCompositeODTol = `- ${((+data.unit) === Units.MILLI_METER) ? odTol.toFixed(2) : odTol.toFixed(3)}`;
                    }
                    else {
                        output.machineCompositeODTol = "Check";
                        // check 
                        rule[i] = {
                            'field': 'machineCompositeODTol',
                            'title': 'Machine Composite OD Tol',
                            'detail': 'Check.'
                        };
                        i++;
                    }
                }
            }

            const serviceStorageTemperatureAmbient75FMin = data.serviceStorageTemperatureAmbient75FMin ? data.serviceStorageTemperatureAmbient75FMin : 0.00;
            const serviceStorageTemperatureAmbient75FMax = data.serviceStorageTemperatureAmbient75FMax ? data.serviceStorageTemperatureAmbient75FMax : 0.00;
            const tempChanges: any = this.temperatureChangeHighLow((+data.unit), (+data.serviceStorageTemperatureAmbient75FMin), (+data.serviceStorageTemperatureAmbient75FMax), floatingDetails[0].lowTempChange.formula, floatingDetails[0].highTempChange.formula);
            const lowTempChange: number = tempChanges.lowTempChange;
            // TODO: remove
            this.logger.info(`lowTempChange ${lowTempChange}`);
            // calculate highTempChange                                   
            const highTempChange: number = tempChanges.highTempChange;
            // TODO: remove
            this.logger.info(`highTempChange ${highTempChange}`);

            let compositeODGrowth: Number = 0.00, compositeIDGrowth: Number = 0.00, idCalcTH = 0.00, idCalcTL = 0.00,
                cteAtTemperatureIDCTE: Number = 0.00, cteAtTemperatureODCTE: Number = 0.00;
            // get and set stationaryElementIDMax
            const stationaryElementIDMax = data.stationaryElementIDMax ? parseFloat(data.stationaryElementIDMax) : 0.00;
            // TODO: remove
            this.logger.info(`stationaryElementIDMax ${stationaryElementIDMax}`);

            const rotatingElementODMax = data.rotatingElementODMax ? (parseFloat(data.rotatingElementODMax)) : 0.00;
            // TODO: remove

            this.logger.info(`rotatingElementODMax ${rotatingElementODMax}`);
            // get clearanceCLR
            const clearanceCLR: number = this.getClearance((+data.unit), data.pumpType, data.componentType, data.clearanceTarget, (+data.customClearanceTarget), (+data.rotatingElementODMax), true);
            // TODO: remove
            this.logger.info(`clearanceCLR ${clearanceCLR}`);

            // get stationaryMaterial detail
            const stationaryMaterialResult: IWrArMaterial = await this.getMaterialDetail(data.stationaryMaterial, (+data.unit), FormatTenPowerSix((+data.customRotatingMaterial)), FormatTenPowerSix((+data.customStationaryMaterial)));
            // get stator value based on selected "stationary material"
            const statorCTE = stationaryMaterialResult.statorCTE;
            // TODO: remove
            this.logger.info(`statorCTE ${statorCTE}`);

            // get rotating Material detail
            const rotatingMaterialResult: IWrArMaterial = await this.getMaterialDetail(data.rotatingMaterial, (+data.unit), FormatTenPowerSix((+data.customRotatingMaterial)), FormatTenPowerSix((+data.customStationaryMaterial)));
            // get stator value based on selected "stationary material"
            const rotorCTE = rotatingMaterialResult.rotorCTE;

            // get material check data at minimum temperature 75 or 24
            // get idcte for temperature 75
            let minTemperatureToGetCTEMatlCheck = 75; // // default Inch
            if (Units.MILLI_METER === (+data.unit)) {
                // MilliMeter or metric
                minTemperatureToGetCTEMatlCheck = 24;
            }
            const idCTEAtTemperatureResult: IWrArTemperature = await this.getCTEAtTemperature((+data.unit), data.composite, minTemperatureToGetCTEMatlCheck);
            if (idCTEAtTemperatureResult) {
                cteAtTemperatureIDCTE = idCTEAtTemperatureResult.cteAtTemperature.idCTE;
                // TODO: remove
                this.logger.info(`cteAtTemperatureIDCTE ${cteAtTemperatureIDCTE}`);
                cteAtTemperatureODCTE = idCTEAtTemperatureResult.cteAtTemperature.odCTE;
                // TODO: remove
                this.logger.info(`cteAtTemperatureODCTE ${cteAtTemperatureODCTE}`);
            }

            // rotorODGrowthAtMaxTemp
            const rotorODGrowthAtMaxTemp = eval(floatingDetails[0].rotorODGrowthAtMaxTemp.formula);
            // TODO: remove
            this.logger.info(`rotorODGrowthAtMaxTemp ${rotorODGrowthAtMaxTemp}`);

            // calculation of the "Finish Machine Composite ID After Installation"
            // get wrArCompositeMatlCheck values on max temp
            let idCTEAtMaxTemperatureResult: IWrArTemperature = null;
            if (data.serviceStorageTemperatureAmbient75FMax) {
                idCTEAtMaxTemperatureResult = await this.getCTEAtTemperature((+data.unit), data.composite, (+data.serviceStorageTemperatureAmbient75FMax));
            }

            // idCalcTH &&  idCalcTL calculation
            // composite material AR®1(1) && AR®HT(2) && WR®300(3)
            //// if ((idCTEAtMaxTemperatureResult && idCTEAtMaxTemperatureResult.cteAtTemperature.idCTE) && (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3)) {
            if (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3) {
                // idCalcTH                               
                if (data.composite.id === 4 || data.composite.id === 6 || data.composite.id === 5) {
                    // compositeODGrowth for the Composite material WR®525(id=4), WR®650(id=6) and WR®600(id=5)
                    compositeODGrowth = await this.getSumOfPressInAEGrowth(WrArCalcTypes.Floating, (+data.unit), data.serviceStorageTemperatureAmbient75FMax, data.rotatingElementODMax, stationaryElementIDMax, data.composite);
                }
                // TODO: remove
                this.logger.info(`compositeODGrowth ${compositeODGrowth}`);

                const statorIDGrowthAtMaxTemp: number = eval(floatingDetails[0].statorIDGrowthAtMaxTemp.formula);
                // TODO: remove
                this.logger.info(`statorIDGrowthAtMaxTemp ${statorIDGrowthAtMaxTemp}`);

                // compositeIDGrowth for the Composite material AR®1(id=1),AR®HT(id=2),WR®300(id=3)
                if (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3) {
                    compositeIDGrowth = eval(floatingDetails[0].compositeIDGrowth.formula);
                }

                let idCalcTH1Constant1 = 0.002;
                if ((+data.unit === Units.MILLI_METER)) {
                    idCalcTH1Constant1 = 0.05;
                }
                const idCalcTH1 = eval(floatingDetails[0].idCalcTH1.formula);
                idCalcTH = idCalcTH1 ? idCalcTH1 : 0.000;
                this.logger.info(`idCalcTH1 D$11 ${idCalcTH}`);
                this.logger.info(`rotatingElementODMax ${rotatingElementODMax}`);
                this.logger.info(`clearanceCLR J$37 ${clearanceCLR}`);
                this.logger.info(`compositeODGrowth or aeGrowth J$28 ${compositeODGrowth}`);
                this.logger.info(`statorIDGrowthAtMaxTemp J$15 ${statorIDGrowthAtMaxTemp}`);
                this.logger.info(`compositeIDGrowth J$21 ${compositeIDGrowth}`);
                this.logger.info(`rotorODGrowthAtMaxTemp J$9 ${rotorODGrowthAtMaxTemp}`);
            }
            //// else if ((idCTEAtMaxTemperatureResult && idCTEAtMaxTemperatureResult.cteAtTemperature.idCTE) && (data.composite.id === 4 || data.composite.id === 6 || data.composite.id === 5)) { //   WR®525(4) && WR®650(6) && WR®600(5)
            else if (data.composite.id === 4 || data.composite.id === 6 || data.composite.id === 5) {
                //   WR®525(4) && WR®650(6) && WR®600(5)
                if (data.composite.id === 4 || data.composite.id === 6) {
                    // compositeIDGrowth for the Composite material WR®525(id=4) and WR®650(id=6)
                    compositeIDGrowth = await this.getSumOfPressInACGrowth(WrArCalcTypes.Floating, (+data.unit), data.serviceStorageTemperatureAmbient75FMax, data.rotatingElementODMax, data.composite);
                }
                else if (data.composite.id === 5) {
                    // compositeIDGrowth for the Composite material WR®600(id=5)
                    compositeIDGrowth = await this.getSumOfPressInACGrowthWR600(WrArCalcTypes.Floating, (+data.unit), data.serviceStorageTemperatureAmbient75FMax, data.rotatingElementODMax, stationaryElementIDMax, data.composite);
                }
                const idCalcTH2 = eval(floatingDetails[0].idCalcTH2.formula);
                idCalcTH = idCalcTH2 ? idCalcTH2 : 0.000;
                this.logger.info(`compositeIDGrowth J$21 ${compositeIDGrowth}`);
                this.logger.info(`idCalcTH2 ${idCalcTH}`);
            }

            let compositeIDShrinkage = 0.000, rotorODShrinkageAtMinTemp = 0.000,
                compositeODCTEAtMinTemp: Number = 0.000, finishMachineCompositeIDAfterInstallationTol: Number = 0.00, compositeODShrinkage = 0.000;
            compositeIDShrinkage = eval(floatingDetails[0].compositeIDShrinkage.formula);
            rotorODShrinkageAtMinTemp = eval(floatingDetails[0].rotorODShrinkageAtMinTemp.formula);
            // calculate statorIDShrinkageAtMinTemp
            const statorIDShrinkageAtMinTemp = eval(floatingDetails[0].statorIDShrinkageAtMinTemp.formula);
            // TODO: remove
            this.logger.info(`statorIDShrinkageAtMinTemp ${statorIDShrinkageAtMinTemp}`);
            // get CTE temperature based on temperature inputted in serviceStorageTemperatureAmbient
            // serviceStorageTemperatureAmbient75FMin cannot exceeds 75(Imperial) or 24(Metric)
            const cteAtTemperatureResult: IWrArTemperature = await this.getCTEAtTemperature((+data.unit), data.composite, data.serviceStorageTemperatureAmbient75FMin);
            if (!cteAtTemperatureResult) {
                let minTemperature = 75, maxTemperature = 500;
                if (Units.MILLI_METER === (+data.unit)) {
                    minTemperature = 24;
                    maxTemperature = 260;
                }
                rule[i] = {
                    'field': 'serviceStorageTemperatureAmbient75FMin',
                    'title': 'Service Storage Temperature Min',
                    'detail': `Temperature value should be between ${minTemperature} and ${maxTemperature}.`
                };
                i++;
            }

            if (cteAtTemperatureResult) {
                compositeODShrinkage = eval(floatingDetails[0].compositeODShrinkage.formula);
                // TODO: remove
                this.logger.info(`compositeODShrinkage ${compositeODShrinkage}`);
            }

            // idCalcTL
            //// if ((idCTEAtMaxTemperatureResult && idCTEAtMaxTemperatureResult.cteAtTemperature.idCTE) && (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3)) {
            if (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3) {
                // composite material AR®1(1) && AR®HT(2) && WR®300(3)                                
                const idCalcTL1 = eval(floatingDetails[0].idCalcTL1.formula);
                idCalcTL = idCalcTL1 ? idCalcTL1 : 0.000;
                this.logger.info(`idCalcTL1 ${idCalcTL}`);
            }
            //// else if ((idCTEAtMaxTemperatureResult && idCTEAtMaxTemperatureResult.cteAtTemperature.idCTE) && (data.composite.id === 4 || data.composite.id === 6)) {
            else if (data.composite.id === 4 || data.composite.id === 6) {
                // Composite material WR®525(id=4) and WR®650(id=6)
                if (cteAtTemperatureResult) {
                    compositeODCTEAtMinTemp = cteAtTemperatureResult.cteAtTemperature.odCTE;
                    // TODO: remove
                    this.logger.info(`compositeODCTEAtMinTemp ${compositeODCTEAtMinTemp}`);
                    const idCalcTL2 = eval(floatingDetails[0].idCalcTL2.formula)
                    idCalcTL = idCalcTL2 ? idCalcTL2 : 0.000;
                    this.logger.info(`idCalcTL2 ${idCalcTL}`);
                }
            }
            //// else if ((idCTEAtMaxTemperatureResult && idCTEAtMaxTemperatureResult.cteAtTemperature.idCTE) && (data.composite.id === 5)) {
            else if (data.composite.id === 5) {
                // Composite material WR®600(id=5)
                if (cteAtTemperatureResult) {
                    compositeODCTEAtMinTemp = cteAtTemperatureResult.cteAtTemperature.odCTE;
                    // TODO: remove
                    this.logger.info(`compositeODCTEAtMinTemp ${compositeODCTEAtMinTemp}`);

                    const odCTE = cteAtTemperatureResult.cteAtTemperature.odCTE;
                    const odShrinkage = eval(floatingDetails[0].odShrinkage.formula);
                    const cxCTE = cteAtTemperatureResult.cteAtTemperature.cxCTE;
                    const cxShrinkage = eval(floatingDetails[0].cxShrinkage.formula);
                    const idShinkage = eval(floatingDetails[0].idShinkage.formula);
                    const idCalcTL3 = eval(floatingDetails[0].idCalcTL3.formula);
                    idCalcTL = idCalcTL3 ? idCalcTL3 : 0.000;
                    this.logger.info(`idCalcTL3 ${idCalcTL}`);
                }
            }

            let finalID = 0.000;
            // if (idCalcTH && idCalcTH > idCalcTL) {
            if (idCalcTH > idCalcTL) {
                finalID = output.finishMachineCompositeIDAfterInstallationInch = (idCalcTH ? idCalcTH : 0.000);
            }
            else if (idCalcTL) {
                finalID = output.finishMachineCompositeIDAfterInstallationInch = (idCalcTL ? idCalcTL : 0.000);
            }

            // TODO: remove
            this.logger.info(`finalID or finishMachineCompositeIDAfterInstallationInch ${finalID}`);

            // calculate final dimensions -> "Finish Machine Composite ID After Installation" -> Tol
            if (finalID) {
                finishMachineCompositeIDAfterInstallationTol = this.getTolValue((+data.unit), finalID, data.composite);
                if (finishMachineCompositeIDAfterInstallationTol) {
                    output.finishMachineCompositeIDAfterInstallationInchTol = `+ ${((+data.unit) === Units.MILLI_METER) ? finishMachineCompositeIDAfterInstallationTol.toFixed(2) : finishMachineCompositeIDAfterInstallationTol.toFixed(3)}`;
                }
                else {
                    output.finishMachineCompositeIDAfterInstallationInchTol = "Check";
                    // check 
                    rule[i] = {
                        'field': 'finishMachineCompositeIDAfterInstallationInchTol',
                        'title': 'Finish Machine Composite ID After Installation',
                        'detail': 'Check.'
                    };
                    i++;
                }
            }
            // else {
            //     output.finishMachineCompositeIDAfterInstallationInchTol = "Check";
            // }

            // Machine Composite OAL
            let cteAtTemperatureOALCTE: Number = 0.000, compositeAxialGrowthAtMaxTemp = 0.000;
            if (!(data.serviceStorageTemperatureAmbient75FMax > compositeMatlCheckDetail.serviceStorageTemperatureAmbientMax)) {
                let maxTempConst = 300;
                if ((+data.unit) === Units.MILLI_METER) {
                    maxTempConst = 149;
                }

                if (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3 || data.composite.id === 4 || data.composite.id === 6) {
                    // Final OAL(W) for AR®1(1) && AR®HT(2) && WR®300(3) && WR®525(4) && WR®650(6)
                    if ((data.serviceStorageTemperatureAmbient75FMax) > maxTempConst) {
                        const idCTEAtMaxTemperatureResult: IWrArTemperature = await this.getCTEAtTemperature((+data.unit), data.composite, (+data.serviceStorageTemperatureAmbient75FMax));
                        if (idCTEAtMaxTemperatureResult) {
                            const compositeOALCTE = cteAtTemperatureOALCTE = idCTEAtMaxTemperatureResult.cteAtTemperature.oalCTE;

                            // TODO: remove
                            this.logger.info(`Composite OAL CTE OR cteAtTemperatureOALCTE ${cteAtTemperatureOALCTE}`);
                            // axial growh / compositeAxialGrowthAtMaxTemp
                            if (data.composite.id === 1 || data.composite.id === 2 || data.composite.id === 3) {
                                compositeAxialGrowthAtMaxTemp = eval(floatingDetails[0].axialGrowth.formula);
                                const calcMachineCompositeOALInch = math.round(((+data.stationaryBoreDepthMin) - compositeAxialGrowthAtMaxTemp));
                                if (calcMachineCompositeOALInch) {
                                    this.logger.info(`finalOAL or calcMachineCompositeOALInch 1 ${calcMachineCompositeOALInch}`);
                                    output.machineCompositeOALInch = calcMachineCompositeOALInch;
                                }
                                else {
                                    output.machineCompositeOALInch = 0.000;
                                }
                            }
                            else if (data.composite.id === 4 || data.composite.id === 6) // WR®525(4) && WR®650(6)
                            {
                                const agGrowth = await this.getSumOfPressInAGGrowth(WrArCalcTypes.Floating, (+data.unit), (+data.serviceStorageTemperatureAmbient75FMax), (+data.stationaryBoreDepthMin), data.composite);
                                this.logger.info(`floating calculation agGrowth852 ${agGrowth}`);
                                // const calcMachineCompositeOALInch = math.round(((+data.stationaryBoreDepthMin) - agGrowth));
                                const calcMachineCompositeOALInch = ((+data.stationaryBoreDepthMin) - agGrowth);
                                if (calcMachineCompositeOALInch) {
                                    output.machineCompositeOALInch = calcMachineCompositeOALInch;
                                    this.logger.info(`finalOAL or calcMachineCompositeOALInch 6 ${output.machineCompositeOALInch}`);
                                }
                                else {
                                    // output.machineCompositeOALInch = 'Check Temperature';
                                    output.machineCompositeOALInch = '';
                                }
                            }
                        }
                        else {
                            output.machineCompositeOALInch = 0.000;
                        }
                    } else {
                        output.machineCompositeOALInch = data.stationaryBoreDepthMin;
                        this.logger.info(`finalOAL or calcMachineCompositeOALInch 2 ${output.machineCompositeOALInch}`);
                    }
                }
                else if (data.composite.id === 5) {
                    // Final OAL(W) for WR®600(5)
                    maxTempConst = 150;
                    if ((+data.unit) === Units.MILLI_METER) {
                        maxTempConst = 65;
                    }

                    if ((data.serviceStorageTemperatureAmbient75FMax) > maxTempConst) {
                        const agGrowth = await this.getSumOfPressInAGGrowth(WrArCalcTypes.Floating, (+data.unit), (+data.serviceStorageTemperatureAmbient75FMax), (+data.stationaryBoreDepthMin), data.composite);
                        // const calcMachineCompositeOALInch = math.round(((+data.stationaryBoreDepthMin) - agGrowth));
                        const calcMachineCompositeOALInch = ((+data.stationaryBoreDepthMin) - agGrowth);
                        if (calcMachineCompositeOALInch) {
                            output.machineCompositeOALInch = calcMachineCompositeOALInch;
                            this.logger.info(`finalOAL or calcMachineCompositeOALInch 3 ${output.machineCompositeOALInch}`);
                        }
                        else {
                            // output.machineCompositeOALInch = 'Check Temperature';
                            output.machineCompositeOALInch = '';
                        }
                    }
                    else {
                        output.machineCompositeOALInch = data.stationaryBoreDepthMin;
                        this.logger.info(`finalOAL or calcMachineCompositeOALInch 4 ${output.machineCompositeOALInch}`);
                    }
                }

                // Machine Composite OAL Tol
                if (output.machineCompositeOALInch) {
                    if (Units.MILLI_METER === (+data.unit)) { // metric
                        output.machineCompositeOALTol = "-.25";
                    }
                    else {
                        // Imperial
                        // default consider unit is Inch and return value
                        output.machineCompositeOALTol = "-.010";
                    }
                }
            }
            else {
                // output.machineCompositeOALInch = 'Check Temperature';
                output.machineCompositeOALInch = '';
                // output.machineCompositeOALTol = "Check";
                output.machineCompositeOALTol = "";
            }

            // Machine Composite OAL Tol
            // if (Units.MILLI_METER === (+data.unit)) { // metric
            //     output.machineCompositeOALTol = "-.25";
            // }
            // else {
            //     // Imperial
            //     // default consider unit is Inch and return value
            //     output.machineCompositeOALTol = "-.010";
            // }

            output.unit = data.unit;
            output.unitTemp = data.unitTemp;
            // return promise
            return new Promise((resolve, reject) => {
                if (!data.composite) {
                    rule[i] = {
                        'field': 'composite',
                        'title': 'Composite: ',
                        'detail': `Composite data not available.`
                    };
                    i++;
                }

                // error
                if (rule.length > 0) {
                    output.error = rule;
                }
                // warning
                if (warning.length > 0) {
                    output.warning = warning;
                }

                return resolve({ 'data': output });
            });
        } catch (error) {
            // throw error so that promise automatically will be rejected
            // handle error
            throw new Error(getErrorMessage(error));
        }
    }

    // get interference
    public async getInterferenceInt(unit: Units, composite: any, interferenceTarget: any, customInterferenceTarget: any, stationaryElementIDMax: number): Promise<IWrArCalculatedIntereference> {
        const compositePressInIntereferencePromise = new Promise<any>((resolve, reject) => {
            let interference: IWrArCalculatedIntereference = { TargetValue: 0, Standard: 0, Max: 0, Min: 0 };
            if (!composite) {
                interference.TargetValue = 0.00;
                return resolve(interference);
            }
            else {
                // get from db
                let compositePressInIntereferenceQuery: any;
                compositePressInIntereferenceQuery = this.wrArPressInInterference.find({ 'key': composite.id }).limit(1);
                // return tolerancence based on crosssection
                compositePressInIntereferenceQuery.exec((err: any, compositeInterefrence: string | any[]) => {
                    if (err) {
                        throw new Error(getErrorMessage(err));
                    } else {
                        if (compositeInterefrence.length > 0) {
                            // got stator from data from DB
                            const dbInterference: any = compositeInterefrence[0];
                            // calculate max value
                            this.logger.info(`test ${dbInterference.max.formula}`);
                            interference.Max = eval(dbInterference.max.formula);

                            // calculate standardvalue
                            const calculatedStandard = eval(dbInterference.standard.formula);
                            const minimumIntereference = (Units.MILLI_METER === (+unit) ? (+dbInterference.metricMin.value) : (+dbInterference.min.value));
                            interference.TargetValue = interference.Standard = (((+calculatedStandard) > minimumIntereference) ? (+calculatedStandard) : minimumIntereference);
                            // if custom option is selected in intereference target DDL then return custom intereference

                            if (interferenceTarget && interferenceTarget.value === customValue) {
                                // custom value
                                interference.TargetValue = customInterferenceTarget;
                            }
                            return resolve(interference);
                        }
                        else {
                            return reject("Data not found.");
                        }
                    }
                });
            }
        });
        return compositePressInIntereferencePromise;
    }

    // fetch statorCTE value based on selected stationary material
    public async getMaterialDetail(material: any, unit: Units, customRotorCTE?: any, customStatorCTE?: any): Promise<IWrArMaterial> {
        const materialCTEPromise = new Promise<any>((resolve, reject) => {
            if (material) {
                // get from db
                let statorQuery: any;

                // Millimeter or Metric
                if (Units.MILLI_METER === (+unit)) {
                    statorQuery = this.wrArMetricMaterial.find({ 'materialName': material.label }).limit(1);
                }
                else {
                    // Units.INCH === (+unit)
                    // consider unit Inch and get data from db
                    statorQuery = this.wrArMaterial.find({ 'materialName': material.label }).limit(1);
                }

                // execute query
                statorQuery.exec((err: any, wrArMaterial: any) => {
                    if (err) {
                        throw new Error(getErrorMessage(err));
                    } else {
                        if (wrArMaterial.length > 0) {
                            let materialData: IWrArMaterial = wrArMaterial[0]._doc;
                            // check custom value 
                            if (material.value === customValue) {
                                materialData.rotorCTE = customRotorCTE;
                                materialData.statorCTE = customStatorCTE;
                            }

                            // got stator from data from DB                            
                            return resolve(materialData);
                        }
                        else {
                            return reject("Data not found.");
                        }
                    }
                });
            }
            else {
                return reject("Invalid data.");
            }
        });
        return materialCTEPromise;
    }

    // get composite material detail data based on temperature
    private async getCTEAtTemperature(unit: Units, composite: any, temperature: number): Promise<IWrArTemperature> {
        const cteAtTemperaturePromise = new Promise<IWrArTemperature>((resolve, reject) => {
            let cteAtTemperature: IWrArTemperature = null;
            if (!composite) {
                return resolve(null);
            }
            else {
                // get from db
                let wrArCompositeMatlCheckQuery: any;
                // Millimeter or metric
                if (Units.MILLI_METER === (+unit)) {
                    // Millimeter
                    if (temperature <= 24) {
                        temperature = 24;
                    }
                    else if (temperature > 24 && temperature <= 93) {
                        temperature = 93;
                    }
                    else if (temperature > 93 && temperature <= 121) {
                        temperature = 121;
                    }
                    else if (temperature > 121 && temperature <= 149) {
                        temperature = 149;
                    }
                    else if (temperature > 149 && temperature <= 177) {
                        temperature = 177;
                    }
                    else if (temperature > 177 && temperature <= 204) {
                        temperature = 204;
                    }
                    else if (temperature > 204 && temperature <= 260) {
                        temperature = 260;
                    }
                    else {
                        // not  allowed reject promise
                        return resolve(null);
                    }
                    wrArCompositeMatlCheckQuery = this.wrArMetricCompositeMatlCheck.find({ 'matlName': composite.label, 'temperatures': { $elemMatch: { 'temperature': temperature } } }, { 'temperatures.$': 1 });
                }
                else {
                    // Inch
                    // Units.INCH === (+unit)
                    if (temperature <= 75) {
                        temperature = 75;
                    }
                    else if (temperature > 75 && temperature <= 200) {
                        temperature = 200;
                    }
                    else if (temperature > 200 && temperature <= 250) {
                        temperature = 250;
                    }
                    else if (temperature > 250 && temperature <= 300) {
                        temperature = 300;
                    }
                    else if (temperature > 300 && temperature <= 350) {
                        temperature = 350;
                    }
                    else if (temperature > 350 && temperature <= 400) {
                        temperature = 400;
                    }
                    else if (temperature > 400 && temperature <= 500) {
                        temperature = 500;
                    }
                    else {
                        // not  allowed reject promise
                        return resolve(null);
                    }
                    // consider unit Inch and get data from db
                    wrArCompositeMatlCheckQuery = this.wrArCompositeMatlCheck.find({ 'matlName': composite.label, 'temperatures': { $elemMatch: { 'temperature': temperature } } }, { 'temperatures.$': 1 });
                }

                // exexute query
                wrArCompositeMatlCheckQuery.exec((err: any, wrArMaterialCheck: any[]) => {
                    if (err) {
                        throw new Error(getErrorMessage(err));
                    } else {
                        if (wrArMaterialCheck.length > 0) {
                            // got stator from data from DB
                            cteAtTemperature = wrArMaterialCheck[0].temperatures[0];
                            return resolve(cteAtTemperature);
                        }
                        else {
                            return reject("Data not found.");
                        }
                    }
                });
            }
        });
        return cteAtTemperaturePromise;
    }

    // get material check detail 
    public async getMatlCheck(unit: Units, composite: any): Promise<IWrArCompositeMatlCheck> {
        return new Promise<IWrArCompositeMatlCheck>((resolve, reject) => {
            // get from db
            let wrArCompositeMatlCheckQuery: any;
            if (Units.MILLI_METER === (+unit)) {
                wrArCompositeMatlCheckQuery = this.wrArMetricCompositeMatlCheck.find({ 'matlName': composite.label });
            }
            else {
                // Units.INCH === (+unit)
                // default consider unit Inch and get data from db
                wrArCompositeMatlCheckQuery = this.wrArCompositeMatlCheck.find({ 'matlName': composite.label });
            }

            // exexute query
            wrArCompositeMatlCheckQuery.exec((err: any, wrArMaterialCheck: any[]) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    if (wrArMaterialCheck.length > 0) {
                        // got stator from data from DB
                        return resolve(wrArMaterialCheck[0]);
                    }
                    else {
                        return reject("Data not found.");
                    }
                }
            });
        });
    }

    // get tol value
    private getTolValue(unit: number, value: number, composite: DropDownModel): number {
        if (composite.id === 1 || composite.id === 2) // AR®1(1) && AR®HT(2)
        {
            if (Units.INCH === unit && value < 3) {
                return 0.003;
            }
            else if (Units.INCH === unit && value < 6) {
                return 0.004;
            }
            else if (Units.INCH === unit && value < 12) {
                return 0.005;
            }
            else if ((Units.MILLI_METER === unit && value < 75)) {
                return 0.08;
            }
            else if ((Units.MILLI_METER === unit && value < 152.4)) {
                return 0.10;
            }
            else if ((Units.MILLI_METER === unit && value < 304.8)) {
                return 0.13;
            }
            else {
                return null;
            }
        }
        else if (composite.id === 3) //WR®300(3)
        {
            if (Units.INCH === unit && value < 3) {
                return 0.003;
            }
            else if (Units.INCH === unit && value < 6) {
                return 0.005;
            }
            else if (Units.INCH === unit && value < 12) {
                return 0.006;
            }
            else if ((Units.MILLI_METER === unit && value < 75)) {
                return 0.08;
            }
            else if ((Units.MILLI_METER === unit && value < 152.4)) {
                return 0.13;
            }
            else if ((Units.MILLI_METER === unit && value < 304.8)) {
                return 0.15;
            }
            else {
                return null;
            }
        }
        else if (composite.id === 4 || composite.id === 5 || composite.id === 6) { // WR®525(4) && WR®650(6) && WR®600(5)
            if (Units.INCH === unit && value < 3) {
                return 0.002;
            }
            else if (Units.INCH === unit && value < 6) {
                return 0.003;
            }
            else if (Units.INCH === unit && value < 12) {
                return 0.004;
            }
            else if ((Units.MILLI_METER === unit && value < 75)) {
                return 0.05;
            }
            else if ((Units.MILLI_METER === unit && value < 152.4)) {
                return 0.08;
            }
            else if ((Units.MILLI_METER === unit && value < 304.8)) {
                return 0.10;
            }
            else {
                return null;
            }
        }
    }

    // calculate and get clearance value
    public getClearance(unit: number, pumpType: DropDownModel, componentType: DropDownModel, clearanceTarget: any, customClearanceTarget: number, rotatingElementODMax: number, isFloatingCalculator: boolean = false): number {
        if (clearanceTarget && clearanceTarget.value === customValue) {
            return customClearanceTarget;
        }
        else {
            if (pumpType.id === 1 || pumpType.id === 2) // pumpType "OH" OR "BB"
            {
                if (componentType.id === 1) // componentType "Wear Ring"
                {
                    return this.getOHBBWearRingBasedOnPumpType(unit, rotatingElementODMax, isFloatingCalculator);
                }
                else if (componentType.id === 2 || componentType.id === 3) // componentType "Bushing" OR "Bearing"
                {
                    return this.getOHBBVSBearingBasedOnPumpType(unit, rotatingElementODMax, isFloatingCalculator);
                }
            }
            else if (pumpType.id === 3) // pumpType "VS"
            {
                if (componentType.id === 1) // componentType "Wear Ring"
                {
                    return this.getVSWearRingBasedOnPumpType(unit, rotatingElementODMax, isFloatingCalculator);
                }
                else if (componentType.id === 2 || componentType.id === 3) // componentType "Bushing" OR "Bearing"
                {
                    return this.getOHBBVSBearingBasedOnPumpType(unit, rotatingElementODMax, isFloatingCalculator);
                }
            }
        }
    }

    // calculate and return wear ring
    private getOHBBWearRingBasedOnPumpType(unit: number, rotatingElementODMax: number, isFloatingCalculator = false): number {
        if (!isFloatingCalculator && ((Units.INCH === unit && rotatingElementODMax < 2) || (Units.MILLI_METER === unit && rotatingElementODMax < 50))) {
            // Millimeter or Metric
            if (Units.MILLI_METER === (+unit)) {
                return 0.13;
            }
            else {
                // default Inch unit value
                return 0.005;
            }
        }
        else if ((Units.INCH === unit && rotatingElementODMax < 5) || (Units.MILLI_METER === unit && rotatingElementODMax < 125)) {
            if (Units.MILLI_METER === unit) {  // Millimeter or Metric
                return (0.08 + (rotatingElementODMax * 0.001));
            }
            else {
                // default Inch unit calculation
                return (0.003 + (rotatingElementODMax * 0.001));
            }
        }
        else {
            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                return (0.2 + ((rotatingElementODMax - 125) * 0.0005));
            }
            else {
                // default Inch unit calculation
                return (0.008 + ((rotatingElementODMax - 5) * 0.0005));
            }
        }
    }

    // calculate and return value for pump type "VS" and component type - "wear ring"
    private getVSWearRingBasedOnPumpType(unit: number, rotatingElementODMax: number, isFloatingCalculator = false): number {
        if (!isFloatingCalculator && ((Units.INCH === unit && rotatingElementODMax < 2) || (Units.MILLI_METER === unit && rotatingElementODMax < 53.33))) {
            if (Units.MILLI_METER === unit) {  // Millimeter or Metric
                return (0.18 + 0.05);
            }
            else {
                // default Inch unit value
                return (0.007 + 0.002);
            }
        }
        else if ((Units.INCH === unit && rotatingElementODMax < 5) || (Units.MILLI_METER === unit && rotatingElementODMax < 125)) {
            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                return ((0.1 + (rotatingElementODMax * 0.0015)) + 0.05);
            }
            else {
                // default Inch unit calculation
                return ((0.004 + (rotatingElementODMax * 0.0015)) + 0.002);
            }
        }
        else {
            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                return ((0.3 + ((rotatingElementODMax - 125) * 0.001)) + 0.05);
            }
            else {
                // default Inch unit calculation
                return ((0.012 + ((rotatingElementODMax - 5) * 0.001)) + 0.002);
            }
        }
    }

    // calculate and return bushing or bearing
    private getOHBBVSBearingBasedOnPumpType(unit: number, rotatingElementODMax: number, isFloatingCalculator = false): number {
        if (!isFloatingCalculator && ((Units.INCH === unit && rotatingElementODMax < 2.1) || (Units.MILLI_METER === unit && rotatingElementODMax < 53.33))) {
            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                return 0.18;
            }
            else {
                // default Inch unit value
                return 0.007;
            }
        }
        else if ((Units.INCH === unit && rotatingElementODMax < 5) || (Units.MILLI_METER === unit && rotatingElementODMax < 125)) {
            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                return (0.1 + (rotatingElementODMax * 0.0015));
            }
            else {
                // default Inch unit calculation
                return (0.004 + (rotatingElementODMax * 0.0015));
            }
        }
        else {
            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                return (0.3 + ((rotatingElementODMax - 125) * 0.001));
            }
            else {
                // default Inch unit calculation
                return (0.012 + ((rotatingElementODMax - 5) * 0.001));
            }
        }
    }

    // PressIn calculator
    // get column AC Growth sum for the composite material WR®525(id=4) and WR®650(id=6)
    private async getSumOfPressInACGrowth(calType: string, unit: number, serviceStorageTemperatureAmbient75FMax: number, rotatingElementODMax: number, composite: DropDownModel): Promise<Number> {
        let cteCalculationMasterQueryResult: any;
        try {
            // get formula from db
            const cteCalculationMasterQuery = await this.getPressInCTECalculationFormula(composite);
            cteCalculationMasterQueryResult = cteCalculationMasterQuery;
        }
        catch (error) {
            // throw error so that promise automatically will be rejected
            // handle error
            throw new Error(getErrorMessage(error));
        }

        const sumPromise = new Promise<any>((resolve, reject) => {
            // get from db
            let cteCalcsDataQuery: any;

            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                // cteCalcsDataQuery = this.wrArMetricCTECalcs.find({ 'id': composite.id }).limit(1);
                cteCalcsDataQuery = this.wrArMetricCTECalcs.find({ calType: (calType === WrArCalcTypes.Floating ? WrArCalcTypes.Floating : WrArCalcTypes.PressIn), 'compositeMaterials': { $elemMatch: { 'id': composite.id } } }, { 'compositeMaterials.$': 1 });
            }
            else {
                // default Inch unit value
                // cteCalcsDataQuery = this.wrArCTECalcs.find({ 'id': composite.id }).limit(1);
                cteCalcsDataQuery = this.wrArCTECalcs.find({ calType: (calType === WrArCalcTypes.Floating ? WrArCalcTypes.Floating : WrArCalcTypes.PressIn), 'compositeMaterials': { $elemMatch: { 'id': composite.id } } }, { 'compositeMaterials.$': 1 });
            }

            // return tolerancence based on crosssection
            cteCalcsDataQuery.exec((err: any, result: any) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    if (result.length > 0) {
                        let sum: Number = 0.000;
                        const dbResult: IWrArCTECalcs = result[0] as IWrArCTECalcs;
                        for (let index = 0; index < dbResult.compositeMaterials[0].temperatures.length; index++) {
                            const temperature = dbResult.compositeMaterials[0].temperatures[index].temperature;
                            const nextTemp = (dbResult.compositeMaterials[0].temperatures[index + 1] && dbResult.compositeMaterials[0].temperatures[index + 1].temperature) ? dbResult.compositeMaterials[0].temperatures[index + 1].temperature : 0.000;
                            const nextTempIDCTE = (dbResult.compositeMaterials[0].temperatures[index + 1] && dbResult.compositeMaterials[0].temperatures[index + 1].idCTE) ? dbResult.compositeMaterials[0].temperatures[index + 1].idCTE : 0.000;
                            if (temperature > serviceStorageTemperatureAmbient75FMax) {
                                continue;
                            }

                            if (serviceStorageTemperatureAmbient75FMax > nextTemp) {
                                const calc = eval(cteCalculationMasterQueryResult[0].acGrowth1.formula);
                                this.logger.info(`${calc}`);
                                sum = sum + (calc ? calc : 0.000);
                            }
                            else {
                                const calc = eval(cteCalculationMasterQueryResult[0].acGrowth2.formula);
                                this.logger.info(`${calc}`);
                                sum = sum + (calc ? calc : 0.000);
                            }
                        }
                        return resolve(sum);
                    }
                    else {
                        return reject("Data not found.");
                    }
                }
            });
        });
        return sumPromise;
    }

    // PressIn calculator
    // get column AC Growth sum for the composite material WR®600(id=5)
    private async getSumOfPressInACGrowthWR600(calType: string, unit: number, serviceStorageTemperatureAmbient75FMax: number, rotatingElementODMax: number, stationaryElementIDMax: number, composite: DropDownModel): Promise<Number> {
        // get formula from db
        const cteCalculationMasterQuery = await this.getPressInCTECalculationFormula(composite);
        let cteCalculationMasterQueryResult: any;
        try {
            cteCalculationMasterQueryResult = await cteCalculationMasterQuery;
        }
        catch (error) {
            // throw error so that promise automatically will be rejected
            // handle error
            throw new Error(getErrorMessage(error));
        }

        // get ae growth sum
        let aeGrowth: Number = 0.000;
        aeGrowth = await this.getSumOfPressInAEGrowth(calType, unit, serviceStorageTemperatureAmbient75FMax, rotatingElementODMax, stationaryElementIDMax, composite);
        const sumPromise = new Promise<any>((resolve, reject) => {
            // get from db
            let cteCalcsDataQuery: any;
            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                // cteCalcsDataQuery = this.wrArMetricCTECalcs.find({ 'id': composite.id }).limit(1);
                cteCalcsDataQuery = this.wrArMetricCTECalcs.find({ calType: (calType === WrArCalcTypes.Floating ? WrArCalcTypes.Floating : WrArCalcTypes.PressIn), 'compositeMaterials': { $elemMatch: { 'id': composite.id } } }, { 'compositeMaterials.$': 1 });
            }
            else {
                // default Inch unit value
                // cteCalcsDataQuery = this.wrArCTECalcs.find({ 'id': composite.id }).limit(1);
                cteCalcsDataQuery = this.wrArCTECalcs.find({ calType: (calType === WrArCalcTypes.Floating ? WrArCalcTypes.Floating : WrArCalcTypes.PressIn), 'compositeMaterials': { $elemMatch: { 'id': composite.id } } }, { 'compositeMaterials.$': 1 });
            }

            // return tolerancence based on crosssection
            cteCalcsDataQuery.exec((err: any, result: any) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    if (result.length > 0) {
                        let aiGrowth: Number = 0.000;
                        const dbResult: IWrArCTECalcs = result[0] as IWrArCTECalcs;
                        for (let index = 0; index < dbResult.compositeMaterials[0].temperatures.length; index++) {
                            const temperature = dbResult.compositeMaterials[0].temperatures[index].temperature;
                            const nextTemp = (dbResult.compositeMaterials[0].temperatures[index + 1] && dbResult.compositeMaterials[0].temperatures[index + 1].temperature) ? dbResult.compositeMaterials[0].temperatures[index + 1].temperature : 0.000;
                            const nextCXCTE = (dbResult.compositeMaterials[0].temperatures[index + 1] && dbResult.compositeMaterials[0].temperatures[index + 1].cxCTE) ? dbResult.compositeMaterials[0].temperatures[index + 1].cxCTE : 0.000;
                            const nextTempODCTE = (dbResult.compositeMaterials[0].temperatures[index + 1] && dbResult.compositeMaterials[0].temperatures[index + 1].odCTE) ? dbResult.compositeMaterials[0].temperatures[index + 1].odCTE : 0.000;

                            if (temperature > serviceStorageTemperatureAmbient75FMax) {
                                continue;
                            }

                            if (serviceStorageTemperatureAmbient75FMax > nextTemp) {
                                // // const aeGrowthCalc = eval(dbResult.aeGrowth1.formula);
                                // // aeGrowth = aeGrowth + (aeGrowthCalc ? aeGrowthCalc : 0.000);
                                const aiGrowthCalc = eval(cteCalculationMasterQueryResult[0].aiGrowth1.formula);
                                aiGrowth = aiGrowth + (aiGrowthCalc ? aiGrowthCalc : 0.000);
                            }
                            else {
                                // // const aeGrowthCalc = eval(dbResult.aeGrowth2.formula);
                                // // aeGrowth = aeGrowth + (aeGrowthCalc ? aeGrowthCalc : 0.000);
                                const aiGrowthCalc = eval(cteCalculationMasterQueryResult[0].aiGrowth2.formula);
                                aiGrowth = aiGrowth + (aiGrowthCalc ? aiGrowthCalc : 0.000);
                            }
                        }

                        const acGrowth = eval(cteCalculationMasterQueryResult[0].acGrowth1.formula);
                        return resolve(acGrowth);
                    }
                    else {
                        return reject("Data not found.");
                    }
                }
            });
        });
        return sumPromise;
    }

    // PressIn calculator
    // get column AE Growth sum for the composite material WR®525(id=4), WR®650(id=6) and WR®600(id=5)
    private async getSumOfPressInAEGrowth(calType: string, unit: number, serviceStorageTemperatureAmbient75FMax: number, rotatingElementODMax: number, stationaryElementIDMax: number, composite: DropDownModel): Promise<Number> {
        // get formula from db
        const cteCalculationMasterQuery = await this.getPressInCTECalculationFormula(composite);
        let cteCalculationMasterQueryResult: any;
        try {
            cteCalculationMasterQueryResult = await cteCalculationMasterQuery;
        }
        catch (error) {
            // throw error so that promise automatically will be rejected
            // handle error
            throw new Error(getErrorMessage(error));
        }

        const sumPromise = new Promise<any>((resolve, reject) => {
            // get from db
            let cteCalcsDataQuery: any;
            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                // cteCalcsDataQuery = this.wrArMetricCTECalcs.find({ 'id': composite.id }).limit(1);
                cteCalcsDataQuery = this.wrArMetricCTECalcs.find({ calType: (calType === WrArCalcTypes.Floating ? WrArCalcTypes.Floating : WrArCalcTypes.PressIn), 'compositeMaterials': { $elemMatch: { 'id': composite.id } } }, { 'compositeMaterials.$': 1 });
            }
            else {
                // default Inch unit value
                // cteCalcsDataQuery = this.wrArCTECalcs.find({ 'id': composite.id }).limit(1);
                cteCalcsDataQuery = this.wrArCTECalcs.find({ calType: (calType === WrArCalcTypes.Floating ? WrArCalcTypes.Floating : WrArCalcTypes.PressIn), 'compositeMaterials': { $elemMatch: { 'id': composite.id } } }, { 'compositeMaterials.$': 1 });
            }

            // return tolerancence based on crosssection
            cteCalcsDataQuery.exec((err: any, result: any) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    if (result.length > 0) {
                        let aeGrowth: Number = 0.000;
                        const dbResult: IWrArCTECalcs = result[0] as IWrArCTECalcs;
                        for (let index = 0; index < dbResult.compositeMaterials[0].temperatures.length; index++) {
                            const temperature = dbResult.compositeMaterials[0].temperatures[index].temperature;
                            const nextTemp = (dbResult.compositeMaterials[0].temperatures[index + 1] && dbResult.compositeMaterials[0].temperatures[index + 1].temperature) ? dbResult.compositeMaterials[0].temperatures[index + 1].temperature : 0.000;
                            const nextTempODCTE = (dbResult.compositeMaterials[0].temperatures[index + 1] && dbResult.compositeMaterials[0].temperatures[index + 1].odCTE) ? dbResult.compositeMaterials[0].temperatures[index + 1].odCTE : 0.000;
                            if (temperature > serviceStorageTemperatureAmbient75FMax) {
                                continue;
                            }
                            if (serviceStorageTemperatureAmbient75FMax > nextTemp) {
                                const aeGrowthCalc = eval(cteCalculationMasterQueryResult[0].aeGrowth1.formula);
                                aeGrowth = aeGrowth + (aeGrowthCalc ? aeGrowthCalc : 0.000);
                            }
                            else {
                                const aeGrowthCalc = eval(cteCalculationMasterQueryResult[0].aeGrowth2.formula);
                                aeGrowth = aeGrowth + (aeGrowthCalc ? aeGrowthCalc : 0.000);
                            }
                        }

                        return resolve(aeGrowth);
                    }
                    else {
                        return reject("Data not found.");
                    }
                }
            });
        });
        return sumPromise;
    }

    // get formulas for PressIn CTE calcs
    private async getPressInCTECalculationFormula(composite: DropDownModel): Promise<any> {
        // get formula from db
        const cteCalculationMasterQuery = this.wrArPressInCTECalculationMaster.find({ 'id': composite.id }).limit(1);
        return cteCalculationMasterQuery.exec();
    }

    // low and high temp change
    private temperatureChangeHighLow(unit: number, serviceStorageTemperatureAmbient75FMin: number, serviceStorageTemperatureAmbient75FMax: number, lowTempChangeFormula: string, highTempChangeFormula: string) {
        let tempChangeConstant = 75; // default Inch
        if (Units.MILLI_METER === (unit)) {
            tempChangeConstant = 24;
        }
        const lowTempChange: number = eval(lowTempChangeFormula);
        // calculate highTempChange      
        const highTempChange: number = eval(highTempChangeFormula);
        return { lowTempChange: lowTempChange, highTempChange: highTempChange };
    }

    // PressIn calculator
    // get column AG Growth sum for the composite material WR®525(4) && WR®650(6) && WR®600(5)
    private async getSumOfPressInAGGrowth(calType: string, unit: number, serviceStorageTemperatureAmbient75FMax: number, stationaryBoreDepth: number, composite: DropDownModel): Promise<number> {
        // get formula from db
        const cteCalculationMasterQuery = await this.getPressInCTECalculationFormula(composite);
        let cteCalculationMasterQueryResult: any;
        try {
            cteCalculationMasterQueryResult = await cteCalculationMasterQuery;
        }
        catch (error) {
            // throw error so that promise automatically will be rejected
            // handle error
            throw new Error(getErrorMessage(error));
        }

        const sumPromise = new Promise<any>((resolve, reject) => {
            // get from db
            let cteCalcsDataQuery: any;

            if (Units.MILLI_METER === unit) { // Millimeter or Metric
                // cteCalcsDataQuery = this.wrArMetricCTECalcs.find({ 'id': composite.id }).limit(1);
                cteCalcsDataQuery = this.wrArMetricCTECalcs.find({ calType: (calType === WrArCalcTypes.Floating ? WrArCalcTypes.Floating : WrArCalcTypes.PressIn), 'compositeMaterials': { $elemMatch: { 'id': composite.id } } }, { 'compositeMaterials.$': 1 });
            }
            else {
                // default Inch unit value
                // cteCalcsDataQuery = this.wrArCTECalcs.find({ 'id': composite.id }).limit(1);
                cteCalcsDataQuery = this.wrArCTECalcs.find({ calType: (calType === WrArCalcTypes.Floating ? WrArCalcTypes.Floating : WrArCalcTypes.PressIn), 'compositeMaterials': { $elemMatch: { 'id': composite.id } } }, { 'compositeMaterials.$': 1 });
            }

            // return tolerancence based on crosssection
            cteCalcsDataQuery.exec((err: any, result: any) => {
                if (err) {
                    throw new Error(getErrorMessage(err));
                } else {
                    if (result.length > 0) {
                        let sum: Number = 0.000;
                        const dbResult: IWrArCTECalcs = result[0] as IWrArCTECalcs;
                        for (let index = 0; index < dbResult.compositeMaterials[0].temperatures.length; index++) {
                            const temperature = dbResult.compositeMaterials[0].temperatures[index].temperature;
                            const nextTemp = (dbResult.compositeMaterials[0].temperatures[index + 1] && dbResult.compositeMaterials[0].temperatures[index + 1].temperature) ? dbResult.compositeMaterials[0].temperatures[index + 1].temperature : 0.000;
                            const nextOALCTE = (dbResult.compositeMaterials[0].temperatures[index + 1] && dbResult.compositeMaterials[0].temperatures[index + 1].oalCTE) ? dbResult.compositeMaterials[0].temperatures[index + 1].oalCTE : 0.000;

                            if (temperature > serviceStorageTemperatureAmbient75FMax) {
                                continue;
                            }

                            if (serviceStorageTemperatureAmbient75FMax > nextTemp) {
                                const calc = eval(cteCalculationMasterQueryResult[0].agGrowth1.formula);
                                this.logger.info(`calc 1 ${calc}`);
                                sum = sum + (calc ? calc : 0.000);
                            }
                            else {
                                const calc = eval(cteCalculationMasterQueryResult[0].agGrowth2.formula);
                                this.logger.info(`calc 2 ${calc}`);
                                sum = sum + (calc ? calc : 0.000);
                            }
                        }
                        return resolve(sum);
                    }
                    else {
                        return reject("Data not found.");
                    }
                }
            });
        });
        return sumPromise;
    }
}