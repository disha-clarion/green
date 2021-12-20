export class PressInDTO {
    unit: string;
    unitTemp: string;
    pumpType: any;
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

    constructor(options: {
        unit?: string,
        unitTemp?: string,
        pumpType?: any,
        componentType?: any,
        composite?: any,
        interferenceTarget?: any,
        customInterferenceTarget?: any,
        clearanceTarget?: any,
        customClearanceTarget?: any,
        rotatingElementODMin?: any,
        rotatingElementODMax?: any,
        rotatingMaterial?: any,
        customRotatingMaterial?: any,
        stationaryElementIDMin?: any,
        stationaryElementIDMax?: any,
        stationaryMaterial?: any,
        customStationaryMaterial?: any,
        stationaryBoreDepthMin?: any,
        serviceStorageTemperatureAmbient75FMin?: any,
        serviceStorageTemperatureAmbient75FMax?: any,
        calculatorType?: number
    } = {}) {
        this.unit = options.unit;
        this.unitTemp = options.unitTemp;
        this.pumpType = options.pumpType;
        this.componentType = options.componentType;
        this.composite = options.composite;
        this.interferenceTarget = options.interferenceTarget;
        this.customInterferenceTarget = options.customInterferenceTarget;
        this.clearanceTarget = options.clearanceTarget;
        this.customClearanceTarget = options.customClearanceTarget;
        this.rotatingElementODMin = options.rotatingElementODMin;
        this.rotatingElementODMax = options.rotatingElementODMax;
        this.rotatingMaterial = options.rotatingMaterial;
        this.customRotatingMaterial = options.customRotatingMaterial;
        this.stationaryElementIDMin = options.stationaryElementIDMin;
        this.stationaryElementIDMax = options.stationaryElementIDMax;
        this.stationaryMaterial = options.stationaryMaterial;
        this.customStationaryMaterial = options.customStationaryMaterial;
        this.stationaryBoreDepthMin = options.stationaryBoreDepthMin;
        this.serviceStorageTemperatureAmbient75FMin = options.serviceStorageTemperatureAmbient75FMin;
        this.serviceStorageTemperatureAmbient75FMax = options.serviceStorageTemperatureAmbient75FMax;
        this.calculatorType = options.calculatorType;
    }
}