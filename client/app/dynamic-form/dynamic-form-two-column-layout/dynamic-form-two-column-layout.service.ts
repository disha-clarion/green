// core imports
import { Injectable } from '@angular/core';
// third party imports
import { BehaviorSubject } from 'rxjs';
// application imports
import { CalculatorModel } from '../../models/calculator.model';
import { FormOutputModel } from '../../models/form-output.model';
import { FormRowModel } from '../../models/form-row.model';
import { SwitchButtonModel } from '../../models/switch-button.model';
import { TwoColumnFormModel } from '../../models/two_column_form.model';
import { Units, ControlSubType, Temperature } from '../../shared/helpers/constants';
import { HelperService } from "../../shared/services/helper.service";
import { FormControlModel } from '../../models/form-control.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormTwoColumnLayoutService {
  private readonly calculatorSubject: BehaviorSubject<CalculatorModel> = new BehaviorSubject<CalculatorModel>(null);
  readonly calculator$ = this.calculatorSubject.asObservable();

  constructor(private helperService: HelperService) { }

  private get calculator(): CalculatorModel {
    return this.calculatorSubject.getValue();
  }

  private set calculator(val: CalculatorModel) {
    this.calculatorSubject.next(val);
  }

  public get getCurrentValue() {
    return this.calculator;
  }

  public sendCalculator(val: CalculatorModel) {
    this.calculator = { ...val };
  }

  // show or hide controls based on options => Nominal, Tolerance and MinAndMax
  showOrHideControlsBasedOnOption(selectedOption: number) {
    // copy calculator data
    let updateCalculator: CalculatorModel = { ...this.calculator };
    // update selected option value
    updateCalculator.toolbarOption.value = selectedOption.toString();
    // copy calculator form data
    const calculatorForm: TwoColumnFormModel = { ...this.calculator.form };
    // set show flag of left column
    const calculatorLeftColumnRows = this.setShowFlag(calculatorForm.left_column.form_layout_row, selectedOption);
    // set show flag of right column
    const calculatorRightColumnRows = this.setShowFlag(calculatorForm.right_column.form_layout_row, selectedOption);
    // update updatedCalculatorForm object
    const updatedCalculatorForm: TwoColumnFormModel = { ...calculatorForm, left_column: { form_layout_row: calculatorLeftColumnRows }, right_column: { form_layout_row: calculatorRightColumnRows } };
    // form output 
    let formOutput: FormOutputModel[] = updateCalculator.form_output;
    if (formOutput.length > 0) {
      for (let index = 0; index < formOutput.length; index++) {
        // copy form output object
        let formOutputObj: FormOutputModel = { ...formOutput[index] };
        // set show flag
        const formOutputObjRow: FormRowModel[] = this.setShowFlag(formOutputObj.row, selectedOption);
        // merge row of form output
        formOutputObj = { ...formOutputObj, row: formOutputObjRow };
        // update form output with updated show flag
        formOutput[index] = formOutputObj;
      }
    }
    // updated copied calculator object
    updateCalculator = { ...updateCalculator, form: updatedCalculatorForm, form_output: formOutput };
    this.calculator = { ...this.calculator, ...updateCalculator };
  }

  // update input controls units
  updateUnitOfInputControlLabels(selectedUnit: SwitchButtonModel) {
    // Immutable way of updating the object
    let updateCalculator: CalculatorModel = { ...this.calculator };
    // copy calculator form data
    const calculatorForm: TwoColumnFormModel = { ...this.calculator.form };

    // set unit of left column labels of input form
    const calculatorLeftColumnRows = this.setUnit(calculatorForm.left_column.form_layout_row, selectedUnit);

    // set unit of right column labels of input form
    const calculatorRightColumnRows = this.setUnit(calculatorForm.right_column.form_layout_row, selectedUnit);

    // set unit of calculated output
    for (let index = 0; index < updateCalculator.form_output.length; index++) {
      updateCalculator.form_output[index].row = this.setUnit(updateCalculator.form_output[index].row, selectedUnit);
    }

    // set pressure unit of the calculated output of pressure type output

    // calculator form object
    const updatedCalculatorForm: TwoColumnFormModel = { ...calculatorForm, left_column: { form_layout_row: calculatorLeftColumnRows }, right_column: { form_layout_row: calculatorRightColumnRows } };
    updateCalculator = { ...updateCalculator, form: updatedCalculatorForm };
    this.calculator = { ...updateCalculator };
  }

  // update temperature of label of temperature controls
  updateTemperatureOfInputControlLabels(selectedTemperature: SwitchButtonModel) {
    let updateCalculator: CalculatorModel = { ...this.calculator };
    // copy calculator form data
    const calculatorForm: TwoColumnFormModel = { ...this.calculator.form };
    // set show flag of left column
    const calculatorLeftColumnRows = this.setTemperature(calculatorForm.left_column.form_layout_row, selectedTemperature);
    // set show flag of right column
    const calculatorRightColumnRows = this.setTemperature(calculatorForm.right_column.form_layout_row, selectedTemperature);
    // set unit of calculated output unit label update
    for (let index = 0; index < updateCalculator.form_output.length; index++) {
      updateCalculator.form_output[index].row = this.setTemperature(updateCalculator.form_output[index].row, selectedTemperature);
    }
    // calculator form object
    const updatedCalculatorForm: TwoColumnFormModel = { ...calculatorForm, left_column: { form_layout_row: calculatorLeftColumnRows }, right_column: { form_layout_row: calculatorRightColumnRows } };
    updateCalculator = { ...updateCalculator, form: updatedCalculatorForm };
    this.calculator = { ...this.calculator, ...updateCalculator };
  }

  // form output label value from Inch to Millimeter and vice versa 
  convertOutputLabel(selectedUnit: SwitchButtonModel) {
    // copy calculator data
    let updateCalculator: CalculatorModel = { ...this.calculator };

    // Convert left form data
    // loop through each form left column row
    for (let rowIndex = 0; rowIndex < updateCalculator.form.left_column.form_layout_row.length; rowIndex++) {
      // loop through columns
      for (let columnIndex = 0; columnIndex < updateCalculator.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
        // loop through controls
        for (let controlIndex = 0; controlIndex < updateCalculator.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
          // get form control of JSON
          const formControl = updateCalculator.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
          // get fields key from resp data
          if (formControl.sub_type === ControlSubType.calculated_label && formControl.label) {
            // set JSON output label
            // bind calculated result to output label
            updateCalculator.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = (selectedUnit.id === Units.MILLI_METER ? this.helperService.convertToMillimeter((+formControl.label)) : this.helperService.convertToInch((+formControl.label)));
          }
        }
      }
    }

    // Comvert right form data
    // loop through each form right column row
    for (let rowIndex = 0; rowIndex < updateCalculator.form.right_column.form_layout_row.length; rowIndex++) {
      // loop through columns
      for (let columnIndex = 0; columnIndex < updateCalculator.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
        // loop through controls
        for (let controlIndex = 0; controlIndex < updateCalculator.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
          // get form control of JSON
          const formControl = updateCalculator.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
          // get fields key from resp data
          // const responseDataKeys = Object.keys(resp.data);
          if (formControl.sub_type === ControlSubType.calculated_label && formControl.label) {
            // set JSON output label
            // bind calculated result to output label
            updateCalculator.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = (selectedUnit.id === Units.MILLI_METER ? this.helperService.convertToMillimeter((+formControl.label)) : this.helperService.convertToInch((+formControl.label)));
          }
        }
      }
    }

    this.calculator = { ...this.calculator, ...updateCalculator };
  }

  // get default value of control
  getDefaultControlValueFromCalculatorJSONConfig(formControlKey: string) {
    // cpy calculator form data
    const calculatorForm: TwoColumnFormModel = { ...this.calculator.form };
    // left column
    let fc: FormControlModel = this.getFormControl(calculatorForm.left_column.form_layout_row, formControlKey);
    if (fc && fc.key && fc.defaultvalue) {
      return fc.defaultvalue;
    }
    else {
      // right column
      fc = this.getFormControl(calculatorForm.right_column.form_layout_row, formControlKey);
      if (fc && fc.key && fc.defaultvalue) {
        return fc.defaultvalue;
      }
      else {
        return null;
      }
    }
  }

  // set show flag of calculator config
  private setShowFlag(rows: FormRowModel[], selectedOption: number) {
    // iterate over left column rows
    for (let row = 0; row < rows.length; row++) {
      // iterate over left column columns
      for (let column = 0; column < rows[row].form_layout_columns.length; column++) {
        // iterate over left column controls
        for (let control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
          if (rows[row].form_layout_columns[column].form_controls[control].hasOwnProperty('show')) {
            // controlGroup is an array which holds the options(Nominal = 1, Tolerance = 2 and MinandMax = 3) values on which we need to show the controls
            const controlGroup: number[] = rows[row].form_layout_columns[column].form_controls[control]?.show_control_option;
            if (controlGroup && controlGroup.length) { // has control group array
              if (controlGroup.includes(selectedOption)) { // check form control belong to the controlGroup
                rows[row].form_layout_columns[column].form_controls[control].show = true;
              }
              else {
                rows[row].form_layout_columns[column].form_controls[control].show = false;
              }
            }
          }
        }
      }
    }
    return rows;
  }

  // set units
  private setUnit(rows: FormRowModel[], selectedUnit: SwitchButtonModel) {
    // iterate over left column rows
    for (let row = 0; row < rows.length; row++) {
      // iterate over left column columns
      for (let column = 0; column < rows[row].form_layout_columns.length; column++) {
        // iterate over column controls
        for (let control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
          // check control sub-type is unitLabel and update the label and value
          if (rows[row].form_layout_columns[column].form_controls[control].sub_type === ControlSubType.unitLabel) {
            // set display label value
            rows[row].form_layout_columns[column].form_controls[control].label = selectedUnit.display_Short_title;
            if (Units.INCH === +(selectedUnit.id)) {
              rows[row].form_layout_columns[column].form_controls[control].value = Units.INCH;
            }
            else if (Units.MILLI_METER === +(selectedUnit.id)) {
              rows[row].form_layout_columns[column].form_controls[control].value = Units.MILLI_METER;
            }
            else {
              rows[row].form_layout_columns[column].form_controls[control].value = Units.INCH;
            }
          }
          else if (rows[row].form_layout_columns[column].form_controls[control].sub_type === ControlSubType.cteUnitLabel) {
            if (Units.INCH === +(selectedUnit.id)) {
              // set display label value
              rows[row].form_layout_columns[column].form_controls[control].label = "in/in/°F";
              rows[row].form_layout_columns[column].form_controls[control].value = Units.INCH;
            }
            else if (Units.MILLI_METER === +(selectedUnit.id)) {
              // set display label value
              rows[row].form_layout_columns[column].form_controls[control].label = "mm/mm/°C";
              rows[row].form_layout_columns[column].form_controls[control].value = Units.MILLI_METER;
            }
            else {
              // set display label value
              rows[row].form_layout_columns[column].form_controls[control].label = "in/in/°F";
              rows[row].form_layout_columns[column].form_controls[control].value = Units.INCH;
            }
          }

          // check control sub-type is pressureLabel and update the label and value
          if (rows[row].form_layout_columns[column].form_controls[control].sub_type === ControlSubType.pressureLabel) {
            // set display label value              
            if (Units.MILLI_METER === +(selectedUnit.id)) {
              rows[row].form_layout_columns[column].form_controls[control].label = 'bar';
            }
            else {
              rows[row].form_layout_columns[column].form_controls[control].label = 'psi';
            }
          }

          // check control sub-type is outputHeaderUnitLabel and update the label and value
          if (rows[row].form_layout_columns[column].form_controls[control].sub_type === ControlSubType.outputHeaderUnitLabel) {
            // set display label value              
            if (Units.MILLI_METER === +(selectedUnit.id)) {
              rows[row].form_layout_columns[column].form_controls[control].label = 'mm';
            }
            else {
              rows[row].form_layout_columns[column].form_controls[control].label = 'Inch';
            }
          }
        }
      }
    }
    return rows;
  }

  // set temperature lable
  private setTemperature(rows: FormRowModel[], selectedTemperature: SwitchButtonModel) {
    // iterate over left column rows
    for (let row = 0; row < rows.length; row++) {
      // iterate over left column columns
      for (let column = 0; column < rows[row].form_layout_columns.length; column++) {
        // iterate over column controls
        for (let control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
          // check control sub-type is unit and update the label and value
          if (rows[row].form_layout_columns[column].form_controls[control].sub_type === ControlSubType.temperatureLabel) {
            // set display label value
            rows[row].form_layout_columns[column].form_controls[control].label = selectedTemperature.display_Short_title;
            if (Temperature.CELCIUS === +(selectedTemperature.id)) {
              rows[row].form_layout_columns[column].form_controls[control].value = Temperature.CELCIUS;
            }
            else if (Temperature.FAHRENHEIT === +(selectedTemperature.id)) {
              rows[row].form_layout_columns[column].form_controls[control].value = Temperature.FAHRENHEIT;
            }
            else {
              rows[row].form_layout_columns[column].form_controls[control].value = Temperature.CELCIUS;
            }
          }
        }
      }
    }
    return rows;
  }

  // set convert output
  private convertOutputToInchOrMillimeter(rows: FormRowModel[], selectedUnit: SwitchButtonModel) {
    // iterate over left column rows
    for (let row = 0; row < rows.length; row++) {
      // iterate over left column columns
      for (let column = 0; column < rows[row].form_layout_columns.length; column++) {
        // iterate over left column controls
        for (let control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
          if (rows[row].form_layout_columns[column].form_controls[control].hasOwnProperty('sub_type')) {
            // const controlKey = this.control?.key;
            // temperature conversion
            if (rows[row].form_layout_columns[column].form_controls[control].sub_type === ControlSubType.calculated_label) {
              const currentVal = rows[row].form_layout_columns[column].form_controls[control].value;
              if (currentVal) {
                const convertedValue = selectedUnit.id === Units.MILLI_METER ? this.helperService.convertToMillimeter(currentVal) : this.helperService.convertToInch(currentVal);
                rows[row].form_layout_columns[column].form_controls[control].value = convertedValue;
                rows[row].form_layout_columns[column].form_controls[control].label = `${convertedValue} %`;
              }
              else {
                // default value                
                rows[row].form_layout_columns[column].form_controls[control].label = " %";
              }
            }
          }
        }
      }
    }
    return rows;
  }

  // set temperature lable
  private getFormControl(rows: FormRowModel[], formControlKey: String): FormControlModel {
    let fc: FormControlModel = new FormControlModel({});
    // iterate over left column rows
    for (let row = 0; row < rows.length; row++) {
      // iterate over left column columns
      for (let column = 0; column < rows[row].form_layout_columns.length; column++) {
        // iterate over column controls
        for (let control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
          // key matched
          if (formControlKey === rows[row].form_layout_columns[column].form_controls[control].key) {
            fc = rows[row].form_layout_columns[column].form_controls[control];
          }
        }
      }
    }
    return fc;
  }
}
