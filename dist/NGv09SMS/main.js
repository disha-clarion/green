(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/app/app-routing.module.ts":
/*!******************************************!*\
  !*** ./client/app/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");





var routes = [
    {
        path: 'oringgland',
        data: {
            calculatorGroup: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorGroup"].ORingNGlandCalcs
        },
        loadChildren: function () { return Promise.all(/*! import() | oring-and-gland-calc-oring-and-gland-calc-module */[__webpack_require__.e("default~ar-wr-calc-ar-wr-calc-module~oring-and-gland-calc-oring-and-gland-calc-module"), __webpack_require__.e("oring-and-gland-calc-oring-and-gland-calc-module")]).then(__webpack_require__.bind(null, /*! ./oring-and-gland-calc/oring-and-gland-calc.module */ "./client/app/oring-and-gland-calc/oring-and-gland-calc.module.ts")).then(function (m) { return m.ORingAndGlandCalcModule; }); }
    },
    {
        path: 'wrar',
        data: { calculatorGroup: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorGroup"].WrArCalcs }, loadChildren: function () { return Promise.all(/*! import() | ar-wr-calc-ar-wr-calc-module */[__webpack_require__.e("default~ar-wr-calc-ar-wr-calc-module~oring-and-gland-calc-oring-and-gland-calc-module"), __webpack_require__.e("common"), __webpack_require__.e("ar-wr-calc-ar-wr-calc-module")]).then(__webpack_require__.bind(null, /*! ./ar-wr-calc/ar-wr-calc.module */ "./client/app/ar-wr-calc/ar-wr-calc.module.ts")).then(function (m) { return m.ArWrCalcModule; }); }
    },
    {
        path: '',
        redirectTo: 'oringgland/evaluateglandsizecalculatorsglands/createRectangleGland',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/app.component.ts":
/*!*************************************!*\
  !*** ./client/app/app.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/auth.service */ "./client/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_material_choice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/material-choice.service */ "./client/app/shared/services/material-choice.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./client/app/footer/footer.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/toasts-container/toasts-container.component */ "./client/app/shared/components/toasts-container/toasts-container.component.ts");
// core imports

// third party imports

// application imports











var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, authService, materialChoiceService, router, activatedRoute) {
        var _this = this;
        this.titleService = titleService;
        this.authService = authService;
        this.materialChoiceService = materialChoiceService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = '';
        this.isShowAppVersion = false;
        this.calculatorGroup = 0;
        this.authDataSubscription = this.authService.authData.subscribe(function (x) { return _this.authData = x; });
        // get route data
        this.activatedRouteSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })).subscribe(function () {
            _this.calculatorGroup = 0;
            if (_this.activatedRoute.snapshot.firstChild && _this.activatedRoute.snapshot.firstChild.data) {
                _this.calculatorGroup = _this.activatedRoute.snapshot.firstChild.data.calculatorGroup;
                if (_this.calculatorGroup === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["CalculatorGroup"].WrArCalcs) {
                    _this.isShowAppVersion = true;
                }
                _this.setTitle();
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setAuth();
        // get material choice
        this.getMaterialChoice();
    };
    // set browser title
    AppComponent.prototype.setTitle = function () {
        if (this.calculatorGroup === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["CalculatorGroup"].WrArCalcs) {
            this.titleService.setTitle(_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.app.wrArTitle);
        }
        else {
            this.titleService.setTitle(_app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.app.title);
        }
    };
    // method to get authentication token and store it into cookies
    AppComponent.prototype.setAuth = function () {
        this.authService.authenticate().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function (r) { return r; });
    };
    // get material choice
    AppComponent.prototype.getMaterialChoice = function () {
        var _this = this;
        this.materialChoiceService.getMaterialChoice().subscribe(function (resp) {
            _this.materialChoiceService.sendMaterialChoiceList(resp);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.authDataSubscription) {
            this.authDataSubscription.unsubscribe();
        }
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_material_choice_service__WEBPACK_IMPORTED_MODULE_7__["MaterialChoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[3, "isShowAppVersion"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "square-jelly-box", 3, "fullScreen"], [2, "color", "white"], ["aria-live", "polite", "aria-atomic", "true"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-spinner", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-toasts-container", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isShowAppVersion", ctx.isShowAppVersion);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerComponent"], _shared_components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_10__["ToastsContainerComponent"]], styles: ["/* bootstrap  */\n\n.content {\n    margin: 25px 0 20px;\n}\n\n.errorMessage {\n    color: red;\n}\n\n.sms-section {\n    /* border: 1px solid #d2d2d2; */\n    background: #f9f9f9;\n    margin-top: 10px;\n}\n\n.pl-1-perc {\n    padding-left: 1%;\n}\n\n.pr-1-right {\n    padding-right: 1%;\n}\n\n.pl-1-row-left > .row {\n    padding-left: 1%;\n}\n\n.pr-1-row-right > .row {\n    padding-right: 1%;\n}\n\ntextarea {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7QUFFZjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBib290c3RyYXAgICovXG5cbi5jb250ZW50IHtcbiAgICBtYXJnaW46IDI1cHggMCAyMHB4O1xufVxuXG4uZXJyb3JNZXNzYWdlIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uc21zLXNlY3Rpb24ge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7ICovXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGwtMS1wZXJjIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xufVxuXG4ucHItMS1yaWdodCB7XG4gICAgcGFkZGluZy1yaWdodDogMSU7XG59XG5cbi5wbC0xLXJvdy1sZWZ0ID4gLnJvdyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcbn1cblxuLnByLTEtcm93LXJpZ2h0ID4gLnJvdyB7XG4gICAgcGFkZGluZy1yaWdodDogMSU7XG59XG5cbnRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"], encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _shared_services_material_choice_service__WEBPACK_IMPORTED_MODULE_7__["MaterialChoiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./client/app/app.config.service.ts":
/*!******************************************!*\
  !*** ./client/app/app.config.service.ts ***!
  \******************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var AppConfig = /** @class */ (function () {
    function AppConfig(handler) {
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](handler);
    }
    AppConfig.prototype.load = function () {
        var _this = this;
        // let jsonFile = `assets/config/config.${environment.name}.json`;
        // if (!environment.name || (environment.name && environment.name.toLowerCase() === 'dev')) {
        var jsonFile = "assets/config/config.json";
        // }
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(jsonFile).toPromise().then(function (response) {
                AppConfig.settings = response;
                resolve();
            }).catch(function (response) {
                reject("Could not load file '" + jsonFile + "': " + JSON.stringify(response));
            });
        });
    };
    AppConfig.ɵfac = function AppConfig_Factory(t) { return new (t || AppConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"])); };
    AppConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppConfig, factory: AppConfig.ɵfac, providedIn: 'root' });
    return AppConfig;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"] }]; }, null); })();


/***/ }),

/***/ "./client/app/app.module.ts":
/*!**********************************!*\
  !*** ./client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: initializeApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm5/ngx-cookie-service.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./client/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./client/app/app.component.ts");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _helpers_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/interceptors/error.interceptor */ "./client/app/helpers/interceptors/error.interceptor.ts");
/* harmony import */ var _helpers_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/interceptors/jwt.interceptor */ "./client/app/helpers/interceptors/jwt.interceptor.ts");
/* harmony import */ var _helpers_interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/interceptors/spinner.interceptor */ "./client/app/helpers/interceptors/spinner.interceptor.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./client/app/footer/footer.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _shared_services_global_error_handler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/global-error-handler */ "./client/app/shared/services/global-error-handler.ts");
// core imports




// third party imports



// application imports











function initializeApp(appConfig) {
    return function () { return appConfig.load(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            // {provide: LocationStrategy, useClass: HashLocationStrategy},
            _app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfig"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                useFactory: initializeApp,
                deps: [_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfig"]], multi: true
            },
            // processes all errors
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _shared_services_global_error_handler__WEBPACK_IMPORTED_MODULE_15__["GlobalErrorHandler"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_12__["SpinnerInterceptor"], multi: true },
            // interceptor for HTTP errors
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true },
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
        ], imports: [[
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"].forRoot(),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"]
                ],
                providers: [
                    // {provide: LocationStrategy, useClass: HashLocationStrategy},
                    _app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfig"],
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                        useFactory: initializeApp,
                        deps: [_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfig"]], multi: true
                    },
                    // processes all errors
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _shared_services_global_error_handler__WEBPACK_IMPORTED_MODULE_15__["GlobalErrorHandler"] },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_interceptors_spinner_interceptor__WEBPACK_IMPORTED_MODULE_12__["SpinnerInterceptor"], multi: true },
                    // interceptor for HTTP errors
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _helpers_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true },
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./client/app/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./client/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




function FooterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" App Version ", ctx_r0.version, " ");
} }
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.isShowAppVersion = false;
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appVersion;
        this.currentYear = (new Date()).getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { isShowAppVersion: "isShowAppVersion" }, decls: 14, vars: 2, consts: [[1, "footer"], [1, "footer-top"], [1, "container"], [1, "container", "text-center"], ["class", "container text-center", 4, "ngIf"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Disclaimer: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The information provided in this tool is solely for vacuum and low pressure applications within semiconductor manufacturing and processing applications, and may not function in any other application. The tool will be revised as new or modified information becomes available. The data reflects material properties and specifications gathered by Greene, Tweed at their expense, but may not represent actual situational conditions found in a particular application. Data provided is for general guidance in choosing an appropriate product. Testing should be done to confirm suitability to the specific purpose and more information can be had by contacting Greene, Tweed Semiconductor Engineering. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Greene, Tweed cannot include all actual end use conditions applied to the products in its internal testing and assumes no liability and makes no warranties based upon information garnered from the tool. Use of the tool is done so by the consumer at their own risk. Greene, Tweed retains all intellectual property rights associated with the tool and products. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Chemraz&reg is a registered Trademark of Greene, Tweed.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FooterComponent_div_13_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.currentYear, " Greene, Tweed ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowAppVersion);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".footer[_ngcontent-%COMP%] {\n    background: #CCC;\n    padding: 0 0 20px;\n    color: #777;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n    background: #eaeaea;\n    margin-bottom: 20px;\n    margin-top: 50px;\n    padding: 20px 0 10px;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n}\n\n.footer-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-family: 'open_sansbold', Helvetica, Arial, Verdana, Tahoma, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkVBQTJFO0FBQy9FIiwiZmlsZSI6ImNsaWVudC9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcbiAgICBjb2xvcjogIzc3Nztcbn1cblxuLmZvb3RlciAuZm9vdGVyLXRvcCB7XG4gICAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgcGFkZGluZzogMjBweCAwIDEwcHg7XG59XG5cbi5mb290ZXIgLmZvb3Rlci10b3AgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZm9vdGVyLXRvcCBwIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6ICdvcGVuX3NhbnNib2xkJywgSGVsdmV0aWNhLCBBcmlhbCwgVmVyZGFuYSwgVGFob21hLCBzYW5zLXNlcmlmO1xufSJdfQ== */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, { isShowAppVersion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./client/app/helpers/interceptors/error.interceptor.ts":
/*!**************************************************************!*\
  !*** ./client/app/helpers/interceptors/error.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/alert-modal/alert-modal.component */ "./client/app/shared/components/alert-modal/alert-modal.component.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
// core imports

// third party imports



// application imports





var ErrorInterceptor = /** @class */ (function () {
    // private isRefreshing = false;
    // private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    function ErrorInterceptor(modalService, spinner) {
        this.modalService = modalService;
        this.spinner = spinner;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.handle401Error();
                return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
            }
            else {
                return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }
        }));
    };
    // http error 401 handler
    ErrorInterceptor.prototype.handle401Error = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.spinner.hide(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_5__["HTTP_SPINNER"]);
            var options = {};
            //     If true, the backdrop element will be created for a given modal.
            // Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.
            options.backdrop = 'static';
            // If true, the modal will be closed when Escape key is pressed
            options.keyboard = false;
            var modalRef = _this.modalService.open(_shared_components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_4__["AlertModalComponent"], options);
            modalRef.componentInstance.title = 'Alert!!';
            modalRef.componentInstance.message = 'Token expired, Please refresh the page.';
            modalRef.componentInstance.name = 'World';
        });
    };
    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"])); };
    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
    return ErrorInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/helpers/interceptors/jwt.interceptor.ts":
/*!************************************************************!*\
  !*** ./client/app/helpers/interceptors/jwt.interceptor.ts ***!
  \************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./client/app/shared/services/auth.service.ts");




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authService) {
        this.authService = authService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add auth header with jwt if user is logged in and request is to the api url
        var authObject = this.authService.currentAuthValue;
        var baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
        var isApiUrl = request.url.startsWith(baseUrl);
        // exclude assets config files
        // const isAssetsConfig = request.url.startsWith('assets/config/');
        if (authObject && authObject.token && isApiUrl) {
            // console.log('jwt interceptor');
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': "Bearer " + authObject.token,
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
    JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
    return JwtInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/helpers/interceptors/spinner.interceptor.ts":
/*!****************************************************************!*\
  !*** ./client/app/helpers/interceptors/spinner.interceptor.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerInterceptor", function() { return SpinnerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
// core imports





var SpinnerInterceptor = /** @class */ (function () {
    function SpinnerInterceptor(spinner) {
        this.spinner = spinner;
        this.count = 0;
    }
    SpinnerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.spinner.show(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["HTTP_SPINNER"]);
        this.count++;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { return console.log(event); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this.count--;
            if (_this.count == 0) {
                _this.spinner.hide(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["HTTP_SPINNER"]);
            }
            ;
        }));
    };
    SpinnerInterceptor.ɵfac = function SpinnerInterceptor_Factory(t) { return new (t || SpinnerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
    SpinnerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerInterceptor, factory: SpinnerInterceptor.ɵfac });
    return SpinnerInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/models/auth.model.ts":
/*!*****************************************!*\
  !*** ./client/app/models/auth.model.ts ***!
  \*****************************************/
/*! exports provided: AuthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModel", function() { return AuthModel; });
var AuthModel = /** @class */ (function () {
    function AuthModel(options) {
        if (options === void 0) { options = {}; }
        this.token = options.token;
    }
    return AuthModel;
}());



/***/ }),

/***/ "./client/app/models/dropdown-change.model.ts":
/*!****************************************************!*\
  !*** ./client/app/models/dropdown-change.model.ts ***!
  \****************************************************/
/*! exports provided: DropDownChangeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownChangeModel", function() { return DropDownChangeModel; });
var DropDownChangeModel = /** @class */ (function () {
    function DropDownChangeModel(options) {
        if (options === void 0) { options = {}; }
        this.formControl = options.formControl;
        this.value = options.value;
    }
    return DropDownChangeModel;
}());



/***/ }),

/***/ "./client/app/models/form-control.model.ts":
/*!*************************************************!*\
  !*** ./client/app/models/form-control.model.ts ***!
  \*************************************************/
/*! exports provided: FormControlModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlModel", function() { return FormControlModel; });
var FormControlModel = /** @class */ (function () {
    function FormControlModel(options) {
        this.show = true;
        this.required = false;
        this.isDisabled = false;
        this.form_control_id = options.form_control_id;
        this.order = options.order || 0;
        this.key = options.key;
        this.label = options.label;
        this.showLabel = options.showLabel;
        this.value = options.value;
        this.placeholder = options.placeholder;
        this.type = options.type;
        this.sub_type = options.sub_type;
        this.show = options.show;
        this.required = options.required;
        this.isDisabled = options.isDisabled || false;
        this.validation = options.validation;
        this.css_classes = options.css_classes;
        this.decimal_point = options.decimal_point || null;
        this.options = options.options || [];
    }
    return FormControlModel;
}());



/***/ }),

/***/ "./client/app/models/log.model.ts":
/*!****************************************!*\
  !*** ./client/app/models/log.model.ts ***!
  \****************************************/
/*! exports provided: LogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogModel", function() { return LogModel; });
var LogModel = /** @class */ (function () {
    function LogModel(options) {
        if (options === void 0) { options = {}; }
        this.message = options.message;
        this.level = options.level;
    }
    return LogModel;
}());



/***/ }),

/***/ "./client/app/models/switch-button.model.ts":
/*!**************************************************!*\
  !*** ./client/app/models/switch-button.model.ts ***!
  \**************************************************/
/*! exports provided: SwitchButtonModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchButtonModel", function() { return SwitchButtonModel; });
var SwitchButtonModel = /** @class */ (function () {
    function SwitchButtonModel(options) {
        if (options === void 0) { options = {}; }
        this.id = options.id;
        this.title = options.title;
        this.display_title = options.display_title;
        this.display_Short_title = options.display_Short_title;
        this.isActive = options.isActive ? options.isActive : false;
        this.actionType = options.actionType || 0;
    }
    return SwitchButtonModel;
}());



/***/ }),

/***/ "./client/app/models/view-error.model.ts":
/*!***********************************************!*\
  !*** ./client/app/models/view-error.model.ts ***!
  \***********************************************/
/*! exports provided: ViewErrorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewErrorModel", function() { return ViewErrorModel; });
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");

var ViewErrorModel = /** @class */ (function () {
    function ViewErrorModel(options) {
        if (options === void 0) { options = {}; }
        this.field = options.field;
        this.title = options.title;
        this.isDetailOpened = options.isDetailOpened ? options.isDetailOpened : false;
        this.type = options.type || _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_0__["ErrorTypes"].Error;
        this.errors = options.errors || [];
    }
    return ViewErrorModel;
}());



/***/ }),

