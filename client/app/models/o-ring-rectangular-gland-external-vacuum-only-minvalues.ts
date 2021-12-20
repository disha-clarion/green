import { ORingMinValuesModel } from "./oring-minvalues";
export class ORingRectangularGlandExternalVacuumOnlyMinvaluesModel extends ORingMinValuesModel {
    glandODMin: number;

    constructor(options: {
        glandWidthMin?: number,
        glandDepthMin?: number,
        bottomRadiiMin?: number,
        gapMin?: number,
        glandODMin?: number
    } = {}) {
        super(options);
        this.glandODMin = options.glandODMin;
    }
}