// core imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// third party imports
import { BehaviorSubject } from 'rxjs';

// application imports
import { AppConfig } from '../../../app.config.service';
import { CalculatorModel } from '../../../models/calculator.model';
import { ORingInternalVacuumOnlyDTO } from "../../../models/oRingInternalVacuumOnlyDTO";
import { SwitchButtonModel } from '../../../models/switch-button.model';
import { ORingInternalVacuumOnlyValidationService } from "./o-ring-internal-vacuum-only-validation.service";
import { ORingRectangularGlandInternalVacuumOnlyMinvaluesModel } from "../../../models/oring-rectangular-gland-internal-vacuum-only-minvalues";
import { ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel } from "../../../models/oring-rectangular-gland-internal-vacuum-only-maxvalues";
import { FormGroup } from '@angular/forms';
import { CalculatorOption, calculationType } from '../../../shared/helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class ORingInternalVacuumOnlyService {
  private baseUrl = AppConfig.settings.env.api;
  private readonly oRingInternalVacuumCalculatorSubject: BehaviorSubject<CalculatorModel> = new BehaviorSubject<CalculatorModel>(null);
  readonly oRingInternalVacuumCalculator$ = this.oRingInternalVacuumCalculatorSubject.asObservable();

  constructor(
    private _http: HttpClient,
    private oRingInternalVacuumOnlyValidationService: ORingInternalVacuumOnlyValidationService
  ) { }

  private get oRingInternalVacuumCalculator(): CalculatorModel {
    return this.oRingInternalVacuumCalculatorSubject.getValue();
  }

  private set oRingInternalVacuumCalculator(val: CalculatorModel) {
    this.oRingInternalVacuumCalculatorSubject.next(val);
  }

  public get getCurrentValue() {
    return this.oRingInternalVacuumCalculator;
  }

  public setORingInternalVacuumCalculator(val: CalculatorModel) {
    this.oRingInternalVacuumCalculator = { ...val };
  }

  public createORing(form: FormGroup, inputOption: string, unit: SwitchButtonModel, unitTemp: SwitchButtonModel) {
    let body: ORingInternalVacuumOnlyDTO = new ORingInternalVacuumOnlyDTO(form.value);
    body.unit = unit.id.toString();
    body.unitTemp = unitTemp.id.toString();
    body.inputOption = inputOption;
    // // body.calculationType = calculationType.ORING_SIZING;

    if (CalculatorOption.WithTolerance === +(inputOption)) {
      const minValue: ORingRectangularGlandInternalVacuumOnlyMinvaluesModel = this.oRingInternalVacuumOnlyValidationService.generateMinValues(form);
      body.glandWidthMin = minValue.glandWidthMin ? minValue.glandWidthMin : 0;
      body.glandDepthMin = minValue.glandDepthMin ? minValue.glandDepthMin : 0;
      body.bottomRadiiMin = minValue.bottomRadiiMin ? minValue.bottomRadiiMin : 0;
      body.gapMin = minValue.gapMin ? minValue.gapMin : 0;
      body.glandIdMin = minValue.glandIdMin ? minValue.glandIdMin : 0;
      const maxValue: ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel = this.oRingInternalVacuumOnlyValidationService.generateMaxValues(form);
      body.glandWidthMax = maxValue.glandWidthMax ? maxValue.glandWidthMax : 0;
      body.glandDepthMax = maxValue.glandDepthMax ? maxValue.glandDepthMax : 0;
      body.bottomRadiiMax = maxValue.bottomRadiiMax ? maxValue.bottomRadiiMax : 0;
      body.gapMax = maxValue.gapMax ? maxValue.gapMax : 0;
      body.glandIdMax = maxValue.glandIdMax ? maxValue.glandIdMax : 0;
    }

    return this._http.post(`${this.baseUrl}oringglandanalysistool/createoring`, body);
  }
}