/***/ "./client/app/shared/components/alert-modal/alert-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./client/app/shared/components/alert-modal/alert-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlertModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModalComponent", function() { return AlertModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
// core imports



var AlertModalComponent = /** @class */ (function () {
    function AlertModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    AlertModalComponent.prototype.ngOnInit = function () {
    };
    AlertModalComponent.ɵfac = function AlertModalComponent_Factory(t) { return new (t || AlertModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
    AlertModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertModalComponent, selectors: [["ngb-alert-modal"]], inputs: { title: "title", message: "message" }, decls: 12, vars: 2, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-describedby", "close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function AlertModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertModalComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertModalComponent_Template_button_click_10_listener() { return ctx.activeModal.close("Close click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        } }, styles: [".modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]\n{\n    outline: none;\n    border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0LW1vZGFsL2FsZXJ0LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyIC5jbG9zZVxue1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufSJdfQ== */"] });
    return AlertModalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngb-alert-modal',
                templateUrl: './alert-modal.component.html',
                styleUrls: ['./alert-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts":
/*!*****************************************************************************************!*\
  !*** ./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CalculatorToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorToolbarComponent", function() { return CalculatorToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator-toolbar.service */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
// core imports







function CalculatorToolbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_div_1_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onOptionClick($event, ctx_r5.options.Nominal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nominal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.options.Nominal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.getFormControl())("name", ctx_r0.control.key)("id", ctx_r0.control.key + 1);
} }
function CalculatorToolbarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_div_2_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onOptionClick($event, ctx_r7.options.WithTolerance); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " With Tolerance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.options.WithTolerance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.getFormControl())("name", ctx_r1.control.key)("id", ctx_r1.control.key + 2);
} }
function CalculatorToolbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_div_3_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onOptionClick($event, ctx_r9.options.WithMinMax); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Min and Max ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.options.WithMinMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.getFormControl())("name", ctx_r2.control.key)("id", ctx_r2.control.key + 3);
} }
function CalculatorToolbarComponent_input_5_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_input_5_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onCopy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CalculatorToolbarComponent_input_6_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_input_6_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onPaste(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { "col-md-3": a0, "col-md-12": a1 }; };
var CalculatorToolbarComponent = /** @class */ (function () {
    function CalculatorToolbarComponent(calculatorToolbarService, helperService) {
        this.calculatorToolbarService = calculatorToolbarService;
        this.helperService = helperService;
        this.isSubmitted = false;
        this.isShowOptions = false;
        this.isShowPasteBtn = false;
        this.isShowCopyBtn = false;
        this.optionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.print = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.copy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["CalculatorOption"];
    }
    CalculatorToolbarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CalculatorToolbarComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    CalculatorToolbarComponent.prototype.onConvertToPdf = function () {
        this.print.emit();
    };
    CalculatorToolbarComponent.prototype.onResetField = function () {
        // this.form.reset();
        this.reset.emit();
    };
    CalculatorToolbarComponent.prototype.onOptionClick = function (e, option) {
        this.optionChange.emit(option);
    };
    // return form control
    CalculatorToolbarComponent.prototype.getFormControl = function () {
        if (this.control && this.control.key) {
            return this.form.get(this.control.key);
        }
    };
    CalculatorToolbarComponent.prototype.onPaste = function () {
        var calculatedData = this.helperService.getCalculatedStoredData((+this.calculatorConfig.id));
        if (calculatedData) {
            this.calculatorToolbarService.paste.emit(calculatedData);
        }
    };
    CalculatorToolbarComponent.prototype.onCopy = function () {
        this.copy.emit();
    };
    CalculatorToolbarComponent.ɵfac = function CalculatorToolbarComponent_Factory(t) { return new (t || CalculatorToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_2__["CalculatorToolbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"])); };
    CalculatorToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorToolbarComponent, selectors: [["calculator-toolbar"]], inputs: { control: "control", form: "form", isSubmitted: "isSubmitted", isShowOptions: "isShowOptions", isShowPasteBtn: "isShowPasteBtn", isShowCopyBtn: "isShowCopyBtn", calculatorConfig: "calculatorConfig" }, outputs: { optionChange: "optionChange", reset: "reset", print: "print", paste: "paste", copy: "copy" }, decls: 9, vars: 10, consts: [[1, "row", 3, "formGroup"], ["class", "sms-radio-wrapper col-md-3", 4, "ngIf"], [1, "sms-radio-wrapper", "text-right", 3, "ngClass"], ["class", "reset", "type", "button", "value", "Copy", "id", "copybtn", "title", "Copy", 3, "click", 4, "ngIf"], ["class", "reset", "type", "button", "value", "Paste", "id", "pastebtn", "title", "Paste", 3, "click", 4, "ngIf"], ["type", "button", "value", "Reset", "id", "resetbtn", "title", "Reset", 1, "reset", 3, "click"], ["type", "button", "value", "", "id", "printbtn", 1, "printbtn", 3, "click"], [1, "sms-radio-wrapper", "col-md-3"], ["type", "radio", "name", "calc-options", 3, "value", "formControl", "name", "id", "click"], ["type", "button", "value", "Copy", "id", "copybtn", "title", "Copy", 1, "reset", 3, "click"], ["type", "button", "value", "Paste", "id", "pastebtn", "title", "Paste", 1, "reset", 3, "click"]], template: function CalculatorToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalculatorToolbarComponent_div_1_Template, 3, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalculatorToolbarComponent_div_2_Template, 3, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CalculatorToolbarComponent_div_3_Template, 3, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CalculatorToolbarComponent_input_5_Template, 1, 0, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CalculatorToolbarComponent_input_6_Template, 1, 0, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_Template_input_click_7_listener() { return ctx.onResetField(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorToolbarComponent_Template_input_click_8_listener() { return ctx.onConvertToPdf(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.isShowOptions, !ctx.isShowOptions));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowCopyBtn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowPasteBtn);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"]], styles: [".sms-radio-wrapper[_ngcontent-%COMP%] {\n    float: left;\n    \n    margin-top: 5px;\n    color: #225a8a;\n    font-family: 'open_sanssemibold', sans-serif;\n}\n\n.sms-radio-wrapper[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\n    position: relative;\n    top: 3px;\n}\n\n.reset[_ngcontent-%COMP%] {\n    \n    background: #ec971f;\n    border: #ec971f;\n    color: #ffffff;\n    font-size: 16px;\n    font-weight: 400;\n    padding: 4px 15px;\n    margin-right: 11px;\n}\n\n.calculate[_ngcontent-%COMP%], .custom-button[_ngcontent-%COMP%], .reset[_ngcontent-%COMP%] {\n    \n    color: #fff;\n    font-size: 15px;\n    font-weight: 400;\n    padding: 3px 15px;\n    margin-right: 11px;\n}\n\n.printbtn[_ngcontent-%COMP%] {\n    background: url(/assets/img/icon_print.png) no-repeat;\n    background-size: 90%;\n    opacity: .6;\n    margin-right: 0;\n}\n\n.printbtn[_ngcontent-%COMP%], .resetbtn[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    border: none;\n    \n    margin-top: 5px;\n    vertical-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FsY3VsYXRvci10b29sYmFyL2NhbGN1bGF0b3ItdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsY0FBYztJQUNkLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiY2xpZW50L2FwcC9zaGFyZWQvY29tcG9uZW50cy9jYWxjdWxhdG9yLXRvb2xiYXIvY2FsY3VsYXRvci10b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21zLXJhZGlvLXdyYXBwZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8qIG1hcmdpbi1yaWdodDogMTVweDsgKi9cbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgY29sb3I6ICMyMjVhOGE7XG4gICAgZm9udC1mYW1pbHk6ICdvcGVuX3NhbnNzZW1pYm9sZCcsIHNhbnMtc2VyaWY7XG59XG5cbi5zbXMtcmFkaW8td3JhcHBlciBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbn1cblxuLnJlc2V0IHtcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gICAgYmFja2dyb3VuZDogI2VjOTcxZjtcbiAgICBib3JkZXI6ICNlYzk3MWY7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogNHB4IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4uY2FsY3VsYXRlLCAuY3VzdG9tLWJ1dHRvbiwgLnJlc2V0IHtcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogM3B4IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4ucHJpbnRidG4ge1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9pY29uX3ByaW50LnBuZykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOTAlO1xuICAgIG9wYWNpdHk6IC42O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnByaW50YnRuLCAucmVzZXRidG4ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufSJdfQ== */"] });
    return CalculatorToolbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'calculator-toolbar',
                templateUrl: './calculator-toolbar.component.html',
                styleUrls: ['./calculator-toolbar.component.css']
            }]
    }], function () { return [{ type: _calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_2__["CalculatorToolbarService"] }, { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }]; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSubmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isShowOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isShowPasteBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isShowCopyBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], calculatorConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], optionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], reset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], paste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], copy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts":
/*!***************************************************************************************!*\
  !*** ./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts ***!
  \***************************************************************************************/
