// core imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';

// third party imports
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

// application imports
import { DynamicFormTwoColumnLayoutService } from "../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service";
import { CalculatorModel } from "../../../models/calculator.model";
import { FormControlModel } from '../../../models/form-control.model';
import { FormColumnModel } from '../../../models/form-column.model';
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { ErrorModel } from '../../../models/error.model';
import { BaseModel } from '../../../models/base.model';
import { RectangularORingCalcService } from "../rectangular-o-ring-calc.service";
import { AuthService } from "../../../shared/services/auth.service";
import { ControlType, Units, CalculatorOption, ControlSubType, ORingTool_DovetailGlandVacuumOnly_Validators, Temperature, TemperatureFahrenheitCode, TemperatureCelsiusCode } from '../../../shared/helpers/constants';
import { ControlBaseService } from "../../../shared/services/control-base.service";
import { PrintService } from "../../../shared/services/print.service";
import { UnitButtonService } from '../../../shared/components/unit-button/unit-button.service';
import { TemperatureButtonService } from '../../../shared/components/temperature-button/temperature-button.service';
import { ORingDovetailGlandVacuumOnlyValidationService } from "./o-ring-dovetail-gland-vacuum-only-validation.service";
import { ORingDovetailGlandVacuumOnlyService } from "./o-ring-dovetail-gland-vacuum-only.service";
import { HelperService } from "../../../shared/services/helper.service";
import { CalculatorToolbarService } from "../../../shared/components/calculator-toolbar/calculator-toolbar.service";

@Component({
  selector: 'app-o-ring-dovetail-gland-vacuum-only',
  templateUrl: './o-ring-dovetail-gland-vacuum-only.component.html',
  styleUrls: ['./o-ring-dovetail-gland-vacuum-only.component.css']
})
export class ORingDovetailGlandVacuumOnlyComponent implements OnInit, OnDestroy {
  calculatorConfig: CalculatorModel;
  dovetailGlandForm: FormGroup;
  flattenedFormControls: FormControlModel[] = [];
  controlType = ControlType;
  isSubmitted: Boolean = false;
  payLoad = '';
  bottomRadiiMaxLimit: number = 0.035;
  clientErrors: ErrorModel[] = [];
  clientWarnings: ErrorModel[] = [];
  serverErrors: ErrorModel[] = [];
  serverWarnings: ErrorModel[] = [];
  isShowPasteBtn: Boolean = false;

  // calculated data
  private calculatedData: any;

  get CalculatedData(): any {
    return this.calculatedData;
  }

  set CalculatedData(val: any) {
    this.calculatedData = val;
  }

  // subscription
  oRingDataSubscription: Subscription;
  unitChangeSubscription: Subscription;
  temperatureChangeSubscription: Subscription;

  constructor(
    private controlBaseService: ControlBaseService,
    private authService: AuthService,
    private rectangularORingCalcService: RectangularORingCalcService,
    private dynamicFormTwoColumnLayoutService: DynamicFormTwoColumnLayoutService,
    private printService: PrintService,
    private unitButtonService: UnitButtonService,
    private temperatureButtonService: TemperatureButtonService,
    private oRingDovetailGlandVacuumOnlyValidationService: ORingDovetailGlandVacuumOnlyValidationService,
    private oRingDovetailGlandVacuumOnlyService: ORingDovetailGlandVacuumOnlyService,
    private helperService: HelperService,
    private calculatorToolbarService: CalculatorToolbarService
  ) {

    // get o-ring-dovetail-gland-vacuum-only config value from O-Ring JSON 
    const rectangleJSONConfig = this.rectangularORingCalcService.getCurrentORingConfigValue;

    // o-ring calculator config subscription
    if (rectangleJSONConfig) {
      this.initializeOringConfig(rectangleJSONConfig);
    }
    else {
      this.oRingDataSubscription = this.rectangularORingCalcService.oRingConfig$.subscribe((x: BaseModel) => {
        if (x) {
          this.initializeOringConfig(x);
        }
      });
    }

    // unit change update calculator values handler
    this.onUnitChangeUpdateCalculator();
    this.onTemperatureChangeUpdateCalculator();

    // onPaste event subscription
    this.calculatorToolbarService.paste.subscribe((d: any) => {
      if (d) {
        this.onPaste(d);
      }
    });
  }

