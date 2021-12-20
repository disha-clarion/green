// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../../shared/shared.module";
import { DynamicFormModule } from "../../../dynamic-form/dynamic-form.module";
import { GlandSizeDovetailGlandVacuumOnlyRoutingModule } from "./gland-size-dovetail-gland-vacuum-only-routing.module";
import { GlandSizeDovetailGlandVacuumOnlyComponent } from "./gland-size-dovetail-gland-vacuum-only.component";
import { GlandSizeDovetailGlandVacuumOnlyService } from "./gland-size-dovetail-gland-vacuum-only.service";

@NgModule({
  declarations: [GlandSizeDovetailGlandVacuumOnlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DynamicFormModule,
    GlandSizeDovetailGlandVacuumOnlyRoutingModule
  ],
  providers: [
    GlandSizeDovetailGlandVacuumOnlyService
  ]
})
export class GlandSizeDovetailGlandVacuumOnlyModule { }
