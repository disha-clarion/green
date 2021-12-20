// core imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// third party imports
import { BehaviorSubject } from 'rxjs';

// application imports
import { AppConfig } from '../../../app.config.service';
import { ORingSizesModel } from '../../../models/oRingSizes.model';
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { UnitButtonService } from "../unit-button/unit-button.service";

@Injectable({
  providedIn: 'root'
})
export class DashSizeDetailsService {
  private baseUrl = AppConfig.settings.env.api;

  private readonly dashSizeDetailSubject: BehaviorSubject<ORingSizesModel> = new BehaviorSubject<ORingSizesModel>(null);
  // Expose the observable part of the 
  readonly dashSizeDetail$ = this.dashSizeDetailSubject.asObservable();

  private get dashSizeDetail(): ORingSizesModel {
    return this.dashSizeDetailSubject.getValue();
  }

  private set dashSizeDetail(val: ORingSizesModel) {
    this.dashSizeDetailSubject.next(val);
  }

  /* Public Properties   */

  public get getCurrentORingConfigValue(): ORingSizesModel {
    return this.dashSizeDetail;
  }

  sendORingSizes(val: ORingSizesModel) {
    this.dashSizeDetail = val;
  }

  constructor(private _http: HttpClient, private unitButtonService: UnitButtonService) { }

  getDashSizeDetails() {
    const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
    if (currentSelectedUnit) {
      let body = { unit: currentSelectedUnit.id };
      return this._http.post(`${this.baseUrl}oringglandanalysistool/dashSizeDetails`, body);
    }
  }
}
