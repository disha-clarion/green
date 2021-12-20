// core imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

// application imports
import { AppConfig } from '../app.config.service';
import { BaseModel } from "../models/base.model";
import { AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SwitchButtonModel } from '../models/switch-button.model';
import { PressInDTO } from '../models/pressInDTO';
import { CalculatorTypes, Units } from '../shared/helpers/constants';
import { WrArMaterialCteDTO } from '../models/wrArMaterialCteDTO';
import { WrArMaterial } from '../models/wrArMaterial.model';
import { UnitButtonService } from "../shared/components/unit-button/unit-button.service";
import { HelperService } from "../shared/services/helper.service";
import { largerThanValidation, lessThanValidation } from '../shared/directives/custom-validations/comparison-validation.directive';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { TwoColumnFormModel } from '../models/two_column_form.model';

@Injectable({
  providedIn: 'root'
})
export class ArWrCalcService {
  /* Private Properties   */

  private readonly baseUrl = AppConfig.settings.env.api;

  // oRing config state management subject and observable
  private readonly oRingConfigSubject: BehaviorSubject<BaseModel> = new BehaviorSubject<BaseModel>(null);
  // Expose the observable part of the arWrConfig subject (read only stream)
  readonly arWrConfig$ = this.oRingConfigSubject.asObservable();

  // service state management property "arWrConfig"
  // the getter will return the last value emitted oRingConfigSubject subject
  private get arWrConfig(): BaseModel {
    return this.oRingConfigSubject.getValue();
  }

  // assigning a value to this.arWrConfig will push it onto the observable 
  // and down to all of its subsribers (ex: this.arWrConfig = {})
  private set arWrConfig(val: BaseModel) {
    this.oRingConfigSubject.next(val);
  }

  /* Public Properties   */

  // get config value directly using behaviour subject
  public get getCurrentArWrConfigValue(): BaseModel {
    return this.arWrConfig;
  }

  /*  Constructor */
  constructor(
    private readonly _http: HttpClient,
    private readonly unitButtonService: UnitButtonService,
    private readonly helperService: HelperService
  ) {
  }

  // Methods/functions
  // send oring config
  // assigning a value to this.arWrConfig will push it onto the observable 
  // and down to all of its subsribers (ex: this.arWrConfig = {})
  sendArWrConfigValue(val: BaseModel) {
    this.arWrConfig = val;
  }

  /*  Public Methods   */

  // get o-ring config from server
  getArWrPressInCalcConfig() {
    return this._http.get(`${this.baseUrl}wrar/getjsonconfig`);
  }

  public getInterference(form: FormGroup, unit: SwitchButtonModel, unitTemp: SwitchButtonModel) {
    const body: PressInDTO = new PressInDTO(form.value);
    body.unit = unit.id.toString();
    body.unitTemp = unitTemp.id.toString();
    return this._http.post(`${this.baseUrl}wrar/getInterference`, body);
  }

  public getClearance(form: FormGroup, unit: SwitchButtonModel, unitTemp: SwitchButtonModel, calculatorType: number = CalculatorTypes.WrArPressIn) {
    const body: PressInDTO = new PressInDTO(form.value);
    body.unit = unit.id.toString();
    body.unitTemp = unitTemp.id.toString();
    body.calculatorType = calculatorType;
    return this._http.post(`${this.baseUrl}wrar/getClearance`, body);
  }

  // get material cte data
  public getMaterialCTE(unit: SwitchButtonModel, material: any) {
    const body: WrArMaterialCteDTO = new WrArMaterialCteDTO();
    body.unit = unit.id.toString();
    body.material = material;
    return this._http.post(`${this.baseUrl}wrar/getCTEMaterialDetail`, body);
  }

  // get and set rotor and stator CTE only
  public getAndSetMaterialCTE(form: FormGroup, controlKey: string, bindControlKey: string, controlValue: any) {
    this.getMaterialCTE(this.unitButtonService.getCurrentUnitValue, controlValue).subscribe((x: WrArMaterial) => {
      // rotor CTE
      if (controlKey === "rotatingMaterial") {
        form.controls[bindControlKey].setValue(this.helperService.convertFromNegetivePowerOfSix(x.rotorCTE).toFixed(2));
      }
      else if (controlKey === "stationaryMaterial") { // stator CTE
        form.controls[bindControlKey].setValue(this.helperService.convertFromNegetivePowerOfSix(x.statorCTE).toFixed(2));
      }
    });
  }

