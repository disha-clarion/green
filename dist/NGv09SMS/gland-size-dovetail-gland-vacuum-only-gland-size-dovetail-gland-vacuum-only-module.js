(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gland-size-dovetail-gland-vacuum-only-gland-size-dovetail-gland-vacuum-only-module"],{

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only-routing.module.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only-routing.module.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: GlandSizeDovetailGlandVacuumOnlyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeDovetailGlandVacuumOnlyRoutingModule", function() { return GlandSizeDovetailGlandVacuumOnlyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _gland_size_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gland-size-dovetail-gland-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.component.ts");





var routes = [
    {
        path: '', component: _gland_size_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__["GlandSizeDovetailGlandVacuumOnlyComponent"], pathMatch: 'full'
    }
];
var GlandSizeDovetailGlandVacuumOnlyRoutingModule = /** @class */ (function () {
    function GlandSizeDovetailGlandVacuumOnlyRoutingModule() {
    }
    GlandSizeDovetailGlandVacuumOnlyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlandSizeDovetailGlandVacuumOnlyRoutingModule });
    GlandSizeDovetailGlandVacuumOnlyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlandSizeDovetailGlandVacuumOnlyRoutingModule_Factory(t) { return new (t || GlandSizeDovetailGlandVacuumOnlyRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return GlandSizeDovetailGlandVacuumOnlyRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeDovetailGlandVacuumOnlyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeDovetailGlandVacuumOnlyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: GlandSizeDovetailGlandVacuumOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeDovetailGlandVacuumOnlyComponent", function() { return GlandSizeDovetailGlandVacuumOnlyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./client/app/shared/services/auth.service.ts");
/* harmony import */ var _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rectangle-gland-calc.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.service.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts");
/* harmony import */ var _shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/print.service */ "./client/app/shared/services/print.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rectangle-gland-calc-validation.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-validation.service.ts");
/* harmony import */ var _gland_size_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gland-size-dovetail-gland-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/toasts-container/toast-service */ "./client/app/shared/components/toasts-container/toast-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/user-rules/user-rules.component */ "./client/app/shared/components/user-rules/user-rules.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/calculator-toolbar/calculator-toolbar.component */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts");

// core imports

// third party imports



















