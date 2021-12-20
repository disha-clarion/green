import { FormRowModel } from "./form-row.model";

export class FormModel {
    form_id: string;
    form_key: string;
    show: boolean;
    form_title: string;
    form_title_css_class: string[];
    form_layout_row: FormRowModel[];
    // add validations which validate the form based in cross fields
    // cross fields means validate one control value based on another form control
    form_validation: string[];

    constructor(options: {
        form_id?: string;
        form_key?: string,
        show?: boolean,
        form_title?: string,
        form_title_css_class?: string[],
        form_layout_row?: FormRowModel[],
        form_validation?: string[]
    } = {}) {
        this.form_id = options.form_id;
        this.form_key = options.form_key;
        this.show = options.show;
        this.form_title = options.form_title;
        this.form_title_css_class = options.form_title_css_class;
        this.form_layout_row = options.form_layout_row;
        this.form_validation = options.form_validation;
    }
}