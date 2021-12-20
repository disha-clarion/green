import { FormModel } from "./form.model";
import { FormRowModel } from "./form-row.model";

export class TwoColumnFormModel extends FormModel {
    left_column: Column;
    right_column: Column;

    constructor(options: {} = {}) {
        super(options);
    }
}


export class Column {
    form_layout_row: FormRowModel[];
}