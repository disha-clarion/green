import { FormRowModel } from "./form-row.model";

export class FormOutputModel {
    display_title: string;
    display_output_title: string;
    row: FormRowModel[];
    css_classes: string[];
    show: boolean;

    constructor(options: {
        display_title?: string;
        display_output_title?: string;
        row?: FormRowModel[];
        css_classes?: string[],
        show?: boolean
    } = {}) {
        this.display_title = options.display_title;
        this.display_output_title = options.display_output_title;
        this.row = options.row;
        this.css_classes = options.css_classes;
        this.show = options.show || true;
    }
}