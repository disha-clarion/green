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
import { ControlType, ControlSubType, Units, Temperature, WrArCalc_FloatingIn_Validators, ErrorTypes, CalculatorTypes } from '../../shared/helpers/constants';
import { ControlBaseService } from "../../shared/services/control-base.service";
import { PrintService } from "../../shared/services/print.service";
import { UnitButtonService } from '../../shared/components/unit-button/unit-button.service';
import { TemperatureButtonService } from '../../shared/components/temperature-button/temperature-button.service';
import { ArWrFloatingService } from "./ar-wr-floating.service";
import { ArWrFloatingValidationService } from "./ar-wr-floating-validation.service";
import { SwitchButtonModel } from '../../models/switch-button.model';
import { HelperService } from "../../shared/services/helper.service";
import { WrArMaterial } from '../../models/wrArMaterial.model';
import { TwoColumnFormModel } from '../../models/two_column_form.model';
import { FormRowModel } from '../../models/form-row.model';

@Component({
  selector: 'app-ar-wr-floating',
  templateUrl: './ar-wr-floating.component.html',
  styleUrls: ['./ar-wr-floating.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArWrFloatingComponent implements OnInit, OnDestroy {
  calculatorConfig: CalculatorModel;
  arwrFloatingForm: FormGroup;
  flattenedFormControls: FormControlModel[] = [];
  controlType = ControlType;
  isSubmitted = false;
  payLoad = '';
  clientErrors: ErrorModel[] = [];
  clientWarnings: ErrorModel[] = [];
  serverErrors: ErrorModel[] = [];
  serverWarnings: ErrorModel[] = [];
  notes = [
    `Material selection for the application is subject to media compatibility and design 
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
    private readonly arWrFloatingService: ArWrFloatingService,
    private readonly arWrFloatingValidationService: ArWrFloatingValidationService,
  ) {
    // o-ring calculator config subscription
    this.arWrDataSubscription = this.arWrCalcService.arWrConfig$.subscribe((x: BaseModel) => {
      if (x) {
        // calculator - Wr/Ar Floating
        this.calculatorConfig = x.calculators[1];
        // send calculator to dynamic form service
        this.dynamicFormTwoColumnLayoutService.sendCalculator(x.calculators[1]);
        // create form
        this.createForm();
      }
    });

    // unit change
    this.onUnitChange();
  }

  // form control changes subcription and update the graph data
  getControlValue(fieldName: string) {
    if (this.arwrFloatingForm && this.arwrFloatingForm.controls[fieldName]) {
      return this.arwrFloatingForm.controls[fieldName].value;
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
        const selectedCustomRotatingMaterialControl = this.arwrFloatingForm?.controls["customRotatingMaterial"];
        const selectedCustomStationaryMaterialControl = this.arwrFloatingForm?.controls["customStationaryMaterial"];

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
          (this.calculatorConfig
            && (this.calculatorConfig.form ? this.calculatorConfig.form : null)),
          this.arwrFloatingForm, x);

        // rotating material dropdown selected and not custom selected
        const selectedRotatingMaterialControl = this.arwrFloatingForm?.controls["rotatingMaterial"];
        const selectedStationaryMaterialControl = this.arwrFloatingForm?.controls["stationaryMaterial"];

        // rotating material dropdown selected and not custom selected
        // convert 10 power -6 to XX.XX
        if (selectedRotatingMaterialControl
          && selectedRotatingMaterialControl.value
          && selectedRotatingMaterialControl.value.value > 0) {
          this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm,
            "rotatingMaterial",
            "customRotatingMaterial",
            selectedRotatingMaterialControl.value);
        }

        // stationary material dropdown selected and not custom selected
        // convert 10 power -6 to XX.XX
        if (selectedStationaryMaterialControl
          && selectedStationaryMaterialControl.value
          && selectedStationaryMaterialControl.value.value > 0) {
          this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm,
            "stationaryMaterial", "customStationaryMaterial", selectedStationaryMaterialControl.value);
        }

        if (this.calculatorConfig && this.calculatorConfig.form) {
          // reset the temperature range label value
          this.helperService.resetLabel(this.calculatorConfig.form.left_column.form_layout_row, "compositeTemperatureRage");
          this.getSetCompositeMaterialData(); // set the temperature range again
        }

        if (convertedForm) {
          this.arwrFloatingForm = convertedForm;
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

    if (currentUnit && currentUnit.id > 0
      && currentUnit.id === Units.MILLI_METER
      && currentTemp && currentTemp.id > 0
      && currentTemp.id !== Temperature.CELCIUS) {
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

    if (!this.arwrFloatingForm || !this.arwrFloatingForm.value) {
      return;
    }

    this.payLoad = this.arwrFloatingForm.value;

    // client errors that doesnot prevent to submit forms/calculation
    // glandWidth validation
    if (this.calculatorConfig.form.form_validation.includes(WrArCalc_FloatingIn_Validators.CLEARANCE_VALIDATION)) {
      const clearanceBasedOnPumpAndComponentTypeError = this.arWrFloatingValidationService.clearanceValidationBasedOnPumpAndComponentType(this.arwrFloatingForm);
      if (clearanceBasedOnPumpAndComponentTypeError) {
        this.addClientErrors(clearanceBasedOnPumpAndComponentTypeError);
      }
    }

    // stop here if form is invalid/Not_valid
    if (!this.arwrFloatingForm || this.arwrFloatingForm.invalid) {
      return;
    }

    // perform calculation
    this.arWrFloatingService.floatingCalculation(this.arwrFloatingForm,
      this.unitButtonService.getCurrentUnitValue,
      this.temperatureButtonService.getCurrentTemperatureValue).subscribe(
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
            for (let outputIndex = 0;
              outputIndex < this.calculatorConfig.form_output.length;
              outputIndex++) {
              // loop through rows
              for (let rowIndex = 0;
                rowIndex < this.calculatorConfig.form_output[outputIndex].row.length;
                rowIndex++) {
                // loop through columns
                for (let columnIndex = 0;
                  columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length;
                  columnIndex++) {
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
                        // output values validation
                        // Check cross section thickness validation
                        const outMachineCompositeODInch = resp.data['machineCompositeODInch'];
                        const outFinishMachineCompositeIDAfterInstallationInch = resp.data['finishMachineCompositeIDAfterInstallationInch'];
                        let crosssectionThickness = 0.236;
                        if (this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER) {
                          crosssectionThickness = 0.6;
                        }
                        if (!((outMachineCompositeODInch - outFinishMachineCompositeIDAfterInstallationInch) > crosssectionThickness)) {
                          const crossSectionThicknessError = new ErrorModel();
                          crossSectionThicknessError.field = '';
                          crossSectionThicknessError.type = ErrorTypes.Error;
                          crossSectionThicknessError.detail = "Check cross section thickness.";
                          this.addClientErrors(crossSectionThicknessError);
                        }

                        // set JSON output label
                        // bind calculated result to output label                        
                        this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = `${(resp.data[responseDataKeys[keyIndex]]
                          && resp.data[responseDataKeys[keyIndex]] !== null
                          && resp.data[responseDataKeys[keyIndex]] !== undefined
                          && !isNaN((+resp.data[responseDataKeys[keyIndex]])))
                          ? parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed((this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3))
                          : ((resp.data[responseDataKeys[keyIndex]] === null || resp.data[responseDataKeys[keyIndex]] === undefined || resp.data[responseDataKeys[keyIndex]] === "") ? "NA" : resp.data[responseDataKeys[keyIndex]])}`;
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
    const leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.arwrFloatingForm, this.calculatorConfig.form.left_column.form_layout_row);
    const rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.arwrFloatingForm, this.calculatorConfig.form.right_column.form_layout_row);

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

    this.arwrFloatingForm = this.controlBaseService.toFormGroup(filteredControls);
    // get and set validations
    const validations: ValidatorFn[] = [];
    const asyncValidations: AsyncValidatorFn[] = [];
    // get validation key from json config object
    const jsonConfigValidationsArray: string[] = this.calculatorConfig.form.form_validation;

    for (let index = 0; index < jsonConfigValidationsArray.length; index++) {
      const validationFuncKey = jsonConfigValidationsArray[index];
      switch (validationFuncKey) {
        case WrArCalc_FloatingIn_Validators.SERVICE_STORAGE_TEMPERATURE_MIN:
          validations.push(this.arWrFloatingValidationService.serviceStorageTemperatureMinValidation());
          break;
        case WrArCalc_FloatingIn_Validators.SERVICE_STORAGE_TEMPERATURE_MAX:
          validations.push(this.arWrFloatingValidationService.serviceStorageTemperatureMaxValidation());
          break;
        case WrArCalc_FloatingIn_Validators.STATIONARY_ELEMENT_ID_MAX:
          validations.push(this.arWrCalcService.stationaryElementIDMaxValidation());
          break;
        case WrArCalc_FloatingIn_Validators.ROTATING_ELEMENT_OD_MAX:
          validations.push(this.arWrCalcService.rotatingElementODMaxValidation());
          break;
        case WrArCalc_FloatingIn_Validators.STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN:
          validations.push(this.arWrCalcService.stationaryMinLessThanRotatingMinValidation());
          break;
        case WrArCalc_FloatingIn_Validators.STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX:
          validations.push(this.arWrCalcService.stationaryMaxLessThanRotatingMaxValidation());
          break;
        case WrArCalc_FloatingIn_Validators.SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN:
          asyncValidations.push(this.arWrCalcService.asyncServiceStorageTemperatureMinValidation());
          break;
        case WrArCalc_FloatingIn_Validators.SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX:
          asyncValidations.push(this.arWrCalcService.asyncServiceStorageTemperatureMaxValidation());
          break;
      }
    }
    // set custom validations with params
    this.arwrFloatingForm.setValidators(validations);
    // set async alidators
    this.arwrFloatingForm.setAsyncValidators(asyncValidations);
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
      for (let columnIndex = 0;
        columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length;
        columnIndex++) {
        // loop through controls
        for (let controlIndex = 0;
          controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length;
          controlIndex++) {
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
      for (let columnIndex = 0;
        columnIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length;
        columnIndex++) {
        // loop through controls
        for (let controlIndex = 0;
          controlIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length;
          controlIndex++) {
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
      for (let rowIndex = 0;
        rowIndex < this.calculatorConfig.form_output[outputIndex].row.length;
        rowIndex++) {
        // loop through columns
        for (let columnIndex = 0;
          columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length;
          columnIndex++) {
          // loop through controls
          for (let controlIndex = 0;
            controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length;
            controlIndex++) {
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
    this.clientErrors = [];
    this.clientWarnings = [];
    this.serverErrors = [];
    this.serverWarnings = [];

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
              this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = ``;
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
    if (!this.arwrFloatingForm) {
      return;
    }

    // get form controls key
    const formControlKeys = Object.keys(this.arwrFloatingForm.controls);
    // loop through the reactive form/formgroup controls 
    for (let index = 0; index < formControlKeys.length; index++) {
      const formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
      if (formControlDefaultValue) {
        this.arwrFloatingForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
      }
      else {
        this.arwrFloatingForm.controls[formControlKeys[index]].setValue('');
      }
    }

    this.resetFormAndCalculation();
  }

  // print button event handler
  onPrint() {
    this.printService.generatePdf("WrArFloating");
  }

  // dropdown change event handler of the dynamic form
  dropdownSelectionChange(event: any) {
    // clearance dropdown selected value
    this.calculateAndSetClearanceTarget();

    // get and set rotating material change when custom no selected
    if (event.formControl.key === "rotatingMaterial" && event.value.value > 0) {
      this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm, event.formControl.key, "customRotatingMaterial", event.value);
    }

    // get and set stationary material change when custom no selected
    if (event.formControl.key === "stationaryMaterial" && event.value.value > 0) {
      this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm, event.formControl.key, "customStationaryMaterial", event.value);
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
    this.arWrCalcService.getSetCompositeMaterialData(this.calculatorConfig.form, this.arwrFloatingForm, "compositeTemperatureRage");
  }

  // numeric input value change event handler of the dynamic form
  numericInputValueChange(event: any) {
    if (event.key.toLowerCase() === ("rotatingElementODMax").toLowerCase()) {
      this.calculateAndSetClearanceTarget();
    }
  }

  // form value changed 
  // // formValueChanged() {
  // //   // perform calculation again
  // //   this.onSubmit();
  // // }

  // focus lost on form controls 
  lostFocus(event: any) {
    // perform calculation again
    this.onSubmit();
  }

  // calculate clearanceCLR based on the "rotatingElementODMax"
  private calculateAndSetClearanceTarget() {
    // clearance dropdown selected value
    const customClearanceTargetDDLFC = this.arwrFloatingForm.controls["clearanceTarget"];
    // stabdard clearance
    if (customClearanceTargetDDLFC && customClearanceTargetDDLFC.value.value > 0) {
      const customClearanceTargetFC = this.arwrFloatingForm.controls["customClearanceTarget"];
      // standard option selected
      this.arWrCalcService.getClearance(this.arwrFloatingForm,
        this.unitButtonService.getCurrentUnitValue,
        this.temperatureButtonService.getCurrentTemperatureValue,
        CalculatorTypes.WrArFloating).subscribe((x: any) => {
          if (x && customClearanceTargetFC && (customClearanceTargetFC.value != x)) {
            customClearanceTargetFC.setValue(x.toFixed((this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3)));
          }
        });
    }
  }

  // component destroy
  ngOnDestroy(): void {
    if (this.arWrDataSubscription) {
      this.arWrDataSubscription.unsubscribe();
    }
  }
}
