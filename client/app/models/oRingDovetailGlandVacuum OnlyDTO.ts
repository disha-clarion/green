import { MaterialChoiceModel } from "./material-choice.model";

export class ORingDovetailGlandVacuumOnlyDTO {
    glandWidthNominal: number;
    glandDepthNominal: number;
    glandAngleNominal: number;
    topRadiiNominal: number;
    bottomRadiiNominal: number;
    gapNominal: string;
    glandCenterlineNominal: string;
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
    // glandODNominal: string;
    // glandODMin: string;
    // glandODMax: string;
    calculationType: string;
    glandWidthMin: number; // started : withMinMax properties
    glandWidthMax: number;
    glandDepthMin: number;
    glandDepthMax: number;
    glandAngleMin: number;
    glandAngleMax: number;
    bottomRadiiMin: number;
    bottomRadiiMax: number;
    topRadiiMin: number;
    topRadiiMax: number;
    gapMin: number;
    gapMax: number;
    glandCenterlineMin: number;
    glandCenterlineMax: number;
    glandWidthTolerance: string; // started with tolerance properties
    glandDepthTolerance: string;
    glandAngleTolerance: number;
    topRadiiTolerance: string;
    bottomRadiiTolerance: string;
    gapTolerance: string;
    glandCenterlineTolerance: string;
    // glandODTolerance: string;
    dashSize: string;

    constructor(options: {
        glandWidthNominal?: string,
        glandDepthNominal?: string,
        glandAngleNominal?: string,
        topRadiiNominal?: string,
        bottomRadiiNominal?: string,
        gapNominal?: string,
        glandCenterlineNominal?: string,
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
        // glandODNominal?: string,
        // glandODMin?: string,
        // glandODMax?: string,
        calculationType?: string,
        glandWidthMin?: number,
        glandWidthMax?: number,
        glandDepthMin?: number,
        glandAngleMin?: number,
        glandAngleMax?: number,
        glandDepthMax?: number,
        bottomRadiiMin?: number,
        bottomRadiiMax?: number,
        topRadiiMin?: number,
        topRadiiMax?: number,
        gapMin?: number,
        gapMax?: number,
        glandCenterlineMin?: number,
        glandCenterlineMax?: number,
        glandWidthTolerance?: string,
        glandDepthTolerance?: string,
        glandAngleTolerance?: number,
        topRadiiTolerance?: string,
        bottomRadiiTolerance?: string,
        gapTolerance?: string,
        glandCenterlineTolerance?: string;
        // glandODTolerance?: string,
        dashSize?: string
    } = {}) {
        this.unit = options.unit;
        this.unitTemp = options.unitTemp;
        this.glandWidthNominal = (+options.glandWidthNominal);
        this.glandDepthNominal = (+options.glandDepthNominal);
        this.glandAngleNominal = (+options.glandAngleNominal);
        this.topRadiiNominal = (+options.topRadiiNominal);
        this.bottomRadiiNominal = (+options.bottomRadiiNominal);
        this.gapNominal = options.gapNominal;
        this.glandCenterlineNominal = options.glandCenterlineNominal;
        this.oringIdNominal = options.oringIdNominal;
        this.oringCrossSectionNominal = options.oringCrossSectionNominal;
        this.inputOption = options.inputOption;
        this.operatingTemperatureNominal = (+options.operatingTemperatureNominal);
        this.operatingTemperatureMin = (+options.operatingTemperatureMin);
        this.operatingTemperatureMax = (+options.operatingTemperatureMax);
        this.ctedata = options.ctedata;
        this.materialCteNominal = options.materialCteNominal;
        this.rectangleType = options.rectangleType;
        // this.glandODNominal = options.glandODNominal;
        // this.glandODMin = options.glandODMin;
        // this.glandODMax = options.glandODMax;
        this.calculationType = options.calculationType;
        this.glandWidthMin = (+options.glandWidthMin); // started  withMinMax properties
        this.glandWidthMax = (+options.glandWidthMax);
        this.glandDepthMin = (+options.glandDepthMin);
        this.glandDepthMax = (+options.glandDepthMax);
        this.glandAngleMin = (+options.glandAngleMin);
        this.glandAngleMax = (+options.glandAngleMax);
        this.bottomRadiiMin = (+options.bottomRadiiMin);
        this.bottomRadiiMax = (+options.bottomRadiiMax);
        this.topRadiiMin = (+options.topRadiiMin);
        this.topRadiiMax = (+options.topRadiiMax);
        this.gapMin = options.gapMin;
        this.gapMax = options.gapMax;
        this.glandCenterlineMin = options.glandCenterlineMin;
        this.glandCenterlineMax = options.glandCenterlineMax;
        this.glandWidthTolerance = options.glandWidthTolerance; // started with tolerance properties
        this.glandDepthTolerance = options.glandDepthTolerance;
        this.glandAngleTolerance = options.glandAngleTolerance ? (+options.glandAngleTolerance) : 0;
        this.topRadiiTolerance = options.topRadiiTolerance;
        this.bottomRadiiTolerance = options.bottomRadiiTolerance;
        this.gapTolerance = options.gapTolerance;
        this.glandCenterlineTolerance = options.glandCenterlineTolerance;
        // this.glandODTolerance = options.glandODTolerance;
        this.dashSize = options.dashSize;
    }
}