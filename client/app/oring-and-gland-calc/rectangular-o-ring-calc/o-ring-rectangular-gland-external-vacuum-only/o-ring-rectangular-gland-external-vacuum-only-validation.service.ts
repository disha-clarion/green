// core imports
import { Injectable } from '@angular/core';
import { ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

// application imports
import { lessThanValidation, largerThanValidation, noLargerThanHalf, lessThanEqualValidation, largerThanEqualValidation } from "../../../shared/directives/custom-validations/comparison-validation.directive";
import { MaterialChoiceModel } from '../../../models/material-choice.model';
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { Temperature, Units, ErrorTypes, CalculatorOption } from '../../../shared/helpers/constants';
import { ErrorModel } from '../../../models/error.model';
import { ORingRectangularGlandExternalVacuumOnlyMinvaluesModel } from '../../../models/o-ring-rectangular-gland-external-vacuum-only-minvalues';
import { ORingRectangularGlandExternalVacuumOnlyMaxvaluesModel } from '../../../models/o-ring-rectangular-gland-external-vacuum-only-maxvalues';
import { UnitButtonService } from "../../../shared/components/unit-button/unit-button.service";
import { TemperatureButtonService } from "../../../shared/components/temperature-button/temperature-button.service";
import { HelperService } from "../../../shared/services/helper.service";

const glandWidthNoReliableWarningTitle = "Gland Width";
const glandWidthNoReliableWarningMessage = "The gland fill calculations will be considered not reliable as the o-ring could not expand fully into the gland.";

@Injectable({
  providedIn: 'root'
})
export class ORingRectangularGlandExternalVacuumOnlyValidationService {

  constructor(
    private helperService: HelperService,
    private unitButtonService: UnitButtonService,
    private temperatureButtonService: TemperatureButtonService
  ) { }

  /********************************************************************/
  /*********************** Client Side Validation *********************/
  /******************** Prevent the form submission********************/
  /********************************************************************/
  // gland width validation
  glandWidthShouldBeLargerThanORingCrossSection(control: FormGroup): ErrorModel {
    // return (control: FormGroup): ValidationErrors | null => {
    const glandWidthNominalControl = control.get('glandWidthNominal');
    const oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
    const error = lessThanEqualValidation(glandWidthNominalControl.value, oringCrossSectionNominalControl.value, "glandWidthNominal", "Gland Width", "For a rectangular gland, it is recommended for the gland width to be larger than the cross section of the o-ring.");
    return error;
  }

  //  oringCrossSectionNominalLessThan vaidate
  oringCrossSectionNominalLessThanValidation(control: FormGroup): ErrorModel {
    const oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
    const glandDepthNominalControl = control.get('glandDepthNominal');
    let error = null;
    if (oringCrossSectionNominalControl && glandDepthNominalControl && oringCrossSectionNominalControl.value && glandDepthNominalControl.value) {
      const oringCrossSectionNominalLessThanError = lessThanValidation(oringCrossSectionNominalControl.value, glandDepthNominalControl.value, "oringCrossSectionNominal", "O-ring Cross Section", "O-ring Cross Section should greater than or equal to gland depth.");
      error = oringCrossSectionNominalLessThanError;
    }
    return error;
  }

  // gland width nominal warning
  glandWidthNominalWarning(form: FormGroup): ErrorModel {
    let error: ErrorModel = null;
    const glandWidthNominalControl = form.get('glandWidthNominal');
    const oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
    const oringCrossSectionNominalControlValue = (1.5 * (+oringCrossSectionNominalControl.value)).toString();
    if (glandWidthNominalControl && glandWidthNominalControl.value && oringCrossSectionNominalControl && oringCrossSectionNominalControl.value) {
      error = largerThanValidation(glandWidthNominalControl.value, oringCrossSectionNominalControlValue, "glandWidthNominal", glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, ErrorTypes.Warning);
    }
    return error;
  }

  // gland width min warning
  glandWidthMinWarning(form: FormGroup, option: string): ErrorModel {
    let warning: ErrorModel = null;
    let glandWidthMinControlValue: number;


    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const minValues: ORingRectangularGlandExternalVacuumOnlyMinvaluesModel = this.generateMinValues(form);
      glandWidthMinControlValue = minValues.glandWidthMin;
    }
    else {
      glandWidthMinControlValue = form.get('glandWidthMin').value ? form.get('glandWidthMin').value : null;
    }

    if (glandWidthMinControlValue) {
      const oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
      const oringCrossSectionNominalControlValue = (1.5 * +(oringCrossSectionNominalControl.value)).toString();
      warning = largerThanValidation(glandWidthMinControlValue.toString(), oringCrossSectionNominalControlValue, (((+option) === CalculatorOption.WithTolerance) ? "glandWidthTolerance" : "glandWidthMin"), glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, ErrorTypes.Warning);
    }
    return warning;
  }

  // gland width max warning
  glandWidthMaxWarning(form: FormGroup, option: string): ErrorModel {
    let warning: ErrorModel = null;
    let glandWidthMaxControlValue: number;

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const maxValues: ORingRectangularGlandExternalVacuumOnlyMaxvaluesModel = this.generateMaxValues(form);
      glandWidthMaxControlValue = maxValues.glandWidthMax;
    }
    else {
      glandWidthMaxControlValue = form.get('glandWidthMax').value ? (+form.get('glandWidthMax').value) : null;
    }
    if (glandWidthMaxControlValue) {
      const oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
      const oringCrossSectionNominalControlValue = (1.5 * +(oringCrossSectionNominalControl.value)).toString();
      warning = largerThanValidation(glandWidthMaxControlValue.toString(), oringCrossSectionNominalControlValue, (((+option) === CalculatorOption.WithTolerance) ? "glandWidthTolerance" : "glandWidthMax"), glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, ErrorTypes.Warning);
    }
    return warning;
  }

  // bottomRadiiNominal min limit validation
  bottomRadiiShouldBeLargerThanBottomRadiiMinLimit(control: FormGroup): ErrorModel {
    const bottomRadiiNominalControl = control.get('bottomRadiiNominal');
    const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
    const bottomRadiiMinLimit = this.helperService.bottomRadiiMinLimit(currentSelectedUnit);
    const error = lessThanValidation(bottomRadiiNominalControl.value, bottomRadiiMinLimit.toString(), "bottomRadiiNominal", "Bottom Radii", `Minimum radii is ${bottomRadiiMinLimit} due to typical machining standards.`);
    return error;
  }

  /********************************************************************/
  /*********************** Client Side Validation *********************/
  /******************** Prevent the form submission********************/
  /********************************************************************/
  // bottom radii should not be larger than half(1/2) of glandWidthNominal
  // bottom radii should not be larger than glandDepthNominal
  bottomRadiiShouldNotBeLargerThanGlandWidthOrDepth(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const bottomRadiiNominalControl = control.get('bottomRadiiNominal');
      const bottomRadiiMinControl = control.get('bottomRadiiMin');
      const bottomRadiiMaxControl = control.get('bottomRadiiMax');
      const glandWidthNominalControl = control.get('glandWidthNominal');
      const glandDepthNominalControl = control.get('glandDepthNominal');
      const fieldName = "Bottom Radii";
      const errorMessage = "Bottom Radius must be no larger than 1/2 of Gland Width or Gland Depth.";
      let error: any = null;
      // bottomRadii Nominal
      if (bottomRadiiNominalControl) {
        const bottomRadiiNominalError1 = largerThanValidation(bottomRadiiNominalControl.value, glandDepthNominalControl.value, "bottomRadiiNominal", fieldName, errorMessage);
        const bottomRadiiNominalError2 = noLargerThanHalf(bottomRadiiNominalControl.value, glandWidthNominalControl.value, "bottomRadiiNominal", fieldName, errorMessage);
        if (bottomRadiiNominalError1) {
          error = bottomRadiiNominalError1;
        }
        else if (bottomRadiiNominalError2) {
          error = bottomRadiiNominalError2;
        }

        if (!bottomRadiiNominalControl.errors) {
          bottomRadiiNominalControl.setErrors(error);
        }
      }

      // bottomRadiiMin
      if (bottomRadiiMinControl) {
        const bottomRadiiMinError1 = largerThanValidation(bottomRadiiMinControl.value, glandDepthNominalControl.value, "bottomRadiiMin", fieldName, errorMessage);
        const bottomRadiiMinError2 = noLargerThanHalf(bottomRadiiMinControl.value, glandWidthNominalControl.value, "bottomRadiiMin", fieldName, errorMessage);
        if (bottomRadiiMinError1) {
          error = bottomRadiiMinError1;
        }
        else if (bottomRadiiMinError2) {
          error = bottomRadiiMinError2;
        }

        if (!bottomRadiiMinControl.errors) {
          bottomRadiiMinControl.setErrors(error);
        }
      }

      // bottomRadiiMax
      if (bottomRadiiMaxControl) {
        const bottomRadiiMaxError1 = largerThanValidation(bottomRadiiMaxControl.value, glandDepthNominalControl.value, "bottomRadiiMax", fieldName, errorMessage);
        const bottomRadiiMaxError2 = noLargerThanHalf(bottomRadiiMaxControl.value, glandWidthNominalControl.value, "bottomRadiiMax", fieldName, errorMessage);
        if (bottomRadiiMaxError1) {
          error = bottomRadiiMaxError1;
        }
        else if (bottomRadiiMaxError2) {
          error = bottomRadiiMaxError2;
        }

        if (!bottomRadiiMaxControl.errors) {
          bottomRadiiMaxControl.setErrors(error);
        }
      }
      return error;
    };
  }

  // operating temperture nominal validation
  operatingTemperatureValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const materialCteNominalControl = control.get('materialCteNominal');
      const operatingTemperatureNominalControl = control.get('operatingTemperatureNominal');
      const operatingTemperatureMinControl = control.get('operatingTemperatureMin');
      const operatingTemperatureMaxControl = control.get('operatingTemperatureMax');
      const currentSelectedTemperature: SwitchButtonModel = this.temperatureButtonService.getCurrentTemperatureValue;
      let materialCteNominalValue = materialCteNominalControl.value as MaterialChoiceModel;
      let error = null;
      if (materialCteNominalValue && materialCteNominalValue.maxtemp && operatingTemperatureNominalControl.value) {
        let message = "";
        if (Temperature.FAHRENHEIT === +(currentSelectedTemperature.id)) {
          message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintempF + " to " + materialCteNominalValue.maxtempF + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
        }
        else {
          // default CELCIUS
          message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintemp + " to " + materialCteNominalValue.maxtemp + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
        }

        // Nominal temperature min and max validation
        if (operatingTemperatureNominalControl.value) {
          let operatingTemperatureNominalInCelcius = operatingTemperatureNominalControl.value;
          if ((+currentSelectedTemperature.id) === Temperature.FAHRENHEIT) {
            operatingTemperatureNominalInCelcius = this.helperService.convertFahrenheitToCelcius(operatingTemperatureNominalControl.value).toFixed(2);
          }

          // Nominal temperature min and max validation
          const operatingTemperatureNominalLessThanMaxTempError = lessThanValidation(materialCteNominalValue.maxtemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
          const operatingTemperatureNominalLargerThanMinTempError = largerThanValidation(materialCteNominalValue.mintemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
          if (operatingTemperatureNominalLessThanMaxTempError || operatingTemperatureNominalLargerThanMinTempError) {
            error = operatingTemperatureNominalLessThanMaxTempError || operatingTemperatureNominalLargerThanMinTempError;
          }
          operatingTemperatureNominalControl.setErrors(error);
        }

        // Min temperature min and max validation
        if (operatingTemperatureMinControl.value) {
          let operatingTemperatureMinInCelcius = operatingTemperatureMinControl.value;
          if ((+currentSelectedTemperature.id) === Temperature.FAHRENHEIT) {
            operatingTemperatureMinInCelcius = this.helperService.convertFahrenheitToCelcius(operatingTemperatureMinControl.value).toFixed(2);
          }

          // Temperature min and max validation
          const operatingTemperatureMinLessThanMaxTempError = lessThanValidation(materialCteNominalValue.maxtemp, operatingTemperatureMinInCelcius, "operatingTemperatureMin", "Operating Temperature", message);
          const operatingTemperatureMinLargerThanMinTempError = largerThanValidation(materialCteNominalValue.mintemp, operatingTemperatureMinInCelcius, "operatingTemperatureMin", "Operating Temperature", message);
          if (operatingTemperatureMinLessThanMaxTempError || operatingTemperatureMinLargerThanMinTempError) {
            error = operatingTemperatureMinLessThanMaxTempError || operatingTemperatureMinLargerThanMinTempError;
          }
          operatingTemperatureMinControl.setErrors(error);
        }

        // Max Temperature min and max validation
        if (operatingTemperatureMaxControl.value) {
          let operatingTemperatureMaxInCelcius = operatingTemperatureMaxControl.value;
          if ((+currentSelectedTemperature.id) === Temperature.FAHRENHEIT) {
            operatingTemperatureMaxInCelcius = this.helperService.convertFahrenheitToCelcius(operatingTemperatureMaxControl.value).toFixed(2);
          }

          // Nominal temperature min and max validation
          const operatingTemperatureMaxLessThanMaxTempError = lessThanValidation(materialCteNominalValue.maxtemp, operatingTemperatureMaxInCelcius, "operatingTemperatureMax", "Operating Temperature", message);
          const operatingTemperatureMaxLargerThanMinTempError = largerThanValidation(materialCteNominalValue.mintemp, operatingTemperatureMaxInCelcius, "operatingTemperatureMax", "Operating Temperature", message);
          if (operatingTemperatureMaxLessThanMaxTempError || operatingTemperatureMaxLargerThanMinTempError) {
            error = operatingTemperatureMaxLessThanMaxTempError || operatingTemperatureMaxLargerThanMinTempError;
          }
          operatingTemperatureMaxControl.setErrors(error);
        }
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
      if (oringCrossSectionNominalControl && oringCrossSectionNominalControl.value) {

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


        if (oringCrossSectionNominalLessThanRangeError || oringCrossSectionNominalLargerThanRangeError) {
          error = oringCrossSectionNominalLessThanRangeError || oringCrossSectionNominalLargerThanRangeError;
        }
      }

      if (!oringCrossSectionNominalControl.errors) {
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
      if (oringIdNominalControl && oringIdNominalControl.value) {
        error = largerThanValidation(oringIdNominalControl.value, maxOringIdValue.toString(), "oringIdNominal", "O-ring Id", `Please make maximum O-ring ID entry to be no more than ${maxOringIdValue} ${currentSelectedUnit.display_Short_title}`);

        // if (!oringIdNominalControl.errors) {
        //   oringIdNominalControl.setErrors(error);
        // }
        this.helperService.setValidationErrorToFormControl(oringIdNominalControl, error, "oringIDNominalLargerThanMaxOringID");
      }

      return error;
    };
  }

  // less than zero validation
  formLessThanZeroValidation(toolbarOptionkey: any): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error = null;
      // get form controls key
      const formControlKeys = Object.keys(control.controls);
      // loop through the reactive form/formgroup controls 
      for (let index = 0; index < formControlKeys.length; index++) {
        // skip toolbar options(Nominal, Tolerance, Min and Max) resetting
        if (toolbarOptionkey === formControlKeys[index]) {
          continue;
        }

        // skip gapNominal and operatingTemperatureNominal
        if (formControlKeys[index] === "gapNominal" || formControlKeys[index] === "gapTolerance"
          || formControlKeys[index] === "gapMin" || formControlKeys[index] === "gapMax"
          || formControlKeys[index] === "operatingTemperatureMin"
          || formControlKeys[index] === "operatingTemperatureNominal"
          || formControlKeys[index] === "operatingTemperatureMax"
        ) {
          continue;
        }

        // any form control value is less than zero
        const error = lessThanEqualValidation(control.controls[formControlKeys[index]].value, "0", formControlKeys[index], "", "Input values should not be Zero or Negative, except Gap and Operating Temperature.");

        // set error to form control
        // control.controls[formControlKeys[index]].setErrors(error);
        const fc = control.get(formControlKeys[index]);
        this.helperService.setValidationErrorToFormControl(fc, error, "LessThanZeroValueError");
      }
      return error;
    };
  }

  // tolrerance validation
  toleranceValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error: ErrorModel = null;
      const msg = "Tolerance value should not greater or equal to respective nominal value.";
      const glandWidthToleranceControl = control.get('glandWidthTolerance');
      const glandWidthNominalControl = control.get('glandWidthNominal');
      const glandDepthToleranceControl = control.get('glandDepthTolerance');
      const glandDepthNominalControl = control.get('glandDepthNominal');
      const bottomRadiiToleranceControl = control.get('bottomRadiiTolerance');
      const bottomRadiiNominalControl = control.get('bottomRadiiNominal');
      const gapToleranceControl = control.get('gapTolerance');
      const gapNominalControl = control.get('gapNominal');
      const glandODToleranceControl = control.get('glandODTolerance');
      const glandODNominalControl = control.get('glandODNominal');

      if (glandWidthToleranceControl.value) {
        error = largerThanEqualValidation(glandWidthToleranceControl.value, glandWidthNominalControl.value, "glandWidthTolerance", "", msg);
        // this.helperService.setFormValidationErrorToControl(control, "glandWidthTolerance", error);
        this.helperService.setValidationErrorToFormControl(glandWidthToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (glandDepthToleranceControl.value) {
        error = largerThanEqualValidation(glandDepthToleranceControl.value, glandDepthNominalControl.value, "glandDepthTolerance", "", msg);
        // this.helperService.setFormValidationErrorToControl(control, "glandDepthTolerance", error);
        this.helperService.setValidationErrorToFormControl(glandDepthToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (bottomRadiiToleranceControl.value) {
        error = largerThanEqualValidation(bottomRadiiToleranceControl.value, bottomRadiiNominalControl.value, "bottomRadiiTolerance", "", msg);
        // this.helperService.setFormValidationErrorToControl(control, "bottomRadiiTolerance", error);
        this.helperService.setValidationErrorToFormControl(bottomRadiiToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (glandODToleranceControl.value) {
        error = largerThanEqualValidation(glandODToleranceControl.value, glandODNominalControl.value, "glandODTolerance", "", msg);
        // this.helperService.setFormValidationErrorToControl(control, "glandODTolerance", error);
        this.helperService.setValidationErrorToFormControl(glandODToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (gapToleranceControl.value && gapToleranceControl.value != 0) {
        error = largerThanEqualValidation(gapToleranceControl.value, gapNominalControl.value, "gapTolerance", "", msg);
        // this.helperService.setFormValidationErrorToControl(control, "gapTolerance", error);
        this.helperService.setValidationErrorToFormControl(gapToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }
      return error;
    };
  }

  // min validation
  minValueValidation(control: FormGroup, option: string): ErrorModel[] {
    let errors: ErrorModel[] = [];
    const msg = "Min values should be less or equal to nominal value.";

    const glandWidthNominalControl = control.get('glandWidthNominal');
    const glandDepthNominalControl = control.get('glandDepthNominal');
    const bottomRadiiNominalControl = control.get('bottomRadiiNominal');
    const glandODNominalControl = control.get('glandODNominal');
    const gapNominalControl = control.get('gapNominal');

    let glandWidthMinControlValue: number;
    let glandDepthMinControlValue: number;
    let bottomRadiiMinControlValue: number;
    let gapMinControlValue: number;
    let glandODMinControlValue: number;

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const minValues: ORingRectangularGlandExternalVacuumOnlyMinvaluesModel = this.generateMinValues(control);
      glandWidthMinControlValue = minValues.glandWidthMin;
      glandDepthMinControlValue = minValues.glandDepthMin;
      bottomRadiiMinControlValue = minValues.bottomRadiiMin;
      gapMinControlValue = minValues.gapMin;
      glandODMinControlValue = minValues.glandODMin;
    }
    else {
      glandWidthMinControlValue = control.get('glandWidthMin').value ? (+control.get('glandWidthMin').value) : null;
      glandDepthMinControlValue = control.get('glandDepthMin').value ? (+control.get('glandDepthMin').value) : null;
      bottomRadiiMinControlValue = control.get('bottomRadiiMin').value ? (+control.get('bottomRadiiMin').value) : null;
      gapMinControlValue = control.get('gapMin').value ? (+control.get('gapMin').value) : null;
      glandODMinControlValue = control.get('glandODMin').value ? (+control.get('glandODMin').value) : null;
    }

    // min value validation
    if (glandWidthMinControlValue) {
      const error1 = largerThanValidation(glandWidthMinControlValue.toString(), glandWidthNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandWidthTolerance" : "glandWidthMin"), "", msg);
      if (error1) {
        errors.push(error1);
      }
    }

    if (glandDepthMinControlValue) {
      const error2 = largerThanValidation(glandDepthMinControlValue.toString(), glandDepthNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandDepthTolerance" : "glandDepthMin"), "", msg);
      if (error2) {
        errors.push(error2);
      }
    }

    if (bottomRadiiMinControlValue) {
      const error3 = largerThanValidation(bottomRadiiMinControlValue.toString(), bottomRadiiNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "bottomRadiiTolerance" : "bottomRadiiMin"), "", msg);
      if (error3) {
        errors.push(error3);
      }
    }

    if (gapMinControlValue) {
      const error4 = largerThanValidation(gapMinControlValue.toString(), gapNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "gapTolerance" : "gapMin"), "", msg);
      if (error4) {
        errors.push(error4);
      }
    }

    if (!isNaN(glandODMinControlValue) && glandODMinControlValue > 0) {
      const error5 = largerThanValidation(glandODMinControlValue.toString(), glandODNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandODTolerance" : "glandODMin"), "", msg);
      if (error5) {
        errors.push(error5);
      }
    }
    return errors;
  }

  maxValueValidation(control: FormGroup, option: string): ErrorModel[] {
    let errors: ErrorModel[] = [];
    const msg = "Max value should be greater or equal to nominal value.";

    const glandWidthNominalControl = control.get('glandWidthNominal');
    const glandDepthNominalControl = control.get('glandDepthNominal');
    const bottomRadiiNominalControl = control.get('bottomRadiiNominal');
    const gapNominalControl = control.get('gapNominal');
    const glandODNominalControl = control.get('glandODNominal');

    let glandWidthMaxControlValue: number;
    let glandDepthMaxControlValue: number;
    let bottomRadiiMaxControlValue: number;
    let gapMaxControlValue: number;
    let glandODMaxControlValue: number;

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate max values
      const maxValues: ORingRectangularGlandExternalVacuumOnlyMaxvaluesModel = this.generateMaxValues(control);
      glandWidthMaxControlValue = maxValues.glandWidthMax;
      glandDepthMaxControlValue = maxValues.glandDepthMax;
      bottomRadiiMaxControlValue = maxValues.bottomRadiiMax;
      gapMaxControlValue = maxValues.gapMax;
      glandODMaxControlValue = maxValues.glandODMax;
    }
    else {
      glandWidthMaxControlValue = control.get('glandWidthMax').value ? (+control.get('glandWidthMax').value) : null;
      glandDepthMaxControlValue = control.get('glandDepthMax').value ? (+control.get('glandDepthMax').value) : null;
      bottomRadiiMaxControlValue = control.get('bottomRadiiMax').value ? (+control.get('bottomRadiiMax').value) : null;
      gapMaxControlValue = control.get('gapMax').value ? (+control.get('gapMax').value) : null;
      glandODMaxControlValue = control.get('glandODMax').value ? (+control.get('glandODMax').value) : null;
    }

    // max value validation
    if (glandWidthMaxControlValue) {
      const error1 = lessThanValidation(glandWidthMaxControlValue.toString(), glandWidthNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandWidthTolerance" : "glandWidthMax"), "", msg);
      if (error1) {
        errors.push(error1);
      }
    }

    if (glandDepthMaxControlValue) {
      const error2 = lessThanValidation(glandDepthMaxControlValue.toString(), glandDepthNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandDepthTolerance" : "glandDepthMax"), "", msg);
      if (error2) {
        errors.push(error2);
      }
    }

    if (bottomRadiiMaxControlValue) {
      const error3 = lessThanValidation(bottomRadiiMaxControlValue.toString(), bottomRadiiNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "bottomRadiiTolerance" : "bottomRadiiMax"), "", msg);
      if (error3) {
        errors.push(error3);
      }
    }

    if (gapMaxControlValue) {
      const error4 = lessThanValidation(gapMaxControlValue.toString(), gapNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "gapTolerance" : "gapMax"), "", msg);
      if (error4) {
        errors.push(error4);
      }
    }

    if (!isNaN(glandODMaxControlValue) && glandODMaxControlValue > 0) {
      const error5 = lessThanValidation(glandODMaxControlValue.toString(), glandODNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandODTolerance" : "glandODMax"), "", msg);
      if (error5) {
        errors.push(error5);
      }
    }
    return errors;
  }

  // orin id standard warning and prevent to submit the form
  oRingIDAS568AStandardsWarning(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let warning: ErrorModel = null;
      const oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
      const oringIdNominalControl = control.get('oringIdNominal');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;

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
      // if (!oringIdNominalControl.errors) {
      //   // set form error
      //   oringIdNominalControl.setErrors(warning);
      // }
      this.helperService.setValidationErrorToFormControl(oringIdNominalControl, warning, "oRingIDAS568AStandards");
      return warning;
    };
  }

  // generate min values when option is Tolerance
  generateMinValues(form: FormGroup): ORingRectangularGlandExternalVacuumOnlyMinvaluesModel {
    let minValue: ORingRectangularGlandExternalVacuumOnlyMinvaluesModel = new ORingRectangularGlandExternalVacuumOnlyMinvaluesModel();
    const glandWidthNominalControl = form.get('glandWidthNominal');
    const glandWidthToleranceControl = form.get('glandWidthTolerance');
    const glandDepthNominalControl = form.get('glandDepthNominal');
    const glandDepthToleranceControl = form.get('glandDepthTolerance');
    const bottomRadiiToleranceControl = form.get('bottomRadiiTolerance');
    const gapNominalControl = form.get('gapNominal');
    const gapToleranceControl = form.get('gapTolerance');
    const bottomRadiiNominalControl = form.get('bottomRadiiNominal');
    const glandODNominalControl = form.get('glandODNominal');
    const glandODToleranceControl = form.get('glandODTolerance');

    minValue.glandWidthMin = (parseFloat(glandWidthNominalControl.value ? glandWidthNominalControl.value : "0") - parseFloat(glandWidthToleranceControl.value ? glandWidthToleranceControl.value : "0"));
    minValue.glandDepthMin = (parseFloat(glandDepthNominalControl.value ? glandDepthNominalControl.value : "0") - parseFloat(glandDepthToleranceControl.value ? glandDepthToleranceControl.value : "0"));
    minValue.bottomRadiiMin = (parseFloat(bottomRadiiNominalControl.value ? bottomRadiiNominalControl.value : "0") - parseFloat(bottomRadiiToleranceControl.value ? bottomRadiiToleranceControl.value : "0"));
    minValue.gapMin = (parseFloat(gapNominalControl.value ? gapNominalControl.value : "0") - parseFloat(gapToleranceControl.value ? gapToleranceControl.value : "0"));
    minValue.glandODMin = (parseFloat(glandODNominalControl.value ? glandODNominalControl.value : "0") - parseFloat(glandODToleranceControl.value ? glandODToleranceControl.value : "0"));
    return minValue;
  }

  // generate max values when option is Tolerance
  generateMaxValues(form: FormGroup): ORingRectangularGlandExternalVacuumOnlyMaxvaluesModel {
    let maxValue: ORingRectangularGlandExternalVacuumOnlyMaxvaluesModel = new ORingRectangularGlandExternalVacuumOnlyMaxvaluesModel();
    const glandWidthNominalControl = form.get('glandWidthNominal');
    const glandWidthToleranceControl = form.get('glandWidthTolerance');
    const glandDepthNominalControl = form.get('glandDepthNominal');
    const glandDepthToleranceControl = form.get('glandDepthTolerance');
    const bottomRadiiToleranceControl = form.get('bottomRadiiTolerance');
    const gapNominalControl = form.get('gapNominal');
    const gapToleranceControl = form.get('gapTolerance');
    const bottomRadiiNominalControl = form.get('bottomRadiiNominal');
    const glandODNominalControl = form.get('glandODNominal');
    const glandODToleranceControl = form.get('glandODTolerance');

    maxValue.glandWidthMax = (parseFloat(glandWidthNominalControl.value ? glandWidthNominalControl.value : "0") + parseFloat(glandWidthToleranceControl.value ? glandWidthToleranceControl.value : "0"));
    maxValue.glandDepthMax = (parseFloat(glandDepthNominalControl.value ? glandDepthNominalControl.value : "0") + parseFloat(glandDepthToleranceControl.value ? glandDepthToleranceControl.value : "0"));
    maxValue.bottomRadiiMax = (parseFloat(bottomRadiiNominalControl.value ? bottomRadiiNominalControl.value : "0") + parseFloat(bottomRadiiToleranceControl.value ? bottomRadiiToleranceControl.value : "0"));
    maxValue.gapMax = (parseFloat(gapNominalControl.value ? gapNominalControl.value : "0") + parseFloat(gapToleranceControl.value ? gapToleranceControl.value : "0"));
    maxValue.glandODMax = (parseFloat(glandODNominalControl.value ? glandODNominalControl.value : "0") + parseFloat(glandODToleranceControl.value ? glandODToleranceControl.value : "0"));
    return maxValue;
  }
}
