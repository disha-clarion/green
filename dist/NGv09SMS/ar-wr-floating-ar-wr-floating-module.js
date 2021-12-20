(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ar-wr-floating-ar-wr-floating-module"],{

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ArWrFloatingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingRoutingModule", function() { return ArWrFloatingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ar-wr-floating.component */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.component.ts");
// core imports


// application imports



var routes = [
    { path: '', component: _ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_2__["ArWrFloatingComponent"], pathMatch: 'full' }
];
var ArWrFloatingRoutingModule = /** @class */ (function () {
    function ArWrFloatingRoutingModule() {
    }
    ArWrFloatingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArWrFloatingRoutingModule });
    ArWrFloatingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArWrFloatingRoutingModule_Factory(t) { return new (t || ArWrFloatingRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ArWrFloatingRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArWrFloatingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrFloatingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-validation.service.ts":
/*!***********************************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-validation.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ArWrFloatingValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingValidationService", function() { return ArWrFloatingValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/custom-validations/comparison-validation.directive */ "./client/app/shared/directives/custom-validations/comparison-validation.directive.ts");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/error.model */ "./client/app/models/error.model.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
// core imports

// application imports






var ArWrFloatingValidationService = /** @class */ (function () {
    function ArWrFloatingValidationService(helperService, unitButtonService) {
        this.helperService = helperService;
        this.unitButtonService = unitButtonService;
    }
    /********************************************************************/
    /*********************** Client Side Validation *********************/
    /******************** Prevent the form submission********************/
    /********************************************************************/
    // Function serviceStorageTemperature min validation
    ArWrFloatingValidationService.prototype.serviceStorageTemperatureMinValidation = function () {
        var _this = this;
        return function (control) {
            var serviceStorageTemperatureAmbient75FMinControl = control.get('serviceStorageTemperatureAmbient75FMin');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var error = null;
            if (serviceStorageTemperatureAmbient75FMinControl
                && serviceStorageTemperatureAmbient75FMinControl.value) {
                // check O-ring cross section is in range or not else set error message
                var serviceStorageTemperatureAmbient75FMinError = void 0;
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) {
                    serviceStorageTemperatureAmbient75FMinError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(serviceStorageTemperatureAmbient75FMinControl.value, "75", "serviceStorageTemperatureAmbient75FMin", "Minimum Temperature", "Must be 75°F or less");
                }
                else if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                    serviceStorageTemperatureAmbient75FMinError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(serviceStorageTemperatureAmbient75FMinControl.value, "24", "serviceStorageTemperatureAmbient75FMin", "Minimum Temperature", "Must be 24°C or less");
                }
                if (serviceStorageTemperatureAmbient75FMinError) {
                    error = serviceStorageTemperatureAmbient75FMinError;
                }
            }
            _this.helperService.setValidationErrorToFormControl(serviceStorageTemperatureAmbient75FMinControl, error, "serviceStorageTemperatureAmbientMin");
            return error;
        };
    };
    // Function serviceStorageTemperature max validation
    ArWrFloatingValidationService.prototype.serviceStorageTemperatureMaxValidation = function () {
        var _this = this;
        return function (control) {
            var serviceStorageTemperatureAmbient75FMaxControl = control.get('serviceStorageTemperatureAmbient75FMax');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var error = null;
            if (serviceStorageTemperatureAmbient75FMaxControl
                && serviceStorageTemperatureAmbient75FMaxControl.value) {
                // check O-ring cross section is in range or not else set error message
                var serviceStorageTemperatureAmbient75FMaxError = void 0;
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) {
                    serviceStorageTemperatureAmbient75FMaxError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(serviceStorageTemperatureAmbient75FMaxControl.value, "75", "serviceStorageTemperatureAmbient75FMax", "Maximum Temperature", "Must be 75°F or more");
                }
                else if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                    serviceStorageTemperatureAmbient75FMaxError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(serviceStorageTemperatureAmbient75FMaxControl.value, "24", "serviceStorageTemperatureAmbient75FMax", "Maximum Temperature", "Must be 24°C or more");
                }
                if (serviceStorageTemperatureAmbient75FMaxError) {
                    error = serviceStorageTemperatureAmbient75FMaxError;
                }
            }
            _this.helperService.setValidationErrorToFormControl(serviceStorageTemperatureAmbient75FMaxControl, error, "serviceStorageTemperatureAmbientMax");
            return error;
        };
    };
    /********************************************************************/
    /************** O-Ring - Internal Vacuum only Warnings **************/
    /**************** Doen't prevent the form submission*****************/
    /********************************************************************/
    // gland width validation
    ArWrFloatingValidationService.prototype.clearanceValidationBasedOnPumpAndComponentType = function (control) {
        var pumpTypeControl = control.get('pumpType');
        var componentTypeControl = control.get('componentType');
        if (pumpTypeControl && pumpTypeControl.value && componentTypeControl && componentTypeControl.value) {
            var currentSelectedUnit = this.unitButtonService.getCurrentUnitValue;
            var error = new _models_error_model__WEBPACK_IMPORTED_MODULE_2__["ErrorModel"]();
            error.field = '';
            error.type = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning;
            var bushing = "Follow OEM Bushing Clearance if Available";
            var bearing = "Follow OEM Bearing Clearance if Available";
            if (pumpTypeControl.value.id === 3 && componentTypeControl.value.id === 1) { // pumpType "VS" and componentType "Wear Ring"
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                    error.detail = "Normal Wear Ring Clearance For VS Pumps is .05 mm Over Bearing Clearance (Or OEM Standard)";
                }
                else {
                    // default inch unit is considered
                    error.detail = "Normal Wear Ring Clearance For VS Pumps is .002 inch Over Bearing Clearance(Or OEM Standard)";
                }
            }
            else if (componentTypeControl.value.id === 2) { // componentType "Bushing"
                error.detail = bushing;
            }
            else if (componentTypeControl.value.id === 3) { // componentType Bearing"
                error.detail = bearing;
            }
            else {
                return null;
            }
            return error;
        }
        else {
            return null;
        }
    };
    ArWrFloatingValidationService.ɵfac = function ArWrFloatingValidationService_Factory(t) { return new (t || ArWrFloatingValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_5__["UnitButtonService"])); };
    ArWrFloatingValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArWrFloatingValidationService, factory: ArWrFloatingValidationService.ɵfac, providedIn: 'root' });
    return ArWrFloatingValidationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrFloatingValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_5__["UnitButtonService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.component.ts":
/*!**************************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArWrFloatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingComponent", function() { return ArWrFloatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/error.model */ "./client/app/models/error.model.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./client/app/shared/services/auth.service.ts");
/* harmony import */ var _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ar-wr-calc.service */ "./client/app/ar-wr-calc/ar-wr-calc.service.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts");
/* harmony import */ var _shared_services_print_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/print.service */ "./client/app/shared/services/print.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ar-wr-floating.service */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.service.ts");
/* harmony import */ var _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ar-wr-floating-validation.service */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-validation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/calculator-toolbar/calculator-toolbar.component */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts");