/*! exports provided: CalculatorToolbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorToolbarService", function() { return CalculatorToolbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CalculatorToolbarService = /** @class */ (function () {
    function CalculatorToolbarService() {
        // paste event for copy and paste event
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CalculatorToolbarService.ɵfac = function CalculatorToolbarService_Factory(t) { return new (t || CalculatorToolbarService)(); };
    CalculatorToolbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalculatorToolbarService, factory: CalculatorToolbarService.ɵfac, providedIn: 'root' });
    return CalculatorToolbarService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorToolbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/shared/components/custom-controls/drop-down/drop-down.component.ts":
/*!***************************************************************************************!*\
  !*** ./client/app/shared/components/custom-controls/drop-down/drop-down.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownComponent", function() { return DropDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _models_dropdown_change_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/dropdown-change.model */ "./client/app/models/dropdown-change.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function DropDownComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.chooseOptionLabel);
} }
function DropDownComponent_ng_container_3_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.label);
} }
function DropDownComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropDownComponent_ng_container_3_option_1_Template, 2, 2, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r2.show != null && option_r2.show != undefined ? option_r2.show : true);
} }
var _c0 = function (a0) { return { "is-invalid": a0 }; };
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.isFormSubmitted = false;
        this.isAddChooseOption = false;
        this.chooseOptionLabel = "Please select";
        // @Output() selectionChange: EventEmitter<FormControlModel> = new EventEmitter<FormControlModel>();
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DropDownComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownComponent.prototype, "isValid", {
        // getter property to get the control validity
        get: function () {
            return this.f[this.control.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownComponent.prototype, "controlValue", {
        get: function () {
            return this.f[this.control.key].value;
        },
        enumerable: true,
        configurable: true
    });
    // return form control
    DropDownComponent.prototype.getFormControl = function () {
        return this.form.get(this.control.key);
    };
    DropDownComponent.prototype.ngOnInit = function () {
    };
    DropDownComponent.prototype.onSelectionChange = function (event) {
        var dropdownObject = new _models_dropdown_change_model__WEBPACK_IMPORTED_MODULE_1__["DropDownChangeModel"]({ formControl: this.control, value: this.controlValue });
        this.selectionChange.emit(dropdownObject);
        // this.selectionChange.emit(this.controlValue);
    };
    // focus out event
    DropDownComponent.prototype.onFocusOutEvent = function (event) {
        this.focusOut.emit(event);
    };
    DropDownComponent.ɵfac = function DropDownComponent_Factory(t) { return new (t || DropDownComponent)(); };
    DropDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropDownComponent, selectors: [["custom-drop-down"]], inputs: { form: "form", options: "options", control: "control", isFormSubmitted: "isFormSubmitted", isAddChooseOption: "isAddChooseOption", chooseOptionLabel: "chooseOptionLabel" }, outputs: { selectionChange: "selectionChange", focusOut: "focusOut" }, decls: 4, vars: 11, consts: [[3, "formGroup"], [3, "formGroup", "formControl", "ngClass", "change", "focusout"], ["value", "", "disabled", "", 3, "ngValue", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["value", "", "disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngIf"], [3, "ngValue"]], template: function DropDownComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DropDownComponent_Template_select_change_1_listener($event) { return ctx.onSelectionChange($event); })("focusout", function DropDownComponent_Template_select_focusout_1_listener($event) { return ctx.onFocusOutEvent($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropDownComponent_option_2_Template, 2, 1, "option", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DropDownComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ddl-options form-control ", ctx.control.css_classes == null ? null : ctx.control.css_classes.join(" "), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form)("formControl", ctx.getFormControl())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isFormSubmitted && !ctx.isValid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAddChooseOption);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".ddl-options[_ngcontent-%COMP%] {\n    \n    width: 100%;\n    border-radius: 0;\n    border: 1px solid #d2d2d2;\n    box-shadow: none;\n    height: 40px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background: url(/assets/img/icon_select_arrow-gray.png) no-repeat center right;\n    float: left;\n    font-size: 1em;\n    \n    padding-right: 12%;\n}\n\n.ddl-options.form-control.is-invalid[_ngcontent-%COMP%], .ddl-options.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid {\n    color: #777;\n}\n\n.materialChoice[_ngcontent-%COMP%] {\n    width: 200%;\n    background-color: #fff;\n    padding-right: 34% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLWNvbnRyb2xzL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsOEVBQThFO0lBQzlFLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBOzs7OztHQUtHIiwiZmlsZSI6ImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLWNvbnRyb2xzL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZGwtb3B0aW9ucyB7XG4gICAgLyogd2lkdGg6IDMzMHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGhlaWdodDogNDBweDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9pY29uX3NlbGVjdF9hcnJvdy1ncmF5LnBuZykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDEyJTtcbn1cblxuLmRkbC1vcHRpb25zLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkLCAuZGRsLW9wdGlvbnMud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQge1xuICAgIGNvbG9yOiAjNzc3O1xufVxuXG4ubWF0ZXJpYWxDaG9pY2Uge1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy1yaWdodDogMzQlICFpbXBvcnRhbnQ7XG59XG5cbi8qIC5tYXRlcmlhbENob2ljZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxNTdweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0gKi8iXX0= */"] });
    return DropDownComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropDownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'custom-drop-down',
                templateUrl: './drop-down.component.html',
                styleUrls: ['./drop-down.component.css']
            }]
    }], function () { return []; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFormSubmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAddChooseOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chooseOptionLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focusOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/components/custom-controls/numeric-textbox/numeric-textbox.component.ts":
/*!***************************************************************************************************!*\
  !*** ./client/app/shared/components/custom-controls/numeric-textbox/numeric-textbox.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NumericTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericTextboxComponent", function() { return NumericTextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../calculator-toolbar/calculator-toolbar.service */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../directives/numeric.directive */ "./client/app/shared/directives/numeric.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
// core imports












var _c0 = function (a0) { return { "is-invalid": a0 }; };
var NumericTextboxComponent = /** @class */ (function () {
    function NumericTextboxComponent(unitButtonService, helperService, temperatureButtonService, calculatorToolbarService) {
        this.unitButtonService = unitButtonService;
        this.helperService = helperService;
        this.temperatureButtonService = temperatureButtonService;
        this.calculatorToolbarService = calculatorToolbarService;
        this.isFormSubmitted = false;
        this.isFormatInputOnBlur = true;
        this.isNegetiveNumber = false;
        this.clientErrors = [];
        this.clientWarnings = [];
        this.serverErrors = [];
        this.serverWarnings = [];
        this.maxLength = 6;
        this.decimalPoint = 2;
        this.isUpdateDecimalPointOnUnitChange = true;
        // events
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unitChange();
        this.temperatureChange();
    }
    Object.defineProperty(NumericTextboxComponent.prototype, "f", {
        // resizeSub: Subscription;
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericTextboxComponent.prototype, "isValid", {
        // getter property to get the control validity
        get: function () {
            var _this = this;
            // check client errors
            if ((this.clientErrors && this.clientErrors.length > 0)
                || (this.clientWarnings && this.clientWarnings.length > 0)
                || (this.serverErrors && this.serverErrors.length > 0)
                || (this.serverWarnings && this.serverWarnings.length > 0)) {
                // client error index
                var errorIndex = this.clientErrors.findIndex(function (e) {
                    return _this.control.key === e.field;
                });
                // client warning index
                var warningIndex = this.clientWarnings.findIndex(function (e) {
                    return _this.control.key === e.field;
                });
                // server error index
                var serverErrorIndex = this.serverErrors.findIndex(function (e) {
                    return _this.control.key === e.field;
                });
                // server warning index
                var serverWarningIndex = this.serverWarnings.findIndex(function (e) {
                    return _this.control.key === e.field;
                });
                // if ((errorIndex > -1) || (warningIndex > -1) || (serverErrorIndex > -1) || (serverWarningIndex > -1)) {
                if ((errorIndex > -1) || (serverErrorIndex > -1)) {
                    return false;
                }
                else {
                    return !this.form.controls[this.control.key].invalid; // this.form.controls[this.control.key].valid;
                }
            }
            else {
                return !this.form.controls[this.control.key].invalid; //this.form.controls[this.control.key].valid;
            }
        },
        enumerable: true,
        configurable: true
    });
    NumericTextboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        var fc = this.getFormControl();
        // input value changes
        // debounce keystroke events          
        this.formCtrlSub = fc.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000)).subscribe(function (newValue) {
            //  this.firstName = newValue;
            // console.log(`numeric value   ${newValue}`);
            _this.valueChange.emit({ key: _this.control.key, formControl: fc });
        });
    };
    NumericTextboxComponent.prototype.ngOnDestroy = function () {
        if (this.unitButtonChange) {
            this.unitButtonChange.unsubscribe();
        }
        if (this.temperatureButtonChange) {
            this.temperatureButtonChange.unsubscribe();
        }
        if (this.formCtrlSub) {
            this.formCtrlSub.unsubscribe();
        }
    };
    // return form control
    NumericTextboxComponent.prototype.getFormControl = function () {
        return this.form.get(this.control.key);
    };
    // unit change handler
    NumericTextboxComponent.prototype.unitChange = function () {
        var _this = this;
        // unit change subscription
        this.unitButtonChange = this.unitButtonService.unit$.subscribe(function (x) {
            if (_this.isUpdateDecimalPointOnUnitChange) {
                if (x) {
                    if (x.id === _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                        _this.decimalPoint = 2;
                    }
                    else {
                        _this.decimalPoint = 3;
                    }
                }
            }
        });
    };
    // temperature change handler
    NumericTextboxComponent.prototype.temperatureChange = function () {
        var _this = this;
        // temperature change subscription
        this.temperatureButtonChange = this.temperatureButtonService.temperature$.subscribe(function (x) {
            var _a;
            if (x) {
                var controlKey = (_a = _this.control) === null || _a === void 0 ? void 0 : _a.key;
                // temperature conversion
                if (x.actionType !== _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Paste && controlKey && _this.control && _this.control.sub_type === _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].temperature) {
                    var formControl = _this.getFormControl();
                    var formControlValue = formControl.value;
                    var unit = _this.unitButtonService.getCurrentUnitValue;
                    if (formControlValue) {
                        // convert the input form control value
                        var convertedValue = x.id === _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT ? _this.helperService.convertCelciusToFahrenheit(formControlValue) : _this.helperService.convertFahrenheitToCelcius(formControlValue);
                        formControl.setValue(convertedValue);
                    }
                }
            }
        });
    };
    // on input change event
    NumericTextboxComponent.prototype.onChangeEvent = function (event) {
    };
    // focus out event
    NumericTextboxComponent.prototype.onFocusOutEvent = function (event) {
        this.focusOut.emit(event);
    };
    NumericTextboxComponent.ɵfac = function NumericTextboxComponent_Factory(t) { return new (t || NumericTextboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_5__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_6__["CalculatorToolbarService"])); };
    NumericTextboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumericTextboxComponent, selectors: [["custom-numeric-textbox"]], inputs: { control: "control", form: "form", isFormSubmitted: "isFormSubmitted", isFormatInputOnBlur: "isFormatInputOnBlur", isNegetiveNumber: "isNegetiveNumber", clientErrors: "clientErrors", clientWarnings: "clientWarnings", serverErrors: "serverErrors", serverWarnings: "serverWarnings", maxLength: "maxLength", decimalPoint: "decimalPoint", isUpdateDecimalPointOnUnitChange: "isUpdateDecimalPointOnUnitChange" }, outputs: { valueChange: "valueChange", focusOut: "focusOut" }, decls: 2, vars: 11, consts: [[3, "formGroup"], ["numeric", "", "type", "control.sub_type", 1, "form-control", 3, "maxLength", "decimals", "isFormatInputOnBlur", "isNegetiveNumber", "formControl", "placeholder", "id", "ngClass", "focusout"]], template: function NumericTextboxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function NumericTextboxComponent_Template_input_focusout_1_listener($event) { return ctx.onFocusOutEvent($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxLength", ctx.maxLength)("decimals", ctx.decimalPoint)("isFormatInputOnBlur", ctx.isFormatInputOnBlur)("isNegetiveNumber", ctx.isNegetiveNumber)("formControl", ctx.getFormControl())("placeholder", ctx.control.placeholder)("id", ctx.control.key)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isFormSubmitted && !ctx.isValid));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_8__["NumericDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbS1jb250cm9scy9udW1lcmljLXRleHRib3gvbnVtZXJpYy10ZXh0Ym94LmNvbXBvbmVudC5jc3MifQ== */"], encapsulation: 2 });
    return NumericTextboxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumericTextboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'custom-numeric-textbox',
                templateUrl: './numeric-textbox.component.html',
                styleUrls: ['./numeric-textbox.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"] }, { type: _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }, { type: _temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_5__["TemperatureButtonService"] }, { type: _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_6__["CalculatorToolbarService"] }]; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFormSubmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFormatInputOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isNegetiveNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clientErrors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clientWarnings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], serverErrors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], serverWarnings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], decimalPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isUpdateDecimalPointOnUnitChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], focusOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts":
/*!***********************************************************************************************!*\
  !*** ./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SwitchButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchButtonComponent", function() { return SwitchButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var _c0 = function (a0) { return { "active": a0 }; };
function SwitchButtonComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitchButtonComponent_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var switchOptionIndex_r2 = ctx.index; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSwitchClicked(switchOptionIndex_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var switchOption_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, switchOption_r1.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](switchOption_r1.display_title);
} }
var SwitchButtonComponent = /** @class */ (function () {
    function SwitchButtonComponent() {
        this.switchClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SwitchButtonComponent.prototype.ngOnInit = function () {
    };
    SwitchButtonComponent.prototype.onSwitchClicked = function (switchIndex) {
        this.setActive(switchIndex);
        this.switchClicked.emit(this.switchOptions[switchIndex]);
    };
    SwitchButtonComponent.prototype.setActive = function (switchIndex) {
        for (var index = 0; index < this.switchOptions.length; index++) {
            this.switchOptions[index].isActive = false;
        }
        this.switchOptions[switchIndex].isActive = true;
    };
    SwitchButtonComponent.ɵfac = function SwitchButtonComponent_Factory(t) { return new (t || SwitchButtonComponent)(); };
    SwitchButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwitchButtonComponent, selectors: [["custom-switch-button"]], inputs: { switchOptions: "switchOptions" }, outputs: { switchClicked: "switchClicked" }, decls: 3, vars: 1, consts: [[1, "switch-btn-section", "pull-left"], [1, "pull-left", "switch-btn-section__option"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]], template: function SwitchButtonComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SwitchButtonComponent_span_2_Template, 2, 4, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.switchOptions);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".switch-btn-section[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n    color: #ffffff;\n    background: #329f59;\n}\n\n.switch-btn-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    width: 60px;\n    text-align: center;\n}\n\n.switch-btn-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    float: left;\n    padding: 6px 8px;\n    color: #777;\n    background: #eee;\n    cursor: pointer;\n    width: 85px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9tLWNvbnRyb2xzL3N3aXRjaC1idXR0b24vc3dpdGNoLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiY2xpZW50L2FwcC9zaGFyZWQvY29tcG9uZW50cy9jdXN0b20tY29udHJvbHMvc3dpdGNoLWJ1dHRvbi9zd2l0Y2gtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoLWJ0bi1zZWN0aW9uIHNwYW4uYWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMzI5ZjU5O1xufVxuXG4uc3dpdGNoLWJ0bi1zZWN0aW9uIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN3aXRjaC1idG4tc2VjdGlvbiBzcGFuIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
    return SwitchButtonComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'custom-switch-button',
                templateUrl: './switch-button.component.html',
                styleUrls: ['./switch-button.component.css']
            }]
    }], function () { return []; }, { switchOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], switchClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/components/custom-controls/textbox/textbox.component.ts":
/*!***********************************************************************************!*\
  !*** ./client/app/shared/components/custom-controls/textbox/textbox.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxComponent", function() { return TextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




var _c0 = function (a0) { return { "is-invalid": a0 }; };
var TextboxComponent = /** @class */ (function () {
    function TextboxComponent() {
        this.decimalPoint = 2;
        this.isFormSubmitted = false;
    }
    Object.defineProperty(TextboxComponent.prototype, "f", {
        // @Input() columnSize: number = 12;
        // convenience getter for easy access to form fields
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextboxComponent.prototype, "isValid", {
        // getter property to get the control validity
        get: function () {
            return this.form.controls[this.control.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    TextboxComponent.prototype.ngOnInit = function () {
    };
    // return form control
    TextboxComponent.prototype.getFormControl = function () {
        return this.form.get(this.control.key);
    };
    TextboxComponent.ɵfac = function TextboxComponent_Factory(t) { return new (t || TextboxComponent)(); };
    TextboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextboxComponent, selectors: [["custom-textbox"]], inputs: { decimalPoint: "decimalPoint", control: "control", form: "form", isFormSubmitted: "isFormSubmitted" }, decls: 2, vars: 7, consts: [[3, "formGroup"], ["type", "control.sub_type", 1, "form-control", 3, "formControl", "placeholder", "id", "ngClass"]], template: function TextboxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.getFormControl())("placeholder", ctx.control.placeholder)("id", ctx.control.key)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isFormSubmitted && !ctx.isValid));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbS1jb250cm9scy90ZXh0Ym94L3RleHRib3guY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });
    return TextboxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'custom-textbox',
                templateUrl: './textbox.component.html',
                styleUrls: ['./textbox.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { decimalPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFormSubmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/components/dash-size-details/dash-size-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./client/app/shared/components/dash-size-details/dash-size-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DashSizeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashSizeDetailsComponent", function() { return DashSizeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _dash_size_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-size-details.service */ "./client/app/shared/components/dash-size-details/dash-size-details.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
// core imports

// application imports






function DashSizeDetailsComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashSizeDetailsComponent_tr_14_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var dashSize_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.rowClick(dashSize_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dashSize_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.pad(dashSize_r1.dashSize, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dashSize_r1.oringCrossSectionSize.toFixed(ctx_r0.fixedTo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dashSize_r1.oringDiameterSize.toFixed(ctx_r0.fixedTo));
} }
var DashSizeDetailsComponent = /** @class */ (function () {
    function DashSizeDetailsComponent(activeModal, unitButtonService, dashSizeDetailsService) {
        this.activeModal = activeModal;
        this.unitButtonService = unitButtonService;
        this.dashSizeDetailsService = dashSizeDetailsService;
        this.dashSizeRowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fixedTo = 3;
        this.unitChangeUpdateCalculator();
        this.dashSizeChange();
    }
    DashSizeDetailsComponent.prototype.ngOnInit = function () {
        this.setFixedTo();
    };
    // set decimal places value
    DashSizeDetailsComponent.prototype.setFixedTo = function () {
        if (this.unitButtonService.getCurrentUnitValue.id === _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["Units"].INCH) {
            this.fixedTo = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["UnitsDecimalPlaces"].INCH;
        }
        else if (this.unitButtonService.getCurrentUnitValue.id === _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["Units"].MILLI_METER) {
            this.fixedTo = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["UnitsDecimalPlaces"].MILLI_METER;
        }
        else {
            this.fixedTo = _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["UnitsDecimalPlaces"].INCH;
        }
    };
    DashSizeDetailsComponent.prototype.pad = function (n, length) {
        n = n * -1;
        var len = length - ('' + n).length;
        var a = (len > 0 ? new Array(++len).join('0') : '') + n;
        return '-' + a;
    };
    // unit change update output values handler
    DashSizeDetailsComponent.prototype.unitChangeUpdateCalculator = function () {
        var _this = this;
        // unit switch button click/change subscription
        this.unitChangeSubscription = this.unitButtonService.unit$.subscribe(function (x) {
            if (x) {
                _this.setFixedTo();
            }
        });
    };
    // dash size update 
    DashSizeDetailsComponent.prototype.dashSizeChange = function () {
        var _this = this;
        this.dashSizeDetailSubscription = this.dashSizeDetailsService.dashSizeDetail$.subscribe(function (x) {
            if (x) {
                _this.dashSizes = x;
            }
        });
    };
    DashSizeDetailsComponent.prototype.rowClick = function (data) {
        this.dashSizeRowClick.emit(data);
    };
    DashSizeDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.unitChangeSubscription) {
            this.unitChangeSubscription.unsubscribe();
        }
        if (this.dashSizeDetailSubscription) {
            this.dashSizeDetailSubscription.unsubscribe();
        }
    };
    DashSizeDetailsComponent.ɵfac = function DashSizeDetailsComponent_Factory(t) { return new (t || DashSizeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dash_size_details_service__WEBPACK_IMPORTED_MODULE_4__["DashSizeDetailsService"])); };
    DashSizeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashSizeDetailsComponent, selectors: [["app-dash-size-details"]], outputs: { dashSizeRowClick: "dashSizeRowClick" }, decls: 18, vars: 1, consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-body"], ["aria-describedby", "O-ring and Gland Size", 1, "table", "table-bordered", "table-fixed"], ["scope", "col"], [3, "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [3, "click"]], template: function DashSizeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "O-ring and Gland Size");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dash Size");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "O-ring Cross Section Size");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "O-ring Diameter Size");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashSizeDetailsComponent_tr_14_Template, 7, 3, "tr", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashSizeDetailsComponent_Template_button_click_16_listener() { return ctx.activeModal.close("Close click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashSizes.data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".modal-body[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 15px;\n    height: 400px;\n    overflow-y: scroll;\n}\n\ntbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\ntbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover {\n    background-color: #add8e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGFzaC1zaXplLWRldGFpbHMvZGFzaC1zaXplLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiY2xpZW50L2FwcC9zaGFyZWQvY29tcG9uZW50cy9kYXNoLXNpemUtZGV0YWlscy9kYXNoLXNpemUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG50Ym9keT50ciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50Ym9keT50cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkZDhlNjtcbn0iXX0= */"] });
    return DashSizeDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashSizeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dash-size-details',
                templateUrl: './dash-size-details.component.html',
                styleUrls: ['./dash-size-details.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }, { type: _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_3__["UnitButtonService"] }, { type: _dash_size_details_service__WEBPACK_IMPORTED_MODULE_4__["DashSizeDetailsService"] }]; }, { dashSizeRowClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/components/dash-size-details/dash-size-details.service.ts":
/*!*************************************************************************************!*\
  !*** ./client/app/shared/components/dash-size-details/dash-size-details.service.ts ***!
  \*************************************************************************************/
/*! exports provided: DashSizeDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashSizeDetailsService", function() { return DashSizeDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
// core imports

// third party imports

// application imports




var DashSizeDetailsService = /** @class */ (function () {
    function DashSizeDetailsService(_http, unitButtonService) {
        this._http = _http;
        this.unitButtonService = unitButtonService;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.env.api;
        this.dashSizeDetailSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        // Expose the observable part of the 
        this.dashSizeDetail$ = this.dashSizeDetailSubject.asObservable();
    }
    Object.defineProperty(DashSizeDetailsService.prototype, "dashSizeDetail", {
        get: function () {
            return this.dashSizeDetailSubject.getValue();
        },
        set: function (val) {
            this.dashSizeDetailSubject.next(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashSizeDetailsService.prototype, "getCurrentORingConfigValue", {
        /* Public Properties   */
        get: function () {
            return this.dashSizeDetail;
        },
        enumerable: true,
        configurable: true
    });
    DashSizeDetailsService.prototype.sendORingSizes = function (val) {
        this.dashSizeDetail = val;
    };
    DashSizeDetailsService.prototype.getDashSizeDetails = function () {
        var currentSelectedUnit = this.unitButtonService.getCurrentUnitValue;
        if (currentSelectedUnit) {
            var body = { unit: currentSelectedUnit.id };
            return this._http.post(this.baseUrl + "oringglandanalysistool/dashSizeDetails", body);
        }
    };
    DashSizeDetailsService.ɵfac = function DashSizeDetailsService_Factory(t) { return new (t || DashSizeDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_4__["UnitButtonService"])); };
    DashSizeDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashSizeDetailsService, factory: DashSizeDetailsService.ɵfac, providedIn: 'root' });
    return DashSizeDetailsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashSizeDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_4__["UnitButtonService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/components/measure-button/measure-button.component.ts":
/*!*********************************************************************************!*\
  !*** ./client/app/shared/components/measure-button/measure-button.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MeasureButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureButtonComponent", function() { return MeasureButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calculator-toolbar/calculator-toolbar.service */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
/* harmony import */ var _custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-controls/switch-button/switch-button.component */ "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts");

// core imorts







var MeasureButtonComponent = /** @class */ (function () {
    function MeasureButtonComponent(helperService, unitButtonService, calculatorToolbarService) {
        this.helperService = helperService;
        this.unitButtonService = unitButtonService;
        this.calculatorToolbarService = calculatorToolbarService;
    }
    Object.defineProperty(MeasureButtonComponent.prototype, "defaultMeasure", {
        get: function () {
            return this._defaultMeasure;
        },
        set: function (value) {
            if (value) {
                this._defaultMeasure = value;
                this.setActiveSwitchButton(this._defaultMeasure);
            }
        },
        enumerable: true,
        configurable: true
    });
    MeasureButtonComponent.prototype.ngOnInit = function () {
        // get measures 
        this.measures = this.helperService.getMeasures();
        // get current active unit
        var activeMeasureIndex = this.measures.findIndex(function (u) { return u.isActive === true; });
        if (activeMeasureIndex > -1) {
            this.currentMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.measures[activeMeasureIndex]);
            this.previousMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.measures[activeMeasureIndex]);
        }
        else {
            // default selected unit
            this.currentMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.measures[0]);
            this.previousMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.measures[0]);
        }
    };
    // unit switch clicked handler
    MeasureButtonComponent.prototype.onMeasureSwitchClicked = function (event) {
        // reset action
        this.resetAction();
        // set previous 
        this.previousMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.currentMeasure);
        // set changed value to current
        this.currentMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event);
        if (this.previousMeasure && this.previousMeasure.id !== event.id) {
            // TODO: 
            this.unitButtonService.sendUnitValue(event);
        }
    };
    // onPaste bt click
    // onPaste() {
    //   this.calculatorToolbarService.paste.subscribe((x: any) => {
    //     // reset action
    //     this.resetAction();
    //     if (x) {
    //       this.setActiveMeasureOnPaste(x);
    //     }
    //   });
    // }
    // set active unit switch based on calculated data stored in local storage
    MeasureButtonComponent.prototype.setActiveMeasureOnPaste = function (calculatedData) {
        if (this.measures && this.measures.length > 0 && calculatedData && calculatedData.unit) {
            var activeIndex = this.measures.findIndex(function (u) {
                return u.id === (+calculatedData.unit);
            });
            if (activeIndex > -1) {
                for (var index = 0; index < this.measures.length; index++) {
                    this.measures[index].isActive = false;
                }
                this.measures[activeIndex].isActive = true;
                // set action type
                this.measures[activeIndex].actionType = _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Paste;
                // set previous 
                this.previousMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.currentMeasure);
                // set changed value to current
                this.currentMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.measures[activeIndex]);
                // send unit change
                this.unitButtonService.sendUnitValue(this.measures[activeIndex]);
            }
        }
    };
    MeasureButtonComponent.prototype.setActiveSwitchButton = function (switchButton) {
        // get measures 
        this.measures = this.helperService.getMeasures();
        var activeIndex = this.measures.findIndex(function (u) {
            return u.id === (+switchButton.id);
        });
        if (activeIndex > -1) {
            for (var index = 0; index < this.measures.length; index++) {
                this.measures[index].isActive = false;
            }
            this.measures[activeIndex].isActive = true;
            // set previous 
            this.previousMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.currentMeasure);
            // set changed value to current
            this.currentMeasure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.measures[activeIndex]);
        }
    };
    MeasureButtonComponent.prototype.resetAction = function () {
        // reset action
        for (var index = 0; index < this.measures.length; index++) {
            this.measures[index].actionType = 0;
        }
    };
    MeasureButtonComponent.ɵfac = function MeasureButtonComponent_Factory(t) { return new (t || MeasureButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_4__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_5__["CalculatorToolbarService"])); };
    MeasureButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MeasureButtonComponent, selectors: [["measure-button"]], inputs: { defaultMeasure: "defaultMeasure" }, decls: 1, vars: 1, consts: [[3, "switchOptions", "switchClicked"]], template: function MeasureButtonComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "custom-switch-button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("switchClicked", function MeasureButtonComponent_Template_custom_switch_button_switchClicked_0_listener($event) { return ctx.onMeasureSwitchClicked($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("switchOptions", ctx.measures);
        } }, directives: [_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_6__["SwitchButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lYXN1cmUtYnV0dG9uL21lYXN1cmUtYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */"] });
    return MeasureButtonComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MeasureButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'measure-button',
                templateUrl: './measure-button.component.html',
                styleUrls: ['./measure-button.component.css']
            }]
    }], function () { return [{ type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }, { type: _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_4__["UnitButtonService"] }, { type: _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_5__["CalculatorToolbarService"] }]; }, { defaultMeasure: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/components/tab-nav/tab-nav.component.ts":
/*!*******************************************************************!*\
  !*** ./client/app/shared/components/tab-nav/tab-nav.component.ts ***!
  \*******************************************************************/
/*! exports provided: TabNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabNavComponent", function() { return TabNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
// Core imports







var _c0 = function (a0) { return { exact: a0 }; };
var _c1 = function (a0) { return [a0]; };
function TabNavComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tab_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", tab_r2.childrenModuleRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, tab_r2.pathExactmatch));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, tab_r2.rootModuleRoute));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r2.linkLabel);
} }
function TabNavComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View Chemraz Microsite \u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.chemrazURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var TabNavComponent = /** @class */ (function () {
    function TabNavComponent(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tabMenu = [];
        this.currrentCalculatorGroup = _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["CalculatorGroup"].ORingNGlandCalcs;
        this.isShowChemrazBtn = false;
        this.chemrazURL = 'https://semi-chemraz.gtweed.com/';
        // get route data
        this.activatedRouteSubscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function () {
            if (_this.activatedRoute.snapshot && _this.activatedRoute.snapshot.data) {
                _this.currrentCalculatorGroup = _this.activatedRoute.snapshot.data.calculatorGroup;
            }
        });
    }
    TabNavComponent.prototype.ngOnDestroy = function () {
        if (this.activatedRouteSubscription) {
            this.activatedRouteSubscription.unsubscribe();
        }
    };
    TabNavComponent.prototype.ngOnInit = function () {
    };
    TabNavComponent.prototype.redirectTo = function (redirectPath) {
    };
    TabNavComponent.ɵfac = function TabNavComponent_Factory(t) { return new (t || TabNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    TabNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabNavComponent, selectors: [["app-tab-nav"]], inputs: { tabMenu: "tabMenu" }, decls: 6, vars: 2, consts: [[1, "row"], [1, "col-md-12", "regulator-tabs"], [1, "regulator-tabs__main"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["class", "view-chemraz-btn", 3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [3, "routerLink"], [1, "view-chemraz-btn", 3, "href"]], template: function TabNavComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TabNavComponent_li_4_Template, 3, 8, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TabNavComponent_a_5_Template, 2, 1, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowChemrazBtn);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".regulator-tabs__main[_ngcontent-%COMP%] {\n    \n    float: left;\n    width: 100%;\n}\n\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: block;\n    border-bottom: 1px solid #ddd;\n    clear: both;\n}\n\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    \n    position: relative;\n    display: inline-block;\n}\n\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n    background: #fff;\n    z-index: 1;\n}\n\n\n\n.regulator-tabs__main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n    position: relative;\n    text-decoration: none;\n    display: block;\n    text-transform: uppercase;\n    font-weight: 600;\n    \n    \n    \n    color: #757575;\n}\n\n.regulator-tabs__main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #329f59;\n}\n\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #225a8a;\n    position: relative;\n    background: #eee;\n}\n\n.regulator-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n    background: #ffffff;\n}\n\n.regulator-tabs[_ngcontent-%COMP%]   a.view-chemraz-btn[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    background: #225a8a;\n    color: #fff;\n    font-size: 16px;\n    z-index: 9;\n}\n\n.regulator-tabs[_ngcontent-%COMP%]   a.view-chemraz-btn[_ngcontent-%COMP%]:hover, .regulator-tabs[_ngcontent-%COMP%]   a.view-chemraz-btn[_ngcontent-%COMP%]:focus {\n    text-decoration: none;\n    background: #10385a;\n}\n\n@media (min-width: 700px) {\n    .regulator-tabs[_ngcontent-%COMP%]   a.view-chemraz-btn[_ngcontent-%COMP%] {\n        position: absolute;\n        right: 15px;\n        top: -8px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFiLW5hdi90YWItbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBLE9BQU87O0FBRVA7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoiY2xpZW50L2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWItbmF2L3RhYi1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWd1bGF0b3ItdGFic19fbWFpbiB7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogNDBweDsgKi9cbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ3VsYXRvci10YWJzIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4ucmVndWxhdG9yLXRhYnMgdWwgbGkge1xuICAgIC8qIG1hcmdpbjogMCA1cHggLTFweDsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucmVndWxhdG9yLXRhYnMgdWwgbGkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi8qdjIuMSovXG5cbi5yZWd1bGF0b3ItdGFic19fbWFpbiBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDsgKi9cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAqL1xuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjOyAqL1xuICAgIGNvbG9yOiAjNzU3NTc1O1xufVxuXG4ucmVndWxhdG9yLXRhYnNfX21haW4gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMjlmNTk7XG59XG5cbi5yZWd1bGF0b3ItdGFicyB1bCBsaS5hY3RpdmUgYSB7XG4gICAgY29sb3I6ICMyMjVhOGE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5yZWd1bGF0b3ItdGFicyB1bCBsaS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5yZWd1bGF0b3ItdGFicyBhLnZpZXctY2hlbXJhei1idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICMyMjVhOGE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHotaW5kZXg6IDk7XG59XG5cbi5yZWd1bGF0b3ItdGFicyBhLnZpZXctY2hlbXJhei1idG46aG92ZXIsIC5yZWd1bGF0b3ItdGFicyBhLnZpZXctY2hlbXJhei1idG46Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMTAzODVhO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAucmVndWxhdG9yLXRhYnMgYS52aWV3LWNoZW1yYXotYnRuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgdG9wOiAtOHB4O1xuICAgIH1cbn0iXX0= */"] });
    return TabNavComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab-nav',
                templateUrl: './tab-nav.component.html',
                styleUrls: ['./tab-nav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { tabMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/components/temperature-button/temperature-button.component.ts":
/*!*****************************************************************************************!*\
  !*** ./client/app/shared/components/temperature-button/temperature-button.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TemperatureButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureButtonComponent", function() { return TemperatureButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _temperature_button_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calculator-toolbar/calculator-toolbar.service */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
/* harmony import */ var _custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-controls/switch-button/switch-button.component */ "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts");

// core imports







var TemperatureButtonComponent = /** @class */ (function () {
    // constructor
    function TemperatureButtonComponent(helperService, temperatureButtonService, calculatorToolbarService) {
        this.helperService = helperService;
        this.temperatureButtonService = temperatureButtonService;
        this.calculatorToolbarService = calculatorToolbarService;
        this.onPaste();
    }
    // oninit of component
    TemperatureButtonComponent.prototype.ngOnInit = function () {
        // temperature object
        this.temperature = this.helperService.getTemperature();
        // get current active unit
        var activeTemperatureIndex = this.temperature.findIndex(function (u) { return u.isActive === true; });
        if (activeTemperatureIndex > -1) {
            this.currentTemperature = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.temperature[activeTemperatureIndex]);
            this.previousTemperature = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.temperature[activeTemperatureIndex]);
        }
        else {
            // default selected temperature
            this.currentTemperature = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.temperature[0]);
            this.previousTemperature = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.temperature[0]);
        }
    };
    // temperture switch clicked handler
    TemperatureButtonComponent.prototype.onTemperatureSwitchClicked = function (event) {
        // reset action
        this.resetAction();
        // set previous 
        this.previousTemperature = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.currentTemperature);
        // set changed value to current
        this.currentTemperature = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event);
        if (this.previousTemperature && this.previousTemperature.id !== event.id) {
            this.temperatureButtonService.sendTemperatureValue(event);
        }
    };
    // onPaste bt click
    TemperatureButtonComponent.prototype.onPaste = function () {
        var _this = this;
        this.calculatorToolbarService.paste.subscribe(function (x) {
            // reset action
            _this.resetAction();
            if (x) {
                _this.setActiveTemperatureOnPaste(x);
            }
        });
    };
    // set active unitTemp switch based on calculated data stored in local storage
    TemperatureButtonComponent.prototype.setActiveTemperatureOnPaste = function (calculatedData) {
        if (this.temperature && this.temperature.length > 0 && calculatedData && calculatedData.unitTemp) {
            var activeIndex = this.temperature.findIndex(function (u) {
                return u.id === (+calculatedData.unitTemp);
            });
            if (activeIndex > -1) {
                for (var index = 0; index < this.temperature.length; index++) {
                    this.temperature[index].isActive = false;
                }
                // set action type
                this.temperature[activeIndex].actionType = _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Paste;
                // set active button
                this.temperature[activeIndex].isActive = true;
                // set previous 
                this.previousTemperature = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.currentTemperature);
                // set changed value to current
                this.currentTemperature = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.temperature[activeIndex]);
                // send unitTemp change
                this.temperatureButtonService.sendTemperatureValue(this.temperature[activeIndex]);
            }
        }
    };
    TemperatureButtonComponent.prototype.resetAction = function () {
        // reset action
        for (var index = 0; index < this.temperature.length; index++) {
            this.temperature[index].actionType = 0;
        }
    };
    TemperatureButtonComponent.ɵfac = function TemperatureButtonComponent_Factory(t) { return new (t || TemperatureButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_temperature_button_service__WEBPACK_IMPORTED_MODULE_4__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_5__["CalculatorToolbarService"])); };
    TemperatureButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TemperatureButtonComponent, selectors: [["temperature-button"]], decls: 1, vars: 1, consts: [[3, "switchOptions", "switchClicked"]], template: function TemperatureButtonComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "custom-switch-button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("switchClicked", function TemperatureButtonComponent_Template_custom_switch_button_switchClicked_0_listener($event) { return ctx.onTemperatureSwitchClicked($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("switchOptions", ctx.temperature);
        } }, directives: [_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_6__["SwitchButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RlbXBlcmF0dXJlLWJ1dHRvbi90ZW1wZXJhdHVyZS1idXR0b24uY29tcG9uZW50LmNzcyJ9 */"] });
    return TemperatureButtonComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TemperatureButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'temperature-button',
                templateUrl: './temperature-button.component.html',
                styleUrls: ['./temperature-button.component.css']
            }]
    }], function () { return [{ type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }, { type: _temperature_button_service__WEBPACK_IMPORTED_MODULE_4__["TemperatureButtonService"] }, { type: _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_5__["CalculatorToolbarService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/components/temperature-button/temperature-button.service.ts":
/*!***************************************************************************************!*\
  !*** ./client/app/shared/components/temperature-button/temperature-button.service.ts ***!
  \***************************************************************************************/
/*! exports provided: TemperatureButtonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureButtonService", function() { return TemperatureButtonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/constants */ "./client/app/shared/helpers/constants.ts");

// core imports

// third party imports



var TemperatureButtonService = /** @class */ (function () {
    function TemperatureButtonService() {
        this.initialValue = { id: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].CELCIUS, title: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"][_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Temperature"].CELCIUS], display_title: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["TemperatureCelsiusCode"].HTML_CODE, display_Short_title: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["TemperatureCelsiusCode"].HTML_CODE, isActive: true, actionType: 0 };
        this.temperatureSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.initialValue);
        this.temperature$ = this.temperatureSubject.asObservable();
    }
    Object.defineProperty(TemperatureButtonService.prototype, "temperature", {
        /* private Properties */
        // service state management property "unit"
        // the getter will return the last value emitted unitSubject subject
        get: function () {
            return this.temperatureSubject.getValue();
        },
        // assigning a value to unit will push it onto the observable 
        // and down to all of its subsribers (ex: this.unit = {})
        set: function (val) {
            this.temperatureSubject.next(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TemperatureButtonService.prototype, "getCurrentTemperatureValue", {
        // get config value directly using behaviour subject
        get: function () {
            return this.temperature;
        },
        enumerable: true,
        configurable: true
    });
    // send oring config
    // assigning a value to unit will push it onto the observable 
    // and down to all of its subsribers (ex: this.unit = {})
    TemperatureButtonService.prototype.sendTemperatureValue = function (val) {
        // this.oRingConfigSubject.next(val);
        this.temperature = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, val), { isActive: true });
    };
    TemperatureButtonService.ɵfac = function TemperatureButtonService_Factory(t) { return new (t || TemperatureButtonService)(); };
    TemperatureButtonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TemperatureButtonService, factory: TemperatureButtonService.ɵfac, providedIn: 'root' });
    return TemperatureButtonService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TemperatureButtonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/shared/components/toasts-container/toast-service.ts":
