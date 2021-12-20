// core imports
import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { RectangleGlandCalcService } from "../rectangle-gland-calc.service";
import { AuthService } from "../../../shared/services/auth.service";
import { ControlType, ControlSubType, GlandSizeCalc_InternalVacuumOnly_Validators, Units, CalculatorTypes, calculatedDataKeys } from '../../../shared/helpers/constants';
import { ControlBaseService } from "../../../shared/services/control-base.service";
import { PrintService } from "../../../shared/services/print.service";
import { UnitButtonService } from '../../../shared/components/unit-button/unit-button.service';
import { TemperatureButtonService } from '../../../shared/components/temperature-button/temperature-button.service';
import { RectangleGlandCalcValidationService } from "../rectangle-gland-calc-validation.service";
import { GlandSizeRectangularGlandExternalVacuumOnlyService } from "./gland-size-rectangular-gland-external-vacuum-only.service";
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { HelperService } from "../../../shared/services/helper.service";
import { ToastService } from "../../../shared/components/toasts-container/toast-service";

@Component({
  selector: 'app-gland-size-rectangular-gland-external-vacuum-only',
  templateUrl: './gland-size-rectangular-gland-external-vacuum-only.component.html',
  styleUrls: ['./gland-size-rectangular-gland-external-vacuum-only.component.css']
})
export class GlandSizeRectangularGlandExternalVacuumOnlyComponent implements OnInit, OnDestroy {

  calculatorConfig: CalculatorModel;
  glandSizeRectangleInternalVacuumForm: FormGroup;
  flattenedFormControls: FormControlModel[] = [];
  controlType = ControlType;
  isSubmitted: Boolean = false;
  payLoad = '';
  clientErrors: ErrorModel[] = [];
  clientWarnings: ErrorModel[] = [];
  serverErrors: ErrorModel[] = [];
  serverWarnings: ErrorModel[] = [];
  // isUnitChanged: boolean = false;
  // subscription
  oRingDataSubscription: Subscription;
  temperatureChangeSubscription: Subscription;
  unitChangeSubscription: Subscription;

  // calculated data
  private calculatedData: any;

  get CalculatedData(): any {
    return this.calculatedData;
  }

  set CalculatedData(val: any) {
    this.calculatedData = val;
    const currentUnit = this.unitButtonService.getCurrentUnitValue;

    if (this.calculatedData && this.calculatedData.unit && currentUnit && (+currentUnit.id) !== (+this.calculatedData.unit)) {
      this.calculatedData.unit = currentUnit.id.toString();
      const keys = Object.keys(this.calculatedData);
      for (let index = 0; index < keys.length; index++) {
        if ((+currentUnit.id) === Units.MILLI_METER) {
          this.calculatedData[keys[index]] = this.helperService.convertToMillimeter((+this.calculatedData[keys[index]]));
        }
        else {
          this.calculatedData[keys[index]] = this.helperService.convertToInch((+this.calculatedData[keys[index]]));
        }
      }
    }
  }

  constructor(
    private controlBaseService: ControlBaseService,
    private authService: AuthService,
    private rectangleGlandCalcService: RectangleGlandCalcService,
    private dynamicFormTwoColumnLayoutService: DynamicFormTwoColumnLayoutService,
    private printService: PrintService,
    private unitButtonService: UnitButtonService,
    private temperatureButtonService: TemperatureButtonService,
    private rectangleGlandCalcValidationService: RectangleGlandCalcValidationService,
    private glandSizeRectangularGlandExternalVacuumOnlyService: GlandSizeRectangularGlandExternalVacuumOnlyService,
    private helperService: HelperService,
    private readonly toastService: ToastService
  ) {
    // o-ring calculator config subscription
    this.oRingDataSubscription = this.rectangleGlandCalcService.glandSizeCalcConfig$.subscribe((x: BaseModel) => {
      if (x) {
        // calculator - internal vacuum only
        this.calculatorConfig = x.calculators[3];
        // send calculator to dynamic form service
        this.dynamicFormTwoColumnLayoutService.sendCalculator(x.calculators[3]);
        // create form
        this.createForm();
      }
    });

    // temperature change perform operations
    this.onTemperatureChangeUpdateCalculator();

    // unit change
    this.onUnitChange();
  }

  ngOnInit(): void {
    this.isSubmitted = false;
    this.CalculatedData = null;
  }

  // unit change perform operations
  onUnitChange() {
    // unit switch button click/change subscription
    this.unitChangeSubscription = this.unitButtonService.unit$.subscribe((x: SwitchButtonModel) => {
      if (x && this.CalculatedData) {
        // calculated change detection when by changing the object
        this.CalculatedData = Object.assign({}, this.CalculatedData);

        // convert the form data
        const convertedForm = this.helperService.convertFormUnitControlValuesAndSet((this.calculatorConfig && this.calculatorConfig.form ? this.calculatorConfig.form : null), this.glandSizeRectangleInternalVacuumForm, x);
        if (convertedForm) {
          this.glandSizeRectangleInternalVacuumForm = convertedForm;
        }

        /// recalculate the data
        this.onSubmit();
      }
    });
  }

  // temperature change update output values handler
  onTemperatureChangeUpdateCalculator() {
    // temperature switch button click/change subscription
    this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe((x: SwitchButtonModel) => {
      if (x) {
        this.resetFormAndCalculation();
      }
    });
  }

