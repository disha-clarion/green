export interface IWrArPressInCTECalculationMaster {
  id: Number,
  materialName: string,
  acGrowth1: {
    fieldType: {
      type: string,
      default: ''
    },
    formula: string
  },
  acGrowth2: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: string
  },
  aeGrowth1: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: string
  },
  aeGrowth2: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: string
  },
  agGrowth1: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  agGrowth2: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  aiGrowth1: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: string
  },
  aiGrowth2: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: string
  }
}