import { ORingMaxValuesModel } from "./oring-maxvalues";
export class ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel extends ORingMaxValuesModel {
    glandIdMax: number;

    constructor(options: {
        glandWidthMax?: number,
        glandDepthMax?: number,
        bottomRadiiMax?: number,
        gapMax?: number,
        glandIdMax?: number
    } = {}) {
        super(options);
        this.glandIdMax = options.glandIdMax;
    }
}