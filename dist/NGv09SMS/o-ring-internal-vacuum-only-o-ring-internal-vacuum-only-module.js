(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["o-ring-internal-vacuum-only-o-ring-internal-vacuum-only-module"],{

/***/ "./client/app/models/oring-rectangular-gland-internal-vacuum-only-maxvalues.ts":
/*!*************************************************************************************!*\
  !*** ./client/app/models/oring-rectangular-gland-internal-vacuum-only-maxvalues.ts ***!
  \*************************************************************************************/
/*! exports provided: ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel", function() { return ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _oring_maxvalues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oring-maxvalues */ "./client/app/models/oring-maxvalues.ts");


var ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel, _super);
    function ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.glandIdMax = options.glandIdMax;
        return _this;
    }
    return ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel;
}(_oring_maxvalues__WEBPACK_IMPORTED_MODULE_1__["ORingMaxValuesModel"]));



/***/ }),

/***/ "./client/app/models/oring-rectangular-gland-internal-vacuum-only-minvalues.ts":
/*!*************************************************************************************!*\
  !*** ./client/app/models/oring-rectangular-gland-internal-vacuum-only-minvalues.ts ***!
  \*************************************************************************************/
/*! exports provided: ORingRectangularGlandInternalVacuumOnlyMinvaluesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingRectangularGlandInternalVacuumOnlyMinvaluesModel", function() { return ORingRectangularGlandInternalVacuumOnlyMinvaluesModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _oring_minvalues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oring-minvalues */ "./client/app/models/oring-minvalues.ts");


var ORingRectangularGlandInternalVacuumOnlyMinvaluesModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ORingRectangularGlandInternalVacuumOnlyMinvaluesModel, _super);
    function ORingRectangularGlandInternalVacuumOnlyMinvaluesModel(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.glandIdMin = options.glandIdMin;
        return _this;
    }
    return ORingRectangularGlandInternalVacuumOnlyMinvaluesModel;
}(_oring_minvalues__WEBPACK_IMPORTED_MODULE_1__["ORingMinValuesModel"]));



/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only-routing.module.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only-routing.module.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ORingInternalVacuumOnlyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingInternalVacuumOnlyRoutingModule", function() { return ORingInternalVacuumOnlyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _o_ring_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./o-ring-internal-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.component.ts");





var routes = [
    { path: '', component: _o_ring_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__["ORingInternalVacuumOnlyComponent"], pathMatch: 'full' }
];
var ORingInternalVacuumOnlyRoutingModule = /** @class */ (function () {
    function ORingInternalVacuumOnlyRoutingModule() {
    }
    ORingInternalVacuumOnlyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ORingInternalVacuumOnlyRoutingModule });
    ORingInternalVacuumOnlyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ORingInternalVacuumOnlyRoutingModule_Factory(t) { return new (t || ORingInternalVacuumOnlyRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ORingInternalVacuumOnlyRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ORingInternalVacuumOnlyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ORingInternalVacuumOnlyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only-validation.service.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only-validation.service.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ORingInternalVacuumOnlyValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingInternalVacuumOnlyValidationService", function() { return ORingInternalVacuumOnlyValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/custom-validations/comparison-validation.directive */ "./client/app/shared/directives/custom-validations/comparison-validation.directive.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/error.model */ "./client/app/models/error.model.ts");
/* harmony import */ var _models_oring_rectangular_gland_internal_vacuum_only_minvalues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/oring-rectangular-gland-internal-vacuum-only-minvalues */ "./client/app/models/oring-rectangular-gland-internal-vacuum-only-minvalues.ts");
/* harmony import */ var _models_oring_rectangular_gland_internal_vacuum_only_maxvalues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/oring-rectangular-gland-internal-vacuum-only-maxvalues */ "./client/app/models/oring-rectangular-gland-internal-vacuum-only-maxvalues.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
// core imports

// application imports









