import { FormControlModel } from "./form-control.model";
import { ControlType } from "../shared/helpers/constants";

// model class to add extra properties for a control
export class ControlTextboxModel extends FormControlModel {
    type: string = ControlType.textbox;
    sub_type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || ControlType.textbox;
        this.sub_type = options['sub_type'] || "text";
    }
}