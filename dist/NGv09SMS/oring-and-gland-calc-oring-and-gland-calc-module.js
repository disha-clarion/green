(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oring-and-gland-calc-oring-and-gland-calc-module"],{

/***/ "./client/app/oring-and-gland-calc/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/header/header.component.ts ***!
  \********************************************************************/
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
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 0, consts: [[1, "gt-banner"], [1, "container"], [1, "gt-header-graphic"], [1, "heading"], [1, "gt-header-logo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " O-Ring Analysis & Gland Design Calculator ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(For Vacuum System Only)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".gt-banner[_ngcontent-%COMP%] {\n    background: url(/assets/img/semicalculator-header-img.jpg) no-repeat;\n    background-size: cover;\n    width: 100%;\n    position: relative;\n}\n\n.gt-banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 175px;\n}\n\n.gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    position: relative;\n    top: 49%;\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n    color: #fff;\n    font-size: 32px;\n    width: 80%;\n    \n    font-family: \"nimbus_san_nov_con\", Arial, sans-serif;\n    margin: 0px 20px 0 250px;\n    font-weight: 700;\n    \n    \n}\n\n.gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 20px;\n    display: block;\n    font-weight: 500;\n    letter-spacing: 0;\n    text-shadow: none;\n}\n\n.gt-header-logo[_ngcontent-%COMP%] {\n    margin-top: -15px;\n    position: absolute;\n    \n    \n    background: url(/assets/img/GTLogo_White-semicalc.png) no-repeat;\n    width: 147px;\n    height: 54px;\n    background-size: contain;\n}\n\n\n\n@media (max-width:600px) {\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n        width: 72%;\n        left: 0;\n    }\n}\n\n@media (max-width:767px) {\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n        font-size: 20px;\n        width: 48%;\n        padding-top: 0px;\n    }\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n    .gt-header-logo[_ngcontent-%COMP%] {\n        width: 112px;\n        height: 42px;\n        background-size: 112px;\n    }\n}\n\n\n\n@media (min-width:768px) and (max-width:990px) {\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n        font-size: 24px;\n        width: 58%;\n    }\n}\n\n@media (max-width:1060px) {\n    .gt-banner[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n        font-size: 28px;\n        width: 73%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvb3JpbmctYW5kLWdsYW5kLWNhbGMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0VBQW9FO0lBQ3BFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsK0JBQStCO0lBRS9CLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7SUFDVixtREFBbUQ7SUFDbkQsb0RBQW9EO0lBQ3BELHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0VBQWdFO0lBQ2hFLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSTtRQUNJLFVBQVU7UUFDVixPQUFPO0lBQ1g7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUE7Ozs7Ozs7OztHQVNHOztBQUVIO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ndC1iYW5uZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9zZW1pY2FsY3VsYXRvci1oZWFkZXItaW1nLmpwZykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3QtYmFubmVyIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTc1cHg7XG59XG5cbi5ndC1iYW5uZXIgLmhlYWRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQ5JTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgLyogZm9udC1mYW1pbHk6IFwibmltYnVzLXNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7ICovXG4gICAgZm9udC1mYW1pbHk6IFwibmltYnVzX3Nhbl9ub3ZfY29uXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMHB4IDIwcHggMCAyNTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIC8qIGxldHRlci1zcGFjaW5nOiAwcHg7ICovXG4gICAgLyogdGV4dC1zaGFkb3c6IDJweCAycHggMCAjMWIzNzY2OyAqL1xufVxuXG4uZ3QtYmFubmVyIC5oZWFkaW5nIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uZ3QtaGVhZGVyLWxvZ28ge1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiByaWdodDogMTJweDsgKi9cbiAgICAvKiBib3R0b206IDE1cHg7ICovXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL0dUTG9nb19XaGl0ZS1zZW1pY2FsYy5wbmcpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMTQ3cHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLyogbWVkaWEgcXVlcnkgKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAuZ3QtYmFubmVyIC5oZWFkaW5nIHtcbiAgICAgICAgd2lkdGg6IDcyJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB9XG4gICAgLmd0LWJhbm5lciAuaGVhZGluZyBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZ3QtaGVhZGVyLWxvZ28ge1xuICAgICAgICB3aWR0aDogMTEycHg7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMTJweDtcbiAgICB9XG59XG5cbi8qIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgLmd0LWhlYWRlci1ncmFwaGljIHtcbiAgICAgICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2d0LWhlYWRlci1ncmFwaGljLnBuZykgbm8tcmVwZWF0O1xuICAgICAgICB3aWR0aDogMTM0cHg7XG4gICAgICAgIGhlaWdodDogMTE4cHg7ICpcbiAgICB9XG59ICovXG5cbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTBweCkge1xuICAgIC5ndC1iYW5uZXIgLmhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHdpZHRoOiA1OCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDoxMDYwcHgpIHtcbiAgICAuZ3QtYmFubmVyIC5oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICB3aWR0aDogNzMlO1xuICAgIH1cbn0iXX0= */"] });
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

/***/ "./client/app/oring-and-gland-calc/oring-and-gland-calc-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/oring-and-gland-calc-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ORingAndGlandCalcRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingAndGlandCalcRoutingModule", function() { return ORingAndGlandCalcRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oring-and-gland-calc.component */ "./client/app/oring-and-gland-calc/oring-and-gland-calc.component.ts");
// core imports


// application imports



