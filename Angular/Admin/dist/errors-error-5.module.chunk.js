webpackJsonp(["errors-error-5.module"],{

/***/ "../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-5/errors-error-5.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid  m-error-5\" style=\"background-image: url(./assets/app/media/img//error/bg5.jpg);\" appunwraptag=\"\">\r\n\t<div class=\"m-error_container\">\r\n\t\t<span class=\"m-error_title\">\r\n\t\t\t<h1>\r\n\t\t\t\tOops!\r\n\t\t\t</h1>\r\n\t\t</span>\r\n\t\t<p class=\"m-error_subtitle\">\r\n\t\t\tSomething went wrong here.\r\n\t\t</p>\r\n\t\t<p class=\"m-error_description\">\r\n\t\t\tWe're working on it and we'll get it fixed\r\n\t\t\t<br>\r\n\t\t\tas soon possible.\r\n\t\t\t<br>\r\n\t\t\tYou can back or use our Help Center.\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-5/errors-error-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsError5Component; });
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


var ErrorsError5Component = (function () {
    function ErrorsError5Component() {
    }
    ErrorsError5Component.prototype.ngOnInit = function () {
    };
    ErrorsError5Component.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].bodyClass('m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default');
    };
    ErrorsError5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-5/errors-error-5.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], ErrorsError5Component);
    return ErrorsError5Component;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-5/errors-error-5.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsError5Module", function() { return ErrorsError5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors_error_5_component__ = __webpack_require__("../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-5/errors-error-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_3__errors_error_5_component__["a" /* ErrorsError5Component */]
    }
];
var ErrorsError5Module = (function () {
    function ErrorsError5Module() {
    }
    ErrorsError5Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__errors_error_5_component__["a" /* ErrorsError5Component */]
            ]
        })
    ], ErrorsError5Module);
    return ErrorsError5Module;
}());



/***/ })

});
//# sourceMappingURL=errors-error-5.module.chunk.js.map