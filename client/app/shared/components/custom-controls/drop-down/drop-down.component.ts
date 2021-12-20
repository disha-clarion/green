// core imports
import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// application imports
import { FormControlModel } from "../../../../models/form-control.model";
import { DropDownChangeModel } from '../../../../models/dropdown-change.model';

@Component({
  selector: 'custom-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  @Input() form: FormGroup; // form group name
  @Input() options: FormControlModel[];
  @Input() control: FormControlModel; // control to display
  @Input() isFormSubmitted: Boolean = false;
  @Input() isAddChooseOption: boolean = false;
  @Input() chooseOptionLabel: string = "Please select";
  // @Output() selectionChange: EventEmitter<FormControlModel> = new EventEmitter<FormControlModel>();
  @Output() selectionChange: EventEmitter<DropDownChangeModel> = new EventEmitter<DropDownChangeModel>();
  @Output() focusOut: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  // getter property to get the control validity
  get isValid() {
    return this.f[this.control.key].valid;
  }

  get controlValue() {
    return this.f[this.control.key].value;
  }

  // return form control
  public getFormControl(): AbstractControl {
    return this.form.get(this.control.key);
  }

  ngOnInit(): void {
  }

  onSelectionChange(event: any) {
    const dropdownObject: DropDownChangeModel = new DropDownChangeModel({ formControl: this.control, value: this.controlValue });
    this.selectionChange.emit(dropdownObject);
    // this.selectionChange.emit(this.controlValue);
  }

  // focus out event
  onFocusOutEvent(event: any) {
    this.focusOut.emit(event);
  }
}