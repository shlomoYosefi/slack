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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/sign-in/sign-in.component */ "./src/app/comps/sign-in/sign-in.component.ts");
/* harmony import */ var _auto_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auto.guard */ "./src/app/auto.guard.ts");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");
/* harmony import */ var _comps_open_open_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/open/open.component */ "./src/app/comps/open/open.component.ts");
/* harmony import */ var _comps_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/registration/registration.component */ "./src/app/comps/registration/registration.component.ts");









const routes = [
    { path: "", component: _comps_open_open_component__WEBPACK_IMPORTED_MODULE_5__["OpenComponent"] },
    { path: "home", component: _comps_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_auto_guard__WEBPACK_IMPORTED_MODULE_3__["AutoGuard"]] },
    { path: "logIn", component: _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"] },
    { path: "registration", component: _comps_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'slack';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/sign-in/sign-in.component */ "./src/app/comps/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _comps_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/chat/chat.component */ "./src/app/comps/chat/chat.component.ts");
/* harmony import */ var _comps_chat_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/chat/dropdown.directive */ "./src/app/comps/chat/dropdown.directive.ts");
/* harmony import */ var _auto_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auto.guard */ "./src/app/auto.guard.ts");
/* harmony import */ var _can_activ_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./can-activ.service */ "./src/app/can-activ.service.ts");
/* harmony import */ var _comps_list_nams_list_nams_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/list-nams/list-nams.component */ "./src/app/comps/list-nams/list-nams.component.ts");
/* harmony import */ var _comps_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/home/home.component */ "./src/app/comps/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _services_stor_events__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/stor/events */ "./src/app/services/stor/events.ts");
/* harmony import */ var _comps_input_amessege_input_amessege_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comps/input-amessege/input-amessege.component */ "./src/app/comps/input-amessege/input-amessege.component.ts");
/* harmony import */ var _comps_open_open_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comps/open/open.component */ "./src/app/comps/open/open.component.ts");
/* harmony import */ var _comps_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comps/registration/registration.component */ "./src/app/comps/registration/registration.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_stor_postim__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/stor/postim */ "./src/app/services/stor/postim.ts");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auto_guard__WEBPACK_IMPORTED_MODULE_8__["AutoGuard"], _can_activ_service__WEBPACK_IMPORTED_MODULE_9__["CanActivService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({ users: _services_stor_events__WEBPACK_IMPORTED_MODULE_15__["reducer"], posts: _services_stor_postim__WEBPACK_IMPORTED_MODULE_21__["reducerPost"] }, {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({ maxAge: 25 }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
        _comps_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
        _comps_chat_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["DropdownDirective"],
        _comps_list_nams_list_nams_component__WEBPACK_IMPORTED_MODULE_10__["ListNamsComponent"],
        _comps_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _comps_input_amessege_input_amessege_component__WEBPACK_IMPORTED_MODULE_16__["InputAMessegeComponent"],
        _comps_open_open_component__WEBPACK_IMPORTED_MODULE_17__["OpenComponent"],
        _comps_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _comps_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
                    _comps_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
                    _comps_chat_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["DropdownDirective"],
                    _comps_list_nams_list_nams_component__WEBPACK_IMPORTED_MODULE_10__["ListNamsComponent"],
                    _comps_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _comps_input_amessege_input_amessege_component__WEBPACK_IMPORTED_MODULE_16__["InputAMessegeComponent"],
                    _comps_open_open_component__WEBPACK_IMPORTED_MODULE_17__["OpenComponent"],
                    _comps_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_19__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({ users: _services_stor_events__WEBPACK_IMPORTED_MODULE_15__["reducer"], posts: _services_stor_postim__WEBPACK_IMPORTED_MODULE_21__["reducerPost"] }, {
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        }
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({ maxAge: 25 }),
                ],
                providers: [_auto_guard__WEBPACK_IMPORTED_MODULE_8__["AutoGuard"], _can_activ_service__WEBPACK_IMPORTED_MODULE_9__["CanActivService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auto.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auto.guard.ts ***!
  \*******************************/
/*! exports provided: AutoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoGuard", function() { return AutoGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _can_activ_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./can-activ.service */ "./src/app/can-activ.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AutoGuard {
    constructor(srv, router) {
        this.srv = srv;
        this.router = router;
    }
    canActivate(next, state) {
        console.log("canActivate");
        if (this.srv.getLogIn()) {
            return true;
        }
        else {
            console.log(false);
            return false;
        }
    }
}
AutoGuard.ɵfac = function AutoGuard_Factory(t) { return new (t || AutoGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_can_activ_service__WEBPACK_IMPORTED_MODULE_1__["CanActivService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AutoGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AutoGuard, factory: AutoGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _can_activ_service__WEBPACK_IMPORTED_MODULE_1__["CanActivService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/can-activ.service.ts":
/*!**************************************!*\
  !*** ./src/app/can-activ.service.ts ***!
  \**************************************/
/*! exports provided: CanActivService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivService", function() { return CanActivService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanActivService {
    constructor() {
        this.logIn = false;
    }
    getLogIn() {
        console.log(this.logIn);
        return this.logIn;
    }
}
CanActivService.ɵfac = function CanActivService_Factory(t) { return new (t || CanActivService)(); };
CanActivService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanActivService, factory: CanActivService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanActivService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/chat/chat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/send-data.service */ "./src/app/services/send-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ChatComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.addressName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.dateDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.dateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.text);
} }
function ChatComponent_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.addressName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.dateDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.dateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.text);
} }
function ChatComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_20_div_1_Template, 15, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_20_div_2_Template, 15, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r1.address == ctx_r0.myUser.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r1.address != ctx_r0.myUser.id);
} }
class ChatComponent {
    constructor(srvData) {
        this.srvData = srvData;
        this.myMessege = [];
        this.myAllMessege = [];
    }
    ngOnInit() {
        this.srvData.personU.subscribe(val => this.myUser = val);
        this.srvData.clickPerson.subscribe(val => this.userClick = val);
        this.srvData.arrayPost.subscribe(val => { console.log(val), this.myMessege = val; });
        this.srvData.personU.subscribe(val => {
            if (val != null) {
                this.hello = `שלום ${val.firstName} ${val.lastName} `;
            }
        });
    }
    allMesseg() {
        this.srvData.myAllPosts.subscribe(val => {
            console.log(val);
            this.myAllMessege = [];
            for (let i in val) {
                if (val[i] != '') {
                    this.myAllMessege.push(val[i]);
                }
                this.myMessege = this.myAllMessege;
            }
            this.myAllMessege.sort(function (a, b) {
                return a.id - b.id;
            });
        });
    }
    ngOnDestroy() {
        this.myMessege = [''];
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_1__["SendDataService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 21, vars: 2, consts: [[1, "chat"], ["id", "hello"], [1, "buttons"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-success"], [1, "h3"], ["id", "messeg", 4, "ngFor", "ngForOf"], ["id", "messeg"], ["class", "nessU", "style", " text-align: right;", 4, "ngIf"], ["class", "nessClick", "style", "text-align: left ", 4, "ngIf"], [1, "nessU", 2, "text-align", "right"], ["id", "spanAddress"], [2, "color", "cornflowerblue"], [2, "color", "brown"], [1, "nessClick", 2, "text-align", "left"], [2, "color", "darkgreen"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_5_listener() { return ctx.allMesseg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05DB\u05DC \u05D4\u05D4\u05D5\u05D3\u05E2\u05D5\u05EA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05D4\u05DB\u05D9 \u05D9\u05E9\u05DF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05D4\u05DB\u05D9 \u05D7\u05D3\u05E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05D4\u05E6'\u05D0\u05D8\u05D9\u05DD \u05E9\u05DC\u05D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChatComponent_div_20_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hello);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myMessege);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".chat[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    \r\n    width: 75vw;\r\n    height: 85vh;\r\n    \r\n    text-align: center;\r\n    overflow: auto;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background: rgb(205, 46, 245);\r\n    color: seashell;\r\n}\r\n\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n    font-size: xx-large;\r\n    \r\n}\r\n\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 40px;\r\n}\r\n\r\n\r\n.heder[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.h3[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    \r\n    margin-top: 40px;\r\n    \r\n}\r\n\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n}\r\n\r\n\r\n#hello[_ngcontent-%COMP%]{\r\n    color: darkmagenta;\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#spanAddress[_ngcontent-%COMP%]{\r\n    direction: rtl;\r\n    text-decoration: underline ;\r\n    color: blue;\r\n}\r\n\r\n\r\n#messeg[_ngcontent-%COMP%]{\r\n    \r\n    margin-right: 30%;\r\n    margin-left: 30%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7OztBQUlBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjs7QUFFcEI7OztBQU1BO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7O0FBRUE7O0dBRUc7OztBQUVIO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG4uY2hhdHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICB3aWR0aDogNzV2dztcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyMjYsIDIzOCwgMTkyKTsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA1LCA0NiwgMjQ1KTtcclxuICAgIGNvbG9yOiBzZWFzaGVsbDtcclxufVxyXG5cclxuaDN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xyXG59XHJcblxyXG5cclxuXHJcbnNwYW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmhlZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5cclxuI2hlbGxve1xyXG4gICAgY29sb3I6IGRhcmttYWdlbnRhO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi8qIGg2e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxufSAqL1xyXG5cclxuI3NwYW5BZGRyZXNze1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSA7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuI21lc3NlZ3tcclxuICAgIC8qIHRleHQtYWxpZ246cmlnaHQ7ICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_1__["SendDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/chat/dropdown.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/chat/dropdown.directive.ts ***!
  \**************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DropdownDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.isOpen = false;
    }
    toggleOpen(event) { this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false; }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "appDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownDirective_click_HostBindingHandler($event) { return ctx.toggleOpen($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[appDropdown]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.open']
        }], toggleOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/comps/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/send-data.service */ "./src/app/services/send-data.service.ts");