/*!************************************************************************!*\
  !*** ./client/app/shared/components/toasts-container/toast-service.ts ***!
  \************************************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var ToastService = /** @class */ (function () {
    function ToastService() {
        this.toasts = [];
    }
    ToastService.prototype.show = function (textOrTpl, options) {
        if (options === void 0) { options = {}; }
        this.toasts.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ textOrTpl: textOrTpl }, options));
    };
    ToastService.prototype.showSucces = function (textOrTpl, options) {
        if (options === void 0) { options = { classname: 'bg-success text-light', delay: 10000 }; }
        var paramOptions;
        paramOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, paramOptions), options);
        this.toasts.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ textOrTpl: textOrTpl }, paramOptions));
    };
    ToastService.prototype.showError = function (textOrTpl, options) {
        if (options === void 0) { options = { classname: 'bg-danger text-light', delay: 15000 }; }
        // this.toasts.push({ textOrTpl, ...options });
        var paramOptions;
        paramOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, paramOptions), options);
        this.toasts.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ textOrTpl: textOrTpl }, paramOptions));
    };
    ToastService.prototype.remove = function (toast) {
        this.toasts = this.toasts.filter(function (t) { return t !== toast; });
    };
    ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
    ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
    return ToastService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/shared/components/toasts-container/toasts-container.component.ts":
/*!*************************************************************************************!*\
  !*** ./client/app/shared/components/toasts-container/toasts-container.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ToastsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastsContainerComponent", function() { return ToastsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast-service */ "./client/app/shared/components/toasts-container/toast-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");





