// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../../shared/shared.module";
import { DynamicFormModule } from "../../../dynamic-form/dynamic-form.module";
import { ORingInternalVacuumOnlyRoutingModule } from "./o-ring-internal-vacuum-only-routing.module";
import { ORingInternalVacuumOnlyComponent } from './o-ring-internal-vacuum-only.component';
import { ORingInternalVacuumOnlyService } from "./o-ring-internal-vacuum-only.service";
import { ORingInternalVacuumOnlyValidationService } from "./o-ring-internal-vacuum-only-validation.service";

@NgModule({
  declarations: [ORingInternalVacuumOnlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ORingInternalVacuumOnlyRoutingModule,
    SharedModule,
    DynamicFormModule
  ],
  providers: [
    ORingInternalVacuumOnlyService,
    ORingInternalVacuumOnlyValidationService
  ]
})
export class ORingInternalVacuumOnlyModule {
}
