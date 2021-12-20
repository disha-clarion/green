// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../shared/shared.module";
import { DynamicFormModule } from "../../dynamic-form/dynamic-form.module";
import { ArWrPressInRoutingModule } from "./ar-wr-press-in-routing.module";
import { ArWrPressInComponent } from './ar-wr-press-in.component';
import { ArWrPressInService } from "./ar-wr-press-in.service";
import { ArWrPressInValidationService } from "./ar-wr-press-in-validation.service";

@NgModule({
  declarations: [ArWrPressInComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArWrPressInRoutingModule,
    SharedModule,
    DynamicFormModule
  ],
  providers: [
    ArWrPressInService,
    ArWrPressInValidationService
  ]
})
export class ArWrPressInModule { }
