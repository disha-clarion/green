export interface IWrArCompositeMatlCheck {
    _id: String;
    matlName: String;
    serviceStorageTemperatureAmbientMin: Number;
    serviceStorageTemperatureAmbientMax: Number;
    temperatures: IWrArTemperature[];
}

export interface IWrArTemperature {
    temperature: Number,
    propertyAtTemperature: {
        compressiveModulus: Number,
        compressiveYield: Number
    },
    cteAtTemperature: {
        idCTE: Number,
        odCTE: Number,
        oalCTE: Number,
        cxCTE: Number
    }
}