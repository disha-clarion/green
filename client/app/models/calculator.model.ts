import { TwoColumnFormModel } from "./two_column_form.model";
import { FormOutputModel } from "./form-output.model";
import { FormControlModel } from "./form-control.model";

export class CalculatorModel {
    id: Number;
    order: Number;
    calculator_group_name: string;
    calculator_type: string;
    display_calculator_title: string;
    form: TwoColumnFormModel;
    form_output: FormOutputModel[];
    toolbarOption: FormControlModel;

    constructor(options: {
        id?: Number,
        order?: Number,
        calculator_type?: string,
        form?: TwoColumnFormModel,
        form_output?: FormOutputModel[]
    } = {}) {
        this.id = options.id;
        this.order = options.order || 0;
        this.form = options.form;
        this.form_output = options.form_output
    }
}