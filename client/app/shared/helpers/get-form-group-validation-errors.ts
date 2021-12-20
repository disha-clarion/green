import { FormGroup } from '@angular/forms';
import { ErrorModel } from "../../models/error.model";

export function getFormGroupValidationErrors(form: FormGroup) {
    const result: ErrorModel[] = [];
    if (form.errors) {
        result.push(form.errors as ErrorModel);
    }
    return result;
}