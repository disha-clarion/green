// core imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// application imports
import { DynamicFormTwoColumnLayoutComponent } from './dynamic-form-two-column-layout/dynamic-form-two-column-layout.component';
import { DynamicFormTwoColumnLayoutService } from "./dynamic-form-two-column-layout/dynamic-form-two-column-layout.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    DynamicFormTwoColumnLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    DynamicFormTwoColumnLayoutComponent
  ],
  providers: [DynamicFormTwoColumnLayoutService]
})
export class DynamicFormModule { }
