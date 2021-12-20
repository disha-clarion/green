// core imports
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';

// third party imports
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

// application imports
import { DynamicFormTwoColumnLayoutService } from "../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service";
import { CalculatorModel } from "../../models/calculator.model";
import { FormControlModel } from '../../models/form-control.model';
import { BaseModel } from '../../models/base.model';
import { FormColumnModel } from '../../models/form-column.model';
import { ErrorModel } from '../../models/error.model';
import { ArWrCalcService } from "../ar-wr-calc.service";
import { AuthService } from "../../shared/services/auth.service";
import { ControlType, ControlSubType, Units, Temperature, WrArCalc_PressIn_Validators } from '../../shared/helpers/constants';
import { ControlBaseService } from "../../shared/services/control-base.service";
import { PrintService } from "../../shared/services/print.service";
import { UnitButtonService } from '../../shared/components/unit-button/unit-button.service';
import { TemperatureButtonService } from '../../shared/components/temperature-button/temperature-button.service';
import { ArWrPressInValidationService } from "./ar-wr-press-in-validation.service";
import { ArWrPressInService } from "./ar-wr-press-in.service";
import { SwitchButtonModel } from '../../models/switch-button.model';
import { HelperService } from "../../shared/services/helper.service";
import { TwoColumnFormModel } from '../../models/two_column_form.model';
import { FormRowModel } from '../../models/form-row.model';

