// core imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

// application imports
import { AppConfig } from '../../app.config.service';
import { BaseModel } from "../../models/base.model";

@Injectable({
  providedIn: 'root'
})
export class RectangularORingCalcService {

  /* Private Properties   */

  private baseUrl = AppConfig.settings.env.api;

  // oRing config state management subject and observable
  // private oRingConfigSubject: BehaviorSubject<BaseModel> = new BehaviorSubject<BaseModel>(null);
  private readonly oRingConfigSubject: BehaviorSubject<BaseModel> = new BehaviorSubject<BaseModel>(null);
  // Expose the observable part of the oRingConfig subject (read only stream)
  readonly oRingConfig$ = this.oRingConfigSubject.asObservable();

  // service state management property "oRingConfig"
  // the getter will return the last value emitted oRingConfigSubject subject
  private get oRingConfig(): BaseModel {
    return this.oRingConfigSubject.getValue();
  }

  // assigning a value to this.oRingConfig will push it onto the observable 
  // and down to all of its subsribers (ex: this.oRingConfig = {})
  private set oRingConfig(val: BaseModel) {
    this.oRingConfigSubject.next(val);
  }

  /* Public Properties   */

  // get config value directly using behaviour subject
  public get getCurrentORingConfigValue(): BaseModel {
    return this.oRingConfig;
  }

  /*  Constructor */
  constructor(private _http: HttpClient) {
  }

  // Methods/functions
  // send oring config
  // assigning a value to this.oRingConfig will push it onto the observable 
  // and down to all of its subsribers (ex: this.oRingConfig = {})
  sendORingConfigValue(val: BaseModel) {
    this.oRingConfig = val;
  }

  /*  Public Methods   */

  // get o-ring config from server
  getRectangularORingCalcConfig() {
    return this._http.get(`${this.baseUrl}oringglandanalysistool/rectangularglandinternalvacuumonly`);
  }
}
