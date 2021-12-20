// core imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';

// third party imports
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

// application imports
import { DynamicFormTwoColumnLayoutService } from "../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service";
import { CalculatorModel } from "../../../models/calculator.model";
import { FormControlModel } from '../../../models/form-control.model';
import { BaseModel } from '../../../models/base.model';
import { FormColumnModel } from '../../../models/form-column.model';
import { ErrorModel } from '../../../models/error.model';
import { ORingInternalVacuumOnlyCalculatedOutput } from '../../../models/oRingInternalVacuumOnlyCalculatedOutput';
import { RectangularORingCalcService } from "../rectangular-o-ring-calc.service";
import { AuthService } from "../../../shared/services/auth.service";
import { ControlType, Units, ORingTool_RactangleExternalVacuumOnly_Validators, CalculatorOption, ControlSubType, Temperature, TemperatureFahrenheitCode, TemperatureCelsiusCode } from '../../../shared/helpers/constants';
import { ControlBaseService } from "../../../shared/services/control-base.service";
import { PrintService } from "../../../shared/services/print.service";
import { UnitButtonService } from '../../../shared/components/unit-button/unit-button.service';
import { TemperatureButtonService } from '../../../shared/components/temperature-button/temperature-button.service';
import { ORingRectangularGlandExternalVacuumOnlyService } from "./o-ring-rectangular-gland-external-vacuum-only.service";
import { ORingRectangularGlandExternalVacuumOnlyValidationService } from "./o-ring-rectangular-gland-external-vacuum-only-validation.service";
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { HelperService } from "../../../shared/services/helper.service";
import { CalculatorToolbarService } from "../../../shared/components/calculator-toolbar/calculator-toolbar.service";

@Component({
  selector: 'app-o-ring-rectangular-gland-external-vacuum-only',
  templateUrl: './o-ring-rectangular-gland-external-vacuum-only.component.html',
  styleUrls: ['./o-ring-rectangular-gland-external-vacuum-only.component.css']
})
export class ORingRectangularGlandExternalVacuumOnlyComponent implements OnInit {
  calculatorConfig: CalculatorModel;
  oRingRectGlandExternalForm: FormGroup;
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
  temperatureChangeSubscription: Subscription;
  unitChangeSubscription: Subscription;

  constructor(
    private controlBaseService: ControlBaseService,
    private authService: AuthService,
    private rectangularORingCalcService: RectangularORingCalcService,
    private dynamicFormTwoColumnLayoutService: DynamicFormTwoColumnLayoutService,
    private printService: PrintService,
    private unitButtonService: UnitButtonService,
    private temperatureButtonService: TemperatureButtonService,
    private oRingRectangularGlandExternalVacuumOnlyService: ORingRectangularGlandExternalVacuumOnlyService,
    private oRingRectangularGlandExternalVacuumOnlyValidationService: ORingRectangularGlandExternalVacuumOnlyValidationService,
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
    // temperature change
    this.onTemperatureChangeUpdateCalculator();

    // unit change
    this.onUnitChange();

    // onPaste event subscription
    this.calculatorToolbarService.paste.subscribe((d: any) => {
      if (d) {
        this.onPaste(d);
      }
    });
  }

  // initialize o-ring-rectangular-gland-external-vacuum-only calculator by json config param
  private initializeOringConfig(oRingJsonConfig: BaseModel) {
    // calculator - o-ring-dovetail-gland-vacuum-only
    const oRingRectGlandExternalVacuumOnly = { ...oRingJsonConfig.calculators[3] };
    this.calculatorConfig = oRingRectGlandExternalVacuumOnly;
    // send calculator to dynamic form service
    this.dynamicFormTwoColumnLayoutService.sendCalculator(oRingRectGlandExternalVacuumOnly);
    // create form
    this.createForm();
    // show or hide form controls
    this.onOptionChange(+this.calculatorConfig.toolbarOption.value);
    this.setShowPasteBtnFlag();
  }

