(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ar-wr-calc-ar-wr-calc-module"],{

/***/ "./client/app/ar-wr-calc/ar-wr-calc-routing.module.ts":
/*!************************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-calc-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ArWrCalcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrCalcRoutingModule", function() { return ArWrCalcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ar-wr-calc.component */ "./client/app/ar-wr-calc/ar-wr-calc.component.ts");
// core imports



// application imports



var routes = [
    {
        path: '', component: _ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_3__["ArWrCalcComponent"], children: [
            {
                path: 'pressin',
                data: {
                    calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].WrArPressIn
                },
                loadChildren: function () { return __webpack_require__.e(/*! import() | ar-wr-press-in-ar-wr-press-in-module */ "ar-wr-press-in-ar-wr-press-in-module").then(__webpack_require__.bind(null, /*! ./ar-wr-press-in/ar-wr-press-in.module */ "./client/app/ar-wr-calc/ar-wr-press-in/ar-wr-press-in.module.ts")).then(function (m) { return m.ArWrPressInModule; }); }
            },
            {
                path: 'floating',
                data: {
                    calculatorType: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].WrArFloating
                },
                loadChildren: function () { return __webpack_require__.e(/*! import() | ar-wr-floating-ar-wr-floating-module */ "ar-wr-floating-ar-wr-floating-module").then(__webpack_require__.bind(null, /*! ./ar-wr-floating/ar-wr-floating.module */ "./client/app/ar-wr-calc/ar-wr-floating/ar-wr-floating.module.ts")).then(function (m) { return m.ArWrFloatingModule; }); }
            }
        ]
    }
];
var ArWrCalcRoutingModule = /** @class */ (function () {
    function ArWrCalcRoutingModule() {
    }
    ArWrCalcRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArWrCalcRoutingModule });
    ArWrCalcRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArWrCalcRoutingModule_Factory(t) { return new (t || ArWrCalcRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ArWrCalcRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArWrCalcRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrCalcRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-calc.component.ts":
/*!*******************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-calc.component.ts ***!
  \*******************************************************/
/*! exports provided: ArWrCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrCalcComponent", function() { return ArWrCalcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ar-wr-calc.service */ "./client/app/ar-wr-calc/ar-wr-calc.service.ts");
/* harmony import */ var _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _shared_services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/ar-wr-drop-down-data.service */ "./client/app/shared/services/ar-wr-drop-down-data.service.ts");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./client/app/ar-wr-calc/header/header.component.ts");
/* harmony import */ var _shared_components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/tab-nav/tab-nav.component */ "./client/app/shared/components/tab-nav/tab-nav.component.ts");
/* harmony import */ var _shared_components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/measure-button/measure-button.component */ "./client/app/shared/components/measure-button/measure-button.component.ts");
// core imports



// application imports












