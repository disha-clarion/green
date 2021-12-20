import { IWrArPressInCTECalculationMaster } from '../interfaces/IWrArPressInCTECalculationMaster';
import mongoose from 'mongoose';

const WrArPressInCTECalculationMaster = new mongoose.Schema({
  id: Number,
  materialName: String,
  acGrowth1: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: String
  },
  acGrowth2: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: String
  },
  aeGrowth1: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  aeGrowth2: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
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
    formula: {
      type: String,
      default: ''
    }
  },
  aiGrowth2: {
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  }
});

export default mongoose.model<IWrArPressInCTECalculationMaster & mongoose.Document>('wrArPressInCTECalculationMaster', WrArPressInCTECalculationMaster, 'wrArPressInCTECalculationMaster');