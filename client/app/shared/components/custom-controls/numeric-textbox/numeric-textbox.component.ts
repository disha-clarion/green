// core imports
import { Component, OnInit, Input, ViewEncapsulation, OnDestroy, Output } from '@angular/core';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';

// third party imports
import { Subscription, Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

// application imports
import { ControlTextboxModel } from "../../../../models/control-textbox";
import { UnitButtonService } from "../../unit-button/unit-button.service";
import { SwitchButtonModel } from '../../../../models/switch-button.model';
import { Units, ControlSubType, Temperature, ActionType } from "../../../helpers/constants";
import { HelperService } from "../../../../shared/services/helper.service";
import { TemperatureButtonService } from "../../temperature-button/temperature-button.service";
import { ErrorModel } from '../../../../models/error.model';
import { CalculatorToolbarService } from "../../calculator-toolbar/calculator-toolbar.service";
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'custom-numeric-textbox',
  templateUrl: './numeric-textbox.component.html',
  styleUrls: ['./numeric-textbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NumericTextboxComponent implements OnInit, OnDestroy {
  @Input() control: ControlTextboxModel; // control to display
  @Input() form: FormGroup; // form group name
  @Input() isFormSubmitted: Boolean = false;
  @Input() isFormatInputOnBlur: boolean = true;
  @Input() isNegetiveNumber: boolean = false;
  @Input() clientErrors: ErrorModel[] = [];
  @Input() clientWarnings: ErrorModel[] = [];
  @Input() serverErrors: ErrorModel[] = [];
  @Input() serverWarnings: ErrorModel[] = [];
  @Input() maxLength: number = 6;
  @Input() decimalPoint: number = 2;
  @Input() isUpdateDecimalPointOnUnitChange = true;

  // events
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusOut: EventEmitter<any> = new EventEmitter<any>();

  // subscription
  unitButtonChange: Subscription;
  temperatureButtonChange: Subscription;
  formCtrlSub: Subscription;
  // resizeSub: Subscription;

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  // getter property to get the control validity
  get isValid() {
    // check client errors
    if ((this.clientErrors && this.clientErrors.length > 0)
      || (this.clientWarnings && this.clientWarnings.length > 0)
      || (this.serverErrors && this.serverErrors.length > 0)
      || (this.serverWarnings && this.serverWarnings.length > 0)) {

      // client error index
      const errorIndex = this.clientErrors.findIndex(e => {
        return this.control.key === e.field;
      });

      // client warning index
      const warningIndex = this.clientWarnings.findIndex(e => {
        return this.control.key === e.field;
      });

      // server error index
      const serverErrorIndex = this.serverErrors.findIndex(e => {
        return this.control.key === e.field;
      });

      // server warning index
      const serverWarningIndex = this.serverWarnings.findIndex(e => {
        return this.control.key === e.field;
      });

      // if ((errorIndex > -1) || (warningIndex > -1) || (serverErrorIndex > -1) || (serverWarningIndex > -1)) {
      if ((errorIndex > -1) || (serverErrorIndex > -1)) {
        return false;
      }
      else {
        return !this.form.controls[this.control.key].invalid;// this.form.controls[this.control.key].valid;
      }
    }
    else {
      return !this.form.controls[this.control.key].invalid; //this.form.controls[this.control.key].valid;
    }
  }

  constructor(
    private unitButtonService: UnitButtonService,
    private helperService: HelperService,
    private temperatureButtonService: TemperatureButtonService,
    private calculatorToolbarService: CalculatorToolbarService
  ) {
    this.unitChange();
    this.temperatureChange();
  }

  ngOnInit(): void {
    const fc = this.getFormControl();

    // input value changes
    // debounce keystroke events          
    this.formCtrlSub = fc.valueChanges.pipe(debounceTime(1000)).subscribe((newValue) => {
      //  this.firstName = newValue;
      // console.log(`numeric value   ${newValue}`);
      this.valueChange.emit({ key: this.control.key, formControl: fc });
    });
  }

  ngOnDestroy(): void {
    if (this.unitButtonChange) {
      this.unitButtonChange.unsubscribe();
    }
    if (this.temperatureButtonChange) {
      this.temperatureButtonChange.unsubscribe();
    }
    if (this.formCtrlSub) {
      this.formCtrlSub.unsubscribe();
    }
  }

  // return form control
  public getFormControl(): AbstractControl {
    return this.form.get(this.control.key);
  }

  // unit change handler
  unitChange() {
    // unit change subscription
    this.unitButtonChange = this.unitButtonService.unit$.subscribe((x: SwitchButtonModel) => {
      if (this.isUpdateDecimalPointOnUnitChange) {
        if (x) {
          if (x.id === Units.MILLI_METER) {
            this.decimalPoint = 2;
          }
          else {
            this.decimalPoint = 3;
          }
        }
      }
    });
  }

  // temperature change handler
  temperatureChange() {
    // temperature change subscription
    this.temperatureButtonChange = this.temperatureButtonService.temperature$.subscribe((x: SwitchButtonModel) => {
      if (x) {
        const controlKey = this.control?.key;

        // temperature conversion
        if (x.actionType !== ActionType.Paste && controlKey && this.control && this.control.sub_type === ControlSubType.temperature) {
          const formControl = this.getFormControl();
          const formControlValue = formControl.value;
          const unit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
          if (formControlValue) {
            // convert the input form control value
            const convertedValue = x.id === Temperature.FAHRENHEIT ? this.helperService.convertCelciusToFahrenheit(formControlValue) : this.helperService.convertFahrenheitToCelcius(formControlValue);
            formControl.setValue(convertedValue);
          }
        }
      }
    });
  }

  // on input change event
  onChangeEvent(event: any) {

  }

  // focus out event
  onFocusOutEvent(event: any) {
    this.focusOut.emit(event);
  }
}
