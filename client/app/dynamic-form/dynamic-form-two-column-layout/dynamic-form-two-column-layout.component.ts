// core imports
import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

// third party imports
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// application imports
import { DynamicFormTwoColumnLayoutService } from "../dynamic-form-two-column-layout/dynamic-form-two-column-layout.service";
import { CalculatorModel } from "../../models/calculator.model";
import { FormControlModel } from "../../models/form-control.model";
import { ErrorModel } from "../../models/error.model";
import { SwitchButtonModel } from '../../models/switch-button.model';
import { ORingSizesModel } from '../../models/oRingSizes.model';
import { ORingSizesDetailModel } from '../../models/oRingSizesDetail.model';
import { ViewErrorModel } from '../../models/view-error.model';
import { ControlBaseService } from "../../shared/services/control-base.service";
import { UnitButtonService } from '../../shared/components/unit-button/unit-button.service';
import { TemperatureButtonService } from "../../shared/components/temperature-button/temperature-button.service";
import { ControlType, ControlSubType, DropdownChooseOptionTitle, ButtonActionKeys, ErrorTypes, Units, supportEmail } from "../../shared/helpers/constants";
import { DashSizeDetailsService } from "../../shared/components/dash-size-details/dash-size-details.service";
import { HelperService } from "../../shared/services/helper.service";
import { DashSizeDetailsComponent } from "../../shared/components/dash-size-details/dash-size-details.component";
import { ArWrDropDownDataService } from "../../shared/services/ar-wr-drop-down-data.service";
import { DropDownChangeModel } from '../../models/dropdown-change.model';

@Component({
  selector: 'dynamic-form-two-column-layout',
  templateUrl: './dynamic-form-two-column-layout.component.html',
  styleUrls: ['./dynamic-form-two-column-layout.component.css']
})
export class DynamicFormTwoColumnLayoutComponent implements OnInit, OnDestroy {

  @Input() calculatorJSON: CalculatorModel;
  @Input() form: FormGroup;
  @Input() isSubmitted = false;
  @Input() isShowNotes = false;
  @Input() decimalPoint = 3;
  @Input() isUpdateDecimalPointOnUnitChange = true;
  @Input() isWrAr = false;
  @Input() notes = [];

  // events
  @Output() dropdownSelectionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() numericInputValueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() formValueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() focusOut: EventEmitter<any> = new EventEmitter<any>();

  supportEmail = supportEmail.EmailPressIn;
  formValueChangesSubscription: Subscription;

  private clientErrorsArr: ErrorModel[] = [];
  // client errors that doesnot prevent to submit forms/calculation
  // but need to show in client error div
  @Input() set clientErrors(val: ErrorModel[]) {
    this.clientErrorsArr = val;
    // below property call will combined form error and errors of calculation/onSubmit function
    this.getClientErrorsValidations;
  };
  get clientErrors(): ErrorModel[] {
    return this.clientErrorsArr;
  }

  // client warnings that doesnot prevent to submit forms/calculation
  // but need to show in client warnings div
  private clientWarningsArr: ErrorModel[] = [];
  @Input() set clientWarnings(val: ErrorModel[]) {
    this.clientWarningsArr = val;
    // below property call will combined form error and errors of calculation/onSubmit function
    this.getClientWarnings;
  };
  get clientWarnings(): ErrorModel[] {
    return this.clientWarningsArr;
  }

  // server errors
  private serverErrorsArr: ErrorModel[] = [];
  @Input() set serverErrors(val: ErrorModel[]) {
    this.serverErrorsArr = val;
    this.helperService.groupClientErrors(this.serverErrorsArr).then((groupedErrors: ViewErrorModel[]) => {
      // show and hide the more detail note
      const titledErrors = this.groupValidations(groupedErrors);
      this.isShowClickMoreDetailNoteForServerErrors = (titledErrors.length > 0);
      this.groupedAllServerErrors = groupedErrors;
    });
  };

  get serverErrors(): ErrorModel[] {
    return this.serverErrorsArr;
  }

  // server warnings
  private serverWarningsArr: ErrorModel[] = [];
  @Input() set serverWarnings(val: ErrorModel[]) {
    this.serverWarningsArr = val;
    this.helperService.groupClientErrors(this.serverWarningsArr).then((groupedWarnings: ViewErrorModel[]) => {
      // show and hide the more detail note    
      const titledWarnings = groupedWarnings.filter(e => {
        if (e && e.title) {
          return e;
        }
      });
      this.isShowClickMoreDetailNoteForServerWarning = (titledWarnings.length > 0);

      this.groupedAllServerWarning = groupedWarnings;
    });
  };

