// model class to add extra properties for a control
export class WrArMaterial {
    _id: any;
    materialName: string;
    poissonsRatio: number;
    modulusPSI: number;
    rotorCTE: number;
    statorCTE: number;

    constructor(options: {
        _id?: any;
        materialName?: string;
        poissonsRatio?: number;
        modulusPSI?: number;
        rotorCTE?: number;
        statorCTE?: number;
    } = {}) {
        this._id = options._id;
        this.materialName = options.materialName;
        this.poissonsRatio = options.poissonsRatio;
        this.modulusPSI = options.modulusPSI;
        this.rotorCTE = options.rotorCTE;
        this.statorCTE = options.statorCTE;
    }
}