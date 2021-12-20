// core imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../shared/shared.module";
import { DynamicFormModule } from "../dynamic-form/dynamic-form.module";
import { ORingAndGlandCalcRoutingModule } from './oring-and-gland-calc-routing.module';
import { HeaderComponent } from "./header/header.component";
import { OringAndGlandCalcComponent } from './oring-and-gland-calc.component';

@NgModule({
  declarations: [
    OringAndGlandCalcComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DynamicFormModule,
    ORingAndGlandCalcRoutingModule
  ]
})
export class ORingAndGlandCalcModule { }
