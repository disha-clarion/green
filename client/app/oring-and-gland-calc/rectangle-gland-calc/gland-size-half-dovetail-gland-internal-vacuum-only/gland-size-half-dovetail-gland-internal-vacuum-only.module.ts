// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../../shared/shared.module";
import { DynamicFormModule } from "../../../dynamic-form/dynamic-form.module";
import { GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule } from "./gland-size-half-dovetail-gland-internal-vacuum-only-routing.module";
import { GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent } from "./gland-size-half-dovetail-gland-internal-vacuum-only.component";
import { GlandSizeHalfDovetailGlandInternalVacuumOnlyService } from "./gland-size-half-dovetail-gland-internal-vacuum-only.service";

@NgModule({
  declarations: [GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DynamicFormModule,
    GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule
  ],
  providers: [
    GlandSizeHalfDovetailGlandInternalVacuumOnlyService
  ]
})
export class GlandSizeHalfDovetailGlandInternalVacuumOnlyModule { }
