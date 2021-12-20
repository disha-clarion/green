import { DropDownModel } from "../models/dropdown";

export interface IWrArCalculatorRequest {
    unit: string;
    unitTemp: string;
    pumpType: DropDownModel;
    componentType: any;
    composite: any;
    interferenceTarget: any;
    customInterferenceTarget: any;
    clearanceTarget: any;
    customClearanceTarget: any;
    rotatingElementODMin: any;
    rotatingElementODMax: any;
    rotatingMaterial: any;
    customRotatingMaterial: any;
    stationaryElementIDMin: any;
    stationaryElementIDMax: any;
    stationaryMaterial: any;
    customStationaryMaterial: any;
    stationaryBoreDepthMin: any;
    serviceStorageTemperatureAmbient75FMin: any;
    serviceStorageTemperatureAmbient75FMax: any;
    calculatorType: number;
}