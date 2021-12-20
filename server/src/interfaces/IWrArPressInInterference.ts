export interface IWrArPressInInterference {
  key: Number,
  name: {
    type: String,
    default: ''
  },
  min: {
    fieldType: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: ''
    }
  },
  metricMin: {
    fieldType: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: ''
    }
  },
  max: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  standard: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  }
}