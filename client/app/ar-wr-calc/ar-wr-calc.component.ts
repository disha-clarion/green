// core imports
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { FormGroup } from '@angular/forms';

// third party imports
import { Subscription } from 'rxjs';
import { filter } from "rxjs/operators";

// application imports
import { ControlType, Units, Temperature } from '../shared/helpers/constants';
import { BaseModel } from "../models/base.model";
import { FormControlModel } from '../models/form-control.model';
import { ArWrCalcService } from "./ar-wr-calc.service";
import { TabModel } from '../models/tab.model';
import { SwitchButtonModel } from '../models/switch-button.model';
import { ControlBaseService } from "../shared/services/control-base.service";
import { ArWrDropDownDataService } from '../shared/services/ar-wr-drop-down-data.service';
import { UnitButtonService } from "../shared/components/unit-button/unit-button.service";
import { TemperatureButtonService } from "../shared/components/temperature-button/temperature-button.service";
import { HelperService } from "../shared/services/helper.service";

@Component({
  selector: 'app-ar-wr-calc',
  templateUrl: './ar-wr-calc.component.html',
  styleUrls: ['./ar-wr-calc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArWrCalcComponent implements OnInit, OnDestroy {

  readonly O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY = "WrAr_CALCULATOR_TYPE";
  previuosSelectedCalculatorId = 0;
  currrentSelectedCalculatorId = 0;
  isJSONConfigFetched = false;
  jsonConfiguration: BaseModel;
  flattenedFormControls: FormControlModel[] = [];
  controlType = ControlType;
  wrArTabs: TabModel[] = [
    { linkLabel: "Press-In", rootModuleRoute: "pressin", childrenModuleRoute: "/wrar/pressin", pathExactmatch: true },
    { linkLabel: "Floating", rootModuleRoute: "floating", childrenModuleRoute: "/wrar/floating", pathExactmatch: true }];

  // calculator dropdown formgroup
  calculatorTypeDDLFormGroup: FormGroup;
  calculatorTypeDDl: FormControlModel[];
  // currentSelectedCalculator: FormControlModel;
  defaultMeasure: SwitchButtonModel = null;
  // subscription
  activatedRouteSubscription: Subscription;

  constructor(
    private readonly arWrCalcService: ArWrCalcService,
    private readonly router: Router,
    private readonly controlBaseService: ControlBaseService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly arWrDropDownDataService: ArWrDropDownDataService,
    private readonly unitButtonService: UnitButtonService,
    private readonly temperatureButtonService: TemperatureButtonService,
    private readonly helperService: HelperService
  ) {
    // get route data
    this.activatedRouteSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let calculatorId = 0;
      if (this.activatedRoute.snapshot.firstChild && this.activatedRoute.snapshot.firstChild.data) {
        calculatorId = this.activatedRoute.snapshot.firstChild.data.calculatorType;
      }

      if (calculatorId) {
        this.previuosSelectedCalculatorId = this.currrentSelectedCalculatorId;
        this.currrentSelectedCalculatorId = calculatorId;
        this.defaultMeasure = this.helperService.setDefaultMeasure();
      }
    });
  }

  // component destroy handler
  ngOnDestroy(): void {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.initializeComponent();
    this.getDropdownItems();
    this.setInitialTemperature();
  }

  initializeComponent() {
    // get JSON config from server
    this.arWrCalcService.getArWrPressInCalcConfig().subscribe(
      (resp) => {
        this.isJSONConfigFetched = true;
        this.jsonConfiguration = resp as BaseModel;
        // bind calculator type ddl 
        // // const calculatorTypes: FormControlModel[] = [...this.getCalculatorTypeArray(this.O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY)];
        // // this.calculatorTypeDDl = calculatorTypes;
        // create form group for calculator dropdown - to handle the dropdown model binding using reactiveform model
        const calculatorTypeDDLGroup: FormControlModel[] = [];
        // below calculatorTypeDDLGroup.push also sets the default dropdown selection
        // create form groupd with initial value of control "calculatorTypes[0]"
        // if (this.currrentSelectedCalculatorId && this.currrentSelectedCalculatorId >= 0) {

        // get calculator index by calculator id
        //   const getCalcuilatorindex = calculatorTypes.findIndex((calc: FormControlModel) => {
        //     if (calc.form_control_id === this.currrentSelectedCalculatorId) {
        //       return calc;
        //     }
        //   });

        //   // set selected calcalcutor in calculator dropdown
        //   if (getCalcuilatorindex) {
        //     calculatorTypeDDLGroup.push(calculatorTypes[getCalcuilatorindex]);
        //   }
        //   else {
        //     // set selected calcalcutor in calculator dropdown
        //     calculatorTypeDDLGroup.push(calculatorTypes[0]);
        //   }
        // }
        // else {
        //   // set selected calcalcutor in calculator dropdown
        //   calculatorTypeDDLGroup.push(calculatorTypes[0]);
        // }

        // create form group with default option selection
        // this.createCalculatorTypeFormGroup(calculatorTypeDDLGroup);
        // calculator change
        // send o-ring config value to subscribers
        this.arWrCalcService.sendArWrConfigValue(this.jsonConfiguration);
      },
      (error: HttpErrorResponse) => {
        throw new Error(error.message);
      }
    );
  }

  // get material choice
  getDropdownItems() {
    this.arWrDropDownDataService.getDropdownItems().subscribe((resp: any[]) => {
      this.arWrDropDownDataService.sendDropdownItems(resp);
    });
  }

  // set initial temperature for currently selected Unit => Imperial / Metric
  setInitialTemperature() {
    const currentUnit: SwitchButtonModel = this.unitButtonService.getCurrentUnitValue;
    const currentTemp: SwitchButtonModel = this.temperatureButtonService.getCurrentTemperatureValue;
    if (currentUnit && currentUnit.id > 0 && currentUnit.id === Units.INCH) {
      if (currentTemp && currentTemp.id > 0 && currentTemp.id !== Temperature.FAHRENHEIT) {
        this.helperService.setAndSendTemperatureManually(Temperature.FAHRENHEIT);
      }
    }
    else if (currentUnit && currentUnit.id > 0 && currentUnit.id === Units.MILLI_METER) {
      if (currentTemp && currentTemp.id > 0 && currentTemp.id !== Temperature.CELCIUS) {
        this.helperService.setAndSendTemperatureManually(Temperature.CELCIUS);
      }
    }
    else {
      this.helperService.setAndSendTemperatureManually(Temperature.CELCIUS);
    }
  }
}