var ArWrCalcComponent = /** @class */ (function () {
    function ArWrCalcComponent(arWrCalcService, router, controlBaseService, activatedRoute, arWrDropDownDataService, unitButtonService, temperatureButtonService, helperService) {
        var _this = this;
        this.arWrCalcService = arWrCalcService;
        this.router = router;
        this.controlBaseService = controlBaseService;
        this.activatedRoute = activatedRoute;
        this.arWrDropDownDataService = arWrDropDownDataService;
        this.unitButtonService = unitButtonService;
        this.temperatureButtonService = temperatureButtonService;
        this.helperService = helperService;
        this.O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY = "WrAr_CALCULATOR_TYPE";
        this.previuosSelectedCalculatorId = 0;
        this.currrentSelectedCalculatorId = 0;
        this.isJSONConfigFetched = false;
        this.flattenedFormControls = [];
        this.controlType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ControlType"];
        this.wrArTabs = [
            { linkLabel: "Press-In", rootModuleRoute: "pressin", childrenModuleRoute: "/wrar/pressin", pathExactmatch: true },
            { linkLabel: "Floating", rootModuleRoute: "floating", childrenModuleRoute: "/wrar/floating", pathExactmatch: true }
        ];
        // currentSelectedCalculator: FormControlModel;
        this.defaultMeasure = null;
        // get route data
        this.activatedRouteSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function () {
            var calculatorId = 0;
            if (_this.activatedRoute.snapshot.firstChild && _this.activatedRoute.snapshot.firstChild.data) {
                calculatorId = _this.activatedRoute.snapshot.firstChild.data.calculatorType;
            }
            if (calculatorId) {
                _this.previuosSelectedCalculatorId = _this.currrentSelectedCalculatorId;
                _this.currrentSelectedCalculatorId = calculatorId;
                _this.defaultMeasure = _this.helperService.setDefaultMeasure();
            }
        });
    }
    // component destroy handler
    ArWrCalcComponent.prototype.ngOnDestroy = function () {
        if (this.activatedRouteSubscription) {
            this.activatedRouteSubscription.unsubscribe();
        }
    };
    ArWrCalcComponent.prototype.ngOnInit = function () {
        this.initializeComponent();
        this.getDropdownItems();
        this.setInitialTemperature();
    };
    ArWrCalcComponent.prototype.initializeComponent = function () {
        var _this = this;
        // get JSON config from server
        this.arWrCalcService.getArWrPressInCalcConfig().subscribe(function (resp) {
            _this.isJSONConfigFetched = true;
            _this.jsonConfiguration = resp;
            // bind calculator type ddl 
            // // const calculatorTypes: FormControlModel[] = [...this.getCalculatorTypeArray(this.O_RING_CALCULATOR_TYPE_FORM_CONTROL_KEY)];
            // // this.calculatorTypeDDl = calculatorTypes;
            // create form group for calculator dropdown - to handle the dropdown model binding using reactiveform model
            var calculatorTypeDDLGroup = [];
            // below calculatorTypeDDLGroup.push also sets the default dropdown selection
            // create form groupd with initial value of control "calculatorTypes[0]"
            // if (this.currrentSelectedCalculatorId && this.currrentSelectedCalculatorId >= 0) {
            // get calculator index by calculator id
            //   const getCalcuilatorindex = calculatorTypes.findIndex((calc: FormControlModel) => {
            //     if (calc.form_control_id === this.currrentSelectedCalculatorId) {
            //       return calc;
            //     }
            //   });
            //   // set selected calcalcutor in calculator dropdown
            //   if (getCalcuilatorindex) {
            //     calculatorTypeDDLGroup.push(calculatorTypes[getCalcuilatorindex]);
            //   }
            //   else {
            //     // set selected calcalcutor in calculator dropdown
            //     calculatorTypeDDLGroup.push(calculatorTypes[0]);
            //   }
            // }
            // else {
            //   // set selected calcalcutor in calculator dropdown
            //   calculatorTypeDDLGroup.push(calculatorTypes[0]);
            // }
            // create form group with default option selection
            // this.createCalculatorTypeFormGroup(calculatorTypeDDLGroup);
            // calculator change
            // send o-ring config value to subscribers
            _this.arWrCalcService.sendArWrConfigValue(_this.jsonConfiguration);
        }, function (error) {
            throw new Error(error.message);
        });
    };
    // get material choice
    ArWrCalcComponent.prototype.getDropdownItems = function () {
        var _this = this;
        this.arWrDropDownDataService.getDropdownItems().subscribe(function (resp) {
            _this.arWrDropDownDataService.sendDropdownItems(resp);
        });
    };
    // set initial temperature for currently selected Unit => Imperial / Metric
    ArWrCalcComponent.prototype.setInitialTemperature = function () {
        var currentUnit = this.unitButtonService.getCurrentUnitValue;
        var currentTemp = this.temperatureButtonService.getCurrentTemperatureValue;
        if (currentUnit && currentUnit.id > 0 && currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH) {
            if (currentTemp && currentTemp.id > 0 && currentTemp.id !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].FAHRENHEIT) {
                this.helperService.setAndSendTemperatureManually(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].FAHRENHEIT);
            }
        }
        else if (currentUnit && currentUnit.id > 0 && currentUnit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].MILLI_METER) {
            if (currentTemp && currentTemp.id > 0 && currentTemp.id !== _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].CELCIUS) {
                this.helperService.setAndSendTemperatureManually(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].CELCIUS);
            }
        }
        else {
            this.helperService.setAndSendTemperatureManually(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].CELCIUS);
        }
    };
    ArWrCalcComponent.ɵfac = function ArWrCalcComponent_Factory(t) { return new (t || ArWrCalcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_4__["ArWrCalcService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_5__["ControlBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_6__["ArWrDropDownDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"])); };
    ArWrCalcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArWrCalcComponent, selectors: [["app-ar-wr-calc"]], decls: 22, vars: 2, consts: [[1, "content"], [1, "container", "p-0"], [1, "clearfix"], [1, "ignorePdf", 3, "tabMenu"], [1, "container"], [1, "row", "ignorePdf"], [1, "col-12", "col-sm-12", "col-md-9", "col-lg-9", "col-xl-9", "p-1"], [1, "info-tab", "pt-0"], [1, "col-12", "col-sm-12", "col-md-3", "col-lg-3", "col-xl-3", "p-1"], [1, "row"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "p-0"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-6", "p-0"], [1, "pull-left", "unit-section__label"], [3, "defaultMeasure"]], template: function ArWrCalcComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tab-nav", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Use this tool for designing Greene Tweed\u2019s composites wear components. Engineer, sales, channel partners etc. can use this tool and user should input data in all the required field to get the final dimensions and design notes. Please contact Greene Tweed engineering for help or advice if required as some applications are difficult to optimize the design.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Measure:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "measure-button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabMenu", ctx.wrArTabs);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultMeasure", ctx.defaultMeasure);
        } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _shared_components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_11__["TabNavComponent"], _shared_components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_12__["MeasureButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".calculation-results__range {\n    text-align: center;\n    width: 35%;\n}\n\n.calculation-results__outputs .calculation-results__range {\n    text-align: center;\n    width: 30%;\n}\n\n.materialChoice {\n    padding-right: 22% !important;\n    width: 100% !important;\n    min-width: 156px !important;\n}\n\n.sms-section__label {\n    /* width: 20%; */\n    width: 32% !important;\n}\n\n.sms-section__range {\n    width: 27% !important;\n}\n\n.calculation-results__label {\n    width: 56% !important;\n}\n\n.info-tab {\n    padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXItd3ItY2FsYy9hci13ci1jYWxjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJjbGllbnQvYXBwL2FyLXdyLWNhbGMvYXItd3ItY2FsYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGN1bGF0aW9uLXJlc3VsdHNfX3JhbmdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDM1JTtcbn1cblxuLmNhbGN1bGF0aW9uLXJlc3VsdHNfX291dHB1dHMgLmNhbGN1bGF0aW9uLXJlc3VsdHNfX3JhbmdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLm1hdGVyaWFsQ2hvaWNlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMiUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTU2cHggIWltcG9ydGFudDtcbn1cblxuLnNtcy1zZWN0aW9uX19sYWJlbCB7XG4gICAgLyogd2lkdGg6IDIwJTsgKi9cbiAgICB3aWR0aDogMzIlICFpbXBvcnRhbnQ7XG59XG5cbi5zbXMtc2VjdGlvbl9fcmFuZ2Uge1xuICAgIHdpZHRoOiAyNyUgIWltcG9ydGFudDtcbn1cblxuLmNhbGN1bGF0aW9uLXJlc3VsdHNfX2xhYmVsIHtcbiAgICB3aWR0aDogNTYlICFpbXBvcnRhbnQ7XG59XG5cbi5pbmZvLXRhYiB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"], encapsulation: 2 });
    return ArWrCalcComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrCalcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ar-wr-calc',
                templateUrl: './ar-wr-calc.component.html',
                styleUrls: ['./ar-wr-calc.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_4__["ArWrCalcService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_control_base_service__WEBPACK_IMPORTED_MODULE_5__["ControlBaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _shared_services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_6__["ArWrDropDownDataService"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__["UnitButtonService"] }, { type: _shared_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__["TemperatureButtonService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-calc.module.ts":
/*!****************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-calc.module.ts ***!
  \****************************************************/
/*! exports provided: ArWrCalcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrCalcModule", function() { return ArWrCalcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./client/app/ar-wr-calc/header/header.component.ts");
/* harmony import */ var _ar_wr_calc_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ar-wr-calc-routing.module */ "./client/app/ar-wr-calc/ar-wr-calc-routing.module.ts");
/* harmony import */ var _ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ar-wr-calc.component */ "./client/app/ar-wr-calc/ar-wr-calc.component.ts");
/* harmony import */ var _ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ar-wr-calc.service */ "./client/app/ar-wr-calc/ar-wr-calc.service.ts");
// core imports
// o-ring tool calculators module