function ToastsContainerComponent_ngb_toast_0_ng_template_1_ng_template_0_Template(rf, ctx) { }
function ToastsContainerComponent_ngb_toast_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastsContainerComponent_ngb_toast_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
} }
function ToastsContainerComponent_ngb_toast_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toast_r1.textOrTpl);
} }
function ToastsContainerComponent_ngb_toast_0_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastsContainerComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var toast_r1 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastsContainerComponent_ngb_toast_0_ng_template_1_Template, 1, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastsContainerComponent_ngb_toast_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var toast_r1 = ctx.$implicit;
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.classname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", true)("delay", toast_r1.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
} }
var ToastsContainerComponent = /** @class */ (function () {
    function ToastsContainerComponent(toastService) {
        this.toastService = toastService;
    }
    ToastsContainerComponent.prototype.ngOnInit = function () {
    };
    ToastsContainerComponent.prototype.isTemplate = function (toast) { return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]; };
    ToastsContainerComponent.ɵfac = function ToastsContainerComponent_Factory(t) { return new (t || ToastsContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
    ToastsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastsContainerComponent, selectors: [["app-toasts-container"]], hostVars: 2, hostBindings: function ToastsContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngb-toasts", true);
        } }, decls: 1, vars: 1, consts: [[3, "class", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "autohide", "delay", "hide"], [3, "ngIf", "ngIfElse"], ["text", ""], [3, "ngTemplateOutlet"]], template: function ToastsContainerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastsContainerComponent_ngb_toast_0_Template, 4, 6, "ngb-toast", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvYXN0cy1jb250YWluZXIvdG9hc3RzLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"] });
    return ToastsContainerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toasts-container',
                templateUrl: './toasts-container.component.html',
                styleUrls: ['./toasts-container.component.css'],
                host: { '[class.ngb-toasts]': 'true' }
            }]
    }], function () { return [{ type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/components/unit-button/unit-button.component.ts":
/*!***************************************************************************!*\
  !*** ./client/app/shared/components/unit-button/unit-button.component.ts ***!
  \***************************************************************************/
/*! exports provided: UnitButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitButtonComponent", function() { return UnitButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/helper.service */ "./client/app/shared/services/helper.service.ts");
/* harmony import */ var _unit_button_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calculator-toolbar/calculator-toolbar.service */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
/* harmony import */ var _custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-controls/switch-button/switch-button.component */ "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts");

// core imorts







var UnitButtonComponent = /** @class */ (function () {
    function UnitButtonComponent(helperService, unitButtonService, calculatorToolbarService) {
        this.helperService = helperService;
        this.unitButtonService = unitButtonService;
        this.calculatorToolbarService = calculatorToolbarService;
        this.onPaste();
    }
    UnitButtonComponent.prototype.ngOnInit = function () {
        // get units 
        this.units = this.helperService.getUnits();
        // get current active unit
        var activeUnitIndex = this.units.findIndex(function (u) { return u.isActive === true; });
        if (activeUnitIndex > -1) {
            this.currentUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.units[activeUnitIndex]);
            this.previousUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.units[activeUnitIndex]);
        }
        else {
            // default selected unit
            this.currentUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.units[0]);
            this.previousUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.units[0]);
        }
    };
    // unit switch clicked handler
    UnitButtonComponent.prototype.onUnitSwitchClicked = function (event) {
        // reset action
        this.resetAction();
        // set previous 
        this.previousUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.currentUnit);
        // set changed value to current
        this.currentUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event);
        if (this.previousUnit && this.previousUnit.id !== event.id) {
            this.unitButtonService.sendUnitValue(event);
        }
    };
    // onPaste bt click
    UnitButtonComponent.prototype.onPaste = function () {
        var _this = this;
        this.calculatorToolbarService.paste.subscribe(function (x) {
            // reset action
            _this.resetAction();
            if (x) {
                _this.setActiveUnitOnPaste(x);
            }
        });
    };
    // set active unit switch based on calculated data stored in local storage
    UnitButtonComponent.prototype.setActiveUnitOnPaste = function (calculatedData) {
        if (this.units && this.units.length > 0 && calculatedData && calculatedData.unit) {
            var activeIndex = this.units.findIndex(function (u) {
                return u.id === (+calculatedData.unit);
            });
            if (activeIndex > -1) {
                for (var index = 0; index < this.units.length; index++) {
                    this.units[index].isActive = false;
                }
                this.units[activeIndex].isActive = true;
                // set action type
                this.units[activeIndex].actionType = _helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ActionType"].Paste;
                // set previous 
                this.previousUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.currentUnit);
                // set changed value to current
                this.currentUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.units[activeIndex]);
                // send unit change
                this.unitButtonService.sendUnitValue(this.units[activeIndex]);
            }
        }
    };
    UnitButtonComponent.prototype.resetAction = function () {
        // reset action
        for (var index = 0; index < this.units.length; index++) {
            this.units[index].actionType = 0;
        }
    };
    UnitButtonComponent.ɵfac = function UnitButtonComponent_Factory(t) { return new (t || UnitButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_unit_button_service__WEBPACK_IMPORTED_MODULE_4__["UnitButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_5__["CalculatorToolbarService"])); };
    UnitButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnitButtonComponent, selectors: [["unit-button"]], decls: 1, vars: 1, consts: [[3, "switchOptions", "switchClicked"]], template: function UnitButtonComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "custom-switch-button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("switchClicked", function UnitButtonComponent_Template_custom_switch_button_switchClicked_0_listener($event) { return ctx.onUnitSwitchClicked($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("switchOptions", ctx.units);
        } }, directives: [_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_6__["SwitchButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VuaXQtYnV0dG9uL3VuaXQtYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */"] });
    return UnitButtonComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnitButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'unit-button',
                templateUrl: './unit-button.component.html',
                styleUrls: ['./unit-button.component.css']
            }]
    }], function () { return [{ type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }, { type: _unit_button_service__WEBPACK_IMPORTED_MODULE_4__["UnitButtonService"] }, { type: _calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_5__["CalculatorToolbarService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/components/unit-button/unit-button.service.ts":
/*!*************************************************************************!*\
  !*** ./client/app/shared/components/unit-button/unit-button.service.ts ***!
  \*************************************************************************/
/*! exports provided: UnitButtonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitButtonService", function() { return UnitButtonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/constants */ "./client/app/shared/helpers/constants.ts");

// core imports

// third party imports



var UnitButtonService = /** @class */ (function () {
    function UnitButtonService() {
        this.initialValue = { id: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"].INCH, title: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"][_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Units"][0]], display_title: "Inch", display_Short_title: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["UnitsAbbreviation"].INCH, isActive: true, actionType: 0 };
        this.unitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.initialValue);
        this.unit$ = this.unitSubject.asObservable();
    }
    Object.defineProperty(UnitButtonService.prototype, "unit", {
        /* private Properties */
        // service state management property "unit"
        // the getter will return the last value emitted unitSubject subject
        get: function () {
            return this.unitSubject.getValue();
        },
        // assigning a value to unit will push it onto the observable 
        // and down to all of its subsribers (ex: this.unit = {})
        set: function (val) {
            this.unitSubject.next(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitButtonService.prototype, "getCurrentUnitValue", {
        // get config value directly using behaviour subject
        get: function () {
            return this.unit;
        },
        enumerable: true,
        configurable: true
    });
    // send oring config
    // assigning a value to unit will push it onto the observable 
    // and down to all of its subsribers (ex: this.unit = {})
    UnitButtonService.prototype.sendUnitValue = function (val) {
        this.unit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, val), { isActive: true });
    };
    UnitButtonService.ɵfac = function UnitButtonService_Factory(t) { return new (t || UnitButtonService)(); };
    UnitButtonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnitButtonService, factory: UnitButtonService.ɵfac, providedIn: 'root' });
    return UnitButtonService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnitButtonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/shared/components/user-rules/user-rules.component.ts":
/*!*************************************************************************!*\
  !*** ./client/app/shared/components/user-rules/user-rules.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRulesComponent", function() { return UserRulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



function UserRulesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nominal Compression recommended for 20-25% at operating temperature. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Depending on the operating temperature, ambient compression can be lower(but not below 15%), but with risk of sealing at ambient. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Higher compression than 25% can result in reduced lifetime of product.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nominal Gland Fill recommended for 85-90% at operating temperature. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Higher gland fill can result in reduced lifetime of product. As gland fill reaches 100% premature failure of the o-ring increases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lower gland fill is acceptable, however gland fill improves the sealing force of the o-ring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nominal Stretch recommended is 1- 3% at ambient ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Higher stretch can result in reduced lifetime of product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Less than 1% stretch is acceptable for o-rings under 1\" in diameter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stretch is required to account for o-ring tolerances and prevent bunching up of the o-ring in the groove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Stretch is not calculated at operating temperature. It is encapsulated by the gland, which makes gland fill and compression calculations important for improved lifetime.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Nominal Radial Compression recommended is 0% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRulesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rectangular Glands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "It is recommended for the gland width to be larger than the cross section of the o-ring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "One Dimension to the ID or OD of the gland only, and then dimension the gland width. Otherwise total tolerance stackup is too large and causes problems");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This enables the ID or OD tolerance to only affect stretch or radial compression");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This enables the gland width tolerance to only affect gland fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dovetail Glands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Use the centerline of the gland for machining and stretch calculations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Always call out a top radius. No top radius callout has resulted in cut o-rings during o-ring installation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dovetail Gland Angle recommended 55-66 degrees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Use 66 degrees for ambient up to approximately 140C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Use 55 degrees for temperatures above approximately 140C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "45 degree angles may have to be used for very small cross section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Half Dovetail Glands ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Greene Tweed does not typically recommend the use of these glands due to very high gland fill, which leads to premature seal failures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "For large chamber seals, the Greene Tweed half dovetail gland design allows for thermal expansion and could be used for easier installation compared to standard rectangular glands");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Stretch is calculated similar to full dovetail glands via centerline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "High Gland Fill is usually the result as there is not enough room for a full dovetail gland");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Only stretch is used to hold the seal in place during installation. If the tool is taken down and the o-ring wiped clean, it may not be reusable as the seal has likely grown slightly and therefore stretch may not exists to hold the seal during re installation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Minimum radii is .005\" due to typical machining standards though sharp edges can occur on dovetail grooves if not called out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRulesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All tolerances are based upon AS568A sizes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No tolerance changes allowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Custom o-ring sizes can result in higher tolerances");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "O-ring Cross Sections ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".070 and .103 (-000 and -100 sizes) cross sections not recommended for high temperatures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ".139 (-200 size) cross sections will have sealing limitations as ambient as temperatures increase past 200C. Greene Tweed does offer custom seal designs that can seal both at 300C and at ambient temperatures.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ".210 and .275 (-300 and -400 sizes) cross sections recommended for highest temperatures when the user wants to use standard o-ring sizes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Each material has a maximum temperature limit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { "selected": a0 }; };
var UserRulesComponent = /** @class */ (function () {
    function UserRulesComponent() {
        this.collapsed = false;
        this.collapsedOring = false;
        this.collapsedSizing = false;
    }
    UserRulesComponent.prototype.ngOnInit = function () {
    };
    UserRulesComponent.ɵfac = function UserRulesComponent_Factory(t) { return new (t || UserRulesComponent)(); };
    UserRulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRulesComponent, selectors: [["user-rules"]], decls: 12, vars: 12, consts: [["id", "siderule", 1, "user-rules", "m-b-5"], [1, "user-rules__header", 3, "ngClass", "click"], ["class", "user-rules__rules in", 4, "ngIf"], ["id", "siderules", 1, "user-rules", "m-b-5"], [1, "user-rules__rules", "in"]], template: function UserRulesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRulesComponent_Template_div_click_1_listener() { return ctx.collapsed = !ctx.collapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Parameters");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserRulesComponent_div_3_Template, 26, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRulesComponent_Template_div_click_5_listener() { return ctx.collapsedOring = !ctx.collapsedOring; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gland Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserRulesComponent_div_7_Template, 43, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRulesComponent_Template_div_click_9_listener() { return ctx.collapsedSizing = !ctx.collapsedSizing; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "O-ring Sizing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserRulesComponent_div_11_Template, 18, 0, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.collapsed));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.collapsedOring));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsedOring);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.collapsedSizing));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsedSizing);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".m-b-5[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\n\n.user-rules[_ngcontent-%COMP%] {\n    border: 1px solid #d2d2d2;\n}\n\n.user-rules__header[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    color: #225a8a;\n    font-weight: 400;\n    \n    padding: 10px 15px;\n    background: url(/assets/img/icon_plus_userheading.png) no-repeat right center;\n    cursor: pointer;\n}\n\n.user-rules__header.selected[_ngcontent-%COMP%] {\n    background: url(/assets/img/icon_minus_userheading.png) no-repeat right center;\n    cursor: pointer;\n}\n\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0px;\n    padding: 0px;\n    list-style: none;\n}\n\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%] {\n    padding: 10px 15px 15px;\n}\n\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    background: url(/assets/img/icon_arrow_userlist.png) no-repeat 0px 5px;\n    padding-left: 15px;\n    margin-bottom: 10px;\n    font-size: 0.9rem;\n}\n\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\n    content: \"\";\n    width: 6px;\n    height: 1px;\n    background: #4d4d4d;\n    left: 0;\n    position: absolute;\n    top: 6px;\n}\n\n.user-rules[_ngcontent-%COMP%]   .user-rules__rules[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    position: relative;\n    padding-left: 14px;\n    margin: 9px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1ydWxlcy91c2VyLXJ1bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLDZFQUE2RTtJQUM3RSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEVBQThFO0lBQzlFLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNFQUFzRTtJQUN0RSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJjbGllbnQvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXItcnVsZXMvdXNlci1ydWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tYi01IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi51c2VyLXJ1bGVzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xufVxuXG4udXNlci1ydWxlc19faGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogIzIyNWE4YTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyOyAqL1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbl9wbHVzX3VzZXJoZWFkaW5nLnBuZykgbm8tcmVwZWF0IHJpZ2h0IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyLXJ1bGVzX19oZWFkZXIuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9pY29uX21pbnVzX3VzZXJoZWFkaW5nLnBuZykgbm8tcmVwZWF0IHJpZ2h0IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VyLXJ1bGVzIC51c2VyLXJ1bGVzX19ydWxlcyB1bCwgLnVzZXItcnVsZXMgLnVzZXItcnVsZXNfX3J1bGVzIHVsIGxpIHVsIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnVzZXItcnVsZXMgLnVzZXItcnVsZXNfX3J1bGVzIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTVweDtcbn1cblxuLnVzZXItcnVsZXMgLnVzZXItcnVsZXNfX3J1bGVzIHVsIGxpIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbl9hcnJvd191c2VybGlzdC5wbmcpIG5vLXJlcGVhdCAwcHggNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udXNlci1ydWxlcyAudXNlci1ydWxlc19fcnVsZXMgcDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNnB4O1xufVxuXG4udXNlci1ydWxlcyAudXNlci1ydWxlc19fcnVsZXMgcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICBtYXJnaW46IDlweCAwO1xufSJdfQ== */"] });
    return UserRulesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-rules',
                templateUrl: './user-rules.component.html',
                styleUrls: ['./user-rules.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/shared/directives/numeric.directive.ts":
/*!***********************************************************!*\
  !*** ./client/app/shared/directives/numeric.directive.ts ***!
  \***********************************************************/
/*! exports provided: NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return NumericDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");



var NumericDirective = /** @class */ (function () {
    function NumericDirective(el, control) {
        this.el = el;
        this.control = control;
        this.decimals = 0;
        this.maxLength = 6;
        this.isFormatInputOnBlur = true;
        this.isNegetiveNumber = true;
    }
    NumericDirective.prototype.checkAllowNegative = function (value) {
        if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^-?\d+$/));
        }
        else {
            var regExpString = "^-?\\s*((\\d{0," +
                this.maxLength +
                "}?(\\.\\d{0," + this.decimals +
                "})?)|((\\d*(\\.\\d{1," + this.decimals +
                "}))))\\s*$";
            return String(value).match(new RegExp(regExpString));
        }
    };
    NumericDirective.prototype.check = function (value) {
        if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^\d+$/));
        }
        else {
            var regExpString = "^\\s*((\\d{0," +
                this.maxLength +
                "}?(\\.\\d{0," +
                this.decimals +
                "})?)|((\\d*(\\.\\d{1," +
                this.decimals + "}))))\\s*$";
            return String(value).match(new RegExp(regExpString));
        }
    };
    NumericDirective.prototype.run = function (oldValue, event) {
        var _this = this;
        setTimeout(function () {
            var currentValue = _this.el.nativeElement.value;
            var allowNegative = _this.isNegetiveNumber;
            if (allowNegative) {
                if (!["", "-"].includes(currentValue) &&
                    !_this.checkAllowNegative(currentValue)) {
                    // event.preventDefault();
                    // event.stopPropagation();
                    //  event.stopImmediatePropagation();
                    _this.el.nativeElement.value = oldValue;
                }
            }
            else {
                if (currentValue !== "" && !_this.check(currentValue)) {
                    // // event.preventDefault();
                    _this.el.nativeElement.value = oldValue;
                    // event.stopPropagation();
                    //  event.stopImmediatePropagation();
                }
            }
        });
    };
    NumericDirective.prototype.onKeyDown = function (event) {
        this.run(this.el.nativeElement.value, event);
    };
    NumericDirective.prototype.onPaste = function (event) {
        this.run(this.el.nativeElement.value, event);
    };
    NumericDirective.prototype.onBlur = function (event) {
        if (!this.isFormatInputOnBlur) {
            return;
        }
        var current = this.el.nativeElement.value;
        if (current) {
            // const transformedValue = this.decimalPipe.transform(+(current), `0.${this.decimals}-${this.decimals}`);
            var transformedValue = this.formatNumber(current);
            this.el.nativeElement.value = transformedValue;
            if (this.control.control) {
                this.control.control.setValue(transformedValue);
            }
        }
    };
    // format number to decimal places
    NumericDirective.prototype.formatNumber = function (val) {
        if (!val) {
            return '';
        }
        var clean = val.replace(/[^0-9\.]/g, '');
        var negativeCheck = clean.split('-');
        var decimalCheck = clean.split('.');
        if (negativeCheck[1]) {
            negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
            clean = negativeCheck[0] + '-' + negativeCheck[1];
            if (negativeCheck[0].length > 0) {
                clean = negativeCheck[0];
            }
        }
        if (decimalCheck[1]) {
            decimalCheck[1] = decimalCheck[1].slice(0, this.decimals);
            clean = decimalCheck[0] + '.' + decimalCheck[1];
        }
        else {
            // clean = (+decimalCheck[0]).toFixed(this.decimals);
            clean = decimalCheck[0];
        }
        if (clean) {
            clean = (+clean).toFixed(this.decimals).toString();
        }
        return clean;
    };
    NumericDirective.ɵfac = function NumericDirective_Factory(t) { return new (t || NumericDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"])); };
    NumericDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumericDirective, selectors: [["", "numeric", ""]], hostBindings: function NumericDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NumericDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("paste", function NumericDirective_paste_HostBindingHandler($event) { return ctx.onPaste($event); })("blur", function NumericDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); });
        } }, inputs: { decimals: "decimals", maxLength: "maxLength", isFormatInputOnBlur: "isFormatInputOnBlur", isNegetiveNumber: "isNegetiveNumber" } });
    return NumericDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumericDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[numeric]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"] }]; }, { decimals: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['decimals']
        }], maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['maxLength']
        }], isFormatInputOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isFormatInputOnBlur']
        }], isNegetiveNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isNegetiveNumber']
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keydown", ["$event"]]
        }], onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["paste", ["$event"]]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur', ['$event']]
        }] }); })();


/***/ }),

/***/ "./client/app/shared/helpers/constants.ts":
/*!************************************************!*\
  !*** ./client/app/shared/helpers/constants.ts ***!
  \************************************************/