  // get and set composite material temperature range
  public getSetCompositeMaterialData(calculatorData: TwoColumnFormModel, form: FormGroup, bindControlKey: string) {
    if (!form) {
      return;
    }

    const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
    // call API
    const body: PressInDTO = new PressInDTO(form.value);
    body.unit = currentSelectedUnit.id.toString();
    // API call and subscribe
    this._http.post(`${this.baseUrl}wrar/getMatlCheck`, body).subscribe((response: any) => {
      let temperatureRangeData = "";
      if ((+currentSelectedUnit.id) === Units.MILLI_METER) {
        // Metric / MM
        temperatureRangeData = `Min ${response.serviceStorageTemperatureAmbientMin}\xB0C / Max ${response.serviceStorageTemperatureAmbientMax}\xB0C`;
      }
      else {
        // Imperial / Inch
        temperatureRangeData = `Min ${response.serviceStorageTemperatureAmbientMin}\xB0F / Max ${response.serviceStorageTemperatureAmbientMax}\xB0F`;
      }

      // iterate over left column rows
      for (let row = 0; row < calculatorData.left_column.form_layout_row.length; row++) {
        // iterate over left column columns
        for (let column = 0; column < calculatorData.left_column.form_layout_row[row].form_layout_columns.length; column++) {
          // iterate over column controls
          for (let control = 0; control < calculatorData.left_column.form_layout_row[row].form_layout_columns[column].form_controls.length; control++) {
            // check control sub-type is unitLabel and update the label and value
            if (calculatorData.left_column.form_layout_row[row].form_layout_columns[column].form_controls[control].key === bindControlKey) {
              // set display label value              
              calculatorData.left_column.form_layout_row[row].form_layout_columns[column].form_controls[control].label = temperatureRangeData;
            }
          }
        }
      }
    }, (error: any) => { });
  }

  // Function stationary element id max validation
  stationaryElementIDMaxValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const stationaryElementIDMinControl = control.get('stationaryElementIDMin');
      const stationaryElementIDMaxControl = control.get('stationaryElementIDMax');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;

      let maxAllowed = ((+stationaryElementIDMinControl.value) + 0.005); // Inch
      if ((+currentSelectedUnit.id) === Units.MILLI_METER) {
        maxAllowed = ((+stationaryElementIDMinControl.value) + 0.127)
      }

      let error = null;

      if (stationaryElementIDMinControl && stationaryElementIDMinControl.value && stationaryElementIDMaxControl && stationaryElementIDMaxControl.value) {
        const message = `Value should be equal to minimum stationary bore ID or up to ${(+currentSelectedUnit.id) === Units.MILLI_METER ? ".127 mm" : ".005''"} over.`;
        // validate = max value should not be less than the min
        error = lessThanValidation(stationaryElementIDMaxControl.value, stationaryElementIDMinControl.value, "stationaryElementIDMax", "Stationary Element ID Max", message);
        if (!error) {
          // validate maximum allowed
          error = lessThanValidation(maxAllowed.toString(), stationaryElementIDMaxControl.value, "stationaryElementIDMax", "Stationary Element ID Max", message);
        }
      }

