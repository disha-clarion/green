import { ICalculationTypeMaster } from '../interfaces/ICalculationTypeMaster';
import mongoose from 'mongoose';

const CalculationTypeMaster = new mongoose.Schema(
  {
    calType: {
      type: String,
      default: '',
      required: true
    },
    glandWidth: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      max: {
        fieldType: {
          type: String,
          default: ''
        }
      }
    },
    glandDepth: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      max: {
        fieldType: {
          type: String,
          default: ''
        }
      }
    },
    bottomRadii: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      max: {
        fieldType: {
          type: String,
          default: ''
        }
      }
    },
    gap: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      max: {
        fieldType: {
          type: String,
          default: ''
        }
      }
    },
    glandId: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      max: {
        fieldType: {
          type: String,
          default: ''
        }
      }
    },
    gapArea: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    calculatedAreaNoGap: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    calculatedAreaWithGap: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    glandVolume: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    oringCrossSection: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    oringCrossSectionTolerance: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        value: {
          type: String,
          default: ''
        }
      }
    },
    oringId: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    oringIdTolerance: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        value: {
          type: String,
          default: ''
        }
      }
    },
    stretchCalculation: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    oringArea: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    oringVolume: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    compression: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    glandFill: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    operatingTemperature: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        }
      }
    },
    tempC: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    aOring: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    vOring: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    newAreaOring: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    newOringCrossSection: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    newOringVolume: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    compressionAtTemp: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    glandFillAtTemp: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    }, /** newly added */
    noRadiiArea: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    topRadiiArea: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    topRadiiAreaTriangle: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    bottomRadiiArea: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    topRadiiAreaAngled: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    bottomRadiiTriangle: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    bottomRadiiAreaRectangle: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    bottomRadiiAreaAngled: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    bottomRadiiAreaSquare: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    glandOD: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    radialCompressionCalculation: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    topRadiiAreaRectangle: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    topRadiiAreaSquare: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    squareAreaCentroid: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        value: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        value: {
          type: String,
          default: ''
        }
      },
      max: {
        fieldType: {
          type: String,
          default: ''
        },
        value: {
          type: String,
          default: ''
        }
      }
    },
    squareArea: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    triangleAreaCentroid: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    triangleArea: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    xDistAreaInsideTriangles21: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    xDistAreaInsideTriangles27: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    centroidInsideTriangles22: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    centroidInsideTriangles28: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    xDistAreaInsideTriangles18: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    centroidOfInsideCircle19: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    xDistOfAreaInsideCircle24: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    centroidOfInsideCircle25: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    centroidInsideSquare32: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    centroidOfInsideCircle30: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    centroidInsideSquare36: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    centroidOfInsideCircle34: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    },
    centroid: {
      name: {
        type: String,
        default: ''
      },
      nominal: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
          default: ''
        }
      },
      min: {
        fieldType: {
          type: String,
          default: ''
        },
        formula: {
          type: String,
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
      }
    }
  }
);

export default mongoose.model<ICalculationTypeMaster & mongoose.Document>('calculationTypeMaster', CalculationTypeMaster, 'calculationTypeMaster');
