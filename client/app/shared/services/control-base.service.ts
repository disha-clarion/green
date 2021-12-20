import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

import { FormControlModel } from "../../models/form-control.model";
import { CustomValidationService } from "../../shared/services/custom-validation.service";

@Injectable({
  providedIn: 'root'
})
export class ControlBaseService {

  constructor(private customValidationService: CustomValidationService) { }

  // iterate over each control and creates formControl
  // return FormGroup of
  toFormGroup(controls: FormControlModel[], formGroupValidators?: []) {
    const group: any = {};

    controls.forEach(control => {
      if (control.validation && control.validation.length > 0) {

        let validations: ValidatorFn[] = [];
        for (let index = 0; index < control.validation.length; index++) {
          // if not null or undefined
          const validationFunc: ValidatorFn = this.customValidationService.getValidationFunc(control[index]?.validation);
          if (validationFunc) {
            return validations.push(validationFunc);
          }
        }

        if (control.required) {
          // merge required validation and other validation
          if (validations.length > 0) {
            validations = [Validators.required, ...validations];
          }
          else {
            validations = [Validators.required];
          }
        }

        // create form control with value
        group[control.key] = new FormControl(control.value || control.defaultvalue || '', validations);

        // disable controls
        if (control.isDisabled) {
          (group[control.key] as FormControl).disable();
        }
      }
      else {
        // create form control with value
        // add validation and create form control then add to formgroup object
        // adding required validation
        group[control.key] = control.required ? new FormControl(control.value || control.defaultvalue || '', Validators.required)
          : new FormControl(control.value || control.defaultvalue || '');

        // disable controls
        if (control.isDisabled) {
          (group[control.key] as FormControl).disable();
        }
      }
    });
    let fg = new FormGroup(group);
    fg.setValidators(formGroupValidators);
    return fg;
  }

  // input => array or any nested array or iterable object
  // return flattened array
  flatten(input: any) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      // pop value from stack
      const next = stack.pop();
      if (Array.isArray(next)) {
        // push back array items, won't modify the original input
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    // reverse to restore input order
    return res.reverse();
  }

  // helper method to get the equal size columns
  getColumnNumber(columnLength: number) {
    if (columnLength <= 12) {
      return (12 / (columnLength || 1));
    }
    else {
      return 12;
    }
  }
}
