// core imports
// o-ring tool calculators module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../shared/shared.module";
import { DynamicFormModule } from "../dynamic-form/dynamic-form.module";
import { HeaderComponent } from "./header/header.component";
import { ArWrCalcRoutingModule } from "./ar-wr-calc-routing.module";
import { ArWrCalcComponent } from './ar-wr-calc.component';
import { ArWrCalcService } from "./ar-wr-calc.service";

@NgModule({
  declarations: [
    ArWrCalcComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArWrCalcRoutingModule,
    SharedModule,
    DynamicFormModule
  ],
  providers: [ArWrCalcService]
})
export class ArWrCalcModule { }
