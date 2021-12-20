// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../../shared/shared.module";
import { DynamicFormModule } from "../../../dynamic-form/dynamic-form.module";
import { GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule } from "./gland-size-rectangular-gland-external-vacuum-only-routing.module";
import { GlandSizeRectangularGlandExternalVacuumOnlyComponent } from "./gland-size-rectangular-gland-external-vacuum-only.component";
import { GlandSizeRectangularGlandExternalVacuumOnlyService } from "./gland-size-rectangular-gland-external-vacuum-only.service";

@NgModule({
  declarations: [GlandSizeRectangularGlandExternalVacuumOnlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DynamicFormModule,
    GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule
  ],
  providers: [
    GlandSizeRectangularGlandExternalVacuumOnlyService
  ]
})
export class GlandSizeRectangularGlandExternalVacuumOnlyModule { }
