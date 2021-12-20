import { MaterialChoiceModel } from "./material-choice.model";

export class ORingInternalVacuumOnlyDTO {
    glandWidthNominal: string;
    glandDepthNominal: string;
    bottomRadiiNominal: string;
    gapNominal: string;
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
    materialCteNominal: MaterialChoiceModel;
    rectangleType: string;
    glandODNominal: string;
    glandODMin: string;
    glandODMax: string;
    calculationType: string;
    glandWidthMin: number; // started : withMinMax properties
    glandWidthMax: number;
    glandDepthMin: number;
    glandDepthMax: number;
    bottomRadiiMin: number;
    bottomRadiiMax: number;
    gapMin: number;
    gapMax: number;
    glandIdMin: number;
    glandIdMax: number;
    glandWidthTolerance: string; // started with tolerance properties
    glandDepthTolerance: string;
    bottomRadiiTolerance: string;
    gapTolerance: string;
    glandIdTolerance: string;
    glandODTolerance: string;
    dashSize: string;


    constructor(options: {
        glandWidthNominal?: string,
        glandDepthNominal?: string,
        bottomRadiiNominal?: string,
        gapNominal?: string,
        glandIdNominal?: string,
        oringIdNominal?: string,
        oringCrossSectionNominal?: string,
        inputOption?: string,
        unit?: string,
        unitTemp?: string,
        operatingTemperatureNominal?: number,
        operatingTemperatureMin?: number,
        operatingTemperatureMax?: number,
        ctedata?: string,
        materialCteNominal?: MaterialChoiceModel,
        rectangleType?: string,
        glandODNominal?: string,
        glandODMin?: string,
        glandODMax?: string,
        calculationType?: string,
        glandWidthMin?: number,
        glandWidthMax?: number,
        glandDepthMin?: number,
        glandDepthMax?: number,
        bottomRadiiMin?: number,
        bottomRadiiMax?: number,
        gapMin?: number,
        gapMax?: number,
        glandIdMin?: number,
        glandIdMax?: number,
        glandWidthTolerance?: string,
        glandDepthTolerance?: string,
        bottomRadiiTolerance?: string,
        gapTolerance?: string,
        glandIdTolerance?: string,
        glandODTolerance?: string,
        dashSize?: string
    } = {}) {
        this.unit = options.unit;
        this.unitTemp = options.unitTemp;
        this.glandWidthNominal = options.glandWidthNominal;
        this.glandDepthNominal = options.glandDepthNominal;
        this.bottomRadiiNominal = options.bottomRadiiNominal;
        this.gapNominal = options.gapNominal;
        this.glandIdNominal = options.glandIdNominal;
        this.oringIdNominal = options.oringIdNominal;
        this.oringCrossSectionNominal = options.oringCrossSectionNominal;
        this.inputOption = options.inputOption;
        this.operatingTemperatureNominal = options.operatingTemperatureNominal ? (+options.operatingTemperatureNominal) : null;
        this.operatingTemperatureMin = options.operatingTemperatureMin ? (+options.operatingTemperatureMin) : null;
        this.operatingTemperatureMax = options.operatingTemperatureMax ? (+options.operatingTemperatureMax) : null;
        this.ctedata = options.ctedata;
        this.materialCteNominal = options.materialCteNominal;
        this.rectangleType = options.rectangleType;
        this.glandODNominal = options.glandODNominal;
        this.glandODMin = options.glandODMin;
        this.glandODMax = options.glandODMax;
        this.calculationType = options.calculationType;
        this.glandWidthMin = options.glandWidthMin; // started  withMinMax properties
        this.glandWidthMax = options.glandWidthMax;
        this.glandDepthMin = options.glandDepthMin;
        this.glandDepthMax = options.glandDepthMax;
        this.bottomRadiiMin = options.bottomRadiiMin;
        this.bottomRadiiMax = options.bottomRadiiMax;
        this.gapMin = options.gapMin;
        this.gapMax = options.gapMax;
        this.glandIdMin = options.glandIdMin;
        this.glandIdMax = options.glandIdMax;
        this.glandWidthTolerance = options.glandWidthTolerance; // started with tolerance properties
        this.glandDepthTolerance = options.glandDepthTolerance;
        this.bottomRadiiTolerance = options.bottomRadiiTolerance;
        this.gapTolerance = options.gapTolerance;
        this.glandIdTolerance = options.glandIdTolerance;
        this.glandODTolerance = options.glandODTolerance;
        this.dashSize = options.dashSize;
    }
}