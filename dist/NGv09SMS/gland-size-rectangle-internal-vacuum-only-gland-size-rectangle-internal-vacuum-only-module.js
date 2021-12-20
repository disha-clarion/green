(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gland-size-rectangle-internal-vacuum-only-gland-size-rectangle-internal-vacuum-only-module"],{

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only-routing.module.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only-routing.module.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: GlandSizeRectangleInternalVacuumOnlyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeRectangleInternalVacuumOnlyRoutingModule", function() { return GlandSizeRectangleInternalVacuumOnlyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gland-size-rectangle-internal-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.component.ts");





var routes = [
    { path: '', component: _gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__["GlandSizeRectangleInternalVacuumOnlyComponent"], pathMatch: 'full' }
];
var GlandSizeRectangleInternalVacuumOnlyRoutingModule = /** @class */ (function () {
    function GlandSizeRectangleInternalVacuumOnlyRoutingModule() {
    }
    GlandSizeRectangleInternalVacuumOnlyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlandSizeRectangleInternalVacuumOnlyRoutingModule });
    GlandSizeRectangleInternalVacuumOnlyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlandSizeRectangleInternalVacuumOnlyRoutingModule_Factory(t) { return new (t || GlandSizeRectangleInternalVacuumOnlyRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return GlandSizeRectangleInternalVacuumOnlyRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeRectangleInternalVacuumOnlyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangleInternalVacuumOnlyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.component.ts":
/*!***************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.component.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: GlandSizeRectangleInternalVacuumOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeRectangleInternalVacuumOnlyComponent", function() { return GlandSizeRectangleInternalVacuumOnlyComponent; });
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
/* harmony import */ var _gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gland-size-rectangle-internal-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rectangle-gland-calc-validation.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-validation.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm5/ngx-cookie-service.js");
/* harmony import */ var _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/toasts-container/toast-service */ "./client/app/shared/components/toasts-container/toast-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/user-rules/user-rules.component */ "./client/app/shared/components/user-rules/user-rules.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/calculator-toolbar/calculator-toolbar.component */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts");

// core imports

// third party imports




















function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.onSubmit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "calculator-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reset", function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_reset_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onReset(); })("print", function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_print_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onPrint(); })("copy", function GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_copy_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onCopy(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.glandSizeRectangleInternalVacuumForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx_r0.glandSizeRectangleInternalVacuumForm)("control", ctx_r0.calculatorConfig.toolbarOption)("isSubmitted", ctx_r0.isSubmitted)("isShowCopyBtn", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx_r0.glandSizeRectangleInternalVacuumForm)("isSubmitted", ctx_r0.isSubmitted)("calculatorJSON", ctx_r0.calculatorConfig)("clientErrors", ctx_r0.clientErrors)("clientWarnings", ctx_r0.clientWarnings)("serverErrors", ctx_r0.serverErrors)("serverWarnings", ctx_r0.serverWarnings);
} }
var GlandSizeRectangleInternalVacuumOnlyComponent = /** @class */ (function () {
    function GlandSizeRectangleInternalVacuumOnlyComponent(controlBaseService, authService, rectangleGlandCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, glandSizeRectangleInternalVacuumOnlyService, helperService, rectangleGlandCalcValidationService, cookieService, toastService) {
        var _this = this;
        this.controlBaseService = controlBaseService;
        this.authService = authService;
        this.rectangleGlandCalcService = rectangleGlandCalcService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.printService = printService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.glandSizeRectangleInternalVacuumOnlyService = glandSizeRectangleInternalVacuumOnlyService;
        this.helperService = helperService;
        this.rectangleGlandCalcValidationService = rectangleGlandCalcValidationService;
        this.cookieService = cookieService;
        this.toastService = toastService;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlType"];
        this.isSubmitted = false;
        this.payLoad = '';
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        // o-ring calculator config subscription
        this.oRingDataSubscription = this.rectangleGlandCalcService.glandSizeCalcConfig$.subscribe(function (x) {
            if (x) {
                // calculator - internal vacuum only
                _this.calculatorConfig = x.calculators[0];
                // send calculator to dynamic form service
                _this.dynamicFormTwoColumnLayoutService.sendCalculator(x.calculators[0]);
                // create form
                _this.createForm();
            }
        });
        // temperature change perform operations
        this.onTemperatureChangeUpdateCalculator();
        // unit change
        this.onUnitChange();
    }
    Object.defineProperty(GlandSizeRectangleInternalVacuumOnlyComponent.prototype, "CalculatedData", {
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
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.ngOnInit = function () {
        this.isSubmitted = false;
        this.CalculatedData = null;
    };
    // unit change perform operations
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.onUnitChange = function () {
        var _this = this;
        // reset 
        this.resetFormAndCalculation();
        // unit switch button click/change subscription
        this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            if (x) {
                if (_this.CalculatedData) {
                    // calculated change detection when by changing the object
                    _this.CalculatedData = Object.assign({}, _this.CalculatedData);
                }
                // convert the form data
                var convertedForm = _this.helperService.convertFormUnitControlValuesAndSet((_this.calculatorConfig && _this.calculatorConfig.form ? _this.calculatorConfig.form : null), _this.glandSizeRectangleInternalVacuumForm, x);
                if (convertedForm) {
                    _this.glandSizeRectangleInternalVacuumForm = convertedForm;
                }
                /// recalculate the data
                _this.onSubmit();
            }
        });
    };
    // temperature change update output values handler
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.onTemperatureChangeUpdateCalculator = function () {
        var _this = this;
        // temperature switch button click/change subscription
        this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe(function (x) {
            if (x) {
                _this.resetFormAndCalculation();
            }
        });
    };
    // form control changes subcription and update the graph data
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.getControlValue = function (fieldName) {
        if (this.glandSizeRectangleInternalVacuumForm
            && this.glandSizeRectangleInternalVacuumForm.controls[fieldName]
            && this.glandSizeRectangleInternalVacuumForm.controls[fieldName].value) {
            return (+this.glandSizeRectangleInternalVacuumForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3);
        }
    };
    // get calculated field values by fieldname
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.getCalculatedControlValue = function (fieldName) {
        if (this.CalculatedData) {
            var fieldValue = this.CalculatedData[fieldName];
            if (fieldValue) {
                return this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? (+fieldValue).toFixed(2) : (+fieldValue).toFixed(3);
            }
        }
    };
    // form submit event
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.onSubmit = function (isSubmitted) {
        var _this = this;
        if (isSubmitted === void 0) { isSubmitted = false; }
        this.CalculatedData = null;
        // reset error, warnings
        this.resetErroAndWarnings();
        // reset calculated output
        this.resetCalculatedLabelValue();
        // this.payLoad = this.glandSizeRectangleInternalVacuumForm.value;
        this.isSubmitted = isSubmitted;
        // stop here if form is invalid/Not_valid
        if (!this.glandSizeRectangleInternalVacuumForm || this.glandSizeRectangleInternalVacuumForm.invalid) {
            return;
        }
        // perform calculation
        this.glandSizeRectangleInternalVacuumOnlyService.createGland(this.glandSizeRectangleInternalVacuumForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(function (resp) {
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
                                if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                                    // set JSON output label
                                    // bind calculated result to output label
                                    _this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? resp.data[responseDataKeys[keyIndex]].toFixed((_this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) ? 2 : 3) : resp.data[responseDataKeys[keyIndex]];
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
                                if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                                    // set JSON output label
                                    // bind calculated result to output label
                                    _this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? resp.data[responseDataKeys[keyIndex]].toFixed((_this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) ? 2 : 3) : resp.data[responseDataKeys[keyIndex]];
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
    // on reset button handler
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.onReset = function () {
        // reset dynamically created form controls
        // get form controls key
        var formControlKeys = Object.keys(this.glandSizeRectangleInternalVacuumForm.controls);
        // loop through the reactive form/formgroup controls 
        for (var index = 0; index < formControlKeys.length; index++) {
            var formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
            if (formControlDefaultValue) {
                this.glandSizeRectangleInternalVacuumForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
            }
            else {
                this.glandSizeRectangleInternalVacuumForm.controls[formControlKeys[index]].setValue('');
            }
        }
        this.resetFormAndCalculation();
    };
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.resetFormAndCalculation = function () {
        // reset form submitted status to false 
        this.isSubmitted = false;
        // reset client errors and warnings
        this.resetErroAndWarnings();
        if (!this.calculatorConfig) {
            return;
        }
        // reset glandsize rectangle-internal-vacuum-only JSON config data
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
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                        // set JSON output label
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
                        // for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                        // if (formControl.sub_type === ControlSubType.calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "%";
                        }
                        // }
                    }
                }
            }
        }
        // reset calculated data received after calculation
        this.CalculatedData = null;
    };
    // print button event handler
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.onPrint = function () {
        this.printService.generatePdf("rectangleGland");
    };
    // create form group
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.createForm = function () {
        var _this = this;
        // get form controls nested array
        var leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.glandSizeRectangleInternalVacuumForm, this.calculatorConfig.form.left_column.form_layout_row);
        var rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.glandSizeRectangleInternalVacuumForm, this.calculatorConfig.form.right_column.form_layout_row);
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
        this.glandSizeRectangleInternalVacuumForm = this.controlBaseService.toFormGroup(filteredControls);
        // get and set validations
        var validations = [];
        // get validation key from json config object
        var jsonConfigValidationsArray = this.calculatorConfig.form.form_validation;
        for (var index = 0; index < jsonConfigValidationsArray.length; index++) {
            var validationFuncKey = jsonConfigValidationsArray[index];
            switch (validationFuncKey) {
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["GlandSizeCalc_InternalVacuumOnly_Validators"].OPERATING_TEMPERATURE_VALIDATION:
                    validations.push(this.rectangleGlandCalcValidationService.operatingTemperatureValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["GlandSizeCalc_InternalVacuumOnly_Validators"].O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION:
                    validations.push(this.rectangleGlandCalcValidationService.oringCrossSectionNominalValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["GlandSizeCalc_InternalVacuumOnly_Validators"].ORING_ID_AS568A_STANDARD_WARNING:
                    validations.push(this.rectangleGlandCalcValidationService.oRingIDAS568AStandardsWarning());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["GlandSizeCalc_InternalVacuumOnly_Validators"].O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION:
                    validations.push(this.rectangleGlandCalcValidationService.oringIDNominalLargerThanMaxOringIDValidation());
                    break;
            }
        }
        // set custom validations with params
        this.glandSizeRectangleInternalVacuumForm.setValidators(validations);
        this.glandSizeRectangleInternalVacuumForm.updateValueAndValidity();
    };
    // reset auth token
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.setAuth = function () {
        this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (r) { return r; });
    };
    // add client errors
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.addClientErrors = function (error) {
        if (this.clientErrors.length > 0) {
            for (var index = 0; index < this.clientErrors.length; index++) {
                if (this.clientErrors[index].field && this.clientErrors[index].field !== error.field) {
                    this.clientErrors.push(error);
                }
            }
        }
        else {
            this.clientErrors.push(error);
        }
        this.clientErrors = this.clientErrors.slice();
    };
    // add client warnings
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.addClientWarnings = function (warning) {
        if (this.clientWarnings.length > 0) {
            for (var index = 0; index < this.clientWarnings.length; index++) {
                if (this.clientWarnings[index] && this.clientWarnings[index].field !== warning.field) {
                    this.clientWarnings.push(warning);
                }
            }
        }
        else {
            this.clientWarnings.push(warning);
        }
        this.clientWarnings = this.clientWarnings.slice();
    };
    // reset error, warnings of client and server
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.resetErroAndWarnings = function () {
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
    };
    // reset calculated label or output value in JSON config
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.resetCalculatedLabelValue = function () {
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
    // copy event handler of toolbar
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.onCopy = function () {
        var formAndOutputData;
        // save calculated data to local storage
        if (this.CalculatedData) {
            formAndOutputData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.glandSizeRectangleInternalVacuumForm.value), this.CalculatedData);
        }
        else {
            formAndOutputData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.glandSizeRectangleInternalVacuumForm.value);
        }
        formAndOutputData.calculatorType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingInternalVacuumOnly;
        localStorage.setItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["calculatedDataKeys"].RECTANGULAR_GLAND_INTERNAL, JSON.stringify(formAndOutputData));
        // this.cookieService.set('lastCalculatedData', JSON.stringify(resp.data));
        this.toastService.showSucces("Calculator data copied !");
    };
    // component destroy
    GlandSizeRectangleInternalVacuumOnlyComponent.prototype.ngOnDestroy = function () {
        if (this.oRingDataSubscription) {
            this.oRingDataSubscription.unsubscribe();
        }
        if (this.temperatureChangeSubscription) {
            this.temperatureChangeSubscription.unsubscribe();
        }
        if (this.unitChangeSubscription) {
            this.unitChangeSubscription.unsubscribe();
        }
    };
    GlandSizeRectangleInternalVacuumOnlyComponent.ɵfac = function GlandSizeRectangleInternalVacuumOnlyComponent_Factory(t) { return new (t || GlandSizeRectangleInternalVacuumOnlyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_11__["GlandSizeRectangleInternalVacuumOnlyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_13__["RectangleGlandCalcValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_15__["ToastService"])); };
    GlandSizeRectangleInternalVacuumOnlyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GlandSizeRectangleInternalVacuumOnlyComponent, selectors: [["app-gland-size-rectangle-internal-vacuum-only"]], decls: 41, vars: 6, consts: [[1, "row"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [1, "graph-sec"], [1, "graph-bg"], [1, "gld-id"], [1, "gld-width"], [1, "gld-depth"], [1, "top-radii"], [1, "bottom-radii"], [1, "gap-full-comp", "rect-gap"], [1, "rect-static-value"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "ignorePdf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1", "ignorePdf"], [3, "form", "control", "isSubmitted", "isShowCopyBtn", "reset", "print", "copy"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [3, "form", "isSubmitted", "calculatorJSON", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings"]], template: function GlandSizeRectangleInternalVacuumOnlyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GlandSizeRectangleInternalVacuumOnlyComponent_form_2_Template, 6, 15, "form", 2);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "GLAND ID: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "GLAND WIDTH: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "GLAND DEPTH: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "TOP RADII ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "BOTTOM RADII: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "GAP: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "(may or may not exist) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ".005");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "user-rules");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.calculatorConfig && ctx.glandSizeRectangleInternalVacuumForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandIdNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandWidthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandDepthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("bottomRadiiNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getControlValue("gapNominal"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_17__["UserRulesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_19__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_20__["DynamicFormTwoColumnLayoutComponent"]], styles: [".graph-sec[_ngcontent-%COMP%] {\n    border: 1px solid #d2d2d2;\n    padding: 0 15px;\n    position: relative;\n    margin-bottom: 20px;\n    margin-top: 10px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%] {\n    background: url(/assets/img/graph.jpg) no-repeat;\n    width: 100%;\n    height: 200px;\n    background-size: contain;\n}\n\n.graph-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #606060;\n    font-size: 1.1rem;\n    margin: 15px 0 10px;\n    border-bottom: 1px solid #d2d2d2;\n    padding-bottom: 12px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-weight: 600;\n    position: absolute;\n    color: #666;\n    color: #225a8a;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.gld-id[_ngcontent-%COMP%] {\n    top: 56px;\n    left: 20px;\n    font-size: 0.7rem;\n    background: #fff;\n    text-align: center;\n    height: 22px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.gld-width[_ngcontent-%COMP%] {\n    bottom: 27px;\n    right: 102px;\n    font-size: 0.7rem;\n    width: 80px;\n    text-align: center;\n    height: 22px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.gld-depth[_ngcontent-%COMP%] {\n    bottom: 94px;\n    left: 5px;\n    font-size: 0.7rem;\n    background: #fff;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.top-radii[_ngcontent-%COMP%] {\n    bottom: 90px;\n    left: 30px;\n    font-size: 0.7rem;\n    display: none;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.bottom-radii[_ngcontent-%COMP%] {\n    bottom: 29px;\n    right: 8px;\n    font-size: 0.7rem;\n    width: 80px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   .rect-gap[_ngcontent-%COMP%] {\n    top: 54px;\n    right: 38px;\n    font-size: 0.7rem;\n    width: 100px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   .rect-static-value[_ngcontent-%COMP%] {\n    top: 120px;\n    right: 22px;\n    font-size: 0.7rem;\n    width: 100px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    color: #329f59;\n    font-size: 1.2em;\n    font-family: 'open_sansbold', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ2xlLWdsYW5kLWNhbGMvZ2xhbmQtc2l6ZS1yZWN0YW5nbGUtaW50ZXJuYWwtdmFjdXVtLW9ubHkvZ2xhbmQtc2l6ZS1yZWN0YW5nbGUtaW50ZXJuYWwtdmFjdXVtLW9ubHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjOztBQUVkO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHdDQUF3QztBQUM1QyIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL3JlY3RhbmdsZS1nbGFuZC1jYWxjL2dsYW5kLXNpemUtcmVjdGFuZ2xlLWludGVybmFsLXZhY3V1bS1vbmx5L2dsYW5kLXNpemUtcmVjdGFuZ2xlLWludGVybmFsLXZhY3V1bS1vbmx5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBncmFwaCBjc3MgKi9cblxuLmdyYXBoLXNlYyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcge1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9ncmFwaC5qcGcpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmdyYXBoLXNlYyBoMyB7XG4gICAgY29sb3I6ICM2MDYwNjA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbWFyZ2luOiAxNXB4IDAgMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcgZGl2IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBjb2xvcjogIzIyNWE4YTtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcgZGl2LmdsZC1pZCB7XG4gICAgdG9wOiA1NnB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyBkaXYuZ2xkLXdpZHRoIHtcbiAgICBib3R0b206IDI3cHg7XG4gICAgcmlnaHQ6IDEwMnB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIycHg7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnIGRpdi5nbGQtZGVwdGgge1xuICAgIGJvdHRvbTogOTRweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnIGRpdi50b3AtcmFkaWkge1xuICAgIGJvdHRvbTogOTBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnIGRpdi5ib3R0b20tcmFkaWkge1xuICAgIGJvdHRvbTogMjlweDtcbiAgICByaWdodDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcgLnJlY3QtZ2FwIHtcbiAgICB0b3A6IDU0cHg7XG4gICAgcmlnaHQ6IDM4cHg7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcgLnJlY3Qtc3RhdGljLXZhbHVlIHtcbiAgICB0b3A6IDEyMHB4O1xuICAgIHJpZ2h0OiAyMnB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnIGRpdiBzdHJvbmcge1xuICAgIGNvbG9yOiAjMzI5ZjU5O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC1mYW1pbHk6ICdvcGVuX3NhbnNib2xkJywgc2Fucy1zZXJpZjtcbn0iXX0= */"] });
    return GlandSizeRectangleInternalVacuumOnlyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlandSizeRectangleInternalVacuumOnlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-gland-size-rectangle-internal-vacuum-only',
                templateUrl: './gland-size-rectangle-internal-vacuum-only.component.html',
                styleUrls: ['./gland-size-rectangle-internal-vacuum-only.component.css']
            }]
    }], function () { return [{ type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcService"] }, { type: _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"] }, { type: _shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"] }, { type: _gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_11__["GlandSizeRectangleInternalVacuumOnlyService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"] }, { type: _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_13__["RectangleGlandCalcValidationService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_14__["CookieService"] }, { type: _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_15__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.module.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.module.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: GlandSizeRectangleInternalVacuumOnlyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeRectangleInternalVacuumOnlyModule", function() { return GlandSizeRectangleInternalVacuumOnlyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _gland_size_rectangle_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gland-size-rectangle-internal-vacuum-only-routing.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only-routing.module.ts");
/* harmony import */ var _gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gland-size-rectangle-internal-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.component.ts");
/* harmony import */ var _gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gland-size-rectangle-internal-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.service.ts");
// core improts



// application imports






var GlandSizeRectangleInternalVacuumOnlyModule = /** @class */ (function () {
    function GlandSizeRectangleInternalVacuumOnlyModule() {
    }
    GlandSizeRectangleInternalVacuumOnlyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlandSizeRectangleInternalVacuumOnlyModule });
    GlandSizeRectangleInternalVacuumOnlyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlandSizeRectangleInternalVacuumOnlyModule_Factory(t) { return new (t || GlandSizeRectangleInternalVacuumOnlyModule)(); }, providers: [
            _gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeRectangleInternalVacuumOnlyService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _gland_size_rectangle_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeRectangleInternalVacuumOnlyRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
            ]] });
    return GlandSizeRectangleInternalVacuumOnlyModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeRectangleInternalVacuumOnlyModule, { declarations: [_gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeRectangleInternalVacuumOnlyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _gland_size_rectangle_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeRectangleInternalVacuumOnlyRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangleInternalVacuumOnlyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_gland_size_rectangle_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeRectangleInternalVacuumOnlyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _gland_size_rectangle_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeRectangleInternalVacuumOnlyRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
                ],
                providers: [
                    _gland_size_rectangle_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeRectangleInternalVacuumOnlyService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.service.ts":
/*!*************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.service.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: GlandSizeRectangleInternalVacuumOnlyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeRectangleInternalVacuumOnlyService", function() { return GlandSizeRectangleInternalVacuumOnlyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _models_glandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/glandSizeRectangularGlandInternalVacuumOnlyDTO */ "./client/app/models/glandSizeRectangularGlandInternalVacuumOnlyDTO.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
// core imports

// application imports





var GlandSizeRectangleInternalVacuumOnlyService = /** @class */ (function () {
    function GlandSizeRectangleInternalVacuumOnlyService(_http) {
        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
    }
    GlandSizeRectangleInternalVacuumOnlyService.prototype.createGland = function (form, unit, unitTemp) {
        var body = new _models_glandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_3__["GlandSizeRectangularGlandInternalVacuumOnlyDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        body.inputOption = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithMinMax.toString();
        body.calculationType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculationType"].GLAND_SIZING;
        return this._http.post(this.baseUrl + "glandsizecalc/createGland", body);
    };
    GlandSizeRectangleInternalVacuumOnlyService.ɵfac = function GlandSizeRectangleInternalVacuumOnlyService_Factory(t) { return new (t || GlandSizeRectangleInternalVacuumOnlyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    GlandSizeRectangleInternalVacuumOnlyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlandSizeRectangleInternalVacuumOnlyService, factory: GlandSizeRectangleInternalVacuumOnlyService.ɵfac, providedIn: 'root' });
    return GlandSizeRectangleInternalVacuumOnlyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangleInternalVacuumOnlyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=gland-size-rectangle-internal-vacuum-only-gland-size-rectangle-internal-vacuum-only-module.js.map