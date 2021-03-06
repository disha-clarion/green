(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["o-ring-dovetail-gland-vacuum-only-o-ring-dovetail-gland-vacuum-only-module"],{

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only-routing.module.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only-routing.module.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: ORingDovetailGlandVacuumOnlyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingDovetailGlandVacuumOnlyRoutingModule", function() { return ORingDovetailGlandVacuumOnlyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _o_ring_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./o-ring-dovetail-gland-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.component.ts");





var routes = [
    {
        path: '', component: _o_ring_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_2__["ORingDovetailGlandVacuumOnlyComponent"], pathMatch: 'full'
    }
];
var ORingDovetailGlandVacuumOnlyRoutingModule = /** @class */ (function () {
    function ORingDovetailGlandVacuumOnlyRoutingModule() {
    }
    ORingDovetailGlandVacuumOnlyRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ORingDovetailGlandVacuumOnlyRoutingModule });
    ORingDovetailGlandVacuumOnlyRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ORingDovetailGlandVacuumOnlyRoutingModule_Factory(t) { return new (t || ORingDovetailGlandVacuumOnlyRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ORingDovetailGlandVacuumOnlyRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ORingDovetailGlandVacuumOnlyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ORingDovetailGlandVacuumOnlyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only-validation.service.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only-validation.service.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: ORingDovetailGlandVacuumOnlyValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingDovetailGlandVacuumOnlyValidationService", function() { return ORingDovetailGlandVacuumOnlyValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/custom-validations/comparison-validation.directive */ "./client/app/shared/directives/custom-validations/comparison-validation.directive.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _models_error_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/error.model */ "./client/app/models/error.model.ts");
/* harmony import */ var _models_oring_dovetail_min_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/oring-dovetail-min.model */ "./client/app/models/oring-dovetail-min.model.ts");
/* harmony import */ var _models_oring_dovetail_max_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/oring-dovetail-max.model */ "./client/app/models/oring-dovetail-max.model.ts");
/* harmony import */ var _models_radii_recomendation_nominal_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/radii-recomendation-nominal.model */ "./client/app/models/radii-recomendation-nominal.model.ts");
/* harmony import */ var _models_radii_recomendation_min_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/radii-recomendation-min.model */ "./client/app/models/radii-recomendation-min.model.ts");
/* harmony import */ var _models_radii_recomendation_max_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/radii-recomendation-max.model */ "./client/app/models/radii-recomendation-max.model.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");

// core imports

// application imports