/*! exports provided: copyPasteObjKey, HTTP_SPINNER, supportEmail, calculatedDataKeys, calculationType, rectangleType, glandType, Validators, ORingTool_InternalVacuumOnly_Validators, ORingTool_DovetailGlandVacuumOnly_Validators, ORingTool_Half_DovetailGlandVacuumOnly_Validators, ORingTool_RactangleExternalVacuumOnly_Validators, GlandSizeCalc_InternalVacuumOnly_Validators, GlandSizeCalc_DovetailGlandVacuumOnly_Validators, GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators, WrArCalc_PressIn_Validators, WrArCalc_FloatingIn_Validators, Units, UnitsAbbreviation, Measures, UnitsDecimalPlaces, Temperature, CalculatorOption, LoggingLevels, CalculatorTypes, CalculatorGroup, ControlType, ControlSubType, TextboxType, TemperatureCelsiusCode, TemperatureFahrenheitCode, DropdownChooseOptionTitle, ButtonActionKeys, ErrorTypes, ActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyPasteObjKey", function() { return copyPasteObjKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_SPINNER", function() { return HTTP_SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportEmail", function() { return supportEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatedDataKeys", function() { return calculatedDataKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculationType", function() { return calculationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectangleType", function() { return rectangleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glandType", function() { return glandType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingTool_InternalVacuumOnly_Validators", function() { return ORingTool_InternalVacuumOnly_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingTool_DovetailGlandVacuumOnly_Validators", function() { return ORingTool_DovetailGlandVacuumOnly_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingTool_Half_DovetailGlandVacuumOnly_Validators", function() { return ORingTool_Half_DovetailGlandVacuumOnly_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingTool_RactangleExternalVacuumOnly_Validators", function() { return ORingTool_RactangleExternalVacuumOnly_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeCalc_InternalVacuumOnly_Validators", function() { return GlandSizeCalc_InternalVacuumOnly_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeCalc_DovetailGlandVacuumOnly_Validators", function() { return GlandSizeCalc_DovetailGlandVacuumOnly_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators", function() { return GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrArCalc_PressIn_Validators", function() { return WrArCalc_PressIn_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrArCalc_FloatingIn_Validators", function() { return WrArCalc_FloatingIn_Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Units", function() { return Units; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsAbbreviation", function() { return UnitsAbbreviation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Measures", function() { return Measures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsDecimalPlaces", function() { return UnitsDecimalPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return Temperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorOption", function() { return CalculatorOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingLevels", function() { return LoggingLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorTypes", function() { return CalculatorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorGroup", function() { return CalculatorGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlType", function() { return ControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlSubType", function() { return ControlSubType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxType", function() { return TextboxType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureCelsiusCode", function() { return TemperatureCelsiusCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureFahrenheitCode", function() { return TemperatureFahrenheitCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownChooseOptionTitle", function() { return DropdownChooseOptionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonActionKeys", function() { return ButtonActionKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() { return ErrorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
var copyPasteObjKey = "lastCalculatedData";
var HTTP_SPINNER = "HTTP_SPINNER";
var supportEmail;
(function (supportEmail) {
    supportEmail["EmailPressIn"] = "athrash@gtweed.com";
    supportEmail["EmailWrAr"] = "tshirayama@gtweed.com";
})(supportEmail || (supportEmail = {}));
var calculatedDataKeys;
(function (calculatedDataKeys) {
    calculatedDataKeys["RECTANGULAR_GLAND_INTERNAL"] = "RECTANGULAR_GLAND_INTERNAL";
    calculatedDataKeys["RECTANGULAR_GLAND_EXTERNAL"] = "RECTANGULAR_GLAND_EXTERNAL";
    calculatedDataKeys["DOVETAIL_GLAND"] = "DOVETAIL_GLAND";
    calculatedDataKeys["HALF_DOVETAIL_GLAND"] = "HALF_DOVETAIL_GLAND";
})(calculatedDataKeys || (calculatedDataKeys = {}));
var calculationType;
(function (calculationType) {
    calculationType["ORING_SIZING"] = "oringSizing";
    calculationType["GLAND_SIZING"] = "glandSizing";
})(calculationType || (calculationType = {}));
var rectangleType;
(function (rectangleType) {
    rectangleType["RECTANGLE_OD"] = "rectangleOD";
})(rectangleType || (rectangleType = {}));
var glandType;
(function (glandType) {
    glandType["RECTANGLE"] = "rectangle";
    glandType["DOVETAIL"] = "dovetail";
    glandType["HALF_DOVETAIL"] = "halfDovetail";
})(glandType || (glandType = {}));
var Validators;
(function (Validators) {
    Validators["NUMBER_VALIDATOR"] = "NUMBER_VALIDATOR";
})(Validators || (Validators = {}));
var ORingTool_InternalVacuumOnly_Validators;
(function (ORingTool_InternalVacuumOnly_Validators) {
    ORingTool_InternalVacuumOnly_Validators["GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION"] = "GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION";
    ORingTool_InternalVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
    ORingTool_InternalVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_VALIDATION"] = "BOTTOM_RADII_NOMINAL_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION"] = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["O_RING_ID_VALIDATION"] = "O_RING_ID_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["LESS_THAN_ZERO_VALIDATION"] = "LESS_THAN_ZERO_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["TOLERANCE_VALIDATION"] = "TOLERANCE_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
    ORingTool_InternalVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
})(ORingTool_InternalVacuumOnly_Validators || (ORingTool_InternalVacuumOnly_Validators = {}));
var ORingTool_DovetailGlandVacuumOnly_Validators;
(function (ORingTool_DovetailGlandVacuumOnly_Validators) {
    ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_NOMINAL_VALIDATION"] = "GLAND_ANGLE_NOMINAL_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_MIN_VALIDATION"] = "GLAND_ANGLE_MIN_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_MAX_VALIDATION"] = "GLAND_ANGLE_MAX_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_NOMINAL_VALIDATION"] = "GLAND_WIDTH_NOMINAL_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_MIN_VALIDATION"] = "GLAND_WIDTH_MIN_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_MAX_VALIDATION"] = "GLAND_WIDTH_MAX_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
    ORingTool_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
    ORingTool_DovetailGlandVacuumOnly_Validators["TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION"] = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION"] = "O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["LESS_THAN_ZERO_VALIDATION"] = "LESS_THAN_ZERO_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["TOLERANCE_VALIDATION"] = "TOLERANCE_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
    ORingTool_DovetailGlandVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
})(ORingTool_DovetailGlandVacuumOnly_Validators || (ORingTool_DovetailGlandVacuumOnly_Validators = {}));
var ORingTool_Half_DovetailGlandVacuumOnly_Validators;
(function (ORingTool_Half_DovetailGlandVacuumOnly_Validators) {
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_NOMINAL_VALIDATION"] = "GLAND_ANGLE_NOMINAL_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_MIN_VALIDATION"] = "GLAND_ANGLE_MIN_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_ANGLE_MAX_VALIDATION"] = "GLAND_ANGLE_MAX_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_NOMINAL_VALIDATION"] = "GLAND_WIDTH_NOMINAL_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_MIN_VALIDATION"] = "GLAND_WIDTH_MIN_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["GLAND_WIDTH_MAX_VALIDATION"] = "GLAND_WIDTH_MAX_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION"] = "BOTTOM_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "TOP_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_NOMINAL_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_MIN_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION"] = "TOP_RADII_MAX_NON_PHYSICAL_GLAND_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION"] = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION"] = "O_RING_CROSS_SECTION_NOMINAL_STADARD_AS568A_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["LESS_THAN_ZERO_VALIDATION"] = "LESS_THAN_ZERO_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["TOLERANCE_VALIDATION"] = "TOLERANCE_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
    ORingTool_Half_DovetailGlandVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
})(ORingTool_Half_DovetailGlandVacuumOnly_Validators || (ORingTool_Half_DovetailGlandVacuumOnly_Validators = {}));
var ORingTool_RactangleExternalVacuumOnly_Validators;
(function (ORingTool_RactangleExternalVacuumOnly_Validators) {
    ORingTool_RactangleExternalVacuumOnly_Validators["GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION"] = "GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION";
    ORingTool_RactangleExternalVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT"] = "BOTTOM_RADII_NOMINAL_LARGER_THAN_BOTTOM_RADII_MIN_LIMIT";
    ORingTool_RactangleExternalVacuumOnly_Validators["BOTTOM_RADII_NOMINAL_VALIDATION"] = "BOTTOM_RADII_NOMINAL_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION"] = "O_RING_CROSS_SECTION_LESS_THAN_GLAND_DEPTH_NOMINAL_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["O_RING_ID_VALIDATION"] = "O_RING_ID_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["LESS_THAN_ZERO_VALIDATION"] = "LESS_THAN_ZERO_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["TOLERANCE_VALIDATION"] = "TOLERANCE_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MIN_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION"] = "MAX_VALUE_RESPECT_TO_NOMINAL_VALUE_VALIDATION";
    ORingTool_RactangleExternalVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
})(ORingTool_RactangleExternalVacuumOnly_Validators || (ORingTool_RactangleExternalVacuumOnly_Validators = {}));
var GlandSizeCalc_InternalVacuumOnly_Validators;
(function (GlandSizeCalc_InternalVacuumOnly_Validators) {
    GlandSizeCalc_InternalVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
    GlandSizeCalc_InternalVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
    GlandSizeCalc_InternalVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
    GlandSizeCalc_InternalVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
})(GlandSizeCalc_InternalVacuumOnly_Validators || (GlandSizeCalc_InternalVacuumOnly_Validators = {}));
var GlandSizeCalc_DovetailGlandVacuumOnly_Validators;
(function (GlandSizeCalc_DovetailGlandVacuumOnly_Validators) {
    GlandSizeCalc_DovetailGlandVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
    GlandSizeCalc_DovetailGlandVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
    GlandSizeCalc_DovetailGlandVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
    GlandSizeCalc_DovetailGlandVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
})(GlandSizeCalc_DovetailGlandVacuumOnly_Validators || (GlandSizeCalc_DovetailGlandVacuumOnly_Validators = {}));
var GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators;
(function (GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators) {
    GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators["OPERATING_TEMPERATURE_VALIDATION"] = "OPERATING_TEMPERATURE_VALIDATION";
    GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators["O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION"] = "O_RING_CROSS_NOMINAL_AS568A_STANDARD_SECTION_VALIDATION";
    GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators["O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION"] = "O_RING_ID_NOMINAL_SHOULD_BE_LESS_THAN_MAX_ORING_ID_VALUE_VALIDATION";
    GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators["ORING_ID_AS568A_STANDARD_WARNING"] = "ORING_ID_AS568A_STANDARD_WARNING";
})(GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators || (GlandSizeCalc_HalfDovetailGlandVacuumOnly_Validators = {}));
// WrAr
var WrArCalc_PressIn_Validators;
(function (WrArCalc_PressIn_Validators) {
    WrArCalc_PressIn_Validators["CLEARANCE_VALIDATION"] = "CLEARANCE_VALIDATION";
    WrArCalc_PressIn_Validators["SERVICE_STORAGE_TEMPERATURE_MIN"] = "SERVICE_STORAGE_TEMPERATURE_MIN";
    WrArCalc_PressIn_Validators["SERVICE_STORAGE_TEMPERATURE_MAX"] = "SERVICE_STORAGE_TEMPERATURE_MAX";
    WrArCalc_PressIn_Validators["STATIONARY_ELEMENT_ID_MAX"] = "STATIONARY_ELEMENT_ID_MAX";
    WrArCalc_PressIn_Validators["ROTATING_ELEMENT_OD_MAX"] = "ROTATING_ELEMENT_OD_MAX";
    WrArCalc_PressIn_Validators["SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN"] = "SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN";
    WrArCalc_PressIn_Validators["SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX"] = "SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX";
    WrArCalc_PressIn_Validators["STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN"] = "STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN";
    WrArCalc_PressIn_Validators["STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX"] = "STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX";
})(WrArCalc_PressIn_Validators || (WrArCalc_PressIn_Validators = {}));
var WrArCalc_FloatingIn_Validators;
(function (WrArCalc_FloatingIn_Validators) {
    WrArCalc_FloatingIn_Validators["CLEARANCE_VALIDATION"] = "CLEARANCE_VALIDATION";
    WrArCalc_FloatingIn_Validators["SERVICE_STORAGE_TEMPERATURE_MIN"] = "SERVICE_STORAGE_TEMPERATURE_MIN";
    WrArCalc_FloatingIn_Validators["SERVICE_STORAGE_TEMPERATURE_MAX"] = "SERVICE_STORAGE_TEMPERATURE_MAX";
    WrArCalc_FloatingIn_Validators["STATIONARY_ELEMENT_ID_MAX"] = "STATIONARY_ELEMENT_ID_MAX";
    WrArCalc_FloatingIn_Validators["ROTATING_ELEMENT_OD_MAX"] = "ROTATING_ELEMENT_OD_MAX";
    WrArCalc_FloatingIn_Validators["SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN"] = "SERVICE_STORAGE_TEMPERATURE_ALLOWED_MIN";
    WrArCalc_FloatingIn_Validators["SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX"] = "SERVICE_STORAGE_TEMPERATURE_ALLOWED_MAX";
    WrArCalc_FloatingIn_Validators["STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN"] = "STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MIN";
    WrArCalc_FloatingIn_Validators["STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX"] = "STATIONARY_ELEMENT_ID_MIN_LESSER_THAT_ROTATING_MAX";
})(WrArCalc_FloatingIn_Validators || (WrArCalc_FloatingIn_Validators = {}));
var Units;
(function (Units) {
    Units[Units["INCH"] = 1] = "INCH";
    Units[Units["MILLI_METER"] = 2] = "MILLI_METER";
})(Units || (Units = {}));
var UnitsAbbreviation;
(function (UnitsAbbreviation) {
    UnitsAbbreviation["INCH"] = "in";
    UnitsAbbreviation["MILLI_METER"] = "mm";
})(UnitsAbbreviation || (UnitsAbbreviation = {}));
var Measures;
(function (Measures) {
    Measures[Measures["Imperial"] = 1] = "Imperial";
    Measures[Measures["Metric"] = 2] = "Metric";
})(Measures || (Measures = {}));
var UnitsDecimalPlaces;
(function (UnitsDecimalPlaces) {
    UnitsDecimalPlaces[UnitsDecimalPlaces["INCH"] = 3] = "INCH";
    UnitsDecimalPlaces[UnitsDecimalPlaces["MILLI_METER"] = 2] = "MILLI_METER";
})(UnitsDecimalPlaces || (UnitsDecimalPlaces = {}));
var Temperature;
(function (Temperature) {
    Temperature[Temperature["FAHRENHEIT"] = 1] = "FAHRENHEIT";
    Temperature[Temperature["CELCIUS"] = 2] = "CELCIUS";
})(Temperature || (Temperature = {}));
var CalculatorOption;
(function (CalculatorOption) {
    CalculatorOption[CalculatorOption["Nominal"] = 1] = "Nominal";
    CalculatorOption[CalculatorOption["WithTolerance"] = 2] = "WithTolerance";
    CalculatorOption[CalculatorOption["WithMinMax"] = 3] = "WithMinMax";
})(CalculatorOption || (CalculatorOption = {}));
var LoggingLevels;
(function (LoggingLevels) {
    LoggingLevels[LoggingLevels["error"] = 0] = "error";
    LoggingLevels[LoggingLevels["warn"] = 1] = "warn";
    LoggingLevels[LoggingLevels["info"] = 2] = "info";
    LoggingLevels[LoggingLevels["verbose"] = 3] = "verbose";
    LoggingLevels[LoggingLevels["debug"] = 4] = "debug";
    LoggingLevels[LoggingLevels["silly"] = 5] = "silly";
})(LoggingLevels || (LoggingLevels = {}));
var CalculatorTypes;
(function (CalculatorTypes) {
    CalculatorTypes[CalculatorTypes["ORingInternalVacuumOnly"] = 1] = "ORingInternalVacuumOnly";
    CalculatorTypes[CalculatorTypes["ORingDovetailGlandVacuumOnly"] = 2] = "ORingDovetailGlandVacuumOnly";
    CalculatorTypes[CalculatorTypes["ORingHalfDovetailGlandInternalVacuumOnly"] = 3] = "ORingHalfDovetailGlandInternalVacuumOnly";
    CalculatorTypes[CalculatorTypes["ORingRectangularGlandExternalVacuumOnly"] = 4] = "ORingRectangularGlandExternalVacuumOnly";
    CalculatorTypes[CalculatorTypes["WrArPressIn"] = 5] = "WrArPressIn";
    CalculatorTypes[CalculatorTypes["WrArFloating"] = 6] = "WrArFloating";
})(CalculatorTypes || (CalculatorTypes = {}));
var CalculatorGroup;
(function (CalculatorGroup) {
    CalculatorGroup[CalculatorGroup["ORingNGlandCalcs"] = 1] = "ORingNGlandCalcs";
    CalculatorGroup[CalculatorGroup["WrArCalcs"] = 2] = "WrArCalcs";
})(CalculatorGroup || (CalculatorGroup = {}));
var ControlType;
(function (ControlType) {
    ControlType["label"] = "label";
    ControlType["textbox"] = "textbox";
    ControlType["numerictextbox"] = "numerictextbox";
    ControlType["dropdown"] = "dropdown";
    ControlType["button"] = "button";
    ControlType["html"] = "html";
})(ControlType || (ControlType = {}));
// enum to seperate specific purpose controls
var ControlSubType;
(function (ControlSubType) {
    ControlSubType["unit"] = "unit";
    ControlSubType["unitLabel"] = "unitlabel";
    ControlSubType["outputHeaderUnitLabel"] = "outputHeaderUnitLabel";
    ControlSubType["pressureLabel"] = "pressureLabel";
    ControlSubType["temperature"] = "temperature";
    ControlSubType["temperatureLabel"] = "temperaturelabel";
    ControlSubType["degree"] = "degree";
    ControlSubType["degreeLabel"] = "degreelabel";
    ControlSubType["material_choice_dropdown"] = "materialchoicedropdown";
    ControlSubType["button"] = "button";
    ControlSubType["calculated_label"] = "calculatedlabel";
    ControlSubType["calculatedDegreeLabel"] = "calculatedDegreeLabel";
    ControlSubType["arWrPumptypeDropdown"] = "arWrPumptypeDropdown";
    ControlSubType["arWrComponenttypeDropdown"] = "arWrComponenttypeDropdown";
    ControlSubType["arWrCompositetypeDropdown"] = "arWrCompositetypeDropdown";
    ControlSubType["arWrInterFerenceTargetPressInDropdown"] = "arWrInterFerenceTargetPressInDropdown";
    ControlSubType["arWrClearanceTargetDropdown"] = "arWrClearanceTargetDropdown";
    ControlSubType["arWrRotatingMaterial"] = "arWrRotatingMaterial";
    ControlSubType["arWrStationaryMaterial"] = "arWrStationaryMaterial";
    ControlSubType["cteUnitLabel"] = "cteUnitLabel";
})(ControlSubType || (ControlSubType = {}));
var TextboxType;
(function (TextboxType) {
    TextboxType["text"] = "text";
    TextboxType["password"] = "password";
    TextboxType["number"] = "number";
})(TextboxType || (TextboxType = {}));
var TemperatureCelsiusCode;
(function (TemperatureCelsiusCode) {
    TemperatureCelsiusCode["UNICODE"] = "U+02103";
    TemperatureCelsiusCode["HEX_CODE"] = "&#x2103";
    TemperatureCelsiusCode["HTML_CODE"] = "&#8451";
    TemperatureCelsiusCode["CSS_CODE"] = "2103";
    TemperatureCelsiusCode["HEXA_DECIMAL_CODE"] = "\u00B0C";
})(TemperatureCelsiusCode || (TemperatureCelsiusCode = {}));
var TemperatureFahrenheitCode;
(function (TemperatureFahrenheitCode) {
    TemperatureFahrenheitCode["UNICODE"] = "U+02109";
    TemperatureFahrenheitCode["HEX_CODE"] = "&#x2109";
    TemperatureFahrenheitCode["HTML_CODE"] = "&#8457";
    TemperatureFahrenheitCode["CSS_CODE"] = "2109";
    TemperatureFahrenheitCode["HEXA_DECIMAL_CODE"] = "\u00B0F";
})(TemperatureFahrenheitCode || (TemperatureFahrenheitCode = {}));
var DropdownChooseOptionTitle;
(function (DropdownChooseOptionTitle) {
    DropdownChooseOptionTitle["MaterialChoiceDropdown"] = "Select Material";
    DropdownChooseOptionTitle["DefaultDropdown"] = "Select";
})(DropdownChooseOptionTitle || (DropdownChooseOptionTitle = {}));
var ButtonActionKeys;
(function (ButtonActionKeys) {
    ButtonActionKeys["DashSizeDetail"] = "DashSizeDetail";
})(ButtonActionKeys || (ButtonActionKeys = {}));
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes[ErrorTypes["Error"] = 1] = "Error";
    ErrorTypes[ErrorTypes["Warning"] = 2] = "Warning";
})(ErrorTypes || (ErrorTypes = {}));
var ActionType;
(function (ActionType) {
    ActionType[ActionType["Paste"] = 1] = "Paste";
})(ActionType || (ActionType = {}));


/***/ }),

/***/ "./client/app/shared/services/ar-wr-drop-down-data.service.ts":
/*!********************************************************************!*\
  !*** ./client/app/shared/services/ar-wr-drop-down-data.service.ts ***!
  \********************************************************************/
/*! exports provided: ArWrDropDownDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArWrDropDownDataService", function() { return ArWrDropDownDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");





var ArWrDropDownDataService = /** @class */ (function () {
    function ArWrDropDownDataService(_http) {
        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
        // properties for dropdown items
        this.dropdownItemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.dropdownItems$ = this.dropdownItemsSubject.asObservable();
    }
    Object.defineProperty(ArWrDropDownDataService.prototype, "dropdownItems", {
        get: function () {
            return this.dropdownItemsSubject.getValue();
        },
        set: function (val) {
            this.dropdownItemsSubject.next(val);
        },
        enumerable: true,
        configurable: true
    });
    ArWrDropDownDataService.prototype.getCurrentDropdownItems = function () {
        return this.dropdownItems;
    };
    ArWrDropDownDataService.prototype.sendDropdownItems = function (val) {
        this.dropdownItems = val;
    };
    ArWrDropDownDataService.prototype.getDropdownsItemsByKey = function (key) {
        if (this.dropdownItems && key) {
            return this.dropdownItems[key];
        }
        else {
            return [];
        }
    };
    ArWrDropDownDataService.prototype.getDropdownItems = function () {
        return this._http.get(this.baseUrl + "wrar/getdropdownitems");
    };
    ArWrDropDownDataService.ɵfac = function ArWrDropDownDataService_Factory(t) { return new (t || ArWrDropDownDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    ArWrDropDownDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArWrDropDownDataService, factory: ArWrDropDownDataService.ɵfac, providedIn: 'root' });
    return ArWrDropDownDataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArWrDropDownDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/services/auth.service.ts":
/*!****************************************************!*\
  !*** ./client/app/shared/services/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _models_auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/auth.model */ "./client/app/models/auth.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm5/ngx-cookie-service.js");








var AuthService = /** @class */ (function () {
    function AuthService(_http, cookieService) {
        this._http = _http;
        this.cookieService = cookieService;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.env.api;
        // get token from cookie and initialize the bahaviour subject
        // const storedAuthData = new AuthModel({ token: localStorage.getItem('token')});
        var storedAuthData = new _models_auth_model__WEBPACK_IMPORTED_MODULE_3__["AuthModel"]({ token: cookieService.get('token') });
        this.authDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](storedAuthData);
        this.authData = this.authDataSubject.asObservable();
    }
    // method to get authentication token and store it into cookies
    AuthService.prototype.authenticate = function () {
        var _this = this;
        // return this._http.get(`${this.baseUrl}auth`);
        return this._http.get(this.baseUrl + "auth")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (respData) {
            // store auth data details and jwt token in local storage to keep auth between page refreshes
            // localStorage.setItem('token', JSON.stringify(respData));
            // localStorage.setItem('token', respData.token);
            // delete token
            if (_this.cookieService.check('token')) {
                _this.cookieService.delete('token', '/');
            }
            // set token in cookies
            _this.cookieService.set('token', respData.token);
            _this.authDataSubject.next(respData);
            return respData;
        }));
    };
    Object.defineProperty(AuthService.prototype, "currentAuthValue", {
        // property to get last authentication value
        get: function () {
            return this.authDataSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/services/control-base.service.ts":
/*!************************************************************!*\
  !*** ./client/app/shared/services/control-base.service.ts ***!
  \************************************************************/
/*! exports provided: ControlBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlBaseService", function() { return ControlBaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/custom-validation.service */ "./client/app/shared/services/custom-validation.service.ts");





var ControlBaseService = /** @class */ (function () {
    function ControlBaseService(customValidationService) {
        this.customValidationService = customValidationService;
    }
    // iterate over each control and creates formControl
    // return FormGroup of
    ControlBaseService.prototype.toFormGroup = function (controls, formGroupValidators) {
        var _this = this;
        var group = {};
        controls.forEach(function (control) {
            var _a;
            if (control.validation && control.validation.length > 0) {
                var validations = [];
                for (var index = 0; index < control.validation.length; index++) {
                    // if not null or undefined
                    var validationFunc = _this.customValidationService.getValidationFunc((_a = control[index]) === null || _a === void 0 ? void 0 : _a.validation);
                    if (validationFunc) {
                        return validations.push(validationFunc);
                    }
                }
                if (control.required) {
                    // merge required validation and other validation
                    if (validations.length > 0) {
                        validations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], validations);
                    }
                    else {
                        validations = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
                    }
                }
                // create form control with value
                group[control.key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](control.value || control.defaultvalue || '', validations);
                // disable controls
                if (control.isDisabled) {
                    group[control.key].disable();
                }
            }
            else {
                // create form control with value
                // add validation and create form control then add to formgroup object
                // adding required validation
                group[control.key] = control.required ? new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](control.value || control.defaultvalue || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    : new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](control.value || control.defaultvalue || '');
                // disable controls
                if (control.isDisabled) {
                    group[control.key].disable();
                }
            }
        });
        var fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group);
        fg.setValidators(formGroupValidators);
        return fg;
    };
    // input => array or any nested array or iterable object
    // return flattened array
    ControlBaseService.prototype.flatten = function (input) {
        var stack = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(input);
        var res = [];
        while (stack.length) {
            // pop value from stack
            var next = stack.pop();
            if (Array.isArray(next)) {
                // push back array items, won't modify the original input
                stack.push.apply(stack, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(next));
            }
            else {
                res.push(next);
            }
        }
        // reverse to restore input order
        return res.reverse();
    };
    // helper method to get the equal size columns
    ControlBaseService.prototype.getColumnNumber = function (columnLength) {
        if (columnLength <= 12) {
            return (12 / (columnLength || 1));
        }
        else {
            return 12;
        }
    };
    ControlBaseService.ɵfac = function ControlBaseService_Factory(t) { return new (t || ControlBaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_3__["CustomValidationService"])); };
    ControlBaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ControlBaseService, factory: ControlBaseService.ɵfac, providedIn: 'root' });
    return ControlBaseService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_custom_validation_service__WEBPACK_IMPORTED_MODULE_3__["CustomValidationService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/services/custom-validation.service.ts":
/*!*****************************************************************!*\
  !*** ./client/app/shared/services/custom-validation.service.ts ***!
  \*****************************************************************/
/*! exports provided: CustomValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidationService", function() { return CustomValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/constants */ "./client/app/shared/helpers/constants.ts");



