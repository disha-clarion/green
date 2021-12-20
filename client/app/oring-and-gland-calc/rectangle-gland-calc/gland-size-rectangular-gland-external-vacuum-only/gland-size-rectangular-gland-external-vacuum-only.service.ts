// core imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// application imports
import { AppConfig } from '../../../app.config.service';
import { GlandSizeRectangularGlandInternalVacuumOnlyDTO } from "../../../models/glandSizeRectangularGlandInternalVacuumOnlyDTO";
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { FormGroup } from '@angular/forms';
import { CalculatorOption, calculationType, rectangleType } from '../../../shared/helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class GlandSizeRectangularGlandExternalVacuumOnlyService {
  private baseUrl = AppConfig.settings.env.api;

  constructor(
    private _http: HttpClient
  ) { }

  public createGland(form: FormGroup, unit: SwitchButtonModel, unitTemp: SwitchButtonModel) {
    let body: GlandSizeRectangularGlandInternalVacuumOnlyDTO = new GlandSizeRectangularGlandInternalVacuumOnlyDTO(form.value);
    body.unit = unit.id.toString();
    body.unitTemp = unitTemp.id.toString();
    body.inputOption = CalculatorOption.WithMinMax.toString();
    body.calculationType = calculationType.GLAND_SIZING;
    body.rectangleType = rectangleType.RECTANGLE_OD;

    return this._http.post(`${this.baseUrl}glandsizecalc/createGland`, body);
  }
}
