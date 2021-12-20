import { FormControlModel } from "./form-control.model";
import { FormRowModel } from "./form-row.model";

export class FormColumnModel {
    col_id: Number;
    order: Number;
    css_classes: string[];
    form_controls: FormControlModel[];

    constructor(options: {
        col_id?: Number,
        order?: Number,
        css_classes?: []
        form_controls?: FormControlModel[],
        form_layout_row?: FormRowModel[]
    } = {}) {
        this.col_id = options.col_id;
        this.order = options.order || 0;
        this.css_classes = options.css_classes;
        this.form_controls = options.form_controls;
    }
}