/* harmony import */ var src_app_can_activ_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/can-activ.service */ "./src/app/can-activ.service.ts");
/* harmony import */ var _list_nams_list_nams_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-nams/list-nams.component */ "./src/app/comps/list-nams/list-nams.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/chat.component */ "./src/app/comps/chat/chat.component.ts");
/* harmony import */ var _input_amessege_input_amessege_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input-amessege/input-amessege.component */ "./src/app/comps/input-amessege/input-amessege.component.ts");








class HomeComponent {
    constructor(srv, gurd) {
        this.srv = srv;
        this.gurd = gurd;
    }
    ngOnDestroy() {
        this.gurd.logIn = false;
        this.srv.personU = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__["SendDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_can_activ_service__WEBPACK_IMPORTED_MODULE_3__["CanActivService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 0, consts: [[1, "all"], [1, "listUsers"], [1, "chatAndInput"], [1, "chat"], [1, "input"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list-nams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-input-amessege");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_list_nams_list_nams_component__WEBPACK_IMPORTED_MODULE_4__["ListNamsComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], _input_amessege_input_amessege_component__WEBPACK_IMPORTED_MODULE_6__["InputAMessegeComponent"]], styles: [".all[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n\r\n.listUsers[_ngcontent-%COMP%]{\r\n    margin: 1%;\r\n    border: solid 2px blue;\r\n\r\n    \r\n}\r\n\r\n.chatAndInput[_ngcontent-%COMP%]{\r\n    margin: 1%;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]{\r\n    border: solid 2px blue;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n    border: solid 2px blue;\r\n    margin-top: 1%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7OztBQUcxQjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYWxse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5saXN0VXNlcnN7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmx1ZTtcclxuXHJcbiAgICBcclxufVxyXG4uY2hhdEFuZElucHV0e1xyXG4gICAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLmNoYXR7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibHVlO1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibHVlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcblxyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__["SendDataService"] }, { type: src_app_can_activ_service__WEBPACK_IMPORTED_MODULE_3__["CanActivService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/input-amessege/input-amessege.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/comps/input-amessege/input-amessege.component.ts ***!
  \******************************************************************/
/*! exports provided: InputAMessegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAMessegeComponent", function() { return InputAMessegeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/get-data.service */ "./src/app/services/get-data.service.ts");
/* harmony import */ var src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/send-data.service */ "./src/app/services/send-data.service.ts");




class InputAMessegeComponent {
    constructor(srv, srvData) {
        this.srv = srv;
        this.srvData = srvData;
        this.myPerson = "הודעה";
    }
    ngOnInit() {
        this.srvData.clickPerson.subscribe(val => { this.myPersonSend = val, this.myPerson = `הודעה ל${val.firstName} ${val.lastName}`; });
        //  this.srv.personU.subscribe(val=> this.mypersonSendTo = val.id)
        this.input = document.getElementById('inputSend');
    }
    send() {
        // console.log(this.myPersonSend);
        let date = new Date();
        //     console.log(date);
        let text = this.input.value;
        let address;
        let addressName;
        let addressee = this.myPersonSend.id;
        let addresseeName = `${this.myPersonSend.firstName} ${this.myPersonSend.lastName}`;
        this.srvData.personU.subscribe(val => {
            address = val.id;
            addressName = `${val.firstName} ${val.lastName}`;
        });
        let post = {
            id: ++this.srvData.counter,
            address: address,
            addressName: addressName,
            addressee: addressee,
            addresseeName: addresseeName,
            date: new Date(),
            dateTime: `${date.getHours()} : ${date.getMinutes()}`,
            dateDay: date.toLocaleDateString(),
            text: text
        };
        this.srv.sendPost(post);
        this.input.value = '';
    }
    return() {
        if (this.myPersonSend == undefined) {
            this.input.value = '';
            alert("הכנס נמען שאתה רוצה לשלוח לו");
        }
    }
}
InputAMessegeComponent.ɵfac = function InputAMessegeComponent_Factory(t) { return new (t || InputAMessegeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__["SendDataService"])); };
InputAMessegeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputAMessegeComponent, selectors: [["app-input-amessege"]], decls: 6, vars: 1, consts: [[1, "input-group"], [1, "input-group-prepend", 2, "display", "flex"], [3, "click"], ["dir", "rtl", "id", "inputSend", "aria-label", "With textarea", 1, "form-control", 3, "placeholder", "input", "keyup.enter"], ["inp", ""]], template: function InputAMessegeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputAMessegeComponent_Template_button_click_2_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05E9\u05DC\u05D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputAMessegeComponent_Template_textarea_input_4_listener() { return ctx.return(); })("keyup.enter", function InputAMessegeComponent_Template_textarea_keyup_enter_4_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.myPerson);
    } }, styles: ["div[_ngcontent-%COMP%]{\r\nwidth: 75vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaW5wdXQtYW1lc3NlZ2UvaW5wdXQtYW1lc3NlZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2lucHV0LWFtZXNzZWdlL2lucHV0LWFtZXNzZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbndpZHRoOiA3NXZ3O1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputAMessegeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-amessege',
                templateUrl: './input-amessege.component.html',
                styleUrls: ['./input-amessege.component.css']
            }]
    }], function () { return [{ type: src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"] }, { type: src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__["SendDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/list-nams/list-nams.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comps/list-nams/list-nams.component.ts ***!
  \********************************************************/
/*! exports provided: ListNamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNamsComponent", function() { return ListNamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/send-data.service */ "./src/app/services/send-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ListNamsComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListNamsComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const i_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sendPersom(i_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r1.firstName, " ", i_r1.lastName, " ");
} }
class ListNamsComponent {
    constructor(stor, srvData) {
        this.stor = stor;
        this.srvData = srvData;
        this.users = [];
        this.myusers = [];
    }
    ngOnInit() {
        this.srvData.myUsers.subscribe(val => {
            for (let i in val) {
                if (val[i].firstName != undefined) {
                    this.myusers.push(val[i]);
                }
            }
            this.users = this.myusers;
        });
        // this.srv.myUsers.subscribe(val => {this.users = val, this.myusers=val})
    }
    sendPersom(person) {
        this.srvData.getFilterDataMessege(person);
    }
    myinp(input) {
        this.users = this.myusers.filter((val) => val.firstName.toLowerCase().startsWith(input));
    }
    log() {
    }
}
ListNamsComponent.ɵfac = function ListNamsComponent_Factory(t) { return new (t || ListNamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__["SendDataService"])); };
ListNamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListNamsComponent, selectors: [["app-list-nams"]], decls: 6, vars: 1, consts: [[1, "all"], [1, "persons"], [1, "input-group"], ["type", "text", "placeholder", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D7\u05D5\u05E4\u05E9\u05D9", 1, "form-control", 3, "input"], [1, "buttons"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function ListNamsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ListNamsComponent_Template_input_input_3_listener($event) { return ctx.myinp($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListNamsComponent_button_5_Template, 2, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".all[_ngcontent-%COMP%]{\r\n    width: 15vw;\r\n    height: 90vh;\r\n    overflow: auto;\r\n    \r\n    text-align: center;\r\n    margin-top: 20px\r\n}\r\n    \r\n\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    width: 80%;\r\n    height: 30px;\r\n    border:none;\r\n    border-radius:1.5rem;\r\n    padding: 1%;\r\n    cursor: pointer;\r\n    background: #0062cc;\r\n    color: #fff;\r\n    \r\n    \r\n}\r\n    \r\n\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n}\r\n    \r\n\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n   margin-left: 17%;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbGlzdC1uYW1zL2xpc3QtbmFtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQjtBQUNKOzs7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7OztBQUdmOzs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7O0FBR0E7SUFDSSxVQUFVO0dBQ1gsZ0JBQWdCO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvbGlzdC1uYW1zL2xpc3QtbmFtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbHtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4XHJcbn1cclxuICAgIFxyXG5cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MS41cmVtO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListNamsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-nams',
                templateUrl: './list-nams.component.html',
                styleUrls: ['./list-nams.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_2__["SendDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/open/open.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/open/open.component.ts ***!
  \**********************************************/
/*! exports provided: OpenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenComponent", function() { return OpenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class OpenComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigate(['/logIn']);
    }
    registration() {
        this.router.navigate(['/registration']);
    }
}
OpenComponent.ɵfac = function OpenComponent_Factory(t) { return new (t || OpenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
OpenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpenComponent, selectors: [["app-open"]], decls: 31, vars: 0, consts: [[1, "header"], ["id", "s"], ["id", "l"], ["id", "a"], ["id", "c"], ["id", "k"], [1, "allData"], [1, "explain"], [2, "text-decoration", "underline"], [1, "buttons"], [1, "login", 3, "click"], [1, "registration", 3, "click"], [1, "img"], ["src", "https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg", "srcset", "https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote.jpg 1x, https://a.slack-edge.com/dd0405/marketing/img/solutions/remote-work/img-hero-remote@2x.jpg 2x", "alt", "A Slack channel surrounded by people\u2019s profile photos and messages like \u201CWorking from home!\u201D and \u201CCommuting, be there soon\u201D"]], template: function OpenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "WORK FROM HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Slack brings the team together, wherever you are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "With all of your communication and tools in one place, remote teams will stay productive no matter where you\u2019re working from.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpenComponent_Template_button_click_25_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpenComponent_Template_button_click_27_listener() { return ctx.registration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".all[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\n.allData[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    width: 90vw;\r\n    height: 90vh;\r\n    \r\n    display: flex;\r\n     justify-content: center;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.img[_ngcontent-%COMP%]{\r\n    width: 30%;\r\nmargin-top: 6%;\r\n\r\n}\r\n\r\n.explain[_ngcontent-%COMP%]{\r\n    width: 30%;\r\nmargin-top: 6%;\r\nmargin-right: 5%;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-left: 43%;\r\n    color: rgb(129, 33, 97)\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    border:none;\r\n    border-radius:1.5rem;\r\n    padding: 1%;\r\n    width: 30%;\r\n    cursor: pointer;\r\n    background: #0062cc;\r\n    color: #fff;\r\n    margin: auto;\r\n\r\n}\r\n\r\n#s[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgba(134, 2, 95, 0.979);\r\n}\r\n\r\n#l[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgb(247, 206, 23);\r\n}\r\n\r\n#a[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgb(19, 134, 4);\r\n}\r\n\r\n#c[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgb(11, 163, 223);\r\n}\r\n\r\n#k[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgba(134, 2, 95, 0.979);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvb3Blbi9vcGVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixhQUFhO0tBQ1osdUJBQXVCO0lBQ3hCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkLGNBQWM7O0FBRWQ7O0FBRUE7SUFDSSxVQUFVO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQjs7QUFHQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvb3Blbi9vcGVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGxEYXRhe1xyXG4gICAgXHJcbiAgICBcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgICB3aWR0aDogMzAlO1xyXG5tYXJnaW4tdG9wOiA2JTtcclxuXHJcbn1cclxuXHJcbi5leHBsYWlue1xyXG4gICAgd2lkdGg6IDMwJTtcclxubWFyZ2luLXRvcDogNiU7XHJcbm1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MyU7XHJcbiAgICBjb2xvcjogcmdiKDEyOSwgMzMsIDk3KVxyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MS41cmVtO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjJjYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxufVxyXG5cclxuI3N7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTM0LCAyLCA5NSwgMC45NzkpO1xyXG59XHJcblxyXG4jbHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI0NywgMjA2LCAyMyk7XHJcbn1cclxuXHJcbiNhe1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiByZ2IoMTksIDEzNCwgNCk7XHJcbn1cclxuXHJcbiNje1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiByZ2IoMTEsIDE2MywgMjIzKTtcclxufVxyXG5cclxuI2t7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTM0LCAyLCA5NSwgMC45NzkpO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-open',
                templateUrl: './open.component.html',
                styleUrls: ['./open.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/registration/registration.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_can_activ_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/can-activ.service */ "./src/app/can-activ.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/send-data.service */ "./src/app/services/send-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/get-data.service */ "./src/app/services/get-data.service.ts");










class RegistrationComponent {
    constructor(fb, srvCanActivate, stor, fireStore, srvData, router, srvGet) {
        this.fb = fb;
        this.srvCanActivate = srvCanActivate;
        this.stor = stor;
        this.fireStore = fireStore;
        this.srvData = srvData;
        this.router = router;
        this.srvGet = srvGet;
        this.registrationFromG = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    guard(firstName, lastName, email, password, ConfirmPassword) {
        if (password !== ConfirmPassword) {
            alert("אימות סיסמא שגוי");
            return;
        }
        console.log(this.registrationFromG.valid);
        if (this.registrationFromG.valid) {
            let id = Math.floor(Math.random() * 10000000);
            let person = {
                id,
                firstName,
                lastName,
                email,
                password
            };
            console.log(person);
            this.srvGet.addPerson(person);
            this.srvData.personU.next(person);
            // setTimeout(()=>{
            //   this.srvData.personUser.next(person)
            // },3000)
            console.log("go to can activ");
            this.router.navigate(['/home']);
            this.srvCanActivate.logIn = true;
        }
        else {
            console.log('kafatz');
            console.log(this.registrationFromG.errors);
            alert("פרטים לא שלמים");
        }
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_can_activ_service__WEBPACK_IMPORTED_MODULE_2__["CanActivService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_5__["SendDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_7__["GetDataService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 43, vars: 1, consts: [[1, "form-signin", 3, "formGroup"], [1, "header"], ["id", "s"], ["id", "l"], ["id", "a"], ["id", "c"], ["id", "k"], [1, "container", "register-form"], [1, "form"], [1, "note"], [2, "text-decoration", "underline"], [1, "form-content"], [1, "rishum"], [1, "firstName"], ["type", "text", "formControlName", "firstName", "placeholder", "first Name *", "value", "", 1, "form-control"], ["firstName", ""], [1, "lastName"], ["type", "text", "formControlName", "lastName", "placeholder", "last name *", "value", "", 1, "form-control"], ["lastName", ""], [1, "email"], ["type", "text", "formControlName", "email", "placeholder", "email *", "value", "", 1, "form-control"], ["email", ""], [1, "Password"], ["type", "password", "formControlName", "password", "placeholder", "Your Password *", "value", "", 1, "form-control"], ["Password", ""], [1, "ConfirmPassword"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password *", "value", "", 1, "form-control"], ["ConfirmPassword", ""], ["type", "submit", 1, "btnSubmit", 3, "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This is a simpleRegister Form slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return ctx.guard(_r0.value, _r1.value, _r2.value, _r3.value, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationFromG);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    height: 80px;\r\n    background: -webkit-linear-gradient(left, #0072ff, #8811c5);\r\n    color: #fff;\r\n    font-weight: bold;\r\n    line-height: 80px;\r\n}\r\n\r\n\r\n\r\n\r\n.form[_ngcontent-%COMP%]{\r\n    border: 5px solid rgb(105, 229, 240);\r\n    margin-top: 3%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n    height: 70vh;\r\n}\r\n\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n\r\n\r\n\r\n\r\n.btnSubmit[_ngcontent-%COMP%]\r\n{\r\n    border:none;\r\n    border-radius:1.5rem;\r\n    padding: 1%;\r\n    width: 20%;\r\n    cursor: pointer;\r\n    background: #0062cc;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: larger;\r\n}\r\n\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-left: 43%;\r\n    color: rgb(129, 33, 97)\r\n}\r\n\r\n\r\n\r\n\r\n#s[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgba(134, 2, 95, 0.979);\r\n}\r\n\r\n\r\n\r\n\r\n#l[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgb(247, 206, 23);\r\n}\r\n\r\n\r\n\r\n\r\n#a[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgb(19, 134, 4);\r\n}\r\n\r\n\r\n\r\n\r\n#c[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgb(11, 163, 223);\r\n}\r\n\r\n\r\n\r\n\r\n#k[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgba(134, 2, 95, 0.979);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osMkRBQTJEO0lBQzNELFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOzs7OztBQUtBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOzs7OztBQUdBOztJQUVJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7Ozs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7Ozs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEI7QUFDSjs7Ozs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7Ozs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOzs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7Ozs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7Ozs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGVcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwNzJmZiwgIzg4MTFjNSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5mb3Jte1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDEwNSwgMjI5LCAyNDApO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuXHJcbi5idG5TdWJtaXRcclxue1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOjEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMwMDYyY2M7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MyU7XHJcbiAgICBjb2xvcjogcmdiKDEyOSwgMzMsIDk3KVxyXG59XHJcblxyXG4jc3tcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgxMzQsIDIsIDk1LCAwLjk3OSk7XHJcbn1cclxuXHJcbiNse1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiByZ2IoMjQ3LCAyMDYsIDIzKTtcclxufVxyXG5cclxuI2F7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYigxOSwgMTM0LCA0KTtcclxufVxyXG5cclxuI2N7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYigxMSwgMTYzLCAyMjMpO1xyXG59XHJcblxyXG4ja3tcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgxMzQsIDIsIDk1LCAwLjk3OSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_can_activ_service__WEBPACK_IMPORTED_MODULE_2__["CanActivService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_5__["SendDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_7__["GetDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var src_app_services_stor_selectorim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/stor/selectorim */ "./src/app/services/stor/selectorim.ts");
/* harmony import */ var src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/send-data.service */ "./src/app/services/send-data.service.ts");
/* harmony import */ var src_app_can_activ_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/can-activ.service */ "./src/app/can-activ.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/get-data.service */ "./src/app/services/get-data.service.ts");











class SignInComponent {
    constructor(fb, srvData, srvCanActivate, router, store, srv) {
        this.fb = fb;
        this.srvData = srvData;
        this.srvCanActivate = srvCanActivate;
        this.router = router;
        this.store = store;
        this.srv = srv;
        this.signInFromG = this.fb.group({
            myEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            myPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(9)]],
            remmberMe: ['']
        });
    }
    ngOnInit() {
    }
    onSubmitForm() {
        let user = [];
        // user.push(this.signInFromG.controls.myEmail.value,this.signInFromG.controls.myPassword.value,rememberMe)
        // this.srvData.usersFromLog.push(user)
    }
    guard(email, password, rememberMe) {
        this.srv.myUsers.subscribe(val => {
            console.log(val);
            for (let i of val) {
                if (i.email == email && i.password == password) {
                    this.srvData.personU.next(i);
                    this.srvData.personU.subscribe(vv => console.log(vv));
                    this.router.navigate(['/home']);
                    this.srvCanActivate.logIn = true;
                    return;
                }
            }
            if (this.signInFromG.valid) {
                alert("פרטים לא נכונים");
            }
            else {
                alert("פרטים לא מלאים");
            }
        });
    }
    log() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_services_stor_selectorim__WEBPACK_IMPORTED_MODULE_3__["selectFeature"])).subscribe(val => console.log(val));
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_4__["SendDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_can_activ_service__WEBPACK_IMPORTED_MODULE_5__["CanActivService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_7__["GetDataService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 43, vars: 1, consts: [[1, "form-signin", 3, "formGroup"], [1, "header"], ["id", "s"], ["id", "l"], ["id", "a"], ["id", "c"], ["id", "k"], [1, "container", "register-form"], [1, "form"], [1, "note"], [2, "text-decoration", "underline"], [1, "form-content"], [1, "rishum"], [1, "firstName"], ["type", "email", "formControlName", "myEmail", "placeholder", "email address *", "value", "", 1, "form-control"], ["inputEmail", ""], [1, "form-group"], ["type", "password", "formControlName", "myPassword", "placeholder", "Your Password *", "value", "", 1, "form-control"], ["inputPassword", ""], ["type", "checkbox", "value", "true"], ["rememberMe", ""], ["type", "button", 1, "btnSubmit", 3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sing in to slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx.guard(_r0.value, _r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInFromG);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    height: 80px;\r\n    background: -webkit-linear-gradient(left, #0072ff, #8811c5);\r\n    color: #fff;\r\n    font-weight: bold;\r\n    line-height: 80px;\r\n}\r\n\r\n\r\n\r\n\r\n.form[_ngcontent-%COMP%]{\r\n    border: 5px solid rgb(105, 229, 240);\r\n    \r\n    margin-top: 3%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n    height: 70vh;\r\n}\r\n\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 60%;\r\n}\r\n\r\n\r\n\r\n\r\n.btnSubmit[_ngcontent-%COMP%]\r\n{\r\n    border:none;\r\n    border-radius:1.5rem;\r\n    padding: 1%;\r\n    width: 20%;\r\n    cursor: pointer;\r\n    background: #0062cc;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: larger;\r\n}\r\n\r\n\r\n\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-left: 43%;\r\n    color: rgb(129, 33, 97)\r\n}\r\n\r\n\r\n\r\n\r\n#s[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgba(134, 2, 95, 0.979);\r\n}\r\n\r\n\r\n\r\n\r\n#l[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgb(247, 206, 23);\r\n}\r\n\r\n\r\n\r\n\r\n#a[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgb(19, 134, 4);\r\n}\r\n\r\n\r\n\r\n\r\n#c[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgb(11, 163, 223);\r\n}\r\n\r\n\r\n\r\n\r\n#k[_ngcontent-%COMP%]{\r\n    font-size: 100px;\r\n    color: rgba(134, 2, 95, 0.979);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyREFBMkQ7SUFDM0QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7Ozs7O0FBS0E7SUFDSSxvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOzs7OztBQUdBOztJQUVJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7Ozs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7Ozs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEI7QUFDSjs7Ozs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7Ozs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOzs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7Ozs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7Ozs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4ubm90ZVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA3MmZmLCAjODgxMWM1KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmZvcm17XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTA1LCAyMjksIDI0MCk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMjA5LCAyMzgsIDgyKTsgKi9cclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcblxyXG4uYnRuU3VibWl0XHJcbntcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDMlO1xyXG4gICAgY29sb3I6IHJnYigxMjksIDMzLCA5NylcclxufVxyXG5cclxuI3N7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTM0LCAyLCA5NSwgMC45NzkpO1xyXG59XHJcblxyXG4jbHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI0NywgMjA2LCAyMyk7XHJcbn1cclxuXHJcbiNhe1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiByZ2IoMTksIDEzNCwgNCk7XHJcbn1cclxuXHJcbiNje1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiByZ2IoMTEsIDE2MywgMjIzKTtcclxufVxyXG5cclxuI2t7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTM0LCAyLCA5NSwgMC45NzkpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_send_data_service__WEBPACK_IMPORTED_MODULE_4__["SendDataService"] }, { type: src_app_can_activ_service__WEBPACK_IMPORTED_MODULE_5__["CanActivService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_7__["GetDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/get-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/get-data.service.ts ***!
  \**********************************************/
/*! exports provided: GetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataService", function() { return GetDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _stor_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stor/events */ "./src/app/services/stor/events.ts");
/* harmony import */ var _stor_postim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stor/postim */ "./src/app/services/stor/postim.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");







class GetDataService {
    // personU = new BehaviorSubject(null)
    constructor(stor, fireStore) {
        this.stor = stor;
        this.fireStore = fireStore;
        this.counter = 0;
        this.myUsers = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.myAllPosts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.myUsers = this.fireStore.collection("person").valueChanges();
        this.myUsers.subscribe(val => this.stor.dispatch(Object(_stor_events__WEBPACK_IMPORTED_MODULE_2__["editPerson"])({ personse: val })));
        this.myAllPosts = this.fireStore.collection("posts").valueChanges();
        this.myAllPosts.subscribe(val => {
            this.counter = val.length;
            this.stor.dispatch(Object(_stor_postim__WEBPACK_IMPORTED_MODULE_3__["editPost"])({ posts: val }));
        });
    }
    addPerson(person) {
        this.fireStore.collection("person").add(person);
    }
    sendPost(post) {
        this.fireStore.collection("posts").add(post);
    }
}
GetDataService.ɵfac = function GetDataService_Factory(t) { return new (t || GetDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"])); };
GetDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetDataService, factory: GetDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/send-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/send-data.service.ts ***!
  \***********************************************/
/*! exports provided: SendDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendDataService", function() { return SendDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _stor_selectorim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stor/selectorim */ "./src/app/services/stor/selectorim.ts");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-data.service */ "./src/app/services/get-data.service.ts");







class SendDataService {
    constructor(stor, srvGet) {
        this.stor = stor;
        this.srvGet = srvGet;
        this.counter = 0;
        // myPost:Observable<any> = new Observable()
        this.clickPerson = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // sendDataMessege: Subject<persone> = new Subject()
        this.arrayPost = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.personU = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.myUsers = this.stor.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_stor_selectorim__WEBPACK_IMPORTED_MODULE_3__["selectFeature"]));
        this.myAllPosts = this.stor.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_stor_selectorim__WEBPACK_IMPORTED_MODULE_3__["selectFeaturePost"]));
        // this.personU = this.srvGet.personU
        this.counter = this.srvGet.counter;
    }
    getFilterDataMessege(name) {
        let myUser;
        // let itsPost=[]
        this.personU.subscribe(val => { myUser = val; });
        this.clickPerson.next(name);
        this.myAllPosts.subscribe(val => {
            let arr = [];
            let itsPost = [];
            for (let i in val) {
                if ((val[i].address == name.id && val[i].addressee == myUser.id) || (val[i].address == myUser.id && val[i].addressee == name.id)) {
                    arr.push(val[i]);
                }
                ;
            }
            console.log(arr);
            for (let i = 0; i < arr.length; i++) {
                for (let j of arr) {
                    console.log(j);
                    if (j.id == i + 1) {
                        console.log("lllllll");
                        itsPost.push(j);
                    }
                }
            }
            console.log(itsPost);
            this.arrayPost.next(itsPost);
            // this.myPost= of(itsPost)
        });
    }
    getAllPosts() {
        return this.myAllPosts;
    }
}
SendDataService.ɵfac = function SendDataService_Factory(t) { return new (t || SendDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_get_data_service__WEBPACK_IMPORTED_MODULE_4__["GetDataService"])); };
SendDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SendDataService, factory: SendDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _get_data_service__WEBPACK_IMPORTED_MODULE_4__["GetDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/stor/events.ts":
/*!*****************************************!*\
  !*** ./src/app/services/stor/events.ts ***!
  \*****************************************/
/*! exports provided: addPerson, removePerson, editPerson, stateArrayPerson, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPerson", function() { return addPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePerson", function() { return removePerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPerson", function() { return editPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateArrayPerson", function() { return stateArrayPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const addPerson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Add Person] Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removePerson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Remove Person] Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editPerson = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[edit Person] Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const stateArrayPerson = {
    personse: []
};
const eventsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(stateArrayPerson, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(addPerson, (state, newPerson) => {
    return Object.assign(Object.assign({}, state), { personse: [...state.personse, newPerson] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(removePerson, (state, id) => {
    let delPerson = state.personse.filter(event => event.id !== id.id);
    return Object.assign(Object.assign({}, state), { delPerson });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(editPerson, (state, newPersons) => {
    let array = newPersons.personse;
    return Object.assign(Object.assign({}, state), array);
}));
function reducer(state, action) {
    return eventsReducer(state, action);
}


/***/ }),