  // onInit event of component
  ngOnInit(): void {
    this.onReset();
    this.isSubmitted = false;
    this.CalculatedData = {};
    this.setShowPasteBtnFlag();
  }

  // unit change perform operations
  onUnitChange() {
    // reset 
    this.resetFormAndCalculation();
    // unit switch button click/change subscription
    this.unitChangeSubscription = this.unitButtonService.unit$.subscribe((x: SwitchButtonModel) => {
      if (x) {
        // convert the form data
        const convertedForm = this.helperService.convertFormUnitControlValuesAndSet((this.calculatorConfig && this.calculatorConfig.form ? this.calculatorConfig.form : null), this.oRingRectGlandExternalForm, x);
        if (convertedForm) {
          this.oRingRectGlandExternalForm = convertedForm;
        }

        /// recalculate the data
        this.onSubmit();
      }
    });
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
    if (this.oRingRectGlandExternalForm
      && this.oRingRectGlandExternalForm.controls[fieldName]
      && this.oRingRectGlandExternalForm.controls[fieldName].value) {
      return (+this.oRingRectGlandExternalForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3);
    }
  }

  // create form group
  createForm() {
    // get form controls nested array
    const leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.oRingRectGlandExternalForm, this.calculatorConfig.form.left_column.form_layout_row);
    const rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.oRingRectGlandExternalForm, this.calculatorConfig.form.right_column.form_layout_row);

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

    this.oRingRectGlandExternalForm = this.controlBaseService.toFormGroup(filteredControls);
    // custom validation arguments
    // get and set validations
    const validations: ValidatorFn[] = [];
    // get validation key from json config object
    let jsonConfigValidationsArray: string[] = this.calculatorConfig.form.form_validation;

    for (let index = 0; index < jsonConfigValidationsArray.length; index++) {
      const validationFuncKey = jsonConfigValidationsArray[index];
      switch (validationFuncKey) {
        case ORingTool_RactangleExternalVacuumOnly_Validators.BOTTOM_RADII_NOMINAL_VALIDATION:
          validations.push(this.oRingRectangularGlandExternalVacuumOnlyValidationService.bottomRadiiShouldNotBeLargerThanGlandWidthOrDepth());
          break;
        case ORingTool_RactangleExternalVacuumOnly_Validators.OPERATING_TEMPERATURE_VALIDATION:
          validations.push(this.oRingRectangularGlandExternalVacuumOnlyValidationService.operatingTemperatureValidation());
          break;
        case ORingTool_RactangleExternalVacuumOnly_Validators.O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION:
          validations.push(this.oRingRectangularGlandExternalVacuumOnlyValidationService.oringCrossSectionNominalValidation());
          break;
        case ORingTool_RactangleExternalVacuumOnly_Validators.LESS_THAN_ZERO_VALIDATION:
          validations.push(this.oRingRectangularGlandExternalVacuumOnlyValidationService.formLessThanZeroValidation(this.calculatorConfig.toolbarOption.key));
          break;
        case ORingTool_RactangleExternalVacuumOnly_Validators.TOLERANCE_VALIDATION:
          // apply validation only when Tolerance option selected
          if ((+this.calculatorConfig.toolbarOption.value) === CalculatorOption.WithTolerance) {
            validations.push(this.oRingRectangularGlandExternalVacuumOnlyValidationService.toleranceValidation());
          }
          break;
        case ORingTool_RactangleExternalVacuumOnly_Validators.ORING_ID_AS568A_STANDARD_WARNING:
          validations.push(this.oRingRectangularGlandExternalVacuumOnlyValidationService.oRingIDAS568AStandardsWarning());
          break;
        case ORingTool_RactangleExternalVacuumOnly_Validators.O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION:
          validations.push(this.oRingRectangularGlandExternalVacuumOnlyValidationService.oringIDNominalLargerThanMaxOringIDValidation());
          break;
      }
    }
    // set custom validations with params
    this.oRingRectGlandExternalForm.setValidators(validations);
  }

  // reset auth token
  setAuth() {
    this.authService.authenticate().pipe(first())
      .subscribe(r => r);
  }

  // form submit event
  onSubmit(isSubmitted = false) {
    this.CalculatedData = {};
    // reset error, warnings
    this.resetErroAndWarnings();
    // reset calculated output
    this.resetCalculatedLabelValue();

    if (!this.calculatorConfig) {
      return;
    }

    this.isSubmitted = isSubmitted;

    // client errors that doesnot prevent to submit forms/calculation
    // glandWidth validation
    if (this.calculatorConfig.form.form_validation.includes(ORingTool_RactangleExternalVacuumOnly_Validators.GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION)) {
      const glandWidthShouldBeLargerThanORingCrossSectionError = this.oRingRectangularGlandExternalVacuumOnlyValidationService.glandWidthShouldBeLargerThanORingCrossSection(this.oRingRectGlandExternalForm);
      if (glandWidthShouldBeLargerThanORingCrossSectionError) {
        this.addClientErrors(glandWidthShouldBeLargerThanORingCrossSectionError);
      }
    }

    // if validation key O_RING_CROSS_SECTION_VALIDATION exist 
    if (this.calculatorConfig.form.form_validation.includes(ORingTool_RactangleExternalVacuumOnly_Validators.O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION)) {
      const oringCrossSectionNominalLessThanError = this.oRingRectangularGlandExternalVacuumOnlyValidationService.oringCrossSectionNominalLessThanValidation(this.oRingRectGlandExternalForm);
      if (oringCrossSectionNominalLessThanError) {
        this.addClientErrors(oringCrossSectionNominalLessThanError);
      }
    }

    // bottomRadiiShouldBeLargerThanBottomRadiiMinLimit error
    if (this.calculatorConfig.form.form_validation.includes(ORingTool_RactangleExternalVacuumOnly_Validators.BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT)) {
      const bottomRadiiShouldBeLargerThanBottomRadiiMinLimitError = this.oRingRectangularGlandExternalVacuumOnlyValidationService.bottomRadiiShouldBeLargerThanBottomRadiiMinLimit(this.oRingRectGlandExternalForm);
      if (bottomRadiiShouldBeLargerThanBottomRadiiMinLimitError) {
        this.addClientErrors(bottomRadiiShouldBeLargerThanBottomRadiiMinLimitError);
      }
    }

    // min value validation
    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal && this.calculatorConfig.form.form_validation.includes(ORingTool_RactangleExternalVacuumOnly_Validators.MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION)) {
      // apply validation only when Tolerance and min and max option selected
      const minValueErrors: ErrorModel[] = this.oRingRectangularGlandExternalVacuumOnlyValidationService.minValueValidation(this.oRingRectGlandExternalForm, this.calculatorConfig.toolbarOption.value);
      if (minValueErrors.length > 0) {
        for (let index = 0; index < minValueErrors.length; index++) {
          this.addClientErrors(minValueErrors[index]);
        }
      }
    }

    // max value validation
    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal && this.calculatorConfig.form.form_validation.includes(ORingTool_RactangleExternalVacuumOnly_Validators.MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION)) {
      // apply validation only when Tolerance and min and max option selected
      const maxValueErrors: ErrorModel[] = this.oRingRectangularGlandExternalVacuumOnlyValidationService.maxValueValidation(this.oRingRectGlandExternalForm, this.calculatorConfig.toolbarOption.value);
      if (maxValueErrors.length > 0) {
        for (let index = 0; index < maxValueErrors.length; index++) {
          this.addClientErrors(maxValueErrors[index]);
        }
      }
    }

    // warnings
    const glandWidthNominalWarning = this.oRingRectangularGlandExternalVacuumOnlyValidationService.glandWidthNominalWarning(this.oRingRectGlandExternalForm);
    if (glandWidthNominalWarning) {
      this.addClientWarnings(glandWidthNominalWarning);
    }

    if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
      const glandWidthMinWarning = this.oRingRectangularGlandExternalVacuumOnlyValidationService.glandWidthMinWarning(this.oRingRectGlandExternalForm, this.calculatorConfig.toolbarOption.value);
      const glandWidthMaxWarning = this.oRingRectangularGlandExternalVacuumOnlyValidationService.glandWidthMaxWarning(this.oRingRectGlandExternalForm, this.calculatorConfig.toolbarOption.value);
      if (glandWidthMinWarning) {
        this.addClientWarnings(glandWidthMinWarning);
      }
      if (glandWidthMaxWarning) {
        this.addClientWarnings(glandWidthMaxWarning);
      }
    }

    // stop here if form is invalid/Not_valid
    if (this.oRingRectGlandExternalForm.invalid) {
      return;
    }

    // perform calculation
    this.oRingRectangularGlandExternalVacuumOnlyService.createORing(
      this.oRingRectGlandExternalForm,
      this.calculatorConfig.toolbarOption.value,
      this.unitButtonService.getCurrentUnitValue,
      this.temperatureButtonService.getCurrentTemperatureValue
    ).subscribe((resp: ORingInternalVacuumOnlyCalculatedOutput) => {
      if (resp.data) {

        // set CalculatedData
        // this will set the graph data also
        this.CalculatedData = Object.assign({}, resp.data);

        if (resp.data.error && resp.data.error.length > 0) {
          this.serverErrors = resp.data.error.slice();
        }

        if (resp.data.warning && resp.data.warning.length > 0) {
          this.serverWarnings = resp.data.warning;
        }

        const responseDataKeys = Object.keys(resp.data);

        // when toleranc or minmax option is selected than also bind calculated labels received after calculation
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

            const operatingTemperatureMin = this.oRingRectGlandExternalForm.controls["operatingTemperatureMin"];
            const operatingTemperatureNominal = this.oRingRectGlandExternalForm.controls["operatingTemperatureNominal"];
            const operatingTemperatureMax = this.oRingRectGlandExternalForm.controls["operatingTemperatureMax"];

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

    this.clientWarnings = this.clientWarnings.slice();
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

  // on reset button handler
  onReset() {
    if (!this.oRingRectGlandExternalForm) {
      return;
    }

    // get form controls key
    const formControlKeys = Object.keys(this.oRingRectGlandExternalForm.controls);
    // loop through the reactive form/formgroup controls 
    for (let index = 0; index < formControlKeys.length; index++) {
      // skip toolbar options(Nominal, Tolerance, Min and Max) resetting
      if (this.calculatorConfig.toolbarOption.key === formControlKeys[index]) {
        continue;
      }

      const formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
      if (formControlDefaultValue) {
        this.oRingRectGlandExternalForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
      }
      else {
        this.oRingRectGlandExternalForm.controls[formControlKeys[index]].setValue('');
      }
    }

    this.resetFormAndCalculation();
  }

  // clears the form submission status and 
  // calcuated data
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
          if (formControl.sub_type === ControlSubType.calculated_label) {
            // set JSON output label
            // bind calculated result to output label
            this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
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
          // get fields key from resp data
          if (formControl.sub_type === ControlSubType.calculated_label) {
            // set JSON output label
            // bind calculated result to output label
            this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
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
            // get fields key from resp data
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

  // print button event handler
  onPrint() {
    this.printService.generatePdf("rectangleGland");
  }

  // on paste calculated data
  onPaste(calculatedData: any) {
    if (calculatedData) {
      this.oRingRectGlandExternalForm.patchValue(calculatedData);
      // set material choice dropdown value
      const materialChoiceControl = this.oRingRectGlandExternalForm.get('materialCteNominal');
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

  // component destroy
  ngOnDestroy(): void {
    if (this.oRingDataSubscription) {
      this.oRingDataSubscription.unsubscribe();
    }
    if (this.temperatureChangeSubscription) {
      this.temperatureChangeSubscription.unsubscribe();
    }

    if (this.unitChangeSubscription) {
      this.unitChangeSubscription.unsubscribe();
    }
  }
}
