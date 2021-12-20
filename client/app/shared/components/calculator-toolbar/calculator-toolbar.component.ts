// core imports
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

// application imports
import { CalculatorToolbarService } from "./calculator-toolbar.service";
import { CalculatorOption } from "../../helpers/constants";
import { FormControlModel } from "../../../models/form-control.model";
import { CalculatorModel } from '../../../models/calculator.model';
import { HelperService } from "../../services/helper.service";

@Component({
  selector: 'calculator-toolbar',
  templateUrl: './calculator-toolbar.component.html',
  styleUrls: ['./calculator-toolbar.component.css']
})
export class CalculatorToolbarComponent implements OnInit {
  @Input() control: FormControlModel; // control to display
  @Input() form: FormGroup; // form group name
  @Input() isSubmitted: Boolean = false;
  @Input() isShowOptions: Boolean = false;
  @Input() isShowPasteBtn: Boolean = false;
  @Input() isShowCopyBtn: Boolean = false;
  @Input() calculatorConfig: CalculatorModel;
  @Output() optionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  @Output() print: EventEmitter<any> = new EventEmitter<any>();
  @Output() paste: EventEmitter<any> = new EventEmitter<any>();
  @Output() copy: EventEmitter<any> = new EventEmitter<any>();
  options = CalculatorOption;

  constructor(
    private calculatorToolbarService: CalculatorToolbarService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {

  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onConvertToPdf() {
    this.print.emit();
  }

  onResetField() {
    // this.form.reset();
    this.reset.emit();
  }

  onOptionClick(e: any, option: number) {
    this.optionChange.emit(option);
  }

  // return form control
  public getFormControl(): AbstractControl {
    if (this.control && this.control.key) {
      return this.form.get(this.control.key);
    }
  }

  onPaste() {
    const calculatedData: any = this.helperService.getCalculatedStoredData((+this.calculatorConfig.id));
    if (calculatedData) {
      this.calculatorToolbarService.paste.emit(calculatedData);
    }
  }

  onCopy() {
    this.copy.emit();
  }
}