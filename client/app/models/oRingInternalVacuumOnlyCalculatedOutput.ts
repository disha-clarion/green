import { MaterialChoiceModel } from "./material-choice.model";
import { ErrorModel } from "./error.model";

export class ORingInternalVacuumOnlyCalculatedOutput {
    data: Data;
}

export interface Data {
    glandWidthNominal: number;
    glandDepthNominal: number;
    bottomRadiiNominal: number;
    gapNominal: number;
    glandIdNominal: number;
    oringCrossSectionNominal: number;
    oringIdNominal: number;
    stretchCalculationNominal: number;
    compressionNominal: number;
    compressionMin: number;
    compressionMax: number;
    glandFillNominal: number;
    glandFillMin: number;
    glandFillMax: number;
    compressionAtTempMin: number;
    compressionAtTempNominal: number;
    compressionAtTempMax: number;
    glandFillAtTempMin: number;
    glandFillAtTempNominal: number;
    glandFillAtTempMax: number;
    unit: string;
    unitTemp: string;
    inputOption: string;
    ctedata: string;
    materialCteNominal: MaterialChoiceModel;
    operatingTemperatureNominal: number;
    tempCNominal: number;
    error: ErrorModel[];
    warning: ErrorModel[];
}