var CustomValidationService = /** @class */ (function () {
    function CustomValidationService() {
    }
    CustomValidationService.prototype.getValidationFunc = function (validationKey) {
        switch (validationKey) {
            // example
            // case Validators.FORBIDDEN_NAME_VALIDATOR: // TODO: just for test remove it 
            //   return forbiddenNameValidator(/bob/i);
            //   break;
            case _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["ORingTool_InternalVacuumOnly_Validators"].GLAND_WIDTH_LARGER_THAN_O_RING_CROSS_SECTION:
                // return largerThanValidation();
                break;
            default:
                return null;
                break;
        }
    };
    CustomValidationService.ɵfac = function CustomValidationService_Factory(t) { return new (t || CustomValidationService)(); };
    CustomValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomValidationService, factory: CustomValidationService.ɵfac, providedIn: 'root' });
    return CustomValidationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/shared/services/error.service.ts":
/*!*****************************************************!*\
  !*** ./client/app/shared/services/error.service.ts ***!
  \*****************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ErrorService = /** @class */ (function () {
    function ErrorService() {
    }
    ErrorService.prototype.getClientErrorMessage = function (error) {
        return error.message ?
            error.message :
            error.toString();
    };
    ErrorService.prototype.getServerErrorMessage = function (error) {
        return navigator.onLine ?
            error.message :
            'No Internet Connection';
    };
    ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
    ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
    return ErrorService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/shared/services/global-error-handler.ts":
/*!************************************************************!*\
  !*** ./client/app/shared/services/global-error-handler.ts ***!
  \************************************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.service */ "./client/app/shared/services/error.service.ts");
/* harmony import */ var _components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/toasts-container/toast-service */ "./client/app/shared/components/toasts-container/toast-service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/logger.service */ "./client/app/shared/services/logger.service.ts");
/* harmony import */ var _models_log_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/log.model */ "./client/app/models/log.model.ts");
// core imports


// application imports





var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(injector) {
        this.injector = injector;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        var _this = this;
        var genericMessage = "Something went wrong, please try again later !";
        var errorService = this.injector.get(_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]);
        var notifier = this.injector.get(_components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]);
        var logger = this.injector.get(_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]);
        var message = this.getErrorMessage(error);
        if (message) {
            // notifier
            notifier.showError(genericMessage);
            console.log(message);
            // notifier.showError(message);
            // log the error message to server logs(Winston Logger)
            // let logError: LogModel = new LogModel({ message: ` Client side error: ${message}`, level: 0 });
            var logError = new _models_log_model__WEBPACK_IMPORTED_MODULE_5__["LogModel"]({ message: " Client side error: " + JSON.stringify(error), level: 0 });
            logger.log(logError).subscribe(function (data) {
                /*console.log("Successfully logged the error.");*/
            }, function (error) {
                var httpLogError = _this.getErrorMessage(error);
                // let httpLogErrObj: LogModel = new LogModel({ message: httpLogError, level: 0 });
                var httpLogErrObj = new _models_log_model__WEBPACK_IMPORTED_MODULE_5__["LogModel"]({ message: JSON.stringify(error), level: 0 });
                logger.log(httpLogErrObj);
            });
        }
    };
    // helper to get the error message from error
    GlobalErrorHandler.prototype.getErrorMessage = function (error) {
        var errMessage = "";
        var errorService = this.injector.get(_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]);
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            // Server error
            errMessage = errorService.getServerErrorMessage(error);
        }
        else {
            // Client Error
            errMessage = errorService.getClientErrorMessage(error);
        }
        return errMessage;
    };
    GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
    GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });
    return GlobalErrorHandler;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/services/helper.service.ts":
/*!******************************************************!*\
  !*** ./client/app/shared/services/helper.service.ts ***!
  \******************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/switch-button.model */ "./client/app/models/switch-button.model.ts");
/* harmony import */ var _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/constants */ "./client/app/shared/helpers/constants.ts");
/* harmony import */ var _models_view_error_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/view-error.model */ "./client/app/models/view-error.model.ts");
/* harmony import */ var _models_form_control_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/form-control.model */ "./client/app/models/form-control.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _material_choice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-choice.service */ "./client/app/shared/services/material-choice.service.ts");
/* harmony import */ var _components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
// core imports

// application imports









var HelperService = /** @class */ (function () {
    function HelperService(modalService, materialChoiceService, temperatureButtonService, unitButtonService) {
        this.modalService = modalService;
        this.materialChoiceService = materialChoiceService;
        this.temperatureButtonService = temperatureButtonService;
        this.unitButtonService = unitButtonService;
    }
    HelperService.prototype.getUnits = function () {
        return [
            new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
                id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH,
                title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][0]],
                display_title: "Inch",
                display_Short_title: "in",
                isActive: true
            }),
            new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
                id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER,
                title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"][1]],
                display_title: "Millimeter",
                display_Short_title: "mm", isActive: false
            })
        ];
    };
    HelperService.prototype.getTemperature = function () {
        return [
            new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
                id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS,
                title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS],
                display_title: "Celsius",
                display_Short_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureCelsiusCode"].HTML_CODE,
                isActive: true
            }),
            new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
                id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT,
                title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT],
                display_title: "Fahrenheit",
                display_Short_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureFahrenheitCode"].HTML_CODE,
                isActive: false
            })
        ];
    };
    HelperService.prototype.getMeasures = function () {
        return [
            new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
                id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"].Imperial,
                title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"][0]],
                display_title: "Imperial",
                display_Short_title: "in",
                isActive: true
            }),
            new _models_switch_button_model__WEBPACK_IMPORTED_MODULE_1__["SwitchButtonModel"]({
                id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"].Metric,
                title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Measures"][1]],
                display_title: "Metric",
                display_Short_title: "mm",
                isActive: false
            })
        ];
    };
    // set default measure/unit for WrAr
    HelperService.prototype.setDefaultMeasure = function () {
        // get measures 
        var measures = this.getMeasures();
        this.unitButtonService.sendUnitValue(measures[0]);
        return measures[0];
    };
    HelperService.prototype.convertToInch = function (val, decimalPoint) {
        if (!val && val !== 0) {
            return;
        }
        // 0.0393701 => 0.03936996
        return (val * 0.03936996).toFixed(decimalPoint || _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["UnitsDecimalPlaces"].INCH);
    };
    HelperService.prototype.convertToMillimeter = function (val, decimalPoint) {
        if (!val && val !== 0) {
            return;
        }
        return (val * 25.4).toFixed(decimalPoint || _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["UnitsDecimalPlaces"].MILLI_METER);
    };
    HelperService.prototype.convertFahrenheitToCelcius = function (inputTempInFahrenheit) {
        return (+((parseFloat(inputTempInFahrenheit) - 32) * 5 / 9).toFixed(3));
    };
    /* This function convert temperature in Celsius to Fahrenheit*/
    HelperService.prototype.convertCelciusToFahrenheit = function (inputTempInCelsius) {
        return (+((parseFloat(inputTempInCelsius) * 9 / 5) + 32).toFixed(3));
    };
    // modal open helper
    HelperService.prototype.openNgbModal = function (component) {
        var options = {};
        //     If true, the backdrop element will be created for a given modal.
        // Alternatively, specify 'static' for a backdrop which doesn't close the modal on click.
        options.backdrop = 'static';
        // If true, the modal will be closed when Escape key is pressed
        options.keyboard = false;
        return this.modalService.open(component, options);
    };
    // group the client error in the respective field or if field already added then check title and error message
    // if field already added then title and similiar error message already exist then do not add error message again
    // if field already added then title exist and similiar error message not already exist then add error message in same title
    // else push new error
    // it will reduce the duplicacy of error messages
    HelperService.prototype.groupClientErrors = function (errors) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var groupedErrors = [];
            var _loop_1 = function (index) {
                var clientError = errors[index];
                // findIndex of field which already added in grouped errors with field key
                var fieldErrorIndex = groupedErrors.findIndex(function (e) {
                    return e.field === clientError.field;
                });
                // get index of title in grouped all client errors
                var titleErrorIndex = groupedErrors.findIndex(function (e) {
                    return e.title === clientError.title;
                });
                // if error doesnot have any titlle then need to show generic message
                // prevent to display multiple generic errors
                if (!clientError.title) {
                    // findIndex empty title error in the grouped client error
                    var alreadyAddedGenericErrorMessageIndex = groupedErrors.findIndex(function (gError) {
                        var similarErrorDetailIndex = gError.errors.findIndex(function (errorMsg) {
                            if (errorMsg === clientError.detail) {
                                return errorMsg;
                            }
                        });
                        if (!gError.title && similarErrorDetailIndex > -1) {
                            return gError;
                        }
                    });
                    // if not already added client error message then add it
                    if (!(alreadyAddedGenericErrorMessageIndex > -1)) {
                        _this.addErrorToGroupedArray(groupedErrors, clientError);
                    }
                }
                else if (clientError.title && titleErrorIndex > -1) {
                    // condition to show the generic message with grouped by title
                    // title of error already there in grouped error and already have the specific error detail or error mesage is ther then do not add it again
                    // findIndex already added client error message
                    var alreadyAddedGenericWarningMessageIndex = groupedErrors[titleErrorIndex].errors.findIndex(function (errorMsg) {
                        if (errorMsg === clientError.detail) {
                            return errorMsg;
                        }
                    });
                    // if not already added client error message then add it
                    if (!(alreadyAddedGenericWarningMessageIndex > -1)) {
                        // add client error messages which have title
                        // and field already exist in the grouped client errors
                        groupedErrors[fieldErrorIndex].errors.push(clientError.detail);
                    }
                }
                else if (fieldErrorIndex && fieldErrorIndex > -1 && clientError.title) {
                    // add client error messages which have title
                    // and field already exist in the grouped client errors
                    groupedErrors[fieldErrorIndex].errors.push(clientError.detail);
                }
                else {
                    // add field error
                    _this.addErrorToGroupedArray(groupedErrors, clientError);
                }
            };
            // loop on client error
            for (var index = 0; index < errors.length; index++) {
                _loop_1(index);
            }
            return resolve(groupedErrors);
        });
    };
    // add error to grouped client error array
    HelperService.prototype.addErrorToGroupedArray = function (groupedErrors, clientError) {
        var viewError = new _models_view_error_model__WEBPACK_IMPORTED_MODULE_3__["ViewErrorModel"]({
            field: clientError.field,
            title: clientError.title,
            isDetailOpened: clientError.isDetailOpened,
            type: clientError.type,
            errors: [clientError.detail]
        });
        groupedErrors.push(viewError);
    };
    HelperService.prototype.setFormValidationErrorToControl = function (control, field, error) {
        if (error && !control.controls[error.field].errors) {
            // set error to form control
            control.controls[error.field].setErrors(error);
        }
        else {
            var fc = control.controls[field];
            if (fc) {
                // set error to form control
                control.controls[field].setErrors(error);
            }
        }
    };
    // set form control errors
    HelperService.prototype.setValidationErrorToFormControl = function (control, error, errorKey) {
        // form control and form control has already setted error
        if (control && control.errors) {
            var errorKeys = Object.keys(control.errors);
            var alreadyControlHaveErrorByKeyIndex = errorKeys.findIndex(function (eKey) {
                if (eKey === errorKey) {
                    return eKey;
                }
            });
            if (alreadyControlHaveErrorByKeyIndex > -1 && !error) {
                // formcontrol have error and error is null then delete error from control
                delete control.errors[errorKeys[alreadyControlHaveErrorByKeyIndex]];
                if (!(Object.keys(control.errors).length > 0)) {
                    control.setErrors(null);
                }
            }
            else if (alreadyControlHaveErrorByKeyIndex > -1 && error) {
                // formcontrol have error and error is null then delete error from control
                delete control.errors[errorKeys[alreadyControlHaveErrorByKeyIndex]];
                control.errors[errorKey] = error;
            }
            else if (!(alreadyControlHaveErrorByKeyIndex > -1) && error) { // formcontrol not have error and error has value
                // not already error added to control then add
                control.errors[errorKey] = error;
            }
            // else {
            //   control.setErrors(null);
            // }
        }
        else {
            if (errorKey && error) {
                // set error to form control
                var e = {};
                e[errorKey] = error;
                control.setErrors(e);
            }
            else {
                control.setErrors(null);
            }
        }
    };
    HelperService.prototype.maxOringIdValue = function (unit) {
        if (unit) {
            if (unit && unit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                // millimeter
                return 914.4;
            }
            else {
                // Inch
                return 36;
            }
        }
    };
    HelperService.prototype.bottomRadiiMinLimit = function (unit) {
        if (unit) {
            if (unit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                // millimeter
                return 0.005 * 25.40;
            }
            else {
                // Inch
                return 0.005;
            }
        }
    };
    HelperService.prototype.bottomRadiiMaxLimit = function (unit) {
        if (unit) {
            if (unit.id === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER) {
                // millimeter
                return 0.89;
            }
            else {
                // Inch
                return 0.035;
            }
        }
    };
    // get material choice
    HelperService.prototype.getMaterialChoiceList = function (formControlKey) {
        // convert an array object to formControl Array
        var calculatorTypeDDl = [];
        var materialChoices = this.materialChoiceService.getCurrentMaterialChoiceList();
        if (materialChoices && materialChoices.length > 0) {
            for (var index = 0; index < materialChoices.length; index++) {
                var fc = new _models_form_control_model__WEBPACK_IMPORTED_MODULE_4__["FormControlModel"]({ key: formControlKey, label: materialChoices[index].mname, value: materialChoices[index] });
                calculatorTypeDDl.push(fc);
            }
        }
        return calculatorTypeDDl;
    };
    // create and return dropdown items
    HelperService.prototype.getDropdownItems = function (formControlKey, ddlItems) {
        // convert an array object to formControl Array
        var calculatorTypeDDl = [];
        if (ddlItems && ddlItems.length > 0) {
            for (var index = 0; index < ddlItems.length; index++) {
                var fc = new _models_form_control_model__WEBPACK_IMPORTED_MODULE_4__["FormControlModel"]({ key: formControlKey, label: ddlItems[index].label, value: ddlItems[index], show: ddlItems[index].show });
                calculatorTypeDDl.push(fc);
            }
        }
        return calculatorTypeDDl;
    };
    // get calculated local stored data
    HelperService.prototype.getCalculatedStoredData = function (calculatorId) {
        var calculatedData = null;
        switch (calculatorId) {
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingInternalVacuumOnly:
                calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].RECTANGULAR_GLAND_INTERNAL));
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingRectangularGlandExternalVacuumOnly:
                calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].RECTANGULAR_GLAND_EXTERNAL));
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingDovetailGlandVacuumOnly:
                calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].DOVETAIL_GLAND));
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly:
                calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].HALF_DOVETAIL_GLAND));
                break;
            default:
                break;
        }
        return calculatedData;
    };
    // check calculated data exist in local storage 
    HelperService.prototype.isCalculatedDataExist = function (calculatorId) {
        if (!calculatorId) {
            return false;
        }
        var calculatedData = null;
        switch (calculatorId) {
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingInternalVacuumOnly:
                calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].RECTANGULAR_GLAND_INTERNAL));
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingRectangularGlandExternalVacuumOnly:
                calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].RECTANGULAR_GLAND_EXTERNAL));
                break;
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingDovetailGlandVacuumOnly:
            case _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["CalculatorTypes"].ORingHalfDovetailGlandInternalVacuumOnly:
                calculatedData = JSON.parse(localStorage.getItem(_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["calculatedDataKeys"].DOVETAIL_GLAND));
                break;
            default:
                break;
        }
        if (calculatedData) {
            return true;
        }
        else {
            return false;
        }
    };
    // convert form unit controls
    HelperService.prototype.convertFormUnitControlValuesAndSet = function (calculatorForm, form, selectedUnit) {
        if (!calculatorForm && !form) {
            return;
        }
        // set unit of left column
        var calculatorLeftColumnRows = this.setConvertedUnitValueToForm(form, calculatorForm.left_column.form_layout_row, selectedUnit);
        // set unit of right column
        var calculatorRightColumnRows = this.setConvertedUnitValueToForm(form, calculatorForm.right_column.form_layout_row, selectedUnit);
        return form;
    };
    // convert form unit controls values
    HelperService.prototype.setConvertedUnitValueToForm = function (form, rows, selectedUnit) {
        var _loop_2 = function (row) {
            var _loop_3 = function (column) {
                var _loop_4 = function (control) {
                    // check form control key exist 
                    var formControlKeys = Object.keys(form.controls);
                    var formKeyIndex = formControlKeys.findIndex(function (key) {
                        return (key === rows[row].form_layout_columns[column].form_controls[control].key);
                    });
                    // check control sub-type is unit and convert and set the form control value
                    if (formKeyIndex > -1 && rows[row].form_layout_columns[column].form_controls[control].sub_type === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["ControlSubType"].unit) {
                        var decimalPoint = rows[row].form_layout_columns[column].form_controls[control].decimal_point;
                        if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].INCH === +(selectedUnit.id)) {
                            form.controls[formControlKeys[formKeyIndex]].setValue(this_1.convertToInch(form.controls[formControlKeys[formKeyIndex]].value, decimalPoint));
                        }
                        else if (_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Units"].MILLI_METER === +(selectedUnit.id)) {
                            form.controls[formControlKeys[formKeyIndex]].setValue(this_1.convertToMillimeter(form.controls[formControlKeys[formKeyIndex]].value, decimalPoint));
                        }
                        else {
                            form.controls[formControlKeys[formKeyIndex]].setValue(this_1.convertToInch(form.controls[formControlKeys[formKeyIndex]].value, decimalPoint));
                        }
                    }
                };
                // iterate over column controls
                for (var control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
                    _loop_4(control);
                }
            };
            // iterate over left column columns
            for (var column = 0; column < rows[row].form_layout_columns.length; column++) {
                _loop_3(column);
            }
        };
        var this_1 = this;
        // iterate over left column rows
        for (var row = 0; row < rows.length; row++) {
            _loop_2(row);
        }
        return rows;
    };
    HelperService.prototype.getBottomRadiiRange = function (glandDepthNominalControlValue) {
        var ranges = {
            bottomRadiiWarningMinRange1: (3 / 100) * parseFloat(glandDepthNominalControlValue),
            bottomRadiiWarningMaxRange1: (17 / 100) * parseFloat(glandDepthNominalControlValue),
            bottomRadiiWarningMinRange2: (32 / 100) * parseFloat(glandDepthNominalControlValue),
            bottomRadiiWarningMaxRange2: (33 / 100) * parseFloat(glandDepthNominalControlValue)
        };
        return ranges;
    };
    HelperService.prototype.setAndSendTemperatureManually = function (temperatureId) {
        if (temperatureId === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT) {
            var fahrenheitObj = { id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT, title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].FAHRENHEIT], display_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureFahrenheitCode"].HTML_CODE, display_Short_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureFahrenheitCode"].HTML_CODE, isActive: true, actionType: 0 };
            this.temperatureButtonService.sendTemperatureValue(fahrenheitObj);
        }
        if (temperatureId === _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS) {
            var celciusObj = { id: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS, title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"][_shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Temperature"].CELCIUS], display_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureCelsiusCode"].HTML_CODE, display_Short_title: _shared_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["TemperatureCelsiusCode"].HTML_CODE, isActive: true, actionType: 0 };
            this.temperatureButtonService.sendTemperatureValue(celciusObj);
        }
    };
    // convert to 10 power -6 to X.XXXXXX
    HelperService.prototype.formatToTenPowerSix = function (val) {
        return val ? ((val) / 1000000) : 0.000;
    };
    // convert from 10 power -6 to XX.XX or XX.X or X.X
    HelperService.prototype.convertFromNegetivePowerOfSix = function (value) {
        return (value * 1000000);
    };
    // clear the calculator control label value by control key
    HelperService.prototype.resetLabel = function (rows, controlKey) {
        // iterate over left column rows
        for (var row = 0; row < rows.length; row++) {
            // iterate over left column columns
            for (var column = 0; column < rows[row].form_layout_columns.length; column++) {
                // iterate over column controls
                for (var control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
                    if (rows[row].form_layout_columns[column].form_controls[control].key === controlKey) {
                        rows[row].form_layout_columns[column].form_controls[control].label = '';
                    }
                }
            }
        }
        return rows;
    };
    // show or hide the calculator control by control key
    // isOptionControl => true when form control is of type dropdown or radio 
    HelperService.prototype.showOrHideFormControlByControlKey = function (rows, controlKey, optionIndex, isOptionControl, isShow) {
        if (optionIndex === void 0) { optionIndex = -1; }
        if (isOptionControl === void 0) { isOptionControl = false; }
        if (isShow === void 0) { isShow = false; }
        // iterate over left column rows
        for (var row = 0; row < rows.length; row++) {
            // iterate over left column columns
            for (var column = 0; column < rows[row].form_layout_columns.length; column++) {
                // iterate over column controls
                for (var control = 0; control < rows[row].form_layout_columns[column].form_controls.length; control++) {
                    if (rows[row].form_layout_columns[column].form_controls[control].key === controlKey) {
                        if (isOptionControl && optionIndex >= 0) {
                            rows[row].form_layout_columns[column].form_controls[control].options[optionIndex].show = isShow;
                        }
                        else {
                            rows[row].form_layout_columns[column].form_controls[control].show = isShow;
                        }
                    }
                }
            }
        }
        return rows;
    };
    // row controls map
    HelperService.prototype.mapFormControlsOnCreateForm = function (formGroup, formRows) {
        var mappedFormControls = formRows.map(function (row) {
            return row.form_layout_columns.map(function (column) {
                var formControls = [];
                for (var index = 0; index < column.form_controls.length; index++) {
                    // get existing inputted values of form 
                    if (formGroup) {
                        var fc = formGroup.get(column.form_controls[index].key);
                        if (fc) {
                            column.form_controls[index].value = fc.value;
                        }
                    }
                    // create reactive form of only those control which are show = true
                    if (column.form_controls[index].show) {
                        formControls.push(column.form_controls[index]);
                    }
                }
                return formControls;
            });
        });
        return mappedFormControls;
    };
    HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_material_choice_service__WEBPACK_IMPORTED_MODULE_6__["MaterialChoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_7__["TemperatureButtonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"])); };
    HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: 'root' });
    return HelperService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _material_choice_service__WEBPACK_IMPORTED_MODULE_6__["MaterialChoiceService"] }, { type: _components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_7__["TemperatureButtonService"] }, { type: _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_8__["UnitButtonService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/services/logger.service.ts":
/*!******************************************************!*\
  !*** ./client/app/shared/services/logger.service.ts ***!
  \******************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var LoggerService = /** @class */ (function () {
    function LoggerService(_http) {
        this._http = _http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_1__["AppConfig"].settings.env.api;
    }
    LoggerService.prototype.log = function (body) {
        return this._http.post(this.baseUrl + "logger/log", body);
    };
    LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
    return LoggerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/services/material-choice.service.ts":
/*!***************************************************************!*\
  !*** ./client/app/shared/services/material-choice.service.ts ***!
  \***************************************************************/
/*! exports provided: MaterialChoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialChoiceService", function() { return MaterialChoiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config.service */ "./client/app/app.config.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");






var MaterialChoiceService = /** @class */ (function () {
    function MaterialChoiceService(http) {
        this.http = http;
        this.baseUrl = _app_config_service__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].settings.env.api;
        this.materialChoiceListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.materialchoiceList$ = this.materialChoiceListSubject.asObservable();
    }
    Object.defineProperty(MaterialChoiceService.prototype, "materialchoiceList", {
        get: function () {
            return this.materialChoiceListSubject.getValue();
        },
        set: function (val) {
            this.materialChoiceListSubject.next(val);
        },
        enumerable: true,
        configurable: true
    });
    MaterialChoiceService.prototype.getCurrentMaterialChoiceList = function () {
        return this.materialchoiceList;
    };
    MaterialChoiceService.prototype.sendMaterialChoiceList = function (val) {
        this.materialchoiceList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(val);
    };
    MaterialChoiceService.prototype.getMaterialChoice = function () {
        return this.http.get(this.baseUrl + "common/materialchoice");
    };
    MaterialChoiceService.ɵfac = function MaterialChoiceService_Factory(t) { return new (t || MaterialChoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    MaterialChoiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MaterialChoiceService, factory: MaterialChoiceService.ɵfac, providedIn: 'root' });
    return MaterialChoiceService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialChoiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/services/print.service.ts":
/*!*****************************************************!*\
  !*** ./client/app/shared/services/print.service.ts ***!
  \*****************************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
// core imports


// third party imports




// (window as any).html2canvas = html2canvas;
var PrintService = /** @class */ (function () {
    function PrintService(document, spinner) {
        this.document = document;
        this.spinner = spinner;
    }
    // generate pdf
    PrintService.prototype.generatePdf = function (fileName) {
        var _this = this;
        // show spinner
        this.spinner.show();
        var div = this.document.getElementsByTagName("body")[0]; //document.getElementsByTagName("body")[0];
        var options = { background: "white", height: div.clientHeight, width: div.clientWidth };
        // hide controls
        var elements = this.document.getElementsByClassName('ignorePdf');
        Array.from(elements).forEach(function (element) {
            element.classList.add("hide");
        });
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(div, options).then(function (canvas) {
            var imgWidth = 214;
            // const pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            // const heightLeft = imgHeight;
            // const contentDataURL = canvas.toDataURL('image/png');
            var position = 0;
            //Initialize JSPDF
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__("p", "mm", "a4", 1);
            //Converting canvas to Image
            var imgData = canvas.toDataURL("image/PNG");
            //Add image Canvas to PDF
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
            var pdfOutput = doc.output();
            // using ArrayBuffer will allow you to put image inside PDF
            var buffer = new ArrayBuffer(pdfOutput.length);
            var array = new Uint8Array(buffer);
            for (var i = 0; i < pdfOutput.length; i++) {
                array[i] = pdfOutput.charCodeAt(i);
            }
            //Name of pdf
            var fileNameFullName = fileName + ".pdf";
            // Make file
            doc.save(fileNameFullName);
            // show controls
            Array.from(elements).forEach(function (element) {
                element.classList.remove("hide");
                // element.classList.add("show");
            });
            // show spinner
            _this.spinner.hide();
        });
    };
    PrintService.ɵfac = function PrintService_Factory(t) { return new (t || PrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
    PrintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrintService, factory: PrintService.ɵfac, providedIn: 'root' });
    return PrintService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./client/app/shared/shared.module.ts":
/*!********************************************!*\
  !*** ./client/app/shared/shared.module.ts ***!
  \********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/unit-button/unit-button.component */ "./client/app/shared/components/unit-button/unit-button.component.ts");
/* harmony import */ var _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/temperature-button/temperature-button.component */ "./client/app/shared/components/temperature-button/temperature-button.component.ts");
/* harmony import */ var _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/unit-button/unit-button.service */ "./client/app/shared/components/unit-button/unit-button.service.ts");
/* harmony import */ var _components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/temperature-button/temperature-button.service */ "./client/app/shared/components/temperature-button/temperature-button.service.ts");
/* harmony import */ var _components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/custom-controls/textbox/textbox.component */ "./client/app/shared/components/custom-controls/textbox/textbox.component.ts");
/* harmony import */ var _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/custom-controls/switch-button/switch-button.component */ "./client/app/shared/components/custom-controls/switch-button/switch-button.component.ts");
/* harmony import */ var _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/custom-controls/drop-down/drop-down.component */ "./client/app/shared/components/custom-controls/drop-down/drop-down.component.ts");
/* harmony import */ var _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/calculator-toolbar/calculator-toolbar.component */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.component.ts");
/* harmony import */ var _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-rules/user-rules.component */ "./client/app/shared/components/user-rules/user-rules.component.ts");
/* harmony import */ var _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/alert-modal/alert-modal.component */ "./client/app/shared/components/alert-modal/alert-modal.component.ts");
/* harmony import */ var _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/custom-controls/numeric-textbox/numeric-textbox.component */ "./client/app/shared/components/custom-controls/numeric-textbox/numeric-textbox.component.ts");
/* harmony import */ var _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dash-size-details/dash-size-details.component */ "./client/app/shared/components/dash-size-details/dash-size-details.component.ts");
/* harmony import */ var _components_dash_size_details_dash_size_details_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dash-size-details/dash-size-details.service */ "./client/app/shared/components/dash-size-details/dash-size-details.service.ts");
/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/numeric.directive */ "./client/app/shared/directives/numeric.directive.ts");
/* harmony import */ var _services_material_choice_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/material-choice.service */ "./client/app/shared/services/material-choice.service.ts");
/* harmony import */ var _services_custom_validation_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/custom-validation.service */ "./client/app/shared/services/custom-validation.service.ts");
/* harmony import */ var _services_control_base_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/control-base.service */ "./client/app/shared/services/control-base.service.ts");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/print.service */ "./client/app/shared/services/print.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/error.service */ "./client/app/shared/services/error.service.ts");
/* harmony import */ var _services_global_error_handler__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/global-error-handler */ "./client/app/shared/services/global-error-handler.ts");
/* harmony import */ var _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/toasts-container/toasts-container.component */ "./client/app/shared/components/toasts-container/toasts-container.component.ts");
/* harmony import */ var _components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/toasts-container/toast-service */ "./client/app/shared/components/toasts-container/toast-service.ts");
/* harmony import */ var _components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/calculator-toolbar/calculator-toolbar.service */ "./client/app/shared/components/calculator-toolbar/calculator-toolbar.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/logger.service */ "./client/app/shared/services/logger.service.ts");
/* harmony import */ var _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/measure-button/measure-button.component */ "./client/app/shared/components/measure-button/measure-button.component.ts");
/* harmony import */ var _services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/ar-wr-drop-down-data.service */ "./client/app/shared/services/ar-wr-drop-down-data.service.ts");
/* harmony import */ var _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/tab-nav/tab-nav.component */ "./client/app/shared/components/tab-nav/tab-nav.component.ts");
// core imports