function GlandSizeDovetailGlandVacuumOnlyComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function GlandSizeDovetailGlandVacuumOnlyComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.onSubmit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "calculator-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reset", function GlandSizeDovetailGlandVacuumOnlyComponent_form_2_Template_calculator_toolbar_reset_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onReset(); })("print", function GlandSizeDovetailGlandVacuumOnlyComponent_form_2_Template_calculator_toolbar_print_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onPrint(); })("copy", function GlandSizeDovetailGlandVacuumOnlyComponent_form_2_Template_calculator_toolbar_copy_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onCopy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dynamic-form-two-column-layout", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("form-horizontal ", ctx_r0.calculatorConfig.form.form_title_css_class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.glandSizeDovetailGlandForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx_r0.glandSizeDovetailGlandForm)("control", ctx_r0.calculatorConfig.toolbarOption)("isSubmitted", ctx_r0.isSubmitted)("isShowCopyBtn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx_r0.glandSizeDovetailGlandForm)("isSubmitted", ctx_r0.isSubmitted)("calculatorJSON", ctx_r0.calculatorConfig)("clientErrors", ctx_r0.clientErrors)("clientWarnings", ctx_r0.clientWarnings)("serverErrors", ctx_r0.serverErrors)("serverWarnings", ctx_r0.serverWarnings);
} }
var GlandSizeDovetailGlandVacuumOnlyComponent = /** @class */ (function () {
    function GlandSizeDovetailGlandVacuumOnlyComponent(controlBaseService, authService, rectangleGlandCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, rectangleGlandCalcValidationService, glandSizeDovetailGlandVacuumOnlyService, helperService, toastService) {
        var _this = this;
        this.controlBaseService = controlBaseService;
        this.authService = authService;
        this.rectangleGlandCalcService = rectangleGlandCalcService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.printService = printService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.rectangleGlandCalcValidationService = rectangleGlandCalcValidationService;
        this.glandSizeDovetailGlandVacuumOnlyService = glandSizeDovetailGlandVacuumOnlyService;
        this.helperService = helperService;
        this.toastService = toastService;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlType"];
        this.isSubmitted = false;
        this.payLoad = '';
        this.bottomRadiiMaxLimit = 0.035;
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        // get gland-size-dovetail-gland-vacuum-only config value from O-Ring JSON 
        var rectangleJSONConfig = this.rectangleGlandCalcService.getCurrentGlandSizeCalcConfigValue;
        // gland-size calculator config subscription
        if (rectangleJSONConfig) {
            this.initializeOringConfig(rectangleJSONConfig);
        }
        else {
            this.glandSizeDataSubscription = this.rectangleGlandCalcService.glandSizeCalcConfig$.subscribe(function (x) {
                if (x) {
                    _this.initializeOringConfig(x);
                }
            });
        }
        // unit change update calculator values handler
        this.onUnitChangeUpdateCalculator();
        // temperature change perform operations
        this.onTemperatureChangeUpdateCalculator();
    }
    Object.defineProperty(GlandSizeDovetailGlandVacuumOnlyComponent.prototype, "CalculatedData", {
        get: function () {
            return this.calculatedData;
        },
        set: function (val) {
            this.calculatedData = val;
            var currentUnit = this.unitButtonService.getCurrentUnitValue;
            if (this.calculatedData && this.calculatedData.unit && currentUnit && (+currentUnit.id) !== (+this.calculatedData.unit)) {
                this.calculatedData.unit = currentUnit.id.toString();
                var keys = Object.keys(this.calculatedData);
                for (var index = 0; index < keys.length; index++) {
                    // do not convert the glandAngle calculated result
                    if (keys[index] === "glandAngleNominal") {
                        continue;
                    }
                    if ((+currentUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                        this.calculatedData[keys[index]] = this.helperService.convertToMillimeter((+this.calculatedData[keys[index]]));
                    }
                    else {
                        this.calculatedData[keys[index]] = this.helperService.convertToInch((+this.calculatedData[keys[index]]));
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    // initialize gland-size-dovetail-gland-vacuum-only calculator by json config param
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.initializeOringConfig = function (glandSizeJsonConfig) {
        // calculator - gland-size-dovetail-gland-vacuum-only
        var glandSizeDovetailGlandVacuumOnly = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, glandSizeJsonConfig.calculators[1]);
        this.calculatorConfig = glandSizeDovetailGlandVacuumOnly;
        // send calculator to dynamic form service
        this.dynamicFormTwoColumnLayoutService.sendCalculator(glandSizeDovetailGlandVacuumOnly);
        // create form
        this.createForm();
    };
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.ngOnInit = function () {
        this.CalculatedData = null;
    };
    // form control changes subcription and update the graph data
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.getControlValue = function (fieldName) {
        if (this.glandSizeDovetailGlandForm
            && this.glandSizeDovetailGlandForm.controls[fieldName]
            && this.glandSizeDovetailGlandForm.controls[fieldName].value) {
            return (+this.glandSizeDovetailGlandForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3);
        }
    };
    // get calculated field values by fieldname
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.getCalculatedControlValue = function (fieldName) {
        if (this.CalculatedData) {
            var fieldValue = this.CalculatedData[fieldName];
            if (fieldValue) {
                return (+fieldValue).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3);
            }
        }
    };
    // unit change update output values handler
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.onUnitChangeUpdateCalculator = function () {
        var _this = this;
        // unit switch button click/change subscription
        this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            if (x) {
                if (x.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                    // millimeter
                    _this.bottomRadiiMaxLimit = 0.89; //0.035 * 25.40;
                }
                else {
                    // Inch
                    _this.bottomRadiiMaxLimit = 0.035;
                }
                // calculated change detection when by changing the object
                if (_this.CalculatedData) {
                    _this.CalculatedData = Object.assign({}, _this.CalculatedData);
                }
                // convert the form data
                var convertedForm = _this.helperService.convertFormUnitControlValuesAndSet((_this.calculatorConfig && _this.calculatorConfig.form ? _this.calculatorConfig.form : null), _this.glandSizeDovetailGlandForm, x);
                if (convertedForm) {
                    _this.glandSizeDovetailGlandForm = convertedForm;
                }
                /// recalculate the data
                _this.onSubmit();
            }
        });
    };
    // create form group
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.createForm = function () {
        var _this = this;
        // get form controls nested array
        var leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.glandSizeDovetailGlandForm, this.calculatorConfig.form.left_column.form_layout_row);
        var rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.glandSizeDovetailGlandForm, this.calculatorConfig.form.right_column.form_layout_row);
        // make form control flatten array
        this.flattenedFormControls = [];
        // add calculator toolbar option
        this.flattenedFormControls.push(this.calculatorConfig.toolbarOption);
        this.flattenedFormControls = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.flattenedFormControls, this.controlBaseService.flatten(leftFormControls));
        this.flattenedFormControls = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.flattenedFormControls, this.controlBaseService.flatten(rightFormControls));
        // exclude formcontrol which is type of label
        var filteredControls = this.flattenedFormControls.filter(function (fc) {
            // exclude labels and buttons from formgroup
            if (fc && fc.type !== _this.controlType.label && fc.type !== _this.controlType.button) {
                return fc;
            }
        });
        this.glandSizeDovetailGlandForm = this.controlBaseService.toFormGroup(filteredControls);
        // get and set validations
        var validations = [];
        // get validation key from json config object
        var jsonConfigValidationsArray = this.calculatorConfig.form.form_validation;
        for (var index = 0; index < jsonConfigValidationsArray.length; index++) {
            var validationFuncKey = jsonConfigValidationsArray[index];
            switch (validationFuncKey) {
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["GlandSizeCalc_DovetailGlandVacuumOnly_Validators"].OPERATING_TEMPERATURE_VALIDATION:
                    validations.push(this.rectangleGlandCalcValidationService.operatingTemperatureValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["GlandSizeCalc_DovetailGlandVacuumOnly_Validators"].O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION:
                    validations.push(this.rectangleGlandCalcValidationService.oringCrossSectionNominalValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["GlandSizeCalc_DovetailGlandVacuumOnly_Validators"].ORING_ID_AS568A_STANDARD_WARNING:
                    validations.push(this.rectangleGlandCalcValidationService.oRingIDAS568AStandardsWarning());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["GlandSizeCalc_DovetailGlandVacuumOnly_Validators"].O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION:
                    validations.push(this.rectangleGlandCalcValidationService.oringIDNominalLargerThanMaxOringIDValidation());
                    break;
            }
        }
        // set custom validations with params
        this.glandSizeDovetailGlandForm.setValidators(validations);
    };
    // form submit event
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.onSubmit = function (isSubmitted) {
        var _this = this;
        if (isSubmitted === void 0) { isSubmitted = false; }
        this.CalculatedData = null;
        // reset error, warnings
        this.resetErroAndWarnings();
        // reset calculated output
        this.resetCalculatedLabelValue();
        // this.payLoad = this.glandSizeDovetailGlandForm.value;
        this.isSubmitted = isSubmitted;
        // stop here if form is invalid/Not_valid
        if (!this.glandSizeDovetailGlandForm || this.glandSizeDovetailGlandForm.invalid) {
            return;
        }
        // perform calculation
        this.glandSizeDovetailGlandVacuumOnlyService.createGland(this.glandSizeDovetailGlandForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(function (resp) {
            if (resp.data) {
                // set CalculatedData
                // this will set the graph data also
                _this.CalculatedData = Object.assign({}, resp.data);
                if (resp.data.error && resp.data.error.length > 0) {
                    _this.serverErrors = resp.data.error.slice();
                }
                if (resp.data.warning && resp.data.warning.length > 0) {
                    _this.serverWarnings = resp.data.warning;
                }
                var responseDataKeys = Object.keys(resp.data);
                // when toleranc or minmax option is selected than also bind calculated labels received after calculation
                // Bind left form data
                // loop through each form left column row
                for (var rowIndex = 0; rowIndex < _this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
                    // loop through columns
                    for (var columnIndex = 0; columnIndex < _this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                        // loop through controls
                        for (var controlIndex = 0; controlIndex < _this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                            // get form control of JSON
                            var formControl = _this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                            // get fields key from resp data
                            // const responseDataKeys = Object.keys(resp.data);
                            for (var keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                                if ((formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculatedDegreeLabel) && responseDataKeys[keyIndex] === formControl.key) {
                                    // set JSON output label
                                    // bind calculated result to output label
                                    _this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? (formControl.sub_type !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculatedDegreeLabel ? resp.data[responseDataKeys[keyIndex]].toFixed((_this.unitButtonService.getCurrentUnitValue && _this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3)) : resp.data[responseDataKeys[keyIndex]]) : resp.data[responseDataKeys[keyIndex]];
                                }
                            }
                        }
                    }
                }
                // Bind right form data
                // loop through each form left column row
                for (var rowIndex = 0; rowIndex < _this.calculatorConfig.form.right_column.form_layout_row.length; rowIndex++) {
                    // loop through columns
                    for (var columnIndex = 0; columnIndex < _this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                        // loop through controls
                        for (var controlIndex = 0; controlIndex < _this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                            // get form control of JSON
                            var formControl = _this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                            // get fields key from resp data
                            // const responseDataKeys = Object.keys(resp.data);
                            for (var keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                                if ((formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculatedDegreeLabel) && responseDataKeys[keyIndex] === formControl.key) {
                                    // set JSON output label
                                    // bind calculated result to output label
                                    _this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? (formControl.sub_type !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculatedDegreeLabel ? resp.data[responseDataKeys[keyIndex]].toFixed((_this.unitButtonService.getCurrentUnitValue && _this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3)) : resp.data[responseDataKeys[keyIndex]]) : resp.data[responseDataKeys[keyIndex]];
                                }
                            }
                        }
                    }
                }
                // Bind output form data
                // loop through each output
                for (var outputIndex = 0; outputIndex < _this.calculatorConfig.form_output.length; outputIndex++) {
                    // loop through rows
                    for (var rowIndex = 0; rowIndex < _this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
                        // loop through columns
                        for (var columnIndex = 0; columnIndex < _this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length; columnIndex++) {
                            // loop through controls
                            for (var controlIndex = 0; controlIndex < _this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                                // get form control of JSON
                                var formControl = _this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                                // get fields key from resp data
                                // const responseDataKeys = Object.keys(resp.data);
                                for (var keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                                        // set JSON output label
                                        // bind calculated result to output label
                                        _this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = ((resp.data[responseDataKeys[keyIndex]] !== null && resp.data[responseDataKeys[keyIndex]] !== undefined && !isNaN((+resp.data[responseDataKeys[keyIndex]]))) ? parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed(1) : resp.data[responseDataKeys[keyIndex]]) + "%";
                                    }
                                }
                            }
                        }
                    }
                }
                // reset auth token 
                _this.setAuth();
            }
        }, function (error) {
            // reset auth token 
            _this.setAuth();
            // TODO: show error if any
            console.log(error);
        });
    };
    // reset auth token
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.setAuth = function () {
        this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (r) { return r; });
    };
    // temperature change update output values handler
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.onTemperatureChangeUpdateCalculator = function () {
        var _this = this;
        // unit switch button click/change subscription
        this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe(function (x) {
            if (x) {
                _this.resetFormAndCalculation();
            }
        });
    };
    // on reset button handler
    // on reset button handler
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.onReset = function () {
        // reset dynamically created form controls
        // get form controls key
        var formControlKeys = Object.keys(this.glandSizeDovetailGlandForm.controls);
        // loop through the reactive form/formgroup controls 
        for (var index = 0; index < formControlKeys.length; index++) {
            var formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
            if (formControlDefaultValue) {
                this.glandSizeDovetailGlandForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
            }
            else {
                this.glandSizeDovetailGlandForm.controls[formControlKeys[index]].setValue('');
            }
        }
        this.resetFormAndCalculation();
    };
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.resetFormAndCalculation = function () {
        // reset form submitted status to false 
        this.isSubmitted = false;
        // reset client errors and warnings
        this.resetErroAndWarnings();
        if (!this.calculatorConfig) {
            return;
        }
        // reset left form data
        // loop through each form left column row
        for (var rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (var columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (var controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    var formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    if ((formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculatedDegreeLabel)) {
                        // set JSON output label
                        // bind calculated result to output label
                        this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
                    }
                }
            }
        }
        // reset right form data
        // loop through each form left column row
        for (var rowIndex = 0; rowIndex < this.calculatorConfig.form.right_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (var columnIndex = 0; columnIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (var controlIndex = 0; controlIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    var formControl = this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    // get fields key from resp data
                    // const responseDataKeys = Object.keys(resp.data);
                    if ((formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label || formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculatedDegreeLabel)) {
                        // set JSON output label
                        // bind calculated result to output label
                        this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
                    }
                }
            }
        }
        // reset output form data
        // loop through each output
        for (var outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
            // loop through rows
            for (var rowIndex = 0; rowIndex < this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
                // loop through columns
                for (var columnIndex = 0; columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length; columnIndex++) {
                    // loop through controls
                    for (var controlIndex = 0; controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                        // get form control of JSON
                        var formControl = this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                        // get fields key from resp data
                        // const responseDataKeys = Object.keys(resp.data);
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "%";
                        }
                    }
                }
            }
        }
        // reset calculated data received after calculation
        this.CalculatedData = null;
    };
    // print button event handler
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.onPrint = function () {
        this.printService.generatePdf("dovetailGland");
    };
    // copy event handler of toolbar
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.onCopy = function () {
        var formAndOutputData;
        // save calculated data to local storage
        if (this.CalculatedData) {
            formAndOutputData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.glandSizeDovetailGlandForm.value), this.CalculatedData);
        }
        else {
            formAndOutputData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.glandSizeDovetailGlandForm.value);
        }
        formAndOutputData.calculatorType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingDovetailGlandVacuumOnly;
        localStorage.setItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["calculatedDataKeys"].DOVETAIL_GLAND, JSON.stringify(formAndOutputData));
        // this.cookieService.set('lastCalculatedData', JSON.stringify(resp.data));
        this.toastService.showSucces("Calculator data copied !");
    };
    // reset error, warnings of client and server
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.resetErroAndWarnings = function () {
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
    };
    // reset calculated label or output value in JSOn config
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.resetCalculatedLabelValue = function () {
        this.CalculatedData = {};
        if (!this.calculatorConfig) {
            return;
        }
        // reset left form data
        // loop through each form left column row
        for (var rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (var columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (var controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    var formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                        // set JSON output label
                        // reset calculated result to output label
                        this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
                    }
                }
            }
        }
        // reset right form data
        // loop through each form left column row
        for (var rowIndex = 0; rowIndex < this.calculatorConfig.form.right_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (var columnIndex = 0; columnIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (var controlIndex = 0; controlIndex < this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    var formControl = this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                        // set JSON output label
                        // bind calculated result to output label
                        this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
                    }
                }
            }
        }
        // reset output form data
        // loop through each output
        for (var outputIndex = 0; outputIndex < this.calculatorConfig.form_output.length; outputIndex++) {
            // loop through rows
            for (var rowIndex = 0; rowIndex < this.calculatorConfig.form_output[outputIndex].row.length; rowIndex++) {
                // loop through columns
                for (var columnIndex = 0; columnIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns.length; columnIndex++) {
                    // loop through controls
                    for (var controlIndex = 0; controlIndex < this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                        // get form control of JSON
                        var formControl = this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = " %";
                        }
                    }
                }
            }
        }
    };
    GlandSizeDovetailGlandVacuumOnlyComponent.prototype.ngOnDestroy = function () {
        if (this.unitChangeSubscription) {
            this.unitChangeSubscription.unsubscribe();
        }
        if (this.glandSizeDataSubscription) {
            this.glandSizeDataSubscription.unsubscribe();
        }
        if (this.temperatureChangeSubscription) {
            this.temperatureChangeSubscription.unsubscribe();
        }
    };
    GlandSizeDovetailGlandVacuumOnlyComponent.ɵfac = function GlandSizeDovetailGlandVacuumOnlyComponent_Factory(t) { return new (t || GlandSizeDovetailGlandVacuumOnlyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_11__["RectangleGlandCalcValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gland_size_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__["GlandSizeDovetailGlandVacuumOnlyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"])); };
    GlandSizeDovetailGlandVacuumOnlyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GlandSizeDovetailGlandVacuumOnlyComponent, selectors: [["app-gland-size-dovetail-gland-vacuum-only"]], decls: 47, vars: 8, consts: [[1, "row"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [1, "graph-sec"], [1, "graph-bg", "dovtail-bg"], [1, "gld-id"], [1, "gld-width"], [1, "gld-depth"], [1, "top-radii"], [1, "bottom-radii"], [1, "gld-angle"], [1, "gap-full-comp"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "ignorePdf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1", "ignorePdf"], [3, "form", "control", "isSubmitted", "isShowCopyBtn", "reset", "print", "copy"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [3, "form", "isSubmitted", "calculatorJSON", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings"]], template: function GlandSizeDovetailGlandVacuumOnlyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GlandSizeDovetailGlandVacuumOnlyComponent_form_2_Template, 6, 15, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gland Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "CL: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " (to centerline)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "GLAND WIDTH: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "(to sharp corners)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "GLAND DEPTH: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "TOP RADII: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "BOTTOM RADII: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "GLAND ANGLE: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "GAP: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "(may or may not exist)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "user-rules");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.calculatorConfig && ctx.glandSizeDovetailGlandForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandCenterlineNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandWidthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandDepthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("topRadiiNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.getCalculatedControlValue("bottomRadiiNominal"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandAngleNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getControlValue("gapNominal"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__["UserRulesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__["DynamicFormTwoColumnLayoutComponent"]], styles: [".graph-sec[_ngcontent-%COMP%]   .dovtail-bg[_ngcontent-%COMP%]   div.top-radii[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .dovtail-bg[_ngcontent-%COMP%] {\n    background: url(/assets/img/dovetail_graph.jpg) no-repeat;\n    background-size: contain;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.top-radii[_ngcontent-%COMP%] {\n    bottom: 81px;\n    left: inherit;\n    right: -3px;\n    width: 88px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.bottom-radii[_ngcontent-%COMP%] {\n    bottom: 7px;\n    right: 0;\n    width: 100px;\n    left: inherit;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gld-depth[_ngcontent-%COMP%] {\n    bottom: 60px;\n    left: 10px;\n    background: #fff;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gld-width[_ngcontent-%COMP%] {\n    left: 19px;\n    right: inherit;\n    top: 92px;\n    width: 100px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gld-angle[_ngcontent-%COMP%] {\n    bottom: 21px;\n    font-size: .70em;\n    right: 120px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gap-full-comp[_ngcontent-%COMP%] {\n    top: 60px;\n    font-size: .70em;\n    right: 22px;\n    width: 102px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gld-id[_ngcontent-%COMP%] {\n    top: 50px;\n    left: 46px;\n    \n    width: 80px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ2xlLWdsYW5kLWNhbGMvZ2xhbmQtc2l6ZS1kb3ZldGFpbC1nbGFuZC12YWN1dW0tb25seS9nbGFuZC1zaXplLWRvdmV0YWlsLWdsYW5kLXZhY3V1bS1vbmx5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOztBQUV0QjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ2xlLWdsYW5kLWNhbGMvZ2xhbmQtc2l6ZS1kb3ZldGFpbC1nbGFuZC12YWN1dW0tb25seS9nbGFuZC1zaXplLWRvdmV0YWlsLWdsYW5kLXZhY3V1bS1vbmx5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmNzcyBzdGFydHMgRG92ZXRhaWwqL1xuXG4uZ3JhcGgtc2VjIC5kb3Z0YWlsLWJnIGRpdi50b3AtcmFkaWkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmdyYXBoLXNlYyAuZG92dGFpbC1iZyB7XG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2RvdmV0YWlsX2dyYXBoLmpwZykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuZG92dGFpbC1iZyBkaXYudG9wLXJhZGlpIHtcbiAgICBib3R0b206IDgxcHg7XG4gICAgbGVmdDogaW5oZXJpdDtcbiAgICByaWdodDogLTNweDtcbiAgICB3aWR0aDogODhweDtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuZG92dGFpbC1iZyBkaXYuYm90dG9tLXJhZGlpIHtcbiAgICBib3R0b206IDdweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbGVmdDogaW5oZXJpdDtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuZG92dGFpbC1iZyBkaXYuZ2xkLWRlcHRoIHtcbiAgICBib3R0b206IDYwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuZG92dGFpbC1iZyBkaXYuZ2xkLXdpZHRoIHtcbiAgICBsZWZ0OiAxOXB4O1xuICAgIHJpZ2h0OiBpbmhlcml0O1xuICAgIHRvcDogOTJweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnLmRvdnRhaWwtYmcgZGl2LmdsZC1hbmdsZSB7XG4gICAgYm90dG9tOiAyMXB4O1xuICAgIGZvbnQtc2l6ZTogLjcwZW07XG4gICAgcmlnaHQ6IDEyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuZG92dGFpbC1iZyBkaXYuZ2FwLWZ1bGwtY29tcCB7XG4gICAgdG9wOiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogLjcwZW07XG4gICAgcmlnaHQ6IDIycHg7XG4gICAgd2lkdGg6IDEwMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuZG92dGFpbC1iZyBkaXYuZ2xkLWlkIHtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogNDZweDtcbiAgICAvKiBmb250LXNpemU6IDAuNjhyZW07ICovXG4gICAgd2lkdGg6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
    return GlandSizeDovetailGlandVacuumOnlyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlandSizeDovetailGlandVacuumOnlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-gland-size-dovetail-gland-vacuum-only',
                templateUrl: './gland-size-dovetail-gland-vacuum-only.component.html',
                styleUrls: ['./gland-size-dovetail-gland-vacuum-only.component.css']
            }]
    }], function () { return [{ type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcService"] }, { type: _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"] }, { type: _shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"] }, { type: _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_11__["RectangleGlandCalcValidationService"] }, { type: _gland_size_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__["GlandSizeDovetailGlandVacuumOnlyService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"] }, { type: _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.module.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.module.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: GlandSizeDovetailGlandVacuumOnlyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeDovetailGlandVacuumOnlyModule", function() { return GlandSizeDovetailGlandVacuumOnlyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _gland_size_dovetail_gland_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gland-size-dovetail-gland-vacuum-only-routing.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only-routing.module.ts");
/* harmony import */ var _gland_size_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gland-size-dovetail-gland-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.component.ts");
/* harmony import */ var _gland_size_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gland-size-dovetail-gland-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.service.ts");
// core improts



// application imports






var GlandSizeDovetailGlandVacuumOnlyModule = /** @class */ (function () {
    function GlandSizeDovetailGlandVacuumOnlyModule() {
    }
    GlandSizeDovetailGlandVacuumOnlyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlandSizeDovetailGlandVacuumOnlyModule });
    GlandSizeDovetailGlandVacuumOnlyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlandSizeDovetailGlandVacuumOnlyModule_Factory(t) { return new (t || GlandSizeDovetailGlandVacuumOnlyModule)(); }, providers: [
            _gland_size_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeDovetailGlandVacuumOnlyService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                _gland_size_dovetail_gland_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeDovetailGlandVacuumOnlyRoutingModule"]
            ]] });
    return GlandSizeDovetailGlandVacuumOnlyModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeDovetailGlandVacuumOnlyModule, { declarations: [_gland_size_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeDovetailGlandVacuumOnlyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
        _gland_size_dovetail_gland_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeDovetailGlandVacuumOnlyRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeDovetailGlandVacuumOnlyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_gland_size_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeDovetailGlandVacuumOnlyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                    _gland_size_dovetail_gland_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeDovetailGlandVacuumOnlyRoutingModule"]
                ],
                providers: [
                    _gland_size_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeDovetailGlandVacuumOnlyService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.service.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.service.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: GlandSizeDovetailGlandVacuumOnlyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeDovetailGlandVacuumOnlyService", function() { return GlandSizeDovetailGlandVacuumOnlyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _models_glandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/glandSizeRectangularGlandInternalVacuumOnlyDTO */ "./client/app/models/glandSizeRectangularGlandInternalVacuumOnlyDTO.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
// core imports

// application imports





var GlandSizeDovetailGlandVacuumOnlyService = /** @class */ (function () {
    function GlandSizeDovetailGlandVacuumOnlyService(_http) {
        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
    }
    GlandSizeDovetailGlandVacuumOnlyService.prototype.createGland = function (form, unit, unitTemp) {
        var body = new _models_glandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_2__["GlandSizeRectangularGlandInternalVacuumOnlyDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        body.inputOption = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax.toString();
        body.calculationType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["calculationType"].GLAND_SIZING;
        body.glandType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["glandType"].DOVETAIL;
        return this._http.post(this.baseUrl + "glandsizecalc/createGland", body);
    };
    GlandSizeDovetailGlandVacuumOnlyService.ɵfac = function GlandSizeDovetailGlandVacuumOnlyService_Factory(t) { return new (t || GlandSizeDovetailGlandVacuumOnlyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    GlandSizeDovetailGlandVacuumOnlyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlandSizeDovetailGlandVacuumOnlyService, factory: GlandSizeDovetailGlandVacuumOnlyService.ɵfac, providedIn: 'root' });
    return GlandSizeDovetailGlandVacuumOnlyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeDovetailGlandVacuumOnlyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=gland-size-dovetail-gland-vacuum-only-gland-size-dovetail-gland-vacuum-only-module.js.map