import { ORingMaxValuesModel } from "./oring-maxvalues";
export class ORingRectangularGlandExternalVacuumOnlyMaxvaluesModel extends ORingMaxValuesModel {
    glandODMax: number;

    constructor(options: {
        glandWidthMax?: number,
        glandDepthMax?: number,
        bottomRadiiMax?: number,
        gapMax?: number,
        glandODMax?: number
    } = {}) {
        super(options);
        this.glandODMax = options.glandODMax;
    }
}