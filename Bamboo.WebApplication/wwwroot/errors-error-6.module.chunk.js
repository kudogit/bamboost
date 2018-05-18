webpackJsonp(["errors-error-6.module"],{

/***/ "../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-6/errors-error-6.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid  m-error-6\" style=\"background-image: url(./assets/app/media/img//error/bg6.jpg);\" appunwraptag=\"\">\r\n\t<div class=\"m-error_container\">\r\n\t\t<div class=\"m-error_subtitle m--font-light\">\r\n\t\t\t<h1>\r\n\t\t\t\tOops...\r\n\t\t\t</h1>\r\n\t\t</div>\r\n\t\t<p class=\"m-error_description m--font-light\">\r\n\t\t\tLooks like something went wrong.\r\n\t\t\t<br>\r\n\t\t\tWe're working on it\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-6/errors-error-6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsError6Component; });
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


var ErrorsError6Component = (function () {
    function ErrorsError6Component() {
    }
    ErrorsError6Component.prototype.ngOnInit = function () {
    };
    ErrorsError6Component.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].bodyClass('m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default');
    };
    ErrorsError6Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-6/errors-error-6.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], ErrorsError6Component);
    return ErrorsError6Component;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-6/errors-error-6.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsError6Module", function() { return ErrorsError6Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors_error_6_component__ = __webpack_require__("../../../../../src/app/theme/pages/self-layout-blank/snippets/pages/errors/errors-error-6/errors-error-6.component.ts");
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
        "component": __WEBPACK_IMPORTED_MODULE_3__errors_error_6_component__["a" /* ErrorsError6Component */]
    }
];
var ErrorsError6Module = (function () {
    function ErrorsError6Module() {
    }
    ErrorsError6Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__errors_error_6_component__["a" /* ErrorsError6Component */]
            ]
        })
    ], ErrorsError6Module);
    return ErrorsError6Module;
}());



/***/ })

});
//# sourceMappingURL=errors-error-6.module.chunk.js.map