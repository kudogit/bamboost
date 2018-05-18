webpackJsonp(["configuration.module"],{

/***/ "../../../../../src/app/theme/pages/default/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\" appunwraptag=\"\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n                Giới thiệu chung\r\n            </h3>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n    <div class=\"m-portlet\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"wrap_box_content\">\r\n                <p-editor [(ngModel)]=\"generalInfoModel.value\" [style]=\"{'height':'320px'}\">\r\n                </p-editor>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 text-right\" style=\"margin:10px 0px;\">\r\n            <button style=\"margin-bottom: 20px;\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/configuration/configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_configuration_service__ = __webpack_require__("../../../../../src/app/_services/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigurationComponent = (function () {
    function ConfigurationComponent(configurationService, messageService, router) {
        this.configurationService = configurationService;
        this.messageService = messageService;
        this.router = router;
        this.generalInfoModel = {
            key: '',
            value: ''
        };
        this.msgs = [];
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
    };
    ConfigurationComponent.prototype.save = function () {
        var _this = this;
        this.configurationService.configGeneralInfo(this.generalInfoModel).subscribe(function (data) {
            _this.msgs.push({ severity: 'success', summary: 'Thông Tin', detail: 'Lưu Thành Công' });
            setTimeout(function () {
                _this.router.navigateByUrl('/index');
            }, 2000);
        }, function (error) {
            setTimeout(function () {
                _this.msgs.push({ severity: 'error', summary: 'Thông Tin', detail: 'Lưu không thành công' });
            }, 1000);
            _this.clear();
        });
    };
    ConfigurationComponent.prototype.clear = function () {
        this.messageService.clear();
    };
    ConfigurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__("../../../../../src/app/theme/pages/default/configuration/configuration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/pages/default/configuration/configuration.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_configuration_service__["a" /* ConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__["MessageService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/configuration/configuration.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/configuration/configuration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/configuration/configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_configuration_service__ = __webpack_require__("../../../../../src/app/_services/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        'path': '',
        'component': __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        'children': [
            {
                'path': '',
                'component': __WEBPACK_IMPORTED_MODULE_4__configuration_component__["a" /* ConfigurationComponent */],
            },
        ],
    },
];
var ConfigurationModule = (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_6__layouts_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["GrowlModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__configuration_component__["a" /* ConfigurationComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_7__services_configuration_service__["a" /* ConfigurationService */],
                __WEBPACK_IMPORTED_MODULE_10_primeng_components_common_messageservice__["MessageService"]
            ]
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());



/***/ })

});
//# sourceMappingURL=configuration.module.chunk.js.map