var glandWidthNoReliableWarningTitle = "Gland Width";
var glandWidthNoReliableWarningMessage = "The gland fill calculations will be considered not reliable as the o-ring could not expand fully into the gland.";
var ORingInternalVacuumOnlyValidationService = /** @class */ (function () {
    function ORingInternalVacuumOnlyValidationService(helperService, unitButtonService, temperatureButtonService) {
        this.helperService = helperService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
    }
    /********************************************************************/
    /*********************** Client Side Validation *********************/
    /******************** Prevent the form submission********************/
    /********************************************************************/
    // bottom radii should not be larger than half(1/2) of glandWidthNominal
    // bottom radii should not be larger than glandDepthNominal
    ORingInternalVacuumOnlyValidationService.prototype.bottomRadiiShouldNotBeLargerThanGlandWidthOrDepth = function () {
        var _this = this;
        return function (control) {
            var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
            var bottomRadiiMinControl = control.get('bottomRadiiMin');
            var bottomRadiiMaxControl = control.get('bottomRadiiMax');
            var glandWidthNominalControl = control.get('glandWidthNominal');
            var glandDepthNominalControl = control.get('glandDepthNominal');
            var error = null;
            // bottomRadii Nominal
            if (bottomRadiiNominalControl) {
                var bottomRadiiNominalError1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(bottomRadiiNominalControl.value, glandDepthNominalControl.value, "bottomRadiiNominal", "Bottom Radii", "Bottom Radius must be no larger than 1/2 of Gland Width or Gland Depth.");
                var bottomRadiiNominalError2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["noLargerThanHalf"])(bottomRadiiNominalControl.value, glandWidthNominalControl.value, "bottomRadiiNominal", "Bottom Radii", "Bottom Radius must be no larger than 1/2 of Gland Width or Gland Depth.");
                if (bottomRadiiNominalError1) {
                    error = bottomRadiiNominalError1;
                }
                else if (bottomRadiiNominalError2) {
                    error = bottomRadiiNominalError2;
                }
                _this.helperService.setValidationErrorToFormControl(bottomRadiiNominalControl, error, "bottomRadiiShouldNotBeLargerThanGlandWidthOrDepth");
            }
            // bottomRadiiMin
            if (bottomRadiiMinControl) {
                var bottomRadiiMinError1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(bottomRadiiMinControl.value, glandDepthNominalControl.value, "bottomRadiiMin", "Bottom Radii", "Bottom Radius must be no larger than 1/2 of Gland Width or Gland Depth.");
                var bottomRadiiMinError2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["noLargerThanHalf"])(bottomRadiiMinControl.value, glandWidthNominalControl.value, "bottomRadiiMin", "Bottom Radii", "Bottom Radius must be no larger than 1/2 of Gland Width or Gland Depth.");
                if (bottomRadiiMinError1) {
                    error = bottomRadiiMinError1;
                }
                else if (bottomRadiiMinError2) {
                    error = bottomRadiiMinError2;
                }
                _this.helperService.setValidationErrorToFormControl(bottomRadiiMinControl, error, "bottomRadiiShouldNotBeLargerThanGlandWidthOrDepth");
            }
            // bottomRadiiMax
            if (bottomRadiiMaxControl) {
                var bottomRadiiMaxError1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(bottomRadiiMaxControl.value, glandDepthNominalControl.value, "bottomRadiiMax", "Bottom Radii", "Bottom Radius must be no larger than 1/2 of Gland Width or Gland Depth.");
                var bottomRadiiMaxError2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["noLargerThanHalf"])(bottomRadiiMaxControl.value, glandWidthNominalControl.value, "bottomRadiiMax", "Bottom Radii", "Bottom Radius must be no larger than 1/2 of Gland Width or Gland Depth.");
                if (bottomRadiiMaxError1) {
                    error = bottomRadiiMaxError1;
                }
                else if (bottomRadiiMaxError2) {
                    error = bottomRadiiMaxError2;
                }
                _this.helperService.setValidationErrorToFormControl(bottomRadiiMaxControl, error, "bottomRadiiShouldNotBeLargerThanGlandWidthOrDepth");
            }
            return error;
        };
    };
    // operating temperture nominal validation
    ORingInternalVacuumOnlyValidationService.prototype.operatingTemperatureValidation = function () {
        var _this = this;
        return function (control) {
            var materialCteNominalControl = control.get('materialCteNominal');
            var operatingTemperatureNominalControl = control.get('operatingTemperatureNominal');
            var operatingTemperatureMinControl = control.get('operatingTemperatureMin');
            var operatingTemperatureMaxControl = control.get('operatingTemperatureMax');
            var currentSelectedTemperature = _this.temperatureButtonService.getCurrentTemperatureValue;
            var materialCteNominalValue = materialCteNominalControl.value;
            var error = null;
            if (materialCteNominalValue && materialCteNominalValue.maxtemp) {
                // message
                var message = "";
                if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT === +(currentSelectedTemperature.id)) {
                    message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintempF + " to " + materialCteNominalValue.maxtempF + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
                }
                else {
                    // default CELCIUS
                    message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintemp + " to " + materialCteNominalValue.maxtemp + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
                }
                // Nominal temperature min and max validation
                if (operatingTemperatureNominalControl.value) {
                    var operatingTemperatureNominalInCelcius = operatingTemperatureNominalControl.value;
                    if ((+currentSelectedTemperature.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT) {
                        operatingTemperatureNominalInCelcius = _this.helperService.convertFahrenheitToCelcius(operatingTemperatureNominalControl.value).toFixed(2);
                    }
                    // Nominal temperature min and max validation
                    var operatingTemperatureNominalLessThanMaxTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(materialCteNominalValue.maxtemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
                    var operatingTemperatureNominalLargerThanMinTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(materialCteNominalValue.mintemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
                    if (operatingTemperatureNominalLessThanMaxTempError || operatingTemperatureNominalLargerThanMinTempError) {
                        error = operatingTemperatureNominalLessThanMaxTempError || operatingTemperatureNominalLargerThanMinTempError;
                    }
                    operatingTemperatureNominalControl.setErrors(error);
                }
                // Min temperature min and max validation
                if (operatingTemperatureMinControl.value) {
                    var operatingTemperatureMinInCelcius = operatingTemperatureMinControl.value;
                    if ((+currentSelectedTemperature.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT) {
                        operatingTemperatureMinInCelcius = _this.helperService.convertFahrenheitToCelcius(operatingTemperatureMinControl.value).toFixed(2);
                    }
                    // Temperature min and max validation
                    var operatingTemperatureMinLessThanMaxTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(materialCteNominalValue.maxtemp, operatingTemperatureMinInCelcius, "operatingTemperatureMin", "Operating Temperature", message);
                    var operatingTemperatureMinLargerThanMinTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(materialCteNominalValue.mintemp, operatingTemperatureMinInCelcius, "operatingTemperatureMin", "Operating Temperature", message);
                    if (operatingTemperatureMinLessThanMaxTempError || operatingTemperatureMinLargerThanMinTempError) {
                        error = operatingTemperatureMinLessThanMaxTempError || operatingTemperatureMinLargerThanMinTempError;
                    }
                    operatingTemperatureMinControl.setErrors(error);
                }
                // Max Temperature min and max validation
                if (operatingTemperatureMaxControl.value) {
                    var operatingTemperatureMaxInCelcius = operatingTemperatureMaxControl.value;
                    if ((+currentSelectedTemperature.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT) {
                        operatingTemperatureMaxInCelcius = _this.helperService.convertFahrenheitToCelcius(operatingTemperatureMaxControl.value).toFixed(2);
                    }
                    // Nominal temperature min and max validation
                    var operatingTemperatureMaxLessThanMaxTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(materialCteNominalValue.maxtemp, operatingTemperatureMaxInCelcius, "operatingTemperatureMax", "Operating Temperature", message);
                    var operatingTemperatureMaxLargerThanMinTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(materialCteNominalValue.mintemp, operatingTemperatureMaxInCelcius, "operatingTemperatureMax", "Operating Temperature", message);
                    if (operatingTemperatureMaxLessThanMaxTempError || operatingTemperatureMaxLargerThanMinTempError) {
                        error = operatingTemperatureMaxLessThanMaxTempError || operatingTemperatureMaxLargerThanMinTempError;
                    }
                    operatingTemperatureMaxControl.setErrors(error);
                }
            }
            return error;
        };
    };
    // Function check O-ring cross section is in range or not else set error message
    ORingInternalVacuumOnlyValidationService.prototype.oringCrossSectionNominalValidation = function () {
        var _this = this;
        return function (control) {
            var oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var error = null;
            if (oringCrossSectionNominalControl
                && oringCrossSectionNominalControl.value) {
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
                if (oringCrossSectionNominalLessThanRangeError || oringCrossSectionNominalLargerThanRangeError) {
                    error = oringCrossSectionNominalLessThanRangeError || oringCrossSectionNominalLargerThanRangeError;
                }
            }
            _this.helperService.setValidationErrorToFormControl(oringCrossSectionNominalControl, error, "CrossSectionAS568AStandards");
            return error;
        };
    };
    // orin id standard warning and prevent to submit the form
    ORingInternalVacuumOnlyValidationService.prototype.oRingIDAS568AStandardsWarning = function () {
        var _this = this;
        return function (control) {
            var warning = null;
            var oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
            var oringIdNominalControl = control.get('oringIdNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
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
            _this.helperService.setValidationErrorToFormControl(oringIdNominalControl, warning, "oRingIDAS568AStandards");
            return warning;
        };
    };
    // oRingId nominal validation
    ORingInternalVacuumOnlyValidationService.prototype.oringIDNominalLargerThanMaxOringIDValidation = function () {
        var _this = this;
        return function (control) {
            var oringIdNominalControl = control.get('oringIdNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var maxOringIdValue = _this.helperService.maxOringIdValue(currentSelectedUnit);
            var error = null;
            if (oringIdNominalControl && oringIdNominalControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(oringIdNominalControl.value, maxOringIdValue.toString(), "oringIdNominal", "O-ring Id", "Please make maximum O-ring ID entry to be no more than " + maxOringIdValue + " " + currentSelectedUnit.display_Short_title);
                _this.helperService.setValidationErrorToFormControl(oringIdNominalControl, error, "oringIDNominalLargerThanMaxOringID");
            }
            return error;
        };
    };
    // less than zero validation
    ORingInternalVacuumOnlyValidationService.prototype.formLessThanZeroValidation = function (toolbarOptionkey) {
        var _this = this;
        return function (control) {
            var error = null;
            // get form controls key
            var formControlKeys = Object.keys(control.controls);
            // loop through the reactive form/formgroup controls 
            for (var index = 0; index < formControlKeys.length; index++) {
                // skip toolbar options(Nominal, Tolerance, Min and Max) resetting
                if (toolbarOptionkey === formControlKeys[index]) {
                    continue;
                }
                // skip gapNominal and operatingTemperatureNominal
                if (formControlKeys[index] === "gapNominal" || formControlKeys[index] === "gapTolerance"
                    || formControlKeys[index] === "gapMin" || formControlKeys[index] === "gapMax"
                    || formControlKeys[index] === "operatingTemperatureMin"
                    || formControlKeys[index] === "operatingTemperatureNominal"
                    || formControlKeys[index] === "operatingTemperatureMax") {
                    continue;
                }
                // any form control value is less than zero
                var error_1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanEqualValidation"])(control.controls[formControlKeys[index]].value, "0", formControlKeys[index], "", "Input values should not be Zero or Negative, except Gap and Operating Temperature.");
                // set error to form control
                var fc = control.get(formControlKeys[index]);
                _this.helperService.setValidationErrorToFormControl(fc, error_1, "LessThanZeroValueError");
            }
            return error;
        };
    };
    // tolrerance validation
    ORingInternalVacuumOnlyValidationService.prototype.toleranceValidation = function () {
        var _this = this;
        return function (control) {
            var error = null;
            var msg = "Tolerance value should not greater or equal to respective nominal value.";
            var glandWidthToleranceControl = control.get('glandWidthTolerance');
            var glandWidthNominalControl = control.get('glandWidthNominal');
            var glandDepthToleranceControl = control.get('glandDepthTolerance');
            var glandDepthNominalControl = control.get('glandDepthNominal');
            var bottomRadiiToleranceControl = control.get('bottomRadiiTolerance');
            var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
            var gapToleranceControl = control.get('gapTolerance');
            var gapNominalControl = control.get('gapNominal');
            var glandIdToleranceControl = control.get('glandIdTolerance');
            var glandIdNominalControl = control.get('glandIdNominal');
            if (glandWidthToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanEqualValidation"])(glandWidthToleranceControl.value, glandWidthNominalControl.value, "glandWidthTolerance", "", msg);
                // glandWidthToleranceControl.setErrors(error);
                _this.helperService.setValidationErrorToFormControl(glandWidthToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (glandDepthToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanEqualValidation"])(glandDepthToleranceControl.value, glandDepthNominalControl.value, "glandDepthTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(glandDepthToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (bottomRadiiToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanEqualValidation"])(bottomRadiiToleranceControl.value, bottomRadiiNominalControl.value, "bottomRadiiTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(bottomRadiiToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (glandIdToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanEqualValidation"])(glandIdToleranceControl.value, glandIdNominalControl.value, "glandIdTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(glandIdToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (gapToleranceControl.value && gapToleranceControl.value != 0) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanEqualValidation"])(gapToleranceControl.value, gapNominalControl.value, "gapTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(gapToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            return error;
        };
    };
    /********************************************************************/
    /************** O-Ring - Internal Vacuum only Warnings **************/
    /**************** Doen't prevent the form submission*****************/
    /********************************************************************/
    // gland width validation
    ORingInternalVacuumOnlyValidationService.prototype.glandWidthShouldBeLargerThanORingCrossSection = function (control) {
        // return (control: FormGroup): ValidationErrors | null => {
        var glandWidthNominalControl = control.get('glandWidthNominal');
        var oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
        var error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanEqualValidation"])(glandWidthNominalControl.value, oringCrossSectionNominalControl.value, "glandWidthNominal", "Gland Width", "For a rectangular gland, it is recommended for the gland width to be larger than the cross section of the o-ring.");
        return error;
    };
    // gland width nominal warning
    ORingInternalVacuumOnlyValidationService.prototype.glandWidthNominalWarning = function (form) {
        var error = null;
        var glandWidthNominalControl = form.get('glandWidthNominal');
        var oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
        var oringCrossSectionNominalControlValue = (1.5 * (+oringCrossSectionNominalControl.value)).toString();
        if (glandWidthNominalControl && glandWidthNominalControl.value && oringCrossSectionNominalControl && oringCrossSectionNominalControl.value) {
            error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(glandWidthNominalControl.value, oringCrossSectionNominalControlValue, "glandWidthNominal", glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].Warning);
        }
        return error;
    };
    // gland width min warning
    ORingInternalVacuumOnlyValidationService.prototype.glandWidthMinWarning = function (form, option) {
        var warning = null;
        var glandWidthMinControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) {
            // generate min values
            var minValues = this.generateMinValues(form);
            glandWidthMinControlValue = minValues.glandWidthMin;
        }
        else {
            glandWidthMinControlValue = form.get('glandWidthMin').value ? form.get('glandWidthMin').value : null;
        }
        if (glandWidthMinControlValue) {
            var oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
            var oringCrossSectionNominalControlValue = (1.5 * +(oringCrossSectionNominalControl.value)).toString();
            warning = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(glandWidthMinControlValue.toString(), oringCrossSectionNominalControlValue, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "glandWidthTolerance" : "glandWidthMin"), glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].Warning);
        }
        return warning;
    };
    // gland width max warning
    ORingInternalVacuumOnlyValidationService.prototype.glandWidthMaxWarning = function (form, option) {
        var warning = null;
        var glandWidthMaxControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) {
            // generate min values
            var maxValues = this.generateMaxValues(form);
            glandWidthMaxControlValue = maxValues.glandWidthMax;
        }
        else {
            glandWidthMaxControlValue = form.get('glandWidthMax').value ? (+form.get('glandWidthMax').value) : null;
        }
        if (glandWidthMaxControlValue) {
            var oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
            var oringCrossSectionNominalControlValue = (1.5 * +(oringCrossSectionNominalControl.value)).toString();
            warning = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(glandWidthMaxControlValue.toString(), oringCrossSectionNominalControlValue, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "glandWidthTolerance" : "glandWidthMax"), glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].Warning);
        }
        return warning;
    };
    // bottomRadiiNominal min limit validation
    ORingInternalVacuumOnlyValidationService.prototype.bottomRadiiShouldBeLargerThanBottomRadiiMinLimit = function (control) {
        var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
        var currentSelectedUnit = this.unitButtonService.getCurrentUnitValue;
        var bottomRadiiMinLimit = this.helperService.bottomRadiiMinLimit(currentSelectedUnit);
        var error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(bottomRadiiNominalControl.value, bottomRadiiMinLimit.toString(), "bottomRadiiNominal", "Bottom Radii", "Minimum radii is " + bottomRadiiMinLimit + " due to typical machining standards.");
        return error;
    };
    //  oringCrossSectionNominalLessThan vaidate
    ORingInternalVacuumOnlyValidationService.prototype.oringCrossSectionNominalLessThanValidation = function (control) {
        var oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
        var glandDepthNominalControl = control.get('glandDepthNominal');
        var error = null;
        if (oringCrossSectionNominalControl && glandDepthNominalControl && oringCrossSectionNominalControl.value && glandDepthNominalControl.value) {
            var oringCrossSectionNominalLessThanError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(oringCrossSectionNominalControl.value, glandDepthNominalControl.value, "oringCrossSectionNominal", "O-ring Cross Section", "O-ring Cross Section should greater than or equal to gland depth.");
            error = oringCrossSectionNominalLessThanError;
        }
        return error;
    };
    ORingInternalVacuumOnlyValidationService.prototype.minValueValidation = function (control, option) {
        var errors = [];
        var msg = "Min values should be less or equal to nominal value.";
        var glandWidthNominalControl = control.get('glandWidthNominal');
        var glandDepthNominalControl = control.get('glandDepthNominal');
        var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
        var glandIdNominalControl = control.get('glandIdNominal');
        var gapNominalControl = control.get('gapNominal');
        var glandWidthMinControlValue;
        var glandDepthMinControlValue;
        var bottomRadiiMinControlValue;
        var gapMinControlValue;
        var glandIdMinControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) {
            // generate min values
            var minValues = this.generateMinValues(control);
            glandWidthMinControlValue = minValues.glandWidthMin;
            glandDepthMinControlValue = minValues.glandDepthMin;
            bottomRadiiMinControlValue = minValues.bottomRadiiMin;
            gapMinControlValue = minValues.gapMin;
            glandIdMinControlValue = minValues.glandIdMin;
        }
        else {
            glandWidthMinControlValue = control.get('glandWidthMin').value ? (+control.get('glandWidthMin').value) : null;
            glandDepthMinControlValue = control.get('glandDepthMin').value ? (+control.get('glandDepthMin').value) : null;
            bottomRadiiMinControlValue = control.get('bottomRadiiMin').value ? (+control.get('bottomRadiiMin').value) : null;
            gapMinControlValue = control.get('gapMin').value ? (+control.get('gapMin').value) : null;
            glandIdMinControlValue = control.get('glandIdMin').value ? (+control.get('glandIdMin').value) : null;
        }
        // min value validation
        if (glandWidthMinControlValue) {
            var error1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(glandWidthMinControlValue.toString(), glandWidthNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "glandWidthTolerance" : "glandWidthMin"), "", msg);
            if (error1) {
                errors.push(error1);
            }
        }
        if (glandDepthMinControlValue) {
            var error2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(glandDepthMinControlValue.toString(), glandDepthNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "glandDepthTolerance" : "glandDepthMin"), "", msg);
            if (error2) {
                errors.push(error2);
            }
        }
        if (bottomRadiiMinControlValue) {
            var error3 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(bottomRadiiMinControlValue.toString(), bottomRadiiNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "bottomRadiiTolerance" : "bottomRadiiMin"), "", msg);
            if (error3) {
                errors.push(error3);
            }
        }
        if (gapMinControlValue) {
            var error4 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(gapMinControlValue.toString(), gapNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "gapTolerance" : "gapMin"), "", msg);
            if (error4) {
                errors.push(error4);
            }
        }
        if (glandIdMinControlValue) {
            var error5 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["largerThanValidation"])(glandIdMinControlValue.toString(), glandIdNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "glandIdTolerance" : "glandIdMin"), "", msg);
            if (error5) {
                errors.push(error5);
            }
        }
        return errors;
    };
    ORingInternalVacuumOnlyValidationService.prototype.maxValueValidation = function (control, option) {
        var errors = [];
        var msg = "Max value should be greater or equal to nominal value.";
        var glandWidthNominalControl = control.get('glandWidthNominal');
        var glandDepthNominalControl = control.get('glandDepthNominal');
        var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
        var gapNominalControl = control.get('gapNominal');
        var glandIdNominalControl = control.get('glandIdNominal');
        var glandWidthMaxControlValue;
        var glandDepthMaxControlValue;
        var bottomRadiiMaxControlValue;
        var gapMaxControlValue;
        var glandIdMaxControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) {
            // generate max values
            var maxValues = this.generateMaxValues(control);
            glandWidthMaxControlValue = maxValues.glandWidthMax;
            glandDepthMaxControlValue = maxValues.glandDepthMax;
            bottomRadiiMaxControlValue = maxValues.bottomRadiiMax;
            gapMaxControlValue = maxValues.gapMax;
            glandIdMaxControlValue = maxValues.glandIdMax;
        }
        else {
            glandWidthMaxControlValue = control.get('glandWidthMax').value ? (+control.get('glandWidthMax').value) : null;
            glandDepthMaxControlValue = control.get('glandDepthMax').value ? (+control.get('glandDepthMax').value) : null;
            bottomRadiiMaxControlValue = control.get('bottomRadiiMax').value ? (+control.get('bottomRadiiMax').value) : null;
            gapMaxControlValue = control.get('gapMax').value ? (+control.get('gapMax').value) : null;
            glandIdMaxControlValue = control.get('glandIdMax').value ? (+control.get('glandIdMax').value) : null;
        }
        // max value validation
        if (glandWidthMaxControlValue) {
            var error1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(glandWidthMaxControlValue.toString(), glandWidthNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "glandWidthTolerance" : "glandWidthMax"), "", msg);
            if (error1) {
                errors.push(error1);
            }
        }
        if (glandDepthMaxControlValue) {
            var error2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(glandDepthMaxControlValue.toString(), glandDepthNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "glandDepthTolerance" : "glandDepthMax"), "", msg);
            if (error2) {
                errors.push(error2);
            }
        }
        if (bottomRadiiMaxControlValue) {
            var error3 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(bottomRadiiMaxControlValue.toString(), bottomRadiiNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "bottomRadiiTolerance" : "bottomRadiiMax"), "", msg);
            if (error3) {
                errors.push(error3);
            }
        }
        if (gapMaxControlValue) {
            var error4 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(gapMaxControlValue.toString(), gapNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "gapTolerance" : "gapMax"), "", msg);
            if (error4) {
                errors.push(error4);
            }
        }
        if (glandIdMaxControlValue) {
            var error5 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_1__["lessThanValidation"])(glandIdMaxControlValue.toString(), glandIdNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorOption"].WithTolerance) ? "glandIdTolerance" : "glandIdMax"), "", msg);
            if (error5) {
                errors.push(error5);
            }
        }
        return errors;
    };
    //******Helper Methods********/
    // generate min values when option is Tolerance
    ORingInternalVacuumOnlyValidationService.prototype.generateMinValues = function (form) {
        var minValue = new _models_oring_rectangular_gland_internal_vacuum_only_minvalues__WEBPACK_IMPORTED_MODULE_4__["ORingRectangularGlandInternalVacuumOnlyMinvaluesModel"]();
        var glandWidthNominalControl = form.get('glandWidthNominal');
        var glandWidthToleranceControl = form.get('glandWidthTolerance');
        var glandDepthNominalControl = form.get('glandDepthNominal');
        var glandDepthToleranceControl = form.get('glandDepthTolerance');
        var bottomRadiiToleranceControl = form.get('bottomRadiiTolerance');
        var gapNominalControl = form.get('gapNominal');
        var gapToleranceControl = form.get('gapTolerance');
        var bottomRadiiNominalControl = form.get('bottomRadiiNominal');
        var glandIdNominalControl = form.get('glandIdNominal');
        var glandIdToleranceControl = form.get('glandIdTolerance');
        minValue.glandWidthMin = (parseFloat(glandWidthNominalControl.value ? glandWidthNominalControl.value : "0") - parseFloat(glandWidthToleranceControl.value ? glandWidthToleranceControl.value : "0"));
        minValue.glandDepthMin = (parseFloat(glandDepthNominalControl.value ? glandDepthNominalControl.value : "0") - parseFloat(glandDepthToleranceControl.value ? glandDepthToleranceControl.value : "0"));
        minValue.bottomRadiiMin = (parseFloat(bottomRadiiNominalControl.value ? bottomRadiiNominalControl.value : "0") - parseFloat(bottomRadiiToleranceControl.value ? bottomRadiiToleranceControl.value : "0"));
        minValue.gapMin = (parseFloat(gapNominalControl.value ? gapNominalControl.value : "0") - parseFloat(gapToleranceControl.value ? gapToleranceControl.value : "0"));
        minValue.glandIdMin = (parseFloat(glandIdNominalControl.value ? glandIdNominalControl.value : "0") - parseFloat(glandIdToleranceControl.value ? glandIdToleranceControl.value : "0"));
        return minValue;
    };
    // generate max values when option is Tolerance
    ORingInternalVacuumOnlyValidationService.prototype.generateMaxValues = function (form) {
        var maxValue = new _models_oring_rectangular_gland_internal_vacuum_only_maxvalues__WEBPACK_IMPORTED_MODULE_5__["ORingRectangularGlandInternalVacuumOnlyMaxvaluesModel"]();
        var glandWidthNominalControl = form.get('glandWidthNominal');
        var glandWidthToleranceControl = form.get('glandWidthTolerance');
        var glandDepthNominalControl = form.get('glandDepthNominal');
        var glandDepthToleranceControl = form.get('glandDepthTolerance');
        var bottomRadiiToleranceControl = form.get('bottomRadiiTolerance');
        var gapNominalControl = form.get('gapNominal');
        var gapToleranceControl = form.get('gapTolerance');
        var bottomRadiiNominalControl = form.get('bottomRadiiNominal');
        var glandIdNominalControl = form.get('glandIdNominal');
        var glandIdToleranceControl = form.get('glandIdTolerance');
        maxValue.glandWidthMax = (parseFloat(glandWidthNominalControl.value ? glandWidthNominalControl.value : "0") + parseFloat(glandWidthToleranceControl.value ? glandWidthToleranceControl.value : "0"));
        maxValue.glandDepthMax = (parseFloat(glandDepthNominalControl.value ? glandDepthNominalControl.value : "0") + parseFloat(glandDepthToleranceControl.value ? glandDepthToleranceControl.value : "0"));
        maxValue.bottomRadiiMax = (parseFloat(bottomRadiiNominalControl.value ? bottomRadiiNominalControl.value : "0") + parseFloat(bottomRadiiToleranceControl.value ? bottomRadiiToleranceControl.value : "0"));
        maxValue.gapMax = (parseFloat(gapNominalControl.value ? gapNominalControl.value : "0") + parseFloat(gapToleranceControl.value ? gapToleranceControl.value : "0"));
        maxValue.glandIdMax = (parseFloat(glandIdNominalControl.value ? glandIdNominalControl.value : "0") + parseFloat(glandIdToleranceControl.value ? glandIdToleranceControl.value : "0"));
        return maxValue;
    };
    ORingInternalVacuumOnlyValidationService.ɵfac = function ORingInternalVacuumOnlyValidationService_Factory(t) { return new (t || ORingInternalVacuumOnlyValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__["TemperatureButtonService"])); };
    ORingInternalVacuumOnlyValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ORingInternalVacuumOnlyValidationService, factory: ORingInternalVacuumOnlyValidationService.ɵfac, providedIn: 'root' });
    return ORingInternalVacuumOnlyValidationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ORingInternalVacuumOnlyValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__["TemperatureButtonService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ORingInternalVacuumOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingInternalVacuumOnlyComponent", function() { return ORingInternalVacuumOnlyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./client/app/shared/services/auth.service.ts");
/* harmony import */ var _rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rectangular-o-ring-calc.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.service.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.service.ts");
/* harmony import */ var _shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/print.service */ "./client/app/shared/services/print.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _o_ring_internal_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./o-ring-internal-vacuum-only-validation.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only-validation.service.ts");
/* harmony import */ var _o_ring_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./o-ring-internal-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/calculator-toolbar/calculator-toolbar.service */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/user-rules/user-rules.component */ "./client/app/shared/components/user-rules/user-rules.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/calculator-toolbar/calculator-toolbar.component */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts");