// application imports







var ArWrCalcModule = /** @class */ (function () {
    function ArWrCalcModule() {
    }
    ArWrCalcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArWrCalcModule });
    ArWrCalcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArWrCalcModule_Factory(t) { return new (t || ArWrCalcModule)(); }, providers: [_ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_8__["ArWrCalcService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ar_wr_calc_routing_module__WEBPACK_IMPORTED_MODULE_6__["ArWrCalcRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
            ]] });
    return ArWrCalcModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArWrCalcModule, { declarations: [_ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_7__["ArWrCalcComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ar_wr_calc_routing_module__WEBPACK_IMPORTED_MODULE_6__["ArWrCalcRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrCalcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _ar_wr_calc_component__WEBPACK_IMPORTED_MODULE_7__["ArWrCalcComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ar_wr_calc_routing_module__WEBPACK_IMPORTED_MODULE_6__["ArWrCalcRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"]
                ],
                providers: [_ar_wr_calc_service__WEBPACK_IMPORTED_MODULE_8__["ArWrCalcService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/ar-wr-calc.service.ts":
/*!*****************************************************!*\
  !*** ./client/app/ar-wr-calc/ar-wr-calc.service.ts ***!
  \*****************************************************/
/*! exports provided: ArWrCalcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrCalcService", function() { return ArWrCalcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _models_pressInDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/pressInDTO */ "./client/app/models/pressInDTO.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _models_wrArMaterialCteDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/wrArMaterialCteDTO */ "./client/app/models/wrArMaterialCteDTO.ts");
/* harmony import */ var _shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/custom-validations/comparison-validation.directive */ "./client/app/shared/directives/custom-validations/comparison-validation.directive.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
// core imports


// application imports










var ArWrCalcService = /** @class */ (function () {
    /*  Constructor */
    function ArWrCalcService(_http, unitButtonService, helperService) {
        this._http = _http;
        this.unitButtonService = unitButtonService;
        this.helperService = helperService;
        /* Private Properties   */
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.env.api;
        // oRing config state management subject and observable
        this.oRingConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        // Expose the observable part of the arWrConfig subject (read only stream)
        this.arWrConfig$ = this.oRingConfigSubject.asObservable();
    }
    Object.defineProperty(ArWrCalcService.prototype, "arWrConfig", {
        // service state management property "arWrConfig"
        // the getter will return the last value emitted oRingConfigSubject subject
        get: function () {
            return this.oRingConfigSubject.getValue();
        },
        // assigning a value to this.arWrConfig will push it onto the observable 
        // and down to all of its subsribers (ex: this.arWrConfig = {})
        set: function (val) {
            this.oRingConfigSubject.next(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArWrCalcService.prototype, "getCurrentArWrConfigValue", {
        /* Public Properties   */
        // get config value directly using behaviour subject
        get: function () {
            return this.arWrConfig;
        },
        enumerable: true,
        configurable: true
    });
    // Methods/functions
    // send oring config
    // assigning a value to this.arWrConfig will push it onto the observable 
    // and down to all of its subsribers (ex: this.arWrConfig = {})
    ArWrCalcService.prototype.sendArWrConfigValue = function (val) {
        this.arWrConfig = val;
    };
    /*  Public Methods   */
    // get o-ring config from server
    ArWrCalcService.prototype.getArWrPressInCalcConfig = function () {
        return this._http.get(this.baseUrl + "wrar/getjsonconfig");
    };
    ArWrCalcService.prototype.getInterference = function (form, unit, unitTemp) {
        var body = new _models_pressInDTO__WEBPACK_IMPORTED_MODULE_3__["PressInDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        return this._http.post(this.baseUrl + "wrar/getInterference", body);
    };
    ArWrCalcService.prototype.getClearance = function (form, unit, unitTemp, calculatorType) {
        if (calculatorType === void 0) { calculatorType = _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["CalculatorTypes"].WrArPressIn; }
        var body = new _models_pressInDTO__WEBPACK_IMPORTED_MODULE_3__["PressInDTO"](form.value);
        body.unit = unit.id.toString();
        body.unitTemp = unitTemp.id.toString();
        body.calculatorType = calculatorType;
        return this._http.post(this.baseUrl + "wrar/getClearance", body);
    };
    // get material cte data
    ArWrCalcService.prototype.getMaterialCTE = function (unit, material) {
        var body = new _models_wrArMaterialCteDTO__WEBPACK_IMPORTED_MODULE_5__["WrArMaterialCteDTO"]();
        body.unit = unit.id.toString();
        body.material = material;
        return this._http.post(this.baseUrl + "wrar/getCTEMaterialDetail", body);
    };
    // get and set rotor and stator CTE only
    ArWrCalcService.prototype.getAndSetMaterialCTE = function (form, controlKey, bindControlKey, controlValue) {
        var _this = this;
        this.getMaterialCTE(this.unitButtonService.getCurrentUnitValue, controlValue).subscribe(function (x) {
            // rotor CTE
            if (controlKey === "rotatingMaterial") {
                form.controls[bindControlKey].setValue(_this.helperService.convertFromNegetivePowerOfSix(x.rotorCTE).toFixed(2));
            }
            else if (controlKey === "stationaryMaterial") { // stator CTE
                form.controls[bindControlKey].setValue(_this.helperService.convertFromNegetivePowerOfSix(x.statorCTE).toFixed(2));
            }
        });
    };
    // get and set composite material temperature range
    ArWrCalcService.prototype.getSetCompositeMaterialData = function (calculatorData, form, bindControlKey) {
        if (!form) {
            return;
        }
        var currentSelectedUnit = this.unitButtonService.getCurrentUnitValue;
        // call API
        var body = new _models_pressInDTO__WEBPACK_IMPORTED_MODULE_3__["PressInDTO"](form.value);
        body.unit = currentSelectedUnit.id.toString();
        // API call and subscribe
        this._http.post(this.baseUrl + "wrar/getMatlCheck", body).subscribe(function (response) {
            var temperatureRangeData = "";
            if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].MILLI_METER) {
                // Metric / MM
                temperatureRangeData = "Min " + response.serviceStorageTemperatureAmbientMin + "\u00B0C / Max " + response.serviceStorageTemperatureAmbientMax + "\u00B0C";
            }
            else {
                // Imperial / Inch
                temperatureRangeData = "Min " + response.serviceStorageTemperatureAmbientMin + "\u00B0F / Max " + response.serviceStorageTemperatureAmbientMax + "\u00B0F";
            }
            // iterate over left column rows
            for (var row = 0; row < calculatorData.left_column.form_layout_row.length; row++) {
                // iterate over left column columns
                for (var column = 0; column < calculatorData.left_column.form_layout_row[row].form_layout_columns.length; column++) {
                    // iterate over column controls
                    for (var control = 0; control < calculatorData.left_column.form_layout_row[row].form_layout_columns[column].form_controls.length; control++) {
                        // check control sub-type is unitLabel and update the label and value
                        if (calculatorData.left_column.form_layout_row[row].form_layout_columns[column].form_controls[control].key === bindControlKey) {
                            // set display label value              
                            calculatorData.left_column.form_layout_row[row].form_layout_columns[column].form_controls[control].label = temperatureRangeData;
                        }
                    }
                }
            }
        }, function (error) { });
    };
    // Function stationary element id max validation
    ArWrCalcService.prototype.stationaryElementIDMaxValidation = function () {
        var _this = this;
        return function (control) {
            var stationaryElementIDMinControl = control.get('stationaryElementIDMin');
            var stationaryElementIDMaxControl = control.get('stationaryElementIDMax');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var maxAllowed = ((+stationaryElementIDMinControl.value) + 0.005); // Inch
            if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].MILLI_METER) {
                maxAllowed = ((+stationaryElementIDMinControl.value) + 0.127);
            }
            var error = null;
            if (stationaryElementIDMinControl && stationaryElementIDMinControl.value && stationaryElementIDMaxControl && stationaryElementIDMaxControl.value) {
                var message = "Value should be equal to minimum stationary bore ID or up to " + ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].MILLI_METER ? ".127 mm" : ".005''") + " over.";
                // validate = max value should not be less than the min
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_6__["lessThanValidation"])(stationaryElementIDMaxControl.value, stationaryElementIDMinControl.value, "stationaryElementIDMax", "Stationary Element ID Max", message);
                if (!error) {
                    // validate maximum allowed
                    error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_6__["lessThanValidation"])(maxAllowed.toString(), stationaryElementIDMaxControl.value, "stationaryElementIDMax", "Stationary Element ID Max", message);
                }
            }
            _this.helperService.setValidationErrorToFormControl(stationaryElementIDMaxControl, error, "stationaryElementIDMax");
            return error;
        };
    };
    // Function rotating element od max max validation
    ArWrCalcService.prototype.rotatingElementODMaxValidation = function () {
        var _this = this;
        return function (control) {
            var rotatingElementODMinControl = control.get('rotatingElementODMin');
            var rotatingElementODMaxControl = control.get('rotatingElementODMax');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            var maxAllowed = ((+rotatingElementODMinControl.value) + 0.005); // Inch
            if ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].MILLI_METER) {
                maxAllowed = ((+rotatingElementODMinControl.value) + 0.127);
            }
            var error = null;
            if (rotatingElementODMinControl && rotatingElementODMinControl.value && rotatingElementODMaxControl && rotatingElementODMaxControl.value) {
                var message = "Value should be equal to minimum rotating element OD or up to " + ((+currentSelectedUnit.id) === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["Units"].MILLI_METER ? ".127 mm" : ".005''") + " over.";
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_6__["lessThanValidation"])(rotatingElementODMaxControl.value, rotatingElementODMinControl.value, "rotatingElementODMax", "Rotating Element OD Max", message);
                if (!error) {
                    // validate maximum allowed
                    error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_6__["lessThanValidation"])(maxAllowed.toString(), rotatingElementODMaxControl.value, "rotatingElementODMax", "Rotating Element OD Max", message);
                }
            }
            _this.helperService.setValidationErrorToFormControl(rotatingElementODMaxControl, error, "rotatingElementODMax");
            return error;
        };
    };
    // statioary element ID Minimum dimensions should not be lesser the rotating element OD Min dimensions
    ArWrCalcService.prototype.stationaryMinLessThanRotatingMinValidation = function () {
        var _this = this;
        return function (control) {
            var stationaryElementIDMinControl = control.get('stationaryElementIDMin');
            var rotatingElementODMinControl = control.get('rotatingElementODMin');
            var error = null;
            if (stationaryElementIDMinControl && stationaryElementIDMinControl.value && rotatingElementODMinControl && rotatingElementODMinControl.value) {
                var message = "Stationary element minimum value should be equal to minimum rotating element od vaule or larger.";
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_6__["lessThanValidation"])(stationaryElementIDMinControl.value, rotatingElementODMinControl.value, "stationaryElementIDMin", "Stationary Element ID Min", message);
            }
            _this.helperService.setValidationErrorToFormControl(stationaryElementIDMinControl, error, "stationaryElementIDMinShouldBeEqualOrLargerThanRotatingMin");
            return error;
        };
    };
    // statioary element ID Maximum dimensions should not be lesser the rotating element OD Maximum dimensions
    ArWrCalcService.prototype.stationaryMaxLessThanRotatingMaxValidation = function () {
        var _this = this;
        return function (control) {
            var stationaryElementIDMaxControl = control.get('stationaryElementIDMax');
            var rotatingElementODMaxControl = control.get('rotatingElementODMax');
            var error = null;
            if (stationaryElementIDMaxControl && stationaryElementIDMaxControl.value && rotatingElementODMaxControl && rotatingElementODMaxControl.value) {
                var message = "Stationary element maximum value should be equal to maximum rotating element od value or larger.";
                error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_6__["lessThanValidation"])(stationaryElementIDMaxControl.value, rotatingElementODMaxControl.value, "stationaryElementIDMax", "Stationary Element ID Max", message);
            }
            _this.helperService.setValidationErrorToFormControl(stationaryElementIDMaxControl, error, "stationaryElementIDMaxShouldBeEqualOrLargerThanRotatingMax");
            return error;
        };
    };
    // Async Function  serviceStorageTemperatureMin validation
    ArWrCalcService.prototype.asyncServiceStorageTemperatureMinValidation = function () {
        var _this = this;
        return function (control) {
            var compositeControl = control.get('composite');
            var serviceStorageTemperatureAmbient75FMinControl = control.get('serviceStorageTemperatureAmbient75FMin');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            if (compositeControl && !compositeControl.value) {
                return null;
            }
            // call API
            var body = new _models_pressInDTO__WEBPACK_IMPORTED_MODULE_3__["PressInDTO"](control.value);
            body.unit = currentSelectedUnit.id.toString();
            // observable
            return _this._http.post(_this.baseUrl + "wrar/getMatlCheck", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
                var error = null;
                if (serviceStorageTemperatureAmbient75FMinControl
                    && serviceStorageTemperatureAmbient75FMinControl.value && response) {
                    error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_6__["lessThanValidation"])(serviceStorageTemperatureAmbient75FMinControl.value, response.serviceStorageTemperatureAmbientMin.toString(), "serviceStorageTemperatureAmbientMin", "Service Storage Temperature Ambient Min", "Minimum allowed value of \"Service / Storage Temperature\" for the selected material \"" + response.matlName + "\" is " + response.serviceStorageTemperatureAmbientMin + ".");
                    _this.helperService.setValidationErrorToFormControl(serviceStorageTemperatureAmbient75FMinControl, error, "serviceStorageTemperatureAmbientMin");
                }
                return error;
            }));
        };
    };
    // Async Function  serviceStorageTemperatureMax validation
    ArWrCalcService.prototype.asyncServiceStorageTemperatureMaxValidation = function () {
        var _this = this;
        return function (control) {
            var compositeControl = control.get('composite');
            var serviceStorageTemperatureAmbient75FMaxControl = control.get('serviceStorageTemperatureAmbient75FMax');
            var currentSelectedUnit = _this.unitButtonService.getCurrentUnitValue;
            if (compositeControl && !compositeControl.value) {
                return null;
            }
            // call API
            var body = new _models_pressInDTO__WEBPACK_IMPORTED_MODULE_3__["PressInDTO"](control.value);
            body.unit = currentSelectedUnit.id.toString();
            // observable
            return _this._http.post(_this.baseUrl + "wrar/getMatlCheck", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
                var error = null;
                if (serviceStorageTemperatureAmbient75FMaxControl && serviceStorageTemperatureAmbient75FMaxControl.value && response && response.serviceStorageTemperatureAmbientMax) {
                    error = Object(_shared_directives_custom_validations_comparison_validation_directive__WEBPACK_IMPORTED_MODULE_6__["largerThanValidation"])(serviceStorageTemperatureAmbient75FMaxControl.value, response.serviceStorageTemperatureAmbientMax.toString(), "serviceStorageTemperatureAmbientMax", "Service Storage Temperature Ambient Max", "Maximum allowed value of \"Service / Storage Temperature\" for the selected material \"" + response.matlName + "\" is " + response.serviceStorageTemperatureAmbientMax + ".");
                    _this.helperService.setValidationErrorToFormControl(serviceStorageTemperatureAmbient75FMaxControl, error, "serviceStorageTemperatureAmbientMax");
                }
                return error;
            }));
        };
    };
    ArWrCalcService.ɵfac = function ArWrCalcService_Factory(t) { return new (t || ArWrCalcService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"])); };
    ArWrCalcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArWrCalcService, factory: ArWrCalcService.ɵfac, providedIn: 'root' });
    return ArWrCalcService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrCalcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _shared_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_9__["UnitButtonService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/ar-wr-calc/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./client/app/ar-wr-calc/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [[1, "gt-banner"], [1, "container"], [1, "gt-header-graphic"], [1, "heading"], [1, "gt-header-logo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " WR\u00AE / AR\u00AE Calculator ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".gt-banner[_ngcontent-%COMP%] {\n    background: url(/assets/img/wrar/wrarcalculator-header-img.jpg) no-repeat;\n    background-size: cover;\n    width: 100%;\n    position: relative;\n}\n\n.gt-banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 175px;\n}\n\n.gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    position: relative;\n    top: 49%;\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n    color: #fff;\n    font-size: 32px;\n    width: 80%;\n    \n    font-family: \"nimbus_san_nov_con\", Arial, sans-serif;\n    margin: 0px 20px 0 250px;\n    font-weight: 700;\n    \n    \n}\n\n.gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 20px;\n    display: block;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-shadow: none;\n}\n\n.gt-header-logo[_ngcontent-%COMP%] {\n    margin-top: -15px;\n    position: absolute;\n    \n    \n    background: url(/assets/img/GTLogo_White-semicalc.png) no-repeat;\n    width: 147px;\n    height: 54px;\n    background-size: contain;\n}\n\n\n\n@media (max-width:600px) {\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n        width: 72%;\n        left: 0;\n    }\n}\n\n@media (max-width:767px) {\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n        font-size: 20px;\n        width: 48%;\n        padding-top: 0px;\n    }\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n    .gt-header-logo[_ngcontent-%COMP%] {\n        width: 112px;\n        height: 42px;\n        background-size: 112px;\n    }\n}\n\n\n\n@media (min-width:768px) and (max-width:990px) {\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n        font-size: 24px;\n        width: 58%;\n    }\n}\n\n@media (max-width:1060px) {\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n        font-size: 28px;\n        width: 73%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXItd3ItY2FsYy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5RUFBeUU7SUFDekUsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFFUiwrQkFBK0I7SUFFL0IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLG1EQUFtRDtJQUNuRCxvREFBb0Q7SUFDcEQsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnRUFBZ0U7SUFDaEUsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJO1FBQ0ksVUFBVTtRQUNWLE9BQU87SUFDWDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7SUFDSTtRQUNJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImNsaWVudC9hcHAvYXItd3ItY2FsYy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3QtYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvd3Jhci93cmFyY2FsY3VsYXRvci1oZWFkZXItaW1nLmpwZykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3QtYmFubmVyIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTc1cHg7XG59XG5cbi5ndC1iYW5uZXIgLmhlYWRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQ5JTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgLyogZm9udC1mYW1pbHk6IFwibmltYnVzLXNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7ICovXG4gICAgZm9udC1mYW1pbHk6IFwibmltYnVzX3Nhbl9ub3ZfY29uXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMHB4IDIwcHggMCAyNTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIC8qIGxldHRlci1zcGFjaW5nOiAwcHg7ICovXG4gICAgLyogdGV4dC1zaGFkb3c6IDJweCAycHggMCAjMWIzNzY2OyAqL1xufVxuXG4uZ3QtYmFubmVyIC5oZWFkaW5nIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uZ3QtaGVhZGVyLWxvZ28ge1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiByaWdodDogMTJweDsgKi9cbiAgICAvKiBib3R0b206IDE1cHg7ICovXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL0dUTG9nb19XaGl0ZS1zZW1pY2FsYy5wbmcpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMTQ3cHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLyogbWVkaWEgcXVlcnkgKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAuZ3QtYmFubmVyIC5oZWFkaW5nIHtcbiAgICAgICAgd2lkdGg6IDcyJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB9XG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZ3QtaGVhZGVyLWxvZ28ge1xuICAgICAgICB3aWR0aDogMTEycHg7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTJweDtcbiAgICB9XG59XG5cbi8qIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgLmd0LWhlYWRlci1ncmFwaGljIHtcbiAgICAgICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2d0LWhlYWRlci1ncmFwaGljLnBuZykgbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMTM0cHg7XG4gICAgICAgIGhlaWdodDogMTE4cHg7ICpcbiAgICB9XG59ICovXG5cbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTBweCkge1xuICAgIC5ndC1iYW5uZXIgLmhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHdpZHRoOiA1OCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxMDYwcHgpIHtcbiAgICAuZ3QtYmFubmVyIC5oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB3aWR0aDogNzMlO1xuICAgIH1cbn0iXX0= */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/models/pressInDTO.ts":
