webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts"
	],
	"./pages/default/about/about-create/about-create.module": [
		"../../../../../src/app/theme/pages/default/about/about-create/about-create.module.ts",
		"common",
		"about-create.module"
	],
	"./pages/default/about/about.module": [
		"../../../../../src/app/theme/pages/default/about/about.module.ts",
		"common",
		"about.module"
	],
	"./pages/default/configuration/configuration.module": [
		"../../../../../src/app/theme/pages/default/configuration/configuration.module.ts",
		"common",
		"configuration.module"
	],
	"./pages/default/header/header-actions/header-actions.module": [
		"../../../../../src/app/theme/pages/default/header/header-actions/header-actions.module.ts",
		"header-actions.module"
	],
	"./pages/default/header/header-profile/header-profile.module": [
		"../../../../../src/app/theme/pages/default/header/header-profile/header-profile.module.ts",
		"header-profile.module"
	],
	"./pages/default/index/index.module": [
		"../../../../../src/app/theme/pages/default/index/index.module.ts",
		"common",
		"index.module"
	],
	"./pages/default/not-found/not-found.module": [
		"../../../../../src/app/theme/pages/default/not-found/not-found.module.ts",
		"not-found.module"
	],
	"./pages/default/product-management/product-management.module": [
		"../../../../../src/app/theme/pages/default/product-management/product-management.module.ts",
		"common",
		"product-management.module"
	],
	"./pages/default/product/product.module": [
		"../../../../../src/app/theme/pages/default/product/product.module.ts",
		"common",
		"product.module"
	],
	"./pages/default/project/project.module": [
		"../../../../../src/app/theme/pages/default/project/project.module.ts",
		"common",
		"project.module"
	],
	"./pages/self-layout-blank/snippets/pages/errors/errors-error-1/errors-error-1.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-1/errors-error-1.module.ts",
		"errors-error-1.module"
	],
	"./pages/self-layout-blank/snippets/pages/errors/errors-error-2/errors-error-2.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-2/errors-error-2.module.ts",
		"errors-error-2.module"
	],
	"./pages/self-layout-blank/snippets/pages/errors/errors-error-3/errors-error-3.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-3/errors-error-3.module.ts",
		"errors-error-3.module"
	],
	"./pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.module.ts",
		"errors-error-4.module"
	],
	"./pages/self-layout-blank/snippets/pages/errors/errors-error-5/errors-error-5.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-5/errors-error-5.module.ts",
		"errors-error-5.module"
	],
	"./pages/self-layout-blank/snippets/pages/errors/errors-error-6/errors-error-6.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-6/errors-error-6.module.ts",
		"errors-error-6.module"
	],
	"./pages/self-layout-blank/snippets/pages/user/user-login-1/user-login-1.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/user/user-login-1/user-login-1.module.ts",
		"user-login-1.module"
	],
	"./pages/self-layout-blank/snippets/pages/user/user-login-2/user-login-2.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/user/user-login-2/user-login-2.module.ts",
		"user-login-2.module"
	],
	"./pages/self-layout-blank/snippets/pages/user/user-login-3/user-login-3.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/user/user-login-3/user-login-3.module.ts",
		"user-login-3.module"
	],
	"./pages/self-layout-blank/snippets/pages/user/user-login-4/user-login-4.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/user/user-login-4/user-login-4.module.ts",
		"user-login-4.module"
	],
	"./pages/self-layout-blank/snippets/pages/user/user-login-5/user-login-5.module": [
		"../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/user/user-login-5/user-login-5.module.ts",
		"user-login-5.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_directives/href-prevent-default.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrefPreventDefaultDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrefPreventDefaultDirective = (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HrefPreventDefaultDirective.prototype, "href", void 0);
    HrefPreventDefaultDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "[href]",
            host: { '(click)': 'preventDefault($event)' },
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], HrefPreventDefaultDirective);
    return HrefPreventDefaultDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/unwrap-tag.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnwrapTagDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnwrapTagDirective = (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].unwrapTag(nativeElement);
    };
    UnwrapTagDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "[appunwraptag]",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], UnwrapTagDirective);
    return UnwrapTagDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_services/about.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_service__ = __webpack_require__("../../../../../src/app/_services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutService = (function () {
    function AboutService(http, setting) {
        this.http = http;
        this.setting = setting;
    }
    AboutService.prototype.createAbout = function (about) {
        return this.http.post(this.setting.admin + 'api/about/create', about)
            .map(function (res) { return res; })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.json()); });
    };
    AboutService.prototype.getAbouts = function () {
        return this.http.get(this.setting.admin + 'api/about/abouts')
            .map(function (res) { return res; })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.json()); });
    };
    AboutService.prototype.updateAbout = function (about) {
        return this.http.put(this.setting.admin + 'api/about/update', about)
            .map(function (res) { return res; })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.json()); });
    };
    AboutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__setting_service__["a" /* SettingsService */]])
    ], AboutService);
    return AboutService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/handle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// operators



