export class ORingMaxValuesModel {
    glandWidthMax: number;
    glandDepthMax: number;
    bottomRadiiMax: number;
    gapMax: number;

    constructor(options: {
        glandWidthMax?: number,
        glandDepthMax?: number,
        bottomRadiiMax?: number,
        gapMax?: number
    } = {}) {
        this.glandWidthMax = options.glandWidthMax;
        this.glandDepthMax = options.glandDepthMax;
        this.bottomRadiiMax = options.bottomRadiiMax;
        this.gapMax = options.gapMax;
    }
}