@Component({
  selector: 'app-ar-wr-press-in',
  templateUrl: './ar-wr-press-in.component.html',
  styleUrls: ['./ar-wr-press-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArWrPressInComponent implements OnInit, OnDestroy {

  calculatorConfig: CalculatorModel;
  arwrPessInForm: FormGroup;
  flattenedFormControls: FormControlModel[] = [];
  controlType = ControlType;
  isSubmitted = false;
  payLoad = '';
  clientErrors: ErrorModel[] = [];
  clientWarnings: ErrorModel[] = [];
  serverErrors: ErrorModel[] = [];
  serverWarnings: ErrorModel[] = [];
  notes = [
    `(*1) If the estimated interface pressure becomes lower than the differential pressure on the part, then the
    composite and housing could lose contact, and the interface pressure is overcome. In such case, please
    secure the composite mechanically. In order to increase the interference pressure, changing the composite
    material, increasing interference fit etc. can be considered. Please contact Greene Tweed engineering for
    help or advice if required.`,
    `(*2) If the estimated collapse pressure becomes lower than the differential pressure on the part, direct
    contact between the dynamic surfaces could occur and an alternate design or material is required. Please
    contact Greene Tweed engineering for help or advice if required.`,
    `(3) Material selection for the application is subject to media compatibility and design 
    solution reliant on verification by GT engineering.`
  ];

  // calculated data
  private calculatedData: any;

  get CalculatedData(): any {
    return this.calculatedData;
  }

  set CalculatedData(val: any) {
    this.calculatedData = val;
  }

  // subscription
  arWrDataSubscription: Subscription;
  unitChangeSubscription: Subscription;

  // constructor
  constructor(
    private readonly controlBaseService: ControlBaseService,
    private readonly authService: AuthService,
    private readonly arWrCalcService: ArWrCalcService,
    private readonly dynamicFormTwoColumnLayoutService: DynamicFormTwoColumnLayoutService,
    private readonly printService: PrintService,
    private readonly unitButtonService: UnitButtonService,
    private readonly temperatureButtonService: TemperatureButtonService,
    private readonly helperService: HelperService,
    private readonly arWrPressInService: ArWrPressInService,
    private readonly arWrPressInValidationService: ArWrPressInValidationService
  ) {
    // o-ring calculator config subscription
    this.arWrDataSubscription = this.arWrCalcService.arWrConfig$.subscribe((x: BaseModel) => {
      if (x) {
        // calculator - internal vacuum only
        this.calculatorConfig = x.calculators[0];
        // send calculator to dynamic form service
        this.dynamicFormTwoColumnLayoutService.sendCalculator(x.calculators[0]);
        // create form
        this.createForm();
      }
    });

    // unit change
    this.onUnitChange();
  }

  // form control changes subcription and update the graph data
  getControlValue(fieldName: string) {
    if (this.arwrPessInForm && this.arwrPessInForm.controls[fieldName]) {
      return this.arwrPessInForm.controls[fieldName].value;
    }
    else {
      return "";
    }
  }

  // onInit
  ngOnInit(): void {
    this.onReset();
    this.isSubmitted = false;
    this.CalculatedData = {};
  }

  // unit change perform operations
  onUnitChange() {
    // reset 
    this.resetFormAndCalculation();

    // unit switch button click/change subscription
    this.unitChangeSubscription = this.unitButtonService.unit$.subscribe((x: SwitchButtonModel) => {
      if (x) {
        // reset 
        this.resetFormAndCalculation();

        // set temperature
        this.setTemperature();

        if (this.CalculatedData) {
          // calculated change detection when by changing the object
          this.CalculatedData = Object.assign({}, this.CalculatedData);
        }

        // get rotor and stator cte dropdown controls
        const selectedCustomRotatingMaterialControl = this.arwrPessInForm?.controls["customRotatingMaterial"];
        const selectedCustomStationaryMaterialControl = this.arwrPessInForm?.controls["customStationaryMaterial"];

        // clear rotor CTE custom input values
        if (selectedCustomRotatingMaterialControl) {
          selectedCustomRotatingMaterialControl.setValue("");
        }

        // clear stator CTE custom input values
        if (selectedCustomStationaryMaterialControl) {
          selectedCustomStationaryMaterialControl.setValue("");
        }

        // convert the form data
        const convertedForm = this.helperService.convertFormUnitControlValuesAndSet(
          (this.calculatorConfig && this.calculatorConfig.form ? this.calculatorConfig.form : null),
          this.arwrPessInForm, x
        );

        // rotating material dropdown selected and not custom selected
        const selectedRotatingMaterialControl = this.arwrPessInForm?.controls["rotatingMaterial"];
        const selectedStationaryMaterialControl = this.arwrPessInForm?.controls["stationaryMaterial"];
        // convert 10 power -6 to XX.XX
        if (selectedRotatingMaterialControl && selectedRotatingMaterialControl.value && selectedRotatingMaterialControl.value.value > 0) {
          this.arWrCalcService.getAndSetMaterialCTE(this.arwrPessInForm, "rotatingMaterial", "customRotatingMaterial", selectedRotatingMaterialControl.value);
        }

        // stationary material dropdown selected and not custom selected
        // convert 10 power -6 to XX.XX
        if (selectedStationaryMaterialControl && selectedStationaryMaterialControl.value && selectedStationaryMaterialControl.value.value > 0) {
          this.arWrCalcService.getAndSetMaterialCTE(this.arwrPessInForm, "stationaryMaterial", "customStationaryMaterial", selectedStationaryMaterialControl.value);
        }

        if (this.calculatorConfig && this.calculatorConfig.form) {
          // reset the temperature range label value
          this.helperService.resetLabel(this.calculatorConfig.form.left_column.form_layout_row, "compositeTemperatureRage");
          this.getSetCompositeMaterialData(); // set the temperature range again
        }

        if (convertedForm) {
          this.arwrPessInForm = convertedForm;
        }
      }
    });
  }

  // set temperature
  setTemperature() {
    const currentUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
    const currentTemp: SwitchButtonModel = this.temperatureButtonService.getCurrentTemperatureValue;

    if (currentUnit && currentUnit.id > 0
      && currentUnit.id === Units.INCH
      && currentTemp && currentTemp.id > 0
      && currentTemp.id !== Temperature.FAHRENHEIT) {
      this.helperService.setAndSendTemperatureManually(Temperature.FAHRENHEIT);
    }

    if (currentUnit && currentUnit.id > 0 && currentUnit.id === Units.MILLI_METER
      && currentTemp && currentTemp.id > 0 && currentTemp.id !== Temperature.CELCIUS) {
      this.helperService.setAndSendTemperatureManually(Temperature.CELCIUS);
    }
  }

  // calculate button click handler / form submit handler
  performCalculation() {
    this.isSubmitted = true;
    this.onSubmit();
  }

  onSubmit() {
    if (!this.isSubmitted) {
      return;
    }

    this.CalculatedData = {};
    // reset error, warnings
    this.resetErroAndWarnings();
    // reset calculated output
    this.resetCalculatedLabelValue();

    if (!this.calculatorConfig) {
      return;
    }


    if (!this.arwrPessInForm || !this.arwrPessInForm.value) {
      return;
    }

    this.payLoad = this.arwrPessInForm.value;

    // client errors that doesnot prevent to submit forms/calculation
    // glandWidth validation
    if (this.calculatorConfig.form.form_validation.includes(WrArCalc_PressIn_Validators.CLEARANCE_VALIDATION)) {
      const clearanceBasedOnPumpAndComponentTypeError = this.arWrPressInValidationService.clearanceValidationBasedOnPumpAndComponentType(this.arwrPessInForm);
      if (clearanceBasedOnPumpAndComponentTypeError) {
        this.addClientErrors(clearanceBasedOnPumpAndComponentTypeError);
      }
    }

    // stop here if form is invalid/Not_valid
    if (!this.arwrPessInForm || this.arwrPessInForm.invalid) {
      return;
    }

    // perform calculation
    this.arWrPressInService.pressInCalculation(this.arwrPessInForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(
      (resp: any) => {
        // response
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

          // Bind output form data
          // loop through each output
          for (let outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
            // loop through rows
            for (let rowIndex = 0; rowIndex < this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
              // loop through columns
              for (let columnIndex = 0;
                columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length;
                columnIndex++
              ) {
                // loop through controls
                for (let controlIndex = 0;
                  controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length;
                  controlIndex++) {
                  // get form control of JSON
                  const formControl = this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                  // get fields key from resp data
                  // const responseDataKeys = Object.keys(resp.data);
                  for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                    if (formControl.sub_type === ControlSubType.calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                      // set JSON output label
                      // bind calculated result to output label
                      if (responseDataKeys[keyIndex].toLocaleLowerCase() === ("pressureInfoRT").toLocaleLowerCase()
                        || responseDataKeys[keyIndex].toLocaleLowerCase() === ("estimatedInterfacePressureAtHighestTemperature").toLocaleLowerCase()
                        || responseDataKeys[keyIndex].toLocaleLowerCase() === ("estimatedCollapsePressureatHighestTemperature").toLocaleLowerCase()
                      ) {
                        this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label =
                          `${(resp.data[responseDataKeys[keyIndex]]
                            && resp.data[responseDataKeys[keyIndex]] !== null
                            && resp.data[responseDataKeys[keyIndex]] !== undefined
                            &&
                            !isNaN((+resp.data[responseDataKeys[keyIndex]]))) ?
                            parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed(1) :
                            ((
                              resp.data[responseDataKeys[keyIndex]] === null
                              || resp.data[responseDataKeys[keyIndex]] === undefined
                              || resp.data[responseDataKeys[keyIndex]] === 'undefined'
                            ) ? "NA" :
                              resp.data[responseDataKeys[keyIndex]])}`;
                      }
                      else if (
                        this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER &&
                        (responseDataKeys[keyIndex].toLocaleLowerCase() === ("machineCompositeODTol").toLocaleLowerCase()
                          || responseDataKeys[keyIndex].toLocaleLowerCase() === ("finishMachineCompositeIDAfterInstallationInchTol").toLocaleLowerCase()
                          || responseDataKeys[keyIndex].toLocaleLowerCase() === ("machineCompositeOALTol").toLocaleLowerCase()
                          || responseDataKeys[keyIndex].toLocaleLowerCase() === ("estimatingIDAfterInstallationTol").toLocaleLowerCase())
                      ) {
                        this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label =
                          `${(resp.data[responseDataKeys[keyIndex]]
                            && resp.data[responseDataKeys[keyIndex]] !== null
                            && resp.data[responseDataKeys[keyIndex]] !== undefined
                            && !isNaN((+resp.data[responseDataKeys[keyIndex]])))
                            ? parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed(2)
                            : ((
                              resp.data[responseDataKeys[keyIndex]] === null
                              || resp.data[responseDataKeys[keyIndex]] === undefined
                              || resp.data[responseDataKeys[keyIndex]] === 'undefined'
                            ) ? "NA" : resp.data[responseDataKeys[keyIndex]]
                            )}`;
                      }
                      else if (responseDataKeys[keyIndex].toLocaleLowerCase() === ("thermalFitTemp").toLocaleLowerCase()) {
                        // show or Hide output "For Thermal Fitting, Heat Carrier to a Minimum"
                        if (resp.data[responseDataKeys[keyIndex]]) {
                          this.calculatorConfig.form_output[outputIndex].row[rowIndex].show = true;
                          this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed();
                        }
                        else {
                          this.calculatorConfig.form_output[outputIndex].row[rowIndex].show = false;
                        }
                      }
                      else {
                        this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label =
                          `${(resp.data[responseDataKeys[keyIndex]]
                            && resp.data[responseDataKeys[keyIndex]] !== null
                            && resp.data[responseDataKeys[keyIndex]] !== undefined
                            && !isNaN((+resp.data[responseDataKeys[keyIndex]])))
                            ? parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed(3)
                            : ((
                              resp.data[responseDataKeys[keyIndex]] === null
                              || resp.data[responseDataKeys[keyIndex]] === undefined
                              || resp.data[responseDataKeys[keyIndex]] === 'undefined'
                            ) ? "NA" : resp.data[responseDataKeys[keyIndex]])}`;
                      }
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

  // create form group
  createForm() {
    // get form controls nested array
    const leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.arwrPessInForm, this.calculatorConfig.form.left_column.form_layout_row);
    const rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.arwrPessInForm, this.calculatorConfig.form.right_column.form_layout_row);

    // make form control flatten array
    this.flattenedFormControls = [];
    // add calculator toolbar option
    this.flattenedFormControls = [...this.flattenedFormControls, ...this.controlBaseService.flatten(leftFormControls)];
    this.flattenedFormControls = [...this.flattenedFormControls, ...this.controlBaseService.flatten(rightFormControls)];
    // exclude formcontrol which is type of label
    const filteredControls: FormControlModel[] = this.flattenedFormControls.filter(fc => {
      // exclude labels and buttons from formgroup
      if (fc && fc.type !== this.controlType.label && fc.type !== this.controlType.button) {
        return fc;
      }
    });

    this.arwrPessInForm = this.controlBaseService.toFormGroup(filteredControls);
    // get and set validations
    const validations: ValidatorFn[] = [];
    const asyncValidations: AsyncValidatorFn[] = [];
    // get validation key from json config object
    const jsonConfigValidationsArray: string[] = this.calculatorConfig.form.form_validation;

    for (let index = 0; index < jsonConfigValidationsArray.length; index++) {
      const validationFuncKey = jsonConfigValidationsArray[index];
      switch (validationFuncKey) {
        case WrArCalc_PressIn_Validators.SERVICE_STORAGE_TEMPERATURE_MIN:
          validations.push(this.arWrPressInValidationService.serviceStorageTemperatureMinValidation());
          break;
        case WrArCalc_PressIn_Validators.SERVICE_STORAGE_TEMPERATURE_MAX:
          validations.push(this.arWrPressInValidationService.serviceStorageTemperatureMaxValidation());
          break;
        case WrArCalc_PressIn_Validators.STATIONARY_ELEMENT_ID_MAX:
          validations.push(this.arWrCalcService.stationaryElementIDMaxValidation());
          break;
        case WrArCalc_PressIn_Validators.ROTATING_ELEMENT_OD_MAX:
          validations.push(this.arWrCalcService.rotatingElementODMaxValidation());
          break;
        case WrArCalc_PressIn_Validators.STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN:
          validations.push(this.arWrCalcService.stationaryMinLessThanRotatingMinValidation());
          break;
        case WrArCalc_PressIn_Validators.STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX:
          validations.push(this.arWrCalcService.stationaryMaxLessThanRotatingMaxValidation());
          break;
        case WrArCalc_PressIn_Validators.SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN:
          asyncValidations.push(this.arWrCalcService.asyncServiceStorageTemperatureMinValidation());
          break;
        case WrArCalc_PressIn_Validators.SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX:
          asyncValidations.push(this.arWrCalcService.asyncServiceStorageTemperatureMaxValidation());
          break;
      }
    }
    // set custom validations with params
    this.arwrPessInForm.setValidators(validations);
    // set async alidators
    this.arwrPessInForm.setAsyncValidators(asyncValidations);
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

  // reset calculated label or output value in JSOn config
  resetCalculatedLabelValue() {
    this.CalculatedData = {};
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
              this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
            }
          }
        }
      }
    }
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
          if (formControl.sub_type === ControlSubType.calculated_label) {
            // set JSON output label
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
              this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = (outputIndex === 0 ? '' : ``);
            }
          }
        }
      }
    }

    // reset calculated data received after calculation
    this.CalculatedData = null;
  }

  // on reset button handler
  onReset() {
    if (!this.arwrPessInForm) {
      return;
    }
    // get form controls key
    const formControlKeys = Object.keys(this.arwrPessInForm.controls);
    // loop through the reactive form/formgroup controls 
    for (let index = 0; index < formControlKeys.length; index++) {
      const formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
      if (formControlDefaultValue) {
        this.arwrPessInForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
      }
      else {
        this.arwrPessInForm.controls[formControlKeys[index]].setValue('');
      }
    }

    this.resetFormAndCalculation();
  }

  // print button event handler
  onPrint() {
    this.printService.generatePdf("WrArPressIn");
  }

  // component destroy
  ngOnDestroy(): void {
    if (this.arWrDataSubscription) {
      this.arWrDataSubscription.unsubscribe();
    }

    if (this.unitChangeSubscription) {
      this.unitChangeSubscription.unsubscribe();
    }
  }

  // dropdown change event handler of the dynamic form
  dropdownSelectionChange(event: any) {
    this.calculateAndSetInterference();
    this.calculateAndSetClearanceTarget();

    // get and set rotating material change when custom no selected
    if (event.formControl.key === "rotatingMaterial" && event.value.value > 0) {
      this.arWrCalcService.getAndSetMaterialCTE(this.arwrPessInForm, event.formControl.key, "customRotatingMaterial", event.value);
    }

    // get and set stationary material change when custom no selected
    if (event.formControl.key === "stationaryMaterial" && event.value.value > 0) {
      this.arWrCalcService.getAndSetMaterialCTE(this.arwrPessInForm, event.formControl.key, "customStationaryMaterial", event.value);
    }

    // get temperature ranges for the selected Composite Material
    // get and set stationary material change when custom no selected
    if (event.formControl.key === "composite" && event.value.value > 0) {
      this.getSetCompositeMaterialData();
    }

    // when component type eliminate the “AR-1” in the composite list
    if (event.formControl.key === "componentType" && event.value.value > 0) {
      const calculatorForm: TwoColumnFormModel = { ...this.calculatorConfig.form };
      let calculatorLeftColumnRows: FormRowModel[] = [];
      // when component type "Wearing(1)" is selected
      calculatorLeftColumnRows = this.helperService.showOrHideFormControlByControlKey(calculatorForm.left_column.form_layout_row, "composite", 0, true, (event.value.value === 1 ? false : true));
      const updatedCalculatorForm: TwoColumnFormModel = { ...calculatorForm, left_column: { form_layout_row: calculatorLeftColumnRows } };
      // update updatedCalculatorForm object         
      this.calculatorConfig = { ...this.calculatorConfig, form: updatedCalculatorForm };
    }
  }

  // get and set composite material
  private getSetCompositeMaterialData() {
    if (!this.calculatorConfig && !this.calculatorConfig.form) {
      return;
    }
    this.arWrCalcService.getSetCompositeMaterialData(this.calculatorConfig.form, this.arwrPessInForm, "compositeTemperatureRage");
  }

  // numeric input value change event handler of the dynamic form
  numericInputValueChange(event: any) {
    // Interference
    if (event.key.toLowerCase() === ("stationaryElementIDMax").toLowerCase()) {
      this.calculateAndSetInterference();
    }

    // clearanceCLR
    if (event.key.toLowerCase() === ("rotatingElementODMax").toLowerCase()) {
      this.calculateAndSetClearanceTarget();
    }
  }

  // form value changed 
  // formValueChanged() {
  //   // perform calculation again
  //   this.onSubmit();
  // }

  // focus lost on form controls 
  lostFocus(event: any) {
    // perform calculation again
    this.onSubmit();
  }

  // calculate Interference based on the "stationaryElementIDMax"
  private calculateAndSetInterference() {
    // inferference dropdown selected value
    const customInterferenceTargetDDLFC = this.arwrPessInForm.controls["interferenceTarget"];
    // standard interference    
    if (customInterferenceTargetDDLFC && customInterferenceTargetDDLFC.value.value > 0) {
      const customInterferenceTargetFC = this.arwrPessInForm.controls["customInterferenceTarget"];
      this.arWrCalcService.getInterference(this.arwrPessInForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe((x: any) => {
        // standard option selected
        if (x && x.TargetValue && customInterferenceTargetFC && (customInterferenceTargetFC.value != x.TargetValue)) {
          customInterferenceTargetFC.setValue(x.TargetValue.toFixed((this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3)));
        }
      });
    }
  }

  // calculate clearanceCLR based on the "rotatingElementODMax"
  private calculateAndSetClearanceTarget() {
    // clearance dropdown selected value
    const customClearanceTargetDDLFC = this.arwrPessInForm.controls["clearanceTarget"];
    // stabdard clearance
    if (customClearanceTargetDDLFC && customClearanceTargetDDLFC.value.value > 0) {
      const customClearanceTargetFC = this.arwrPessInForm.controls["customClearanceTarget"];
      // standard option selected
      this.arWrCalcService.getClearance(this.arwrPessInForm,
        this.unitButtonService.getCurrentUnitValue,
        this.temperatureButtonService.getCurrentTemperatureValue).subscribe((x: any) => {
          if (x && customClearanceTargetFC && (customClearanceTargetFC.value != x)) {
            customClearanceTargetFC.setValue(x.toFixed((this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3)));
          }
        });
    }
  }
}
