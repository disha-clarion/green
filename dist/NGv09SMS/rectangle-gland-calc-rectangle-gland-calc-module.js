(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rectangle-gland-calc-rectangle-gland-calc-module"],{

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RectangleGlandCalcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleGlandCalcRoutingModule", function() { return RectangleGlandCalcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _rectangle_gland_calc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rectangle-gland-calc.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.component.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
// core imports


// application imports




var routes = [
    {
        path: '', component: _rectangle_gland_calc_component__WEBPACK_IMPORTED_MODULE_2__["RectangleGlandCalcComponent"], children: [
            { path: 'createRectangleGland', data: { calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingInternalVacuumOnly }, loadChildren: function () { return Promise.all(/*! import() | gland-size-rectangle-internal-vacuum-only-gland-size-rectangle-internal-vacuum-only-module */[__webpack_require__.e("common"), __webpack_require__.e("gland-size-rectangle-internal-vacuum-only-gland-size-rectangle-internal-vacuum-only-module")]).then(__webpack_require__.bind(null, /*! ./gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.module.ts")).then(function (m) { return m.GlandSizeRectangleInternalVacuumOnlyModule; }); } },
            { path: 'createDovetailGland', data: { calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingDovetailGlandVacuumOnly }, loadChildren: function () { return Promise.all(/*! import() | gland-size-dovetail-gland-vacuum-only-gland-size-dovetail-gland-vacuum-only-module */[__webpack_require__.e("common"), __webpack_require__.e("gland-size-dovetail-gland-vacuum-only-gland-size-dovetail-gland-vacuum-only-module")]).then(__webpack_require__.bind(null, /*! ./gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.module.ts")).then(function (m) { return m.GlandSizeDovetailGlandVacuumOnlyModule; }); } },
            { path: 'createHalfDovetailGland', data: { calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly }, loadChildren: function () { return Promise.all(/*! import() | gland-size-half-dovetail-gland-internal-vacuum-only-gland-size-half-dovetail-gland-internal-vacuum-only-module */[__webpack_require__.e("common"), __webpack_require__.e("gland-size-half-dovetail-gland-internal-vacuum-only-gland-size-half-dovetail-gland-internal-vacuum-only-module")]).then(__webpack_require__.bind(null, /*! ./gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.module.ts")).then(function (m) { return m.GlandSizeHalfDovetailGlandInternalVacuumOnlyModule; }); } },
            { path: 'createRectangleOdGland', data: { calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorTypes"].ORingRectangularGlandExternalVacuumOnly }, loadChildren: function () { return Promise.all(/*! import() | gland-size-rectangular-gland-external-vacuum-only-gland-size-rectangular-gland-external-vacuum-only-module */[__webpack_require__.e("common"), __webpack_require__.e("gland-size-rectangular-gland-external-vacuum-only-gland-size-rectangular-gland-external-vacuum-only-module")]).then(__webpack_require__.bind(null, /*! ./gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.module.ts")).then(function (m) { return m.GlandSizeRectangularGlandExternalVacuumOnlyModule; }); } }
        ],
    }
];
var RectangleGlandCalcRoutingModule = /** @class */ (function () {
    function RectangleGlandCalcRoutingModule() {
    }
    RectangleGlandCalcRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RectangleGlandCalcRoutingModule });
    RectangleGlandCalcRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RectangleGlandCalcRoutingModule_Factory(t) { return new (t || RectangleGlandCalcRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return RectangleGlandCalcRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RectangleGlandCalcRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangleGlandCalcRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-validation.service.ts":
/*!*********************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-validation.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: RectangleGlandCalcValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleGlandCalcValidationService", function() { return RectangleGlandCalcValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/custom-validations/comparison-validation.directive */ "./client/app/shared/directives/custom-validations/comparison-validation.directive.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/error.model */ "./client/app/models/error.model.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
// core imports

// application imports







var RectangleGlandCalcValidationService = /** @class */ (function () {
    function RectangleGlandCalcValidationService(helperService, unitButtonService, temperatureButtonService) {
        this.helperService = helperService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
    }
    /********************************************************************/
    /*********************** Client Side Validation *********************/
    /******************** Prevent the form submission********************/
    /********************************************************************/
    // operating temperture nominal validation
    RectangleGlandCalcValidationService.prototype.operatingTemperatureValidation = function () {
        var _this = this;
        return function (control) {
            var materialCteNominalControl = control.get('materialCteNominal');
            var operatingTemperatureNominalControl = control.get('operatingTemperatureNominal');
            var currentSelectedTemperature = _this.temperatureButtonService.getCurrentTemperatureValue;
            var materialCteNominalValue = materialCteNominalControl.value;
            var error = null;
            if (materialCteNominalValue
                && materialCteNominalValue.maxtemp
                && operatingTemperatureNominalControl.value !== ''
                && operatingTemperatureNominalControl.value !== null
                && operatingTemperatureNominalControl.value !== undefined) {
                var message = "";
                if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT === +(currentSelectedTemperature.id)) {
                    message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintempF + " to " + materialCteNominalValue.maxtempF + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
                }
                else {
                    // default CELCIUS
                    message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintemp + " to " + materialCteNominalValue.maxtemp + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
                }
                var operatingTemperatureNominalInCelcius = operatingTemperatureNominalControl.value;
                if ((+currentSelectedTemperature.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT) {
                    operatingTemperatureNominalInCelcius = _this.helperService.convertFahrenheitToCelcius(operatingTemperatureNominalControl.value).toFixed(2);
                }
                var operatingTemperatureNominalLessThanMaxTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(materialCteNominalValue.maxtemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
                var operatingTemperatureNominalLargerThanMinTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(materialCteNominalValue.mintemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
                error = operatingTemperatureNominalLessThanMaxTempError || operatingTemperatureNominalLargerThanMinTempError;
                operatingTemperatureNominalControl.setErrors(error);
            }
            return error;
        };
    };
    // Function check O-ring cross section is in range or not else set error message
    RectangleGlandCalcValidationService.prototype.oringCrossSectionNominalValidation = function () {
        var _this = this;
        return function (control) {
            var oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var error = null;
            if (oringCrossSectionNominalControl && oringCrossSectionNominalControl.value !== ''
                && oringCrossSectionNominalControl.value !== null
                && oringCrossSectionNominalControl.value !== undefined) {
                // check O-ring cross section is in range or not else set error message
                var oringCrossSectionNominalLessThanRangeError = void 0;
                var oringCrossSectionNominalLargerThanRangeError = void 0;
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH) {
                    oringCrossSectionNominalLessThanRangeError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(oringCrossSectionNominalControl.value, "0.056", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently less than AS568A standards, please contact Greene Tweed for this custom application.");
                    oringCrossSectionNominalLargerThanRangeError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(oringCrossSectionNominalControl.value, "0.331", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently greater than AS568A standards, please contact Greene Tweed for this custom application.");
                }
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                    oringCrossSectionNominalLessThanRangeError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(oringCrossSectionNominalControl.value, "1.42", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently less than AS568A standards, please contact Greene Tweed for this custom application.");
                    oringCrossSectionNominalLargerThanRangeError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(oringCrossSectionNominalControl.value, "8.41", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently greater than AS568A standards, please contact Greene Tweed for this custom application.");
                }
                error = oringCrossSectionNominalLessThanRangeError || oringCrossSectionNominalLargerThanRangeError;
                oringCrossSectionNominalControl.setErrors(error);
            }
            return error;
        };
    };
    // oRingId nominal validation
    RectangleGlandCalcValidationService.prototype.oringIDNominalLargerThanMaxOringIDValidation = function () {
        var _this = this;
        return function (control) {
            var oringIdNominalControl = control.get('oringIdNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var maxOringIdValue = _this.helperService.maxOringIdValue(currentSelectedUnit);
            var error = null;
            if (oringIdNominalControl && oringIdNominalControl.value !== ''
                && oringIdNominalControl.value !== null
                && oringIdNominalControl.value !== undefined) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(oringIdNominalControl.value, maxOringIdValue.toString(), "oringIdNominal", "O-ring Id", "Please make maximum O-ring ID entry to be no more than " + maxOringIdValue + " " + currentSelectedUnit.display_Short_title);
                _this.helperService.setValidationErrorToFormControl(oringIdNominalControl, error, "errorORingIDNominalMaxValue");
            }
            return error;
        };
    };
    // orin id standard warning and prevent to submit the form
    RectangleGlandCalcValidationService.prototype.oRingIDAS568AStandardsWarning = function () {
        var _this = this;
        return function (control) {
            var warning = null;
            var oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
            var oringIdNominalControl = control.get('oringIdNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            if (oringCrossSectionNominalControl.value !== ''
                && oringCrossSectionNominalControl.value !== null
                && oringCrossSectionNominalControl.value !== undefined
                && oringIdNominalControl.value !== ''
                && oringIdNominalControl.value !== null
                && oringIdNominalControl.value !== undefined) {
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH) {
                    if ((parseFloat(oringCrossSectionNominalControl.value) >= 0.056 && parseFloat(oringCrossSectionNominalControl.value) <= 0.086 && (parseFloat(oringIdNominalControl.value) > 5.239 || parseFloat(oringIdNominalControl.value) < 0.101)) ||
                        (parseFloat(oringCrossSectionNominalControl.value) >= 0.087 && parseFloat(oringCrossSectionNominalControl.value) <= 0.121 && (parseFloat(oringIdNominalControl.value) > 9.737 || parseFloat(oringIdNominalControl.value) < 0.049)) ||
                        (parseFloat(oringCrossSectionNominalControl.value) >= 0.122 && parseFloat(oringCrossSectionNominalControl.value) <= 0.174 && (parseFloat(oringIdNominalControl.value) > 17.955 || parseFloat(oringIdNominalControl.value) < 0.171)) ||
                        (parseFloat(oringCrossSectionNominalControl.value) >= 0.175 && parseFloat(oringCrossSectionNominalControl.value) <= 0.242 && (parseFloat(oringIdNominalControl.value) > 25.940 || parseFloat(oringIdNominalControl.value) < 0.412)) ||
                        (parseFloat(oringCrossSectionNominalControl.value) >= 0.243 && parseFloat(oringCrossSectionNominalControl.value) <= 0.331 && (parseFloat(oringIdNominalControl.value) > 25.940 || parseFloat(oringIdNominalControl.value) < 4.475)))
                        warning = new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["ErrorModel"]({ field: "oringIdNominal", title: "O-ring Inside Diameter", detail: "O-ring Diameter is currently not as per AS568A standards, please contact Greene Tweed for this custom application.", type: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].Warning });
                }
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                    if ((parseFloat(oringCrossSectionNominalControl.value) >= 1.42 && parseFloat(oringCrossSectionNominalControl.value) <= 2.18 && (parseFloat(oringIdNominalControl.value) > 133.07 || parseFloat(oringIdNominalControl.value) < 2.57)) ||
                        (parseFloat(oringCrossSectionNominalControl.value) >= 2.21 && parseFloat(oringCrossSectionNominalControl.value) <= 3.07 && (parseFloat(oringIdNominalControl.value) > 247.32 || parseFloat(oringIdNominalControl.value) < 1.24)) ||
                        (parseFloat(oringCrossSectionNominalControl.value) >= 3.1 && parseFloat(oringCrossSectionNominalControl.value) <= 4.42 && (parseFloat(oringIdNominalControl.value) > 456.06 || parseFloat(oringIdNominalControl.value) < 4.34)) ||
                        (parseFloat(oringCrossSectionNominalControl.value) >= 4.45 && parseFloat(oringCrossSectionNominalControl.value) <= 6.15 && (parseFloat(oringIdNominalControl.value) > 658.88 || parseFloat(oringIdNominalControl.value) < 10.46)) ||
                        (parseFloat(oringCrossSectionNominalControl.value) >= 6.17 && parseFloat(oringCrossSectionNominalControl.value) <= 8.41 && (parseFloat(oringIdNominalControl.value) > 658.88 || parseFloat(oringIdNominalControl.value) < 113.67)))
                        warning = new _models_error_model__WEBPACK_IMPORTED_MODULE_3__["ErrorModel"]({ field: "oringIdNominal", title: "O-ring Inside Diameter", detail: "O-ring Diameter is currently not as per AS568A standards, please contact Greene Tweed for this custom application.", type: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].Warning });
                }
                _this.helperService.setValidationErrorToFormControl(oringIdNominalControl, warning, "warningORingIDNominalStandard");
                // this.helperService.setValidationErrorToFormControl(control, "oringIdNominal", warning, "warningORingIDNominalStandard");
            }
            return warning;
        };
    };
    RectangleGlandCalcValidationService.ɵfac = function RectangleGlandCalcValidationService_Factory(t) { return new (t || RectangleGlandCalcValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_5__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonService"])); };
    RectangleGlandCalcValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RectangleGlandCalcValidationService, factory: RectangleGlandCalcValidationService.ɵfac, providedIn: 'root' });
    return RectangleGlandCalcValidationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangleGlandCalcValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_5__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.component.ts":
/*!************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RectangleGlandCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleGlandCalcComponent", function() { return RectangleGlandCalcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _models_form_control_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/form-control.model */ "./client/app/models/form-control.model.ts");
/* harmony import */ var _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rectangle-gland-calc.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.service.ts");
/* harmony import */ var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/unit-button/unit-button.component */ "./client/app/shared/components/unit-button/unit-button.component.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/temperature-button/temperature-button.component */ "./client/app/shared/components/temperature-button/temperature-button.component.ts");
/* harmony import */ var _shared_components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/custom-controls/drop-down/drop-down.component */ "./client/app/shared/components/custom-controls/drop-down/drop-down.component.ts");

// core imports



// application imports










function RectangleGlandCalcComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "custom-drop-down", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function RectangleGlandCalcComponent_div_7_Template_custom_drop_down_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.onCalculatorChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.calculatorTypeDDl)("form", ctx_r0.calculatorTypeDDLFormGroup)("control", ctx_r0.calculatorTypeDDl[0]);
} }
var RectangleGlandCalcComponent = /** @class */ (function () {
    function RectangleGlandCalcComponent(rectangleGlandCalcService, router, controlBaseService, activatedRoute) {
        var _this = this;
        this.rectangleGlandCalcService = rectangleGlandCalcService;
        this.router = router;
        this.controlBaseService = controlBaseService;
        this.activatedRoute = activatedRoute;
        this.GLAND_SIZE_CALCULATOR_TYPE_FORM_CONTROL_KEY = "Gland_Size_Calculator";
        this.currrentSelectedCalculatorId = 0;
        this.isJSONConfigFetched = false;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ControlType"];
        // get route data
        this.activatedRouteSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function () {
            var calculatorId = 0;
            if (_this.activatedRoute.snapshot.firstChild && _this.activatedRoute.snapshot.firstChild.data) {
                calculatorId = _this.activatedRoute.snapshot.firstChild.data.calculatorType;
            }
            if (calculatorId) {
                _this.currrentSelectedCalculatorId = calculatorId;
            }
        });
    }
    RectangleGlandCalcComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get JSON config from server
        this.rectangleGlandCalcService.getGlandSizeCalcConfig().subscribe(function (resp) {
            _this.isJSONConfigFetched = true;
            _this.jsonConfiguration = resp;
            // bind calculator type ddl 
            var calculatorTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.getCalculatorTypeArray(_this.GLAND_SIZE_CALCULATOR_TYPE_FORM_CONTROL_KEY));
            _this.calculatorTypeDDl = calculatorTypes;
            // create form group for calculator dropdown - to handle the dropdown model binding using reactiveform model
            var calculatorTypeDDLGroup = [];
            // below calculatorTypeDDLGroup.push also sets the default dropdown selection
            // create form groupd with initial value of control "calculatorTypes[0]"
            if (_this.currrentSelectedCalculatorId && _this.currrentSelectedCalculatorId >= 0) {
                // get calculator index by calculator id
                var getCalcuilatorindex = calculatorTypes.findIndex(function (calc) {
                    if (calc.form_control_id === _this.currrentSelectedCalculatorId) {
                        return calc;
                    }
                });
                // set selected calcalcutor in calculator dropdown
                if (getCalcuilatorindex) {
                    calculatorTypeDDLGroup.push(calculatorTypes[getCalcuilatorindex]);
                }
                else {
                    // set selected calcalcutor in calculator dropdown
                    calculatorTypeDDLGroup.push(calculatorTypes[0]);
                }
            }
            else {
                // set selected calcalcutor in calculator dropdown
                calculatorTypeDDLGroup.push(calculatorTypes[0]);
            }
            // create form group with default option selection
            _this.createCalculatorTypeFormGroup(calculatorTypeDDLGroup);
            // calculator change
            // send o-ring config value to subscribers
            _this.rectangleGlandCalcService.sendGlandSizeCalcConfigValue(_this.jsonConfiguration);
        }, function (error) {
            throw new Error(error.message);
        });
    };
    // component destroy handler
    RectangleGlandCalcComponent.prototype.ngOnDestroy = function () {
        this.isJSONConfigFetched = false;
        if (this.activatedRouteSubscription) {
            this.activatedRouteSubscription.unsubscribe();
        }
    };
    // calculator types
    RectangleGlandCalcComponent.prototype.getCalculatorTypeArray = function (formControlKey) {
        var calculatorTypeDDl = [];
        for (var index = 0; index < this.jsonConfiguration.calculators.length; index++) {
            var fc = new _models_form_control_model__WEBPACK_IMPORTED_MODULE_5__["FormControlModel"]({ form_control_id: this.jsonConfiguration.calculators[index].id, key: formControlKey, label: this.jsonConfiguration.calculators[index].display_calculator_title, value: this.jsonConfiguration.calculators[index] });
            calculatorTypeDDl.push(fc);
        }
        return calculatorTypeDDl;
    };
    ;
    // create form group
    // params => formControls
    RectangleGlandCalcComponent.prototype.createCalculatorTypeFormGroup = function (formControls) {
        // calculator type dropdown form group
        this.calculatorTypeDDLFormGroup = this.controlBaseService.toFormGroup(formControls);
    };
    // calculator change handler
    RectangleGlandCalcComponent.prototype.onCalculatorChange = function (event) {
        var calculator = event.value;
        switch (+(calculator.id)) {
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["CalculatorTypes"].ORingInternalVacuumOnly:
                this.router.navigate(['oringgland', 'evaluateglandsizecalculatorsglands', 'createRectangleGland']);
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["CalculatorTypes"].ORingDovetailGlandVacuumOnly:
                this.router.navigate(['oringgland', 'evaluateglandsizecalculatorsglands', 'createDovetailGland']);
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly:
                this.router.navigate(['oringgland', 'evaluateglandsizecalculatorsglands', 'createHalfDovetailGland']);
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["CalculatorTypes"].ORingRectangularGlandExternalVacuumOnly:
                this.router.navigate(['oringgland', 'evaluateglandsizecalculatorsglands', 'createRectangleOdGland']);
                break;
            default:
                break;
        }
    };
    RectangleGlandCalcComponent.ɵfac = function RectangleGlandCalcComponent_Factory(t) { return new (t || RectangleGlandCalcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_7__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    RectangleGlandCalcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RectangleGlandCalcComponent, selectors: [["app-rectangle-gland-calc"]], decls: 27, vars: 1, consts: [[1, "container"], [1, "row", "ignorePdf"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9", "p-1"], [1, "row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [1, "info-tab", "pt-0"], ["class", "col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 p-1", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-0"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6", "p-0"], [1, "pull-left", "unit-section__label"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-5", "col-xl-5", "p-1"], [3, "options", "form", "control", "selectionChange"]], template: function RectangleGlandCalcComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Use this tool for designing new glands based upon desired o-ring sizing. Please contact Greene Tweed engineering for help or advice if required as some applications are difficult to optimize both at ambient and operating temperatures");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RectangleGlandCalcComponent_div_7_Template, 2, 3, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Units:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "unit-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Temperature:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "temperature-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.calculatorTypeDDl && ctx.calculatorTypeDDl.length > 0 && ctx.calculatorTypeDDLFormGroup);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_9__["UnitButtonComponent"], _shared_components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL3JlY3RhbmdsZS1nbGFuZC1jYWxjL3JlY3RhbmdsZS1nbGFuZC1jYWxjLmNvbXBvbmVudC5jc3MifQ== */"] });
    return RectangleGlandCalcComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RectangleGlandCalcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-rectangle-gland-calc',
                templateUrl: './rectangle-gland-calc.component.html',
                styleUrls: ['./rectangle-gland-calc.component.css']
            }]
    }], function () { return [{ type: _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_7__["ControlBaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.module.ts":
/*!*********************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: RectangleGlandCalcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleGlandCalcModule", function() { return RectangleGlandCalcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _rectangle_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rectangle-gland-calc-routing.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-routing.module.ts");
/* harmony import */ var _rectangle_gland_calc_rectangle_gland_calc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rectangle-gland-calc/rectangle-gland-calc.component */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.component.ts");
/* harmony import */ var _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rectangle-gland-calc.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.service.ts");
/* harmony import */ var _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectangle-gland-calc-validation.service */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc-validation.service.ts");
// core imports
// Gland Size Calculator module



// application imports







var RectangleGlandCalcModule = /** @class */ (function () {
    function RectangleGlandCalcModule() {
    }
    RectangleGlandCalcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RectangleGlandCalcModule });
    RectangleGlandCalcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RectangleGlandCalcModule_Factory(t) { return new (t || RectangleGlandCalcModule)(); }, providers: [
            _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_7__["RectangleGlandCalcService"],
            _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_8__["RectangleGlandCalcValidationService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _rectangle_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["RectangleGlandCalcRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
            ]] });
    return RectangleGlandCalcModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RectangleGlandCalcModule, { declarations: [_rectangle_gland_calc_rectangle_gland_calc_component__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _rectangle_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["RectangleGlandCalcRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangleGlandCalcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_rectangle_gland_calc_rectangle_gland_calc_component__WEBPACK_IMPORTED_MODULE_6__["RectangleGlandCalcComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _rectangle_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["RectangleGlandCalcRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
                ],
                providers: [
                    _rectangle_gland_calc_service__WEBPACK_IMPORTED_MODULE_7__["RectangleGlandCalcService"],
                    _rectangle_gland_calc_validation_service__WEBPACK_IMPORTED_MODULE_8__["RectangleGlandCalcValidationService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.service.ts":
/*!**********************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: RectangleGlandCalcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleGlandCalcService", function() { return RectangleGlandCalcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
// core imports


// application imports



var RectangleGlandCalcService = /** @class */ (function () {
    /*  Constructor */
    function RectangleGlandCalcService(_http) {
        this._http = _http;
        /* Private Properties   */
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.env.api;
        // glandSizeCalc config state management subject and observable
        // private glandSizeCalcConfigSubject: BehaviorSubject<BaseModel> = new BehaviorSubject<BaseModel>(null);
        this.glandSizeCalcConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        // Expose the observable part of the glandSizeCalcConfig subject (read only stream)
        this.glandSizeCalcConfig$ = this.glandSizeCalcConfigSubject.asObservable();
    }
    Object.defineProperty(RectangleGlandCalcService.prototype, "glandSizeCalcConfig", {
        // service state management property "glandSizeCalcConfig"
        // the getter will return the last value emitted glandSizeCalcConfigSubject subject
        get: function () {
            return this.glandSizeCalcConfigSubject.getValue();
        },
        // assigning a value to this.glandSizeCalcConfig will push it onto the observable 
        // and down to all of its subsribers (ex: this.glandSizeCalcConfig = {})
        set: function (val) {
            this.glandSizeCalcConfigSubject.next(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RectangleGlandCalcService.prototype, "getCurrentGlandSizeCalcConfigValue", {
        /* Public Properties   */
        // get config value directly using behaviour subject
        get: function () {
            return this.glandSizeCalcConfig;
        },
        enumerable: true,
        configurable: true
    });
    // Methods/functions
    // send GlandSize config
    // assigning a value to this.glandSizeCalcConfig will push it onto the observable 
    // and down to all of its subsribers (ex: this.glandSizeCalcConfig = {})
    RectangleGlandCalcService.prototype.sendGlandSizeCalcConfigValue = function (val) {
        this.glandSizeCalcConfig = val;
    };
    /*  Public Methods   */
    // get o-ring config from server
    RectangleGlandCalcService.prototype.getGlandSizeCalcConfig = function () {
        return this._http.get(this.baseUrl + "glandsizecalc/getjsonconfig");
    };
    RectangleGlandCalcService.ɵfac = function RectangleGlandCalcService_Factory(t) { return new (t || RectangleGlandCalcService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    RectangleGlandCalcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RectangleGlandCalcService, factory: RectangleGlandCalcService.ɵfac, providedIn: 'root' });
    return RectangleGlandCalcService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectangleGlandCalcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=rectangle-gland-calc-rectangle-gland-calc-module.js.map