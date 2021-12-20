import { MaterialChoiceModel } from "./material-choice.model";

export class GlandSizeRectangularGlandInternalVacuumOnlyDTO {
    gapNominal: string;
    gapMin: string;
    gapMax: string;
    oringIdNominal: string;
    oringCrossSectionNominal: string;
    inputOption: string;
    unit: string;
    unitTemp: string;
    operatingTemperatureNominal: number;
    materialCteNominal: MaterialChoiceModel;
    rectangleType: string;
    calculationType: string;
    glandType: string;
    dashSize: string;

    constructor(options: {
        gapNominal?: string,
        gapMin?: string,
        gapMax?: string,
        oringIdNominal?: string,
        oringCrossSectionNominal?: string,
        inputOption?: string,
        unit?: string,
        unitTemp?: string,
        operatingTemperatureNominal?: number,
        materialCteNominal?: MaterialChoiceModel,
        rectangleType?: string,
        calculationType?: string,
        glandType?: string,
        dashSize?: string
    } = {}) {
        this.gapNominal = options.gapNominal;
        this.gapMin = options.gapMin;
        this.gapMax = options.gapMax;
        this.operatingTemperatureNominal = (+options.operatingTemperatureNominal);
        this.materialCteNominal = options.materialCteNominal;
        this.oringCrossSectionNominal = options.oringCrossSectionNominal;
        this.oringIdNominal = options.oringIdNominal;
        this.unit = options.unit;
        this.unitTemp = options.unitTemp;
        this.inputOption = options.inputOption;
        this.rectangleType = options.rectangleType;
        this.calculationType = options.calculationType;
        this.glandType = options.glandType;
        this.dashSize = options.dashSize;
    }
}