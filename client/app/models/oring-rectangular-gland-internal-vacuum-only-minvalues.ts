import { ORingMinValuesModel } from "./oring-minvalues";
export class ORingRectangularGlandInternalVacuumOnlyMinvaluesModel extends ORingMinValuesModel {
    glandIdMin: number;

    constructor(options: {
        glandWidthMin?: number,
        glandDepthMin?: number,
        bottomRadiiMin?: number,
        gapMin?: number,
        glandIdMin?: number
    } = {}) {
        super(options);
        this.glandIdMin = options.glandIdMin;
    }
}