  get serverWarnings(): ErrorModel[] {
    return this.serverWarningsArr;
  }

  flattenedFormControls: FormControlModel[] = [];
  controlType = ControlType;
  controlSubType = ControlSubType;
  errorDetailOpened = false;
  // dropdown default choose option text/label
  dropdownChooseOptionLabel: string = undefined;
  isAddChooseOption = false;
  allClientErrors: ErrorModel[] = [];
  groupedAllClientErrors: ViewErrorModel[] = [];
  groupedAllClientWarning: ViewErrorModel[] = [];
  groupedAllServerErrors: ViewErrorModel[] = [];
  groupedAllServerWarning: ViewErrorModel[] = [];
  allClientWarnings: ErrorModel[] = [];
  isShowClickMoreDetailNoteForClientErrors = false;
  isShowClickMoreDetailNoteForClientWarning = false;
  isShowClickMoreDetailNoteForServerErrors = false;
  isShowClickMoreDetailNoteForServerWarning = false;

  // subscription
  unitChangeSubscription: Subscription;
  temperatureChangeSubscription: Subscription;

  // constructor
  constructor(
    private readonly controlBaseService: ControlBaseService,
    private readonly unitButtonService: UnitButtonService,
    private readonly temperatureButtonService: TemperatureButtonService,
    private readonly dynamicFormTwoColumnLayoutService: DynamicFormTwoColumnLayoutService,
    private readonly dashSizeDetailsService: DashSizeDetailsService,
    private readonly helperService: HelperService,
    private readonly arWrDropDownDataService: ArWrDropDownDataService
  ) {
    // unit change update calculator values handler
    this.onUnitChangeUpdateCalculator();
    // temperature change update calculator values handler
    this.onTemperatureChangeUpdateCalculator();

  }

