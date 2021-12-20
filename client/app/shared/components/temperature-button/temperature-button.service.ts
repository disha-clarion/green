// core imports
import { Injectable } from '@angular/core';

// third party imports
import { BehaviorSubject } from 'rxjs';

// application imports
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { Temperature, TemperatureCelsiusCode } from '../../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class TemperatureButtonService {

  private readonly initialValue: SwitchButtonModel = { id: Temperature.CELCIUS, title: Temperature[Temperature.CELCIUS], display_title: TemperatureCelsiusCode.HTML_CODE, display_Short_title: TemperatureCelsiusCode.HTML_CODE, isActive: true, actionType: 0 };
  private readonly temperatureSubject: BehaviorSubject<SwitchButtonModel> = new BehaviorSubject<SwitchButtonModel>(this.initialValue);
  readonly temperature$ = this.temperatureSubject.asObservable();

  constructor() { }

  /* private Properties */
  // service state management property "unit"
  // the getter will return the last value emitted unitSubject subject
  private get temperature(): SwitchButtonModel {
    return this.temperatureSubject.getValue();
  }

  // assigning a value to unit will push it onto the observable 
  // and down to all of its subsribers (ex: this.unit = {})
  private set temperature(val: SwitchButtonModel) {
    this.temperatureSubject.next(val);
  }

  // get config value directly using behaviour subject
  public get getCurrentTemperatureValue(): SwitchButtonModel {
    return this.temperature;
  }

  // send oring config
  // assigning a value to unit will push it onto the observable 
  // and down to all of its subsribers (ex: this.unit = {})
  sendTemperatureValue(val: SwitchButtonModel) {
    // this.oRingConfigSubject.next(val);
    this.temperature = { ...val, isActive: true };
  }
}
