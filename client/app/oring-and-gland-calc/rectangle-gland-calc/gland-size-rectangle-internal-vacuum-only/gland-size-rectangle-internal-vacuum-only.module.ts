// core improts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { SharedModule } from "../../../shared/shared.module";
import { DynamicFormModule } from "../../../dynamic-form/dynamic-form.module";
import { GlandSizeRectangleInternalVacuumOnlyRoutingModule } from "./gland-size-rectangle-internal-vacuum-only-routing.module";
import { GlandSizeRectangleInternalVacuumOnlyComponent } from './gland-size-rectangle-internal-vacuum-only.component';
import { GlandSizeRectangleInternalVacuumOnlyService } from "./gland-size-rectangle-internal-vacuum-only.service";

@NgModule({
  declarations: [GlandSizeRectangleInternalVacuumOnlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GlandSizeRectangleInternalVacuumOnlyRoutingModule,
    SharedModule,
    DynamicFormModule
  ],
  providers: [
    GlandSizeRectangleInternalVacuumOnlyService
  ]
})
export class GlandSizeRectangleInternalVacuumOnlyModule { }
