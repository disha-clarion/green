export class DropDownModel {
    id: number;
    label: string;
    value: string;

    constructor(options: { id?: number; label?: string; value?: string } = {}) {
        this.id = options.id;
        this.label = options.label;
        this.value = options.value;
    }
}