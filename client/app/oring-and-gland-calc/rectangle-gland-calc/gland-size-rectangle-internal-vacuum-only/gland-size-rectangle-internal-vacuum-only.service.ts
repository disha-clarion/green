// core imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// third party imports
import { BehaviorSubject } from 'rxjs';

// application imports
import { AppConfig } from '../../../app.config.service';
import { CalculatorModel } from '../../../models/calculator.model';
// import { GlandSizeRectangularGlandInternalVacuumOnlyDTO } from "../../../models/GlandSizeRectangularGlandInternalVacuumOnlyDTO";
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { FormGroup } from '@angular/forms';
import { CalculatorOption, calculationType } from '../../../shared/helpers/constants';
import { GlandSizeRectangularGlandInternalVacuumOnlyDTO } from "../../../models/glandSizeRectangularGlandInternalVacuumOnlyDTO";


@Injectable({
  providedIn: 'root'
})
export class GlandSizeRectangleInternalVacuumOnlyService {
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

    return this._http.post(`${this.baseUrl}glandsizecalc/createGland`, body);
  }
}
