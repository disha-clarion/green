import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: "[numeric]"
})
export class NumericDirective {
  @Input('decimals') decimals: number = 0;
  @Input('maxLength') maxLength: number = 6;
  @Input('isFormatInputOnBlur') isFormatInputOnBlur: boolean = true;
  @Input('isNegetiveNumber') isNegetiveNumber: boolean = true;

  private checkAllowNegative(value: string) {
    if (this.decimals <= 0) {
      return String(value).match(new RegExp(/^-?\d+$/));
    } else {
      var regExpString = "^-?\\s*((\\d{0," +
        this.maxLength +
        "}?(\\.\\d{0," + this.decimals +
        "})?)|((\\d*(\\.\\d{1," + this.decimals +
        "}))))\\s*$";
      return String(value).match(new RegExp(regExpString));
    }
  }

  private check(value: string) {
    if (this.decimals <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
      var regExpString = "^\\s*((\\d{0," +
        this.maxLength +
        "}?(\\.\\d{0," +
        this.decimals +
        "})?)|((\\d*(\\.\\d{1," +
        this.decimals + "}))))\\s*$";
      return String(value).match(new RegExp(regExpString));
    }
  }

  private run(oldValue, event) {
    setTimeout(() => {
      let currentValue: string = this.el.nativeElement.value;
      let allowNegative = this.isNegetiveNumber;

      if (allowNegative) {
        if (
          !["", "-"].includes(currentValue) &&
          !this.checkAllowNegative(currentValue)
        ) {
          // event.preventDefault();
          // event.stopPropagation();
          //  event.stopImmediatePropagation();
           this.el.nativeElement.value = oldValue;
        }
      } else {
        if (currentValue !== "" && !this.check(currentValue)) {
          // // event.preventDefault();
          this.el.nativeElement.value = oldValue;
          // event.stopPropagation();
          //  event.stopImmediatePropagation();
        }
      }
    });
  }

  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    this.run(this.el.nativeElement.value, event);
  }

  @HostListener("paste", ["$event"])
  onPaste(event: ClipboardEvent) {
    this.run(this.el.nativeElement.value, event);
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