// third party imports

// application imports




























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"],
                _services_custom_validation_service__WEBPACK_IMPORTED_MODULE_20__["CustomValidationService"],
                _services_control_base_service__WEBPACK_IMPORTED_MODULE_21__["ControlBaseService"],
                _components_unit_button_unit_button_service__WEBPACK_IMPORTED_MODULE_7__["UnitButtonService"],
                _components_temperature_button_temperature_button_service__WEBPACK_IMPORTED_MODULE_8__["TemperatureButtonService"],
                _services_material_choice_service__WEBPACK_IMPORTED_MODULE_19__["MaterialChoiceService"],
                _components_dash_size_details_dash_size_details_service__WEBPACK_IMPORTED_MODULE_17__["DashSizeDetailsService"],
                _services_print_service__WEBPACK_IMPORTED_MODULE_22__["PrintService"],
                _services_error_service__WEBPACK_IMPORTED_MODULE_23__["ErrorService"],
                _services_global_error_handler__WEBPACK_IMPORTED_MODULE_24__["GlobalErrorHandler"],
                _components_toasts_container_toast_service__WEBPACK_IMPORTED_MODULE_26__["ToastService"],
                _components_calculator_toolbar_calculator_toolbar_service__WEBPACK_IMPORTED_MODULE_27__["CalculatorToolbarService"],
                _services_logger_service__WEBPACK_IMPORTED_MODULE_28__["LoggerService"],
                _services_ar_wr_drop_down_data_service__WEBPACK_IMPORTED_MODULE_30__["ArWrDropDownDataService"]
            ]
        };
    };
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"],
        _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__["SwitchButtonComponent"],
        _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"],
        _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorToolbarComponent"],
        _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__["UserRulesComponent"],
        _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"],
        _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__["NumericDirective"],
        _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__["NumericTextboxComponent"],
        _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__["UnitButtonComponent"],
        _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonComponent"],
        _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__["DashSizeDetailsComponent"],
        _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__["ToastsContainerComponent"],
        _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__["MeasureButtonComponent"],
        _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__["TabNavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]], exports: [_components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"],
        _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__["SwitchButtonComponent"],
        _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"],
        _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorToolbarComponent"],
        _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__["UserRulesComponent"],
        _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"],
        _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__["NumericDirective"],
        _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__["NumericTextboxComponent"],
        _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__["UnitButtonComponent"],
        _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonComponent"],
        _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__["DashSizeDetailsComponent"],
        _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__["ToastsContainerComponent"],
        _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__["MeasureButtonComponent"],
        _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__["TabNavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"],
                    _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__["SwitchButtonComponent"],
                    _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"],
                    _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorToolbarComponent"],
                    _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__["UserRulesComponent"],
                    _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"],
                    _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__["NumericDirective"],
                    _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__["NumericTextboxComponent"],
                    _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__["UnitButtonComponent"],
                    _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonComponent"],
                    _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__["DashSizeDetailsComponent"],
                    _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__["ToastsContainerComponent"],
                    _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__["MeasureButtonComponent"],
                    _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__["TabNavComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
                ],
                exports: [
                    _components_custom_controls_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"],
                    _components_custom_controls_switch_button_switch_button_component__WEBPACK_IMPORTED_MODULE_10__["SwitchButtonComponent"],
                    _components_custom_controls_drop_down_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["DropDownComponent"],
                    _components_calculator_toolbar_calculator_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["CalculatorToolbarComponent"],
                    _components_user_rules_user_rules_component__WEBPACK_IMPORTED_MODULE_13__["UserRulesComponent"],
                    _components_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"],
                    _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_18__["NumericDirective"],
                    _components_custom_controls_numeric_textbox_numeric_textbox_component__WEBPACK_IMPORTED_MODULE_15__["NumericTextboxComponent"],
                    _components_unit_button_unit_button_component__WEBPACK_IMPORTED_MODULE_5__["UnitButtonComponent"],
                    _components_temperature_button_temperature_button_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureButtonComponent"],
                    _components_dash_size_details_dash_size_details_component__WEBPACK_IMPORTED_MODULE_16__["DashSizeDetailsComponent"],
                    _components_toasts_container_toasts_container_component__WEBPACK_IMPORTED_MODULE_25__["ToastsContainerComponent"],
                    _components_measure_button_measure_button_component__WEBPACK_IMPORTED_MODULE_29__["MeasureButtonComponent"],
                    _components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_31__["TabNavComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/environments/environment.ts":
/*!********************************************!*\
  !*** ./client/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// production: false,

var environment = {
    appVersion: _package_json__WEBPACK_IMPORTED_MODULE_0__["version"],
    production: false,
    name: 'dev'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./client/main.ts":
/*!************************!*\
  !*** ./client/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./client/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./client/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ngv09-sms\",\"version\":\"1.0.0\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"lite-server\":\"lite-server\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~9.1.11\",\"@angular/common\":\"~9.1.11\",\"@angular/compiler\":\"~9.1.11\",\"@angular/core\":\"~9.1.11\",\"@angular/forms\":\"~9.1.11\",\"@angular/localize\":\"~9.1.11\",\"@angular/platform-browser\":\"~9.1.11\",\"@angular/platform-browser-dynamic\":\"~9.1.11\",\"@angular/router\":\"~9.1.11\",\"@fortawesome/angular-fontawesome\":\"^0.6.1\",\"@ng-bootstrap/ng-bootstrap\":\"^6.2.0\",\"@types/html2canvas\":\"0.0.35\",\"@types/jspdf\":\"^1.3.3\",\"bootstrap\":\"^4.5.0\",\"classlist.js\":\"^1.1.20150312\",\"core-js\":\"^3.8.3\",\"html2canvas\":\"^1.0.0-rc.5\",\"jquery\":\"^3.5.1\",\"jspdf\":\"^1.5.3\",\"ngx-cookie-service\":\"^3.0.4\",\"ngx-spinner\":\"^9.0.1\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^1.10.0\",\"typedi\":\"^0.8.0\",\"web-animations-js\":\"^2.3.2\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.901.8\",\"@angular/cli\":\"~9.1.8\",\"@angular/compiler-cli\":\"~9.1.11\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.11.1\",\"codelyzer\":\"^5.1.2\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~2.1.0\",\"karma-jasmine\":\"~3.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.2\",\"lite-server\":\"^2.5.4\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~3.8.3\"}}");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/greenetweedservices-master/client/main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map