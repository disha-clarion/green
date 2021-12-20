// core imports
import { Injectable } from '@angular/core';
import { ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

// application imports
import { lessThanValidation, largerThanValidation } from "../../shared/directives/custom-validations/comparison-validation.directive";
import { ErrorModel } from '../../models/error.model';
import { SwitchButtonModel } from '../../models/switch-button.model';
import { Units, ErrorTypes } from '../../shared/helpers/constants';
import { UnitButtonService } from '../../shared/components/unit-button/unit-button.service';
import { HelperService } from "../../shared/services/helper.service";

@Injectable({
  providedIn: 'root'
})
export class ArWrFloatingValidationService {

  constructor(
    private readonly helperService: HelperService,
    private readonly unitButtonService: UnitButtonService
  ) { }

  /********************************************************************/
  /*********************** Client Side Validation *********************/
  /******************** Prevent the form submission********************/
  /********************************************************************/

  // Function serviceStorageTemperature min validation
  serviceStorageTemperatureMinValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const serviceStorageTemperatureAmbient75FMinControl = control.get('serviceStorageTemperatureAmbient75FMin');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
      let error = null;
      if (serviceStorageTemperatureAmbient75FMinControl
        && serviceStorageTemperatureAmbient75FMinControl.value
      ) {
        // check O-ring cross section is in range or not else set error message
        let serviceStorageTemperatureAmbient75FMinError: ErrorModel;

        if ((+currentSelectedUnit.id) === Units.INCH) {
          serviceStorageTemperatureAmbient75FMinError = largerThanValidation(
            serviceStorageTemperatureAmbient75FMinControl.value, "75",
            "serviceStorageTemperatureAmbient75FMin",
            "Minimum Temperature",
            "Must be 75°F or less");
        }
        else if ((+currentSelectedUnit.id) === Units.MILLI_METER) {
          serviceStorageTemperatureAmbient75FMinError = largerThanValidation(
            serviceStorageTemperatureAmbient75FMinControl.value, "24",
            "serviceStorageTemperatureAmbient75FMin",
            "Minimum Temperature",
            "Must be 24°C or less");
        }

        if (serviceStorageTemperatureAmbient75FMinError) {
          error = serviceStorageTemperatureAmbient75FMinError;
        }
      }

      this.helperService.setValidationErrorToFormControl(
        serviceStorageTemperatureAmbient75FMinControl,
        error,
        "serviceStorageTemperatureAmbientMin");
      return error;
    };
  }

  // Function serviceStorageTemperature max validation
  serviceStorageTemperatureMaxValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const serviceStorageTemperatureAmbient75FMaxControl = control.get('serviceStorageTemperatureAmbient75FMax');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
      let error = null;
      if (serviceStorageTemperatureAmbient75FMaxControl
        && serviceStorageTemperatureAmbient75FMaxControl.value
      ) {
        // check O-ring cross section is in range or not else set error message
        let serviceStorageTemperatureAmbient75FMaxError: ErrorModel;

        if ((+currentSelectedUnit.id) === Units.INCH) {
          serviceStorageTemperatureAmbient75FMaxError = lessThanValidation(
            serviceStorageTemperatureAmbient75FMaxControl.value, "75",
            "serviceStorageTemperatureAmbient75FMax",
            "Maximum Temperature",
            "Must be 75°F or more");
        }
        else if ((+currentSelectedUnit.id) === Units.MILLI_METER) {
          serviceStorageTemperatureAmbient75FMaxError = lessThanValidation(
            serviceStorageTemperatureAmbient75FMaxControl.value, "24",
            "serviceStorageTemperatureAmbient75FMax",
            "Maximum Temperature",
            "Must be 24°C or more");
        }


        if (serviceStorageTemperatureAmbient75FMaxError) {
          error = serviceStorageTemperatureAmbient75FMaxError;
        }
      }

      this.helperService.setValidationErrorToFormControl(
        serviceStorageTemperatureAmbient75FMaxControl,
        error,
        "serviceStorageTemperatureAmbientMax");
      return error;
    };
  }

  /********************************************************************/
  /************** O-Ring - Internal Vacuum only Warnings **************/
  /**************** Doen't prevent the form submission*****************/
  /********************************************************************/
  // gland width validation
  clearanceValidationBasedOnPumpAndComponentType(control: FormGroup): ErrorModel {
    const pumpTypeControl = control.get('pumpType');
    const componentTypeControl = control.get('componentType');

    if (pumpTypeControl && pumpTypeControl.value && componentTypeControl && componentTypeControl.value) {
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;

      const error = new ErrorModel();
      error.field = '';
      error.type = ErrorTypes.Warning;

      const bushing = "Follow OEM Bushing Clearance if Available";
      const bearing = "Follow OEM Bearing Clearance if Available";

      if (pumpTypeControl.value.id === 3 && componentTypeControl.value.id === 1) { // pumpType "VS" and componentType "Wear Ring"
        if ((+currentSelectedUnit.id) === Units.MILLI_METER) {
          error.detail = "Normal Wear Ring Clearance For VS Pumps is .05 mm Over Bearing Clearance (Or OEM Standard)";
        }
        else {
          // default inch unit is considered
          error.detail = "Normal Wear Ring Clearance For VS Pumps is .002 inch Over Bearing Clearance(Or OEM Standard)";
        }
      }
      else if (componentTypeControl.value.id === 2) {// componentType "Bushing"
        error.detail = bushing;
      }
      else if (componentTypeControl.value.id === 3) {// componentType Bearing"
        error.detail = bearing;
      }
      else {
        return null;
      }
      return error;
    }
    else {
      return null;
    }
  }
}
