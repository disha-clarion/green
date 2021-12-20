// core imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// application imports
import { AppConfig } from '../../../app.config.service';
import { ORingInternalVacuumOnlyDTO } from "../../../models/oRingInternalVacuumOnlyDTO";
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { ORingRectangularGlandExternalVacuumOnlyValidationService } from "./o-ring-rectangular-gland-external-vacuum-only-validation.service";
import { ORingRectangularGlandExternalVacuumOnlyMinvaluesModel } from "../../../models/o-ring-rectangular-gland-external-vacuum-only-minvalues";
import { ORingRectangularGlandExternalVacuumOnlyMaxvaluesModel } from "../../../models/o-ring-rectangular-gland-external-vacuum-only-maxvalues";
import { FormGroup } from '@angular/forms';
import { CalculatorOption, calculationType, rectangleType } from '../../../shared/helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class ORingRectangularGlandExternalVacuumOnlyService {
  private baseUrl = AppConfig.settings.env.api;

  constructor(
    private _http: HttpClient,
    private oRingRectangularGlandExternalVacuumOnlyValidationService: ORingRectangularGlandExternalVacuumOnlyValidationService
  ) { }

  public createORing(form: FormGroup, inputOption: string, unit: SwitchButtonModel, unitTemp: SwitchButtonModel) {
    let body: ORingInternalVacuumOnlyDTO = new ORingInternalVacuumOnlyDTO(form.value);
    body.unit = unit.id.toString();
    body.unitTemp = unitTemp.id.toString();
    body.inputOption = inputOption;
    body.calculationType = calculationType.ORING_SIZING;
    body.rectangleType = rectangleType.RECTANGLE_OD;

    if (CalculatorOption.WithTolerance === +(inputOption)) {
      const minValue: ORingRectangularGlandExternalVacuumOnlyMinvaluesModel = this.oRingRectangularGlandExternalVacuumOnlyValidationService.generateMinValues(form);
      body.glandWidthMin = minValue.glandWidthMin ? minValue.glandWidthMin : 0;
      body.glandDepthMin = minValue.glandDepthMin ? minValue.glandDepthMin : 0;
      body.bottomRadiiMin = minValue.bottomRadiiMin ? minValue.bottomRadiiMin : 0;
      body.gapMin = minValue.gapMin ? minValue.gapMin : 0;
      body.glandODMin = minValue.glandODMin ? minValue.glandODMin.toString() : "0";
      const maxValue: ORingRectangularGlandExternalVacuumOnlyMaxvaluesModel = this.oRingRectangularGlandExternalVacuumOnlyValidationService.generateMaxValues(form);
      body.glandWidthMax = maxValue.glandWidthMax ? maxValue.glandWidthMax : 0;
      body.glandDepthMax = maxValue.glandDepthMax ? maxValue.glandDepthMax : 0;
      body.bottomRadiiMax = maxValue.bottomRadiiMax ? maxValue.bottomRadiiMax : 0;
      body.gapMax = maxValue.gapMax ? maxValue.gapMax : 0;
      body.glandODMax = maxValue.glandODMax ? maxValue.glandODMax.toString() : "0";
    }

    return this._http.post(`${this.baseUrl}oringglandanalysistool/createoring`, body);
  }
}
