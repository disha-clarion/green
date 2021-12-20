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
export class RectangleGlandCalcService {
  /* Private Properties   */
  private baseUrl = AppConfig.settings.env.api;

  // glandSizeCalc config state management subject and observable
  // private glandSizeCalcConfigSubject: BehaviorSubject<BaseModel> = new BehaviorSubject<BaseModel>(null);
  private readonly glandSizeCalcConfigSubject: BehaviorSubject<BaseModel> = new BehaviorSubject<BaseModel>(null);
  // Expose the observable part of the glandSizeCalcConfig subject (read only stream)
  readonly glandSizeCalcConfig$ = this.glandSizeCalcConfigSubject.asObservable();

  // service state management property "glandSizeCalcConfig"
  // the getter will return the last value emitted glandSizeCalcConfigSubject subject
  private get glandSizeCalcConfig(): BaseModel {
    return this.glandSizeCalcConfigSubject.getValue();
  }

  // assigning a value to this.glandSizeCalcConfig will push it onto the observable 
  // and down to all of its subsribers (ex: this.glandSizeCalcConfig = {})
  private set glandSizeCalcConfig(val: BaseModel) {
    this.glandSizeCalcConfigSubject.next(val);
  }

  /* Public Properties   */

  // get config value directly using behaviour subject
  public get getCurrentGlandSizeCalcConfigValue(): BaseModel {
    return this.glandSizeCalcConfig;
  }

  /*  Constructor */
  constructor(private _http: HttpClient) {
  }

  // Methods/functions
  // send GlandSize config
  // assigning a value to this.glandSizeCalcConfig will push it onto the observable 
  // and down to all of its subsribers (ex: this.glandSizeCalcConfig = {})
  sendGlandSizeCalcConfigValue(val: BaseModel) {
    this.glandSizeCalcConfig = val;
  }

  /*  Public Methods   */

  // get o-ring config from server
  getGlandSizeCalcConfig() {
    return this._http.get(`${this.baseUrl}glandsizecalc/getjsonconfig`);
  }
}
