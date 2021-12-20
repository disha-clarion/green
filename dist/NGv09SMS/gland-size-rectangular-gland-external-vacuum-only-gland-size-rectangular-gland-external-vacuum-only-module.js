(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gland-size-rectangular-gland-external-vacuum-only-gland-size-rectangular-gland-external-vacuum-only-module"],{

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only-routing.module.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only-routing.module.ts ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule", function() { return GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _gland_size_rectangular_gland_external_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gland-size-rectangular-gland-external-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.component.ts");





var routes = [
    { path: '', component: _gland_size_rectangular_gland_external_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__["GlandSizeRectangularGlandExternalVacuumOnlyComponent"], pathMatch: 'full' }
];
var GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule = /** @class */ (function () {
    function GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule() {
    }
    GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule });
    GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule_Factory(t) { return new (t || GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.component.ts":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: GlandSizeRectangularGlandExternalVacuumOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeRectangularGlandExternalVacuumOnlyComponent", function() { return GlandSizeRectangularGlandExternalVacuumOnlyComponent; });
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
/* harmony import */ var _gland_size_rectangular_gland_external_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gland-size-rectangular-gland-external-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/toasts-container/toast-service */ "./client/app/shared/components/toasts-container/toast-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/user-rules/user-rules.component */ "./client/app/shared/components/user-rules/user-rules.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/calculator-toolbar/calculator-toolbar.component */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts");

// core imports

// third party imports



















function GlandSizeRectangularGlandExternalVacuumOnlyComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function GlandSizeRectangularGlandExternalVacuumOnlyComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.onSubmit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "calculator-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reset", function GlandSizeRectangularGlandExternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_reset_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onReset(); })("print", function GlandSizeRectangularGlandExternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_print_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onPrint(); })("copy", function GlandSizeRectangularGlandExternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_copy_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onCopy(); });
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
var GlandSizeRectangularGlandExternalVacuumOnlyComponent = /** @class */ (function () {
    function GlandSizeRectangularGlandExternalVacuumOnlyComponent(controlBaseService, authService, rectangleGlandCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, rectangleGlandCalcValidationService, glandSizeRectangularGlandExternalVacuumOnlyService, helperService, toastService) {
        var _this = this;
        this.controlBaseService = controlBaseService;
        this.authService = authService;
        this.rectangleGlandCalcService = rectangleGlandCalcService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.printService = printService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.rectangleGlandCalcValidationService = rectangleGlandCalcValidationService;
        this.glandSizeRectangularGlandExternalVacuumOnlyService = glandSizeRectangularGlandExternalVacuumOnlyService;
        this.helperService = helperService;
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
                _this.calculatorConfig = x.calculators[3];
                // send calculator to dynamic form service
                _this.dynamicFormTwoColumnLayoutService.sendCalculator(x.calculators[3]);
                // create form
                _this.createForm();
            }
        });
        // temperature change perform operations
        this.onTemperatureChangeUpdateCalculator();
        // unit change
        this.onUnitChange();
    }
    Object.defineProperty(GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype, "CalculatedData", {
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
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.ngOnInit = function () {
        this.isSubmitted = false;
        this.CalculatedData = null;
    };
    // unit change perform operations
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.onUnitChange = function () {
        var _this = this;
        // unit switch button click/change subscription
        this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            if (x && _this.CalculatedData) {
                // calculated change detection when by changing the object
                _this.CalculatedData = Object.assign({}, _this.CalculatedData);
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
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.onTemperatureChangeUpdateCalculator = function () {
        var _this = this;
        // temperature switch button click/change subscription
        this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe(function (x) {
            if (x) {
                _this.resetFormAndCalculation();
            }
        });
    };
    // form control changes subcription and update the graph data
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.getControlValue = function (fieldName) {
        if (this.glandSizeRectangleInternalVacuumForm
            && this.glandSizeRectangleInternalVacuumForm.controls[fieldName]
            && this.glandSizeRectangleInternalVacuumForm.controls[fieldName].value) {
            return (+this.glandSizeRectangleInternalVacuumForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3);
        }
    };
    // get calculated field values by fieldname
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.getCalculatedControlValue = function (fieldName) {
        if (this.CalculatedData) {
            var fieldValue = this.CalculatedData[fieldName];
            if (fieldValue) {
                return (+fieldValue).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3);
            }
        }
    };
    // form submit event
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.onSubmit = function (isSubmitted) {
        var _this = this;
        if (isSubmitted === void 0) { isSubmitted = false; }
        this.CalculatedData = null;
        // reset error, warnings
        this.resetErroAndWarnings();
        // reset calculated output
        this.resetCalculatedLabelValue();
        this.payLoad = this.glandSizeRectangleInternalVacuumForm.value;
        this.isSubmitted = isSubmitted;
        // stop here if form is invalid/Not_valid
        if (this.glandSizeRectangleInternalVacuumForm.invalid) {
            return;
        }
        // perform calculation
        this.glandSizeRectangularGlandExternalVacuumOnlyService.createGland(this.glandSizeRectangleInternalVacuumForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(function (resp) {
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
                                    _this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? resp.data[responseDataKeys[keyIndex]].toFixed((_this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) ? 3 : 2) : resp.data[responseDataKeys[keyIndex]];
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
                                    _this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = resp.data[responseDataKeys[keyIndex]] ? resp.data[responseDataKeys[keyIndex]].toFixed((_this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) ? 3 : 2) : resp.data[responseDataKeys[keyIndex]];
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
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.onReset = function () {
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
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.resetFormAndCalculation = function () {
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
                    // get fields key from resp data
                    // const responseDataKeys = Object.keys(resp.data);
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
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
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.onPrint = function () {
        this.printService.generatePdf("rectangleGland");
    };
    // create form group
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.createForm = function () {
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
    };
    // reset auth token
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.setAuth = function () {
        this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (r) { return r; });
    };
    // add client errors
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.addClientErrors = function (error) {
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
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.addClientWarnings = function (warning) {
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
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.resetErroAndWarnings = function () {
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
    };
    // reset calculated label or output value in JSON config
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.resetCalculatedLabelValue = function () {
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
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.onCopy = function () {
        var formAndOutputData;
        // save calculated data to local storage
        if (this.CalculatedData) {
            formAndOutputData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.glandSizeRectangleInternalVacuumForm.value), this.CalculatedData);
        }
        else {
            formAndOutputData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.glandSizeRectangleInternalVacuumForm.value);
        }
        formAndOutputData.calculatorType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingRectangularGlandExternalVacuumOnly;
        localStorage.setItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["calculatedDataKeys"].RECTANGULAR_GLAND_EXTERNAL, JSON.stringify(formAndOutputData));
        // this.cookieService.set('lastCalculatedData', JSON.stringify(resp.data));
        this.toastService.showSucces("Calculator data copied !");
    };
    // component destroy
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.prototype.ngOnDestroy = function () {
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
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.ɵfac = function GlandSizeRectangularGlandExternalVacuumOnlyComponent_Factory(t) { return new (t || GlandSizeRectangularGlandExternalVacuumOnlyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_11__["RectangleGlandCalcValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gland_size_rectangular_gland_external_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__["GlandSizeRectangularGlandExternalVacuumOnlyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"])); };
    GlandSizeRectangularGlandExternalVacuumOnlyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GlandSizeRectangularGlandExternalVacuumOnlyComponent, selectors: [["app-gland-size-rectangular-gland-external-vacuum-only"]], decls: 43, vars: 6, consts: [[1, "row"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [1, "graph-sec"], [1, "graph-bg", "rectangle-OD"], [1, "gld-id"], [1, "gld-width"], [1, "gld-depth"], [1, "top-radii"], [1, "bottom-radii"], [1, "gap-full-comp", "rect-gap"], [1, "rect-static-value"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "ignorePdf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1", "ignorePdf"], [3, "form", "control", "isSubmitted", "isShowCopyBtn", "reset", "print", "copy"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [3, "form", "isSubmitted", "calculatorJSON", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings"]], template: function GlandSizeRectangularGlandExternalVacuumOnlyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GlandSizeRectangularGlandExternalVacuumOnlyComponent_form_2_Template, 6, 15, "form", 2);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "GLAND OD: ");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "(may or ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "may not exist) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, ".005");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "user-rules");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.calculatorConfig && ctx.glandSizeRectangleInternalVacuumForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandODNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandWidthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("glandDepthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCalculatedControlValue("bottomRadiiNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getControlValue("gapNominal"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__["UserRulesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__["DynamicFormTwoColumnLayoutComponent"]], styles: [".graph-sec[_ngcontent-%COMP%]   .rectangle-OD[_ngcontent-%COMP%] {\n\tbackground: url(/assets/img/rectangleOd_graph.jpg) no-repeat;\n\tmargin-bottom: 20px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.rectangle-OD[_ngcontent-%COMP%]   .rect-static-value[_ngcontent-%COMP%] {\n\ttop: 171px;\n\tright: -10px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.rectangle-OD[_ngcontent-%COMP%]   div.gld-width[_ngcontent-%COMP%] {\n\tbottom: 17px;\n\tright: 87px;\n\twidth: 98px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.rectangle-OD[_ngcontent-%COMP%]   div.gld-depth[_ngcontent-%COMP%] {\n\tbottom: 73px;\n\tleft: 10px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.rectangle-OD[_ngcontent-%COMP%]   div.bottom-radii[_ngcontent-%COMP%] {\n\tbottom: 5px;\n\tright: 11px;\n\twidth: auto;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.rectangle-OD[_ngcontent-%COMP%]   div.gld-id[_ngcontent-%COMP%] {\n\ttop: 96px;\n\tleft: inherit;\n\tright: 92px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.rectangle-OD[_ngcontent-%COMP%]   .rect-gap[_ngcontent-%COMP%] {\n\ttop: 56px;\n\tright: 10px;\n\ttext-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ2xlLWdsYW5kLWNhbGMvZ2xhbmQtc2l6ZS1yZWN0YW5ndWxhci1nbGFuZC1leHRlcm5hbC12YWN1dW0tb25seS9nbGFuZC1zaXplLXJlY3Rhbmd1bGFyLWdsYW5kLWV4dGVybmFsLXZhY3V1bS1vbmx5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw0REFBNEQ7Q0FDNUQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUVBO0NBQ0MsU0FBUztDQUNULGFBQWE7Q0FDYixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsV0FBVztDQUNYLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL3JlY3RhbmdsZS1nbGFuZC1jYWxjL2dsYW5kLXNpemUtcmVjdGFuZ3VsYXItZ2xhbmQtZXh0ZXJuYWwtdmFjdXVtLW9ubHkvZ2xhbmQtc2l6ZS1yZWN0YW5ndWxhci1nbGFuZC1leHRlcm5hbC12YWN1dW0tb25seS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXBoLXNlYyAucmVjdGFuZ2xlLU9EIHtcblx0YmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL3JlY3RhbmdsZU9kX2dyYXBoLmpwZykgbm8tcmVwZWF0O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5yZWN0YW5nbGUtT0QgLnJlY3Qtc3RhdGljLXZhbHVlIHtcblx0dG9wOiAxNzFweDtcblx0cmlnaHQ6IC0xMHB4O1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5yZWN0YW5nbGUtT0QgZGl2LmdsZC13aWR0aCB7XG5cdGJvdHRvbTogMTdweDtcblx0cmlnaHQ6IDg3cHg7XG5cdHdpZHRoOiA5OHB4O1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5yZWN0YW5nbGUtT0QgZGl2LmdsZC1kZXB0aCB7XG5cdGJvdHRvbTogNzNweDtcblx0bGVmdDogMTBweDtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcucmVjdGFuZ2xlLU9EIGRpdi5ib3R0b20tcmFkaWkge1xuXHRib3R0b206IDVweDtcblx0cmlnaHQ6IDExcHg7XG5cdHdpZHRoOiBhdXRvO1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5yZWN0YW5nbGUtT0QgZGl2LmdsZC1pZCB7XG5cdHRvcDogOTZweDtcblx0bGVmdDogaW5oZXJpdDtcblx0cmlnaHQ6IDkycHg7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnLnJlY3RhbmdsZS1PRCAucmVjdC1nYXAge1xuXHR0b3A6IDU2cHg7XG5cdHJpZ2h0OiAxMHB4O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"] });
    return GlandSizeRectangularGlandExternalVacuumOnlyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlandSizeRectangularGlandExternalVacuumOnlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-gland-size-rectangular-gland-external-vacuum-only',
                templateUrl: './gland-size-rectangular-gland-external-vacuum-only.component.html',
                styleUrls: ['./gland-size-rectangular-gland-external-vacuum-only.component.css']
            }]
    }], function () { return [{ type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcService"] }, { type: _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"] }, { type: _shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"] }, { type: _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_11__["RectangleGlandCalcValidationService"] }, { type: _gland_size_rectangular_gland_external_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__["GlandSizeRectangularGlandExternalVacuumOnlyService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"] }, { type: _shared_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.module.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.module.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: GlandSizeRectangularGlandExternalVacuumOnlyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeRectangularGlandExternalVacuumOnlyModule", function() { return GlandSizeRectangularGlandExternalVacuumOnlyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _gland_size_rectangular_gland_external_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gland-size-rectangular-gland-external-vacuum-only-routing.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only-routing.module.ts");
/* harmony import */ var _gland_size_rectangular_gland_external_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gland-size-rectangular-gland-external-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.component.ts");
/* harmony import */ var _gland_size_rectangular_gland_external_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gland-size-rectangular-gland-external-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.service.ts");
// core improts



// application imports






var GlandSizeRectangularGlandExternalVacuumOnlyModule = /** @class */ (function () {
    function GlandSizeRectangularGlandExternalVacuumOnlyModule() {
    }
    GlandSizeRectangularGlandExternalVacuumOnlyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GlandSizeRectangularGlandExternalVacuumOnlyModule });
    GlandSizeRectangularGlandExternalVacuumOnlyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GlandSizeRectangularGlandExternalVacuumOnlyModule_Factory(t) { return new (t || GlandSizeRectangularGlandExternalVacuumOnlyModule)(); }, providers: [
            _gland_size_rectangular_gland_external_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeRectangularGlandExternalVacuumOnlyService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                _gland_size_rectangular_gland_external_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule"]
            ]] });
    return GlandSizeRectangularGlandExternalVacuumOnlyModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GlandSizeRectangularGlandExternalVacuumOnlyModule, { declarations: [_gland_size_rectangular_gland_external_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeRectangularGlandExternalVacuumOnlyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
        _gland_size_rectangular_gland_external_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangularGlandExternalVacuumOnlyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_gland_size_rectangular_gland_external_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["GlandSizeRectangularGlandExternalVacuumOnlyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                    _gland_size_rectangular_gland_external_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule"]
                ],
                providers: [
                    _gland_size_rectangular_gland_external_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["GlandSizeRectangularGlandExternalVacuumOnlyService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.service.ts":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.service.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: GlandSizeRectangularGlandExternalVacuumOnlyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeRectangularGlandExternalVacuumOnlyService", function() { return GlandSizeRectangularGlandExternalVacuumOnlyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _models_glandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/glandSizeRectangularGlandInternalVacuumOnlyDTO */ "./client/app/models/glandSizeRectangularGlandInternalVacuumOnlyDTO.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
// core imports

// application imports





var GlandSizeRectangularGlandExternalVacuumOnlyService = /** @class */ (function () {
    function GlandSizeRectangularGlandExternalVacuumOnlyService(_http) {
        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
    }
    GlandSizeRectangularGlandExternalVacuumOnlyService.prototype.createGland = function (form, unit, unitTemp) {
        var body = new _models_glandSizeRectangularGlandInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_2__["GlandSizeRectangularGlandInternalVacuumOnlyDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        body.inputOption = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax.toString();
        body.calculationType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["calculationType"].GLAND_SIZING;
        body.rectangleType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["rectangleType"].RECTANGLE_OD;
        return this._http.post(this.baseUrl + "glandsizecalc/createGland", body);
    };
    GlandSizeRectangularGlandExternalVacuumOnlyService.ɵfac = function GlandSizeRectangularGlandExternalVacuumOnlyService_Factory(t) { return new (t || GlandSizeRectangularGlandExternalVacuumOnlyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    GlandSizeRectangularGlandExternalVacuumOnlyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlandSizeRectangularGlandExternalVacuumOnlyService, factory: GlandSizeRectangularGlandExternalVacuumOnlyService.ɵfac, providedIn: 'root' });
    return GlandSizeRectangularGlandExternalVacuumOnlyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlandSizeRectangularGlandExternalVacuumOnlyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=gland-size-rectangular-gland-external-vacuum-only-gland-size-rectangular-gland-external-vacuum-only-module.js.map