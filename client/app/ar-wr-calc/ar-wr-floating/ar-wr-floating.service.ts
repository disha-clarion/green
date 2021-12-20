// core imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// application imports
import { AppConfig } from '../../app.config.service';
import { SwitchButtonModel } from '../../models/switch-button.model';
import { FormGroup } from '@angular/forms';
import { PressInDTO } from '../../models/pressInDTO';

@Injectable({
  providedIn: 'root'
})
export class ArWrFloatingService {
  private readonly baseUrl = AppConfig.settings.env.api;

  constructor(
    private readonly _http: HttpClient
  ) { }

  public floatingCalculation(form: FormGroup, unit: SwitchButtonModel, unitTemp: SwitchButtonModel) {
    const body: PressInDTO = new PressInDTO(form.value);
    body.unit = unit.id.toString();
    body.unitTemp = unitTemp.id.toString();

    return this._http.post(`${this.baseUrl}wrar/floatingCalculation`, body);
  }
}
