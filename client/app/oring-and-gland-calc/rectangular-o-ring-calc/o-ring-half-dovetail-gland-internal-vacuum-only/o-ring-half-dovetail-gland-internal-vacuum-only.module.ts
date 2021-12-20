// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../../shared/shared.module";
import { DynamicFormModule } from "../../../dynamic-form/dynamic-form.module";
import { ORingHalfDovetailGlandInternalVacuumOnlyRoutingModule } from "./o-ring-half-dovetail-gland-internal-vacuum-only-routing.module";
import { ORingHalfDovetailGlandInternalVacuumOnlyComponent } from './o-ring-half-dovetail-gland-internal-vacuum-only.component';
import { ORingHalfDovetailGlandInternalVacuumOnlyService } from "./o-ring-half-dovetail-gland-internal-vacuum-only.service";
import { ORingHalfDovetailGlandInternalVacuumOnlyValidationService } from "./o-ring-half-dovetail-gland-internal-vacuum-only-validation.service";

@NgModule({
  declarations: [ORingHalfDovetailGlandInternalVacuumOnlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DynamicFormModule,
    ORingHalfDovetailGlandInternalVacuumOnlyRoutingModule
  ],
  providers: [
    ORingHalfDovetailGlandInternalVacuumOnlyService,
    ORingHalfDovetailGlandInternalVacuumOnlyValidationService
  ]
})
export class ORingHalfDovetailGlandInternalVacuumOnlyModule { }
