export interface IWrArCTECalcs {
  calType: String,
  compositeMaterials: [{
    id: Number,
    materialName: String,
    temperatures: [{
      temperature: Number,
      idCTE: Number,
      odCTE: Number,
      oalCTE: Number,
      cxCTE: Number
    }]
  }
  ]
}

export interface IWrArPressInCTECalsTemperature {
  temperature: Number,
  idCTE: Number,
  odCTE: Number,
  oalCTE: Number,
  cxCTE: Number
}