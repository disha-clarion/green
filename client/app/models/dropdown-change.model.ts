import { Form } from '@angular/forms';
import { FormControlModel } from './form-control.model';

export class DropDownChangeModel {
    formControl: FormControlModel;
    value: any;

    constructor(options: { formControl?: FormControlModel, value?: any } = {}) {
        this.formControl = options.formControl;
        this.value = options.value;
    }
}