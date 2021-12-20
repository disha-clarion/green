// core imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// application imports
import { AppConfig } from '../../../app.config.service';
import { ORingDovetailGlandVacuumOnlyDTO } from "../../../models/oRingDovetailGlandVacuum OnlyDTO";
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { ORingHalfDovetailGlandInternalVacuumOnlyValidationService } from "./o-ring-half-dovetail-gland-internal-vacuum-only-validation.service";
import { FormGroup } from '@angular/forms';
import { CalculatorOption, calculationType } from '../../../shared/helpers/constants';
import { MaxValue } from '../../../models/oring-dovetail-max.model';
import { MinValue } from '../../../models/oring-dovetail-min.model';

@Injectable({
  providedIn: 'root'
})
export class ORingHalfDovetailGlandInternalVacuumOnlyService {
  private baseUrl = AppConfig.settings.env.api;

  constructor(private _http: HttpClient, private oRingHalfDovetailGlandInternalVacuumOnlyValidationService: ORingHalfDovetailGlandInternalVacuumOnlyValidationService) { }

  public createOringHalfDovetail(form: FormGroup, inputOption: string, unit: SwitchButtonModel, unitTemp: SwitchButtonModel) {
    let body: ORingDovetailGlandVacuumOnlyDTO = new ORingDovetailGlandVacuumOnlyDTO(form.value);
    body.unit = unit.id.toString();
    body.unitTemp = unitTemp.id.toString();
    body.inputOption = inputOption;
    body.calculationType = calculationType.ORING_SIZING;

    if (CalculatorOption.WithTolerance === +(inputOption)) {
      const minValue: MinValue = this.oRingHalfDovetailGlandInternalVacuumOnlyValidationService.generateMinValues(form);
      body.glandWidthMin = minValue.glandWidthMin ? minValue.glandWidthMin : 0;
      body.glandDepthMin = minValue.glandDepthMin ? minValue.glandDepthMin : 0;
      body.glandAngleMin = minValue.glandAngleMin ? minValue.glandAngleMin : 0;
      body.bottomRadiiMin = minValue.bottomRadiiMin ? minValue.bottomRadiiMin : 0;
      body.topRadiiMin = minValue.topRadiiMin ? minValue.topRadiiMin : 0;
      body.gapMin = minValue.gapMin ? minValue.gapMin : 0;
      body.glandCenterlineMin = minValue.glandCenterlineMin ? minValue.glandCenterlineMin : 0;

      const maxValue: MaxValue = this.oRingHalfDovetailGlandInternalVacuumOnlyValidationService.generateMaxValues(form);
      body.glandWidthMax = maxValue.glandWidthMax ? maxValue.glandWidthMax : 0;
      body.glandDepthMax = maxValue.glandDepthMax ? maxValue.glandDepthMax : 0;
      body.glandAngleMax = maxValue.glandAngleMax ? maxValue.glandAngleMax : 0;
      body.bottomRadiiMax = maxValue.bottomRadiiMax ? maxValue.bottomRadiiMax : 0;
      body.topRadiiMax = maxValue.topRadiiMax ? maxValue.topRadiiMax : 0;
      body.gapMax = maxValue.gapMax ? maxValue.gapMax : 0;
      body.glandCenterlineMax = maxValue.glandCenterlineMax ? maxValue.glandCenterlineMax : 0
    }

    return this._http.post(`${this.baseUrl}oringglandanalysistool/createOringHalfDovetail`, body);
  }
}
