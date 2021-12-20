import { IWrArCalculationTypeMaster } from '../interfaces/IWrArCalculationTypeMaster';
import mongoose from 'mongoose';

const WrArCalculationTypeMaster = new mongoose.Schema({
  calType: {
    type: String,
    default: ''
  },
  lowTempChange: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  highTempChange: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  compositeODShrinkage: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  statorIDShrinkageAtMinTemp: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  maxStatorIDAtMinTemp: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  minAr1Arht300ODAtMinTemp: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  finalOD: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  finalOD2: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  statorIDGrowthAtMaxTemp: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  compositeIDGrowth: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  compositeODGrowth: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  rotorODGrowthAtMaxTemp: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  finalID: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  maxStatorIDAtMaxTemp: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  maxRotorODAtMaxTemp: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  rt: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  etComposite: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  r2: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  r2EtComposite: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  etMetal: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  r2r2: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  r2EtMetal: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  interferenceRadial: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  interfaceP: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  clearanceRadial: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  collapseP: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  maxP: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  minimumClearanceAtAmbient: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  estimatingIDAfterInstallationInch: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  thermalFitTemp: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  idCalcTH1: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  idCalcTH2: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  compositeIDShrinkage: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  rotorODShrinkageAtMinTemp: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  idCalcTL1: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  idCalcTL2: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  odShrinkage: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  cxShrinkage: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  idShinkage: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  idCalcTL3: {
    name: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: ''
    },
    formula: {
      type: String,
      default: ''
    }
  },
  axialGrowth: {
    name: {
      type: String,
      default: ''
    },
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

export default mongoose.model<IWrArCalculationTypeMaster & mongoose.Document>('wrArCalculationTypeMaster', WrArCalculationTypeMaster, 'wrArCalculationTypeMaster');