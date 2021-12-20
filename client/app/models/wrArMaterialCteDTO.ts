export class WrArMaterialCteDTO {
    unit: string;
    material: any;

    constructor(options: {
        unit?: string,
        material?: any,
        customMaterial?: any,
    } = {}) {
        this.unit = options.unit;
        this.material = options.material;
    }
}
