import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[numeric]'
})

export class NumericDirective {

  @Input('maxLength') maxLength: number = 6;
  @Input('decimals') decimals: number = 0;
  @Input('isFormatInputOnBlur') isFormatInputOnBlur: boolean = true;
  @Input('isNegetiveNumber') isNegetiveNumber: boolean = true;

  // validate input
  private check(value: string, decimals: number) {
    if (this.decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
      let regExpString = "^\\s*((\\d{0," + this.maxLength + "}?(\\.\\d{0," + this.decimals + "})?)|((\\d*(\\.\\d{1," + this.decimals + "}))))\\s*$"
      if (this.isNegetiveNumber) {
        regExpString = "^-?\\s*((\\d{0," + this.maxLength + "}?(\\.\\d{0," + this.decimals + "})?)|((\\d*(\\.\\d{1," + this.decimals + "}))))\\s*$"
      }
      return String(value).match(new RegExp(regExpString));
    }
  }

  // special keys
  private specialKeys = [
    'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'
  ];

  constructor(
    private el: ElementRef,
    private control: NgControl
  ) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    // Do not use event.keycode this is deprecated.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);

    if (next && !this.check(next, this.decimals)) {
      // if (this.check(event.key, this.decimals)) {
      //   this.el.nativeElement.value = event.key;
      // }
      event.preventDefault();
    }
  }

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {
    if (!this.isFormatInputOnBlur) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    if (current) {
      // const transformedValue = this.decimalPipe.transform(+(current), `0.${this.decimals}-${this.decimals}`);
      const transformedValue = this.formatNumber(current);
      this.el.nativeElement.value = transformedValue;
      if (this.control.control) {
        this.control.control.setValue(transformedValue);
      }
    }
  }

  // format number to decimal places
  private formatNumber(val: string) {
    if (!val) {
      return '';
    }

    var clean = val.replace(/[^0-9\.]/g, '');
    var negativeCheck = clean.split('-');
    var decimalCheck = clean.split('.');
    if (negativeCheck[1]) {
      negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
      clean = negativeCheck[0] + '-' + negativeCheck[1];
      if (negativeCheck[0].length > 0) {
        clean = negativeCheck[0];
      }
    }
    if (decimalCheck[1]) {
      decimalCheck[1] = decimalCheck[1].slice(0, this.decimals);

      clean = decimalCheck[0] + '.' + decimalCheck[1];
    }
    else {
      // clean = (+decimalCheck[0]).toFixed(this.decimals);
      clean = decimalCheck[0];
    }

    if (clean) {
      clean = (+clean).toFixed(this.decimals).toString();
    }

    return clean;
  }
}