// core imports

// third party imports



















function ORingInternalVacuumOnlyComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ORingInternalVacuumOnlyComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.onSubmit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "calculator-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionChange", function ORingInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_optionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onOptionChange($event); })("reset", function ORingInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_reset_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onReset(); })("print", function ORingInternalVacuumOnlyComponent_form_2_Template_calculator_toolbar_print_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onPrint(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.oringform);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("calculatorConfig", ctx_r0.calculatorConfig)("isShowOptions", ctx_r0.calculatorConfig.toolbarOption ? true : false)("form", ctx_r0.oringform)("control", ctx_r0.calculatorConfig.toolbarOption)("isSubmitted", ctx_r0.isSubmitted)("isShowPasteBtn", ctx_r0.isShowPasteBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx_r0.oringform)("isSubmitted", ctx_r0.isSubmitted)("calculatorJSON", ctx_r0.calculatorConfig)("clientErrors", ctx_r0.clientErrors)("clientWarnings", ctx_r0.clientWarnings)("serverErrors", ctx_r0.serverErrors)("serverWarnings", ctx_r0.serverWarnings);
} }
var ORingInternalVacuumOnlyComponent = /** @class */ (function () {
    // constructor
    function ORingInternalVacuumOnlyComponent(controlBaseService, authService, rectangularORingCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, oRingInternalVacuumOnlyValidationService, oRingInternalVacuumOnlyService, helperService, calculatorToolbarService) {
        var _this = this;
        this.controlBaseService = controlBaseService;
        this.authService = authService;
        this.rectangularORingCalcService = rectangularORingCalcService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.printService = printService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.oRingInternalVacuumOnlyValidationService = oRingInternalVacuumOnlyValidationService;
        this.oRingInternalVacuumOnlyService = oRingInternalVacuumOnlyService;
        this.helperService = helperService;
        this.calculatorToolbarService = calculatorToolbarService;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlType"];
        this.isSubmitted = false;
        this.payLoad = '';
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        this.isShowPasteBtn = false;
        // o-ring calculator config subscription
        this.oRingDataSubscription = this.rectangularORingCalcService.oRingConfig$.subscribe(function (x) {
            if (x) {
                // calculator - internal vacuum only
                _this.calculatorConfig = x.calculators[0];
                // send calculator to dynamic form service
                _this.dynamicFormTwoColumnLayoutService.sendCalculator(x.calculators[0]);
                // create form
                // this.createForm();
                // show or hide form controls
                _this.onOptionChange(+_this.calculatorConfig.toolbarOption.value);
                _this.setShowPasteBtnFlag();
            }
        });
        // temperature change subscription
        this.onTemperatureChangeUpdateCalculator();
        // onPaste event subscription
        this.calculatorToolbarService.paste.subscribe(function (d) {
            if (d) {
                _this.onPaste(d);
            }
        });
        // unit change
        this.onUnitChange();
    }
    Object.defineProperty(ORingInternalVacuumOnlyComponent.prototype, "CalculatedData", {
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
    ORingInternalVacuumOnlyComponent.prototype.getControlValue = function (fieldName) {
        if (this.oringform
            && this.oringform.controls[fieldName]
            && this.oringform.controls[fieldName].value) {
            return (+this.oringform.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3);
        }
    };
    // onInit
    ORingInternalVacuumOnlyComponent.prototype.ngOnInit = function () {
        this.onReset();
        this.isSubmitted = false;
        this.CalculatedData = {};
        this.setShowPasteBtnFlag();
    };
    // unit change perform operations
    ORingInternalVacuumOnlyComponent.prototype.onUnitChange = function () {
        var _this = this;
        // reset 
        this.resetFormAndCalculation();
        // unit switch button click/change subscription
        this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            if (x) {
                // convert the form data
                var convertedForm = _this.helperService.convertFormUnitControlValuesAndSet((_this.calculatorConfig && _this.calculatorConfig.form ? _this.calculatorConfig.form : null), _this.oringform, x);
                if (convertedForm) {
                    _this.oringform = convertedForm;
                }
                /// recalculate the data
                _this.onSubmit();
            }
        });
    };
    // temperature change update output values handler
    ORingInternalVacuumOnlyComponent.prototype.onTemperatureChangeUpdateCalculator = function () {
        var _this = this;
        // unit switch button click/change subscription
        this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe(function (x) {
            if (x) {
                _this.resetFormAndCalculation();
            }
        });
    };
    // form submit event
    ORingInternalVacuumOnlyComponent.prototype.onSubmit = function (isSubmitted) {
        var _this = this;
        if (isSubmitted === void 0) { isSubmitted = false; }
        this.CalculatedData = {};
        // reset error, warnings
        this.resetErroAndWarnings();
        // reset calculated output
        this.resetCalculatedLabelValue();
        if (!this.calculatorConfig) {
            return;
        }
        // this.payLoad = this.oringform.value;
        this.isSubmitted = isSubmitted;
        // client errors that doesnot prevent to submit forms/calculation
        // glandWidth validation
        if (this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION)) {
            var glandWidthShouldBeLargerThanORingCrossSectionError = this.oRingInternalVacuumOnlyValidationService.glandWidthShouldBeLargerThanORingCrossSection(this.oringform);
            if (glandWidthShouldBeLargerThanORingCrossSectionError) {
                this.addClientErrors(glandWidthShouldBeLargerThanORingCrossSectionError);
            }
        }
        // if validation key O_RING_CROSS_SECTION_VALIDATION exist 
        if (this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION)) {
            var oringCrossSectionNominalLessThanError = this.oRingInternalVacuumOnlyValidationService.oringCrossSectionNominalLessThanValidation(this.oringform);
            if (oringCrossSectionNominalLessThanError) {
                this.addClientErrors(oringCrossSectionNominalLessThanError);
            }
        }
        // bottomRadiiShouldBeLargerThanBottomRadiiMinLimit error
        if (this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT)) {
            var bottomRadiiShouldBeLargerThanBottomRadiiMinLimitError = this.oRingInternalVacuumOnlyValidationService.bottomRadiiShouldBeLargerThanBottomRadiiMinLimit(this.oringform);
            if (bottomRadiiShouldBeLargerThanBottomRadiiMinLimitError) {
                this.addClientErrors(bottomRadiiShouldBeLargerThanBottomRadiiMinLimitError);
            }
        }
        // min value validation
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal && this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION)) {
            // apply validation only when Tolerance and min and max option selected
            var minValueErrors = this.oRingInternalVacuumOnlyValidationService.minValueValidation(this.oringform, this.calculatorConfig.toolbarOption.value);
            if (minValueErrors.length > 0) {
                for (var index = 0; index < minValueErrors.length; index++) {
                    this.addClientErrors(minValueErrors[index]);
                }
            }
        }
        // max value validation
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal && this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION)) {
            // apply validation only when Tolerance and min and max option selected
            var maxValueErrors = this.oRingInternalVacuumOnlyValidationService.maxValueValidation(this.oringform, this.calculatorConfig.toolbarOption.value);
            if (maxValueErrors.length > 0) {
                for (var index = 0; index < maxValueErrors.length; index++) {
                    this.addClientErrors(maxValueErrors[index]);
                }
            }
        }
        // warnings
        var glandWidthNominalWarning = this.oRingInternalVacuumOnlyValidationService.glandWidthNominalWarning(this.oringform);
        if (glandWidthNominalWarning) {
            this.addClientWarnings(glandWidthNominalWarning);
        }
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
            var glandWidthMinWarning = this.oRingInternalVacuumOnlyValidationService.glandWidthMinWarning(this.oringform, this.calculatorConfig.toolbarOption.value);
            var glandWidthMaxWarning = this.oRingInternalVacuumOnlyValidationService.glandWidthMaxWarning(this.oringform, this.calculatorConfig.toolbarOption.value);
            if (glandWidthMinWarning) {
                this.addClientWarnings(glandWidthMinWarning);
            }
            if (glandWidthMaxWarning) {
                this.addClientWarnings(glandWidthMaxWarning);
            }
        }
        // stop here if form is invalid/Not_valid
        if (this.oringform.invalid) {
            return;
        }
        // perform calculation
        this.oRingInternalVacuumOnlyService.createORing(this.oringform, this.calculatorConfig.toolbarOption.value, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(function (resp) {
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
                if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal !== +(_this.calculatorConfig.toolbarOption.value)) {
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
                }
                // Bind output form data
                // loop through each output
                for (var outputIndex = 0; outputIndex < _this.calculatorConfig.form_output.length; outputIndex++) {
                    // set output title of operating temperature label
                    if (outputIndex > 0) {
                        var temperatureCode = ((+_this.temperatureButtonService.getCurrentTemperatureValue.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].FAHRENHEIT) ? _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["TemperatureFahrenheitCode"].HEXA_DECIMAL_CODE : _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["TemperatureCelsiusCode"].HEXA_DECIMAL_CODE;
                        var operatingTemperatureMin = _this.oringform.controls["operatingTemperatureMin"];
                        var operatingTemperatureNominal = _this.oringform.controls["operatingTemperatureNominal"];
                        var operatingTemperatureMax = _this.oringform.controls["operatingTemperatureMax"];
                        // operating temperature min
                        if (outputIndex === 1 && operatingTemperatureMin && operatingTemperatureMin.value) {
                            _this.calculatorConfig.form_output[outputIndex].show = true;
                            _this.calculatorConfig.form_output[outputIndex].display_output_title = "" + operatingTemperatureMin.value + temperatureCode;
                        }
                        else if (outputIndex === 1) {
                            _this.calculatorConfig.form_output[outputIndex].show = false;
                        }
                        // operating temperature nominal
                        if (outputIndex === 2 && operatingTemperatureNominal && operatingTemperatureNominal.value) {
                            _this.calculatorConfig.form_output[outputIndex].show = true;
                            _this.calculatorConfig.form_output[outputIndex].display_output_title = "" + operatingTemperatureNominal.value + temperatureCode;
                        }
                        else if (outputIndex === 2) {
                            _this.calculatorConfig.form_output[outputIndex].show = false;
                        }
                        // operating temperature max
                        if (outputIndex === 3 && operatingTemperatureMax && operatingTemperatureMax.value) {
                            _this.calculatorConfig.form_output[outputIndex].show = true;
                            _this.calculatorConfig.form_output[outputIndex].display_output_title = "" + operatingTemperatureMax.value + temperatureCode;
                        }
                        else if (outputIndex === 3) {
                            _this.calculatorConfig.form_output[outputIndex].show = false;
                        }
                    }
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
    // option nominal, tolerance and (min and max) change handler
    ORingInternalVacuumOnlyComponent.prototype.onOptionChange = function (selectedOption) {
        // show or hide controls based on options
        this.dynamicFormTwoColumnLayoutService.showOrHideControlsBasedOnOption(selectedOption);
        // update form submission status
        this.isSubmitted = false;
        // reset error, warnings
        this.resetErroAndWarnings();
        // reset calculated output
        this.resetCalculatedLabelValue();
        // create form
        this.createForm();
        this.setShowPasteBtnFlag();
    };
    // on reset button handler
    ORingInternalVacuumOnlyComponent.prototype.onReset = function () {
        if (!this.oringform) {
            return;
        }
        // get form controls key
        var formControlKeys = Object.keys(this.oringform.controls);
        // loop through the reactive form/formgroup controls 
        for (var index = 0; index < formControlKeys.length; index++) {
            // skip toolbar options(Nominal, Tolerance, Min and Max) resetting
            if (this.calculatorConfig.toolbarOption.key === formControlKeys[index]) {
                continue;
            }
            // get form control default value and set
            var formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
            if (formControlDefaultValue) {
                this.oringform.controls[formControlKeys[index]].setValue(formControlDefaultValue);
            }
            else {
                this.oringform.controls[formControlKeys[index]].setValue('');
            }
        }
        this.resetFormAndCalculation();
    };
    // clears the form submission status and 
    // calcuated data
    ORingInternalVacuumOnlyComponent.prototype.resetFormAndCalculation = function () {
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
                        if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                            // set JSON output label
                            // bind calculated result to output label
                            this.calculatorConfig.form_output[outputIndex].row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = "%";
                        }
                    }
                }
            }
        }
        // Operating Temperature Min
        this.calculatorConfig.form_output[1].display_output_title = "";
        this.calculatorConfig.form_output[1].show = false;
        // Operating Temperature Nominal
        this.calculatorConfig.form_output[2].display_output_title = "";
        // Operating Temperature Max
        this.calculatorConfig.form_output[3].display_output_title = "";
        this.calculatorConfig.form_output[3].show = false;
        // reset calculated data received after calculation
        this.CalculatedData = {};
    };
    // print button event handler
    ORingInternalVacuumOnlyComponent.prototype.onPrint = function () {
        this.printService.generatePdf("rectangleGland");
    };
    // create form group
    ORingInternalVacuumOnlyComponent.prototype.createForm = function () {
        var _this = this;
        // get form controls nested array
        var leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.oringform, this.calculatorConfig.form.left_column.form_layout_row);
        var rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.oringform, this.calculatorConfig.form.right_column.form_layout_row);
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
        this.oringform = this.controlBaseService.toFormGroup(filteredControls);
        // get and set validations
        var validations = [];
        // get validation key from json config object
        var jsonConfigValidationsArray = this.calculatorConfig.form.form_validation;
        for (var index = 0; index < jsonConfigValidationsArray.length; index++) {
            var validationFuncKey = jsonConfigValidationsArray[index];
            switch (validationFuncKey) {
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].BOTTOM_RADII_NOMINAL_VALIDATION:
                    validations.push(this.oRingInternalVacuumOnlyValidationService.bottomRadiiShouldNotBeLargerThanGlandWidthOrDepth());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].OPERATING_TEMPERATURE_VALIDATION:
                    validations.push(this.oRingInternalVacuumOnlyValidationService.operatingTemperatureValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION:
                    validations.push(this.oRingInternalVacuumOnlyValidationService.oringCrossSectionNominalValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].LESS_THAN_ZERO_VALIDATION:
                    validations.push(this.oRingInternalVacuumOnlyValidationService.formLessThanZeroValidation(this.calculatorConfig.toolbarOption.key));
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].TOLERANCE_VALIDATION:
                    // apply validation only when Tolerance option selected
                    if ((+this.calculatorConfig.toolbarOption.value) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
                        validations.push(this.oRingInternalVacuumOnlyValidationService.toleranceValidation());
                    }
                    break;
                // case ORingTool_InternalVacuumOnly_Validators.MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION:
                //   // apply validation only when Tolerance and min and max option selected
                //   if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
                //     validations.push(this.oRingInternalVacuumOnlyValidationService.minValueValidation(this.calculatorConfig.toolbarOption.value));
                //   }
                //   break;
                // case ORingTool_InternalVacuumOnly_Validators.MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION:
                //   // apply validation only when Tolerance and min and max option selected
                //   if ((+this.calculatorConfig.toolbarOption.value) !== CalculatorOption.Nominal) {
                //     validations.push(this.oRingInternalVacuumOnlyValidationService.maxValueValidation(this.calculatorConfig.toolbarOption.value));
                //   }
                //   break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].ORING_ID_AS568A_STANDARD_WARNING:
                    validations.push(this.oRingInternalVacuumOnlyValidationService.oRingIDAS568AStandardsWarning());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_InternalVacuumOnly_Validators"].O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION:
                    validations.push(this.oRingInternalVacuumOnlyValidationService.oringIDNominalLargerThanMaxOringIDValidation());
                    break;
            }
        }
        // set custom validations with params
        this.oringform.setValidators(validations);
    };
    // reset auth token
    ORingInternalVacuumOnlyComponent.prototype.setAuth = function () {
        this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (r) { return r; });
    };
    // add client errors
    ORingInternalVacuumOnlyComponent.prototype.addClientErrors = function (error) {
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
    ORingInternalVacuumOnlyComponent.prototype.addClientWarnings = function (warning) {
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
    ORingInternalVacuumOnlyComponent.prototype.resetErroAndWarnings = function () {
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
    };
    // reset calculated label or output value in JSOn config
    ORingInternalVacuumOnlyComponent.prototype.resetCalculatedLabelValue = function () {
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
    // component destroy
    ORingInternalVacuumOnlyComponent.prototype.ngOnDestroy = function () {
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
    // on paste calculated data
    ORingInternalVacuumOnlyComponent.prototype.onPaste = function (calculatedData) {
        if (calculatedData) {
            this.oringform.patchValue(calculatedData);
            // set material choice dropdown value
            var cte = this.helperService.getMaterialChoiceList('materialCteNominal');
            var i = cte.findIndex(function (c) {
                return c.value.id === calculatedData['materialCteNominal'].id;
            });
            if (i > -1) {
                this.oringform.get('materialCteNominal').setValue(cte[i].value);
            }
        }
    };
    // set show flag of paste button
    ORingInternalVacuumOnlyComponent.prototype.setShowPasteBtnFlag = function () {
        if (this.calculatorConfig && this.calculatorConfig.id) {
            this.isShowPasteBtn = (this.helperService.isCalculatedDataExist(+this.calculatorConfig.id)) ? true : false;
        }
        else {
            this.isShowPasteBtn = false;
        }
    };
    ORingInternalVacuumOnlyComponent.ɵfac = function ORingInternalVacuumOnlyComponent_Factory(t) { return new (t || ORingInternalVacuumOnlyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangularORingCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_o_ring_internal_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_11__["ORingInternalVacuumOnlyValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_o_ring_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__["ORingInternalVacuumOnlyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_14__["CalculatorToolbarService"])); };
    ORingInternalVacuumOnlyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ORingInternalVacuumOnlyComponent, selectors: [["app-internal-vacuum-only"]], decls: 41, vars: 6, consts: [[1, "row"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [1, "graph-sec"], [1, "graph-bg"], [1, "gld-id"], [1, "gld-width"], [1, "gld-depth"], [1, "top-radii"], [1, "bottom-radii"], [1, "gap-full-comp", "rect-gap"], [1, "rect-static-value"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "ignorePdf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1", "ignorePdf"], [3, "calculatorConfig", "isShowOptions", "form", "control", "isSubmitted", "isShowPasteBtn", "optionChange", "reset", "print"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [3, "form", "isSubmitted", "calculatorJSON", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings"]], template: function ORingInternalVacuumOnlyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ORingInternalVacuumOnlyComponent_form_2_Template, 6, 17, "form", 2);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.calculatorConfig && ctx.oringform);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getControlValue("glandIdNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getControlValue("glandWidthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getControlValue("glandDepthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getControlValue("bottomRadiiNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getControlValue("gapNominal"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__["UserRulesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__["DynamicFormTwoColumnLayoutComponent"]], styles: [".graph-sec[_ngcontent-%COMP%] {\n    border: 1px solid #d2d2d2;\n    padding: 0 15px;\n    position: relative;\n    margin-bottom: 20px;\n    margin-top: 10px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%] {\n    background: url(/assets/img/graph.jpg) no-repeat;\n    width: 100%;\n    height: 200px;\n    background-size: contain;\n}\n\n.graph-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #606060;\n    font-size: 1.1rem;\n    margin: 15px 0 10px;\n    border-bottom: 1px solid #d2d2d2;\n    padding-bottom: 12px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-weight: 600;\n    position: absolute;\n    color: #666;\n    color: #225a8a;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.gld-id[_ngcontent-%COMP%] {\n    top: 56px;\n    left: 20px;\n    font-size: 0.7rem;\n    background: #fff;\n    text-align: center;\n    height: 22px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.gld-width[_ngcontent-%COMP%] {\n    bottom: 27px;\n    right: 102px;\n    font-size: 0.7rem;\n    width: 80px;\n    text-align: center;\n    height: 22px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.gld-depth[_ngcontent-%COMP%] {\n    bottom: 94px;\n    left: 5px;\n    font-size: 0.7rem;\n    background: #fff;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.top-radii[_ngcontent-%COMP%] {\n    bottom: 90px;\n    left: 30px;\n    font-size: 0.7rem;\n    display: none;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div.bottom-radii[_ngcontent-%COMP%] {\n    bottom: 29px;\n    right: 8px;\n    font-size: 0.7rem;\n    width: 80px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   .rect-gap[_ngcontent-%COMP%] {\n    top: 54px;\n    right: 38px;\n    font-size: 0.7rem;\n    width: 100px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   .rect-static-value[_ngcontent-%COMP%] {\n    top: 120px;\n    right: 22px;\n    font-size: 0.7rem;\n    width: 100px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    color: #329f59;\n    font-size: 1.2em;\n    font-family: 'open_sansbold', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ3VsYXItby1yaW5nLWNhbGMvby1yaW5nLWludGVybmFsLXZhY3V1bS1vbmx5L28tcmluZy1pbnRlcm5hbC12YWN1dW0tb25seS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7O0FBRWQ7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELFdBQVc7SUFDWCxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0NBQXdDO0FBQzVDOztBQUVBLGdCQUFnQjs7QUFFaEI7Ozs7Ozs7Ozs7OztHQVlHIiwiZmlsZSI6ImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ3VsYXItby1yaW5nLWNhbGMvby1yaW5nLWludGVybmFsLXZhY3V1bS1vbmx5L28tcmluZy1pbnRlcm5hbC12YWN1dW0tb25seS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ3JhcGggY3NzICovXG5cbi5ncmFwaC1zZWMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZ3JhcGguanBnKSBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5ncmFwaC1zZWMgaDMge1xuICAgIGNvbG9yOiAjNjA2MDYwO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG1hcmdpbjogMTVweCAwIDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnIGRpdiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgY29sb3I6ICMyMjVhOGE7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnIGRpdi5nbGQtaWQge1xuICAgIHRvcDogNTZweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjJweDtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcgZGl2LmdsZC13aWR0aCB7XG4gICAgYm90dG9tOiAyN3B4O1xuICAgIHJpZ2h0OiAxMDJweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB3aWR0aDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyBkaXYuZ2xkLWRlcHRoIHtcbiAgICBib3R0b206IDk0cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyBkaXYudG9wLXJhZGlpIHtcbiAgICBib3R0b206IDkwcHg7XG4gICAgbGVmdDogMzBweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyBkaXYuYm90dG9tLXJhZGlpIHtcbiAgICBib3R0b206IDI5cHg7XG4gICAgcmlnaHQ6IDhweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB3aWR0aDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnIC5yZWN0LWdhcCB7XG4gICAgdG9wOiA1NHB4O1xuICAgIHJpZ2h0OiAzOHB4O1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmFwaC1zZWMgLmdyYXBoLWJnIC5yZWN0LXN0YXRpYy12YWx1ZSB7XG4gICAgdG9wOiAxMjBweDtcbiAgICByaWdodDogMjJweDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZyBkaXYgc3Ryb25nIHtcbiAgICBjb2xvcjogIzMyOWY1OTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnb3Blbl9zYW5zYm9sZCcsIHNhbnMtc2VyaWY7XG59XG5cbi8qIG1lZGlhIHF1ZXJ5ICovXG5cbi8qIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTBweCkge1xuICAgIC5ncmFwaC1zZWMge1xuICAgICAgICB3aWR0aDogMjkycHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAxNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAuZ3JhcGgtc2VjIHtcbiAgICAgICAgd2lkdGg6IDI5MnB4O1xuICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICB9XG59ICovIl19 */"] });
    return ORingInternalVacuumOnlyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ORingInternalVacuumOnlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-internal-vacuum-only',
                templateUrl: './o-ring-internal-vacuum-only.component.html',
                styleUrls: ['./o-ring-internal-vacuum-only.component.css']
            }]
    }], function () { return [{ type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangularORingCalcService"] }, { type: _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"] }, { type: _shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"] }, { type: _o_ring_internal_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_11__["ORingInternalVacuumOnlyValidationService"] }, { type: _o_ring_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__["ORingInternalVacuumOnlyService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"] }, { type: _shared_components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_14__["CalculatorToolbarService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.module.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ORingInternalVacuumOnlyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingInternalVacuumOnlyModule", function() { return ORingInternalVacuumOnlyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _o_ring_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./o-ring-internal-vacuum-only-routing.module */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only-routing.module.ts");
/* harmony import */ var _o_ring_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./o-ring-internal-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.component.ts");
/* harmony import */ var _o_ring_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./o-ring-internal-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.service.ts");
/* harmony import */ var _o_ring_internal_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./o-ring-internal-vacuum-only-validation.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only-validation.service.ts");
// core improts



// application imports







var ORingInternalVacuumOnlyModule = /** @class */ (function () {
    function ORingInternalVacuumOnlyModule() {
    }
    ORingInternalVacuumOnlyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ORingInternalVacuumOnlyModule });
    ORingInternalVacuumOnlyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ORingInternalVacuumOnlyModule_Factory(t) { return new (t || ORingInternalVacuumOnlyModule)(); }, providers: [
            _o_ring_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["ORingInternalVacuumOnlyService"],
            _o_ring_internal_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_8__["ORingInternalVacuumOnlyValidationService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _o_ring_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingInternalVacuumOnlyRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
            ]] });
    return ORingInternalVacuumOnlyModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ORingInternalVacuumOnlyModule, { declarations: [_o_ring_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["ORingInternalVacuumOnlyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _o_ring_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingInternalVacuumOnlyRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ORingInternalVacuumOnlyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_o_ring_internal_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["ORingInternalVacuumOnlyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _o_ring_internal_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingInternalVacuumOnlyRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
                ],
                providers: [
                    _o_ring_internal_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["ORingInternalVacuumOnlyService"],
                    _o_ring_internal_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_8__["ORingInternalVacuumOnlyValidationService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.service.ts":
/*!************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.service.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ORingInternalVacuumOnlyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingInternalVacuumOnlyService", function() { return ORingInternalVacuumOnlyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _models_oRingInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/oRingInternalVacuumOnlyDTO */ "./client/app/models/oRingInternalVacuumOnlyDTO.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _o_ring_internal_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./o-ring-internal-vacuum-only-validation.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-internal-vacuum-only/o-ring-internal-vacuum-only-validation.service.ts");

// core imports

// third party imports

// application imports






var ORingInternalVacuumOnlyService = /** @class */ (function () {
    function ORingInternalVacuumOnlyService(_http, oRingInternalVacuumOnlyValidationService) {
        this._http = _http;
        this.oRingInternalVacuumOnlyValidationService = oRingInternalVacuumOnlyValidationService;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].settings.env.api;
        this.oRingInternalVacuumCalculatorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.oRingInternalVacuumCalculator$ = this.oRingInternalVacuumCalculatorSubject.asObservable();
    }
    Object.defineProperty(ORingInternalVacuumOnlyService.prototype, "oRingInternalVacuumCalculator", {
        get: function () {
            return this.oRingInternalVacuumCalculatorSubject.getValue();
        },
        set: function (val) {
            this.oRingInternalVacuumCalculatorSubject.next(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ORingInternalVacuumOnlyService.prototype, "getCurrentValue", {
        get: function () {
            return this.oRingInternalVacuumCalculator;
        },
        enumerable: true,
        configurable: true
    });
    ORingInternalVacuumOnlyService.prototype.setORingInternalVacuumCalculator = function (val) {
        this.oRingInternalVacuumCalculator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, val);
    };
    ORingInternalVacuumOnlyService.prototype.createORing = function (form, inputOption, unit, unitTemp) {
        var body = new _models_oRingInternalVacuumOnlyDTO__WEBPACK_IMPORTED_MODULE_4__["ORingInternalVacuumOnlyDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        body.inputOption = inputOption;
        // // body.calculationType = calculationType.ORING_SIZING;
        if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_5__["CalculatorOption"].WithTolerance === +(inputOption)) {
            var minValue = this.oRingInternalVacuumOnlyValidationService.generateMinValues(form);
            body.glandWidthMin = minValue.glandWidthMin ? minValue.glandWidthMin : 0;
            body.glandDepthMin = minValue.glandDepthMin ? minValue.glandDepthMin : 0;
            body.bottomRadiiMin = minValue.bottomRadiiMin ? minValue.bottomRadiiMin : 0;
            body.gapMin = minValue.gapMin ? minValue.gapMin : 0;
            body.glandIdMin = minValue.glandIdMin ? minValue.glandIdMin : 0;
            var maxValue = this.oRingInternalVacuumOnlyValidationService.generateMaxValues(form);
            body.glandWidthMax = maxValue.glandWidthMax ? maxValue.glandWidthMax : 0;
            body.glandDepthMax = maxValue.glandDepthMax ? maxValue.glandDepthMax : 0;
            body.bottomRadiiMax = maxValue.bottomRadiiMax ? maxValue.bottomRadiiMax : 0;
            body.gapMax = maxValue.gapMax ? maxValue.gapMax : 0;
            body.glandIdMax = maxValue.glandIdMax ? maxValue.glandIdMax : 0;
        }
        return this._http.post(this.baseUrl + "oringglandanalysistool/createoring", body);
    };
    ORingInternalVacuumOnlyService.ɵfac = function ORingInternalVacuumOnlyService_Factory(t) { return new (t || ORingInternalVacuumOnlyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_o_ring_internal_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_7__["ORingInternalVacuumOnlyValidationService"])); };
    ORingInternalVacuumOnlyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ORingInternalVacuumOnlyService, factory: ORingInternalVacuumOnlyService.ɵfac, providedIn: 'root' });
    return ORingInternalVacuumOnlyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ORingInternalVacuumOnlyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _o_ring_internal_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_7__["ORingInternalVacuumOnlyValidationService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=o-ring-internal-vacuum-only-o-ring-internal-vacuum-only-module.js.map