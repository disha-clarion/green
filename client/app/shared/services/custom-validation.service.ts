import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

import { Validators, ORingTool_InternalVacuumOnly_Validators } from "../helpers/constants";
import { lessThanValidation } from "../directives/custom-validations/comparison-validation.directive";

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {
  constructor() { }

  getValidationFunc(validationKey: string): ValidatorFn {
    switch (validationKey) {
      // example
      // case Validators.FORBIDDEN_NAME_VALIDATOR: // TODO: just for test remove it 
      //   return forbiddenNameValidator(/bob/i);
      //   break;
      case ORingTool_InternalVacuumOnly_Validators.GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION:
        // return largerThanValidation();
        break;
      default:
        return null
        break;
    }
  }
}