// constants
var glandAngleClientValidationTitle = "Gland Angle";
var glandAngleRangeValidationMessage = "For a dovetail gland, input ranges from 45 to 75 degrees though recommended gland angles are from 55-66 degrees. Please contact Greene Tweed engineering for further recommendations.";
var glandWidthClientValidationTitle = "Gland Width";
var glandWidthClientValidationMessage = "Inputs create a non-physical gland. Consider increasing Gland Width.";
var bottomRadiiClientValidationTitle = "Bottom Radii";
var bottomRadiiNonPhysicalValidationMessage = "Inputs create a non-physical gland. Consider reducing Bottom Radii to below 33% of Gland Depth.";
var topRadiiClientValidationTitle = "Top Radii";
var topRadiiNonPhysicalValidationMessage = "Inputs create a non-physical gland. Consider reducing Top Radius to below 13% of Gland Depth.";
var glandAngleRecommendedGlandAngleWarningTitle = "Gland Angle";
var glandAngleRecommendedGlandAngleWarningMessage = "For a dovetail gland, input ranges from 45 to 75 degrees though recommended gland angles are from 55-66 degrees. Please contact Greene Tweed engineering for further recommendations.";
var topRadiiReduceLifeWarningTitle = "Top Radii";
var topRadiiReduceLifeWarningMessage = "Gland inputs may reduce the lifetime of the seal. Consider reducing Top Radii to below 13% of Gland Depth.";
var bottomRadiiReduceLifeWarningTitle = "Bottom Radii";
var bottomRadiiReduceLifeWarningMessage = "Gland inputs may reduce the lifetime of the seal. Consider reducing Bottom Radii to below 33% of Gland Depth.";
var glandWidthNoReliableWarningTitle = "Gland Width";
var glandWidthNoReliableWarningMessage = "The gland fill calculations will be considered not reliable as the o-ring could not expand fully into the gland.";
var ORingDovetailGlandVacuumOnlyValidationService = /** @class */ (function () {
    function ORingDovetailGlandVacuumOnlyValidationService(helperService, unitButtonService, temperatureButtonService) {
        this.helperService = helperService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
    }
    /********************************************************************/
    /*********************** Client Side Validation/Errors *********************/
    /************* That do not Prevent the form submission***************/
    /********************************************************************/
    // glandAngleNominal validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandAngleNominalValidation = function (control) {
        var glandAngleNominalControl = control.get('glandAngleNominal');
        var error = null;
        // glandAngleNominal
        if (glandAngleNominalControl.value) {
            var lessThanEqual44Error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(glandAngleNominalControl.value, "44", "glandAngleNominal", glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
            var largerThanEqual76Error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandAngleNominalControl.value, "76", "glandAngleNominal", glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
            if (lessThanEqual44Error || largerThanEqual76Error) {
                error = lessThanEqual44Error || largerThanEqual76Error;
            }
        }
        return error;
    };
    // gland angle min value validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandAngleMinValidation = function (control, option) {
        var error = null;
        var glandAngleMinControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
            return null;
        }
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate min values
            var minValues = this.generateMinValues(control);
            glandAngleMinControlValue = minValues.glandAngleMin;
        }
        else {
            glandAngleMinControlValue = control.get('glandAngleMin').value ? (+control.get('glandAngleMin').value) : null;
        }
        if (glandAngleMinControlValue) {
            // min value validation
            var lessThanEqual44Error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(glandAngleMinControlValue.toString(), "44", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
            var largerThanEqual76Error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandAngleMinControlValue.toString(), "76", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
            if (lessThanEqual44Error || largerThanEqual76Error) {
                error = lessThanEqual44Error || largerThanEqual76Error;
            }
        }
        return error;
    };
    // gland angle max value validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandAngleMaxValidation = function (control, option) {
        var error = null;
        var glandAngleMaxControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
            return null;
        }
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate max values
            var maxValues = this.generateMaxValues(control);
            glandAngleMaxControlValue = maxValues.glandAngleMax;
        }
        else {
            glandAngleMaxControlValue = control.get('glandAngleMax').value ? (+control.get('glandAngleMax').value) : null;
        }
        if (glandAngleMaxControlValue) {
            // max value validation
            var lessThanEqual44Error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(glandAngleMaxControlValue.toString(), "44", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
            var largerThanEqual76Error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandAngleMaxControlValue.toString(), "76", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleClientValidationTitle, glandAngleRangeValidationMessage);
            if (lessThanEqual44Error || largerThanEqual76Error) {
                error = lessThanEqual44Error || largerThanEqual76Error;
            }
        }
        return error;
    };
    //  oringCrossSectionNominalLessThan vaidate
    ORingDovetailGlandVacuumOnlyValidationService.prototype.oringCrossSectionNominalLessThanValidation = function (control) {
        var oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
        var glandDepthNominalControl = control.get('glandDepthNominal');
        var error = null;
        if (oringCrossSectionNominalControl && glandDepthNominalControl && oringCrossSectionNominalControl.value && glandDepthNominalControl.value) {
            var oringCrossSectionNominalLessThanError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(oringCrossSectionNominalControl.value, glandDepthNominalControl.value, "oringCrossSectionNominal", "O-ring Cross Section", "O-ring Cross Section should greater than or equal to gland depth.");
            error = oringCrossSectionNominalLessThanError;
        }
        return error;
    };
    /********************************************************************/
    /*********************** Client Side Validation *********************/
    /******************** Prevent the form submission********************/
    /********************************************************************/
    // glandWidthNominal limit validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandWidthNominalValidation = function () {
        var _this = this;
        return function (control) {
            var error = null;
            var glandWidthNominalControl = control.get('glandWidthNominal');
            var radiiRecommendedNominalValues = _this.generateRadiiRecomendationNominal(control);
            // glandWidthNominal
            if (radiiRecommendedNominalValues.w) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(radiiRecommendedNominalValues.w.toString(), "0", "glandWidthNominal", glandWidthClientValidationTitle, glandWidthClientValidationMessage);
            }
            _this.helperService.setValidationErrorToFormControl(glandWidthNominalControl, error, "errorGlandWidthNominalNonPhysicalGland");
            return error;
        };
    };
    // glandWidth min value validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandWidthMinValidation = function (option) {
        var _this = this;
        return function (control) {
            var error = null;
            var glandWidthNominalControl = control.get('glandWidthNominal');
            var glandWidthMinControl = control.get('glandWidthMin');
            var radiiRecommendedMinValues = _this.generateRadiiRecomendationMin(control, option);
            // min value validation
            if (radiiRecommendedMinValues.wMin) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(radiiRecommendedMinValues.wMin.toString(), "0", (+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax ? "glandWidthMin" : "glandWidthNominal", glandWidthClientValidationTitle, glandWidthClientValidationMessage);
            }
            if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax) {
                // if (!glandWidthMinControl.errors) {
                //   glandWidthMinControl.setErrors(error);
                // }
                _this.helperService.setValidationErrorToFormControl(glandWidthMinControl, error, "errorGlandWidthMinNonPhysicalGland");
            }
            else {
                _this.helperService.setValidationErrorToFormControl(glandWidthNominalControl, error, "errorGlandWidthMinNonPhysicalGland");
            }
            return error;
        };
    };
    // glandWidth max value validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandWidthMaxValidation = function (option) {
        var _this = this;
        return function (control) {
            var error = null;
            var glandWidthNominalControl = control.get('glandWidthNominal');
            var glandWidthMaxControl = control.get('glandWidthMax');
            var radiiRecommendedMaxValues = _this.generateRadiiRecomendationMax(control, option);
            if (radiiRecommendedMaxValues.wMax) {
                // max value validation
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(radiiRecommendedMaxValues.wMax.toString(), "0", (+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax ? "glandWidthMax" : "glandWidthNominal", glandWidthClientValidationTitle, glandWidthClientValidationMessage);
            }
            if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax) {
                // if (!glandWidthMaxControl.errors) {
                //   glandWidthMaxControl.setErrors(error);
                // }
                _this.helperService.setValidationErrorToFormControl(glandWidthMaxControl, error, "errorGlandWidthMaxNonPhysicalGland");
            }
            else {
                _this.helperService.setValidationErrorToFormControl(glandWidthNominalControl, error, "errorGlandWidthMaxNonPhysicalGland");
            }
            return error;
        };
    };
    // bottomRadiiNominal limit validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.bottomRadiiShouldBeLessThanBottomRadiiMinLimit = function () {
        var _this = this;
        return function (control) {
            var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var bottomRadiiMinLimit = _this.helperService.bottomRadiiMinLimit(currentSelectedUnit);
            var error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(bottomRadiiNominalControl.value, bottomRadiiMinLimit.toString(), "bottomRadiiNominal", bottomRadiiClientValidationTitle, "Bottom Radii must have a minimum " + bottomRadiiMinLimit + " " + currentSelectedUnit.display_Short_title + " radius due to typical machining tolerance standards.");
            _this.helperService.setValidationErrorToFormControl(bottomRadiiNominalControl, error, "bottomRadiiShouldBeLessThanBottomRadiiMin");
            return error;
        };
    };
    // bottom radii non physical validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.bottomRadiiNominalNonPhysicalGland = function () {
        var _this = this;
        return function (control) {
            var error;
            var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
            var glandDepthNominalControl = control.get('glandDepthNominal');
            var radiiRecommendedNominalValues = _this.generateRadiiRecomendationNominal(control);
            if (bottomRadiiNominalControl.value && glandDepthNominalControl.value) {
                if (radiiRecommendedNominalValues.h && radiiRecommendedNominalValues.bottomRadiiPercent) {
                    var radiiRecommendedNominalValuesHLessThanZeroError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(radiiRecommendedNominalValues.h.toString(), "0", "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
                    var radiiRecommendedNominalValuesBottomRadiiPercentGreaterThan33 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecommendedNominalValues.bottomRadiiPercent.toString(), "33", "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
                    var bottomRadiiErrorMaxRange = (33 / 100) * parseFloat(glandDepthNominalControl.value);
                    var radiiRecommendedNominalValuesBottomRadiiErrorMaxRangeError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(bottomRadiiNominalControl.value, bottomRadiiErrorMaxRange.toString(), "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
                    if (radiiRecommendedNominalValuesHLessThanZeroError || radiiRecommendedNominalValuesBottomRadiiPercentGreaterThan33 || radiiRecommendedNominalValuesBottomRadiiErrorMaxRangeError) {
                        error = radiiRecommendedNominalValuesHLessThanZeroError || radiiRecommendedNominalValuesBottomRadiiPercentGreaterThan33;
                    }
                }
            }
            if (!error) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecommendedNominalValues.bottomRadiiPercent.toString(), "52", "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
            }
            _this.helperService.setValidationErrorToFormControl(bottomRadiiNominalControl, error, "bottomRadiiNominalNonPhysicalGland");
            return error;
        };
    };
    // bottom radii min non physical validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.bottomRadiiMinNonPhysicalGland = function (option) {
        var _this = this;
        return function (control) {
            var error = null;
            var bottomRadiiMinControl = control.get('bottomRadiiMin');
            var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
            var radiiRecommendedNominalValues = _this.generateRadiiRecomendationNominal(control);
            var radiiRecommendedMinValues = _this.generateRadiiRecomendationMin(control, option);
            if ((radiiRecommendedMinValues.hMin && radiiRecommendedMinValues.bottomRadiiMinPercent)) {
                var radiiRecommendedMinValuesHMinLessThanZeroError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(radiiRecommendedMinValues.hMin.toString(), "0", (+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax ? "bottomRadiiMin" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
                var radiiRecommendedMinValuesBottomRadiiMinPercentLargerThan13Error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecommendedMinValues.bottomRadiiMinPercent.toString(), "33", (+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax ? "bottomRadiiMin" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
                if (radiiRecommendedMinValuesHMinLessThanZeroError || radiiRecommendedMinValuesBottomRadiiMinPercentLargerThan13Error) {
                    error = radiiRecommendedMinValuesHMinLessThanZeroError || radiiRecommendedMinValuesBottomRadiiMinPercentLargerThan13Error;
                }
            }
            if (!error) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecommendedNominalValues.bottomRadiiPercent.toString(), "52", (+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax ? "bottomRadiiMin" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
            }
            if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax) {
                _this.helperService.setValidationErrorToFormControl(bottomRadiiMinControl, error, "bottomRadiiMinNonPhysicalGland");
            }
            else {
                _this.helperService.setValidationErrorToFormControl(bottomRadiiNominalControl, error, "bottomRadiiMinNonPhysicalGland");
            }
            return error;
        };
    };
    // bottom radii max non physical validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.bottomRadiiMaxNonPhysicalGland = function (option) {
        var _this = this;
        return function (control) {
            var error = null;
            var bottomRadiiMaxControl = control.get('bottomRadiiMax');
            var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
            var radiiRecommendedNominalValues = _this.generateRadiiRecomendationNominal(control);
            var radiiRecommendedMaxValues = _this.generateRadiiRecomendationMax(control, option);
            if ((radiiRecommendedMaxValues.hMax && radiiRecommendedMaxValues.bottomRadiiMaxPercent)) {
                var radiiRecommendedMaxValuesHMaxLessThanZero = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(radiiRecommendedMaxValues.hMax.toString(), "0", (+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax ? "bottomRadiiMax" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
                var radiiRecommendedMaxValuesBottomRadiiMaxPercentGreaterThan33Error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecommendedMaxValues.bottomRadiiMaxPercent.toString(), "33", (+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax ? "bottomRadiiMax" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
                if (radiiRecommendedMaxValuesHMaxLessThanZero || radiiRecommendedMaxValuesBottomRadiiMaxPercentGreaterThan33Error) {
                    error = radiiRecommendedMaxValuesHMaxLessThanZero || radiiRecommendedMaxValuesBottomRadiiMaxPercentGreaterThan33Error;
                }
            }
            if (!error) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecommendedNominalValues.bottomRadiiPercent.toString(), "52", (+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax ? "bottomRadiiMax" : "bottomRadiiNominal", bottomRadiiClientValidationTitle, bottomRadiiNonPhysicalValidationMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Error);
            }
            if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax) {
                _this.helperService.setValidationErrorToFormControl(bottomRadiiMaxControl, error, "bottomRadiiMaxNonPhysicalGland");
            }
            else {
                _this.helperService.setValidationErrorToFormControl(bottomRadiiNominalControl, error, "bottomRadiiMaxNonPhysicalGland");
            }
            return error;
        };
    };
    // topRadiiNominal limit validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.topRadiiNominalShouldBeLessThanBottomRadiiMinLimit = function () {
        var _this = this;
        return function (control) {
            var topRadiiNominalControl = control.get('topRadiiNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var bottomRadiiMinLimit = _this.helperService.bottomRadiiMinLimit(currentSelectedUnit);
            var error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(topRadiiNominalControl.value, bottomRadiiMinLimit.toString(), "topRadiiNominal", topRadiiClientValidationTitle, "Top Radii must have a minimum " + bottomRadiiMinLimit + " " + currentSelectedUnit.display_Short_title + " radius due to typical machining tolerance standards.");
            if (!topRadiiNominalControl.errors) {
                topRadiiNominalControl.setErrors(error);
            }
            return error;
        };
    };
    // topRadiiNominal limit validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.topRadiiNominalNonPhysicalValidation = function () {
        return function (control) {
            var error = null;
            var largerThanValidationError = null;
            var topRadiiNominalControl = control.get('topRadiiNominal');
            var glandDepthNominalControl = control.get('glandDepthNominal');
            var radiiRecomendationNominalValues = new _models_radii_recomendation_nominal_model__WEBPACK_IMPORTED_MODULE_7__["RadiiRecomendationNominal"]();
            if (topRadiiNominalControl.value && glandDepthNominalControl.value) {
                var glandDepthNominalControlValidateValue = (parseFloat(glandDepthNominalControl.value) * 22 / 100).toString();
                largerThanValidationError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(topRadiiNominalControl.value, glandDepthNominalControlValidateValue, "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
            }
            if (largerThanValidationError) {
                error = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, largerThanValidationError);
            }
            if (!error && (radiiRecomendationNominalValues.h && radiiRecomendationNominalValues.topRadiiPercent)) {
                var radiiRecomendationNominalValuesHError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(radiiRecomendationNominalValues.h.toString(), "0", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
                var radiiRecomendationNominalValuesTopRadiiPercentError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecomendationNominalValues.topRadiiPercent.toString(), "13", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
                if (radiiRecomendationNominalValuesHError || radiiRecomendationNominalValuesTopRadiiPercentError) {
                    error = radiiRecomendationNominalValuesHError || radiiRecomendationNominalValuesTopRadiiPercentError;
                }
            }
            if (!error) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecomendationNominalValues.topRadiiPercent.toString(), "22", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
            }
            if (!topRadiiNominalControl.errors) {
                topRadiiNominalControl.setErrors(error);
            }
            return error;
        };
    };
    // topRadii min value validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.topRadiiMinNonPhysicalValidation = function (option) {
        var _this = this;
        return function (control) {
            var error = null;
            var topRadiiNominalControl = control.get('topRadiiNominal');
            var topRadiiMinControl = control.get('topRadiiMin');
            var radiiRecomendationNominalValues = new _models_radii_recomendation_nominal_model__WEBPACK_IMPORTED_MODULE_7__["RadiiRecomendationNominal"]();
            var radiiRecommendedMinValues = _this.generateRadiiRecomendationMin(control, option);
            // min value validation
            if (radiiRecommendedMinValues.hMin && radiiRecommendedMinValues.topRadiiMinPercent) {
                var radiiRecommendedMinValuesHMinLessThanZeroError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(radiiRecommendedMinValues.hMin.toString(), "0", "topRadiiMin", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
                var radiiRecommendedMinValuesTopRadiiMinPercentError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecommendedMinValues.topRadiiMinPercent.toString(), "13", "topRadiiMin", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
                if (radiiRecommendedMinValuesHMinLessThanZeroError || radiiRecommendedMinValuesTopRadiiMinPercentError) {
                    error = radiiRecommendedMinValuesHMinLessThanZeroError || radiiRecommendedMinValuesTopRadiiMinPercentError;
                }
            }
            if (!error) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecomendationNominalValues.topRadiiPercent.toString(), "22", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
            }
            if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax) {
                if (!topRadiiMinControl.errors) {
                    topRadiiMinControl.setErrors(error);
                }
            }
            else {
                if (!topRadiiNominalControl.errors) {
                    topRadiiNominalControl.setErrors(error);
                }
            }
            return error;
        };
    };
    // topRadii max value validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.topRadiiMaxNonPhysicalValidation = function (option) {
        var _this = this;
        return function (control) {
            var error = null;
            var topRadiiNominalControl = control.get('topRadiiNominal');
            var topRadiiMaxControl = control.get('topRadiiMax');
            var radiiRecomendationNominalValues = new _models_radii_recomendation_nominal_model__WEBPACK_IMPORTED_MODULE_7__["RadiiRecomendationNominal"]();
            var radiiRecommendedMaxValues = _this.generateRadiiRecomendationMax(control, option);
            if (radiiRecommendedMaxValues.hMax && radiiRecommendedMaxValues.topRadiiMaxPercent) {
                var radiiRecommendedMinValuesHMaxLessThanZeroError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(radiiRecommendedMaxValues.hMax.toString(), "0", "topRadiiMax", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
                var radiiRecommendedMaxaluesTopRadiiMinPercentError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecommendedMaxValues.topRadiiMaxPercent.toString(), "13", "topRadiiMax", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
                if (radiiRecommendedMinValuesHMaxLessThanZeroError || radiiRecommendedMaxaluesTopRadiiMinPercentError) {
                    error = radiiRecommendedMinValuesHMaxLessThanZeroError || radiiRecommendedMaxaluesTopRadiiMinPercentError;
                }
            }
            if (!error) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(radiiRecomendationNominalValues.topRadiiPercent.toString(), "22", "topRadiiNominal", topRadiiClientValidationTitle, topRadiiNonPhysicalValidationMessage);
            }
            if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithMinMax) {
                if (!topRadiiMaxControl.errors) {
                    topRadiiMaxControl.setErrors(error);
                }
            }
            else {
                if (!topRadiiNominalControl.errors) {
                    topRadiiNominalControl.setErrors(error);
                }
            }
            return error;
        };
    };
    // operating temperture nominal validation
    // common validation function also exist in o-ring Internal Vacuum only calculator validation service
    ORingDovetailGlandVacuumOnlyValidationService.prototype.operatingTemperatureValidation = function () {
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
                var message = "";
                if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].FAHRENHEIT === +(currentSelectedTemperature.id)) {
                    message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintempF + " to " + materialCteNominalValue.maxtempF + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
                }
                else {
                    // default CELCIUS
                    message = "You have requested a temperature that is outside the " + materialCteNominalValue.mintemp + " to " + materialCteNominalValue.maxtemp + " temperature range of the material " + materialCteNominalValue.mname + ". Please change temperature or contact Greene Tweed for assistance, if needed.";
                }
                // Nominal temperature min and max validation
                if (operatingTemperatureNominalControl.value) {
                    var operatingTemperatureNominalInCelcius = operatingTemperatureNominalControl.value;
                    if ((+currentSelectedTemperature.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].FAHRENHEIT) {
                        operatingTemperatureNominalInCelcius = _this.helperService.convertFahrenheitToCelcius(operatingTemperatureNominalControl.value).toFixed(2);
                    }
                    // Nominal temperature min and max validation
                    var operatingTemperatureNominalLessThanMaxTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(materialCteNominalValue.maxtemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
                    var operatingTemperatureNominalLargerThanMinTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(materialCteNominalValue.mintemp, operatingTemperatureNominalInCelcius, "operatingTemperatureNominal", "Operating Temperature", message);
                    if (operatingTemperatureNominalLessThanMaxTempError || operatingTemperatureNominalLargerThanMinTempError) {
                        error = operatingTemperatureNominalLessThanMaxTempError || operatingTemperatureNominalLargerThanMinTempError;
                    }
                    operatingTemperatureNominalControl.setErrors(error);
                }
                // Min temperature min and max validation
                if (operatingTemperatureMinControl.value) {
                    var operatingTemperatureMinInCelcius = operatingTemperatureMinControl.value;
                    if ((+currentSelectedTemperature.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].FAHRENHEIT) {
                        operatingTemperatureMinInCelcius = _this.helperService.convertFahrenheitToCelcius(operatingTemperatureMinControl.value).toFixed(2);
                    }
                    // Temperature min and max validation
                    var operatingTemperatureMinLessThanMaxTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(materialCteNominalValue.maxtemp, operatingTemperatureMinInCelcius, "operatingTemperatureMin", "Operating Temperature", message);
                    var operatingTemperatureMinLargerThanMinTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(materialCteNominalValue.mintemp, operatingTemperatureMinInCelcius, "operatingTemperatureMin", "Operating Temperature", message);
                    if (operatingTemperatureMinLessThanMaxTempError || operatingTemperatureMinLargerThanMinTempError) {
                        error = operatingTemperatureMinLessThanMaxTempError || operatingTemperatureMinLargerThanMinTempError;
                    }
                    operatingTemperatureMinControl.setErrors(error);
                }
                // Max Temperature min and max validation
                if (operatingTemperatureMaxControl.value) {
                    var operatingTemperatureMaxInCelcius = operatingTemperatureMaxControl.value;
                    if ((+currentSelectedTemperature.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].FAHRENHEIT) {
                        operatingTemperatureMaxInCelcius = _this.helperService.convertFahrenheitToCelcius(operatingTemperatureMaxControl.value).toFixed(2);
                    }
                    // Nominal temperature min and max validation
                    var operatingTemperatureMaxLessThanMaxTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(materialCteNominalValue.maxtemp, operatingTemperatureMaxInCelcius, "operatingTemperatureMax", "Operating Temperature", message);
                    var operatingTemperatureMaxLargerThanMinTempError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(materialCteNominalValue.mintemp, operatingTemperatureMaxInCelcius, "operatingTemperatureMax", "Operating Temperature", message);
                    if (operatingTemperatureMaxLessThanMaxTempError || operatingTemperatureMaxLargerThanMinTempError) {
                        error = operatingTemperatureMaxLessThanMaxTempError || operatingTemperatureMaxLargerThanMinTempError;
                    }
                    operatingTemperatureMaxControl.setErrors(error);
                }
            }
            return error;
        };
    };
    // common validation function also exist in o-ring Internal Vacuum only calculator validation service
    // Function check O-ring cross section is in range or not else set error message
    // replacement of checkCrossSection() function of existing angular 1 app
    ORingDovetailGlandVacuumOnlyValidationService.prototype.oringCrossSectionNominalValidation = function () {
        var _this = this;
        return function (control) {
            var oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var error = null;
            if (oringCrossSectionNominalControl && oringCrossSectionNominalControl.value) {
                // check O-ring cross section is in range or not else set error message
                var oringCrossSectionNominalLessThanRangeError = void 0;
                var oringCrossSectionNominalLargerThanRangeError = void 0;
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) {
                    oringCrossSectionNominalLessThanRangeError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(oringCrossSectionNominalControl.value, "0.056", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently less than AS568A standards, please contact Greene Tweed for this custom application.");
                    oringCrossSectionNominalLargerThanRangeError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(oringCrossSectionNominalControl.value, "0.331", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently greater than AS568A standards, please contact Greene Tweed for this custom application.");
                }
                if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                    oringCrossSectionNominalLessThanRangeError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(oringCrossSectionNominalControl.value, "1.42", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently less than AS568A standards, please contact Greene Tweed for this custom application.");
                    oringCrossSectionNominalLargerThanRangeError = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(oringCrossSectionNominalControl.value, "8.41", "oringCrossSectionNominal", "O-ring Cross Section", "Cross section is currently greater than AS568A standards, please contact Greene Tweed for this custom application.");
                }
                if (oringCrossSectionNominalLessThanRangeError || oringCrossSectionNominalLargerThanRangeError) {
                    error = oringCrossSectionNominalLessThanRangeError || oringCrossSectionNominalLargerThanRangeError;
                }
            }
            if (!oringCrossSectionNominalControl.errors) {
                oringCrossSectionNominalControl.setErrors(error);
            }
            return error;
        };
    };
    // common validation function also exist in o-ring Internal Vacuum only calculator validation service
    // oRingId nominal validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.oringIDNominalLargerThanMaxOringIDValidation = function () {
        var _this = this;
        return function (control) {
            var oringIdNominalControl = control.get('oringIdNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var maxOringIdValue = _this.helperService.maxOringIdValue(currentSelectedUnit);
            var error = null;
            if (oringIdNominalControl && oringIdNominalControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(oringIdNominalControl.value, maxOringIdValue.toString(), "oringIdNominal", "O-ring Id", "Please make maximum O-ring ID entry to be no more than " + maxOringIdValue + " " + currentSelectedUnit.display_Short_title);
                _this.helperService.setValidationErrorToFormControl(oringIdNominalControl, error, "oringIDNominalLargerThanMaxOringID");
            }
            return error;
        };
    };
    // common validation function also exist in o-ring Internal Vacuum only calculator validation service
    // less than zero validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.formLessThanZeroValidation = function (toolbarOptionkey) {
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
                var error_1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(control.controls[formControlKeys[index]].value, "0", formControlKeys[index], "", "Input values should not be Zero or Negative, except Gap and Operating Temperature.");
                // set error to form control
                var fc = control.get(formControlKeys[index]);
                _this.helperService.setValidationErrorToFormControl(fc, error_1, "LessThanZeroValueError");
            }
            return error;
        };
    };
    // common validation function also exist in o-ring Internal Vacuum only calculator validation service
    // tolrerance validation
    ORingDovetailGlandVacuumOnlyValidationService.prototype.toleranceValidation = function () {
        var _this = this;
        return function (control) {
            var error = null;
            var msg = "Tolerance value should not greater or equal to respective nominal value.";
            var glandWidthToleranceControl = control.get('glandWidthTolerance');
            var glandWidthNominalControl = control.get('glandWidthNominal');
            var glandDepthToleranceControl = control.get('glandDepthTolerance');
            var glandDepthNominalControl = control.get('glandDepthNominal');
            var glandAngleToleranceControl = control.get('glandAngleTolerance');
            var glandAngleNominalControl = control.get('glandAngleNominal');
            var topRadiiToleranceControl = control.get('topRadiiTolerance');
            var topRadiiNominalControl = control.get('topRadiiNominal');
            var bottomRadiiToleranceControl = control.get('bottomRadiiTolerance');
            var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
            var gapToleranceControl = control.get('gapTolerance');
            var gapNominalControl = control.get('gapNominal');
            var glandCenterlineToleranceControl = control.get('glandCenterlineTolerance');
            var glandCenterlineNominalControl = control.get('glandCenterlineNominal');
            if (glandWidthToleranceControl && glandWidthToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandWidthToleranceControl.value, glandWidthNominalControl.value, "glandWidthTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(glandWidthToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (glandDepthToleranceControl && glandDepthToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandDepthToleranceControl.value, glandDepthNominalControl.value, "glandDepthTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(glandDepthToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (glandAngleToleranceControl && glandAngleToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandAngleToleranceControl.value, glandAngleNominalControl.value, "glandAngleTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(glandAngleToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (topRadiiToleranceControl && topRadiiToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(topRadiiToleranceControl.value, topRadiiNominalControl.value, "topRadiiTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(topRadiiToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (bottomRadiiToleranceControl && bottomRadiiToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(bottomRadiiToleranceControl.value, bottomRadiiNominalControl.value, "bottomRadiiTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(bottomRadiiToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (gapToleranceControl.value != 0) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(gapToleranceControl.value, gapNominalControl.value, "gapTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(gapToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            if (glandCenterlineToleranceControl && glandCenterlineToleranceControl.value) {
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandCenterlineToleranceControl.value, glandCenterlineNominalControl.value, "glandCenterlineTolerance", "", msg);
                _this.helperService.setValidationErrorToFormControl(glandCenterlineToleranceControl, error, "ToleranceValueShouldBeLessThanRepectiveToNominal");
            }
            return error;
        };
    };
    // orin id standard warning and prevent to submit the form
    ORingDovetailGlandVacuumOnlyValidationService.prototype.oRingIDAS568AStandardsWarning = function () {
        var _this = this;
        return function (control) {
            var warning = null;
            var oringCrossSectionNominalControl = control.get('oringCrossSectionNominal');
            var oringIdNominalControl = control.get('oringIdNominal');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) {
                if ((parseFloat(oringCrossSectionNominalControl.value) >= 0.056 && parseFloat(oringCrossSectionNominalControl.value) <= 0.086 && (parseFloat(oringIdNominalControl.value) > 5.239 || parseFloat(oringIdNominalControl.value) < 0.101)) ||
                    (parseFloat(oringCrossSectionNominalControl.value) >= 0.087 && parseFloat(oringCrossSectionNominalControl.value) <= 0.121 && (parseFloat(oringIdNominalControl.value) > 9.737 || parseFloat(oringIdNominalControl.value) < 0.049)) ||
                    (parseFloat(oringCrossSectionNominalControl.value) >= 0.122 && parseFloat(oringCrossSectionNominalControl.value) <= 0.174 && (parseFloat(oringIdNominalControl.value) > 17.955 || parseFloat(oringIdNominalControl.value) < 0.171)) ||
                    (parseFloat(oringCrossSectionNominalControl.value) >= 0.175 && parseFloat(oringCrossSectionNominalControl.value) <= 0.242 && (parseFloat(oringIdNominalControl.value) > 25.940 || parseFloat(oringIdNominalControl.value) < 0.412)) ||
                    (parseFloat(oringCrossSectionNominalControl.value) >= 0.243 && parseFloat(oringCrossSectionNominalControl.value) <= 0.331 && (parseFloat(oringIdNominalControl.value) > 25.940 || parseFloat(oringIdNominalControl.value) < 4.475)))
                    warning = new _models_error_model__WEBPACK_IMPORTED_MODULE_4__["ErrorModel"]({ field: "oringIdNominal", title: "O-ring Inside Diameter", detail: "O-ring Diameter is currently not as per AS568A standards, please contact Greene Tweed for this custom application.", type: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning });
            }
            if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                if ((parseFloat(oringCrossSectionNominalControl.value) >= 1.42 && parseFloat(oringCrossSectionNominalControl.value) <= 2.18 && (parseFloat(oringIdNominalControl.value) > 133.07 || parseFloat(oringIdNominalControl.value) < 2.57)) ||
                    (parseFloat(oringCrossSectionNominalControl.value) >= 2.21 && parseFloat(oringCrossSectionNominalControl.value) <= 3.07 && (parseFloat(oringIdNominalControl.value) > 247.32 || parseFloat(oringIdNominalControl.value) < 1.24)) ||
                    (parseFloat(oringCrossSectionNominalControl.value) >= 3.1 && parseFloat(oringCrossSectionNominalControl.value) <= 4.42 && (parseFloat(oringIdNominalControl.value) > 456.06 || parseFloat(oringIdNominalControl.value) < 4.34)) ||
                    (parseFloat(oringCrossSectionNominalControl.value) >= 4.45 && parseFloat(oringCrossSectionNominalControl.value) <= 6.15 && (parseFloat(oringIdNominalControl.value) > 658.88 || parseFloat(oringIdNominalControl.value) < 10.46)) ||
                    (parseFloat(oringCrossSectionNominalControl.value) >= 6.17 && parseFloat(oringCrossSectionNominalControl.value) <= 8.41 && (parseFloat(oringIdNominalControl.value) > 658.88 || parseFloat(oringIdNominalControl.value) < 113.67)))
                    warning = new _models_error_model__WEBPACK_IMPORTED_MODULE_4__["ErrorModel"]({ field: "oringIdNominal", title: "O-ring Inside Diameter", detail: "O-ring Diameter is currently not as per AS568A standards, please contact Greene Tweed for this custom application.", type: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning });
            }
            _this.helperService.setValidationErrorToFormControl(oringIdNominalControl, warning, "oRingIDAS568AStandards");
            return warning;
        };
    };
    /********************************************************************/
    /************** O-Ring - Internal Vacuum only Warnings **************/
    /**************** that Doesn't prevent the form submission*****************/
    /********************************************************************/
    // glandAngleNominal warning
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandAngleNominalWarning = function (form) {
        var error = null;
        var glandAngleNominalControl = form.get('glandAngleNominal');
        // glandAngleNominal
        if (glandAngleNominalControl && glandAngleNominalControl.value) {
            var glandAngleNominalError1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandAngleNominalControl.value, "45", "glandAngleNominal", glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            var glandAngleNominalError2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(glandAngleNominalControl.value, "54", "glandAngleNominal", glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            var glandAngleNominalError3 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandAngleNominalControl.value, "67", "glandAngleNominal", glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            var glandAngleNominalError4 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(glandAngleNominalControl.value, "75", "glandAngleNominal", glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            if ((glandAngleNominalError1 && glandAngleNominalError2) || (glandAngleNominalError3 && glandAngleNominalError4)) {
                error = glandAngleNominalError1 || glandAngleNominalError2 || glandAngleNominalError3 || glandAngleNominalError4;
            }
        }
        return error;
    };
    // glandAngleMin
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandAngleMinWarning = function (form, option) {
        var warning = null;
        var glandAngleMinControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate min values
            var minValues = this.generateMinValues(form);
            glandAngleMinControlValue = minValues.glandAngleMin;
        }
        else {
            glandAngleMinControlValue = form.get('glandAngleMin').value ? (+form.get('glandAngleMin').value) : null;
        }
        if (glandAngleMinControlValue) {
            var glandAngleMinWarning1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandAngleMinControlValue.toString(), "45", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            var glandAngleMinWarning2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(glandAngleMinControlValue.toString(), "54", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            var glandAngleMinWarning3 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandAngleMinControlValue.toString(), "67", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            var glandAngleMinWarning4 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(glandAngleMinControlValue.toString(), "75", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            if ((glandAngleMinWarning1 && glandAngleMinWarning2) || (glandAngleMinWarning3 && glandAngleMinWarning4)) {
                warning = glandAngleMinWarning1 || glandAngleMinWarning2 || glandAngleMinWarning3 || glandAngleMinWarning4;
            }
        }
        return warning;
    };
    // glandAngleMax
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandAngleMaxWarning = function (form, option) {
        var warning = null;
        var glandAngleMaxControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate min values
            var maxValues = this.generateMaxValues(form);
            glandAngleMaxControlValue = maxValues.glandAngleMax;
        }
        else {
            glandAngleMaxControlValue = form.get('glandAngleMax').value ? (+form.get('glandAngleMax').value) : null;
        }
        if (glandAngleMaxControlValue) {
            var glandAngleMaxWarning1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(glandAngleMaxControlValue.toString(), "45", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            var glandAngleMaxWarning2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(glandAngleMaxControlValue.toString(), "54", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            var glandAngleMaxWarning3 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandAngleMaxControlValue.toString(), "67", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            var glandAngleMaxWarning4 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanEqualValidation"])(glandAngleMaxControlValue.toString(), "75", (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), glandAngleRecommendedGlandAngleWarningTitle, glandAngleRecommendedGlandAngleWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
            if ((glandAngleMaxWarning1 && glandAngleMaxWarning2) || (glandAngleMaxWarning3 && glandAngleMaxWarning4)) {
                warning = glandAngleMaxWarning1 || glandAngleMaxWarning2 || glandAngleMaxWarning3 || glandAngleMaxWarning4;
            }
        }
        return warning;
    };
    // topRadiiNominal warning
    ORingDovetailGlandVacuumOnlyValidationService.prototype.topRadiiNominalWarning = function (form) {
        var warning = null;
        // topRadiiNominal
        var recommendedRadiiValues = this.generateRadiiRecomendationNominal(form);
        var topRadiiNominalWarning1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.h.toString(), "0", "topRadiiNominal", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var topRadiiNominalWarning2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.topRadiiPercent.toString(), "13", "topRadiiNominal", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        if (recommendedRadiiValues.h && recommendedRadiiValues.topRadiiPercent && topRadiiNominalWarning1 && topRadiiNominalWarning2) {
            warning = topRadiiNominalWarning1 || topRadiiNominalWarning2;
        }
        return warning;
    };
    // topRadiiMin
    ORingDovetailGlandVacuumOnlyValidationService.prototype.topRadiiMinWarning = function (form, option) {
        var warning = null;
        // topRadiiMin
        var recommendedRadiiValues = this.generateRadiiRecomendationMin(form, option);
        var topRadiiMinWarning1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.hMin.toString(), "0", "topRadiiMin", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var topRadiiMinWarning2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.topRadiiMinPercent.toString(), "13", "topRadiiMin", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        if (recommendedRadiiValues.hMin && recommendedRadiiValues.topRadiiMinPercent && topRadiiMinWarning1 && topRadiiMinWarning2) {
            warning = topRadiiMinWarning1 || topRadiiMinWarning2;
        }
        return warning;
    };
    // topRadiiMax
    ORingDovetailGlandVacuumOnlyValidationService.prototype.topRadiiMaxWarning = function (form, option) {
        var warning = null;
        // topRadiiMax
        var recommendedRadiiValues = this.generateRadiiRecomendationMax(form, option);
        var topRadiiMaxWarning1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.hMax.toString(), "0", "topRadiiMax", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var topRadiiMaxWarning2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.topRadiiMaxPercent.toString(), "13", "topRadiiMax", topRadiiReduceLifeWarningTitle, topRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        if (recommendedRadiiValues.hMax && recommendedRadiiValues.topRadiiMaxPercent && topRadiiMaxWarning1 && topRadiiMaxWarning2) {
            warning = topRadiiMaxWarning1 || topRadiiMaxWarning2;
        }
        return warning;
    };
    // bottomRadiiNominal warning
    ORingDovetailGlandVacuumOnlyValidationService.prototype.bottomRadiiNominalWarning = function (form) {
        var warning = null;
        // bottomRadiiNominal
        var bottomRadiiNominalControlValue = form.get('bottomRadiiNominal').value;
        var glandDepthNominalControlValue = form.get('glandDepthNominal').value;
        var bottomRadiiRanges = this.helperService.getBottomRadiiRange(glandDepthNominalControlValue);
        var recommendedRadiiValues = this.generateRadiiRecomendationNominal(form);
        var bottomRadiiNominalWarning1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.h.toString(), "0", "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var bottomRadiiNominalWarning2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.topRadiiPercent.toString(), "33", "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var bottomRadiiNominalRangeWarning1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMinRange1.toString(), "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var bottomRadiiNominalRangeWarning2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMaxRange1.toString(), "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var bottomRadiiNominalRangeWarning3 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMinRange2.toString(), "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var bottomRadiiNominalRangeWarning4 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMaxRange2.toString(), "bottomRadiiNominal", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        if ((recommendedRadiiValues.h && recommendedRadiiValues.bottomRadiiPercent && bottomRadiiNominalWarning1 && bottomRadiiNominalWarning2)
            || (bottomRadiiNominalRangeWarning1 && bottomRadiiNominalRangeWarning2)
            || (bottomRadiiNominalRangeWarning3 && bottomRadiiNominalRangeWarning4)) {
            warning = bottomRadiiNominalWarning1 || bottomRadiiNominalWarning2 || bottomRadiiNominalRangeWarning1 || bottomRadiiNominalRangeWarning2 || bottomRadiiNominalRangeWarning3 || bottomRadiiNominalRangeWarning4;
        }
        return warning;
    };
    // bottomRadiiMin
    ORingDovetailGlandVacuumOnlyValidationService.prototype.bottomRadiiMinWarning = function (form) {
        var warning = null;
        // bottomRadiiMin
        var recommendedRadiiValues = this.generateRadiiRecomendationNominal(form);
        var bottomRadiiMinWarning1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.h.toString(), "0", "bottomRadiiMin", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var bottomRadiiMinWarning2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.bottomRadiiPercent.toString(), "33", "bottomRadiiMin", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        if (recommendedRadiiValues.h && recommendedRadiiValues.bottomRadiiPercent && bottomRadiiMinWarning1 && bottomRadiiMinWarning2) {
            warning = bottomRadiiMinWarning1 || bottomRadiiMinWarning2;
        }
        return warning;
    };
    // bottomRadiiMax
    ORingDovetailGlandVacuumOnlyValidationService.prototype.bottomRadiiMaxWarning = function (form) {
        // bottomRadiiNominal
        var bottomRadiiNominalControlValue = form.get('bottomRadiiNominal').value;
        var warning = null;
        // bottomRadiiMax
        var recommendedRadiiValues = this.generateRadiiRecomendationNominal(form);
        var glandDepthNominalControlValue = form.get('glandDepthNominal').value;
        var bottomRadiiRanges = this.helperService.getBottomRadiiRange(glandDepthNominalControlValue);
        var bottomRadiiMaxWarning1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.h.toString(), "0", "bottomRadiiMax", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var bottomRadiiMaxWarning2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(recommendedRadiiValues.bottomRadiiPercent.toString(), "33", "bottomRadiiMax", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var bottomRadiiMaxWarning3 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanEqualValidation"])(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMinRange1.toString(), "bottomRadiiMax", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        var bottomRadiiMaxWarning4 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(bottomRadiiNominalControlValue, bottomRadiiRanges.bottomRadiiWarningMaxRange1.toString(), "bottomRadiiMax", bottomRadiiReduceLifeWarningTitle, bottomRadiiReduceLifeWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        if ((recommendedRadiiValues.h
            && recommendedRadiiValues.bottomRadiiPercent
            && bottomRadiiMaxWarning1
            && bottomRadiiMaxWarning2)
            || (bottomRadiiMaxWarning3 && bottomRadiiMaxWarning4)) {
            warning = bottomRadiiMaxWarning1 || bottomRadiiMaxWarning2 || bottomRadiiMaxWarning3 || bottomRadiiMaxWarning4;
        }
        return warning;
    };
    // common warning also exist in other calculators
    // gland width nominal warning
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandWidthNominalWarning = function (form) {
        var error = null;
        var glandWidthNominalControl = form.get('glandWidthNominal');
        var oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
        if (glandWidthNominalControl && glandWidthNominalControl.value && oringCrossSectionNominalControl && oringCrossSectionNominalControl.value) {
            var oringCrossSectionNominalControlValue = (1.2 * (+oringCrossSectionNominalControl.value)).toString();
            error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandWidthNominalControl.value, oringCrossSectionNominalControlValue, "glandWidthNominal", glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        }
        return error;
    };
    // common warning also exist in other calculators
    // gland width min warning
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandWidthMinWarning = function (form, option) {
        var warning = null;
        var glandWidthMinControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate min values
            var minValues = this.generateMinValues(form);
            glandWidthMinControlValue = minValues.glandWidthMin;
        }
        else {
            glandWidthMinControlValue = form.get('glandWidthMin').value ? (+form.get('glandWidthMin').value) : null;
        }
        if (glandWidthMinControlValue) {
            var oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
            var oringCrossSectionNominalControlValue = (1.2 * +(oringCrossSectionNominalControl.value)).toString();
            warning = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandWidthMinControlValue.toString(), oringCrossSectionNominalControlValue, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandWidthTolerance" : "glandWidthMin"), glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        }
        return warning;
    };
    // gland width max warning
    ORingDovetailGlandVacuumOnlyValidationService.prototype.glandWidthMaxWarning = function (form, option) {
        var warning = null;
        var glandWidthMaxControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate min values
            var maxValues = this.generateMaxValues(form);
            glandWidthMaxControlValue = maxValues.glandWidthMax;
        }
        else {
            glandWidthMaxControlValue = form.get('glandWidthMax').value ? (+form.get('glandWidthMax').value) : null;
        }
        if (glandWidthMaxControlValue) {
            var oringCrossSectionNominalControl = form.get('oringCrossSectionNominal');
            var oringCrossSectionNominalControlValue = (1.2 * +(oringCrossSectionNominalControl.value)).toString();
            warning = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandWidthMaxControlValue.toString(), oringCrossSectionNominalControlValue, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandWidthTolerance" : "glandWidthMax"), glandWidthNoReliableWarningTitle, glandWidthNoReliableWarningMessage, _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].Warning);
        }
        return warning;
    };
    ORingDovetailGlandVacuumOnlyValidationService.prototype.minValueValidation = function (control, option) {
        var errors = [];
        var msg = "Min values should be less or equal to nominal value.";
        var glandWidthNominalControl = control.get('glandWidthNominal');
        var glandDepthNominalControl = control.get('glandDepthNominal');
        var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
        var topRadiiNominalControl = control.get('topRadiiNominal');
        var gapNominalControl = control.get('gapNominal');
        var glandCenterlineNominalControl = control.get('glandCenterlineNominal');
        var glandAngleNominalControl = control.get('glandAngleNominal');
        var glandWidthMinControlValue;
        var glandDepthMinControlValue;
        var bottomRadiiMinControlValue;
        var topRadiiMinControlValue;
        var gapMinControlValue;
        var glandCenterlineMinControlValue;
        var glandAngleMinControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate min values
            var minValues = this.generateMinValues(control);
            glandWidthMinControlValue = minValues.glandWidthMin;
            glandDepthMinControlValue = minValues.glandDepthMin;
            bottomRadiiMinControlValue = minValues.bottomRadiiMin;
            topRadiiMinControlValue = minValues.topRadiiMin;
            gapMinControlValue = minValues.gapMin;
            glandCenterlineMinControlValue = minValues.glandCenterlineMin;
            glandAngleMinControlValue = minValues.glandAngleMin;
        }
        else {
            glandWidthMinControlValue = control.get('glandWidthMin').value ? (+control.get('glandWidthMin').value) : null;
            glandDepthMinControlValue = control.get('glandDepthMin').value ? (+control.get('glandDepthMin').value) : null;
            bottomRadiiMinControlValue = control.get('bottomRadiiMin').value ? (+control.get('bottomRadiiMin').value) : null;
            topRadiiMinControlValue = control.get('topRadiiMin').value ? (+control.get('topRadiiMin').value) : null;
            gapMinControlValue = control.get('gapMin').value ? (+control.get('gapMin').value) : null;
            glandCenterlineMinControlValue = control.get('glandCenterlineMin').value ? (+control.get('glandCenterlineMin').value) : null;
            glandAngleMinControlValue = control.get('glandAngleMin').value ? (+control.get('glandAngleMin').value) : null;
        }
        // min value validation
        if (glandWidthMinControlValue) {
            var error1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandWidthMinControlValue.toString(), glandWidthNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandWidthTolerance" : "glandWidthMin"), "", msg);
            if (error1) {
                errors.push(error1);
            }
        }
        if (glandDepthMinControlValue) {
            var error2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandDepthMinControlValue.toString(), glandDepthNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandDepthTolerance" : "glandDepthMin"), "", msg);
            if (error2) {
                errors.push(error2);
            }
        }
        if (bottomRadiiMinControlValue) {
            var error3 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(bottomRadiiMinControlValue.toString(), bottomRadiiNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "bottomRadiiTolerance" : "bottomRadiiMin"), "", msg);
            if (error3) {
                errors.push(error3);
            }
        }
        if (gapMinControlValue) {
            var error4 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(gapMinControlValue.toString(), gapNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "gapTolerance" : "gapMin"), "", msg);
            if (error4) {
                errors.push(error4);
            }
        }
        if (topRadiiMinControlValue) {
            var error5 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(topRadiiMinControlValue.toString(), topRadiiNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "topRadiiTolerance" : "topRadiiMin"), "", msg);
            if (error5) {
                errors.push(error5);
            }
        }
        if (glandCenterlineMinControlValue) {
            var error6 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandCenterlineMinControlValue.toString(), glandCenterlineNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandCenterlineTolerance" : "glandCenterlineMin"), "", msg);
            if (error6) {
                errors.push(error6);
            }
        }
        if (glandAngleMinControlValue) {
            var error7 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["largerThanValidation"])(glandAngleMinControlValue.toString(), glandAngleNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMin"), "", msg);
            if (error7) {
                errors.push(error7);
            }
        }
        return errors;
    };
    ORingDovetailGlandVacuumOnlyValidationService.prototype.maxValueValidation = function (control, option) {
        var errors = [];
        var msg = "Max value should be greater or equal to nominal value.";
        var glandWidthNominalControl = control.get('glandWidthNominal');
        var glandDepthNominalControl = control.get('glandDepthNominal');
        var bottomRadiiNominalControl = control.get('bottomRadiiNominal');
        var topRadiiNominalControl = control.get('topRadiiNominal');
        var gapNominalControl = control.get('gapNominal');
        var glandCenterlineNominalControl = control.get('glandCenterlineNominal');
        var glandAngleNominalControl = control.get('glandAngleNominal');
        var glandWidthMaxControlValue;
        var glandDepthMaxControlValue;
        var bottomRadiiMaxControlValue;
        var topRadiiMaxControlValue;
        var gapMaxControlValue;
        var glandCenterlineMaxControlValue;
        var glandAngleMaxControlValue;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate max values
            var maxValues = this.generateMaxValues(control);
            glandWidthMaxControlValue = maxValues.glandWidthMax;
            glandDepthMaxControlValue = maxValues.glandDepthMax;
            bottomRadiiMaxControlValue = maxValues.bottomRadiiMax;
            topRadiiMaxControlValue = maxValues.topRadiiMax;
            gapMaxControlValue = maxValues.gapMax;
            glandCenterlineMaxControlValue = maxValues.glandCenterlineMax;
            glandAngleMaxControlValue = maxValues.glandAngleMax;
        }
        else {
            glandWidthMaxControlValue = control.get('glandWidthMax').value ? (+control.get('glandWidthMax').value) : null;
            glandDepthMaxControlValue = control.get('glandDepthMax').value ? (+control.get('glandDepthMax').value) : null;
            bottomRadiiMaxControlValue = control.get('bottomRadiiMax').value ? (+control.get('bottomRadiiMax').value) : null;
            topRadiiMaxControlValue = control.get('topRadiiMax').value ? (+control.get('topRadiiMax').value) : null;
            gapMaxControlValue = control.get('gapMax').value ? (+control.get('gapMax').value) : null;
            glandCenterlineMaxControlValue = control.get('glandCenterlineMax').value ? (+control.get('glandCenterlineMax').value) : null;
            glandAngleMaxControlValue = control.get('glandAngleMax').value ? (+control.get('glandAngleMax').value) : null;
        }
        // max value validation
        if (glandWidthMaxControlValue) {
            var error1 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(glandWidthMaxControlValue.toString(), glandWidthNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandWidthTolerance" : "glandWidthMax"), "", msg);
            if (error1) {
                errors.push(error1);
            }
        }
        if (glandDepthMaxControlValue) {
            var error2 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(glandDepthMaxControlValue.toString(), glandDepthNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandDepthTolerance" : "glandDepthMax"), "", msg);
            if (error2) {
                errors.push(error2);
            }
        }
        if (bottomRadiiMaxControlValue) {
            var error3 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(bottomRadiiMaxControlValue.toString(), bottomRadiiNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "bottomRadiiTolerance" : "bottomRadiiMax"), "", msg);
            if (error3) {
                errors.push(error3);
            }
        }
        if (gapMaxControlValue) {
            var error4 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(gapMaxControlValue.toString(), gapNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "gapTolerance" : "gapMax"), "", msg);
            if (error4) {
                errors.push(error4);
            }
        }
        if (topRadiiMaxControlValue) {
            var error5 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(topRadiiMaxControlValue.toString(), topRadiiNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "topRadiiTolerance" : "topRadiiMax"), "", msg);
            if (error5) {
                errors.push(error5);
            }
        }
        if (glandCenterlineMaxControlValue) {
            var error6 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(glandCenterlineMaxControlValue.toString(), glandCenterlineNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandCenterlineTolerance" : "glandCenterlineMax"), "", msg);
            if (error6) {
                errors.push(error6);
            }
        }
        if (glandAngleMaxControlValue) {
            var error7 = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_2__["lessThanValidation"])(glandAngleMaxControlValue.toString(), glandAngleNominalControl.value, (((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) ? "glandAngleTolerance" : "glandAngleMax"), "", msg);
            if (error7) {
                errors.push(error7);
            }
        }
        return errors;
    };
    //  Helper methods
    // generate min values when option is Tolerance
    ORingDovetailGlandVacuumOnlyValidationService.prototype.generateMinValues = function (form) {
        var minValue = new _models_oring_dovetail_min_model__WEBPACK_IMPORTED_MODULE_5__["MinValue"]();
        var glandWidthNominalControl = form.get('glandWidthNominal');
        var glandWidthToleranceControl = form.get('glandWidthTolerance');
        var glandDepthNominalControl = form.get('glandDepthNominal');
        var glandDepthToleranceControl = form.get('glandDepthTolerance');
        var bottomRadiiNominalControl = form.get('bottomRadiiNominal');
        var bottomRadiiToleranceControl = form.get('bottomRadiiTolerance');
        var gapNominalControl = form.get('gapNominal');
        var gapToleranceControl = form.get('gapTolerance');
        var glandAngleNominalControl = form.get('glandAngleNominal');
        var glandAngleToleranceControl = form.get('glandAngleTolerance');
        var topRadiiNominalControl = form.get('topRadiiNominal');
        var topRadiiToleranceControl = form.get('topRadiiTolerance');
        var glandCenterlineNominalControl = form.get('glandCenterlineNominal');
        var glandCenterlineToleranceControl = form.get('glandCenterlineTolerance');
        minValue.glandWidthMin = (parseFloat(glandWidthNominalControl.value) - parseFloat(glandWidthToleranceControl.value));
        minValue.glandDepthMin = (parseFloat(glandDepthNominalControl.value) - parseFloat(glandDepthToleranceControl.value));
        minValue.glandAngleMin = (parseFloat(glandAngleNominalControl.value) - parseFloat(glandAngleToleranceControl.value));
        minValue.bottomRadiiMin = (parseFloat(bottomRadiiNominalControl.value) - parseFloat(bottomRadiiToleranceControl.value));
        minValue.topRadiiMin = (parseFloat(topRadiiNominalControl.value) - parseFloat(topRadiiToleranceControl.value));
        minValue.gapMin = (parseFloat(gapNominalControl.value) - parseFloat(gapToleranceControl.value));
        minValue.glandCenterlineMin = (parseFloat(glandCenterlineNominalControl.value) - parseFloat(glandCenterlineToleranceControl.value));
        return minValue;
    };
    // generate max values when option is Tolerance
    ORingDovetailGlandVacuumOnlyValidationService.prototype.generateMaxValues = function (form) {
        var maxValue = new _models_oring_dovetail_max_model__WEBPACK_IMPORTED_MODULE_6__["MaxValue"]();
        var glandWidthNominalControl = form.get('glandWidthNominal');
        var glandWidthToleranceControl = form.get('glandWidthTolerance');
        var glandDepthNominalControl = form.get('glandDepthNominal');
        var glandDepthToleranceControl = form.get('glandDepthTolerance');
        var bottomRadiiToleranceControl = form.get('bottomRadiiTolerance');
        var gapNominalControl = form.get('gapNominal');
        var gapToleranceControl = form.get('gapTolerance');
        var bottomRadiiNominalControl = form.get('bottomRadiiNominal');
        var glandAngleNominalControl = form.get('glandAngleNominal');
        var glandAngleToleranceControl = form.get('glandAngleTolerance');
        var topRadiiNominalControl = form.get('topRadiiNominal');
        var topRadiiToleranceControl = form.get('topRadiiTolerance');
        var glandCenterlineNominalControl = form.get('glandCenterlineNominal');
        var glandCenterlineToleranceControl = form.get('glandCenterlineTolerance');
        maxValue.glandWidthMax = (parseFloat(glandWidthNominalControl.value) + parseFloat(glandWidthToleranceControl.value));
        maxValue.glandDepthMax = (parseFloat(glandDepthNominalControl.value) + parseFloat(glandDepthToleranceControl.value));
        maxValue.glandAngleMax = (parseFloat(glandAngleNominalControl.value) + parseFloat(glandAngleToleranceControl.value));
        maxValue.bottomRadiiMax = (parseFloat(bottomRadiiNominalControl.value) + parseFloat(bottomRadiiToleranceControl.value));
        maxValue.topRadiiMax = (parseFloat(topRadiiNominalControl.value) + parseFloat(topRadiiToleranceControl.value));
        maxValue.gapMax = (parseFloat(gapNominalControl.value) + parseFloat(gapToleranceControl.value));
        maxValue.glandCenterlineMax = (parseFloat(glandCenterlineNominalControl.value) + parseFloat(glandCenterlineToleranceControl.value));
        return maxValue;
    };
    // radii recommended values for nominal
    ORingDovetailGlandVacuumOnlyValidationService.prototype.generateRadiiRecomendationNominal = function (form) {
        var radiiRecomendationNominalValues = new _models_radii_recomendation_nominal_model__WEBPACK_IMPORTED_MODULE_7__["RadiiRecomendationNominal"]();
        var glandDepthNominal = parseFloat(form.get('glandDepthNominal').value);
        var glandWidthNominal = parseFloat(form.get('glandWidthNominal').value);
        var topRadiiNominal = parseFloat(form.get('topRadiiNominal').value);
        var bottomRadiiNominal = parseFloat(form.get('bottomRadiiNominal').value);
        var glandAngleNominal = parseFloat(form.get('glandAngleNominal').value);
        if (glandDepthNominal >= 0 && glandWidthNominal >= 0 && topRadiiNominal >= 0 && bottomRadiiNominal >= 0 && glandAngleNominal >= 0) {
            radiiRecomendationNominalValues.h = glandDepthNominal - (topRadiiNominal + bottomRadiiNominal) * (1 + Math.sin((90 - glandAngleNominal) * Math.PI / 180));
            radiiRecomendationNominalValues.w = (glandWidthNominal / 2) + glandDepthNominal / Math.tan(glandAngleNominal * Math.PI / 180) - bottomRadiiNominal / Math.tan((glandAngleNominal / 2) * Math.PI / 180);
            radiiRecomendationNominalValues.bottomRadiiPercent = Math.round((bottomRadiiNominal / glandDepthNominal) * 100);
            radiiRecomendationNominalValues.topRadiiPercent = Math.round((topRadiiNominal / glandDepthNominal) * 100);
        }
        return radiiRecomendationNominalValues;
    };
    // radii recommended values for min
    ORingDovetailGlandVacuumOnlyValidationService.prototype.generateRadiiRecomendationMin = function (form, option) {
        var radiiRecomendationMinValues = new _models_radii_recomendation_min_model__WEBPACK_IMPORTED_MODULE_8__["RadiiRecomendationMin"]();
        var glandDepthMin;
        var glandWidthMin;
        var topRadiiMin;
        var bottomRadiiMin;
        var glandAngleMin;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate min values
            var minValues = this.generateMinValues(form);
            glandDepthMin = minValues.glandDepthMin;
            glandWidthMin = minValues.glandWidthMin;
            topRadiiMin = minValues.topRadiiMin;
            bottomRadiiMin = minValues.bottomRadiiMin;
            glandAngleMin = minValues.glandAngleMin;
        }
        else {
            glandDepthMin = parseFloat(form.get('glandDepthMin').value);
            glandWidthMin = parseFloat(form.get('glandWidthMin').value);
            topRadiiMin = parseFloat(form.get('topRadiiMin').value);
            bottomRadiiMin = parseFloat(form.get('bottomRadiiMin').value);
            glandAngleMin = parseFloat(form.get('glandAngleMin').value);
        }
        if (glandDepthMin >= 0 && glandWidthMin >= 0 && topRadiiMin >= 0 && bottomRadiiMin >= 0 && glandAngleMin >= 0) {
            radiiRecomendationMinValues.hMin = glandDepthMin - (topRadiiMin + bottomRadiiMin) * (1 + Math.sin((90 - glandAngleMin) * Math.PI / 180));
            radiiRecomendationMinValues.wMin = (glandWidthMin / 2) + glandDepthMin / Math.tan(glandAngleMin * Math.PI / 180) - bottomRadiiMin / Math.tan((glandAngleMin / 2) * Math.PI / 180);
            radiiRecomendationMinValues.bottomRadiiMinPercent = Math.round((bottomRadiiMin / glandDepthMin) * 100);
            radiiRecomendationMinValues.topRadiiMinPercent = Math.round((topRadiiMin / glandDepthMin) * 100);
        }
        return radiiRecomendationMinValues;
    };
    // radii recommended values for max
    ORingDovetailGlandVacuumOnlyValidationService.prototype.generateRadiiRecomendationMax = function (form, option) {
        var radiiRecomendationMaxValues = new _models_radii_recomendation_max_model__WEBPACK_IMPORTED_MODULE_9__["RadiiRecomendationMax"]();
        var glandDepthMax;
        var glandWidthMax;
        var topRadiiMax;
        var bottomRadiiMax;
        var glandAngleMax;
        if ((+option) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
            // generate min values
            var maxValues = this.generateMaxValues(form);
            glandDepthMax = maxValues.glandDepthMax;
            glandWidthMax = maxValues.glandWidthMax;
            topRadiiMax = maxValues.topRadiiMax;
            bottomRadiiMax = maxValues.bottomRadiiMax;
            glandAngleMax = maxValues.glandAngleMax;
        }
        else {
            glandDepthMax = parseFloat(form.get('glandDepthMax').value);
            glandWidthMax = parseFloat(form.get('glandWidthMax').value);
            topRadiiMax = parseFloat(form.get('topRadiiMax').value);
            bottomRadiiMax = parseFloat(form.get('bottomRadiiMax').value);
            glandAngleMax = parseFloat(form.get('glandAngleMax').value);
        }
        if (glandDepthMax >= 0 && glandWidthMax >= 0 && topRadiiMax >= 0 && bottomRadiiMax >= 0 && glandAngleMax >= 0) {
            radiiRecomendationMaxValues.hMax = glandDepthMax - (topRadiiMax + bottomRadiiMax) * (1 + Math.sin((90 - glandAngleMax) * Math.PI / 180));
            radiiRecomendationMaxValues.wMax = (glandWidthMax / 2) + glandDepthMax / Math.tan(glandAngleMax * Math.PI / 180) - bottomRadiiMax / Math.tan((glandAngleMax / 2) * Math.PI / 180);
            radiiRecomendationMaxValues.bottomRadiiMaxPercent = Math.round((bottomRadiiMax / glandDepthMax) * 100);
            radiiRecomendationMaxValues.topRadiiMaxPercent = Math.round((topRadiiMax / glandDepthMax) * 100);
        }
        return radiiRecomendationMaxValues;
    };
    ORingDovetailGlandVacuumOnlyValidationService.??fac = function ORingDovetailGlandVacuumOnlyValidationService_Factory(t) { return new (t || ORingDovetailGlandVacuumOnlyValidationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_11__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_12__["TemperatureButtonService"])); };
    ORingDovetailGlandVacuumOnlyValidationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ORingDovetailGlandVacuumOnlyValidationService, factory: ORingDovetailGlandVacuumOnlyValidationService.??fac, providedIn: 'root' });
    return ORingDovetailGlandVacuumOnlyValidationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ORingDovetailGlandVacuumOnlyValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_11__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_12__["TemperatureButtonService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: ORingDovetailGlandVacuumOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingDovetailGlandVacuumOnlyComponent", function() { return ORingDovetailGlandVacuumOnlyComponent; });
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
/* harmony import */ var _o_ring_dovetail_gland_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./o-ring-dovetail-gland-vacuum-only-validation.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only-validation.service.ts");
/* harmony import */ var _o_ring_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./o-ring-dovetail-gland-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/calculator-toolbar/calculator-toolbar.service */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/user-rules/user-rules.component */ "./client/app/shared/components/user-rules/user-rules.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/calculator-toolbar/calculator-toolbar.component */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component */ "./client/app/dynamic-form/dynamic-form-two-column-layout/dynamic-form-two-column-layout.component.ts");

