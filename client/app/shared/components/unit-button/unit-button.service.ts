// core imports
import { Injectable } from '@angular/core';

// third party imports
import { BehaviorSubject } from 'rxjs';

// application imports
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { Units, UnitsAbbreviation } from '../../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class UnitButtonService {
  private readonly initialValue: SwitchButtonModel = { id: Units.INCH, title: Units[Units[0]], display_title: "Inch", display_Short_title: UnitsAbbreviation.INCH, isActive: true, actionType: 0 };
  private readonly unitSubject: BehaviorSubject<SwitchButtonModel> = new BehaviorSubject<SwitchButtonModel>(this.initialValue);
  readonly unit$ = this.unitSubject.asObservable();

  constructor() { }

  /* private Properties */
  // service state management property "unit"
  // the getter will return the last value emitted unitSubject subject
  private get unit(): SwitchButtonModel {
    return this.unitSubject.getValue();
  }

  // assigning a value to unit will push it onto the observable 
  // and down to all of its subsribers (ex: this.unit = {})
  private set unit(val: SwitchButtonModel) {
    this.unitSubject.next(val);
  }

  // get config value directly using behaviour subject
  public get getCurrentUnitValue(): SwitchButtonModel {
    return this.unit;
  }

  // send oring config
  // assigning a value to unit will push it onto the observable 
  // and down to all of its subsribers (ex: this.unit = {})
  sendUnitValue(val: SwitchButtonModel) {
    this.unit = { ...val, isActive: true };
  }
}