var routes = [
    {
        path: '',
        component: _oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_2__["OringAndGlandCalcComponent"],
        children: [
            { path: 'evaluateoringglands', loadChildren: function () { return __webpack_require__.e(/*! import() | rectangular-o-ring-calc-rectangular-o-ring-calc-module */ "rectangular-o-ring-calc-rectangular-o-ring-calc-module").then(__webpack_require__.bind(null, /*! ./rectangular-o-ring-calc/rectangular-o-ring-calc.module */ "./client/app/oring-and-gland-calc/rectangular-o-ring-calc/rectangular-o-ring-calc.module.ts")).then(function (m) { return m.RectangularORingCalcModule; }); } },
            { path: 'evaluateglandsizecalculatorsglands', loadChildren: function () { return Promise.all(/*! import() | rectangle-gland-calc-rectangle-gland-calc-module */[__webpack_require__.e("common"), __webpack_require__.e("rectangle-gland-calc-rectangle-gland-calc-module")]).then(__webpack_require__.bind(null, /*! ./rectangle-gland-calc/rectangle-gland-calc.module */ "./client/app/oring-and-gland-calc/rectangle-gland-calc/rectangle-gland-calc.module.ts")).then(function (m) { return m.RectangleGlandCalcModule; }); } }
        ]
    }
];
var ORingAndGlandCalcRoutingModule = /** @class */ (function () {
    function ORingAndGlandCalcRoutingModule() {
    }
    ORingAndGlandCalcRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ORingAndGlandCalcRoutingModule });
    ORingAndGlandCalcRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ORingAndGlandCalcRoutingModule_Factory(t) { return new (t || ORingAndGlandCalcRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ORingAndGlandCalcRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ORingAndGlandCalcRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ORingAndGlandCalcRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/oring-and-gland-calc.component.ts":
/*!***************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/oring-and-gland-calc.component.ts ***!
  \***************************************************************************/
/*! exports provided: OringAndGlandCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OringAndGlandCalcComponent", function() { return OringAndGlandCalcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./client/app/oring-and-gland-calc/header/header.component.ts");
/* harmony import */ var _shared_components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/tab-nav/tab-nav.component */ "./client/app/shared/components/tab-nav/tab-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
// Core imports





var OringAndGlandCalcComponent = /** @class */ (function () {
    function OringAndGlandCalcComponent() {
        // tabs
        this.oRingTabs = [
            { linkLabel: "O-ring/GLAND Analysis Tool", rootModuleRoute: "evaluateoringglands", childrenModuleRoute: "/oringgland/evaluateoringglands/createRectangularORing", pathExactmatch: false },
            { linkLabel: "Gland Size Calculator", rootModuleRoute: "evaluateglandsizecalculatorsglands", childrenModuleRoute: "/oringgland/evaluateglandsizecalculatorsglands/createRectangleGland", pathExactmatch: false }
        ];
    }
    OringAndGlandCalcComponent.prototype.ngOnInit = function () {
    };
    OringAndGlandCalcComponent.ɵfac = function OringAndGlandCalcComponent_Factory(t) { return new (t || OringAndGlandCalcComponent)(); };
    OringAndGlandCalcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OringAndGlandCalcComponent, selectors: [["app-oring-and-gland-calc"]], decls: 6, vars: 1, consts: [[1, "content"], [1, "container", "p-0"], [1, "clearfix"], [1, "ignorePdf", 3, "tabMenu"]], template: function OringAndGlandCalcComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tab-nav", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabMenu", ctx.oRingTabs);
        } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_components_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_2__["TabNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL29yaW5nLWFuZC1nbGFuZC1jYWxjL29yaW5nLWFuZC1nbGFuZC1jYWxjLmNvbXBvbmVudC5jc3MifQ== */"] });
    return OringAndGlandCalcComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OringAndGlandCalcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oring-and-gland-calc',
                templateUrl: './oring-and-gland-calc.component.html',
                styleUrls: ['./oring-and-gland-calc.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./client/app/oring-and-gland-calc/oring-and-gland-calc.module.ts":
/*!************************************************************************!*\
  !*** ./client/app/oring-and-gland-calc/oring-and-gland-calc.module.ts ***!
  \************************************************************************/
/*! exports provided: ORingAndGlandCalcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORingAndGlandCalcModule", function() { return ORingAndGlandCalcModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./client/app/shared/shared.module.ts");
/* harmony import */ var _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dynamic-form/dynamic-form.module */ "./client/app/dynamic-form/dynamic-form.module.ts");
/* harmony import */ var _oring_and_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oring-and-gland-calc-routing.module */ "./client/app/oring-and-gland-calc/oring-and-gland-calc-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./client/app/oring-and-gland-calc/header/header.component.ts");
/* harmony import */ var _oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oring-and-gland-calc.component */ "./client/app/oring-and-gland-calc/oring-and-gland-calc.component.ts");
// core imports



// application imports






var ORingAndGlandCalcModule = /** @class */ (function () {
    function ORingAndGlandCalcModule() {
    }
    ORingAndGlandCalcModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ORingAndGlandCalcModule });
    ORingAndGlandCalcModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ORingAndGlandCalcModule_Factory(t) { return new (t || ORingAndGlandCalcModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                _oring_and_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingAndGlandCalcRoutingModule"]
            ]] });
    return ORingAndGlandCalcModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ORingAndGlandCalcModule, { declarations: [_oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_7__["OringAndGlandCalcComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
        _oring_and_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingAndGlandCalcRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ORingAndGlandCalcModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _oring_and_gland_calc_component__WEBPACK_IMPORTED_MODULE_7__["OringAndGlandCalcComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _dynamic_form_dynamic_form_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormModule"],
                    _oring_and_gland_calc_routing_module__WEBPACK_IMPORTED_MODULE_5__["ORingAndGlandCalcRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=oring-and-gland-calc-oring-and-gland-calc-module.js.map