import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

// import { formControl } from "../../../models/form-control";
import { ControlTextboxModel } from "../../../../models/control-textbox";

@Component({
  selector: 'custom-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TextboxComponent implements OnInit {
  @Input() decimalPoint: number = 2;
  @Input() control: ControlTextboxModel; // control to display
  @Input() form: FormGroup; // form group name
  @Input() isFormSubmitted: Boolean = false;
  // @Input() columnSize: number = 12;

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  // getter property to get the control validity
  get isValid() {
    return this.form.controls[this.control.key].valid;
  }

  constructor() { }

  ngOnInit(): void {
  }

  // return form control
  public getFormControl(): AbstractControl {
    return this.form.get(this.control.key);
  }
}