  // form control changes subcription and update the graph data
  getControlValue(fieldName: string) {
    if (this.glandSizeRectangleInternalVacuumForm
      && this.glandSizeRectangleInternalVacuumForm.controls[fieldName]
      && this.glandSizeRectangleInternalVacuumForm.controls[fieldName].value) {
      return (+this.glandSizeRectangleInternalVacuumForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3);
    }
  }

  // get calculated field values by fieldname
  getCalculatedControlValue(fieldName: string) {
    if (this.CalculatedData) {
      const fieldValue = this.CalculatedData[fieldName];
      if (fieldValue) {
        return (+fieldValue).toFixed(this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3);
      }
    }
  }

  // form submit event
  onSubmit(isSubmitted = false) {
    this.CalculatedData = null;
    // reset error, warnings
    this.resetErroAndWarnings();
    // reset calculated output
    this.resetCalculatedLabelValue();

    this.payLoad = this.glandSizeRectangleInternalVacuumForm.value;
    this.isSubmitted = isSubmitted;

    // stop here if form is invalid/Not_valid
    if (this.glandSizeRectangleInternalVacuumForm.invalid) {
      return;
    }

    // perform calculation
    this.glandSizeRectangularGlandExternalVacuumOnlyService.createGland(this.glandSizeRectangleInternalVacuumForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(
      (resp: ORingInternalVacuumOnlyCalculatedOutput) => {
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

          // Bind output form data
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

  // on reset button handler
  onReset() {
    // reset dynamically created form controls
    // get form controls key
    const formControlKeys = Object.keys(this.glandSizeRectangleInternalVacuumForm.controls);
    // loop through the reactive form/formgroup controls 
    for (let index = 0; index < formControlKeys.length; index++) {
      const formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
      if (formControlDefaultValue) {
        this.glandSizeRectangleInternalVacuumForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
      }
      else {
        this.glandSizeRectangleInternalVacuumForm.controls[formControlKeys[index]].setValue('');
      }
    }

    this.resetFormAndCalculation();
  }

  resetFormAndCalculation() {
    // reset form submitted status to false 
    this.isSubmitted = false;

    // reset client errors and warnings
    this.resetErroAndWarnings();

    if (!this.calculatorConfig) {
      return;
    }

    // reset glandsize rectangle-internal-vacuum-only JSON config data
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
          // const responseDataKeys = Object.keys(resp.data);
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
            // const responseDataKeys = Object.keys(resp.data);
            if (formControl.sub_type === ControlSubType.calculated_label) {
              // set JSON output label
              // bind calculated result to output label
              this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = `%`;
            }
          }
        }
      }
    }

    // reset calculated data received after calculation
    this.CalculatedData = null;
  }

  // print button event handler
  onPrint() {
    this.printService.generatePdf("rectangleGland");
  }

  // create form group
  createForm() {
    // get form controls nested array
    const leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.glandSizeRectangleInternalVacuumForm, this.calculatorConfig.form.left_column.form_layout_row);
    const rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.glandSizeRectangleInternalVacuumForm, this.calculatorConfig.form.right_column.form_layout_row);

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

    this.glandSizeRectangleInternalVacuumForm = this.controlBaseService.toFormGroup(filteredControls);
    // get and set validations
    const validations: ValidatorFn[] = [];
    // get validation key from json config object
    let jsonConfigValidationsArray: string[] = this.calculatorConfig.form.form_validation;

    for (let index = 0; index < jsonConfigValidationsArray.length; index++) {
      const validationFuncKey = jsonConfigValidationsArray[index];
      switch (validationFuncKey) {
        case GlandSizeCalc_InternalVacuumOnly_Validators.OPERATING_TEMPERATURE_VALIDATION:
          validations.push(this.rectangleGlandCalcValidationService.operatingTemperatureValidation());
          break;
        case GlandSizeCalc_InternalVacuumOnly_Validators.O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION:
          validations.push(this.rectangleGlandCalcValidationService.oringCrossSectionNominalValidation());
          break;
        case GlandSizeCalc_InternalVacuumOnly_Validators.ORING_ID_AS568A_STANDARD_WARNING:
          validations.push(this.rectangleGlandCalcValidationService.oRingIDAS568AStandardsWarning());
          break;
        case GlandSizeCalc_InternalVacuumOnly_Validators.O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION:
          validations.push(this.rectangleGlandCalcValidationService.oringIDNominalLargerThanMaxOringIDValidation());
          break;
      }
    }
    // set custom validations with params
    this.glandSizeRectangleInternalVacuumForm.setValidators(validations);
  }

  // reset auth token
  setAuth() {
    this.authService.authenticate().pipe(first())
      .subscribe(r => r);
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

  // reset calculated label or output value in JSON config
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

  // copy event handler of toolbar
  onCopy() {
    let formAndOutputData: any;
    // save calculated data to local storage
    if (this.CalculatedData) {
      formAndOutputData = { ...this.glandSizeRectangleInternalVacuumForm.value, ...this.CalculatedData };
    }
    else {
      formAndOutputData = { ...this.glandSizeRectangleInternalVacuumForm.value };
    }

    formAndOutputData.calculatorType = CalculatorTypes.ORingRectangularGlandExternalVacuumOnly;
    localStorage.setItem(calculatedDataKeys.RECTANGULAR_GLAND_EXTERNAL, JSON.stringify(formAndOutputData));
    // this.cookieService.set('lastCalculatedData', JSON.stringify(resp.data));
    this.toastService.showSucces("Calculator data copied !");
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
