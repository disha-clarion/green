// core imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { FormGroup } from '@angular/forms';

// application imports
import { ControlType, CalculatorTypes } from '../../shared/helpers/constants';
import { BaseModel } from "../../models/base.model";
import { CalculatorModel } from "../../models/calculator.model";
import { FormControlModel } from '../../models/form-control.model';
import { RectangularORingCalcService } from "./rectangular-o-ring-calc.service";
import { ControlBaseService } from "../../shared/services/control-base.service";
import { Subscription } from 'rxjs';
import { filter } from "rxjs/operators";
import { DropDownChangeModel } from '../../models/dropdown-change.model';

@Component({
  selector: 'app-rectangular-o-ring-calc',
  templateUrl: './rectangular-o-ring-calc.component.html',
  styleUrls: ['./rectangular-o-ring-calc.component.css']
})
export class RectangularORingCalcComponent implements OnInit, OnDestroy {
  readonly O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY = "O_RING_CALCULATOR_TYPE";
  currrentSelectedCalculatorId: number = 0;
  isJSONConfigFetched: boolean = false;
  jsonConfiguration: BaseModel;
  flattenedFormControls: FormControlModel[] = [];
  controlType = ControlType;

  // calculator dropdown formgroup
  calculatorTypeDDLFormGroup: FormGroup;
  calculatorTypeDDl: FormControlModel[];
  // currentSelectedCalculator: FormControlModel;
  // subscription
  activatedRouteSubscription: Subscription;

  constructor(
    private rectangularORingCalcService: RectangularORingCalcService,
    private router: Router,
    private controlBaseService: ControlBaseService,
    private activatedRoute: ActivatedRoute
  ) {
    // get route data
    this.activatedRouteSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // console.log('route data');
      // console.log(this.activatedRoute.root);
      let calculatorId = 0;
      if (this.activatedRoute.snapshot.firstChild && this.activatedRoute.snapshot.firstChild.data) {
        calculatorId = this.activatedRoute.snapshot.firstChild.data.calculatorType;
      }

      if (calculatorId) {
        this.currrentSelectedCalculatorId = calculatorId;
      }
    });
  }

  ngOnInit(): void {
    // get JSON config from server
    this.rectangularORingCalcService.getRectangularORingCalcConfig().subscribe(
      (resp) => {
        this.isJSONConfigFetched = true;
        this.jsonConfiguration = resp as BaseModel;
        // bind calculator type ddl 
        const calculatorTypes: FormControlModel[] = [...this.getCalculatorTypeArray(this.O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY)];
        this.calculatorTypeDDl = calculatorTypes;
        // create form group for calculator dropdown - to handle the dropdown model binding using reactiveform model
        let calculatorTypeDDLGroup: FormControlModel[] = [];
        // below calculatorTypeDDLGroup.push also sets the default dropdown selection
        // create form groupd with initial value of control "calculatorTypes[0]"
        if (this.currrentSelectedCalculatorId && this.currrentSelectedCalculatorId >= 0) {

          // get calculator index by calculator id
          const getCalcuilatorindex = calculatorTypes.findIndex((calc: FormControlModel) => {
            if (calc.form_control_id === this.currrentSelectedCalculatorId) {
              return calc;
            }
          });

          // set selected calcalcutor in calculator dropdown
          if (getCalcuilatorindex) {
            calculatorTypeDDLGroup.push(calculatorTypes[getCalcuilatorindex]);
          }
          else {
            // set selected calcalcutor in calculator dropdown
            calculatorTypeDDLGroup.push(calculatorTypes[0]);
          }
        }
        else {
          // set selected calcalcutor in calculator dropdown
          calculatorTypeDDLGroup.push(calculatorTypes[0]);
        }

        // create form group with default option selection
        this.createCalculatorTypeFormGroup(calculatorTypeDDLGroup);
        // calculator change
        // send o-ring config value to subscribers
        this.rectangularORingCalcService.sendORingConfigValue(this.jsonConfiguration);
      },
      (error: HttpErrorResponse) => {
        throw new Error(error.message);
      }
    );
  }

  // component destroy handler
  ngOnDestroy(): void {
    this.isJSONConfigFetched = false;
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
  }

  // calculator types
  getCalculatorTypeArray(formControlKey: string): FormControlModel[] {
    let calculatorTypeDDl: FormControlModel[] = [];
    for (let index = 0; index < this.jsonConfiguration.calculators.length; index++) {
      const fc: FormControlModel = new FormControlModel({ form_control_id: this.jsonConfiguration.calculators[index].id, key: formControlKey, label: this.jsonConfiguration.calculators[index].display_calculator_title, value: this.jsonConfiguration.calculators[index] });
      calculatorTypeDDl.push(fc);
    }
    return calculatorTypeDDl
  };

  // create form group
  // params => formControls
  createCalculatorTypeFormGroup(formControls: FormControlModel[]) {
    // calculator type dropdown form group
    this.calculatorTypeDDLFormGroup = this.controlBaseService.toFormGroup(formControls);
  }

  // calculator change handler
  onCalculatorChange(event: DropDownChangeModel) {
    const calculator = event.value as CalculatorModel;
    switch (+(calculator.id)) {
      case CalculatorTypes.ORingInternalVacuumOnly:
        this.router.navigate(['oringgland', 'evaluateoringglands', 'createRectangularORing']);
        break;
      case CalculatorTypes.ORingDovetailGlandVacuumOnly:
        this.router.navigate(['oringgland', 'evaluateoringglands', 'createDovetailORing']);
        break;
      case CalculatorTypes.ORingHalfDovetailGlandInternalVacuumOnly:
        this.router.navigate(['oringgland', 'evaluateoringglands', 'createHalfDovetailGland']);
        break;
      case CalculatorTypes.ORingRectangularGlandExternalVacuumOnly:
        this.router.navigate(['oringgland', 'evaluateoringglands', 'createRectangleOdGland']);
        break;
      default:
        break;
    }
  }
}