/***/ "./src/app/services/stor/postim.ts":
/*!*****************************************!*\
  !*** ./src/app/services/stor/postim.ts ***!
  \*****************************************/
/*! exports provided: addPost, removePost, editPost, stateArrayPost, reducerPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePost", function() { return removePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPost", function() { return editPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateArrayPost", function() { return stateArrayPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerPost", function() { return reducerPost; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const addPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Add Post] Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Remove Post] Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[edit Person] Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const stateArrayPost = {
    posts: []
};
const eventsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(stateArrayPost, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(addPost, (state, newPost) => {
    return Object.assign(Object.assign({}, state), { posts: [...state.posts, newPost] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(editPost, (state, newPost) => {
    console.log("postedit");
    let array = newPost.posts;
    return Object.assign(Object.assign({}, state), array);
}));
// on(removePost, (state ,id:{id:number}) => {  
// let delPost = state.posts.filter(post=>post.id!==id.id);
// return { ...state,delPost} }),
function reducerPost(state, action) {
    console.log(action);
    return eventsReducer(state, action);
}


/***/ }),

/***/ "./src/app/services/stor/selectorim.ts":
/*!*********************************************!*\
  !*** ./src/app/services/stor/selectorim.ts ***!
  \*********************************************/
/*! exports provided: selectFeature, usersFeature, selectUserNameFeature, selectFeaturePost, postsFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeature", function() { return selectFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersFeature", function() { return usersFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserNameFeature", function() { return selectUserNameFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeaturePost", function() { return selectFeaturePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsFeature", function() { return postsFeature; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const selectFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('users');
const usersFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFeature, (state) => state.personse);
const selectUserNameFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFeature, (state) => state.personse.map(x => x.email));
const selectFeaturePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('posts');
const postsFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFeaturePost, (state) => state.posts);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyD3XXJQKDJaQ9_1-ESm9oGNohJ-441fdM0',
        authDomain: 'slack-mimic-1db80.firebaseapp.com',
        databaseURL: 'https://slack-mimic-1db80.firebaseio.com',
        projectId: 'slack-mimic-1db80',
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\New folder\slack\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map