  // initialize o-ring-dovetail-gland-vacuum-only calculator by json config param
  private initializeOringConfig(oRingJsonConfig: BaseModel) {
    // calculator - o-ring-dovetail-gland-vacuum-only
    const oRingDovetailGlandVacuumOnly = { ...oRingJsonConfig.calculators[1] };
    this.calculatorConfig = oRingDovetailGlandVacuumOnly;
    // send calculator to dynamic form service
    this.dynamicFormTwoColumnLayoutService.sendCalculator(oRingDovetailGlandVacuumOnly);
    // create form
    this.createForm();
    // show or hide form controls
    this.onOptionChange(+this.calculatorConfig.toolbarOption.value);
    this.setShowPasteBtnFlag();
  }

  // onInit event of component
  ngOnInit(): void {
    this.onReset();
    this.CalculatedData = {};
    this.setShowPasteBtnFlag();
  }

  // temperature change update output values handler
  onTemperatureChangeUpdateCalculator() {
    // unit switch button click/change subscription
    this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe((x: SwitchButtonModel) => {
      if (x) {
        this.resetFormAndCalculation();
      }
    });
  }

  // form control changes subcription and update the graph data
  getControlValue(fieldName: string) {
    if (this.dovetailGlandForm
      && this.dovetailGlandForm.controls[fieldName]
      && this.dovetailGlandForm.controls[fieldName].value) {
      return (+this.dovetailGlandForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3);
    }
  }

