// core imports
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

// third party imports
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

// application imports
import { SwitchButtonModel } from "../../models/switch-button.model";
import {
  Units, Temperature, TemperatureCelsiusCode,
  TemperatureFahrenheitCode, UnitsDecimalPlaces,
  CalculatorTypes, calculatedDataKeys,
  ControlSubType, Measures
} from "../../shared/helpers/constants";
import { ErrorModel } from '../../models/error.model';
import { ViewErrorModel } from '../../models/view-error.model';
import { FormControlModel } from '../../models/form-control.model';
import { MaterialChoiceModel } from '../../models/material-choice.model';
import { MaterialChoiceService } from "./material-choice.service";
import { TwoColumnFormModel } from '../../models/two_column_form.model';
import { FormRowModel } from '../../models/form-row.model';
import { IBottomRadiiWarningRanges } from '../../models/Ibottom-radii-warning-ranges';
import { UnitButtonService } from "../components/unit-button/unit-button.service";
import { TemperatureButtonService } from "../components/temperature-button/temperature-button.service";
import { FormColumnModel } from '../../models/form-column.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private readonly modalService: NgbModal,
    private readonly materialChoiceService: MaterialChoiceService,
    private readonly temperatureButtonService: TemperatureButtonService,
    private readonly unitButtonService: UnitButtonService
  ) { }

  getUnits() {
    return [
      new SwitchButtonModel({
        id: Units.INCH,
        title: Units[Units[0]],
        display_title: "Inch",
        display_Short_title: "in",
        isActive: true
      }),
      new SwitchButtonModel({
        id: Units.MILLI_METER,
        title: Units[Units[1]],
        display_title: "Millimeter",
        display_Short_title: "mm", isActive: false
      })
    ];
  }

  getTemperature() {
    return [
      new SwitchButtonModel({
        id: Temperature.CELCIUS,
        title: Temperature[Temperature.CELCIUS],
        display_title: "Celsius",
        display_Short_title: TemperatureCelsiusCode.HTML_CODE,
        isActive: true
      }),
      new SwitchButtonModel({
        id: Temperature.FAHRENHEIT,
        title: Temperature[Temperature.FAHRENHEIT],
        display_title: "Fahrenheit",
        display_Short_title: TemperatureFahrenheitCode.HTML_CODE,
        isActive: false
      })
    ];
  }

  getMeasures() {
    return [
      new SwitchButtonModel({
        id: Measures.Imperial,
        title: Measures[Measures[0]],
        display_title: "Imperial",
        display_Short_title: "in",
        isActive: true
      }),
      new SwitchButtonModel({
        id: Measures.Metric,
        title: Measures[Measures[1]],
        display_title: "Metric",
        display_Short_title: "mm",
        isActive: false
      })
    ];
  }

  // set default measure/unit for WrAr
  setDefaultMeasure(): SwitchButtonModel {
    // get measures 
    const measures = this.getMeasures();
    this.unitButtonService.sendUnitValue(measures[0]);
    return measures[0];
  }

  convertToInch(val: number, decimalPoint?: number) {
    if (!val && val !== 0) {
      return;
    }
    // 0.0393701 => 0.03936996
    return (val * 0.03936996).toFixed(decimalPoint || UnitsDecimalPlaces.INCH);
  }

  convertToMillimeter(val: number, decimalPoint?: number) {
    if (!val && val !== 0) {
      return;
    }
    return (val * 25.4).toFixed(decimalPoint || UnitsDecimalPlaces.MILLI_METER);
  }

  convertFahrenheitToCelcius(inputTempInFahrenheit: string) {
    return (+((parseFloat(inputTempInFahrenheit) - 32) * 5 / 9).toFixed(3));
  }

  /* This function convert temperature in Celsius to Fahrenheit*/
  convertCelciusToFahrenheit(inputTempInCelsius: string) {
    return (+((parseFloat(inputTempInCelsius) * 9 / 5) + 32).toFixed(3));
  }

  // modal open helper
  openNgbModal(component: any) {
    const options: NgbModalOptions = {};
    //     If true, the backdrop element will be created for a given modal.
    // Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.
    options.backdrop = 'static';
    // If true, the modal will be closed when Escape key is pressed
    options.keyboard = false;
    return this.modalService.open(component, options);
  }

  // group the client error in the respective field or if field already added then check title and error message
  // if field already added then title and similiar error message already exist then do not add error message again
  // if field already added then title exist and similiar error message not already exist then add error message in same title
  // else push new error
  // it will reduce the duplicacy of error messages
  groupClientErrors(errors: ErrorModel[]): Promise<ViewErrorModel[]> {
    return new Promise((resolve, reject) => {
      let groupedErrors: ViewErrorModel[] = [];
      // loop on client error
      for (let index = 0; index < errors.length; index++) {
        const clientError = errors[index];

        // findIndex of field which already added in grouped errors with field key
        const fieldErrorIndex = groupedErrors.findIndex((e) => {
          return e.field === clientError.field;
        });

        // get index of title in grouped all client errors
        const titleErrorIndex = groupedErrors.findIndex((e) => {
          return e.title === clientError.title;
        });

        // if error doesnot have any titlle then need to show generic message
        // prevent to display multiple generic errors
        if (!clientError.title) {
          // findIndex empty title error in the grouped client error
          const alreadyAddedGenericErrorMessageIndex = groupedErrors.findIndex((gError: ViewErrorModel) => {
            const similarErrorDetailIndex = gError.errors.findIndex((errorMsg: string) => {
              if (errorMsg === clientError.detail) {
                return errorMsg;
              }
            });

            if (!gError.title && similarErrorDetailIndex > -1) {
              return gError;
            }
          });

          // if not already added client error message then add it
          if (!(alreadyAddedGenericErrorMessageIndex > -1)) {
            this.addErrorToGroupedArray(groupedErrors, clientError);
          }
        }
        else if (clientError.title && titleErrorIndex > -1) {
          // condition to show the generic message with grouped by title
          // title of error already there in grouped error and already have the specific error detail or error mesage is ther then do not add it again
          // findIndex already added client error message
          const alreadyAddedGenericWarningMessageIndex = groupedErrors[titleErrorIndex].errors.findIndex((errorMsg: string) => {
            if (errorMsg === clientError.detail) {
              return errorMsg;
            }
          });

          // if not already added client error message then add it
          if (!(alreadyAddedGenericWarningMessageIndex > -1)) {
            // add client error messages which have title
            // and field already exist in the grouped client errors
            groupedErrors[fieldErrorIndex].errors.push(clientError.detail);
          }
        }
        else if (fieldErrorIndex && fieldErrorIndex > -1 && clientError.title) {
          // add client error messages which have title
          // and field already exist in the grouped client errors
          groupedErrors[fieldErrorIndex].errors.push(clientError.detail);
        }
        else {
          // add field error
          this.addErrorToGroupedArray(groupedErrors, clientError);
        }
      }
      return resolve(groupedErrors);
    });
  }

  // add error to grouped client error array
  private addErrorToGroupedArray(groupedErrors: ViewErrorModel[], clientError: ErrorModel) {
    const viewError = new ViewErrorModel({
      field: clientError.field,
      title: clientError.title,
      isDetailOpened: clientError.isDetailOpened,
      type: clientError.type,
      errors: [clientError.detail]
    });
    groupedErrors.push(viewError);
  }

  setFormValidationErrorToControl(control: FormGroup, field: string, error: ErrorModel) {
    if (error && !control.controls[error.field].errors) {
      // set error to form control
      control.controls[error.field].setErrors(error);
    }
    else {
      const fc = control.controls[field];
      if (fc) {
        // set error to form control
        control.controls[field].setErrors(error);
      }
    }
  }

  // set form control errors
  setValidationErrorToFormControl(control: AbstractControl, error: ErrorModel, errorKey?: string) {
    // form control and form control has already setted error
    if (control && control.errors) {
      const errorKeys = Object.keys(control.errors);

      const alreadyControlHaveErrorByKeyIndex = errorKeys.findIndex(eKey => {
        if (eKey === errorKey) {
          return eKey;
        }
      });

      if (alreadyControlHaveErrorByKeyIndex > -1 && !error) {
        // formcontrol have error and error is null then delete error from control
        delete control.errors[errorKeys[alreadyControlHaveErrorByKeyIndex]];
        if (!(Object.keys(control.errors).length > 0)) {
          control.setErrors(null);
        }
      }
      else if (alreadyControlHaveErrorByKeyIndex > -1 && error) {
        // formcontrol have error and error is null then delete error from control
        delete control.errors[errorKeys[alreadyControlHaveErrorByKeyIndex]];
        control.errors[errorKey] = error;
      }
      else if (!(alreadyControlHaveErrorByKeyIndex > -1) && error) { // formcontrol not have error and error has value
        // not already error added to control then add
        control.errors[errorKey] = error;
      }
      // else {
      //   control.setErrors(null);
      // }
    }
    else {
      if (errorKey && error) {
        // set error to form control
        const e = {};
        e[errorKey] = error;
        control.setErrors(e);
      }
      else {
        control.setErrors(null);
      }
    }
  }

  maxOringIdValue(unit: SwitchButtonModel): number {
    if (unit) {
      if (unit && unit.id === Units.MILLI_METER) {
        // millimeter
        return 914.4;
      }
      else {
        // Inch
        return 36;
      }
    }
  }

  bottomRadiiMinLimit(unit: SwitchButtonModel): number {
    if (unit) {
      if (unit.id === Units.MILLI_METER) {
        // millimeter
        return 0.005 * 25.40;
      }
      else {
        // Inch
        return 0.005;
      }
    }
  }

  bottomRadiiMaxLimit(unit: SwitchButtonModel): number {
    if (unit) {
      if (unit.id === Units.MILLI_METER) {
        // millimeter
        return 0.89;
      }
      else {
        // Inch
        return 0.035;
      }
    }
  }

  // get material choice
  getMaterialChoiceList(formControlKey: string): FormControlModel[] {
    // convert an array object to formControl Array
    let calculatorTypeDDl: FormControlModel[] = [];
    const materialChoices: MaterialChoiceModel[] = this.materialChoiceService.getCurrentMaterialChoiceList();
    if (materialChoices && materialChoices.length > 0) {
      for (let index = 0; index < materialChoices.length; index++) {
        const fc: FormControlModel = new FormControlModel({ key: formControlKey, label: materialChoices[index].mname, value: materialChoices[index] });
        calculatorTypeDDl.push(fc);
      }
    }
    return calculatorTypeDDl
  }

  // create and return dropdown items
  getDropdownItems(formControlKey: string, ddlItems: FormControlModel[]): FormControlModel[] {
    // convert an array object to formControl Array
    let calculatorTypeDDl: FormControlModel[] = [];
    if (ddlItems && ddlItems.length > 0) {
      for (let index = 0; index < ddlItems.length; index++) {
        const fc: FormControlModel = new FormControlModel({ key: formControlKey, label: ddlItems[index].label, value: ddlItems[index], show: ddlItems[index].show });
        calculatorTypeDDl.push(fc);
      }
    }
    return calculatorTypeDDl
  }

  // get calculated local stored data
  getCalculatedStoredData(calculatorId: Number): any {
    let calculatedData: any = null;
    switch (calculatorId) {
      case CalculatorTypes.ORingInternalVacuumOnly:
        calculatedData = JSON.parse(localStorage.getItem(calculatedDataKeys.RECTANGULAR_GLAND_INTERNAL));
        break;
      case CalculatorTypes.ORingRectangularGlandExternalVacuumOnly:
        calculatedData = JSON.parse(localStorage.getItem(calculatedDataKeys.RECTANGULAR_GLAND_EXTERNAL));
        break;
      case CalculatorTypes.ORingDovetailGlandVacuumOnly:
        calculatedData = JSON.parse(localStorage.getItem(calculatedDataKeys.DOVETAIL_GLAND));
        break;
      case CalculatorTypes.ORingHalfDovetailGlandInternalVacuumOnly:
        calculatedData = JSON.parse(localStorage.getItem(calculatedDataKeys.HALF_DOVETAIL_GLAND));
        break;
      default:
        break;
    }
    return calculatedData;
  }

  // check calculated data exist in local storage 
  isCalculatedDataExist(calculatorId: Number): Boolean {
    if (!calculatorId) {
      return false;
    }

    let calculatedData: any = null;
    switch (calculatorId) {
      case CalculatorTypes.ORingInternalVacuumOnly:
        calculatedData = JSON.parse(localStorage.getItem(calculatedDataKeys.RECTANGULAR_GLAND_INTERNAL));
        break;
      case CalculatorTypes.ORingRectangularGlandExternalVacuumOnly:
        calculatedData = JSON.parse(localStorage.getItem(calculatedDataKeys.RECTANGULAR_GLAND_EXTERNAL));
        break;
      case CalculatorTypes.ORingDovetailGlandVacuumOnly:
      case CalculatorTypes.ORingHalfDovetailGlandInternalVacuumOnly:
        calculatedData = JSON.parse(localStorage.getItem(calculatedDataKeys.DOVETAIL_GLAND));
        break;
      default:
        break;
    }
    if (calculatedData) {
      return true;
    }
    else {
      return false;
    }
  }


  // convert form unit controls
  convertFormUnitControlValuesAndSet(calculatorForm: TwoColumnFormModel, form: FormGroup, selectedUnit: SwitchButtonModel): FormGroup {
    if (!calculatorForm && !form) {
      return;
    }

    // set unit of left column
    const calculatorLeftColumnRows = this.setConvertedUnitValueToForm(form, calculatorForm.left_column.form_layout_row, selectedUnit);
    // set unit of right column
    const calculatorRightColumnRows = this.setConvertedUnitValueToForm(form, calculatorForm.right_column.form_layout_row, selectedUnit);
    return form;
  }

  // convert form unit controls values
  private setConvertedUnitValueToForm(form: FormGroup, rows: FormRowModel[], selectedUnit: SwitchButtonModel) {
    // iterate over left column rows
    for (let row = 0; row < rows.length; row++) {
      // iterate over left column columns
      for (let column = 0; column < rows[row].form_layout_columns.length; column++) {
        // iterate over column controls
        for (let control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
          // check form control key exist 
          const formControlKeys = Object.keys(form.controls);
          const formKeyIndex = formControlKeys.findIndex((key) => {
            return (key === rows[row].form_layout_columns[column].form_controls[control].key);
          });

          // check control sub-type is unit and convert and set the form control value
          if (formKeyIndex > -1 && rows[row].form_layout_columns[column].form_controls[control].sub_type === ControlSubType.unit) {
            const decimalPoint: number = rows[row].form_layout_columns[column].form_controls[control].decimal_point;
            if (Units.INCH === +(selectedUnit.id)) {
              form.controls[formControlKeys[formKeyIndex]].setValue(this.convertToInch(form.controls[formControlKeys[formKeyIndex]].value, decimalPoint));
            }
            else if (Units.MILLI_METER === +(selectedUnit.id)) {
              form.controls[formControlKeys[formKeyIndex]].setValue(this.convertToMillimeter(form.controls[formControlKeys[formKeyIndex]].value, decimalPoint));
            }
            else {
              form.controls[formControlKeys[formKeyIndex]].setValue(this.convertToInch(form.controls[formControlKeys[formKeyIndex]].value, decimalPoint));
            }
          }
        }
      }
    }
    return rows;
  }

  getBottomRadiiRange(glandDepthNominalControlValue: any): IBottomRadiiWarningRanges {
    let ranges: IBottomRadiiWarningRanges = {
      bottomRadiiWarningMinRange1: (3 / 100) * parseFloat(glandDepthNominalControlValue),
      bottomRadiiWarningMaxRange1: (17 / 100) * parseFloat(glandDepthNominalControlValue),
      bottomRadiiWarningMinRange2: (32 / 100) * parseFloat(glandDepthNominalControlValue),
      bottomRadiiWarningMaxRange2: (33 / 100) * parseFloat(glandDepthNominalControlValue)
    };
    return ranges;
  }

  setAndSendTemperatureManually(temperatureId: number) {
    if (temperatureId === Temperature.FAHRENHEIT) {
      const fahrenheitObj = { id: Temperature.FAHRENHEIT, title: Temperature[Temperature.FAHRENHEIT], display_title: TemperatureFahrenheitCode.HTML_CODE, display_Short_title: TemperatureFahrenheitCode.HTML_CODE, isActive: true, actionType: 0 };
      this.temperatureButtonService.sendTemperatureValue(fahrenheitObj);
    }

    if (temperatureId === Temperature.CELCIUS) {
      const celciusObj = { id: Temperature.CELCIUS, title: Temperature[Temperature.CELCIUS], display_title: TemperatureCelsiusCode.HTML_CODE, display_Short_title: TemperatureCelsiusCode.HTML_CODE, isActive: true, actionType: 0 };
      this.temperatureButtonService.sendTemperatureValue(celciusObj);
    }
  }

  // convert to 10 power -6 to X.XXXXXX
  formatToTenPowerSix(val: number): number {
    return val ? ((val) / 1000000) : 0.000;
  }

  // convert from 10 power -6 to XX.XX or XX.X or X.X
  convertFromNegetivePowerOfSix(value: number) {
    return (value * 1000000);
  }


  // clear the calculator control label value by control key
  resetLabel(rows: FormRowModel[], controlKey: string) {
    // iterate over left column rows
    for (let row = 0; row < rows.length; row++) {
      // iterate over left column columns
      for (let column = 0; column < rows[row].form_layout_columns.length; column++) {
        // iterate over column controls
        for (let control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
          if (rows[row].form_layout_columns[column].form_controls[control].key === controlKey) {
            rows[row].form_layout_columns[column].form_controls[control].label = '';
          }
        }
      }
    }
    return rows;
  }

  // show or hide the calculator control by control key
  // isOptionControl => true when form control is of type dropdown or radio 
  showOrHideFormControlByControlKey(rows: FormRowModel[], controlKey: string, optionIndex: number = -1, isOptionControl: boolean = false, isShow = false) {
    // iterate over left column rows
    for (let row = 0; row < rows.length; row++) {
      // iterate over left column columns
      for (let column = 0; column < rows[row].form_layout_columns.length; column++) {
        // iterate over column controls
        for (let control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
          if (rows[row].form_layout_columns[column].form_controls[control].key === controlKey) {
            if (isOptionControl && optionIndex >= 0) {
              rows[row].form_layout_columns[column].form_controls[control].options[optionIndex].show = isShow;
            }
            else {
              rows[row].form_layout_columns[column].form_controls[control].show = isShow;
            }
          }
        }
      }
    }
    return rows;
  }

  // row controls map
  mapFormControlsOnCreateForm(formGroup: FormGroup, formRows: FormRowModel[]) {
    const mappedFormControls = formRows.map(row =>
      row.form_layout_columns.map((column: FormColumnModel) => {
        let formControls: FormControlModel[] = [];
        for (let index = 0; index < column.form_controls.length; index++) {
          // get existing inputted values of form 
          if (formGroup) {
            const fc = formGroup.get(column.form_controls[index].key);
            if (fc) {
              column.form_controls[index].value = fc.value;
            }
          }
          // create reactive form of only those control which are show = true
          if (column.form_controls[index].show) {
            formControls.push(column.form_controls[index]);
          }
        }
        return formControls;
      }));
    return mappedFormControls;
  }
}
