export class ORingSizesDetailModel {
    dashSize: Number;
    oringCrossSectionSize: Number;
    oringDiameterSize: Number;
    glandIdSize: Number;
    glandIdTolerance: Number;

    constructor(options: {
        dashSize?: Number,
        oringCrossSectionSize?: Number,
        oringDiameterSize?: Number,
        glandIdSize?: Number,
        glandIdTolerance?: Number
    } = {}) {
        this.dashSize = options.dashSize;
        this.oringCrossSectionSize = options.oringCrossSectionSize;
        this.oringDiameterSize = options.oringDiameterSize;
        this.glandIdSize = options.glandIdSize;
        this.glandIdTolerance = options.glandIdTolerance;
    }
}