  // create form group
  createForm() {
    // get form controls nested array
    const leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.dovetailGlandForm, this.calculatorConfig.form.left_column.form_layout_row);
    const rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.dovetailGlandForm, this.calculatorConfig.form.right_column.form_layout_row);

    // make form control flatten array
    this.flattenedFormControls = [];
    // add calculator toolbar option
    this.flattenedFormControls.push(this.calculatorConfig.toolbarOption);
    this.flattenedFormControls = [...this.flattenedFormControls, ...this.controlBaseService.flatten(leftFormControls)];
    this.flattenedFormControls = [...this.flattenedFormControls, ...this.controlBaseService.flatten(rightFormControls)];
    // exclude formcontrol which is type of label
    const filteredControls: FormControlModel[] = this.flattenedFormControls.filter(fc => {
      // exclude labels and buttons from formgroup
      if (fc && fc.type !== this.controlType.label && fc.type !== this.controlType.button) {
        return fc;
      }
    });

    this.dovetailGlandForm = this.controlBaseService.toFormGroup(filteredControls);
    // get and set validations
    const validations: ValidatorFn[] = [];
    // get validation key from json config object
    let jsonConfigValidationsArray: string[] = this.calculatorConfig.form.form_validation;

    for (let index = 0; index < jsonConfigValidationsArray.length; index++) {
      const validationFuncKey = jsonConfigValidationsArray[index];
      switch (validationFuncKey) {
        case ORingTool_DovetailGlandVacuumOnly_Validators.GLAND_WIDTH_NOMINAL_VALIDATION:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthNominalValidation());
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.GLAND_WIDTH_MIN_VALIDATION:
          if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
            validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthMinValidation(this.calculatorConfig.toolbarOption.value));
          }
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.GLAND_WIDTH_MAX_VALIDATION:
          if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
            validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthMaxValidation(this.calculatorConfig.toolbarOption.value));
          }
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiShouldBeLessThanBottomRadiiMinLimit());
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiNominalNonPhysicalGland());
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION:
          if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
            validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiMinNonPhysicalGland(this.calculatorConfig.toolbarOption.value));
          }
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION:
          if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
            validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiMaxNonPhysicalGland(this.calculatorConfig.toolbarOption.value));
          }
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiNominalShouldBeLessThanBottomRadiiMinLimit());
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiNominalNonPhysicalValidation());
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION:
          if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
            validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiMinNonPhysicalValidation(this.calculatorConfig.toolbarOption.value));
          }
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION:
          if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
            validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiMaxNonPhysicalValidation(this.calculatorConfig.toolbarOption.value));
          }
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.OPERATING_TEMPERATURE_VALIDATION:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.operatingTemperatureValidation());
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.oringCrossSectionNominalValidation());
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.oringIDNominalLargerThanMaxOringIDValidation());
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.LESS_THAN_ZERO_VALIDATION:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.formLessThanZeroValidation(this.calculatorConfig.toolbarOption.key));
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.TOLERANCE_VALIDATION:
          // apply validation only when Tolerance option selected
          if ((+this.calculatorConfig.toolbarOption.value) === CalculatorOption.WithTolerance) {
            validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.toleranceValidation());
          }
          break;
        case ORingTool_DovetailGlandVacuumOnly_Validators.ORING_ID_AS568A_STANDARD_WARNING:
          validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.oRingIDAS568AStandardsWarning());
          break;
      }
    }
    // set custom validations with params
    this.dovetailGlandForm.setValidators(validations);
  }

  // form submit event
  onSubmit(isSubmitted = false) {
    this.CalculatedData = {};
    // reset error, warnings
    this.resetErroAndWarnings();
    // reset calculated output
    this.resetCalculatedLabelValue();

    if (!this.calculatorConfig || !this.calculatorConfig.form) {
      return;
    }

    // this.payLoad = this.dovetailGlandForm.value;
    this.isSubmitted = isSubmitted;

    // client errors that doesnot prevent to submit forms/calculation
    // glandAngle nominal validation
    if (this.calculatorConfig.form.form_validation.includes(ORingTool_DovetailGlandVacuumOnly_Validators.GLAND_ANGLE_NOMINAL_VALIDATION)) {
      const glandAngelNominalError = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleNominalValidation(this.dovetailGlandForm);
      if (glandAngelNominalError) {
        this.addClientErrors(glandAngelNominalError);
      }
    }

    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
      // glandAngle min validation
      if (this.calculatorConfig.form.form_validation.includes(ORingTool_DovetailGlandVacuumOnly_Validators.GLAND_ANGLE_MIN_VALIDATION)) {
        const glandAngelMinError = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleMinValidation(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
        if (glandAngelMinError) {
          this.addClientErrors(glandAngelMinError);
        }
      }

      // glandAngle max validation
      if (this.calculatorConfig.form.form_validation.includes(ORingTool_DovetailGlandVacuumOnly_Validators.GLAND_ANGLE_MAX_VALIDATION)) {
        const glandAngelMaxError = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleMaxValidation(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
        if (glandAngelMaxError) {
          this.addClientErrors(glandAngelMaxError);
        }
      }
    }

    // if validation key O_RING_CROSS_SECTION_VALIDATION exist 
    if (this.calculatorConfig.form.form_validation.includes(ORingTool_DovetailGlandVacuumOnly_Validators.O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION)) {
      const oringCrossSectionNominalLessThanError = this.oRingDovetailGlandVacuumOnlyValidationService.oringCrossSectionNominalLessThanValidation(this.dovetailGlandForm);
      if (oringCrossSectionNominalLessThanError) {
        this.addClientErrors(oringCrossSectionNominalLessThanError);
      }
    }

    // min value validation
    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal && this.calculatorConfig.form.form_validation.includes(ORingTool_DovetailGlandVacuumOnly_Validators.MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION)) {
      // apply validation only when Tolerance and min and max option selected
      const minValueErrors: ErrorModel[] = this.oRingDovetailGlandVacuumOnlyValidationService.minValueValidation(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
      if (minValueErrors.length > 0) {
        for (let index = 0; index < minValueErrors.length; index++) {
          this.addClientErrors(minValueErrors[index]);
        }
      }
    }

    // max value validation
    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal && this.calculatorConfig.form.form_validation.includes(ORingTool_DovetailGlandVacuumOnly_Validators.MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION)) {
      // apply validation only when Tolerance and min and max option selected
      const maxValueErrors: ErrorModel[] = this.oRingDovetailGlandVacuumOnlyValidationService.maxValueValidation(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
      if (maxValueErrors.length > 0) {
        for (let index = 0; index < maxValueErrors.length; index++) {
          this.addClientErrors(maxValueErrors[index]);
        }
      }
    }

    // warnings
    // glandAngle warnings
    const glandAngleNominalWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleNominalWarning(this.dovetailGlandForm);
    if (glandAngleNominalWarning) {
      this.addClientWarnings(glandAngleNominalWarning);
    }

    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
      const glandAngleMinWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleMinWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
      if (glandAngleMinWarning) {
        this.addClientWarnings(glandAngleMinWarning);
      }

      const glandAngleMaxWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleMaxWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
      if (glandAngleMaxWarning) {
        this.addClientWarnings(glandAngleMaxWarning);
      }
    }

    // topRadii warnings
    const topRadiiNominalWarning = this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiNominalWarning(this.dovetailGlandForm);
    if (topRadiiNominalWarning) {
      this.addClientWarnings(topRadiiNominalWarning);
    }

    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
      const topRadiiMinWarning = this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiMinWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
      if (topRadiiMinWarning) {
        this.addClientWarnings(topRadiiMinWarning);
      }

      const topRadiiMaxWarning = this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiMaxWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
      if (topRadiiMaxWarning) {
        this.addClientWarnings(topRadiiMaxWarning);
      }
    }

    // bottomRadii warnings
    const bottomRadiiNominalWarning = this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiNominalWarning(this.dovetailGlandForm);
    if (bottomRadiiNominalWarning) {
      this.addClientWarnings(bottomRadiiNominalWarning);
    }

    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
      const bottomRadiiMinWarning = this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiMinWarning(this.dovetailGlandForm);
      if (bottomRadiiMinWarning) {
        this.addClientWarnings(bottomRadiiMinWarning);
      }

      const bottomRadiiMaxWarning = this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiMaxWarning(this.dovetailGlandForm);
      if (bottomRadiiMaxWarning) {
        this.addClientWarnings(bottomRadiiMaxWarning);
      }
    }

    // glandWidth warnings
    const glandWidthNominalWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthNominalWarning(this.dovetailGlandForm);
    if (glandWidthNominalWarning) {
      this.addClientWarnings(glandWidthNominalWarning);
    }

    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
      const glandWidthMinWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthMinWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
      const glandWidthMaxWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthMaxWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
      if (glandWidthMinWarning) {
        this.addClientWarnings(glandWidthMinWarning);
      }
      if (glandWidthMaxWarning) {
        this.addClientWarnings(glandWidthMaxWarning);
      }
    }

    // stop here if form is invalid/Not_valid
    if (this.dovetailGlandForm.invalid) {
      return;
    }

    // perform calculation
    this.oRingDovetailGlandVacuumOnlyService.createOringDovetail(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe((resp: any) => {
      if (resp.data) {
        // set CalculatedData
        // this will set the graph data also
        this.CalculatedData = Object.assign({}, resp.data);

        if (resp.data.error && resp.data.error.length > 0) {
          // copy the array for change detection
          this.serverErrors = resp.data.error.slice();
        }
        if (resp.data.warning && resp.data.warning.length > 0) {
          // copy the array for change detection
          this.serverWarnings = resp.data.warning.slice();
        }

        const responseDataKeys = Object.keys(resp.data);

        // when tolerance or minAndmax option is selected than also bind calculated labels received after calculation
        if (CalculatorOption.Nominal !== +(this.calculatorConfig.toolbarOption.value)) {

          // Bind left form data
          // loop through each form left column row
          for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
              // loop through controls
              for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                // get form control of JSON
                const formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                // get fields key from resp data
                // const responseDataKeys = Object.keys(resp.data);
                for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                  if (formControl.sub_type === ControlSubType.calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                    // set JSON output label
                    // bind calculated result to output label
                    this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? resp.data[responseDataKeys[keyIndex]].toFixed((this.unitButtonService.getCurrentUnitValue.id === Units.INCH) ? 3 : 2) : resp.data[responseDataKeys[keyIndex]];
                  }
                }
              }
            }
          }

          // Bind right form data
          // loop through each form left column row
          for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.right_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
              // loop through controls
              for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                // get form control of JSON
                const formControl = this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                // get fields key from resp data
                // const responseDataKeys = Object.keys(resp.data);
                for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                  if (formControl.sub_type === ControlSubType.calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                    // set JSON output label
                    // bind calculated result to output label
                    this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? resp.data[responseDataKeys[keyIndex]].toFixed((this.unitButtonService.getCurrentUnitValue.id === Units.INCH) ? 3 : 2) : resp.data[responseDataKeys[keyIndex]];
                  }
                }
              }
            }
          }
        }

        // Bind output form data
        // loop through each output
        for (let outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {

          // set output title of operating temperature label
          if (outputIndex > 0) {
            const temperatureCode = ((+this.temperatureButtonService.getCurrentTemperatureValue.id) === Temperature.FAHRENHEIT) ? TemperatureFahrenheitCode.HEXA_DECIMAL_CODE : TemperatureCelsiusCode.HEXA_DECIMAL_CODE;

            const operatingTemperatureMin = this.dovetailGlandForm.controls["operatingTemperatureMin"];
            const operatingTemperatureNominal = this.dovetailGlandForm.controls["operatingTemperatureNominal"];
            const operatingTemperatureMax = this.dovetailGlandForm.controls["operatingTemperatureMax"];

            // operating temperature min
            if (outputIndex === 1 && operatingTemperatureMin && operatingTemperatureMin.value) {
              this.calculatorConfig.form_output[outputIndex].show = true;
              this.calculatorConfig.form_output[outputIndex].display_output_title = `${operatingTemperatureMin.value}${temperatureCode}`;
            }
            else if (outputIndex === 1) {
              this.calculatorConfig.form_output[outputIndex].show = false;
            }

            // operating temperature nominal
            if (outputIndex === 2 && operatingTemperatureNominal && operatingTemperatureNominal.value) {
              this.calculatorConfig.form_output[outputIndex].show = true;
              this.calculatorConfig.form_output[outputIndex].display_output_title = `${operatingTemperatureNominal.value}${temperatureCode}`;
            }
            else if (outputIndex === 2) {
              this.calculatorConfig.form_output[outputIndex].show = false;
            }


            // operating temperature max
            if (outputIndex === 3 && operatingTemperatureMax && operatingTemperatureMax.value) {
              this.calculatorConfig.form_output[outputIndex].show = true;
              this.calculatorConfig.form_output[outputIndex].display_output_title = `${operatingTemperatureMax.value}${temperatureCode}`;
            }
            else if (outputIndex === 3) {
              this.calculatorConfig.form_output[outputIndex].show = false;
            }
          }

          // loop through rows
          for (let rowIndex = 0; rowIndex < this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
            // loop through columns
            for (let columnIndex = 0; columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length; columnIndex++) {
              // loop through controls
              for (let controlIndex = 0; controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                // get form control of JSON
                const formControl = this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                // get fields key from resp data
                // const responseDataKeys = Object.keys(resp.data);
                for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                  if (formControl.sub_type === ControlSubType.calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                    // set JSON output label
                    // bind calculated result to output label
                    this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = `${(resp.data[responseDataKeys[keyIndex]] !== null && resp.data[responseDataKeys[keyIndex]] !== undefined && !isNaN((+resp.data[responseDataKeys[keyIndex]]))) ? parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed(1) : resp.data[responseDataKeys[keyIndex]]}%`;
                  }
                }
              }
            }
          }
        }

        // reset auth token 
        this.setAuth();
      }
    }, (error: any) => {
      // reset auth token 
      this.setAuth();
      // TODO: show error if any
      console.log(error);
    });
  }

  // add client errors
  addClientErrors(error: ErrorModel) {
    if (this.clientErrors.length > 0) {
      for (let index = 0; index < this.clientErrors.length; index++) {
        if (this.clientErrors[index].field && this.clientErrors[index].field !== error.field) {
          this.clientErrors.push(error);
        }
      }
    }
    else {
      this.clientErrors.push(error);
    }

    // copy the array for change detection
    this.clientErrors = this.clientErrors.slice();
  }

  // add client warnings
  addClientWarnings(warning: ErrorModel) {
    if (this.clientWarnings.length > 0) {
      for (let index = 0; index < this.clientWarnings.length; index++) {
        if (this.clientWarnings[index] && this.clientWarnings[index].field !== warning.field) {
          this.clientWarnings.push(warning);
        }
      }
    }
    else {
      this.clientWarnings.push(warning);
    }

    // copy the array for change detection
    this.clientWarnings = this.clientWarnings.slice();
  }

  // reset auth token
  setAuth() {
    this.authService.authenticate().pipe(first())
      .subscribe(r => r);
  }

  // option nominal, tolerance and (min and max) change handler
  onOptionChange(selectedOption: number) {
    // show or hide controls based on options
    this.dynamicFormTwoColumnLayoutService.showOrHideControlsBasedOnOption(selectedOption);
    // update form submission status
    this.isSubmitted = false;
    // reset error, warnings
    this.resetErroAndWarnings();
    // reset calculated output
    this.resetCalculatedLabelValue();
    // create form
    this.createForm();
    this.setShowPasteBtnFlag();
  }

  // reset error, warnings of client and server
  resetErroAndWarnings() {
    this.clientErrors = [];
    this.clientWarnings = [];
    this.serverErrors = [];
    this.serverWarnings = [];
  }

  // reset calculated label or output value in JSOn config
  resetCalculatedLabelValue() {
    this.CalculatedData = {};


    if (!this.calculatorConfig) {
      return;
    }

    // reset left form data
    // loop through each form left column row
    for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
      // loop through columns
      for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
        // loop through controls
        for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
          // get form control of JSON
          const formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
          if (formControl.sub_type === ControlSubType.calculated_label) {
            // set JSON output label
            // reset calculated result to output label
            this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
          }
        }
      }
    }

    // reset right form data
    // loop through each form left column row
    for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.right_column.form_layout_row.length; rowIndex++) {
      // loop through columns
      for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
        // loop through controls
        for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
          // get form control of JSON
          const formControl = this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
          if (formControl.sub_type === ControlSubType.calculated_label) {
            // set JSON output label
            // bind calculated result to output label
            this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
          }
        }
      }
    }

    // reset output form data
    // loop through each output
    for (let outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
      // loop through rows
      for (let rowIndex = 0; rowIndex < this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
        // loop through columns
        for (let columnIndex = 0; columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length; columnIndex++) {
          // loop through controls
          for (let controlIndex = 0; controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
            // get form control of JSON
            const formControl = this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
            if (formControl.sub_type === ControlSubType.calculated_label) {
              // set JSON output label
              // bind calculated result to output label
              this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = " %";
            }
          }
        }
      }
    }
  }

  // print button event handler
  onPrint() {
    this.printService.generatePdf("dovetailGland");
  }

  // on reset button handler
  onReset() {
    if (!this.dovetailGlandForm) {
      return;
    }

    // get form controls key
    const formControlKeys = Object.keys(this.dovetailGlandForm.controls);
    // loop through the reactive form/formgroup controls 
    for (let index = 0; index < formControlKeys.length; index++) {
      // skip toolbar options(Nominal, Tolerance, Min and Max) resetting
      if (this.calculatorConfig.toolbarOption.key === formControlKeys[index]) {
        continue;
      }

      const formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
      if (formControlDefaultValue) {
        this.dovetailGlandForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
      }
      else {
        this.dovetailGlandForm.controls[formControlKeys[index]].setValue('');
      }
    }

    this.resetFormAndCalculation();
  }

  resetFormAndCalculation() {
    // reset form submitted status to false 
    this.isSubmitted = false;

    // reset client errors and warnings
    this.clientErrors = [];
    this.clientWarnings = [];
    this.serverErrors = [];
    this.serverWarnings = [];

    if (!this.calculatorConfig) {
      return;
    }

    // reset glandsize rectangle-internal-vacuum-only JSON config data
    // const responseDataKeys = Object.keys(this.CalculatedData);
    // reset left form data
    // loop through each form left column row
    for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
      // loop through columns
      for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
        // loop through controls
        for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
          // get form control of JSON
          const formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
          // for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
          if (formControl.sub_type === ControlSubType.calculated_label) {
            // set JSON output label
            // bind calculated result to output label
            this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
          }
          // }
        }
      }
    }

    // reset right form data
    // loop through each form left column row
    for (let rowIndex = 0; rowIndex < this.calculatorConfig.form.right_column.form_layout_row.length; rowIndex++) {
      // loop through columns
      for (let columnIndex = 0; columnIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
        // loop through controls
        for (let controlIndex = 0; controlIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
          // get form control of JSON
          const formControl = this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
          // get fields key from resp data
          // const responseDataKeys = Object.keys(resp.data);
          // for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
          if (formControl.sub_type === ControlSubType.calculated_label) {
            // set JSON output label
            // bind calculated result to output label
            this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
          }
          // }
        }
      }
    }

    // reset output form data
    // loop through each output
    for (let outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
      // loop through rows
      for (let rowIndex = 0; rowIndex < this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
        // loop through columns
        for (let columnIndex = 0; columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length; columnIndex++) {
          // loop through controls
          for (let controlIndex = 0; controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
            // get form control of JSON
            const formControl = this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
            // get fields key from resp data
            // const responseDataKeys = Object.keys(resp.data);
            // for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
            if (formControl.sub_type === ControlSubType.calculated_label) {
              // set JSON output label
              // bind calculated result to output label
              this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = `%`;
            }
            // }
          }
        }
      }
    }

    // Operating Temperature Min
    this.calculatorConfig.form_output[1].display_output_title = "";
    this.calculatorConfig.form_output[1].show = false;
    // Operating Temperature Nominal
    this.calculatorConfig.form_output[2].display_output_title = "";
    // Operating Temperature Max
    this.calculatorConfig.form_output[3].display_output_title = "";
    this.calculatorConfig.form_output[3].show = false;

    // reset calculated data received after calculation
    this.CalculatedData = {};
  }

  // unit change update output values handler
  onUnitChangeUpdateCalculator() {
    // unit switch button click/change subscription
    this.unitChangeSubscription = this.unitButtonService.unit$.subscribe((x: SwitchButtonModel) => {
      // reset 
      this.resetFormAndCalculation();

      if (x) {
        if (x.id === Units.MILLI_METER) {
          // millimeter
          this.bottomRadiiMaxLimit = 0.89; //0.035 * 25.40;
        }
        else {
          // Inch
          this.bottomRadiiMaxLimit = 0.035;
        }

        // convert the form data
        const convertedForm = this.helperService.convertFormUnitControlValuesAndSet((this.calculatorConfig && this.calculatorConfig.form ? this.calculatorConfig.form : null), this.dovetailGlandForm, x);
        if (convertedForm) {
          this.dovetailGlandForm = convertedForm;
        }

        /// recalculate the data
        this.onSubmit();
      }
    });
  }

  // call this function for calculatin to determine validation for dovetail radii
  radiiRecomendation() {
    const glandDepthNominal = parseFloat(this.dovetailGlandForm.controls["glandDepthNominal"].value);
    const glandWidthNominal = parseFloat(this.dovetailGlandForm.controls["glandWidthNominal"].value);
    const topRadiiNominal = parseFloat(this.dovetailGlandForm.controls["topRadiiNominal"].value);
    const bottomRadiiNominal = parseFloat(this.dovetailGlandForm.controls["bottomRadiiNominal"].value);
    const glandAngleNominal = parseFloat(this.dovetailGlandForm.controls["glandAngleNominal"].value);

    if (glandDepthNominal >= 0 && glandWidthNominal >= 0 && topRadiiNominal >= 0 && bottomRadiiNominal >= 0 && glandAngleNominal >= 0) {
      let h = glandDepthNominal - (topRadiiNominal + bottomRadiiNominal) * (1 + Math.sin((90 - glandAngleNominal) * Math.PI / 180));
      let w = (glandWidthNominal / 2) + glandDepthNominal / Math.tan(glandAngleNominal * Math.PI / 180) - bottomRadiiNominal / Math.tan((glandAngleNominal / 2) * Math.PI / 180);
      let bottomRadiiPercent = Math.round((bottomRadiiNominal / glandDepthNominal) * 100);
      let topRadiiPercent = Math.round((topRadiiNominal / glandDepthNominal) * 100);
    }

    const glandDepthMin = parseFloat(this.dovetailGlandForm.controls["glandDepthMin"].value);
    const glandWidthMin = parseFloat(this.dovetailGlandForm.controls["glandWidthMin"].value);
    const topRadiiMin = parseFloat(this.dovetailGlandForm.controls["topRadiiMin"].value);
    const bottomRadiiMin = parseFloat(this.dovetailGlandForm.controls["bottomRadiiMin"].value);
    const glandAngleMin = parseFloat(this.dovetailGlandForm.controls["glandAngleMin"].value);
    if (glandDepthMin >= 0 && glandWidthMin >= 0 && topRadiiMin >= 0 && bottomRadiiMin >= 0 && glandAngleMin >= 0) {
      let hMin = glandDepthMin - (topRadiiMin + bottomRadiiMin) * (1 + Math.sin((90 - glandAngleMin) * Math.PI / 180));
      let wMin = (glandWidthMin / 2) + glandDepthMin / Math.tan(glandAngleMin * Math.PI / 180) - bottomRadiiMin / Math.tan((glandAngleMin / 2) * Math.PI / 180);
      let bottomRadiiMinPercent = Math.round((bottomRadiiMin / glandDepthMin) * 100);
      let topRadiiMinPercent = Math.round((topRadiiMin / glandDepthMin) * 100);
    }

    const glandDepthMax = parseFloat(this.dovetailGlandForm.controls["glandDepthMax"].value);
    const glandWidthMax = parseFloat(this.dovetailGlandForm.controls["glandWidthMax"].value);
    const topRadiiMax = parseFloat(this.dovetailGlandForm.controls["topRadiiMax"].value);
    const bottomRadiiMax = parseFloat(this.dovetailGlandForm.controls["bottomRadiiMax"].value);
    const glandAngleMax = parseFloat(this.dovetailGlandForm.controls["glandAngleMax"].value);
    if (glandDepthMax >= 0 && glandWidthMax >= 0 && topRadiiMax >= 0 && bottomRadiiMax >= 0 && glandAngleMax >= 0) {
      let hMax = glandDepthMax - (topRadiiMax + bottomRadiiMax) * (1 + Math.sin((90 - glandAngleMax) * Math.PI / 180));
      let Max = (glandWidthMax / 2) + glandDepthMax / Math.tan(glandAngleMax * Math.PI / 180) - bottomRadiiMax / Math.tan((glandAngleMax / 2) * Math.PI / 180)
      let bottomRadiiMaxPercent = Math.round((bottomRadiiMax / glandDepthMax) * 100);
      let topRadiiMaxPercent = Math.round((topRadiiMax / glandDepthMax) * 100);
    }
  }

  // on paste calculated data
  onPaste(calculatedData: any) {
    if (calculatedData) {
      this.dovetailGlandForm.patchValue(calculatedData);
      // set material choice dropdown value
      const materialChoiceControl = this.dovetailGlandForm.get('materialCteNominal');
      if (materialChoiceControl) {
        const cte = this.helperService.getMaterialChoiceList('materialCteNominal');
        const i = cte.findIndex((c) => {
          return c.value.id === calculatedData['materialCteNominal'].id
        });
        if (i > -1) {
          materialChoiceControl.setValue(cte[i].value);
        }
      }
    }
  }

  // set show flag of paste button
  setShowPasteBtnFlag() {
    if (this.calculatorConfig && this.calculatorConfig.id) {
      this.isShowPasteBtn = (this.helperService.isCalculatedDataExist(+this.calculatorConfig.id)) ? true : false;
    }
    else {
      this.isShowPasteBtn = false;
    }
  }

  ngOnDestroy(): void {
    if (this.unitChangeSubscription) {
      this.unitChangeSubscription.unsubscribe();
    }
    if (this.temperatureChangeSubscription) {
      this.temperatureChangeSubscription.unsubscribe();
    }
    if (this.oRingDataSubscription) {
      this.oRingDataSubscription.unsubscribe();
    }
  }
}
