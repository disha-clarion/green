// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../shared/shared.module";
import { DynamicFormModule } from "../../dynamic-form/dynamic-form.module";
import { ArWrFloatingRoutingModule } from "./ar-wr-floating-routing.module";
import { ArWrFloatingService } from "./ar-wr-floating.service";
import { ArWrFloatingValidationService } from "./ar-wr-floating-validation.service";
import { ArWrFloatingComponent } from './ar-wr-floating.component';



@NgModule({
  declarations: [ArWrFloatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArWrFloatingRoutingModule,
    SharedModule,
    DynamicFormModule
  ],
  providers: [
    ArWrFloatingService,
    ArWrFloatingValidationService
  ]
})
export class ArWrFloatingModule { }
