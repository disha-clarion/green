import { IMongoTypeString } from "../helpers";

export interface ICalculationTypeMaster {
  calType: string,
  glandWidth: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString
    }
  },
  glandDepth: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString
    }
  },
  bottomRadii: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString
    }
  },
  gap: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString
    }
  },
  glandId: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString
    }
  },
  gapArea: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  calculatedAreaNoGap: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  calculatedAreaWithGap: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  glandVolume: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  oringCrossSection: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  oringCrossSectionTolerance: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      value: IMongoTypeString
    }
  },
  oringId: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  oringIdTolerance: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      value: IMongoTypeString
    }
  },
  stretchCalculation: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  oringArea: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  oringVolume: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  compression: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  glandFill: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  operatingTemperature: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString
    }
  },
  tempC: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  aOring: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  vOring: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  newAreaOring: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  newOringCrossSection: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  newOringVolume: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  compressionAtTemp: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  glandFillAtTemp: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  /** newly added */
  noRadiiArea: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  topRadiiArea: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  topRadiiAreaTriangle: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  bottomRadiiArea: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  topRadiiAreaAngled: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  bottomRadiiTriangle: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  bottomRadiiAreaRectangle: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  bottomRadiiAreaAngled: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  bottomRadiiAreaSquare: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  glandOD: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  radialCompressionCalculation: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  topRadiiAreaRectangle: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  topRadiiAreaSquare: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  squareAreaCentroid: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      value: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      value: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      value: IMongoTypeString
    }
  },
  squareArea: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  triangleAreaCentroid: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  triangleArea: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  xDistAreaInsideTriangles21: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  xDistAreaInsideTriangles27: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  centroidInsideTriangles22: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  centroidInsideTriangles28: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  xDistAreaInsideTriangles18: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  centroidOfInsideCircle19: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  xDistOfAreaInsideCircle24: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  centroidOfInsideCircle25: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  centroidInsideSquare32: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  centroidOfInsideCircle30: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  centroidInsideSquare36: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  centroidOfInsideCircle34: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  },
  centroid: {
    name: IMongoTypeString,
    nominal: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    min: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    },
    max: {
      fieldType: IMongoTypeString,
      formula: IMongoTypeString
    }
  }
}