  // component init handler
  ngOnInit(): void {
    if (this.isWrAr) {
      this.supportEmail = supportEmail.EmailWrAr;
    }
    else {
      this.supportEmail = supportEmail.EmailPressIn;
    }

    // form value changes perform operations
    // debounce keystroke events          
    this.formValueChangesSubscription = this.form.valueChanges.pipe(debounceTime(1000)).subscribe((newValue) => {
      this.getClientErrorsValidations;
      this.getClientWarnings;

      if (this.isWrAr) {
        this.formValueChange.emit();
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  // get required validation
  get isRequired(): boolean {
    let isReq = false;
    // form control objects keys
    const formControlKeys = Object.keys(this.form.controls);
    // loop through the controls and 
    for (let formControlKey of formControlKeys) {
      if (this.form.controls[formControlKey].errors?.required) {// required true
        isReq = this.form.controls[formControlKey].errors.required; // true
        break;
      }
    }
    return isReq;
  }

  /* property to get all client side form control errors and client error that need to show in 
  client error div but allow calculator calculation */
  get getClientErrorsValidations(): ErrorModel[] {
    this.allClientErrors = [];
    const controlErrorsArr: ErrorModel[] = [];
    // form control objects keys
    const formControlKeys = Object.keys(this.form.controls);
    // loop through the controls and 
    for (let index = 0; index < formControlKeys.length; index++) {
      // skip required error
      if (this.form.controls[formControlKeys[index]].errors?.required) { // required true
        continue;
      }

      // get control errors
      const controlErrors: any = this.form.controls[formControlKeys[index]].errors ? (this.form.controls[formControlKeys[index]].errors) : null;
      if (controlErrors instanceof ErrorModel) {
        // skip warnings that setted to form control and warnings that doesnot allow user to submit the form 
        if (controlErrors && controlErrors.type === ErrorTypes.Error) {
          controlErrorsArr.push(controlErrors as ErrorModel);
        }
      }
      else if (controlErrors) {
        const errorKeys = Object.keys(controlErrors);
        for (let index = 0; index < errorKeys.length; index++) {
          const error: ErrorModel = controlErrors[errorKeys[index]] as ErrorModel;
          // skip warnings that setted to form control and warnings that doesnot allow user to submit the form 
          if (error && error.type === ErrorTypes.Error) {
            controlErrorsArr.push(error);
          }
        }
      }
    }

    // merge client errors and custom client validations
    this.allClientErrors = Array.from(new Set(this.clientErrors.concat(controlErrorsArr)));

    // groupe the errors by error title
    this.helperService.groupClientErrors(this.allClientErrors).then((groupedErrors: ViewErrorModel[]) => {
      // show and hide the more detail note
      const titledErrors = this.groupValidations(groupedErrors);
      this.isShowClickMoreDetailNoteForClientErrors = titledErrors.length > 0;
      this.groupedAllClientErrors = groupedErrors;
    });

    this.allClientErrors = this.allClientErrors.slice();
    return this.allClientErrors;
  }

  // property to get client side form warnings 
  // some warning preventing form submission means do not allow user to perform form submission
  // some warnings are just informative and allow to submit form
  get getClientWarnings(): ErrorModel[] {
    this.allClientWarnings = [];
    const controlErrorsAsWarningArr: ErrorModel[] = [];
    // form control objects keys
    const formControlKeys = Object.keys(this.form.controls);
    // loop through the controls and 
    for (let index = 0; index < formControlKeys.length; index++) {
      // skip required error
      if (this.form.controls[formControlKeys[index]].errors?.required) {// required true
        continue;
      }

      // get warnings that setted to form control and warnings that doesnot allow user to submit the form 
      const controlErrorAsWarnings: any = this.form.controls[formControlKeys[index]].errors ? (this.form.controls[formControlKeys[index]].errors as ErrorModel) : null;
      if (controlErrorAsWarnings instanceof ErrorModel) {
        if (controlErrorAsWarnings && controlErrorAsWarnings.type === ErrorTypes.Warning) {
          controlErrorsAsWarningArr.push(controlErrorAsWarnings);
        }
      }
      else if (controlErrorAsWarnings) {
        const errorKeys = Object.keys(controlErrorAsWarnings);
        for (let index = 0; index < errorKeys.length; index++) {
          const warning: ErrorModel = controlErrorAsWarnings[errorKeys[index]] as ErrorModel;
          // skip warnings that setted to form control and warnings that doesnot allow user to submit the form 
          if (warning && warning.type === ErrorTypes.Warning) {
            controlErrorsAsWarningArr.push(warning);
          }
        }
      }
    }

    this.allClientWarnings = Array.from(new Set(this.clientWarnings.concat(controlErrorsAsWarningArr)));

    // group the warnings with field, title
    this.helperService.groupClientErrors(this.allClientWarnings).then((groupedErrors: ViewErrorModel[]) => {
      // show and hide the more detail note
      const titledErrors = this.groupValidations(groupedErrors);
      this.isShowClickMoreDetailNoteForClientWarning = titledErrors.length > 0;
      this.groupedAllClientWarning = groupedErrors;
    });

    this.allClientWarnings = this.allClientWarnings.slice();
    return this.allClientWarnings;
  }

  // group the errors
  private groupValidations(groupedErrors: ViewErrorModel[]): ViewErrorModel[] {
    return groupedErrors.filter(e => {
      if (e && e.title) {
        return e;
      }
    });
  }

  // calculated output result errror
  checkErrorOnCalculatedResult(formControl: FormControlModel): boolean {
    let isError = false;

    if (formControl.sub_type !== ControlSubType.calculated_label) {
      return isError;
    }

    const serverErrorIndex = this.serverErrors.findIndex((se: ErrorModel) => {
      return se.field === formControl.key;
    });

    const serverWarningIndex = this.serverWarnings.findIndex((se: ErrorModel) => {
      return se.field === formControl.key;
    });

    if (serverErrorIndex > -1 || serverWarningIndex > -1) {
      isError = true;
    }

    return isError;
  }

  // helper methods
  // columnWidth 
  // param => columnLength => accepts number of columns in a row
  // returns the bootstrap col classes with equal width
  columnWidth(columnLength: number, classes?: string[]): string {
    let classesStr = "";
    if (classes) {
      classesStr = classes.join(' ');
    }
    const colWidth = this.getSizeNumber(columnLength);
    return `col-12 	col-sm-12 	col-md-${colWidth} 	col-lg-${colWidth} 	col-xl-${colWidth} ${classesStr}`;
  };

  // column column size
  getSizeNumber(columnLength: number): number {
    return this.controlBaseService.getColumnNumber(columnLength)
  }

  // show client error
  onShowClientError(index: number): boolean {
    return this.allClientErrors[index].isDetailOpened = !this.allClientErrors[index].isDetailOpened;
  }

  // show grouped client error
  onShowGroupedClientError(index: number): boolean {
    return this.groupedAllClientErrors[index].isDetailOpened = !this.groupedAllClientErrors[index].isDetailOpened;
  }

  // show grouped client warning
  onShowGroupedClientWarning(index: number): boolean {
    return this.groupedAllClientWarning[index].isDetailOpened = !this.groupedAllClientWarning[index].isDetailOpened;
  }

  // show client warning
  onShowClientWarning(index: number): boolean {
    return this.allClientWarnings[index].isDetailOpened = !this.allClientWarnings[index].isDetailOpened;
  }

  // show server error
  onShowServerError(index: number): boolean {
    return this.serverErrors[index].isDetailOpened = !this.serverErrors[index].isDetailOpened;
  }

  // show grouped server Error
  onShowGroupedServerError(index: number): boolean {
    return this.groupedAllServerErrors[index].isDetailOpened = !this.groupedAllServerErrors[index].isDetailOpened;
  }

  // show server warning
  onShowServerWarning(index: number): boolean {
    return this.serverWarnings[index].isDetailOpened = !this.serverWarnings[index].isDetailOpened;
  }

  // show grouped server warning
  onShowGroupedServerWarning(index: number): boolean {
    return this.groupedAllServerWarning[index].isDetailOpened = !this.groupedAllServerWarning[index].isDetailOpened;
  }

  // get dropdownlist options
  getDDLOptions(formControlKey: string, ddlType: string, listItem: any[] = []) {
    let ddlOptions: FormControlModel[] = [];
    let tempDDLItems: FormControlModel[] = [];
    let isMaterialChoice = false;

    switch (ddlType) {
      case ControlSubType.material_choice_dropdown:
        isMaterialChoice = true;
        this.dropdownChooseOptionLabel = DropdownChooseOptionTitle.MaterialChoiceDropdown;
        this.isAddChooseOption = true;
        ddlOptions = [...this.helperService.getMaterialChoiceList(formControlKey)];
        break;
      case ControlSubType.arWrPumptypeDropdown:
        this.dropdownChooseOptionLabel = DropdownChooseOptionTitle.DefaultDropdown;
        this.isAddChooseOption = true;
        tempDDLItems = this.arWrDropDownDataService.getDropdownsItemsByKey(ControlSubType.arWrPumptypeDropdown);
        break;
      case ControlSubType.arWrComponenttypeDropdown:
        this.dropdownChooseOptionLabel = DropdownChooseOptionTitle.DefaultDropdown;
        this.isAddChooseOption = true;
        tempDDLItems = this.arWrDropDownDataService.getDropdownsItemsByKey(ControlSubType.arWrComponenttypeDropdown);
        break;
      case ControlSubType.arWrCompositetypeDropdown:
        this.dropdownChooseOptionLabel = DropdownChooseOptionTitle.DefaultDropdown;
        // // tempDDLItems = this.arWrDropDownDataService.getDropdownsItemsByKey(ControlSubType.arWrCompositetypeDropdown);
        // list item or options are passed from calculator option property        
        if (listItem && listItem.length > 0) {
          tempDDLItems = [...tempDDLItems, ...listItem];
        }
        break;
      case ControlSubType.arWrInterFerenceTargetPressInDropdown:
        this.dropdownChooseOptionLabel = DropdownChooseOptionTitle.DefaultDropdown;
        this.isAddChooseOption = true;
        tempDDLItems = this.arWrDropDownDataService.getDropdownsItemsByKey(ControlSubType.arWrInterFerenceTargetPressInDropdown);
        break;
      case ControlSubType.arWrClearanceTargetDropdown:
        this.dropdownChooseOptionLabel = DropdownChooseOptionTitle.DefaultDropdown;
        this.isAddChooseOption = true;
        tempDDLItems = this.arWrDropDownDataService.getDropdownsItemsByKey(ControlSubType.arWrClearanceTargetDropdown);
        break;
      case ControlSubType.arWrRotatingMaterial:
        this.dropdownChooseOptionLabel = DropdownChooseOptionTitle.DefaultDropdown;
        this.isAddChooseOption = true;
        tempDDLItems = this.arWrDropDownDataService.getDropdownsItemsByKey(ControlSubType.arWrRotatingMaterial);
        break;
      case ControlSubType.arWrStationaryMaterial:
        this.dropdownChooseOptionLabel = DropdownChooseOptionTitle.DefaultDropdown;
        this.isAddChooseOption = true;
        tempDDLItems = this.arWrDropDownDataService.getDropdownsItemsByKey(ControlSubType.arWrStationaryMaterial);
        break;
      default:
        break;
    }

    if (!isMaterialChoice) {
      ddlOptions = this.helperService.getDropdownItems(formControlKey, tempDDLItems);
    }
    return ddlOptions;
  }

  // unit change update output values handler
  onUnitChangeUpdateCalculator() {
    // unit switch button click/change subscription
    this.unitChangeSubscription = this.unitButtonService.unit$.subscribe((x: SwitchButtonModel) => {
      if (x) {
        // update units of labels of inputs and labels 
        this.dynamicFormTwoColumnLayoutService.updateUnitOfInputControlLabels(x);
        // convert form output labels
        this.dynamicFormTwoColumnLayoutService.convertOutputLabel(x);
      }
    });
  }

  // temperature change update output values handler
  onTemperatureChangeUpdateCalculator() {
    // unit switch button click/change subscription
    this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe((x: SwitchButtonModel) => {
      if (x) {
        this.dynamicFormTwoColumnLayoutService.updateTemperatureOfInputControlLabels(x);
      }
    });
  }

  // button click handler
  buttonClick(e: any, formControl: FormControlModel) {
    // form control type button value work as key for action method
    switch (formControl.value) {
      case ButtonActionKeys.DashSizeDetail:
        // get dash sizes from server
        this.dashSizeDetailsService.getDashSizeDetails().subscribe((oRingSizes: ORingSizesModel) => {
          if (oRingSizes) {
            // send value to subject so subscribers can get the value
            this.dashSizeDetailsService.sendORingSizes(oRingSizes);
            // open the modal of dashSizes
            const dashSizeDetailsComponentModalRef = this.helperService.openNgbModal(DashSizeDetailsComponent);
            // row click event subscription
            dashSizeDetailsComponentModalRef.componentInstance.dashSizeRowClick.subscribe((x: ORingSizesDetailModel) => {
              if (x) {
                this.bindFormControlForORingDashSizes(x);
              }
              dashSizeDetailsComponentModalRef.close();
            });
          }
        });
        break;
      default:
        break;
    }
  }

  // bind form controls based in the dash size selection
  private bindFormControlForORingDashSizes(dashSizes: ORingSizesDetailModel) {
    this.form.patchValue({
      dashSize: (+dashSizes.dashSize).toFixed(this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3),
      oringCrossSectionNominal: (+dashSizes.oringCrossSectionSize).toFixed(this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3),
      oringIdNominal: (+dashSizes.oringDiameterSize).toFixed(this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3),
      glandIdNominal: (+dashSizes.glandIdSize).toFixed(this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3),
      glandIdTolerance: (+dashSizes.glandIdTolerance).toFixed(this.unitButtonService.getCurrentUnitValue.id === Units.MILLI_METER ? 2 : 3)
    });
  }

  // dropdown selection change handler
  // perform any operation on dropdown value changes
  onDropdownSelectionChange(event: DropDownChangeModel) {
    const controlKey = `custom${event.formControl.key.replace(event.formControl.key[0], event.formControl.key[0].toUpperCase())}`;
    const fc = this.form.controls[controlKey];
    if (fc) {
      // when dropdown selected item value is null 
      // then enable the custom input with id/key 'custom+{{dropdown key}}'
      if (event.value !== null && event.value && event.value.value > 0) { // standard 
        fc.setValue("");
        fc.disable();
      }
      else { // custom
        fc.enable();
      }
    }
    this.dropdownSelectionChange.emit(event);
  }

  // numeric value change handler
  // perform any operation on dropdown value changes
  onNumericInputValueChange(event: any) {
    // event is typeof FormControl
    this.numericInputValueChange.emit(event);
  }

  // on focus out event of the numeric input
  onFocusOut(event: any) {
    this.focusOut.emit(event);
  }

  // on component destriy handler
  ngOnDestroy(): void {
    if (this.unitChangeSubscription) {
      this.unitChangeSubscription.unsubscribe();
    }
    if (this.temperatureChangeSubscription) {
      this.temperatureChangeSubscription.unsubscribe();
    }
    if (this.formValueChangesSubscription) {
      this.formValueChangesSubscription.unsubscribe();
    }
  }
}
