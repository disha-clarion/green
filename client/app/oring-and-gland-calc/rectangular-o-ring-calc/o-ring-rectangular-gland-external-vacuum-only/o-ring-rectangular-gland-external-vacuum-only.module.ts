// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../../shared/shared.module";
import { DynamicFormModule } from "../../../dynamic-form/dynamic-form.module";
import { ORingRectangularGlandExternalVacuumOnlyRoutingModule } from "./o-ring-rectangular-gland-external-vacuum-only-routing.module";
import { ORingRectangularGlandExternalVacuumOnlyComponent } from './o-ring-rectangular-gland-external-vacuum-only.component';
import { ORingRectangularGlandExternalVacuumOnlyService } from "./o-ring-rectangular-gland-external-vacuum-only.service";
import { ORingRectangularGlandExternalVacuumOnlyValidationService } from "./o-ring-rectangular-gland-external-vacuum-only-validation.service";

@NgModule({
  declarations: [ORingRectangularGlandExternalVacuumOnlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DynamicFormModule,
    ORingRectangularGlandExternalVacuumOnlyRoutingModule
  ],
  providers: [
    ORingRectangularGlandExternalVacuumOnlyService,
    ORingRectangularGlandExternalVacuumOnlyValidationService
  ]
})
export class ORingRectangularGlandExternalVacuumOnlyModule { }
