// core imports
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// third party imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// application imports
import { UnitButtonComponent } from './components/unit-button/unit-button.component';
import { TemperatureButtonComponent } from './components/temperature-button/temperature-button.component';
import { UnitButtonService } from './components/unit-button/unit-button.service';
import { TemperatureButtonService } from './components/temperature-button/temperature-button.service';
import { TextboxComponent } from "./components/custom-controls/textbox/textbox.component";
import { SwitchButtonComponent } from './components/custom-controls/switch-button/switch-button.component';
import { DropDownComponent } from './components/custom-controls/drop-down/drop-down.component';
import { CalculatorToolbarComponent } from './components/calculator-toolbar/calculator-toolbar.component';
import { UserRulesComponent } from './components/user-rules/user-rules.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { NumericTextboxComponent } from "./components/custom-controls/numeric-textbox/numeric-textbox.component";
import { DashSizeDetailsComponent } from './components/dash-size-details/dash-size-details.component';
import { DashSizeDetailsService } from "./components/dash-size-details/dash-size-details.service";
import { NumericDirective } from './directives/numeric.directive';
import { MaterialChoiceService } from "./services/material-choice.service";
import { CustomValidationService } from "./services/custom-validation.service";
import { ControlBaseService } from "./services/control-base.service";
import { PrintService } from "./services/print.service";
import { ErrorService } from "./services/error.service";
import { GlobalErrorHandler } from "./services/global-error-handler";
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';
import { ToastService } from "./components/toasts-container/toast-service";
import { CalculatorToolbarService } from "./components/calculator-toolbar/calculator-toolbar.service";
import { LoggerService } from "./services/logger.service";
import { MeasureButtonComponent } from './components/measure-button/measure-button.component';
import { ArWrDropDownDataService } from "./services/ar-wr-drop-down-data.service";
import { TabNavComponent } from "./components/tab-nav/tab-nav.component";

@NgModule({
  declarations: [
    TextboxComponent,
    SwitchButtonComponent,
    DropDownComponent,
    CalculatorToolbarComponent,
    UserRulesComponent,
    AlertModalComponent,
    NumericDirective,
    NumericTextboxComponent,
    UnitButtonComponent,
    TemperatureButtonComponent,
    DashSizeDetailsComponent,
    ToastsContainerComponent,
    MeasureButtonComponent,
    TabNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    TextboxComponent,
    SwitchButtonComponent,
    DropDownComponent,
    CalculatorToolbarComponent,
    UserRulesComponent,
    AlertModalComponent,
    NumericDirective,
    NumericTextboxComponent,
    UnitButtonComponent,
    TemperatureButtonComponent,
    DashSizeDetailsComponent,
    ToastsContainerComponent,
    MeasureButtonComponent,
    TabNavComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DecimalPipe,
        CustomValidationService,
        ControlBaseService,
        UnitButtonService,
        TemperatureButtonService,
        MaterialChoiceService,
        DashSizeDetailsService,
        PrintService,
        ErrorService,
        GlobalErrorHandler,
        ToastService,
        CalculatorToolbarService,
        LoggerService,
        ArWrDropDownDataService
      ]
    };
  }
}