// core imports

// third party imports


















function ArWrFloatingComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ArWrFloatingComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.performCalculation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "IMPORTANT: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00A0*\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Are required fields. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "calculator-toolbar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reset", function ArWrFloatingComponent_form_2_Template_calculator_toolbar_reset_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onReset(); })("print", function ArWrFloatingComponent_form_2_Template_calculator_toolbar_print_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onPrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "dynamic-form-two-column-layout", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dropdownSelectionChange", function ArWrFloatingComponent_form_2_Template_dynamic_form_two_column_layout_dropdownSelectionChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.dropdownSelectionChange($event); })("numericInputValueChange", function ArWrFloatingComponent_form_2_Template_dynamic_form_two_column_layout_numericInputValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.numericInputValueChange($event); })("focusOut", function ArWrFloatingComponent_form_2_Template_dynamic_form_two_column_layout_focusOut_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.lostFocus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("form-horizontal ", ctx_r0.calculatorConfig.form.form_title_css_class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.arwrFloatingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("calculatorConfig", ctx_r0.calculatorConfig)("form", ctx_r0.arwrFloatingForm)("isSubmitted", ctx_r0.isSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx_r0.arwrFloatingForm)("isSubmitted", ctx_r0.isSubmitted)("calculatorJSON", ctx_r0.calculatorConfig)("isShowNotes", true)("decimalPoint", 3)("isUpdateDecimalPointOnUnitChange", false)("clientErrors", ctx_r0.clientErrors)("clientWarnings", ctx_r0.clientWarnings)("serverErrors", ctx_r0.serverErrors)("serverWarnings", ctx_r0.serverWarnings)("isWrAr", true)("notes", ctx_r0.notes);
} }
var ArWrFloatingComponent = /** @class */ (function () {
    // constructor
    function ArWrFloatingComponent(controlBaseService, authService, arWrCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, helperService, arWrFloatingService, arWrFloatingValidationService) {
        var _this = this;
        this.controlBaseService = controlBaseService;
        this.authService = authService;
        this.arWrCalcService = arWrCalcService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.printService = printService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.helperService = helperService;
        this.arWrFloatingService = arWrFloatingService;
        this.arWrFloatingValidationService = arWrFloatingValidationService;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ControlType"];
        this.isSubmitted = false;
        this.payLoad = '';
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        this.notes = [
            "Material selection for the application is subject to media compatibility and design \n    solution reliant on verification by GT engineering."
        ];
        // o-ring calculator config subscription
        this.arWrDataSubscription = this.arWrCalcService.arWrConfig$.subscribe(function (x) {
            if (x) {
                // calculator - Wr/Ar Floating
                _this.calculatorConfig = x.calculators[1];
                // send calculator to dynamic form service
                _this.dynamicFormTwoColumnLayoutService.sendCalculator(x.calculators[1]);
                // create form
                _this.createForm();
            }
        });
        // unit change
        this.onUnitChange();
    }
    Object.defineProperty(ArWrFloatingComponent.prototype, "CalculatedData", {
        get: function () {
            return this.calculatedData;
        },
        set: function (val) {
            this.calculatedData = val;
        },
        enumerable: true,
        configurable: true
    });
    // form control changes subcription and update the graph data
    ArWrFloatingComponent.prototype.getControlValue = function (fieldName) {
        if (this.arwrFloatingForm && this.arwrFloatingForm.controls[fieldName]) {
            return this.arwrFloatingForm.controls[fieldName].value;
        }
        else {
            return "";
        }
    };
    // onInit
    ArWrFloatingComponent.prototype.ngOnInit = function () {
        this.onReset();
        this.isSubmitted = false;
        this.CalculatedData = {};
    };
    // unit change perform operations
    ArWrFloatingComponent.prototype.onUnitChange = function () {
        var _this = this;
        // reset 
        this.resetFormAndCalculation();
        // unit switch button click/change subscription
        this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            var _a, _b, _c, _d;
            if (x) {
                // reset 
                _this.resetFormAndCalculation();
                // set temperature
                _this.setTemperature();
                if (_this.CalculatedData) {
                    // calculated change detection when by changing the object
                    _this.CalculatedData = Object.assign({}, _this.CalculatedData);
                }
                // get rotor and stator cte dropdown controls
                var selectedCustomRotatingMaterialControl = (_a = _this.arwrFloatingForm) === null || _a === void 0 ? void 0 : _a.controls["customRotatingMaterial"];
                var selectedCustomStationaryMaterialControl = (_b = _this.arwrFloatingForm) === null || _b === void 0 ? void 0 : _b.controls["customStationaryMaterial"];
                // clear rotor CTE custom input values
                if (selectedCustomRotatingMaterialControl) {
                    selectedCustomRotatingMaterialControl.setValue("");
                }
                // clear stator CTE custom input values
                if (selectedCustomStationaryMaterialControl) {
                    selectedCustomStationaryMaterialControl.setValue("");
                }
                // convert the form data
                var convertedForm = _this.helperService.convertFormUnitControlValuesAndSet((_this.calculatorConfig
                    && (_this.calculatorConfig.form ? _this.calculatorConfig.form : null)), _this.arwrFloatingForm, x);
                // rotating material dropdown selected and not custom selected
                var selectedRotatingMaterialControl = (_c = _this.arwrFloatingForm) === null || _c === void 0 ? void 0 : _c.controls["rotatingMaterial"];
                var selectedStationaryMaterialControl = (_d = _this.arwrFloatingForm) === null || _d === void 0 ? void 0 : _d.controls["stationaryMaterial"];
                // rotating material dropdown selected and not custom selected
                // convert 10 power -6 to XX.XX
                if (selectedRotatingMaterialControl
                    && selectedRotatingMaterialControl.value
                    && selectedRotatingMaterialControl.value.value > 0) {
                    _this.arWrCalcService.getAndSetMaterialCTE(_this.arwrFloatingForm, "rotatingMaterial", "customRotatingMaterial", selectedRotatingMaterialControl.value);
                }
                // stationary material dropdown selected and not custom selected
                // convert 10 power -6 to XX.XX
                if (selectedStationaryMaterialControl
                    && selectedStationaryMaterialControl.value
                    && selectedStationaryMaterialControl.value.value > 0) {
                    _this.arWrCalcService.getAndSetMaterialCTE(_this.arwrFloatingForm, "stationaryMaterial", "customStationaryMaterial", selectedStationaryMaterialControl.value);
                }
                if (_this.calculatorConfig && _this.calculatorConfig.form) {
                    // reset the temperature range label value
                    _this.helperService.resetLabel(_this.calculatorConfig.form.left_column.form_layout_row, "compositeTemperatureRage");
                    _this.getSetCompositeMaterialData(); // set the temperature range again
                }
                if (convertedForm) {
                    _this.arwrFloatingForm = convertedForm;
                }
            }
        });
    };
    // set temperature
    ArWrFloatingComponent.prototype.setTemperature = function () {
        var currentUnit = this.unitButtonService.getCurrentUnitValue;
        var currentTemp = this.temperatureButtonService.getCurrentTemperatureValue;
        if (currentUnit && currentUnit.id > 0
            && currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].INCH
            && currentTemp && currentTemp.id > 0
            && currentTemp.id !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Temperature"].FAHRENHEIT) {
            this.helperService.setAndSendTemperatureManually(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Temperature"].FAHRENHEIT);
        }
        if (currentUnit && currentUnit.id > 0
            && currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].MILLI_METER
            && currentTemp && currentTemp.id > 0
            && currentTemp.id !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Temperature"].CELCIUS) {
            this.helperService.setAndSendTemperatureManually(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Temperature"].CELCIUS);
        }
    };
    // calculate button click handler / form submit handler
    ArWrFloatingComponent.prototype.performCalculation = function () {
        this.isSubmitted = true;
        this.onSubmit();
    };
    ArWrFloatingComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.isSubmitted) {
            return;
        }
        this.CalculatedData = {};
        // reset error, warnings
        this.resetErroAndWarnings();
        // reset calculated output
        this.resetCalculatedLabelValue();
        if (!this.calculatorConfig) {
            return;
        }
        if (!this.arwrFloatingForm || !this.arwrFloatingForm.value) {
            return;
        }
        this.payLoad = this.arwrFloatingForm.value;
        // client errors that doesnot prevent to submit forms/calculation
        // glandWidth validation
        if (this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["WrArCalc_FloatingIn_Validators"].CLEARANCE_VALIDATION)) {
            var clearanceBasedOnPumpAndComponentTypeError = this.arWrFloatingValidationService.clearanceValidationBasedOnPumpAndComponentType(this.arwrFloatingForm);
            if (clearanceBasedOnPumpAndComponentTypeError) {
                this.addClientErrors(clearanceBasedOnPumpAndComponentTypeError);
            }
        }
        // stop here if form is invalid/Not_valid
        if (!this.arwrFloatingForm || this.arwrFloatingForm.invalid) {
            return;
        }
        // perform calculation
        this.arWrFloatingService.floatingCalculation(this.arwrFloatingForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(function (resp) {
            // response
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
                                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ControlSubType"].calculated_label && responseDataKeys[keyIndex] === formControl.key) {
                                        // output values validation
                                        // Check cross section thickness validation
                                        var outMachineCompositeODInch = resp.data['machineCompositeODInch'];
                                        var outFinishMachineCompositeIDAfterInstallationInch = resp.data['finishMachineCompositeIDAfterInstallationInch'];
                                        var crosssectionThickness = 0.236;
                                        if (_this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].MILLI_METER) {
                                            crosssectionThickness = 0.6;
                                        }
                                        if (!((outMachineCompositeODInch - outFinishMachineCompositeIDAfterInstallationInch) > crosssectionThickness)) {
                                            var crossSectionThicknessError = new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["ErrorModel"]();
                                            crossSectionThicknessError.field = '';
                                            crossSectionThicknessError.type = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"].Error;
                                            crossSectionThicknessError.detail = "Check cross section thickness.";
                                            _this.addClientErrors(crossSectionThicknessError);
                                        }
                                        // set JSON output label
                                        // bind calculated result to output label                        
                                        _this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "" + ((resp.data[responseDataKeys[keyIndex]]
                                            && resp.data[responseDataKeys[keyIndex]] !== null
                                            && resp.data[responseDataKeys[keyIndex]] !== undefined
                                            && !isNaN((+resp.data[responseDataKeys[keyIndex]])))
                                            ? parseFloat(resp.data[responseDataKeys[keyIndex]]).toFixed((_this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].MILLI_METER ? 2 : 3))
                                            : ((resp.data[responseDataKeys[keyIndex]] === null || resp.data[responseDataKeys[keyIndex]] === undefined || resp.data[responseDataKeys[keyIndex]] === "") ? "NA" : resp.data[responseDataKeys[keyIndex]]));
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
    // create form group
    ArWrFloatingComponent.prototype.createForm = function () {
        var _this = this;
        // get form controls nested array
        var leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.arwrFloatingForm, this.calculatorConfig.form.left_column.form_layout_row);
        var rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.arwrFloatingForm, this.calculatorConfig.form.right_column.form_layout_row);
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
        this.arwrFloatingForm = this.controlBaseService.toFormGroup(filteredControls);
        // get and set validations
        var validations = [];
        var asyncValidations = [];
        // get validation key from json config object
        var jsonConfigValidationsArray = this.calculatorConfig.form.form_validation;
        for (var index = 0; index < jsonConfigValidationsArray.length; index++) {
            var validationFuncKey = jsonConfigValidationsArray[index];
            switch (validationFuncKey) {
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["WrArCalc_FloatingIn_Validators"].SERVICE_STORAGE_TEMPERATURE_MIN:
                    validations.push(this.arWrFloatingValidationService.serviceStorageTemperatureMinValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["WrArCalc_FloatingIn_Validators"].SERVICE_STORAGE_TEMPERATURE_MAX:
                    validations.push(this.arWrFloatingValidationService.serviceStorageTemperatureMaxValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["WrArCalc_FloatingIn_Validators"].STATIONARY_ELEMENT_ID_MAX:
                    validations.push(this.arWrCalcService.stationaryElementIDMaxValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["WrArCalc_FloatingIn_Validators"].ROTATING_ELEMENT_OD_MAX:
                    validations.push(this.arWrCalcService.rotatingElementODMaxValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["WrArCalc_FloatingIn_Validators"].STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN:
                    validations.push(this.arWrCalcService.stationaryMinLessThanRotatingMinValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["WrArCalc_FloatingIn_Validators"].STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX:
                    validations.push(this.arWrCalcService.stationaryMaxLessThanRotatingMaxValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["WrArCalc_FloatingIn_Validators"].SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN:
                    asyncValidations.push(this.arWrCalcService.asyncServiceStorageTemperatureMinValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["WrArCalc_FloatingIn_Validators"].SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX:
                    asyncValidations.push(this.arWrCalcService.asyncServiceStorageTemperatureMaxValidation());
                    break;
            }
        }
        // set custom validations with params
        this.arwrFloatingForm.setValidators(validations);
        // set async alidators
        this.arwrFloatingForm.setAsyncValidators(asyncValidations);
    };
    // reset auth token
    ArWrFloatingComponent.prototype.setAuth = function () {
        this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (r) { return r; });
    };
    // add client errors
    ArWrFloatingComponent.prototype.addClientErrors = function (error) {
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
    ArWrFloatingComponent.prototype.addClientWarnings = function (warning) {
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
    ArWrFloatingComponent.prototype.resetErroAndWarnings = function () {
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
    };
    // reset calculated label or output value in JSOn config
    ArWrFloatingComponent.prototype.resetCalculatedLabelValue = function () {
        this.CalculatedData = {};
        // reset left form data
        // loop through each form left column row
        for (var rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (var columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (var controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    var formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ControlSubType"].calculated_label) {
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
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ControlSubType"].calculated_label) {
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
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
                        }
                    }
                }
            }
        }
    };
    ArWrFloatingComponent.prototype.resetFormAndCalculation = function () {
        // reset form submitted status to false 
        this.isSubmitted = false;
        // reset client errors and warnings
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
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
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ControlSubType"].calculated_label) {
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
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ControlSubType"].calculated_label) {
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
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "";
                        }
                    }
                }
            }
        }
        // reset calculated data received after calculation
        this.CalculatedData = null;
    };
    // on reset button handler
    ArWrFloatingComponent.prototype.onReset = function () {
        if (!this.arwrFloatingForm) {
            return;
        }
        // get form controls key
        var formControlKeys = Object.keys(this.arwrFloatingForm.controls);
        // loop through the reactive form/formgroup controls 
        for (var index = 0; index < formControlKeys.length; index++) {
            var formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
            if (formControlDefaultValue) {
                this.arwrFloatingForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
            }
            else {
                this.arwrFloatingForm.controls[formControlKeys[index]].setValue('');
            }
        }
        this.resetFormAndCalculation();
    };
    // print button event handler
    ArWrFloatingComponent.prototype.onPrint = function () {
        this.printService.generatePdf("WrArFloating");
    };
    // dropdown change event handler of the dynamic form
    ArWrFloatingComponent.prototype.dropdownSelectionChange = function (event) {
        // clearance dropdown selected value
        this.calculateAndSetClearanceTarget();
        // get and set rotating material change when custom no selected
        if (event.formControl.key === "rotatingMaterial" && event.value.value > 0) {
            this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm, event.formControl.key, "customRotatingMaterial", event.value);
        }
        // get and set stationary material change when custom no selected
        if (event.formControl.key === "stationaryMaterial" && event.value.value > 0) {
            this.arWrCalcService.getAndSetMaterialCTE(this.arwrFloatingForm, event.formControl.key, "customStationaryMaterial", event.value);
        }
        // get temperature ranges for the selected Composite Material
        // get and set stationary material change when custom no selected
        if (event.formControl.key === "composite" && event.value.value > 0) {
            this.getSetCompositeMaterialData();
        }
        // when component type eliminate the “AR-1” in the composite list
        if (event.formControl.key === "componentType" && event.value.value > 0) {
            var calculatorForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.calculatorConfig.form);
            var calculatorLeftColumnRows = [];
            // when component type "Wearing(1)" is selected
            calculatorLeftColumnRows = this.helperService.showOrHideFormControlByControlKey(calculatorForm.left_column.form_layout_row, "composite", 0, true, (event.value.value === 1 ? false : true));
            var updatedCalculatorForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, calculatorForm), { left_column: { form_layout_row: calculatorLeftColumnRows } });
            // update updatedCalculatorForm object         
            this.calculatorConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.calculatorConfig), { form: updatedCalculatorForm });
        }
    };
    // get and set composite material
    ArWrFloatingComponent.prototype.getSetCompositeMaterialData = function () {
        if (!this.calculatorConfig && !this.calculatorConfig.form) {
            return;
        }
        this.arWrCalcService.getSetCompositeMaterialData(this.calculatorConfig.form, this.arwrFloatingForm, "compositeTemperatureRage");
    };
    // numeric input value change event handler of the dynamic form
    ArWrFloatingComponent.prototype.numericInputValueChange = function (event) {
        if (event.key.toLowerCase() === ("rotatingElementODMax").toLowerCase()) {
            this.calculateAndSetClearanceTarget();
        }
    };
    // form value changed 
    // // formValueChanged() {
    // //   // perform calculation again
    // //   this.onSubmit();
    // // }
    // focus lost on form controls 
    ArWrFloatingComponent.prototype.lostFocus = function (event) {
        // perform calculation again
        this.onSubmit();
    };
    // calculate clearanceCLR based on the "rotatingElementODMax"
    ArWrFloatingComponent.prototype.calculateAndSetClearanceTarget = function () {
        var _this = this;
        // clearance dropdown selected value
        var customClearanceTargetDDLFC = this.arwrFloatingForm.controls["clearanceTarget"];
        // stabdard clearance
        if (customClearanceTargetDDLFC && customClearanceTargetDDLFC.value.value > 0) {
            var customClearanceTargetFC_1 = this.arwrFloatingForm.controls["customClearanceTarget"];
            // standard option selected
            this.arWrCalcService.getClearance(this.arwrFloatingForm, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["CalculatorTypes"].WrArFloating).subscribe(function (x) {
                if (x && customClearanceTargetFC_1 && (customClearanceTargetFC_1.value != x)) {
                    customClearanceTargetFC_1.setValue(x.toFixed((_this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].MILLI_METER ? 2 : 3)));
                }
            });
        }
    };
    // component destroy
    ArWrFloatingComponent.prototype.ngOnDestroy = function () {
        if (this.arWrDataSubscription) {
            this.arWrDataSubscription.unsubscribe();
        }
    };
    ArWrFloatingComponent.ɵfac = function ArWrFloatingComponent_Factory(t) { return new (t || ArWrFloatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_5__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_7__["ArWrCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_8__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_9__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_10__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_11__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_13__["ArWrFloatingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_14__["ArWrFloatingValidationService"])); };
    ArWrFloatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArWrFloatingComponent, selectors: [["app-ar-wr-floating"]], decls: 3, vars: 1, consts: [[1, "row", "wr-ar-pressin"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-4", "col-sm-4", "col-md-4", "col-lg-4", "col-xl-4", "ignorePdf"], [1, "info-tab", "pt-0"], [1, "required"], [1, "col-8", "col-sm-8", "col-md-8", "col-lg-8", "col-xl-8", "ignorePdf"], [3, "calculatorConfig", "form", "isSubmitted", "reset", "print"], [3, "form", "isSubmitted", "calculatorJSON", "isShowNotes", "decimalPoint", "isUpdateDecimalPointOnUnitChange", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings", "isWrAr", "notes", "dropdownSelectionChange", "numericInputValueChange", "focusOut"]], template: function ArWrFloatingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArWrFloatingComponent_form_2_Template, 12, 19, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.calculatorConfig && ctx.arwrFloatingForm);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_18__["DynamicFormTwoColumnLayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL2FyLXdyLWNhbGMvYXItd3ItZmxvYXRpbmcvYXItd3ItZmxvYXRpbmcuY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });
    return ArWrFloatingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArWrFloatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ar-wr-floating',
                templateUrl: './ar-wr-floating.component.html',
                styleUrls: ['./ar-wr-floating.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_5__["ControlBaseService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_7__["ArWrCalcService"] }, { type: _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_8__["DynamicFormTwoColumnLayoutService"] }, { type: _shared_services_print_service__WEBPACK_IMPORTED_MODULE_9__["PrintService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_10__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_11__["TemperatureButtonService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"] }, { type: _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_13__["ArWrFloatingService"] }, { type: _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_14__["ArWrFloatingValidationService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.module.ts":
/*!***********************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.module.ts ***!
  \***********************************************************************/
/*! exports provided: ArWrFloatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingModule", function() { return ArWrFloatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _ar_wr_floating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ar-wr-floating-routing.module */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-routing.module.ts");
/* harmony import */ var _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ar-wr-floating.service */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.service.ts");
/* harmony import */ var _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ar-wr-floating-validation.service */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating-validation.service.ts");
/* harmony import */ var _ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ar-wr-floating.component */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.component.ts");
// core improts



// application imports







var ArWrFloatingModule = /** @class */ (function () {
    function ArWrFloatingModule() {
    }
    ArWrFloatingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArWrFloatingModule });
    ArWrFloatingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArWrFloatingModule_Factory(t) { return new (t || ArWrFloatingModule)(); }, providers: [
            _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_6__["ArWrFloatingService"],
            _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_7__["ArWrFloatingValidationService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ar_wr_floating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArWrFloatingRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
            ]] });
    return ArWrFloatingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArWrFloatingModule, { declarations: [_ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_8__["ArWrFloatingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ar_wr_floating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArWrFloatingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrFloatingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ar_wr_floating_component__WEBPACK_IMPORTED_MODULE_8__["ArWrFloatingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ar_wr_floating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArWrFloatingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
                ],
                providers: [
                    _ar_wr_floating_service__WEBPACK_IMPORTED_MODULE_6__["ArWrFloatingService"],
                    _ar_wr_floating_validation_service__WEBPACK_IMPORTED_MODULE_7__["ArWrFloatingValidationService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.service.ts":
/*!************************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.service.ts ***!
  \************************************************************************/
/*! exports provided: ArWrFloatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrFloatingService", function() { return ArWrFloatingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _models_pressInDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/pressInDTO */ "./client/app/models/pressInDTO.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
// core imports

// application imports




var ArWrFloatingService = /** @class */ (function () {
    function ArWrFloatingService(_http) {
        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
    }
    ArWrFloatingService.prototype.floatingCalculation = function (form, unit, unitTemp) {
        var body = new _models_pressInDTO__WEBPACK_IMPORTED_MODULE_2__["PressInDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        return this._http.post(this.baseUrl + "wrar/floatingCalculation", body);
    };
    ArWrFloatingService.ɵfac = function ArWrFloatingService_Factory(t) { return new (t || ArWrFloatingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    ArWrFloatingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArWrFloatingService, factory: ArWrFloatingService.ɵfac, providedIn: 'root' });
    return ArWrFloatingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrFloatingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=ar-wr-floating-ar-wr-floating-module.js.map