      this.helperService.setValidationErrorToFormControl(stationaryElementIDMaxControl, error, "stationaryElementIDMax");
      return error;
    };
  }

  // Function rotating element od max max validation
  rotatingElementODMaxValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const rotatingElementODMinControl = control.get('rotatingElementODMin');
      const rotatingElementODMaxControl = control.get('rotatingElementODMax');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;

      let maxAllowed = ((+rotatingElementODMinControl.value) + 0.005); // Inch
      if ((+currentSelectedUnit.id) === Units.MILLI_METER) {
        maxAllowed = ((+rotatingElementODMinControl.value) + 0.127)
      }

      let error = null;
      if (rotatingElementODMinControl && rotatingElementODMinControl.value && rotatingElementODMaxControl && rotatingElementODMaxControl.value) {
        const message = `Value should be equal to minimum rotating element OD or up to ${(+currentSelectedUnit.id) === Units.MILLI_METER ? ".127 mm" : ".005''"} over.`;
        error = lessThanValidation(rotatingElementODMaxControl.value, rotatingElementODMinControl.value, "rotatingElementODMax", "Rotating Element OD Max", message);
        if (!error) {
          // validate maximum allowed
          error = lessThanValidation(maxAllowed.toString(), rotatingElementODMaxControl.value, "rotatingElementODMax", "Rotating Element OD Max", message);
        }
      }

      this.helperService.setValidationErrorToFormControl(rotatingElementODMaxControl, error, "rotatingElementODMax");
      return error;
    };
  }

  // statioary element ID Minimum dimensions should not be lesser the rotating element OD Min dimensions
  stationaryMinLessThanRotatingMinValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const stationaryElementIDMinControl = control.get('stationaryElementIDMin');
      const rotatingElementODMinControl = control.get('rotatingElementODMin');

      let error = null;

      if (stationaryElementIDMinControl && stationaryElementIDMinControl.value && rotatingElementODMinControl && rotatingElementODMinControl.value) {
        const message = `Stationary element minimum value should be equal to minimum rotating element od vaule or larger.`;
        error = lessThanValidation(stationaryElementIDMinControl.value, rotatingElementODMinControl.value, "stationaryElementIDMin", "Stationary Element ID Min", message);
      }

      this.helperService.setValidationErrorToFormControl(stationaryElementIDMinControl, error, "stationaryElementIDMinShouldBeEqualOrLargerThanRotatingMin");
      return error;
    };
  }

  // statioary element ID Maximum dimensions should not be lesser the rotating element OD Maximum dimensions
  stationaryMaxLessThanRotatingMaxValidation(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const stationaryElementIDMaxControl = control.get('stationaryElementIDMax');
      const rotatingElementODMaxControl = control.get('rotatingElementODMax');

      let error = null;

      if (stationaryElementIDMaxControl && stationaryElementIDMaxControl.value && rotatingElementODMaxControl && rotatingElementODMaxControl.value) {
        const message = `Stationary element maximum value should be equal to maximum rotating element od value or larger.`;
        error = lessThanValidation(stationaryElementIDMaxControl.value, rotatingElementODMaxControl.value, "stationaryElementIDMax", "Stationary Element ID Max", message);
      }

      this.helperService.setValidationErrorToFormControl(stationaryElementIDMaxControl, error, "stationaryElementIDMaxShouldBeEqualOrLargerThanRotatingMax");
      return error;
    };
  }

  // Async Function  serviceStorageTemperatureMin validation
  asyncServiceStorageTemperatureMinValidation(): AsyncValidatorFn {
    return (control: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const compositeControl = control.get('composite');
      const serviceStorageTemperatureAmbient75FMinControl = control.get('serviceStorageTemperatureAmbient75FMin');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;

      if (compositeControl && !compositeControl.value) {
        return null;
      }

      // call API
      const body: PressInDTO = new PressInDTO(control.value);
      body.unit = currentSelectedUnit.id.toString();

      // observable
      return this._http.post(`${this.baseUrl}wrar/getMatlCheck`, body).pipe(
        map((response: any) => {
          let error = null;
          if (serviceStorageTemperatureAmbient75FMinControl
            && serviceStorageTemperatureAmbient75FMinControl.value && response) {
            error = lessThanValidation(serviceStorageTemperatureAmbient75FMinControl.value,
              response.serviceStorageTemperatureAmbientMin.toString(),
              "serviceStorageTemperatureAmbientMin",
              "Service Storage Temperature Ambient Min",
              `Minimum allowed value of \"Service / Storage Temperature\" for the selected material \"${response.matlName}\" is ${response.serviceStorageTemperatureAmbientMin}.`);
            this.helperService.setValidationErrorToFormControl(serviceStorageTemperatureAmbient75FMinControl, error, "serviceStorageTemperatureAmbientMin");
          }
          return error;
        })
      );
    };
  }

  // Async Function  serviceStorageTemperatureMax validation
  asyncServiceStorageTemperatureMaxValidation(): AsyncValidatorFn {
    return (control: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const compositeControl = control.get('composite');
      const serviceStorageTemperatureAmbient75FMaxControl = control.get('serviceStorageTemperatureAmbient75FMax');
      const currentSelectedUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;

      if (compositeControl && !compositeControl.value) {
        return null;
      }

      // call API
      const body: PressInDTO = new PressInDTO(control.value);
      body.unit = currentSelectedUnit.id.toString();

      // observable
      return this._http.post(`${this.baseUrl}wrar/getMatlCheck`, body).pipe(
        map((response: any) => {
          let error = null;
          if (serviceStorageTemperatureAmbient75FMaxControl && serviceStorageTemperatureAmbient75FMaxControl.value && response && response.serviceStorageTemperatureAmbientMax) {
            error = largerThanValidation(serviceStorageTemperatureAmbient75FMaxControl.value,
              response.serviceStorageTemperatureAmbientMax.toString(),
              "serviceStorageTemperatureAmbientMax",
              "Service Storage Temperature Ambient Max",
              `Maximum allowed value of \"Service / Storage Temperature\" for the selected material \"${response.matlName}\" is ${response.serviceStorageTemperatureAmbientMax}.`);
            this.helperService.setValidationErrorToFormControl(serviceStorageTemperatureAmbient75FMaxControl,
              error,
              "serviceStorageTemperatureAmbientMax");
          }
          return error;
        })
      );
    };
  }
}