// core imports

// third party imports



















function ORingDovetailGlandVacuumOnlyComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function ORingDovetailGlandVacuumOnlyComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r1.onSubmit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "calculator-toolbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("optionChange", function ORingDovetailGlandVacuumOnlyComponent_form_2_Template_calculator_toolbar_optionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r3.onOptionChange($event); })("reset", function ORingDovetailGlandVacuumOnlyComponent_form_2_Template_calculator_toolbar_reset_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r4.onReset(); })("print", function ORingDovetailGlandVacuumOnlyComponent_form_2_Template_calculator_toolbar_print_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r5.onPrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "dynamic-form-two-column-layout", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classMapInterpolate1"]("form-horizontal ", ctx_r0.calculatorConfig.form.form_title_css_class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx_r0.dovetailGlandForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("calculatorConfig", ctx_r0.calculatorConfig)("isShowOptions", ctx_r0.calculatorConfig.toolbarOption ? true : false)("form", ctx_r0.dovetailGlandForm)("control", ctx_r0.calculatorConfig.toolbarOption)("isSubmitted", ctx_r0.isSubmitted)("isShowPasteBtn", ctx_r0.isShowPasteBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("form", ctx_r0.dovetailGlandForm)("isSubmitted", ctx_r0.isSubmitted)("calculatorJSON", ctx_r0.calculatorConfig)("clientErrors", ctx_r0.clientErrors)("clientWarnings", ctx_r0.clientWarnings)("serverErrors", ctx_r0.serverErrors)("serverWarnings", ctx_r0.serverWarnings);
} }
var ORingDovetailGlandVacuumOnlyComponent = /** @class */ (function () {
    function ORingDovetailGlandVacuumOnlyComponent(controlBaseService, authService, rectangularORingCalcService, dynamicFormTwoColumnLayoutService, printService, unitButtonService, temperatureButtonService, oRingDovetailGlandVacuumOnlyValidationService, oRingDovetailGlandVacuumOnlyService, helperService, calculatorToolbarService) {
        var _this = this;
        this.controlBaseService = controlBaseService;
        this.authService = authService;
        this.rectangularORingCalcService = rectangularORingCalcService;
        this.dynamicFormTwoColumnLayoutService = dynamicFormTwoColumnLayoutService;
        this.printService = printService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.oRingDovetailGlandVacuumOnlyValidationService = oRingDovetailGlandVacuumOnlyValidationService;
        this.oRingDovetailGlandVacuumOnlyService = oRingDovetailGlandVacuumOnlyService;
        this.helperService = helperService;
        this.calculatorToolbarService = calculatorToolbarService;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlType"];
        this.isSubmitted = false;
        this.payLoad = '';
        this.bottomRadiiMaxLimit = 0.035;
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        this.isShowPasteBtn = false;
        // get o-ring-dovetail-gland-vacuum-only config value from O-Ring JSON 
        var rectangleJSONConfig = this.rectangularORingCalcService.getCurrentORingConfigValue;
        // o-ring calculator config subscription
        if (rectangleJSONConfig) {
            this.initializeOringConfig(rectangleJSONConfig);
        }
        else {
            this.oRingDataSubscription = this.rectangularORingCalcService.oRingConfig$.subscribe(function (x) {
                if (x) {
                    _this.initializeOringConfig(x);
                }
            });
        }
        // unit change update calculator values handler
        this.onUnitChangeUpdateCalculator();
        this.onTemperatureChangeUpdateCalculator();
        // onPaste event subscription
        this.calculatorToolbarService.paste.subscribe(function (d) {
            if (d) {
                _this.onPaste(d);
            }
        });
    }
    Object.defineProperty(ORingDovetailGlandVacuumOnlyComponent.prototype, "CalculatedData", {
        get: function () {
            return this.calculatedData;
        },
        set: function (val) {
            this.calculatedData = val;
        },
        enumerable: true,
        configurable: true
    });
    // initialize o-ring-dovetail-gland-vacuum-only calculator by json config param
    ORingDovetailGlandVacuumOnlyComponent.prototype.initializeOringConfig = function (oRingJsonConfig) {
        // calculator - o-ring-dovetail-gland-vacuum-only
        var oRingDovetailGlandVacuumOnly = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, oRingJsonConfig.calculators[1]);
        this.calculatorConfig = oRingDovetailGlandVacuumOnly;
        // send calculator to dynamic form service
        this.dynamicFormTwoColumnLayoutService.sendCalculator(oRingDovetailGlandVacuumOnly);
        // create form
        this.createForm();
        // show or hide form controls
        this.onOptionChange(+this.calculatorConfig.toolbarOption.value);
        this.setShowPasteBtnFlag();
    };
    // onInit event of component
    ORingDovetailGlandVacuumOnlyComponent.prototype.ngOnInit = function () {
        this.onReset();
        this.CalculatedData = {};
        this.setShowPasteBtnFlag();
    };
    // temperature change update output values handler
    ORingDovetailGlandVacuumOnlyComponent.prototype.onTemperatureChangeUpdateCalculator = function () {
        var _this = this;
        // unit switch button click/change subscription
        this.temperatureChangeSubscription = this.temperatureButtonService.temperature$.subscribe(function (x) {
            if (x) {
                _this.resetFormAndCalculation();
            }
        });
    };
    // form control changes subcription and update the graph data
    ORingDovetailGlandVacuumOnlyComponent.prototype.getControlValue = function (fieldName) {
        if (this.dovetailGlandForm
            && this.dovetailGlandForm.controls[fieldName]
            && this.dovetailGlandForm.controls[fieldName].value) {
            return (+this.dovetailGlandForm.controls[fieldName].value).toFixed(this.unitButtonService.getCurrentUnitValue.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER ? 2 : 3);
        }
    };
    // create form group
    ORingDovetailGlandVacuumOnlyComponent.prototype.createForm = function () {
        var _this = this;
        // get form controls nested array
        var leftFormControls = this.helperService.mapFormControlsOnCreateForm(this.dovetailGlandForm, this.calculatorConfig.form.left_column.form_layout_row);
        var rightFormControls = this.helperService.mapFormControlsOnCreateForm(this.dovetailGlandForm, this.calculatorConfig.form.right_column.form_layout_row);
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
        this.dovetailGlandForm = this.controlBaseService.toFormGroup(filteredControls);
        // get and set validations
        var validations = [];
        // get validation key from json config object
        var jsonConfigValidationsArray = this.calculatorConfig.form.form_validation;
        for (var index = 0; index < jsonConfigValidationsArray.length; index++) {
            var validationFuncKey = jsonConfigValidationsArray[index];
            switch (validationFuncKey) {
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].GLAND_WIDTH_NOMINAL_VALIDATION:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthNominalValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].GLAND_WIDTH_MIN_VALIDATION:
                    if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
                        validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthMinValidation(this.calculatorConfig.toolbarOption.value));
                    }
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].GLAND_WIDTH_MAX_VALIDATION:
                    if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
                        validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthMaxValidation(this.calculatorConfig.toolbarOption.value));
                    }
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiShouldBeLessThanBottomRadiiMinLimit());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiNominalNonPhysicalGland());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION:
                    if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
                        validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiMinNonPhysicalGland(this.calculatorConfig.toolbarOption.value));
                    }
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION:
                    if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
                        validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiMaxNonPhysicalGland(this.calculatorConfig.toolbarOption.value));
                    }
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiNominalShouldBeLessThanBottomRadiiMinLimit());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiNominalNonPhysicalValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION:
                    if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
                        validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiMinNonPhysicalValidation(this.calculatorConfig.toolbarOption.value));
                    }
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION:
                    if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
                        validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiMaxNonPhysicalValidation(this.calculatorConfig.toolbarOption.value));
                    }
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].OPERATING_TEMPERATURE_VALIDATION:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.operatingTemperatureValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.oringCrossSectionNominalValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.oringIDNominalLargerThanMaxOringIDValidation());
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].LESS_THAN_ZERO_VALIDATION:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.formLessThanZeroValidation(this.calculatorConfig.toolbarOption.key));
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].TOLERANCE_VALIDATION:
                    // apply validation only when Tolerance option selected
                    if ((+this.calculatorConfig.toolbarOption.value) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance) {
                        validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.toleranceValidation());
                    }
                    break;
                case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].ORING_ID_AS568A_STANDARD_WARNING:
                    validations.push(this.oRingDovetailGlandVacuumOnlyValidationService.oRingIDAS568AStandardsWarning());
                    break;
            }
        }
        // set custom validations with params
        this.dovetailGlandForm.setValidators(validations);
    };
    // form submit event
    ORingDovetailGlandVacuumOnlyComponent.prototype.onSubmit = function (isSubmitted) {
        var _this = this;
        if (isSubmitted === void 0) { isSubmitted = false; }
        this.CalculatedData = {};
        // reset error, warnings
        this.resetErroAndWarnings();
        // reset calculated output
        this.resetCalculatedLabelValue();
        if (!this.calculatorConfig || !this.calculatorConfig.form) {
            return;
        }
        // this.payLoad = this.dovetailGlandForm.value;
        this.isSubmitted = isSubmitted;
        // client errors that doesnot prevent to submit forms/calculation
        // glandAngle nominal validation
        if (this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].GLAND_ANGLE_NOMINAL_VALIDATION)) {
            var glandAngelNominalError = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleNominalValidation(this.dovetailGlandForm);
            if (glandAngelNominalError) {
                this.addClientErrors(glandAngelNominalError);
            }
        }
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
            // glandAngle min validation
            if (this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].GLAND_ANGLE_MIN_VALIDATION)) {
                var glandAngelMinError = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleMinValidation(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
                if (glandAngelMinError) {
                    this.addClientErrors(glandAngelMinError);
                }
            }
            // glandAngle max validation
            if (this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].GLAND_ANGLE_MAX_VALIDATION)) {
                var glandAngelMaxError = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleMaxValidation(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
                if (glandAngelMaxError) {
                    this.addClientErrors(glandAngelMaxError);
                }
            }
        }
        // if validation key O_RING_CROSS_SECTION_VALIDATION exist 
        if (this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION)) {
            var oringCrossSectionNominalLessThanError = this.oRingDovetailGlandVacuumOnlyValidationService.oringCrossSectionNominalLessThanValidation(this.dovetailGlandForm);
            if (oringCrossSectionNominalLessThanError) {
                this.addClientErrors(oringCrossSectionNominalLessThanError);
            }
        }
        // min value validation
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal && this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION)) {
            // apply validation only when Tolerance and min and max option selected
            var minValueErrors = this.oRingDovetailGlandVacuumOnlyValidationService.minValueValidation(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
            if (minValueErrors.length > 0) {
                for (var index = 0; index < minValueErrors.length; index++) {
                    this.addClientErrors(minValueErrors[index]);
                }
            }
        }
        // max value validation
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal && this.calculatorConfig.form.form_validation.includes(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ORingTool_DovetailGlandVacuumOnly_Validators"].MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION)) {
            // apply validation only when Tolerance and min and max option selected
            var maxValueErrors = this.oRingDovetailGlandVacuumOnlyValidationService.maxValueValidation(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
            if (maxValueErrors.length > 0) {
                for (var index = 0; index < maxValueErrors.length; index++) {
                    this.addClientErrors(maxValueErrors[index]);
                }
            }
        }
        // warnings
        // glandAngle warnings
        var glandAngleNominalWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleNominalWarning(this.dovetailGlandForm);
        if (glandAngleNominalWarning) {
            this.addClientWarnings(glandAngleNominalWarning);
        }
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
            var glandAngleMinWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleMinWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
            if (glandAngleMinWarning) {
                this.addClientWarnings(glandAngleMinWarning);
            }
            var glandAngleMaxWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandAngleMaxWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
            if (glandAngleMaxWarning) {
                this.addClientWarnings(glandAngleMaxWarning);
            }
        }
        // topRadii warnings
        var topRadiiNominalWarning = this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiNominalWarning(this.dovetailGlandForm);
        if (topRadiiNominalWarning) {
            this.addClientWarnings(topRadiiNominalWarning);
        }
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
            var topRadiiMinWarning = this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiMinWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
            if (topRadiiMinWarning) {
                this.addClientWarnings(topRadiiMinWarning);
            }
            var topRadiiMaxWarning = this.oRingDovetailGlandVacuumOnlyValidationService.topRadiiMaxWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
            if (topRadiiMaxWarning) {
                this.addClientWarnings(topRadiiMaxWarning);
            }
        }
        // bottomRadii warnings
        var bottomRadiiNominalWarning = this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiNominalWarning(this.dovetailGlandForm);
        if (bottomRadiiNominalWarning) {
            this.addClientWarnings(bottomRadiiNominalWarning);
        }
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
            var bottomRadiiMinWarning = this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiMinWarning(this.dovetailGlandForm);
            if (bottomRadiiMinWarning) {
                this.addClientWarnings(bottomRadiiMinWarning);
            }
            var bottomRadiiMaxWarning = this.oRingDovetailGlandVacuumOnlyValidationService.bottomRadiiMaxWarning(this.dovetailGlandForm);
            if (bottomRadiiMaxWarning) {
                this.addClientWarnings(bottomRadiiMaxWarning);
            }
        }
        // glandWidth warnings
        var glandWidthNominalWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthNominalWarning(this.dovetailGlandForm);
        if (glandWidthNominalWarning) {
            this.addClientWarnings(glandWidthNominalWarning);
        }
        if ((+this.calculatorConfig.toolbarOption.value) !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].Nominal) {
            var glandWidthMinWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthMinWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
            var glandWidthMaxWarning = this.oRingDovetailGlandVacuumOnlyValidationService.glandWidthMaxWarning(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value);
            if (glandWidthMinWarning) {
                this.addClientWarnings(glandWidthMinWarning);
            }
            if (glandWidthMaxWarning) {
                this.addClientWarnings(glandWidthMaxWarning);
            }
        }
        // stop here if form is invalid/Not_valid
        if (this.dovetailGlandForm.invalid) {
            return;
        }
        // perform calculation
        this.oRingDovetailGlandVacuumOnlyService.createOringDovetail(this.dovetailGlandForm, this.calculatorConfig.toolbarOption.value, this.unitButtonService.getCurrentUnitValue, this.temperatureButtonService.getCurrentTemperatureValue).subscribe(function (resp) {
            if (resp.data) {
                // set CalculatedData
                // this will set the graph data also
                _this.CalculatedData = Object.assign({}, resp.data);
                if (resp.data.error && resp.data.error.length > 0) {
                    // copy the array for change detection
                    _this.serverErrors = resp.data.error.slice();
                }
                if (resp.data.warning && resp.data.warning.length > 0) {
                    // copy the array for change detection
                    _this.serverWarnings = resp.data.warning.slice();
                }
                var responseDataKeys = Object.keys(resp.data);
                // when tolerance or minAndmax option is selected than also bind calculated labels received after calculation
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
                        var operatingTemperatureMin = _this.dovetailGlandForm.controls["operatingTemperatureMin"];
                        var operatingTemperatureNominal = _this.dovetailGlandForm.controls["operatingTemperatureNominal"];
                        var operatingTemperatureMax = _this.dovetailGlandForm.controls["operatingTemperatureMax"];
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
    // add client errors
    ORingDovetailGlandVacuumOnlyComponent.prototype.addClientErrors = function (error) {
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
        // copy the array for change detection
        this.clientErrors = this.clientErrors.slice();
    };
    // add client warnings
    ORingDovetailGlandVacuumOnlyComponent.prototype.addClientWarnings = function (warning) {
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
        // copy the array for change detection
        this.clientWarnings = this.clientWarnings.slice();
    };
    // reset auth token
    ORingDovetailGlandVacuumOnlyComponent.prototype.setAuth = function () {
        this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (r) { return r; });
    };
    // option nominal, tolerance and (min and max) change handler
    ORingDovetailGlandVacuumOnlyComponent.prototype.onOptionChange = function (selectedOption) {
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
    // reset error, warnings of client and server
    ORingDovetailGlandVacuumOnlyComponent.prototype.resetErroAndWarnings = function () {
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
    };
    // reset calculated label or output value in JSOn config
    ORingDovetailGlandVacuumOnlyComponent.prototype.resetCalculatedLabelValue = function () {
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
    // print button event handler
    ORingDovetailGlandVacuumOnlyComponent.prototype.onPrint = function () {
        this.printService.generatePdf("dovetailGland");
    };
    // on reset button handler
    ORingDovetailGlandVacuumOnlyComponent.prototype.onReset = function () {
        if (!this.dovetailGlandForm) {
            return;
        }
        // get form controls key
        var formControlKeys = Object.keys(this.dovetailGlandForm.controls);
        // loop through the reactive form/formgroup controls 
        for (var index = 0; index < formControlKeys.length; index++) {
            // skip toolbar options(Nominal, Tolerance, Min and Max) resetting
            if (this.calculatorConfig.toolbarOption.key === formControlKeys[index]) {
                continue;
            }
            var formControlDefaultValue = this.dynamicFormTwoColumnLayoutService.getDefaultControlValueFromCalculatorJSONConfig(formControlKeys[index]);
            if (formControlDefaultValue) {
                this.dovetailGlandForm.controls[formControlKeys[index]].setValue(formControlDefaultValue);
            }
            else {
                this.dovetailGlandForm.controls[formControlKeys[index]].setValue('');
            }
        }
        this.resetFormAndCalculation();
    };
    ORingDovetailGlandVacuumOnlyComponent.prototype.resetFormAndCalculation = function () {
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
        // const responseDataKeys = Object.keys(this.CalculatedData);
        // reset left form data
        // loop through each form left column row
        for (var rowIndex = 0; rowIndex < this.calculatorConfig.form.left_column.form_layout_row.length; rowIndex++) {
            // loop through columns
            for (var columnIndex = 0; columnIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns.length; columnIndex++) {
                // loop through controls
                for (var controlIndex = 0; controlIndex < this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls.length; controlIndex++) {
                    // get form control of JSON
                    var formControl = this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex];
                    // for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                        // set JSON output label
                        // bind calculated result to output label
                        this.calculatorConfig.form.left_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
                    }
                    // }
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
                    // for (let keyIndex = 0; keyIndex < responseDataKeys.length; keyIndex++) {
                    if (formControl.sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlSubType"].calculated_label) {
                        // set JSON output label
                        // bind calculated result to output label
                        this.calculatorConfig.form.right_column.form_layout_row[rowIndex].form_layout_columns[columnIndex].form_controls[controlIndex].label = '';
                    }
                    // }
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
    // unit change update output values handler
    ORingDovetailGlandVacuumOnlyComponent.prototype.onUnitChangeUpdateCalculator = function () {
        var _this = this;
        // unit switch button click/change subscription
        this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            // reset 
            _this.resetFormAndCalculation();
            if (x) {
                if (x.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
                    // millimeter
                    _this.bottomRadiiMaxLimit = 0.89; //0.035 * 25.40;
                }
                else {
                    // Inch
                    _this.bottomRadiiMaxLimit = 0.035;
                }
                // convert the form data
                var convertedForm = _this.helperService.convertFormUnitControlValuesAndSet((_this.calculatorConfig && _this.calculatorConfig.form ? _this.calculatorConfig.form : null), _this.dovetailGlandForm, x);
                if (convertedForm) {
                    _this.dovetailGlandForm = convertedForm;
                }
                /// recalculate the data
                _this.onSubmit();
            }
        });
    };
    // call this function for calculatin to determine validation for dovetail radii
    ORingDovetailGlandVacuumOnlyComponent.prototype.radiiRecomendation = function () {
        var glandDepthNominal = parseFloat(this.dovetailGlandForm.controls["glandDepthNominal"].value);
        var glandWidthNominal = parseFloat(this.dovetailGlandForm.controls["glandWidthNominal"].value);
        var topRadiiNominal = parseFloat(this.dovetailGlandForm.controls["topRadiiNominal"].value);
        var bottomRadiiNominal = parseFloat(this.dovetailGlandForm.controls["bottomRadiiNominal"].value);
        var glandAngleNominal = parseFloat(this.dovetailGlandForm.controls["glandAngleNominal"].value);
        if (glandDepthNominal >= 0 && glandWidthNominal >= 0 && topRadiiNominal >= 0 && bottomRadiiNominal >= 0 && glandAngleNominal >= 0) {
            var h = glandDepthNominal - (topRadiiNominal + bottomRadiiNominal) * (1 + Math.sin((90 - glandAngleNominal) * Math.PI / 180));
            var w = (glandWidthNominal / 2) + glandDepthNominal / Math.tan(glandAngleNominal * Math.PI / 180) - bottomRadiiNominal / Math.tan((glandAngleNominal / 2) * Math.PI / 180);
            var bottomRadiiPercent = Math.round((bottomRadiiNominal / glandDepthNominal) * 100);
            var topRadiiPercent = Math.round((topRadiiNominal / glandDepthNominal) * 100);
        }
        var glandDepthMin = parseFloat(this.dovetailGlandForm.controls["glandDepthMin"].value);
        var glandWidthMin = parseFloat(this.dovetailGlandForm.controls["glandWidthMin"].value);
        var topRadiiMin = parseFloat(this.dovetailGlandForm.controls["topRadiiMin"].value);
        var bottomRadiiMin = parseFloat(this.dovetailGlandForm.controls["bottomRadiiMin"].value);
        var glandAngleMin = parseFloat(this.dovetailGlandForm.controls["glandAngleMin"].value);
        if (glandDepthMin >= 0 && glandWidthMin >= 0 && topRadiiMin >= 0 && bottomRadiiMin >= 0 && glandAngleMin >= 0) {
            var hMin = glandDepthMin - (topRadiiMin + bottomRadiiMin) * (1 + Math.sin((90 - glandAngleMin) * Math.PI / 180));
            var wMin = (glandWidthMin / 2) + glandDepthMin / Math.tan(glandAngleMin * Math.PI / 180) - bottomRadiiMin / Math.tan((glandAngleMin / 2) * Math.PI / 180);
            var bottomRadiiMinPercent = Math.round((bottomRadiiMin / glandDepthMin) * 100);
            var topRadiiMinPercent = Math.round((topRadiiMin / glandDepthMin) * 100);
        }
        var glandDepthMax = parseFloat(this.dovetailGlandForm.controls["glandDepthMax"].value);
        var glandWidthMax = parseFloat(this.dovetailGlandForm.controls["glandWidthMax"].value);
        var topRadiiMax = parseFloat(this.dovetailGlandForm.controls["topRadiiMax"].value);
        var bottomRadiiMax = parseFloat(this.dovetailGlandForm.controls["bottomRadiiMax"].value);
        var glandAngleMax = parseFloat(this.dovetailGlandForm.controls["glandAngleMax"].value);
        if (glandDepthMax >= 0 && glandWidthMax >= 0 && topRadiiMax >= 0 && bottomRadiiMax >= 0 && glandAngleMax >= 0) {
            var hMax = glandDepthMax - (topRadiiMax + bottomRadiiMax) * (1 + Math.sin((90 - glandAngleMax) * Math.PI / 180));
            var Max = (glandWidthMax / 2) + glandDepthMax / Math.tan(glandAngleMax * Math.PI / 180) - bottomRadiiMax / Math.tan((glandAngleMax / 2) * Math.PI / 180);
            var bottomRadiiMaxPercent = Math.round((bottomRadiiMax / glandDepthMax) * 100);
            var topRadiiMaxPercent = Math.round((topRadiiMax / glandDepthMax) * 100);
        }
    };
    // on paste calculated data
    ORingDovetailGlandVacuumOnlyComponent.prototype.onPaste = function (calculatedData) {
        if (calculatedData) {
            this.dovetailGlandForm.patchValue(calculatedData);
            // set material choice dropdown value
            var materialChoiceControl = this.dovetailGlandForm.get('materialCteNominal');
            if (materialChoiceControl) {
                var cte = this.helperService.getMaterialChoiceList('materialCteNominal');
                var i = cte.findIndex(function (c) {
                    return c.value.id === calculatedData['materialCteNominal'].id;
                });
                if (i > -1) {
                    materialChoiceControl.setValue(cte[i].value);
                }
            }
        }
    };
    // set show flag of paste button
    ORingDovetailGlandVacuumOnlyComponent.prototype.setShowPasteBtnFlag = function () {
        if (this.calculatorConfig && this.calculatorConfig.id) {
            this.isShowPasteBtn = (this.helperService.isCalculatedDataExist(+this.calculatorConfig.id)) ? true : false;
        }
        else {
            this.isShowPasteBtn = false;
        }
    };
    ORingDovetailGlandVacuumOnlyComponent.prototype.ngOnDestroy = function () {
        if (this.unitChangeSubscription) {
            this.unitChangeSubscription.unsubscribe();
        }
        if (this.temperatureChangeSubscription) {
            this.temperatureChangeSubscription.unsubscribe();
        }
        if (this.oRingDataSubscription) {
            this.oRingDataSubscription.unsubscribe();
        }
    };
    ORingDovetailGlandVacuumOnlyComponent.??fac = function ORingDovetailGlandVacuumOnlyComponent_Factory(t) { return new (t || ORingDovetailGlandVacuumOnlyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangularORingCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_o_ring_dovetail_gland_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_11__["ORingDovetailGlandVacuumOnlyValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_o_ring_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__["ORingDovetailGlandVacuumOnlyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_shared_components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_14__["CalculatorToolbarService"])); };
    ORingDovetailGlandVacuumOnlyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ORingDovetailGlandVacuumOnlyComponent, selectors: [["app-o-ring-dovetail-gland-vacuum-only"]], decls: 47, vars: 8, consts: [[1, "row"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9"], ["novalidate", "", 3, "formGroup", "class", "ngSubmit", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [1, "graph-sec"], [1, "graph-bg", "dovtail-bg"], [1, "gld-id"], [1, "gld-width"], [1, "gld-depth"], [1, "top-radii"], [1, "bottom-radii"], [1, "gld-angle"], [1, "gap-full-comp"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "ignorePdf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1", "ignorePdf"], [3, "calculatorConfig", "isShowOptions", "form", "control", "isSubmitted", "isShowPasteBtn", "optionChange", "reset", "print"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-1"], [3, "form", "isSubmitted", "calculatorJSON", "clientErrors", "clientWarnings", "serverErrors", "serverWarnings"]], template: function ORingDovetailGlandVacuumOnlyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, ORingDovetailGlandVacuumOnlyComponent_form_2_Template, 6, 17, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Gland Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "CL: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " (to centerline)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "GLAND WIDTH: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "(to sharp corners)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "GLAND DEPTH: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "TOP RADII: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "BOTTOM RADII: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "GLAND ANGLE: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "GAP: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "(may or may not exist)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](46, "user-rules");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.calculatorConfig && ctx.dovetailGlandForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.getControlValue("glandCenterlineNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.getControlValue("glandWidthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.getControlValue("glandDepthNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.getControlValue("topRadiiNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", ctx.getControlValue("bottomRadiiNominal"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.getControlValue("glandAngleNominal"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.getControlValue("gapNominal"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _shared_components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_16__["UserRulesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], _shared_components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["CalculatorToolbarComponent"], _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_component__WEBPACK_IMPORTED_MODULE_19__["DynamicFormTwoColumnLayoutComponent"]], styles: [".graph-sec[_ngcontent-%COMP%]   .dovtail-bg[_ngcontent-%COMP%]   div.top-radii[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .dovtail-bg[_ngcontent-%COMP%] {\n    background: url(/assets/img/dovetail_graph.jpg) no-repeat;\n    background-size: contain;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.top-radii[_ngcontent-%COMP%] {\n    bottom: 81px;\n    left: inherit;\n    right: -3px;\n    width: 88px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.bottom-radii[_ngcontent-%COMP%] {\n    bottom: 7px;\n    right: 0;\n    width: 100px;\n    left: inherit;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gld-depth[_ngcontent-%COMP%] {\n    bottom: 60px;\n    left: 10px;\n    background: #fff;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gld-width[_ngcontent-%COMP%] {\n    left: 19px;\n    right: inherit;\n    top: 92px;\n    width: 100px;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gld-angle[_ngcontent-%COMP%] {\n    bottom: 21px;\n    font-size: .70em;\n    right: 120px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gap-full-comp[_ngcontent-%COMP%] {\n    top: 60px;\n    font-size: .70em;\n    right: 22px;\n    width: 102px;\n    text-align: center;\n}\n\n.graph-sec[_ngcontent-%COMP%]   .graph-bg.dovtail-bg[_ngcontent-%COMP%]   div.gld-id[_ngcontent-%COMP%] {\n    top: 50px;\n    left: 46px;\n    \n    width: 80px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvcmVjdGFuZ3VsYXItby1yaW5nLWNhbGMvby1yaW5nLWRvdmV0YWlsLWdsYW5kLXZhY3V1bS1vbmx5L28tcmluZy1kb3ZldGFpbC1nbGFuZC12YWN1dW0tb25seS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjs7QUFFdEI7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBeUQ7SUFDekQsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL3JlY3Rhbmd1bGFyLW8tcmluZy1jYWxjL28tcmluZy1kb3ZldGFpbC1nbGFuZC12YWN1dW0tb25seS9vLXJpbmctZG92ZXRhaWwtZ2xhbmQtdmFjdXVtLW9ubHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qY3NzIHN0YXJ0cyBEb3ZldGFpbCovXG5cbi5ncmFwaC1zZWMgLmRvdnRhaWwtYmcgZGl2LnRvcC1yYWRpaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZ3JhcGgtc2VjIC5kb3Z0YWlsLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvZG92ZXRhaWxfZ3JhcGguanBnKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5kb3Z0YWlsLWJnIGRpdi50b3AtcmFkaWkge1xuICAgIGJvdHRvbTogODFweDtcbiAgICBsZWZ0OiBpbmhlcml0O1xuICAgIHJpZ2h0OiAtM3B4O1xuICAgIHdpZHRoOiA4OHB4O1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5kb3Z0YWlsLWJnIGRpdi5ib3R0b20tcmFkaWkge1xuICAgIGJvdHRvbTogN3B4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBsZWZ0OiBpbmhlcml0O1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5kb3Z0YWlsLWJnIGRpdi5nbGQtZGVwdGgge1xuICAgIGJvdHRvbTogNjBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5kb3Z0YWlsLWJnIGRpdi5nbGQtd2lkdGgge1xuICAgIGxlZnQ6IDE5cHg7XG4gICAgcmlnaHQ6IGluaGVyaXQ7XG4gICAgdG9wOiA5MnB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmdyYXBoLXNlYyAuZ3JhcGgtYmcuZG92dGFpbC1iZyBkaXYuZ2xkLWFuZ2xlIHtcbiAgICBib3R0b206IDIxcHg7XG4gICAgZm9udC1zaXplOiAuNzBlbTtcbiAgICByaWdodDogMTIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5kb3Z0YWlsLWJnIGRpdi5nYXAtZnVsbC1jb21wIHtcbiAgICB0b3A6IDYwcHg7XG4gICAgZm9udC1zaXplOiAuNzBlbTtcbiAgICByaWdodDogMjJweDtcbiAgICB3aWR0aDogMTAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JhcGgtc2VjIC5ncmFwaC1iZy5kb3Z0YWlsLWJnIGRpdi5nbGQtaWQge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiA0NnB4O1xuICAgIC8qIGZvbnQtc2l6ZTogMC42OHJlbTsgKi9cbiAgICB3aWR0aDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
    return ORingDovetailGlandVacuumOnlyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ORingDovetailGlandVacuumOnlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-o-ring-dovetail-gland-vacuum-only',
                templateUrl: './o-ring-dovetail-gland-vacuum-only.component.html',
                styleUrls: ['./o-ring-dovetail-gland-vacuum-only.component.css']
            }]
    }], function () { return [{ type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_4__["ControlBaseService"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _rectangular_o_ring_calc_service__WEBPACK_IMPORTED_MODULE_6__["RectangularORingCalcService"] }, { type: _dynamic_form_dynamic_form_two_column_layout_dynamic_form_two_column_layout_service__WEBPACK_IMPORTED_MODULE_7__["DynamicFormTwoColumnLayoutService"] }, { type: _shared_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_10__["TemperatureButtonService"] }, { type: _o_ring_dovetail_gland_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_11__["ORingDovetailGlandVacuumOnlyValidationService"] }, { type: _o_ring_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_12__["ORingDovetailGlandVacuumOnlyService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"] }, { type: _shared_components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_14__["CalculatorToolbarService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.module.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.module.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ORingDovetailGlandVacuumOnlyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingDovetailGlandVacuumOnlyModule", function() { return ORingDovetailGlandVacuumOnlyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _o_ring_dovetail_gland_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./o-ring-dovetail-gland-vacuum-only-routing.module */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only-routing.module.ts");
/* harmony import */ var _o_ring_dovetail_gland_vacuum_only_o_ring_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.component */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.component.ts");
/* harmony import */ var _o_ring_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./o-ring-dovetail-gland-vacuum-only.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.service.ts");
/* harmony import */ var _o_ring_dovetail_gland_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./o-ring-dovetail-gland-vacuum-only-validation.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only-validation.service.ts");
// core improts



// application imports







var ORingDovetailGlandVacuumOnlyModule = /** @class */ (function () {
    function ORingDovetailGlandVacuumOnlyModule() {
    }
    ORingDovetailGlandVacuumOnlyModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ORingDovetailGlandVacuumOnlyModule });
    ORingDovetailGlandVacuumOnlyModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ORingDovetailGlandVacuumOnlyModule_Factory(t) { return new (t || ORingDovetailGlandVacuumOnlyModule)(); }, providers: [
            _o_ring_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["ORingDovetailGlandVacuumOnlyService"],
            _o_ring_dovetail_gland_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_8__["ORingDovetailGlandVacuumOnlyValidationService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                _o_ring_dovetail_gland_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingDovetailGlandVacuumOnlyRoutingModule"]
            ]] });
    return ORingDovetailGlandVacuumOnlyModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ORingDovetailGlandVacuumOnlyModule, { declarations: [_o_ring_dovetail_gland_vacuum_only_o_ring_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["ORingDovetailGlandVacuumOnlyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
        _o_ring_dovetail_gland_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingDovetailGlandVacuumOnlyRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ORingDovetailGlandVacuumOnlyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_o_ring_dovetail_gland_vacuum_only_o_ring_dovetail_gland_vacuum_only_component__WEBPACK_IMPORTED_MODULE_6__["ORingDovetailGlandVacuumOnlyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                    _o_ring_dovetail_gland_vacuum_only_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingDovetailGlandVacuumOnlyRoutingModule"]
                ],
                providers: [
                    _o_ring_dovetail_gland_vacuum_only_service__WEBPACK_IMPORTED_MODULE_7__["ORingDovetailGlandVacuumOnlyService"],
                    _o_ring_dovetail_gland_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_8__["ORingDovetailGlandVacuumOnlyValidationService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.service.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.service.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: ORingDovetailGlandVacuumOnlyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingDovetailGlandVacuumOnlyService", function() { return ORingDovetailGlandVacuumOnlyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _models_oRingDovetailGlandVacuum_OnlyDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/oRingDovetailGlandVacuum OnlyDTO */ "./client/app/models/oRingDovetailGlandVacuum OnlyDTO.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _o_ring_dovetail_gland_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./o-ring-dovetail-gland-vacuum-only-validation.service */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only-validation.service.ts");
// core imports

// application imports






var ORingDovetailGlandVacuumOnlyService = /** @class */ (function () {
    function ORingDovetailGlandVacuumOnlyService(_http, oRingDovetailGlandVacuumOnlyValidationService) {
        this._http = _http;
        this.oRingDovetailGlandVacuumOnlyValidationService = oRingDovetailGlandVacuumOnlyValidationService;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
    }
    ORingDovetailGlandVacuumOnlyService.prototype.createOringDovetail = function (form, inputOption, unit, unitTemp) {
        var body = new _models_oRingDovetailGlandVacuum_OnlyDTO__WEBPACK_IMPORTED_MODULE_2__["ORingDovetailGlandVacuumOnlyDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        body.inputOption = inputOption;
        body.calculationType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["calculationType"].ORING_SIZING;
        if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorOption"].WithTolerance === +(inputOption)) {
            var minValue = this.oRingDovetailGlandVacuumOnlyValidationService.generateMinValues(form);
            body.glandWidthMin = minValue.glandWidthMin ? minValue.glandWidthMin : 0;
            body.glandDepthMin = minValue.glandDepthMin ? minValue.glandDepthMin : 0;
            body.glandAngleMin = minValue.glandAngleMin ? minValue.glandAngleMin : 0;
            body.bottomRadiiMin = minValue.bottomRadiiMin ? minValue.bottomRadiiMin : 0;
            body.topRadiiMin = minValue.topRadiiMin ? minValue.topRadiiMin : 0;
            body.gapMin = minValue.gapMin ? minValue.gapMin : 0;
            body.glandCenterlineMin = minValue.glandCenterlineMin ? minValue.glandCenterlineMin : 0;
            var maxValue = this.oRingDovetailGlandVacuumOnlyValidationService.generateMaxValues(form);
            body.glandWidthMax = maxValue.glandWidthMax ? maxValue.glandWidthMax : 0;
            body.glandDepthMax = maxValue.glandDepthMax ? maxValue.glandDepthMax : 0;
            body.glandAngleMax = maxValue.glandAngleMax ? maxValue.glandAngleMax : 0;
            body.bottomRadiiMax = maxValue.bottomRadiiMax ? maxValue.bottomRadiiMax : 0;
            body.topRadiiMax = maxValue.topRadiiMax ? maxValue.topRadiiMax : 0;
            body.gapMax = maxValue.gapMax ? maxValue.gapMax : 0;
            body.glandCenterlineMax = maxValue.glandCenterlineMax ? maxValue.glandCenterlineMax : 0;
        }
        return this._http.post(this.baseUrl + "oringglandanalysistool/createOringDovetail", body);
    };
    ORingDovetailGlandVacuumOnlyService.??fac = function ORingDovetailGlandVacuumOnlyService_Factory(t) { return new (t || ORingDovetailGlandVacuumOnlyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_o_ring_dovetail_gland_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_5__["ORingDovetailGlandVacuumOnlyValidationService"])); };
    ORingDovetailGlandVacuumOnlyService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ORingDovetailGlandVacuumOnlyService, factory: ORingDovetailGlandVacuumOnlyService.??fac, providedIn: 'root' });
    return ORingDovetailGlandVacuumOnlyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ORingDovetailGlandVacuumOnlyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _o_ring_dovetail_gland_vacuum_only_validation_service__WEBPACK_IMPORTED_MODULE_5__["ORingDovetailGlandVacuumOnlyValidationService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=o-ring-dovetail-gland-vacuum-only-o-ring-dovetail-gland-vacuum-only-module.js.map