var HttpInterceptor = (function (_super) {
    __extends(HttpInterceptor, _super);
    function HttpInterceptor(backend, options, http) {
        var _this = _super.call(this, backend, options) || this;
        _this.http = http;
        _this.handleError = function (error) {
            // Do messaging and error handling here
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        };
        return _this;
    }
    HttpInterceptor.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options)
            .catch(this.handleError);
    };
    HttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["k" /* XHRBackend */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* RequestOptions */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]])
    ], HttpInterceptor);
    return HttpInterceptor;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]));



/***/ }),

/***/ "../../../../../src/app/_services/script-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = __WEBPACK_IMPORTED_MODULE_1_jquery__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                __WEBPACK_IMPORTED_MODULE_1_jquery__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/setting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SettingsService = (function () {
    function SettingsService() {
        this._admin = 'http://localhost:56310/';
        this._FORMATDATETIME = "dd/MM/yyyy";
        this._FORMATDATEMOMENT = "DD/MM/YYYY HH:mm:ss";
    }
    Object.defineProperty(SettingsService.prototype, "FORMATDATETIME", {
        get: function () { return this._FORMATDATETIME; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "FORMATDATE_MOMENT", {
        get: function () { return this._FORMATDATEMOMENT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "admin", {
        get: function () { return this._admin; },
        enumerable: true,
        configurable: true
    });
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__auth_logout_logout_component__["a" /* LogoutComponent */] },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\r\n<div class=\"m-page-loader m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\r\n\t<div class=\"m-blockui\">\r\n\t\t<span>\r\n\t\t\tPlease wait...\r\n\t\t</span>\r\n\t\t<span>\r\n\t\t\t<div class=\"m-loader m-loader--brand\"></div>\r\n\t\t</span>\r\n\t</div>\r\n</div>\r\n<!-- end::Page loader -->                      \t<!-- begin:: Page -->\r\n<router-outlet></router-outlet>\r\n<!-- end:: Page -->\r\n<app-quick-sidebar></app-quick-sidebar>\r\n<app-scroll-top></app-scroll-top>\r\n<app-tooltips></app-tooltips>\r\n<!--begin::Base Scripts -->             \t    \t \t\t    \t \t\t\t\t<!--end::Base Scripts -->                       <!--begin::Page Vendors -->                                   <!--end::Page Vendors -->                                                              <!--begin::Page Snippets -->                                   <!--end::Page Snippets -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'body',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_component__ = __webpack_require__("../../../../../src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_theme_routing_module__ = __webpack_require__("../../../../../src/app/theme/theme-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_setting_service__ = __webpack_require__("../../../../../src/app/_services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_about_service__ = __webpack_require__("../../../../../src/app/_services/about.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_handle_service__ = __webpack_require__("../../../../../src/app/_services/handle.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_component__["a" /* ThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__theme_layouts_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__theme_theme_routing_module__["a" /* ThemeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__["AuthModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_script_loader_service__["a" /* ScriptLoaderService */],
                __WEBPACK_IMPORTED_MODULE_10__services_setting_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_about_service__["a" /* AboutService */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_13__services_handle_service__["a" /* HttpInterceptor */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"m-alert m-alert--outline alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n\t<span>{{message.text}}</span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/auth/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/auth/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this._userService.verify().map(function (data) {
            if (data !== null) {
                // logged in so return true
                return true;
            }
            // error when verify so redirect to login page with the return url
            _this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }, function (error) {
            // error when verify so redirect to login page with the return url
            _this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mockBackEndFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__("../../../http/esm5/testing.js");


function mockBackEndFactory(backend, options, realBackend) {
    // array in local storage for registered users
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // fake token
    var token = 'fake-jwt-token';
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Post) {
                // get parameters from post request
                var params_1 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === params_1.email && user.password === params_1.password;
                });
                // default account
                if (params_1.email === 'admin@divaco.com' && params_1.password === 'divaco123!@#') {
                    filteredUsers[0] = {
                        fullName: 'Admin',
                        email: 'admin@bambo.com',
                        password: 'bambo123!@#',
                    };
                }
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({
                        status: 200,
                        body: {
                            id: user.id,
                            fullName: user.fullName,
                            email: user.email,
                            token: token
                        }
                    })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('Email or password is incorrect'));
                }
                return;
            }
            // get users
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200, body: users })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // get user by id
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) {
                        return user.id === id_1;
                    });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    // respond 200 OK with user
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200, body: user })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // create user
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Post) {
                // get new user object from post body
                var newUser_1 = JSON.parse(connection.request.getBody());
                // validation
                var duplicateUser = users.filter(function (user) {
                    return user.email === newUser_1.email;
                }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Email "' + newUser_1.email + '" is already registered'));
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200 })));
                return;
            }
            // delete user
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Delete) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200 })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // token verify
            if (connection.request.url.endsWith('/api/verify') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200, body: { status: 'ok' } })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // forgot password
            if (connection.request.url.endsWith('/api/forgot-password') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestMethod */].Post) {
                // get parameters from post request
                var params_2 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.email === params_2.email;
                });
                if (filteredUsers.length) {
                    // in real world, if email is valid, send email change password link
                    var user = filteredUsers[0];
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({ status: 200 })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('User with this email does not exist'));
                }
                return;
            }
            // pass through any requests not handled above
            var realHttp = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */](realBackend, options);
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* RequestOptions */]({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 500);
    });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */](backend, options);
}
var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */],
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BaseRequestOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["k" /* XHRBackend */]],
    useFactory: mockBackEndFactory
};


