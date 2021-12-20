import { FormColumnModel } from "./form-column.model";

export class FormRowModel {
    row_id: Number;
    order: Number;
    form_layout_columns: FormColumnModel[];
    css_classes: string[];
    show: boolean;

    constructor(options: {
        row_id?: Number,
        order?: Number,
        css_classes?: string[]
        form_layout_columns?: FormColumnModel[],
        show?: boolean
    } = {}) {
        this.row_id = options.row_id;
        this.order = options.order || 0;
        this.form_layout_columns = options.form_layout_columns;
        this.css_classes = options.css_classes;
        this.show = options.show;
    }
}