import { IMongoTypeString } from "../helpers";

export interface IWrArCalculationTypeMaster {
  calType: string,
  lowTempChange: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  highTempChange: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  compositeODShrinkage: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  statorIDShrinkageAtMinTemp: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  maxStatorIDAtMinTemp: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  minAr1Arht300ODAtMinTemp: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  finalOD: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  finalOD2: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  statorIDGrowthAtMaxTemp: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  compositeIDGrowth: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  compositeODGrowth: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  rotorODGrowthAtMaxTemp: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  finalID: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  maxStatorIDAtMaxTemp: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  maxRotorODAtMaxTemp: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  rt: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  etComposite: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  r2: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  r2EtComposite: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  etMetal: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  r2r2: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  r2EtMetal: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  interferenceRadial: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  interfaceP: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  clearanceRadial: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  collapseP: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  maxP: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  minimumClearanceAtAmbient: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  estimatingIDAfterInstallationInch: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  thermalFitTemp: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  idCalcTH1: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  idCalcTH2: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  compositeIDShrinkage: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  rotorODShrinkageAtMinTemp: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  idCalcTL1: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  idCalcTL2: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  odShrinkage: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  cxShrinkage: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  idShinkage: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  idCalcTL3: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  },
  axialGrowth: {
    name: IMongoTypeString,
    fieldType: IMongoTypeString,
    formula: IMongoTypeString
  }
}