/***/ }),

/***/ "../../../../../src/app/auth/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake_backend__ = __webpack_require__("../../../../../src/app/auth/_helpers/fake-backend.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fake_backend__["a"]; });



/***/ }),

/***/ "../../../../../src/app/auth/_helpers/login-custom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCustom; });
var LoginCustom = (function () {
    function LoginCustom() {
    }
    LoginCustom.handleSignInFormSubmit = function () {
        $('#m_login_signin_submit').click(function (e) {
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.displaySignUpForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signin');
        login.addClass('m-login--signup');
        login.find('.m-login__signup').animateClass('flipInX animated');
    };
    LoginCustom.displaySignInForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signup');
        try {
            $('form').data('validator').resetForm();
        }
        catch (e) {
        }
        login.addClass('m-login--signin');
        login.find('.m-login__signin').animateClass('flipInX animated');
    };
    LoginCustom.displayForgetPasswordForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--signin');
        login.removeClass('m-login--signup');
        login.addClass('m-login--forget-password');
        login.find('.m-login__forget-password').animateClass('flipInX animated');
    };
    LoginCustom.handleFormSwitch = function () {
        $('#m_login_forget_password').click(function (e) {
            e.preventDefault();
            LoginCustom.displayForgetPasswordForm();
        });
        $('#m_login_forget_password_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
        $('#m_login_signup').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignUpForm();
        });
        $('#m_login_signup_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
    };
    LoginCustom.handleSignUpFormSubmit = function () {
        $('#m_login_signup_submit').click(function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    fullname: {
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    password: {
                        required: true,
                    },
                    rpassword: {
                        required: true,
                    },
                    agree: {
                        required: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.handleForgetPasswordFormSubmit = function () {
        $('#m_login_forget_password_submit').click(function (e) {
            var btn = $(e.target);
            var form = $(e.target).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                    },
                },
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.init = function () {
        LoginCustom.handleFormSwitch();
        LoginCustom.handleSignInFormSubmit();
        LoginCustom.handleSignUpFormSubmit();
        LoginCustom.handleForgetPasswordFormSubmit();
    };
    return LoginCustom;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post('/api/authenticate', JSON.stringify({ email: email, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/auth/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.verify = function () {
        return this.http.get('/api/verify', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.http.post('/api/forgot-password', JSON.stringify({ email: email }), this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */] },
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_alert_component__ = __webpack_require__("../../../../../src/app/auth/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__ = __webpack_require__("../../../../../src/app/auth/_helpers/login-custom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthComponent = (function () {
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.cfr = cfr;
        this.model = {};
        this.loading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        this._script.loadScripts('body', [
            'assets/vendors/base/vendors.bundle.js',
            'assets/demo/default/base/scripts.bundle.js'
        ], true).then(function () {
            __WEBPACK_IMPORTED_MODULE_8__helpers__["a" /* Helpers */].setLoading(false);
            __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__["a" /* LoginCustom */].init();
        });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this._authService.login(this.model.email, this.model.password).subscribe(function (data) {
            _this._router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.showAlert('alertSignin');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this._userService.create(this.model).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Thank you. To complete your registration please check your email.', true);
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__["a" /* LoginCustom */].displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertSignup');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.forgotPass = function () {
        var _this = this;
        this.loading = true;
        this._userService.forgotPassword(this.model.email).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__["a" /* LoginCustom */].displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertForgotPass');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__directives_alert_component__["a" /* AlertComponent */]);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alertSignin', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alertSignup', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertSignup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alertForgotPass', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
            template: __webpack_require__("../../../../../src/app/auth/templates/login-1.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__ = __webpack_require__("../../../http/esm5/testing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_routing_routing__ = __webpack_require__("../../../../../src/app/auth/auth-routing.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_alert_component__ = __webpack_require__("../../../../../src/app/auth/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__("../../../../../src/app/auth/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_index__ = __webpack_require__("../../../../../src/app/auth/_helpers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_7__directives_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__["a" /* LogoutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__auth_routing_routing__["a" /* AuthRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__services_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */],
                // api backend simulation
                __WEBPACK_IMPORTED_MODULE_13__helpers_index__["a" /* fakeBackendProvider */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__["a" /* MockBackend */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BaseRequestOptions */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__directives_alert_component__["a" /* AlertComponent */]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].setLoading(true);
        // reset login status
        this._authService.logout();
        this._router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/auth/logout/logout.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/templates/login-1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin\" id=\"m_login\">\r\n\t<div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\r\n\t\t<div class=\"m-stack m-stack--hor m-stack--desktop\">\r\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid\">\r\n\t\t\t\t<div class=\"m-login__wrapper\">\r\n\t\t\t\t\t<div class=\"m-login__logo\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//logos/logo-2.png\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-login__signin\">\r\n\t\t\t\t\t\t<!-- <div class=\"m-login__head\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\r\n\t\t\t\t\t\t\t\tSign In To Admin\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t<div class=\"m--margin-top-40 m-alert m-alert--outline m-alert--outline-2x alert alert-success fade show\" role=\"alert\">\r\n\t\t\t\t\t\t\t\tUse username\r\n\t\t\t\t\t\t\t\t<span style=\"font-weight: 500;\">\r\n\t\t\t\t\t\t\t\t\tdemo@demo.com\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tand password\r\n\t\t\t\t\t\t\t\t<span style=\"font-weight: 500;\">\r\n\t\t\t\t\t\t\t\t\tdemo\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tto continue or singup.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && signin()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n\t\t\t\t\t\t\t<ng-template #alertSignin></ng-template>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row m-login__form-sub\">\r\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--focus\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember\" [(ngModel)]=\"model.remember\" #remember=\"ngModel\">\r\n\t\t\t\t\t\t\t\t\t\tRemember me\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col m--align-right\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_login_forget_password\" class=\"m-link\">\r\n\t\t\t\t\t\t\t\t\t\tForget Password ?\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signin_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n\t\t\t\t\t\t\t\t\tSign In\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-login__signup\">\r\n\t\t\t\t\t\t<div class=\"m-login__head\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\r\n\t\t\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t<div class=\"m-login__desc\">\r\n\t\t\t\t\t\t\t\tEnter your details to create your account:\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && signup()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n\t\t\t\t\t\t\t<ng-template #alertSignup></ng-template>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Fullname\" name=\"fullname\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"Confirm Password\" name=\"rpassword\" [(ngModel)]=\"model.rpassword\" #rpassword=\"ngModel\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row form-group m-form__group m-login__form-sub\">\r\n\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--focus\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"agree\" [(ngModel)]=\"model.agree\" #agree=\"ngModel\">\r\n\t\t\t\t\t\t\t\t\t\tI Agree the\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link m-link--focus\">\r\n\t\t\t\t\t\t\t\t\t\t\tterms and conditions\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t.\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_signup_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n\t\t\t\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\"  id=\"m_login_signup_cancel\" class=\"btn btn-outline-focus  m-btn m-btn--pill m-btn--custom\">\r\n\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-login__forget-password\">\r\n\t\t\t\t\t\t<div class=\"m-login__head\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\r\n\t\t\t\t\t\t\t\tForgotten Password ?\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t<div class=\"m-login__desc\">\r\n\t\t\t\t\t\t\t\tEnter your email to reset your password:\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form (ngSubmit)=\"f.form.valid && forgotPass()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n\t\t\t\t\t\t\t<ng-template #alertForgotPass></ng-template>\r\n\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"m_email\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\" id=\"m_login_forget_password_submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n\t\t\t\t\t\t\t\t\tRequest\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button [disabled]=\"loading\"  id=\"m_login_forget_password_cancel\" class=\"btn btn-outline-focus m-btn m-btn--pill m-btn--custom\">\r\n\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-stack__item m-stack__item--center\">\r\n\t\t\t\t<div class=\"m-login__account\">\r\n\t\t\t\t\t<span class=\"m-login__account-msg\">\r\n\t\t\t\t\t\tDon't have an account yet ?\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t&nbsp;&nbsp;\r\n\t\t\t\t\t<a href=\"javascript:;\" id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\r\n\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(./assets/app/media/img//bg/bg-4.jpg)\">\r\n\t\t<div class=\"m-grid__item m-grid__item--middle\">\r\n\t\t\t<h3 class=\"m-login__welcome\">\r\n\t\t\t\tJoin Our Community\r\n\t\t\t</h3>\r\n\t\t\t<p class=\"m-login__msg\">\r\n\t\t\t\tLorem ipsum dolor sit amet, coectetuer adipiscing\r\n\t\t\t\t<br>\r\n\t\t\t\telit sed diam nonummy et nibh euismod\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var Helpers = (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](src, function (k, s) {
                __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__breadcrumbs');
        if (__WEBPACK_IMPORTED_MODULE_0_jquery__(ul).length === 0) {
            ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).find('li:not(:first-child)').remove();
        __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](breadcrumbs, function (k, v) {
            var li = __WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<span/>').addClass('m-nav__link-text').text(v.text)));
            __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = __WEBPACK_IMPORTED_MODULE_0_jquery__('body');
        if (enable) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).addClass('m-page--loading-non-block');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\r\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark\" id=\"m_aside_left_close_btn\" appunwraptag=\"\">\r\n\t<i class=\"la la-close\"></i>\r\n</button>\r\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\">\r\n\t<!-- BEGIN: Aside Menu -->\r\n\t<div id=\"m_ver_menu\" class=\"m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark\" data-menu-vertical=\"true\"\r\n\t data-menu-scrollable=\"false\" data-menu-dropdown-timeout=\"500\">\r\n\t\t<ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\r\n\t\t\t<li class=\"m-menu__item  \" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t<a routerLink=\"/index\" class=\"m-menu__link\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\tDashboard\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<!-- Actions Main -->\r\n\t\t\t<li class=\"m-menu__section\">\r\n\t\t\t\t<h4 class=\"m-menu__section-text\">\r\n\t\t\t\t\tActions\r\n\t\t\t\t</h4>\r\n\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t aria-haspopup=\"true\" data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-list\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tCấu hình\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t\t\t\t aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tĐơn Hàng\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/configuration\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tCấu hình chung\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/project/category/list\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tQuản lý dự án\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/quan-ly-san-pham\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tQuản lý sản phẩm\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t aria-haspopup=\"true\" data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-list\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tĐơn Hàng\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t\t\t\t aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tĐơn Hàng\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/components/base/state\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tDanh Sách Đơn Hàng\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/components/base/typography\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTạo Đơn Hàng\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t aria-haspopup=\"true\" data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-business\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tSản Phẩm\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t\t\t\t aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tSản Phẩm\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/product/list\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tDanh Sách Sản Phẩm\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/product/add\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tĐăng Sản Phẩm\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/components/base/typography\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tUpload Hình\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t aria-haspopup=\"true\" data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-piggy-bank\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tKhuyến Mãi\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t\t\t\t aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tKhuyến Mãi\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/components/base/state\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tDanh Sách Khuyến Mãi\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/components/base/typography\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tMã giảm Gía\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\r\n\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t aria-haspopup=\"true\" data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t<a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-user-ok\"></i>\r\n\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tKhách Hàng\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n\t\t\t\t\t\t aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tKhách Hàng\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/components/base/state\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tLịch Sử\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/components/base/typography\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tDanh Sách Khách Hàng\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\r\n\t\t\t<!-- End Actions Main -->\r\n\t\t</ul>\r\n\t</div>\r\n\t<!-- END: Aside Menu -->\r\n</div>\r\n<!-- END: Left Aside -->"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideNavComponent = (function () {
    function AsideNavComponent() {
        this.isSidebarAdmin = false;
        this.buttonColor = "danger";
        this.title = "Is't Admin";
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
    };
    AsideNavComponent.prototype.ShowSidebar = function () {
        // console.log("Show Sidebar Admin");
        this.isSidebarAdmin = !this.isSidebarAdmin;
        if (this.isSidebarAdmin) {
            this.buttonColor = "primary";
            this.title = "Is Admin";
        }
        else {
            this.buttonColor = "danger";
            this.title = "Is't Admin";
        }
    };
    AsideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-aside-nav",
            template: __webpack_require__("../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/header-nav/header-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\r\n<header class=\"m-grid__item    m-header\"  data-minimize-offset=\"200\" data-minimize-mobile-offset=\"200\" appunwraptag=\"\" >\r\n\t<div class=\"m-container m-container--fluid m-container--full-height\">\r\n\t\t<div class=\"m-stack m-stack--ver m-stack--desktop\">\r\n\t\t\t<!-- BEGIN: Brand -->\r\n\t\t\t<div class=\"m-stack__item m-brand  m-brand--skin-dark\">\r\n\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\">\r\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\r\n\t\t\t\t\t\t<a routerLink=\"/index\" class=\"m-brand__logo-wrapper\">\r\n\t\t\t\t\t\t\t<img alt=\"\" src=\"./assets/demo/default/media/img/logo/logo_default_dark.png\"/>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\r\n\t\t\t\t\t\t<!-- BEGIN: Left Aside Minimize Toggle -->\r\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_minimize_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- END --> \t\t\t \t\t\t\t\t\t\t<!-- BEGIN: Responsive Aside Left Menu Toggler -->\r\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- END --> \t\t\t \t\t\t\t\t\t  \t\t\t\t\t\t\t<!-- BEGIN: Responsive Header Menu Toggler -->\r\n\t\t\t\t\t\t<a id=\"m_aside_header_menu_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- END --> \t\t\t\t\t\t  \t\t\t<!-- BEGIN: Topbar Toggler -->\r\n\t\t\t\t\t\t<a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\r\n\t\t\t\t\t\t\t<i class=\"flaticon-more\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- END: Brand -->\r\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\r\n\t\t\t\t<!-- BEGIN: Horizontal Menu -->\r\n\t\t\t\t<button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\" id=\"m_aside_header_menu_mobile_close_btn\">\r\n\t\t\t\t\t<i class=\"la la-close\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<div id=\"m_header_menu\" class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark\"  >\r\n\t\t\t\t\t<ul class=\"m-menu__nav  m-menu__nav--submenu-arrow\">\r\n\t\t\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"  data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-add\"></i>\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tDỰ ÁN THI CÔNG\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"   aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/project/1\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-file\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tXử lý nước thải\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END: Horizontal Menu -->\t\r\n                <!-- BEGIN: Topbar -->\r\n\t\t\t\t<div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\r\n\t\t\t\t\t<div class=\"m-stack__item m-topbar__nav-wrapper\">\r\n\t\t\t\t\t\t<ul class=\"m-topbar__nav m-nav m-nav--inline\">\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"  \tdata-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\" id=\"m_quicksearch\" data-search-type=\"dropdown\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-search-1\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form  class=\"m-list-search__form\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-search__form-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\" name=\"q\" class=\"m-list-search__form-input\" value=\"\" placeholder=\"Search...\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-icon-close\" id=\"m_quicksearch_close\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__scrollable m-scrollable\" data-max-height=\"300\" data-mobile-max-height=\"200\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\" data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\" id=\"m_topbar_notification_icon\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-music-2\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/notification_bg.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t9 New\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tUser Notifications\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#topbar_notifications_notifications\" role=\"tab\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAlerts\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_events\" role=\"tab\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_logs\" role=\"tab\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"topbar_notifications_notifications\" role=\"tabpanel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t14 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDB overloaded 80%\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsettled\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem error -\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCheck\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\turgent\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_events\" role=\"tabpanel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-max-height=\"250\" data-mobile-max-height=\"200\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_logs\" role=\"tabpanel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\" style=\"min-height: 180px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAll caught up!\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo new logs.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"  data-dropdown-toggle=\"click\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tShortcuts\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body m-dropdown__body--paddingless\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"false\" data-max-height=\"380\" data-mobile-max-height=\"200\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid m-nav-grid--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-file\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Report\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-time\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd New Event\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-folder\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate New Task\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompleted Tasks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\" data-dropdown-toggle=\"click\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__userpic\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__username m--hide\">\r\n\t\t\t\t\t\t\t\t\t\tNick\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user m-card-user--skin-dark\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__pic\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__details\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-card-user__name m--font-weight-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMark Andre\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-card-user__email m--font-weight-300 m-link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmark.andre@gmail.com\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav m-nav--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSection\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMy Profile\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/snippets/pages/user/login-1\" class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\" routerLink=\"/logout\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogout\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li id=\"m_quick_sidebar_toggle\" class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-grid-menu\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END: Topbar -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</header>\r\n<!-- END: Header -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/header-nav/header-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderNavComponent = (function () {
    function HeaderNavComponent() {
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    HeaderNavComponent.prototype.getProjectCategory = function () {
    };
    HeaderNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-header-nav",
            template: __webpack_require__("../../../../../src/app/theme/layouts/header-nav/header-nav.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__ = __webpack_require__("../../../../../src/app/theme/layouts/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_nav_header_nav_component__ = __webpack_require__("../../../../../src/app/theme/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_default_default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aside_nav_aside_nav_component__ = __webpack_require__("../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quick_sidebar_quick_sidebar_component__ = __webpack_require__("../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scroll_top_scroll_top_component__ = __webpack_require__("../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tooltips_tooltips_component__ = __webpack_require__("../../../../../src/app/theme/layouts/tooltips/tooltips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_href_prevent_default_directive__ = __webpack_require__("../../../../../src/app/_directives/href-prevent-default.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_unwrap_tag_directive__ = __webpack_require__("../../../../../src/app/_directives/unwrap-tag.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_aside_left_minimize_default_enabled_aside_left_minimize_default_enabled_component__ = __webpack_require__("../../../../../src/app/theme/pages/aside-left-minimize-default-enabled/aside-left-minimize-default-enabled.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aside_left_minimize_default_enabled_aside_left_minimize_default_enabled_component__["a" /* AsideLeftMinimizeDefaultEnabledComponent */],
                __WEBPACK_IMPORTED_MODULE_2__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pages_default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_4__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__quick_sidebar_quick_sidebar_component__["a" /* QuickSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tooltips_tooltips_component__["a" /* TooltipsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
                __WEBPACK_IMPORTED_MODULE_11__directives_unwrap_tag_directive__["a" /* UnwrapTagDirective */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_aside_left_minimize_default_enabled_aside_left_minimize_default_enabled_component__["a" /* AsideLeftMinimizeDefaultEnabledComponent */],
                __WEBPACK_IMPORTED_MODULE_2__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pages_default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_4__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__quick_sidebar_quick_sidebar_component__["a" /* QuickSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tooltips_tooltips_component__["a" /* TooltipsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["RouterModule"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("../../../../../src/app/theme/layouts/layout/layout.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Sidebar -->\r\n<div id=\"m_quick_sidebar\" class=\"m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light\" appunwraptag=\"\">\r\n\t<div class=\"m-quick-sidebar__content m--hide\">\r\n\t\t<span id=\"m_quick_sidebar_close\" class=\"m-quick-sidebar__close\">\r\n\t\t\t<i class=\"la la-close\"></i>\r\n\t\t</span>\r\n\t\t<ul id=\"m_quick_sidebar_tabs\" class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\r\n\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_messenger\" role=\"tab\">\r\n\t\t\t\t\tMessages\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t<a class=\"nav-link m-tabs__link\" \t\tdata-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_settings\" role=\"tab\">\r\n\t\t\t\t\tSettings\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_logs\" role=\"tab\">\r\n\t\t\t\t\tLogs\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t\t<div class=\"tab-content\">\r\n\t\t\t<div class=\"tab-pane active m-scrollable\" id=\"m_quick_sidebar_tabs_messenger\" role=\"tabpanel\">\r\n\t\t\t\t<div class=\"m-messenger m-messenger--message-arrow m-messenger--skin-light\">\r\n\t\t\t\t\t<div class=\"m-messenger__messages\">\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tHi Bob. What time will be the meeting ?\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tHi Megan. It's at 2.30PM\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tWill the development team be joining ?\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tYes sure. I invited them as well\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\r\n\t\t\t\t\t\t\t2:30PM\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tNoted. For the Coca-Cola Mobile App project as well ?\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tYes, sure.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tPlease also prepare the quotation for the Loop CRM project as well.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__datetime\">\r\n\t\t\t\t\t\t\t3:15PM\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-no-pic m--bg-fill-danger\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\tM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tNoted. I will prepare it.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--out\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tThanks Megan. I will see you later.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-messenger__message m-messenger__message--in\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-pic\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img//users/user3.jpg\"  alt=\"\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-arrow\"></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-username\">\r\n\t\t\t\t\t\t\t\t\t\t\tMegan wrote\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-messenger__message-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tSure. See you in the meeting soon.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-messenger__seperator\"></div>\r\n\t\t\t\t\t<div class=\"m-messenger__form\">\r\n\t\t\t\t\t\t<div class=\"m-messenger__form-controls\">\r\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" placeholder=\"Type here...\" class=\"m-messenger__form-input\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-messenger__form-tools\">\r\n\t\t\t\t\t\t\t<a href=\"\" class=\"m-messenger__form-attachment\">\r\n\t\t\t\t\t\t\t\t<i class=\"la la-paperclip\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">\r\n\t\t\t\t<div class=\"m-list-settings\">\r\n\t\t\t\t\t<div class=\"m-list-settings__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\r\n\t\t\t\t\t\t\tGeneral Settings\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tEmail Notifications\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tSite Tracking\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tSMS Alerts\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tBackup Storage\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tAudit Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-list-settings__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-settings__heading\">\r\n\t\t\t\t\t\t\tSystem Settings\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tSystem Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tError Reporting\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tApplications Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tBackup Servers\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-settings__item\">\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-label\">\r\n\t\t\t\t\t\t\t\tAudit Logs\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-list-settings__item-control\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\">\r\n\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_logs\" role=\"tabpanel\">\r\n\t\t\t\t<div class=\"m-list-timeline\">\r\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\r\n\t\t\t\t\t\t\tSystem Logs\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--warning m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\timportant\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tresolved\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem error\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\r\n\t\t\t\t\t\t\tApplications Logs\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\turgent\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew invoices received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem error\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-list-timeline__group\">\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__heading\">\r\n\t\t\t\t\t\t\tServer Logs\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tDatabase overloaded 89%\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tSystem error\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1117 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- end::Quick Sidebar -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickSidebarComponent = (function () {
    function QuickSidebarComponent() {
    }
    QuickSidebarComponent.prototype.ngOnInit = function () {
    };
    QuickSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-quick-sidebar",
            template: __webpack_require__("../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], QuickSidebarComponent);
    return QuickSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Scroll Top -->\r\n<div class=\"m-scroll-top m-scroll-top--skin-top\" data-toggle=\"m-scroll-top\" data-scroll-offset=\"500\" data-scroll-speed=\"300\" appunwraptag=\"\">\r\n\t<i class=\"la la-arrow-up\"></i>\r\n</div>\r\n<!-- end::Scroll Top -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollTopComponent = (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    ScrollTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-scroll-top",
            template: __webpack_require__("../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/tooltips/tooltips.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Nav -->\r\n<ul class=\"m-nav-sticky\" style=\"margin-top: 30px;\" appunwraptag=\"\">\r\n\t<!--\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Showcase\" data-placement=\"left\">\r\n\t\t<a href=\"\">\r\n\t\t\t<i class=\"la la-eye\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Pre-sale Chat\" data-placement=\"left\">\r\n\t\t<a href=\"\" >\r\n\t\t\t<i class=\"la la-comments-o\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t-->\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Purchase\" data-placement=\"left\">\r\n\t\t<a href=\"https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" >\r\n\t\t\t<i class=\"la la-cart-arrow-down\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Documentation\" data-placement=\"left\">\r\n\t\t<a href=\"https://keenthemes.com/metronic/documentation.html\" >\r\n\t\t\t<i class=\"la la-code-fork\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Support\" data-placement=\"left\">\r\n\t\t<a href=\"https://keenthemes.com/forums/forum/support/metronic5/\" >\r\n\t\t\t<i class=\"la la-life-ring\"></i>\r\n\t\t</a>\r\n\t</li>\r\n</ul>\r\n<!-- begin::Quick Nav -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/tooltips/tooltips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipsComponent = (function () {
    function TooltipsComponent() {
    }
    TooltipsComponent.prototype.ngOnInit = function () {
    };
    TooltipsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-tooltips",
            template: __webpack_require__("../../../../../src/app/theme/layouts/tooltips/tooltips.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/aside-left-minimize-default-enabled/aside-left-minimize-default-enabled.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\r\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/aside-left-minimize-default-enabled/aside-left-minimize-default-enabled.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideLeftMinimizeDefaultEnabledComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideLeftMinimizeDefaultEnabledComponent = (function () {
    function AsideLeftMinimizeDefaultEnabledComponent() {
    }
    AsideLeftMinimizeDefaultEnabledComponent.prototype.ngOnInit = function () {
    };
    AsideLeftMinimizeDefaultEnabledComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__("../../../../../src/app/theme/pages/aside-left-minimize-default-enabled/aside-left-minimize-default-enabled.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], AsideLeftMinimizeDefaultEnabledComponent);
    return AsideLeftMinimizeDefaultEnabledComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\r\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__("../../../../../src/app/theme/pages/default/default.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/theme-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_component__ = __webpack_require__("../../../../../src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guards_auth_guard__ = __webpack_require__("../../../../../src/app/auth/_guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_1__theme_component__["a" /* ThemeComponent */],
        "canActivate": [__WEBPACK_IMPORTED_MODULE_3__auth_guards_auth_guard__["a" /* AuthGuard */]],
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
            },
            {
                "path": "product",
                "loadChildren": ".\/pages\/default\/product\/product.module#ProductModule"
            },
            {
                "path": "header\/actions",
                "loadChildren": ".\/pages\/default\/header\/header-actions\/header-actions.module#HeaderActionsModule"
            },
            {
                "path": "header\/profile",
                "loadChildren": ".\/pages\/default\/header\/header-profile\/header-profile.module#HeaderProfileModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "about",
                "loadChildren": ".\/pages\/default\/about\/about.module#AboutModule"
            },
            {
                "path": "about/create",
                "loadChildren": ".\/pages\/default\/about\/about-create\/about-create.module#AboutCreateModule"
            },
            {
                "path": "configuration",
                "loadChildren": ".\/pages\/default\/configuration\/configuration.module#ConfigurationModule"
            },
            {
                "path": "project/:id",
                "loadChildren": ".\/pages\/default\/project\/project.module#ProjectModule"
            },
            {
                "path": "quan-ly-san-pham",
                "loadChildren": ".\/pages\/default\/product-management\/product-management.module#ProductManagementModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "snippets\/pages\/user\/login-1",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-1\/user-login-1.module#UserLogin1Module"
    },
    {
        "path": "snippets\/pages\/user\/login-2",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-2\/user-login-2.module#UserLogin2Module"
    },
    {
        "path": "snippets\/pages\/user\/login-3",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-3\/user-login-3.module#UserLogin3Module"
    },
    {
        "path": "snippets\/pages\/user\/login-4",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-4\/user-login-4.module#UserLogin4Module"
    },
    {
        "path": "snippets\/pages\/user\/login-5",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-5\/user-login-5.module#UserLogin5Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-1",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-1\/errors-error-1.module#ErrorsError1Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-2",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-2\/errors-error-2.module#ErrorsError2Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-3",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-3\/errors-error-3.module#ErrorsError3Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-4",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-4\/errors-error-4.module#ErrorsError4Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-5",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-5\/errors-error-5.module#ErrorsError5Module"
    },
    {
        "path": "snippets\/pages\/errors\/error-6",
        "loadChildren": ".\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-6\/errors-error-6.module#ErrorsError6Module"
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];
var ThemeRoutingModule = (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/theme.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>\r\n<!-- begin::Body -->\r\n<router-outlet></router-outlet>\r\n<!-- end:: Body -->\r\n<!-- <app-footer></app-footer> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeComponent = (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'], true)
            .then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
            // optional js to be loaded once
            _this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js']);
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                mLayout.closeMobileAsideMenuOffcanvas();
                mLayout.closeMobileHorMenuOffcanvas();
                mApp.scrollTop();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                // init required js
                mApp.init();
                mUtil.init();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    ThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("../../../../../src/app/theme/theme.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__["a" /* ScriptLoaderService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map