export class ORingMinValuesModel {
    glandWidthMin: number;
    glandDepthMin: number;
    bottomRadiiMin: number;
    gapMin: number;

    constructor(options: {
        glandWidthMin?: number,
        glandDepthMin?: number,
        bottomRadiiMin?: number,
        gapMin?: number
    } = {}) {
        this.glandWidthMin = options.glandWidthMin;
        this.glandDepthMin = options.glandDepthMin;
        this.bottomRadiiMin = options.bottomRadiiMin;
        this.gapMin = options.gapMin;
    }
}