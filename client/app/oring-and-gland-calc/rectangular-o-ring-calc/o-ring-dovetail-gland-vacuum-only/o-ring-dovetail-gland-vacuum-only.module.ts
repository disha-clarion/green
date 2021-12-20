// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../../shared/shared.module";
import { DynamicFormModule } from "../../../dynamic-form/dynamic-form.module";
import { ORingDovetailGlandVacuumOnlyRoutingModule } from "./o-ring-dovetail-gland-vacuum-only-routing.module";
import { ORingDovetailGlandVacuumOnlyComponent } from '../o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.component';
import { ORingDovetailGlandVacuumOnlyService } from "./o-ring-dovetail-gland-vacuum-only.service";
import { ORingDovetailGlandVacuumOnlyValidationService } from "./o-ring-dovetail-gland-vacuum-only-validation.service";

@NgModule({
  declarations: [ORingDovetailGlandVacuumOnlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DynamicFormModule,
    ORingDovetailGlandVacuumOnlyRoutingModule
  ],
  providers: [
    ORingDovetailGlandVacuumOnlyService,
    ORingDovetailGlandVacuumOnlyValidationService
  ]
})
export class ORingDovetailGlandVacuumOnlyModule { }
