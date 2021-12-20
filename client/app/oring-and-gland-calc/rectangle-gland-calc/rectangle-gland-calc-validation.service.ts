// core imports
import { Injectable } from '@angular/core';
import { ValidatorFn, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

// application imports
import { lessThanValidation, largerThanValidation } from "../../shared/directives/custom-validations/comparison-validation.directive";
import { MaterialChoiceModel } from '../../models/material-choice.model';
import { SwitchButtonModel } from '../../models/switch-button.model';
import { Temperature, Units, ErrorTypes } from '../../shared/helpers/constants';
import { ErrorModel } from '../../models/error.model';
import { HelperService } from "../../shared/services/helper.service";
import { UnitButtonService } from '../../shared/components/unit-button/unit-button.service';
import { TemperatureButtonService } from '../../shared/components/temperature-button/temperature-button.service';

@Injectable({
  providedIn: 'root'
})
export class RectangleGlandCalcValidationService {
  constructor(
    private helperService: HelperService,
    private unitButtonService: UnitButtonService,
    private temperatureButtonService: TemperatureButtonService
  ) { }

  /********************************************************************/
  /*********************** Client Side Validation *********************/
  /******************** Prevent the form submission********************/
  /********************************************************************/
  // operating temperture nominal validation
  operatingTemperatureValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const materialCteNominalControl = control.get('materialCteNominal');
      const operatingTemperatureNominalControl = control.get('operatingTemperatureNominal');
      const currentSelectedTemperature: SwitchButtonModel = this.temperatureButtonService.getCurrentTemperatureValue;
      let materialCteNominalValue = materialCteNominalControl.value as MaterialChoiceModel;
      let error = null;
      if (
        materialCteNominalValue
        && materialCteNominalValue.maxtemp
        && operatingTemperatureNominalControl.value !== ''
        && operatingTemperatureNominalControl.value !== null
        && operatingTemperatureNominalControl.value !== undefined
      ) {
        let message = "";
        if (Temperature.FAHRENHEIT === +(currentSelectedTemperature.id)) {
          message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintempF + " to " + materialCteNominalValue.maxtempF + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
        }
        else {
          // default CELCIUS
          message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintemp + " to " + materialCteNominalValue.maxtemp + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
        }
        let operatingTemperatureNominalInCelcius = operatingTemperatureNominalControl.value;
        if ((+currentSelectedTemperature.id) === Temperature.FAHRENHEIT) {
          operatingTemperatureNominalInCelcius = this.helperService.convertFahrenheitToCelcius(operatingTemperatureNominalControl.value).toFixed(2);
        }
        const operatingTemperatureNominalLessThanMaxTempError = lessThanValidation(materialCteNominalValue.maxtemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
        const operatingTemperatureNominalLargerThanMinTempError = largerThanValidation(materialCteNominalValue.mintemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
        error = operatingTemperatureNominalLessThanMaxTempError || operatingTemperatureNominalLargerThanMinTempError;
        operatingTemperatureNominalControl.setErrors(error);
      }

      return error;
    };
  }

  // Function check O-ring cross section is in range or not else set error message
  oringCrossSectionNominalValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
      let error = null;
      if (
        oringCrossSectionNominalControl && oringCrossSectionNominalControl.value !== ''
        && oringCrossSectionNominalControl.value !== null
        && oringCrossSectionNominalControl.value !== undefined
      ) {

        // check O-ring cross section is in range or not else set error message
        let oringCrossSectionNominalLessThanRangeError: ErrorModel;
        let oringCrossSectionNominalLargerThanRangeError: ErrorModel;

        if ((+currentSelectedUnit.id) === Units.INCH) {
          oringCrossSectionNominalLessThanRangeError = lessThanValidation(oringCrossSectionNominalControl.value, "0.056", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently less than AS568A standards, please contact Greene Tweed for this custom application.");
          oringCrossSectionNominalLargerThanRangeError = largerThanValidation(oringCrossSectionNominalControl.value, "0.331", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently greater than AS568A standards, please contact Greene Tweed for this custom application.");
        }

        if ((+currentSelectedUnit.id) === Units.MILLI_METER) {
          oringCrossSectionNominalLessThanRangeError = lessThanValidation(oringCrossSectionNominalControl.value, "1.42", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently less than AS568A standards, please contact Greene Tweed for this custom application.");
          oringCrossSectionNominalLargerThanRangeError = largerThanValidation(oringCrossSectionNominalControl.value, "8.41", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently greater than AS568A standards, please contact Greene Tweed for this custom application.");
        }


        error = oringCrossSectionNominalLessThanRangeError || oringCrossSectionNominalLargerThanRangeError;
        oringCrossSectionNominalControl.setErrors(error);
      }

      return error;
    };
  }

  // oRingId nominal validation
  oringIDNominalLargerThanMaxOringIDValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const oringIdNominalControl = control.get('oringIdNominal');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
      const maxOringIdValue = this.helperService.maxOringIdValue(currentSelectedUnit);
      let error = null;
      if (
        oringIdNominalControl && oringIdNominalControl.value !== ''
        && oringIdNominalControl.value !== null
        && oringIdNominalControl.value !== undefined
      ) {
        error = largerThanValidation(oringIdNominalControl.value, maxOringIdValue.toString(), "oringIdNominal", "O-ring Id", `Please make maximum O-ring ID entry to be no more than ${maxOringIdValue} ${currentSelectedUnit.display_Short_title}`);

        this.helperService.setValidationErrorToFormControl(oringIdNominalControl, error, "errorORingIDNominalMaxValue");
      }

      return error;
    };
  }

  // orin id standard warning and prevent to submit the form
  oRingIDAS568AStandardsWarning(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let warning: ErrorModel = null;
      const oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
      const oringIdNominalControl: AbstractControl = control.get('oringIdNominal');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;

      if (
        oringCrossSectionNominalControl.value !== ''
        && oringCrossSectionNominalControl.value !== null
        && oringCrossSectionNominalControl.value !== undefined
        && oringIdNominalControl.value !== ''
        && oringIdNominalControl.value !== null
        && oringIdNominalControl.value !== undefined
      ) {
        if ((+currentSelectedUnit.id) === Units.INCH) {
          if ((parseFloat(oringCrossSectionNominalControl.value) >= 0.056 && parseFloat(oringCrossSectionNominalControl.value) <= 0.086 && (parseFloat(oringIdNominalControl.value) > 5.239 || parseFloat(oringIdNominalControl.value) < 0.101)) ||
            (parseFloat(oringCrossSectionNominalControl.value) >= 0.087 && parseFloat(oringCrossSectionNominalControl.value) <= 0.121 && (parseFloat(oringIdNominalControl.value) > 9.737 || parseFloat(oringIdNominalControl.value) < 0.049)) ||
            (parseFloat(oringCrossSectionNominalControl.value) >= 0.122 && parseFloat(oringCrossSectionNominalControl.value) <= 0.174 && (parseFloat(oringIdNominalControl.value) > 17.955 || parseFloat(oringIdNominalControl.value) < 0.171)) ||
            (parseFloat(oringCrossSectionNominalControl.value) >= 0.175 && parseFloat(oringCrossSectionNominalControl.value) <= 0.242 && (parseFloat(oringIdNominalControl.value) > 25.940 || parseFloat(oringIdNominalControl.value) < 0.412)) ||
            (parseFloat(oringCrossSectionNominalControl.value) >= 0.243 && parseFloat(oringCrossSectionNominalControl.value) <= 0.331 && (parseFloat(oringIdNominalControl.value) > 25.940 || parseFloat(oringIdNominalControl.value) < 4.475)))
            warning = new ErrorModel({ field: "oringIdNominal", title: "O-ring Inside Diameter", detail: "O-ring Diameter is currently not as per AS568A standards, please contact Greene Tweed for this custom application.", type: ErrorTypes.Warning });
        }
        if ((+currentSelectedUnit.id) === Units.MILLI_METER) {
          if ((parseFloat(oringCrossSectionNominalControl.value) >= 1.42 && parseFloat(oringCrossSectionNominalControl.value) <= 2.18 && (parseFloat(oringIdNominalControl.value) > 133.07 || parseFloat(oringIdNominalControl.value) < 2.57)) ||
            (parseFloat(oringCrossSectionNominalControl.value) >= 2.21 && parseFloat(oringCrossSectionNominalControl.value) <= 3.07 && (parseFloat(oringIdNominalControl.value) > 247.32 || parseFloat(oringIdNominalControl.value) < 1.24)) ||
            (parseFloat(oringCrossSectionNominalControl.value) >= 3.1 && parseFloat(oringCrossSectionNominalControl.value) <= 4.42 && (parseFloat(oringIdNominalControl.value) > 456.06 || parseFloat(oringIdNominalControl.value) < 4.34)) ||
            (parseFloat(oringCrossSectionNominalControl.value) >= 4.45 && parseFloat(oringCrossSectionNominalControl.value) <= 6.15 && (parseFloat(oringIdNominalControl.value) > 658.88 || parseFloat(oringIdNominalControl.value) < 10.46)) ||
            (parseFloat(oringCrossSectionNominalControl.value) >= 6.17 && parseFloat(oringCrossSectionNominalControl.value) <= 8.41 && (parseFloat(oringIdNominalControl.value) > 658.88 || parseFloat(oringIdNominalControl.value) < 113.67)))
            warning = new ErrorModel({ field: "oringIdNominal", title: "O-ring Inside Diameter", detail: "O-ring Diameter is currently not as per AS568A standards, please contact Greene Tweed for this custom application.", type: ErrorTypes.Warning });
        }
        this.helperService.setValidationErrorToFormControl(oringIdNominalControl, warning, "warningORingIDNominalStandard");
        // this.helperService.setValidationErrorToFormControl(control, "oringIdNominal", warning, "warningORingIDNominalStandard");
      }
      return warning;
    };
  }
}
