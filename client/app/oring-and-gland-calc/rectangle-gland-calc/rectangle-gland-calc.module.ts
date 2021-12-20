// core imports
// Gland Size Calculator module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../shared/shared.module";
import { DynamicFormModule } from "../../dynamic-form/dynamic-form.module";
import { RectangleGlandCalcRoutingModule } from "./rectangle-gland-calc-routing.module";
import { RectangleGlandCalcComponent } from '../rectangle-gland-calc/rectangle-gland-calc.component';
import { RectangleGlandCalcService } from "./rectangle-gland-calc.service";
import { RectangleGlandCalcValidationService } from "./rectangle-gland-calc-validation.service";

@NgModule({
  declarations: [RectangleGlandCalcComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RectangleGlandCalcRoutingModule,
    SharedModule,
    DynamicFormModule
  ],
  providers: [
    RectangleGlandCalcService,
    RectangleGlandCalcValidationService
  ]
})
export class RectangleGlandCalcModule { }