/*!*****************************************!*\
  !*** ./client/app/models/pressInDTO.ts ***!
  \*****************************************/
/*! exports provided: PressInDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressInDTO", function() { return PressInDTO; });
var PressInDTO = /** @class */ (function () {
    function PressInDTO(options) {
        if (options === void 0) { options = {}; }
        this.unit = options.unit;
        this.unitTemp = options.unitTemp;
        this.pumpType = options.pumpType;
        this.componentType = options.componentType;
        this.composite = options.composite;
        this.interferenceTarget = options.interferenceTarget;
        this.customInterferenceTarget = options.customInterferenceTarget;
        this.clearanceTarget = options.clearanceTarget;
        this.customClearanceTarget = options.customClearanceTarget;
        this.rotatingElementODMin = options.rotatingElementODMin;
        this.rotatingElementODMax = options.rotatingElementODMax;
        this.rotatingMaterial = options.rotatingMaterial;
        this.customRotatingMaterial = options.customRotatingMaterial;
        this.stationaryElementIDMin = options.stationaryElementIDMin;
        this.stationaryElementIDMax = options.stationaryElementIDMax;
        this.stationaryMaterial = options.stationaryMaterial;
        this.customStationaryMaterial = options.customStationaryMaterial;
        this.stationaryBoreDepthMin = options.stationaryBoreDepthMin;
        this.serviceStorageTemperatureAmbient75FMin = options.serviceStorageTemperatureAmbient75FMin;
        this.serviceStorageTemperatureAmbient75FMax = options.serviceStorageTemperatureAmbient75FMax;
        this.calculatorType = options.calculatorType;
    }
    return PressInDTO;
}());



/***/ }),

/***/ "./client/app/models/wrArMaterialCteDTO.ts":
/*!*************************************************!*\
  !*** ./client/app/models/wrArMaterialCteDTO.ts ***!
  \*************************************************/
/*! exports provided: WrArMaterialCteDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrArMaterialCteDTO", function() { return WrArMaterialCteDTO; });
var WrArMaterialCteDTO = /** @class */ (function () {
    function WrArMaterialCteDTO(options) {
        if (options === void 0) { options = {}; }
        this.unit = options.unit;
        this.material = options.material;
    }
    return WrArMaterialCteDTO;
}());



/***/ })

}]);
//# sourceMappingURL=ar-wr-calc-ar-wr-calc-module.js.map