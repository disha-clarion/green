import { IMaterialCTE } from "./IMaterialCTE";

export interface IORingCalculatorRequest {
    glandWidthNominal:string;
    glandDepthNominal:string;
    bottomRadiiNominal:string;
    gapNominal:string;
    glandIdNominal: string;
    oringIdNominal: string;
    oringCrossSectionNominal: string;
    inputOption: string;
    unit: string;
    unitTemp: string;
    operatingTemperatureNominal: number;
    operatingTemperatureMin: number;
    operatingTemperatureMax: number;
    ctedata: string;
    materialCteNominal: IMaterialCTE,
    rectangleType: string;
    glandODNominal: string;
    glandODMin: string;
    glandODMax: string;
    calculationType: string;
    glandWidthMin: string; // started : withMinMax properties
    glandWidthMax: string;
    glandDepthMin: string;
    glandDepthMax: string;
    bottomRadiiMin: string;
    bottomRadiiMax: string;
    gapMin: string;
    gapMax: string;
    glandIdMin: string;
    glandIdMax: string;
    glandWidthTolerance:string; // started with tolerance properties
    glandDepthTolerance:string;
    bottomRadiiTolerance:string;
    gapTolerance:string;
    glandIdTolerance:string;
    glandODTolerance:string;
    dashSize:string;
}