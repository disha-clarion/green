// core imports
import { Injectable } from '@angular/core';
import { ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

// application imports
import { lessThanValidation, largerThanValidation, lessThanEqualValidation, largerThanEqualValidation } from "../../../shared/directives/custom-validations/comparison-validation.directive";
import { MaterialChoiceModel } from '../../../models/material-choice.model';
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { Temperature, Units, ErrorTypes, CalculatorOption } from '../../../shared/helpers/constants';
import { ErrorModel } from '../../../models/error.model';
import { HelperService } from "../../../shared/services/helper.service";
import { MinValue } from "../../../models/oring-dovetail-min.model";
import { MaxValue } from "../../../models/oring-dovetail-max.model";
import { RadiiRecomendationNominal } from "../../../models/radii-recomendation-nominal.model";
import { RadiiRecomendationMin } from "../../../models/radii-recomendation-min.model";
import { RadiiRecomendationMax } from "../../../models/radii-recomendation-max.model";
import { UnitButtonService } from '../../../shared/components/unit-button/unit-button.service';
import { TemperatureButtonService } from '../../../shared/components/temperature-button/temperature-button.service';
import { IBottomRadiiWarningRanges } from '../../../models/Ibottom-radii-warning-ranges';

// constants
const glandAngleClientValidationTitle = "Gland Angle";
const glandAngleRangeValidationMessage = "For a dovetail gland, input ranges from 45 to 75 degrees though recommended gland angles are from 55-66 degrees. Please contact Greene Tweed engineering for further recommendations.";
const glandWidthClientValidationTitle = "Gland Width";
const glandWidthClientValidationMessage = "Inputs create a non-physical gland. Consider increasing Gland Width.";
const bottomRadiiClientValidationTitle = "Bottom Radii";
const bottomRadiiNonPhysicalValidationMessage = "Inputs create a non-physical gland. Consider reducing Bottom Radii to below 33% of Gland Depth.";
const topRadiiClientValidationTitle = "Top Radii";
const topRadiiNonPhysicalValidationMessage = "Inputs create a non-physical gland. Consider reducing Top Radius to below 13% of Gland Depth.";
const glandAngleRecommendedGlandAngleWarningTitle = "Gland Angle";
const glandAngleRecommendedGlandAngleWarningMessage = "For a dovetail gland, input ranges from 45 to 75 degrees though recommended gland angles are from 55-66 degrees. Please contact Greene Tweed engineering for further recommendations.";
const topRadiiReduceLifeWarningTitle = "Top Radii";
const topRadiiReduceLifeWarningMessage = "Gland inputs may reduce the lifetime of the seal. Consider reducing Top Radii to below 13% of Gland Depth.";
const bottomRadiiReduceLifeWarningTitle = "Bottom Radii";
const bottomRadiiReduceLifeWarningMessage = "Gland inputs may reduce the lifetime of the seal. Consider reducing Bottom Radii to below 33% of Gland Depth.";
const glandWidthNoReliableWarningTitle = "Gland Width";
const glandWidthNoReliableWarningMessage = "The gland fill calculations will be considered not reliable as the o-ring could not expand fully into the gland.";

@Injectable({
  providedIn: 'root'
})
export class ORingDovetailGlandVacuumOnlyValidationService {

  constructor(
    private helperService: HelperService,
    private unitButtonService: UnitButtonService,
    private temperatureButtonService: TemperatureButtonService
  ) { }

  /********************************************************************/
  /*********************** Client Side Validation/Errors *********************/
  /************* That do not Prevent the form submission***************/
  /********************************************************************/
  // glandAngleNominal validation
  glandAngleNominalValidation(control: FormGroup): ErrorModel {
    const glandAngleNominalControl = control.get('glandAngleNominal');
    let error = null;

    // glandAngleNominal
    if (glandAngleNominalControl.value) {
      const lessThanEqual44Error = lessThanEqualValidation(glandAngleNominalControl.value, "44", "glandAngleNominal", glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
      const largerThanEqual76Error = largerThanEqualValidation(glandAngleNominalControl.value, "76", "glandAngleNominal", glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
      if (lessThanEqual44Error || largerThanEqual76Error) {
        error = lessThanEqual44Error || largerThanEqual76Error;
      }
    }

    return error;
  }

  // gland angle min value validation
  glandAngleMinValidation(control: FormGroup, option: string): ErrorModel {
    let error: ErrorModel = null;
    let glandAngleMinControlValue: number;

    if ((+option) === CalculatorOption.Nominal) {
      return null;
    }

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const minValues: MinValue = this.generateMinValues(control);
      glandAngleMinControlValue = minValues.glandAngleMin;
    }
    else {
      glandAngleMinControlValue = control.get('glandAngleMin').value ? (+control.get('glandAngleMin').value) : null;
    }

    if (glandAngleMinControlValue) {
      // min value validation
      const lessThanEqual44Error = lessThanEqualValidation(glandAngleMinControlValue.toString(), "44", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
      const largerThanEqual76Error = largerThanEqualValidation(glandAngleMinControlValue.toString(), "76", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
      if (lessThanEqual44Error || largerThanEqual76Error) {
        error = lessThanEqual44Error || largerThanEqual76Error;
      }
    }

    return error;
  }

  // gland angle max value validation
  glandAngleMaxValidation(control: FormGroup, option: string): ErrorModel {
    let error: ErrorModel = null;
    let glandAngleMaxControlValue: number;

    if ((+option) === CalculatorOption.Nominal) {
      return null;
    }

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate max values
      const maxValues: MaxValue = this.generateMaxValues(control);
      glandAngleMaxControlValue = maxValues.glandAngleMax;
    }
    else {
      glandAngleMaxControlValue = control.get('glandAngleMax').value ? (+control.get('glandAngleMax').value) : null;
    }

    if (glandAngleMaxControlValue) {
      // max value validation
      const lessThanEqual44Error = lessThanEqualValidation(glandAngleMaxControlValue.toString(), "44", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
      const largerThanEqual76Error = largerThanEqualValidation(glandAngleMaxControlValue.toString(), "76", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
      if (lessThanEqual44Error || largerThanEqual76Error) {
        error = lessThanEqual44Error || largerThanEqual76Error;
      }
    }
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

  /********************************************************************/
  /*********************** Client Side Validation *********************/
  /******************** Prevent the form submission********************/
  /********************************************************************/

  // glandWidthNominal limit validation
  glandWidthNominalValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error = null;
      const glandWidthNominalControl = control.get('glandWidthNominal');
      const radiiRecommendedNominalValues: RadiiRecomendationNominal = this.generateRadiiRecomendationNominal(control);

      // glandWidthNominal
      if (radiiRecommendedNominalValues.w) {
        error = lessThanValidation(radiiRecommendedNominalValues.w.toString(), "0", "glandWidthNominal", glandWidthClientValidationTitle, glandWidthClientValidationMessage);
      }

      this.helperService.setValidationErrorToFormControl(glandWidthNominalControl, error, "errorGlandWidthNominalNonPhysicalGland");
      return error;
    };
  }

  // glandWidth min value validation
  glandWidthMinValidation(option: string): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error: ErrorModel = null;
      const glandWidthNominalControl = control.get('glandWidthNominal');
      const glandWidthMinControl = control.get('glandWidthMin');
      const radiiRecommendedMinValues: RadiiRecomendationMin = this.generateRadiiRecomendationMin(control, option);

      // min value validation
      if (radiiRecommendedMinValues.wMin) {
        error = lessThanValidation(radiiRecommendedMinValues.wMin.toString(), "0", (+option) === CalculatorOption.WithMinMax ? "glandWidthMin" : "glandWidthNominal", glandWidthClientValidationTitle, glandWidthClientValidationMessage);
      }

      if ((+option) === CalculatorOption.WithMinMax) {
        // if (!glandWidthMinControl.errors) {
        //   glandWidthMinControl.setErrors(error);
        // }
        this.helperService.setValidationErrorToFormControl(glandWidthMinControl, error, "errorGlandWidthMinNonPhysicalGland");
      }
      else {
        this.helperService.setValidationErrorToFormControl(glandWidthNominalControl, error, "errorGlandWidthMinNonPhysicalGland");
      }
      return error;
    };
  }

  // glandWidth max value validation
  glandWidthMaxValidation(option: string): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error: ErrorModel = null;
      const glandWidthNominalControl = control.get('glandWidthNominal');
      const glandWidthMaxControl = control.get('glandWidthMax');
      const radiiRecommendedMaxValues: RadiiRecomendationMax = this.generateRadiiRecomendationMax(control, option);

      if (radiiRecommendedMaxValues.wMax) {
        // max value validation
        error = lessThanValidation(radiiRecommendedMaxValues.wMax.toString(), "0", (+option) === CalculatorOption.WithMinMax ? "glandWidthMax" : "glandWidthNominal", glandWidthClientValidationTitle, glandWidthClientValidationMessage);
      }

      if ((+option) === CalculatorOption.WithMinMax) {
        // if (!glandWidthMaxControl.errors) {
        //   glandWidthMaxControl.setErrors(error);
        // }
        this.helperService.setValidationErrorToFormControl(glandWidthMaxControl, error, "errorGlandWidthMaxNonPhysicalGland");
      }
      else {
        this.helperService.setValidationErrorToFormControl(glandWidthNominalControl, error, "errorGlandWidthMaxNonPhysicalGland");
      }
      return error;
    };
  }

  // bottomRadiiNominal limit validation
  bottomRadiiShouldBeLessThanBottomRadiiMinLimit(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const bottomRadiiNominalControl = control.get('bottomRadiiNominal');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
      const bottomRadiiMinLimit = this.helperService.bottomRadiiMinLimit(currentSelectedUnit);
      const error = lessThanValidation(bottomRadiiNominalControl.value, bottomRadiiMinLimit.toString(), "bottomRadiiNominal", bottomRadiiClientValidationTitle, `Bottom Radii must have a minimum ${bottomRadiiMinLimit} ${currentSelectedUnit.display_Short_title} radius due to typical machining tolerance standards.`);
      this.helperService.setValidationErrorToFormControl(bottomRadiiNominalControl, error, "bottomRadiiShouldBeLessThanBottomRadiiMin");
      return error;
    };
  }

  // bottom radii non physical validation
  bottomRadiiNominalNonPhysicalGland(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error: ErrorModel;
      const bottomRadiiNominalControl = control.get('bottomRadiiNominal');
      const glandDepthNominalControl = control.get('glandDepthNominal');
      const radiiRecommendedNominalValues: RadiiRecomendationNominal = this.generateRadiiRecomendationNominal(control);

      if (bottomRadiiNominalControl.value && glandDepthNominalControl.value) {
        if (radiiRecommendedNominalValues.h && radiiRecommendedNominalValues.bottomRadiiPercent) {
          const radiiRecommendedNominalValuesHLessThanZeroError = lessThanValidation(radiiRecommendedNominalValues.h.toString(), "0", "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
          const radiiRecommendedNominalValuesBottomRadiiPercentGreaterThan33 = largerThanValidation(radiiRecommendedNominalValues.bottomRadiiPercent.toString(), "33", "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
          const bottomRadiiErrorMaxRange = (33 / 100) * parseFloat(glandDepthNominalControl.value);
          const radiiRecommendedNominalValuesBottomRadiiErrorMaxRangeError = largerThanValidation(bottomRadiiNominalControl.value, bottomRadiiErrorMaxRange.toString(), "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
          if (radiiRecommendedNominalValuesHLessThanZeroError || radiiRecommendedNominalValuesBottomRadiiPercentGreaterThan33 || radiiRecommendedNominalValuesBottomRadiiErrorMaxRangeError) {
            error = radiiRecommendedNominalValuesHLessThanZeroError || radiiRecommendedNominalValuesBottomRadiiPercentGreaterThan33;
          }
        }
      }

      if (!error) {
        error = largerThanValidation(radiiRecommendedNominalValues.bottomRadiiPercent.toString(), "52", "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
      }

      this.helperService.setValidationErrorToFormControl(bottomRadiiNominalControl, error, "bottomRadiiNominalNonPhysicalGland");
      return error;
    };
  }

  // bottom radii min non physical validation
  bottomRadiiMinNonPhysicalGland(option: string): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error: ErrorModel = null;
      const bottomRadiiMinControl = control.get('bottomRadiiMin');
      const bottomRadiiNominalControl = control.get('bottomRadiiNominal');

      const radiiRecommendedNominalValues: RadiiRecomendationNominal = this.generateRadiiRecomendationNominal(control);
      const radiiRecommendedMinValues: RadiiRecomendationMin = this.generateRadiiRecomendationMin(control, option);

      if ((radiiRecommendedMinValues.hMin && radiiRecommendedMinValues.bottomRadiiMinPercent)) {
        const radiiRecommendedMinValuesHMinLessThanZeroError = lessThanValidation(radiiRecommendedMinValues.hMin.toString(), "0", (+option) === CalculatorOption.WithMinMax ? "bottomRadiiMin" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
        const radiiRecommendedMinValuesBottomRadiiMinPercentLargerThan13Error = largerThanValidation(radiiRecommendedMinValues.bottomRadiiMinPercent.toString(), "33", (+option) === CalculatorOption.WithMinMax ? "bottomRadiiMin" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
        if (radiiRecommendedMinValuesHMinLessThanZeroError || radiiRecommendedMinValuesBottomRadiiMinPercentLargerThan13Error) {
          error = radiiRecommendedMinValuesHMinLessThanZeroError || radiiRecommendedMinValuesBottomRadiiMinPercentLargerThan13Error;
        }
      }

      if (!error) {
        error = largerThanValidation(radiiRecommendedNominalValues.bottomRadiiPercent.toString(), "52", (+option) === CalculatorOption.WithMinMax ? "bottomRadiiMin" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
      }

      if ((+option) === CalculatorOption.WithMinMax) {
        this.helperService.setValidationErrorToFormControl(bottomRadiiMinControl, error, "bottomRadiiMinNonPhysicalGland");
      }
      else {
        this.helperService.setValidationErrorToFormControl(bottomRadiiNominalControl, error, "bottomRadiiMinNonPhysicalGland");
      }

      return error;
    };
  }

  // bottom radii max non physical validation
  bottomRadiiMaxNonPhysicalGland(option: string): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error: ErrorModel = null;
      const bottomRadiiMaxControl = control.get('bottomRadiiMax');
      const bottomRadiiNominalControl = control.get('bottomRadiiNominal');

      const radiiRecommendedNominalValues: RadiiRecomendationNominal = this.generateRadiiRecomendationNominal(control);
      const radiiRecommendedMaxValues: RadiiRecomendationMax = this.generateRadiiRecomendationMax(control, option);

      if ((radiiRecommendedMaxValues.hMax && radiiRecommendedMaxValues.bottomRadiiMaxPercent)) {
        const radiiRecommendedMaxValuesHMaxLessThanZero = lessThanValidation(radiiRecommendedMaxValues.hMax.toString(), "0", (+option) === CalculatorOption.WithMinMax ? "bottomRadiiMax" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
        const radiiRecommendedMaxValuesBottomRadiiMaxPercentGreaterThan33Error = largerThanValidation(radiiRecommendedMaxValues.bottomRadiiMaxPercent.toString(), "33", (+option) === CalculatorOption.WithMinMax ? "bottomRadiiMax" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
        if (radiiRecommendedMaxValuesHMaxLessThanZero || radiiRecommendedMaxValuesBottomRadiiMaxPercentGreaterThan33Error) {
          error = radiiRecommendedMaxValuesHMaxLessThanZero || radiiRecommendedMaxValuesBottomRadiiMaxPercentGreaterThan33Error;
        }
      }

      if (!error) {
        error = largerThanValidation(radiiRecommendedNominalValues.bottomRadiiPercent.toString(), "52", (+option) === CalculatorOption.WithMinMax ? "bottomRadiiMax" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, ErrorTypes.Error);
      }

      if ((+option) === CalculatorOption.WithMinMax) {
        this.helperService.setValidationErrorToFormControl(bottomRadiiMaxControl, error, "bottomRadiiMaxNonPhysicalGland");
      }
      else {
        this.helperService.setValidationErrorToFormControl(bottomRadiiNominalControl, error, "bottomRadiiMaxNonPhysicalGland");
      }
      return error;
    };
  }

  // topRadiiNominal limit validation
  topRadiiNominalShouldBeLessThanBottomRadiiMinLimit(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const topRadiiNominalControl = control.get('topRadiiNominal');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
      const bottomRadiiMinLimit = this.helperService.bottomRadiiMinLimit(currentSelectedUnit);
      const error = lessThanValidation(topRadiiNominalControl.value, bottomRadiiMinLimit.toString(), "topRadiiNominal", topRadiiClientValidationTitle, `Top Radii must have a minimum ${bottomRadiiMinLimit} ${currentSelectedUnit.display_Short_title} radius due to typical machining tolerance standards.`);
      if (!topRadiiNominalControl.errors) {
        topRadiiNominalControl.setErrors(error);
      }
      return error;
    };
  }

  // topRadiiNominal limit validation
  topRadiiNominalNonPhysicalValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error = null;
      let largerThanValidationError = null;
      const topRadiiNominalControl = control.get('topRadiiNominal');
      const glandDepthNominalControl = control.get('glandDepthNominal');
      const radiiRecomendationNominalValues: RadiiRecomendationNominal = new RadiiRecomendationNominal();

      if (topRadiiNominalControl.value && glandDepthNominalControl.value) {
        const glandDepthNominalControlValidateValue = (parseFloat(glandDepthNominalControl.value) * 22 / 100).toString();
        largerThanValidationError = largerThanValidation(topRadiiNominalControl.value, glandDepthNominalControlValidateValue, "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
      }

      if (largerThanValidationError) {
        error = { ...largerThanValidationError };
      }

      if (!error && (radiiRecomendationNominalValues.h && radiiRecomendationNominalValues.topRadiiPercent)) {
        const radiiRecomendationNominalValuesHError = lessThanValidation(radiiRecomendationNominalValues.h.toString(), "0", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
        const radiiRecomendationNominalValuesTopRadiiPercentError = largerThanValidation(radiiRecomendationNominalValues.topRadiiPercent.toString(), "13", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
        if (radiiRecomendationNominalValuesHError || radiiRecomendationNominalValuesTopRadiiPercentError) {
          error = radiiRecomendationNominalValuesHError || radiiRecomendationNominalValuesTopRadiiPercentError;
        }
      }

      if (!error) {
        error = largerThanValidation(radiiRecomendationNominalValues.topRadiiPercent.toString(), "22", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
      }

      if (!topRadiiNominalControl.errors) {
        topRadiiNominalControl.setErrors(error);
      }

      return error;
    };
  }

  // topRadii min value validation
  topRadiiMinNonPhysicalValidation(option: string): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error: ErrorModel = null;
      const topRadiiNominalControl = control.get('topRadiiNominal');
      const topRadiiMinControl = control.get('topRadiiMin');
      const radiiRecomendationNominalValues: RadiiRecomendationNominal = new RadiiRecomendationNominal();
      const radiiRecommendedMinValues: RadiiRecomendationMin = this.generateRadiiRecomendationMin(control, option);

      // min value validation
      if (radiiRecommendedMinValues.hMin && radiiRecommendedMinValues.topRadiiMinPercent) {
        const radiiRecommendedMinValuesHMinLessThanZeroError = lessThanValidation(radiiRecommendedMinValues.hMin.toString(), "0", "topRadiiMin", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
        const radiiRecommendedMinValuesTopRadiiMinPercentError = largerThanValidation(radiiRecommendedMinValues.topRadiiMinPercent.toString(), "13", "topRadiiMin", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);

        if (radiiRecommendedMinValuesHMinLessThanZeroError || radiiRecommendedMinValuesTopRadiiMinPercentError) {
          error = radiiRecommendedMinValuesHMinLessThanZeroError || radiiRecommendedMinValuesTopRadiiMinPercentError;
        }
      }

      if (!error) {
        error = largerThanValidation(radiiRecomendationNominalValues.topRadiiPercent.toString(), "22", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
      }

      if ((+option) === CalculatorOption.WithMinMax) {
        if (!topRadiiMinControl.errors) {
          topRadiiMinControl.setErrors(error);
        }
      }
      else {
        if (!topRadiiNominalControl.errors) {
          topRadiiNominalControl.setErrors(error);
        }
      }

      return error;
    };
  }

  // topRadii max value validation
  topRadiiMaxNonPhysicalValidation(option: string): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error: ErrorModel = null;
      const topRadiiNominalControl = control.get('topRadiiNominal');
      const topRadiiMaxControl = control.get('topRadiiMax');
      const radiiRecomendationNominalValues: RadiiRecomendationNominal = new RadiiRecomendationNominal();
      const radiiRecommendedMaxValues: RadiiRecomendationMax = this.generateRadiiRecomendationMax(control, option);

      if (radiiRecommendedMaxValues.hMax && radiiRecommendedMaxValues.topRadiiMaxPercent) {
        const radiiRecommendedMinValuesHMaxLessThanZeroError = lessThanValidation(radiiRecommendedMaxValues.hMax.toString(), "0", "topRadiiMax", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
        const radiiRecommendedMaxaluesTopRadiiMinPercentError = largerThanValidation(radiiRecommendedMaxValues.topRadiiMaxPercent.toString(), "13", "topRadiiMax", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);

        if (radiiRecommendedMinValuesHMaxLessThanZeroError || radiiRecommendedMaxaluesTopRadiiMinPercentError) {
          error = radiiRecommendedMinValuesHMaxLessThanZeroError || radiiRecommendedMaxaluesTopRadiiMinPercentError;
        }
      }

      if (!error) {
        error = largerThanValidation(radiiRecomendationNominalValues.topRadiiPercent.toString(), "22", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
      }

      if ((+option) === CalculatorOption.WithMinMax) {
        if (!topRadiiMaxControl.errors) {
          topRadiiMaxControl.setErrors(error);
        }
      }
      else {
        if (!topRadiiNominalControl.errors) {
          topRadiiNominalControl.setErrors(error);
        }
      }

      return error;
    };
  }

  // operating temperture nominal validation
  // common validation function also exist in o-ring Internal Vacuum only calculator validation service
  operatingTemperatureValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const materialCteNominalControl = control.get('materialCteNominal');
      const operatingTemperatureNominalControl = control.get('operatingTemperatureNominal');
      const operatingTemperatureMinControl = control.get('operatingTemperatureMin');
      const operatingTemperatureMaxControl = control.get('operatingTemperatureMax');
      const currentSelectedTemperature: SwitchButtonModel = this.temperatureButtonService.getCurrentTemperatureValue;
      let materialCteNominalValue = materialCteNominalControl.value as MaterialChoiceModel;
      let error = null;
      if (materialCteNominalValue && materialCteNominalValue.maxtemp) {

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

  // common validation function also exist in o-ring Internal Vacuum only calculator validation service
  // Function check O-ring cross section is in range or not else set error message
  // replacement of checkCrossSection() function of existing angular 1 app
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

  // common validation function also exist in o-ring Internal Vacuum only calculator validation service
  // oRingId nominal validation
  oringIDNominalLargerThanMaxOringIDValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const oringIdNominalControl = control.get('oringIdNominal');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
      const maxOringIdValue = this.helperService.maxOringIdValue(currentSelectedUnit);
      let error = null;
      if (oringIdNominalControl && oringIdNominalControl.value) {
        error = largerThanValidation(oringIdNominalControl.value, maxOringIdValue.toString(), "oringIdNominal", "O-ring Id", `Please make maximum O-ring ID entry to be no more than ${maxOringIdValue} ${currentSelectedUnit.display_Short_title}`);

        this.helperService.setValidationErrorToFormControl(oringIdNominalControl, error, "oringIDNominalLargerThanMaxOringID");
      }

      return error;
    };
  }

  // common validation function also exist in o-ring Internal Vacuum only calculator validation service
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
        const fc = control.get(formControlKeys[index]);
        this.helperService.setValidationErrorToFormControl(fc, error, "LessThanZeroValueError");
      }
      return error;
    };
  }

  // common validation function also exist in o-ring Internal Vacuum only calculator validation service
  // tolrerance validation
  toleranceValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let error: ErrorModel = null;
      const msg = "Tolerance value should not greater or equal to respective nominal value.";
      const glandWidthToleranceControl = control.get('glandWidthTolerance');
      const glandWidthNominalControl = control.get('glandWidthNominal');
      const glandDepthToleranceControl = control.get('glandDepthTolerance');
      const glandDepthNominalControl = control.get('glandDepthNominal');
      const glandAngleToleranceControl = control.get('glandAngleTolerance');
      const glandAngleNominalControl = control.get('glandAngleNominal');
      const topRadiiToleranceControl = control.get('topRadiiTolerance');
      const topRadiiNominalControl = control.get('topRadiiNominal');
      const bottomRadiiToleranceControl = control.get('bottomRadiiTolerance');
      const bottomRadiiNominalControl = control.get('bottomRadiiNominal');
      const gapToleranceControl = control.get('gapTolerance');
      const gapNominalControl = control.get('gapNominal');
      const glandCenterlineToleranceControl = control.get('glandCenterlineTolerance');
      const glandCenterlineNominalControl = control.get('glandCenterlineNominal');

      if (glandWidthToleranceControl && glandWidthToleranceControl.value) {
        error = largerThanEqualValidation(glandWidthToleranceControl.value, glandWidthNominalControl.value, "glandWidthTolerance", "", msg);
        this.helperService.setValidationErrorToFormControl(glandWidthToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (glandDepthToleranceControl && glandDepthToleranceControl.value) {
        error = largerThanEqualValidation(glandDepthToleranceControl.value, glandDepthNominalControl.value, "glandDepthTolerance", "", msg);
        this.helperService.setValidationErrorToFormControl(glandDepthToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (glandAngleToleranceControl && glandAngleToleranceControl.value) {
        error = largerThanEqualValidation(glandAngleToleranceControl.value, glandAngleNominalControl.value, "glandAngleTolerance", "", msg);
        this.helperService.setValidationErrorToFormControl(glandAngleToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (topRadiiToleranceControl && topRadiiToleranceControl.value) {
        error = largerThanEqualValidation(topRadiiToleranceControl.value, topRadiiNominalControl.value, "topRadiiTolerance", "", msg);
        this.helperService.setValidationErrorToFormControl(topRadiiToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (bottomRadiiToleranceControl && bottomRadiiToleranceControl.value) {
        error = largerThanEqualValidation(bottomRadiiToleranceControl.value, bottomRadiiNominalControl.value, "bottomRadiiTolerance", "", msg);
        this.helperService.setValidationErrorToFormControl(bottomRadiiToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (gapToleranceControl.value != 0) {
        error = largerThanEqualValidation(gapToleranceControl.value, gapNominalControl.value, "gapTolerance", "", msg);
        this.helperService.setValidationErrorToFormControl(gapToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }

      if (glandCenterlineToleranceControl && glandCenterlineToleranceControl.value) {
        error = largerThanEqualValidation(glandCenterlineToleranceControl.value, glandCenterlineNominalControl.value, "glandCenterlineTolerance", "", msg);
        this.helperService.setValidationErrorToFormControl(glandCenterlineToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
      }
      return error;
    };
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
      this.helperService.setValidationErrorToFormControl(oringIdNominalControl, warning, "oRingIDAS568AStandards");
      return warning;
    };
  }


  /********************************************************************/
  /************** O-Ring - Internal Vacuum only Warnings **************/
  /**************** that Doesn't prevent the form submission*****************/
  /********************************************************************/

  // glandAngleNominal warning
  glandAngleNominalWarning(form: FormGroup): ErrorModel {
    let error: ErrorModel = null;
    const glandAngleNominalControl = form.get('glandAngleNominal');

    // glandAngleNominal
    if (glandAngleNominalControl && glandAngleNominalControl.value) {
      const glandAngleNominalError1 = largerThanEqualValidation(glandAngleNominalControl.value, "45", "glandAngleNominal", glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);
      const glandAngleNominalError2 = lessThanEqualValidation(glandAngleNominalControl.value, "54", "glandAngleNominal", glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);

      const glandAngleNominalError3 = largerThanValidation(glandAngleNominalControl.value, "67", "glandAngleNominal", glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);
      const glandAngleNominalError4 = lessThanEqualValidation(glandAngleNominalControl.value, "75", "glandAngleNominal", glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);

      if ((glandAngleNominalError1 && glandAngleNominalError2) || (glandAngleNominalError3 && glandAngleNominalError4)) {
        error = glandAngleNominalError1 || glandAngleNominalError2 || glandAngleNominalError3 || glandAngleNominalError4;
      }
    }

    return error;
  }

  // glandAngleMin
  glandAngleMinWarning(form: FormGroup, option: string): ErrorModel {
    let warning: ErrorModel = null;
    let glandAngleMinControlValue: number;

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const minValues: MinValue = this.generateMinValues(form);
      glandAngleMinControlValue = minValues.glandAngleMin;
    }
    else {
      glandAngleMinControlValue = form.get('glandAngleMin').value ? (+form.get('glandAngleMin').value) : null;
    }

    if (glandAngleMinControlValue) {
      const glandAngleMinWarning1 = largerThanEqualValidation(glandAngleMinControlValue.toString(), "45", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);
      const glandAngleMinWarning2 = lessThanEqualValidation(glandAngleMinControlValue.toString(), "54", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);

      const glandAngleMinWarning3 = largerThanValidation(glandAngleMinControlValue.toString(), "67", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);
      const glandAngleMinWarning4 = lessThanEqualValidation(glandAngleMinControlValue.toString(), "75", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);

      if ((glandAngleMinWarning1 && glandAngleMinWarning2) || (glandAngleMinWarning3 && glandAngleMinWarning4)) {
        warning = glandAngleMinWarning1 || glandAngleMinWarning2 || glandAngleMinWarning3 || glandAngleMinWarning4;
      }
    }
    return warning;
  }

  // glandAngleMax
  glandAngleMaxWarning(form: FormGroup, option: string): ErrorModel {
    let warning: ErrorModel = null;
    let glandAngleMaxControlValue: number;

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const maxValues: MaxValue = this.generateMaxValues(form);
      glandAngleMaxControlValue = maxValues.glandAngleMax;
    }
    else {
      glandAngleMaxControlValue = form.get('glandAngleMax').value ? (+form.get('glandAngleMax').value) : null;
    }

    if (glandAngleMaxControlValue) {
      const glandAngleMaxWarning1 = largerThanEqualValidation(glandAngleMaxControlValue.toString(), "45", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);
      const glandAngleMaxWarning2 = lessThanEqualValidation(glandAngleMaxControlValue.toString(), "54", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);

      const glandAngleMaxWarning3 = largerThanValidation(glandAngleMaxControlValue.toString(), "67", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);
      const glandAngleMaxWarning4 = lessThanEqualValidation(glandAngleMaxControlValue.toString(), "75", (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, ErrorTypes.Warning);

      if ((glandAngleMaxWarning1 && glandAngleMaxWarning2) || (glandAngleMaxWarning3 && glandAngleMaxWarning4)) {
        warning = glandAngleMaxWarning1 || glandAngleMaxWarning2 || glandAngleMaxWarning3 || glandAngleMaxWarning4;
      }
    }
    return warning;
  }

  // topRadiiNominal warning
  topRadiiNominalWarning(form: FormGroup): ErrorModel {
    let warning: ErrorModel = null;
    // topRadiiNominal
    const recommendedRadiiValues: RadiiRecomendationNominal = this.generateRadiiRecomendationNominal(form);

    const topRadiiNominalWarning1 = largerThanValidation(recommendedRadiiValues.h.toString(), "0", "topRadiiNominal", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, ErrorTypes.Warning);
    const topRadiiNominalWarning2 = largerThanValidation(recommendedRadiiValues.topRadiiPercent.toString(), "13", "topRadiiNominal", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, ErrorTypes.Warning);

    if (recommendedRadiiValues.h && recommendedRadiiValues.topRadiiPercent && topRadiiNominalWarning1 && topRadiiNominalWarning2) {
      warning = topRadiiNominalWarning1 || topRadiiNominalWarning2;
    }

    return warning;
  }

  // topRadiiMin
  topRadiiMinWarning(form: FormGroup, option: string): ErrorModel {
    let warning: ErrorModel = null;
    // topRadiiMin
    const recommendedRadiiValues: RadiiRecomendationMin = this.generateRadiiRecomendationMin(form, option);

    const topRadiiMinWarning1 = largerThanValidation(recommendedRadiiValues.hMin.toString(), "0", "topRadiiMin", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, ErrorTypes.Warning);
    const topRadiiMinWarning2 = largerThanValidation(recommendedRadiiValues.topRadiiMinPercent.toString(), "13", "topRadiiMin", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, ErrorTypes.Warning);

    if (recommendedRadiiValues.hMin && recommendedRadiiValues.topRadiiMinPercent && topRadiiMinWarning1 && topRadiiMinWarning2) {
      warning = topRadiiMinWarning1 || topRadiiMinWarning2;
    }
    return warning;
  }

  // topRadiiMax
  topRadiiMaxWarning(form: FormGroup, option: string): ErrorModel {
    let warning: ErrorModel = null;
    // topRadiiMax
    const recommendedRadiiValues: RadiiRecomendationMax = this.generateRadiiRecomendationMax(form, option);

    const topRadiiMaxWarning1 = largerThanValidation(recommendedRadiiValues.hMax.toString(), "0", "topRadiiMax", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, ErrorTypes.Warning);
    const topRadiiMaxWarning2 = largerThanValidation(recommendedRadiiValues.topRadiiMaxPercent.toString(), "13", "topRadiiMax", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, ErrorTypes.Warning);

    if (recommendedRadiiValues.hMax && recommendedRadiiValues.topRadiiMaxPercent && topRadiiMaxWarning1 && topRadiiMaxWarning2) {
      warning = topRadiiMaxWarning1 || topRadiiMaxWarning2;
    }
    return warning;
  }

  // bottomRadiiNominal warning
  bottomRadiiNominalWarning(form: FormGroup): ErrorModel {
    let warning: ErrorModel = null;
    // bottomRadiiNominal
    const bottomRadiiNominalControlValue = form.get('bottomRadiiNominal').value;
    const glandDepthNominalControlValue = form.get('glandDepthNominal').value;
    const bottomRadiiRanges: IBottomRadiiWarningRanges = this.helperService.getBottomRadiiRange(glandDepthNominalControlValue);
    const recommendedRadiiValues: RadiiRecomendationNominal = this.generateRadiiRecomendationNominal(form);

    const bottomRadiiNominalWarning1 = largerThanValidation(recommendedRadiiValues.h.toString(), "0", "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);
    const bottomRadiiNominalWarning2 = largerThanValidation(recommendedRadiiValues.topRadiiPercent.toString(), "33", "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);

    const bottomRadiiNominalRangeWarning1 = largerThanEqualValidation(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMinRange1.toString(), "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);
    const bottomRadiiNominalRangeWarning2 = lessThanValidation(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMaxRange1.toString(), "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);

    const bottomRadiiNominalRangeWarning3 = largerThanEqualValidation(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMinRange2.toString(), "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);
    const bottomRadiiNominalRangeWarning4 = lessThanValidation(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMaxRange2.toString(), "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);

    if (
      (recommendedRadiiValues.h && recommendedRadiiValues.bottomRadiiPercent && bottomRadiiNominalWarning1 && bottomRadiiNominalWarning2)
      || (bottomRadiiNominalRangeWarning1 && bottomRadiiNominalRangeWarning2)
      || (bottomRadiiNominalRangeWarning3 && bottomRadiiNominalRangeWarning4)
    ) {
      warning = bottomRadiiNominalWarning1 || bottomRadiiNominalWarning2 || bottomRadiiNominalRangeWarning1 || bottomRadiiNominalRangeWarning2 || bottomRadiiNominalRangeWarning3 || bottomRadiiNominalRangeWarning4;
    }

    return warning;
  }

  // bottomRadiiMin
  bottomRadiiMinWarning(form: FormGroup): ErrorModel {
    let warning: ErrorModel = null;
    // bottomRadiiMin
    const recommendedRadiiValues: RadiiRecomendationNominal = this.generateRadiiRecomendationNominal(form);
    const bottomRadiiMinWarning1 = largerThanValidation(recommendedRadiiValues.h.toString(), "0", "bottomRadiiMin", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);
    const bottomRadiiMinWarning2 = largerThanValidation(recommendedRadiiValues.bottomRadiiPercent.toString(), "33", "bottomRadiiMin", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);

    if (recommendedRadiiValues.h && recommendedRadiiValues.bottomRadiiPercent && bottomRadiiMinWarning1 && bottomRadiiMinWarning2) {
      warning = bottomRadiiMinWarning1 || bottomRadiiMinWarning2;
    }
    return warning;
  }

  // bottomRadiiMax
  bottomRadiiMaxWarning(form: FormGroup): ErrorModel {
    // bottomRadiiNominal
    const bottomRadiiNominalControlValue = form.get('bottomRadiiNominal').value;
    let warning: ErrorModel = null;
    // bottomRadiiMax
    const recommendedRadiiValues: RadiiRecomendationNominal = this.generateRadiiRecomendationNominal(form);
    const glandDepthNominalControlValue = form.get('glandDepthNominal').value;
    const bottomRadiiRanges: IBottomRadiiWarningRanges = this.helperService.getBottomRadiiRange(glandDepthNominalControlValue);

    const bottomRadiiMaxWarning1 = largerThanValidation(recommendedRadiiValues.h.toString(), "0", "bottomRadiiMax", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);
    const bottomRadiiMaxWarning2 = largerThanValidation(recommendedRadiiValues.bottomRadiiPercent.toString(), "33", "bottomRadiiMax", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);

    const bottomRadiiMaxWarning3 = largerThanEqualValidation(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMinRange1.toString(), "bottomRadiiMax", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);
    const bottomRadiiMaxWarning4 = lessThanValidation(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMaxRange1.toString(), "bottomRadiiMax", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, ErrorTypes.Warning);

    if (
      (
        recommendedRadiiValues.h
        && recommendedRadiiValues.bottomRadiiPercent
        && bottomRadiiMaxWarning1
        && bottomRadiiMaxWarning2)
      || (bottomRadiiMaxWarning3 && bottomRadiiMaxWarning4)
    ) {
      warning = bottomRadiiMaxWarning1 || bottomRadiiMaxWarning2 || bottomRadiiMaxWarning3 || bottomRadiiMaxWarning4;
    }
    return warning;
  }

  // common warning also exist in other calculators
  // gland width nominal warning
  glandWidthNominalWarning(form: FormGroup): ErrorModel {
    let error: ErrorModel = null;
    const glandWidthNominalControl = form.get('glandWidthNominal');
    const oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
    if (glandWidthNominalControl && glandWidthNominalControl.value && oringCrossSectionNominalControl && oringCrossSectionNominalControl.value) {
      const oringCrossSectionNominalControlValue = (1.2 * (+oringCrossSectionNominalControl.value)).toString();
      error = largerThanValidation(glandWidthNominalControl.value, oringCrossSectionNominalControlValue, "glandWidthNominal", glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, ErrorTypes.Warning);
    }
    return error;
  }

  // common warning also exist in other calculators
  // gland width min warning
  glandWidthMinWarning(form: FormGroup, option: string): ErrorModel {
    let warning: ErrorModel = null;
    let glandWidthMinControlValue: number;


    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const minValues: MinValue = this.generateMinValues(form);
      glandWidthMinControlValue = minValues.glandWidthMin;
    }
    else {
      glandWidthMinControlValue = form.get('glandWidthMin').value ? (+form.get('glandWidthMin').value) : null;
    }

    if (glandWidthMinControlValue) {
      const oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
      const oringCrossSectionNominalControlValue = (1.2 * +(oringCrossSectionNominalControl.value)).toString();
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
      const maxValues: MaxValue = this.generateMaxValues(form);
      glandWidthMaxControlValue = maxValues.glandWidthMax;
    }
    else {
      glandWidthMaxControlValue = form.get('glandWidthMax').value ? (+form.get('glandWidthMax').value) : null;
    }
    if (glandWidthMaxControlValue) {
      const oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
      const oringCrossSectionNominalControlValue = (1.2 * +(oringCrossSectionNominalControl.value)).toString();
      warning = largerThanValidation(glandWidthMaxControlValue.toString(), oringCrossSectionNominalControlValue, (((+option) === CalculatorOption.WithTolerance) ? "glandWidthTolerance" : "glandWidthMax"), glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, ErrorTypes.Warning);
    }
    return warning;
  }

  minValueValidation(control: FormGroup, option: string): ErrorModel[] {
    let errors: ErrorModel[] = [];
    const msg = "Min values should be less or equal to nominal value.";

    const glandWidthNominalControl = control.get('glandWidthNominal');
    const glandDepthNominalControl = control.get('glandDepthNominal');
    const bottomRadiiNominalControl = control.get('bottomRadiiNominal');
    const topRadiiNominalControl = control.get('topRadiiNominal');
    const gapNominalControl = control.get('gapNominal');
    const glandCenterlineNominalControl = control.get('glandCenterlineNominal');
    const glandAngleNominalControl = control.get('glandAngleNominal');

    let glandWidthMinControlValue: number;
    let glandDepthMinControlValue: number;
    let bottomRadiiMinControlValue: number;
    let topRadiiMinControlValue: number;
    let gapMinControlValue: number;
    let glandCenterlineMinControlValue: number;
    let glandAngleMinControlValue: number;

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const minValues: MinValue = this.generateMinValues(control);
      glandWidthMinControlValue = minValues.glandWidthMin;
      glandDepthMinControlValue = minValues.glandDepthMin;
      bottomRadiiMinControlValue = minValues.bottomRadiiMin;
      topRadiiMinControlValue = minValues.topRadiiMin;
      gapMinControlValue = minValues.gapMin;
      glandCenterlineMinControlValue = minValues.glandCenterlineMin;
      glandAngleMinControlValue = minValues.glandAngleMin;
    }
    else {
      glandWidthMinControlValue = control.get('glandWidthMin').value ? (+control.get('glandWidthMin').value) : null;
      glandDepthMinControlValue = control.get('glandDepthMin').value ? (+control.get('glandDepthMin').value) : null;
      bottomRadiiMinControlValue = control.get('bottomRadiiMin').value ? (+control.get('bottomRadiiMin').value) : null;
      topRadiiMinControlValue = control.get('topRadiiMin').value ? (+control.get('topRadiiMin').value) : null;
      gapMinControlValue = control.get('gapMin').value ? (+control.get('gapMin').value) : null;
      glandCenterlineMinControlValue = control.get('glandCenterlineMin').value ? (+control.get('glandCenterlineMin').value) : null;
      glandAngleMinControlValue = control.get('glandAngleMin').value ? (+control.get('glandAngleMin').value) : null;
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

    if (topRadiiMinControlValue) {
      const error5 = largerThanValidation(topRadiiMinControlValue.toString(), topRadiiNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "topRadiiTolerance" : "topRadiiMin"), "", msg);
      if (error5) {
        errors.push(error5);
      }
    }

    if (glandCenterlineMinControlValue) {
      const error6 = largerThanValidation(glandCenterlineMinControlValue.toString(), glandCenterlineNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandCenterlineTolerance" : "glandCenterlineMin"), "", msg);
      if (error6) {
        errors.push(error6);
      }
    }

    if (glandAngleMinControlValue) {
      const error7 = largerThanValidation(glandAngleMinControlValue.toString(), glandAngleNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), "", msg);
      if (error7) {
        errors.push(error7);
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
    const topRadiiNominalControl = control.get('topRadiiNominal');
    const gapNominalControl = control.get('gapNominal');
    const glandCenterlineNominalControl = control.get('glandCenterlineNominal');
    const glandAngleNominalControl = control.get('glandAngleNominal');


    let glandWidthMaxControlValue: number;
    let glandDepthMaxControlValue: number;
    let bottomRadiiMaxControlValue: number;
    let topRadiiMaxControlValue: number;
    let gapMaxControlValue: number;
    let glandCenterlineMaxControlValue: number;
    let glandAngleMaxControlValue: number;


    if ((+option) === CalculatorOption.WithTolerance) {
      // generate max values
      const maxValues: MaxValue = this.generateMaxValues(control);
      glandWidthMaxControlValue = maxValues.glandWidthMax;
      glandDepthMaxControlValue = maxValues.glandDepthMax;
      bottomRadiiMaxControlValue = maxValues.bottomRadiiMax;
      topRadiiMaxControlValue = maxValues.topRadiiMax;
      gapMaxControlValue = maxValues.gapMax;
      glandCenterlineMaxControlValue = maxValues.glandCenterlineMax;
      glandAngleMaxControlValue = maxValues.glandAngleMax;
    }
    else {
      glandWidthMaxControlValue = control.get('glandWidthMax').value ? (+control.get('glandWidthMax').value) : null;
      glandDepthMaxControlValue = control.get('glandDepthMax').value ? (+control.get('glandDepthMax').value) : null;
      bottomRadiiMaxControlValue = control.get('bottomRadiiMax').value ? (+control.get('bottomRadiiMax').value) : null;
      topRadiiMaxControlValue = control.get('topRadiiMax').value ? (+control.get('topRadiiMax').value) : null;
      gapMaxControlValue = control.get('gapMax').value ? (+control.get('gapMax').value) : null;
      glandCenterlineMaxControlValue = control.get('glandCenterlineMax').value ? (+control.get('glandCenterlineMax').value) : null;
      glandAngleMaxControlValue = control.get('glandAngleMax').value ? (+control.get('glandAngleMax').value) : null;
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

    if (topRadiiMaxControlValue) {
      const error5 = lessThanValidation(topRadiiMaxControlValue.toString(), topRadiiNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "topRadiiTolerance" : "topRadiiMax"), "", msg);
      if (error5) {
        errors.push(error5);
      }
    }

    if (glandCenterlineMaxControlValue) {
      const error6 = lessThanValidation(glandCenterlineMaxControlValue.toString(), glandCenterlineNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandCenterlineTolerance" : "glandCenterlineMax"), "", msg);
      if (error6) {
        errors.push(error6);
      }
    }

    if (glandAngleMaxControlValue) {
      const error7 = lessThanValidation(glandAngleMaxControlValue.toString(), glandAngleNominalControl.value, (((+option) === CalculatorOption.WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), "", msg);
      if (error7) {
        errors.push(error7);
      }
    }
    return errors;
  }

  //  Helper methods
  // generate min values when option is Tolerance
  generateMinValues(form: FormGroup): MinValue {
    let minValue: MinValue = new MinValue();
    const glandWidthNominalControl = form.get('glandWidthNominal');
    const glandWidthToleranceControl = form.get('glandWidthTolerance');
    const glandDepthNominalControl = form.get('glandDepthNominal');
    const glandDepthToleranceControl = form.get('glandDepthTolerance');
    const bottomRadiiNominalControl = form.get('bottomRadiiNominal');
    const bottomRadiiToleranceControl = form.get('bottomRadiiTolerance');
    const gapNominalControl = form.get('gapNominal');
    const gapToleranceControl = form.get('gapTolerance');
    const glandAngleNominalControl = form.get('glandAngleNominal');
    const glandAngleToleranceControl = form.get('glandAngleTolerance');
    const topRadiiNominalControl = form.get('topRadiiNominal');
    const topRadiiToleranceControl = form.get('topRadiiTolerance');
    const glandCenterlineNominalControl = form.get('glandCenterlineNominal');
    const glandCenterlineToleranceControl = form.get('glandCenterlineTolerance');

    minValue.glandWidthMin = (parseFloat(glandWidthNominalControl.value) - parseFloat(glandWidthToleranceControl.value));
    minValue.glandDepthMin = (parseFloat(glandDepthNominalControl.value) - parseFloat(glandDepthToleranceControl.value));
    minValue.glandAngleMin = (parseFloat(glandAngleNominalControl.value) - parseFloat(glandAngleToleranceControl.value));
    minValue.bottomRadiiMin = (parseFloat(bottomRadiiNominalControl.value) - parseFloat(bottomRadiiToleranceControl.value));
    minValue.topRadiiMin = (parseFloat(topRadiiNominalControl.value) - parseFloat(topRadiiToleranceControl.value));
    minValue.gapMin = (parseFloat(gapNominalControl.value) - parseFloat(gapToleranceControl.value));
    minValue.glandCenterlineMin = (parseFloat(glandCenterlineNominalControl.value) - parseFloat(glandCenterlineToleranceControl.value));
    return minValue;
  }

  // generate max values when option is Tolerance
  generateMaxValues(form: FormGroup): MaxValue {
    let maxValue: MaxValue = new MaxValue();
    const glandWidthNominalControl = form.get('glandWidthNominal');
    const glandWidthToleranceControl = form.get('glandWidthTolerance');
    const glandDepthNominalControl = form.get('glandDepthNominal');
    const glandDepthToleranceControl = form.get('glandDepthTolerance');
    const bottomRadiiToleranceControl = form.get('bottomRadiiTolerance');
    const gapNominalControl = form.get('gapNominal');
    const gapToleranceControl = form.get('gapTolerance');
    const bottomRadiiNominalControl = form.get('bottomRadiiNominal');
    const glandAngleNominalControl = form.get('glandAngleNominal');
    const glandAngleToleranceControl = form.get('glandAngleTolerance');
    const topRadiiNominalControl = form.get('topRadiiNominal');
    const topRadiiToleranceControl = form.get('topRadiiTolerance');
    const glandCenterlineNominalControl = form.get('glandCenterlineNominal');
    const glandCenterlineToleranceControl = form.get('glandCenterlineTolerance');

    maxValue.glandWidthMax = (parseFloat(glandWidthNominalControl.value) + parseFloat(glandWidthToleranceControl.value));
    maxValue.glandDepthMax = (parseFloat(glandDepthNominalControl.value) + parseFloat(glandDepthToleranceControl.value));
    maxValue.glandAngleMax = (parseFloat(glandAngleNominalControl.value) + parseFloat(glandAngleToleranceControl.value));
    maxValue.bottomRadiiMax = (parseFloat(bottomRadiiNominalControl.value) + parseFloat(bottomRadiiToleranceControl.value));
    maxValue.topRadiiMax = (parseFloat(topRadiiNominalControl.value) + parseFloat(topRadiiToleranceControl.value));
    maxValue.gapMax = (parseFloat(gapNominalControl.value) + parseFloat(gapToleranceControl.value));
    maxValue.glandCenterlineMax = (parseFloat(glandCenterlineNominalControl.value) + parseFloat(glandCenterlineToleranceControl.value));
    return maxValue;
  }

  // radii recommended values for nominal
  generateRadiiRecomendationNominal(form: FormGroup): RadiiRecomendationNominal {
    let radiiRecomendationNominalValues: RadiiRecomendationNominal = new RadiiRecomendationNominal();

    const glandDepthNominal = parseFloat(form.get('glandDepthNominal').value);
    const glandWidthNominal = parseFloat(form.get('glandWidthNominal').value);
    const topRadiiNominal = parseFloat(form.get('topRadiiNominal').value);
    const bottomRadiiNominal = parseFloat(form.get('bottomRadiiNominal').value);
    const glandAngleNominal = parseFloat(form.get('glandAngleNominal').value);

    if (glandDepthNominal >= 0 && glandWidthNominal >= 0 && topRadiiNominal >= 0 && bottomRadiiNominal >= 0 && glandAngleNominal >= 0) {
      radiiRecomendationNominalValues.h = glandDepthNominal - (topRadiiNominal + bottomRadiiNominal) * (1 + Math.sin((90 - glandAngleNominal) * Math.PI / 180));
      radiiRecomendationNominalValues.w = (glandWidthNominal / 2) + glandDepthNominal / Math.tan(glandAngleNominal * Math.PI / 180) - bottomRadiiNominal / Math.tan((glandAngleNominal / 2) * Math.PI / 180);
      radiiRecomendationNominalValues.bottomRadiiPercent = Math.round((bottomRadiiNominal / glandDepthNominal) * 100);
      radiiRecomendationNominalValues.topRadiiPercent = Math.round((topRadiiNominal / glandDepthNominal) * 100);
    }

    return radiiRecomendationNominalValues;
  }

  // radii recommended values for min
  generateRadiiRecomendationMin(form: FormGroup, option: string): RadiiRecomendationMin {
    let radiiRecomendationMinValues: RadiiRecomendationMin = new RadiiRecomendationMin();
    let glandDepthMin: number;
    let glandWidthMin: number;
    let topRadiiMin: number;
    let bottomRadiiMin: number;
    let glandAngleMin: number;

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const minValues: MinValue = this.generateMinValues(form);
      glandDepthMin = minValues.glandDepthMin;
      glandWidthMin = minValues.glandWidthMin;
      topRadiiMin = minValues.topRadiiMin;
      bottomRadiiMin = minValues.bottomRadiiMin;
      glandAngleMin = minValues.glandAngleMin;
    }
    else {
      glandDepthMin = parseFloat(form.get('glandDepthMin').value);
      glandWidthMin = parseFloat(form.get('glandWidthMin').value);
      topRadiiMin = parseFloat(form.get('topRadiiMin').value);
      bottomRadiiMin = parseFloat(form.get('bottomRadiiMin').value);
      glandAngleMin = parseFloat(form.get('glandAngleMin').value);
    }


    if (glandDepthMin >= 0 && glandWidthMin >= 0 && topRadiiMin >= 0 && bottomRadiiMin >= 0 && glandAngleMin >= 0) {
      radiiRecomendationMinValues.hMin = glandDepthMin - (topRadiiMin + bottomRadiiMin) * (1 + Math.sin((90 - glandAngleMin) * Math.PI / 180));
      radiiRecomendationMinValues.wMin = (glandWidthMin / 2) + glandDepthMin / Math.tan(glandAngleMin * Math.PI / 180) - bottomRadiiMin / Math.tan((glandAngleMin / 2) * Math.PI / 180);
      radiiRecomendationMinValues.bottomRadiiMinPercent = Math.round((bottomRadiiMin / glandDepthMin) * 100);
      radiiRecomendationMinValues.topRadiiMinPercent = Math.round((topRadiiMin / glandDepthMin) * 100);
    }
    return radiiRecomendationMinValues;
  }

  // radii recommended values for max
  generateRadiiRecomendationMax(form: FormGroup, option: string): RadiiRecomendationMax {
    let radiiRecomendationMaxValues: RadiiRecomendationMax = new RadiiRecomendationMax();
    let glandDepthMax: number;
    let glandWidthMax: number;
    let topRadiiMax: number;
    let bottomRadiiMax: number;
    let glandAngleMax: number;

    if ((+option) === CalculatorOption.WithTolerance) {
      // generate min values
      const maxValues: MaxValue = this.generateMaxValues(form);
      glandDepthMax = maxValues.glandDepthMax;
      glandWidthMax = maxValues.glandWidthMax;
      topRadiiMax = maxValues.topRadiiMax;
      bottomRadiiMax = maxValues.bottomRadiiMax;
      glandAngleMax = maxValues.glandAngleMax;
    }
    else {
      glandDepthMax = parseFloat(form.get('glandDepthMax').value);
      glandWidthMax = parseFloat(form.get('glandWidthMax').value);
      topRadiiMax = parseFloat(form.get('topRadiiMax').value);
      bottomRadiiMax = parseFloat(form.get('bottomRadiiMax').value);
      glandAngleMax = parseFloat(form.get('glandAngleMax').value);
    }

    if (glandDepthMax >= 0 && glandWidthMax >= 0 && topRadiiMax >= 0 && bottomRadiiMax >= 0 && glandAngleMax >= 0) {
      radiiRecomendationMaxValues.hMax = glandDepthMax - (topRadiiMax + bottomRadiiMax) * (1 + Math.sin((90 - glandAngleMax) * Math.PI / 180));
      radiiRecomendationMaxValues.wMax = (glandWidthMax / 2) + glandDepthMax / Math.tan(glandAngleMax * Math.PI / 180) - bottomRadiiMax / Math.tan((glandAngleMax / 2) * Math.PI / 180);
      radiiRecomendationMaxValues.bottomRadiiMaxPercent = Math.round((bottomRadiiMax / glandDepthMax) * 100);
      radiiRecomendationMaxValues.topRadiiMaxPercent = Math.round((topRadiiMax / glandDepthMax) * 100);
    }

    return radiiRecomendationMaxValues;
  }
}
