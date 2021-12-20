// core imports
// o-ring tool calculators module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../shared/shared.module";
import { DynamicFormModule } from "../../dynamic-form/dynamic-form.module";
import { RectangularORingCalcRoutingModule } from "../rectangular-o-ring-calc/rectangular-o-ring-calc-routing.module";
import { RectangularORingCalcComponent } from '../rectangular-o-ring-calc/rectangular-o-ring-calc.component';
import { RectangularORingCalcService } from "./rectangular-o-ring-calc.service";

@NgModule({
  declarations: [RectangularORingCalcComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RectangularORingCalcRoutingModule,
    SharedModule,
    DynamicFormModule
  ],
  providers: [RectangularORingCalcService]
})
export class RectangularORingCalcModule { }
