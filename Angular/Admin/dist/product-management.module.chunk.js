webpackJsonp(["product-management.module"],{

/***/ "../../../../../src/app/theme/pages/default/product-management/product-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-datatable.m-datatable--default > .m-datatable__table{\r\n    min-height: auto;\r\n}\r\n.modal-dialog{\r\n    max-width: 50%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/product-management/product-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader\" appunwraptag=\"\">\r\n  <div class=\"d-flex align-items-center\">\r\n    <div class=\"mr-auto\">\r\n      <h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n        Quản lý sản phẩm\r\n      </h3>\r\n      <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n        <li class=\"m-nav__item m-nav__item--home\">\r\n          <i class=\"m-nav__link-icon la la-home\"></i>\r\n        </li>\r\n        <li class=\"m-nav__separator\">\r\n          -\r\n        </li>\r\n        <li class=\"m-nav__item\">\r\n          <span class=\"m-nav__link-text\">\r\n            Loại Sản Phẩm\r\n          </span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"m-content\">\r\n  <div class=\"m-portlet m-portlet--mobile\">\r\n    <div class=\"m-portlet__head\">\r\n      <div class=\"m-portlet__head-caption\">\r\n        <div class=\"m-portlet__head-title\">\r\n          <h3 class=\"m-portlet__head-text\">\r\n            Danh sách loại sản phẩm\r\n          </h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"m-portlet__body\">\r\n      <!--begin: Search Form -->\r\n      <div class=\"m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-xl-8 order-2 order-xl-1\">\r\n            <div class=\"form-group m-form__group row align-items-center\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"m-input-icon m-input-icon--left\">\r\n                  <input type=\"text\" class=\"form-control m-input m-input--solid\" placeholder=\"Search...\" [(ngModel)]=\"filter\">\r\n                  <span class=\"m-input-icon__icon m-input-icon__icon--left\">\r\n                    <span>\r\n                      <i class=\"la la-search\"></i>\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-4 order-1 order-xl-2 m--align-right\">\r\n            <a href=\"#\" (click)=\"isAddNewProjectCategory = true\" class=\"btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill\">\r\n              <span>\r\n                <i class=\"la la-cart-plus\"></i>\r\n                <span>\r\n                  Thêm Mới\r\n                </span>\r\n              </span>\r\n            </a>\r\n            <div class=\"m-separator m-separator--dashed d-xl-none\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--end: Search Form -->\r\n      <!--begin: Datatable -->\r\n      <div class=\"m_datatable m-datatable m-datatable--default m-datatable--loaded\">\r\n        <table class=\"m-datatable__table\">\r\n          <thead class=\"m-datatable__head\">\r\n            <tr class=\"m-datatable__row\">\r\n              <th class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\">\r\n                <span style=\"width: 50px;\">\r\n                  <label class=\"m-checkbox m-checkbox--single m-checkbox--all m-checkbox--solid m-checkbox--brand\">\r\n                    <input type=\"checkbox\">\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </th>\r\n              <th class=\"m-datatable__cell m-datatable__cell--sort\">\r\n                <span style=\"width: 132px;\">Name</span>\r\n              </th>\r\n              <th class=\"m-datatable__cell m-datatable__cell--sort\">\r\n                <span style=\"width: 132px;\">Actions</span>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"m-datatable__body\">\r\n            <tr class=\"m-datatable__row\" *ngIf=\"isAddNewProjectCategory\">\r\n              <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\">\r\n                <span style=\"width: 50px;\">\r\n                  <label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\">\r\n                    <input type=\"checkbox\">\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">\r\n                  <input class=\"form-control m-input m-input--solid\" type=\"text\" placeholder=\"Tên loại dự án\" [(ngModel)]=\"projectCategoryModel.name\">\r\n                </span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">\r\n                  <button class=\"btn-primary\" (click)=\"createProjectCategery()\">Save</button>\r\n                  <button class=\"btn-warning\" (click)=\"isAddNewProjectCategory = false; projectCategoryModel.name = ''\">Cancel</button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n            <tr class=\"m-datatable__row\" *ngFor=\"let item of projectCategories | filter:filter\">\r\n              <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\">\r\n                <span style=\"width: 50px;\">\r\n                  <label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\">\r\n                    <input type=\"checkbox\" value=\"item.id\">\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span *ngIf=\"!item.isEdit\" style=\"width: 132px;\">{{item.name}}</span>\r\n                <span *ngIf=\"item.isEdit\" style=\"width: 132px;\">\r\n                  <input class=\"form-control m-input m-input--solid\" type=\"text\" [(ngModel)]=\"item.name\">\r\n                </span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">\r\n                  <button *ngIf=\"!item.isEdit\" class=\"btn-warning\" (click)=\"deleteProjectCategory(item.id)\">Delete</button>\r\n                  <button *ngIf=\"!item.isEdit\" (click)=\"item.isEdit = true\" class=\"btn-primary\">Edit</button>\r\n                  <button *ngIf=\"item.isEdit\" class=\"btn-primary\" (click)=\"editProjectCategory(item)\">Save</button>\r\n                  <button *ngIf=\"item.isEdit\" class=\"btn-warning\" (click)=\"item.isEdit = false\">Cancel</button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <!--    Paging here     -->\r\n      </div>\r\n      <!--end: Datatable -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"m-content\">\r\n  <div class=\"m-portlet m-portlet--mobile\">\r\n    <div class=\"m-portlet__head\">\r\n      <div class=\"m-portlet__head-caption\">\r\n        <div class=\"m-portlet__head-title\">\r\n          <h3 class=\"m-portlet__head-text\">\r\n            Danh sách sản phẩm\r\n          </h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"m-portlet__body\">\r\n      <!--begin: Search Form -->\r\n      <div class=\"m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-xl-8 order-2 order-xl-1\">\r\n            <div class=\"form-group m-form__group row align-items-center\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"m-input-icon m-input-icon--left\">\r\n                  <input type=\"text\" class=\"form-control m-input m-input--solid\" placeholder=\"Search...\">\r\n                  <span class=\"m-input-icon__icon m-input-icon__icon--left\">\r\n                    <span>\r\n                      <i class=\"la la-search\"></i>\r\n                    </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-4 order-1 order-xl-2 m--align-right\">\r\n            <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill\">\r\n              <span>\r\n                <i class=\"la la-cart-plus\"></i>\r\n                <span>\r\n                  Thêm Mới\r\n                </span>\r\n              </span>\r\n            </a>\r\n            <div class=\"m-separator m-separator--dashed d-xl-none\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--end: Search Form -->\r\n      <!--begin: Datatable -->\r\n      <div class=\"m_datatable m-datatable m-datatable--default m-datatable--loaded\">\r\n        <table class=\"m-datatable__table\">\r\n          <thead class=\"m-datatable__head\">\r\n            <tr class=\"m-datatable__row\">\r\n              <th class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\">\r\n                <span style=\"width: 50px;\">\r\n                  <label class=\"m-checkbox m-checkbox--single m-checkbox--all m-checkbox--solid m-checkbox--brand\">\r\n                    <input type=\"checkbox\">\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </th>\r\n              <th class=\"m-datatable__cell m-datatable__cell--sort\">\r\n                <span style=\"width: 132px;\">Tên sản phẩm</span>\r\n              </th>\r\n              <th class=\"m-datatable__cell m-datatable__cell--sort\">\r\n                <span style=\"width: 132px;\">Loại sản phẩm</span>\r\n              </th>\r\n              <th class=\"m-datatable__cell m-datatable__cell--sort\">\r\n                <span style=\"width: 132px;\">Chủ đầu tư</span>\r\n              </th>\r\n              <th class=\"m-datatable__cell m-datatable__cell--sort\">\r\n                <span style=\"width: 132px;\">Công suất thiết kế</span>\r\n              </th>\r\n              <th class=\"m-datatable__cell m-datatable__cell--sort\">\r\n                <span style=\"width: 132px;\">Tiêu chuẩn</span>\r\n              </th>\r\n              <th class=\"m-datatable__cell m-datatable__cell--sort\">\r\n                <span style=\"width: 132px;\">Tiến độ</span>\r\n              </th>\r\n              <th class=\"m-datatable__cell m-datatable__cell--sort\">\r\n                <span style=\"width: 132px;\"></span>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"m-datatable__body\">\r\n            <tr class=\"m-datatable__row\" *ngFor=\"let project of projects\">\r\n              <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\">\r\n                <span style=\"width: 50px;\">\r\n                  <label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\">\r\n                    <input type=\"checkbox\" value=\"item.id\">\r\n                    <span></span>\r\n                  </label>\r\n                </span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">{{project.title}}</span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">{{getProjectCategoryName(project.projectCategoryId)}}</span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">{{project.investor}}</span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">{{project.efficiency}}</span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">{{project.standard}}</span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">{{project.progress}}</span>\r\n              </td>\r\n              <td class=\"m-datatable__cell\">\r\n                <span style=\"width: 132px;\">\r\n                  <button class=\"btn-warning\">Delete</button>\r\n                  <button (click)=\"item.isEdit = true\" class=\"btn-primary\" data-toggle=\"modal\" (click)=\"selectEditProject(project)\" data-target=\"#editProjectModal\">Edit</button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <!--    Paging here     -->\r\n      </div>\r\n      <!--end: Datatable -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Popup-->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <!-- <app-project-create (reloadProjects)=\"getProjects()\"></app-project-create> -->\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"editProjectModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <!-- <app-project-edit [editProjectParam]=\"editProject\" (reloadProjects)=\"getProjects()\"></app-project-edit> -->\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/product-management/product-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductManagementComponent = (function () {
    function ProductManagementComponent(projectService) {
        this.projectService = projectService;
        this.projectCategories = [];
        this.projectCategoryModel = {
            name: ''
        };
        this.isAddNewProjectCategory = false;
        this.projects = [];
    }
    ProductManagementComponent.prototype.ngOnInit = function () {
        this.getProjectCategories();
        this.getProjects();
    };
    ProductManagementComponent.prototype.createProjectCategery = function () {
        var _this = this;
        this.projectService.createProjectCategory(this.projectCategoryModel).subscribe(function (data) {
            if (data != undefined) {
                _this.projectCategories.push({
                    id: data,
                    name: _this.projectCategoryModel.name,
                    isEdit: false
                });
                _this.projectCategoryModel.name = '';
            }
        });
    };
    ProductManagementComponent.prototype.deleteProjectCategory = function (id) {
        var _this = this;
        this.projectService.deleteProjectCategory(id).subscribe(function (data) {
            _this.getProjectCategories();
        });
    };
    ProductManagementComponent.prototype.editProjectCategory = function (item) {
        var _this = this;
        this.projectService.editProjectCategory(item).subscribe(function (data) {
            _this.getProjectCategories();
        });
    };
    ProductManagementComponent.prototype.getProjectCategories = function () {
        var _this = this;
        this.projectService.getProjectCategories().subscribe(function (data) {
            _this.projectCategories = data;
            _this.projectCategories.forEach(function (element) {
                element.isEdit = false;
            });
        });
    };
    ProductManagementComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (data) {
            _this.projects = data;
        });
    };
    ProductManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-management',
            template: __webpack_require__("../../../../../src/app/theme/pages/default/product-management/product-management.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/theme/pages/default/product-management/product-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */]])
    ], ProductManagementComponent);
    return ProductManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/product-management/product-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementModule", function() { return ProductManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_management_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/product-management/product-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_project_create_project_create_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/project/project-create/project-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_project_edit_project_edit_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/project/project-edit/project-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_project_service__ = __webpack_require__("../../../../../src/app/_services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_editor_editor__ = __webpack_require__("../../../../primeng/components/editor/editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_components_editor_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_components_editor_editor__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_4__product_management_component__["a" /* ProductManagementComponent */],
            },
        ],
    },
];
var ProductManagementModule = (function () {
    function ProductManagementModule() {
    }
    ProductManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_6__layouts_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_components_editor_editor__["EditorModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__product_management_component__["a" /* ProductManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_8__project_project_create_project_create_component__["a" /* ProjectCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__project_project_edit_project_edit_component__["a" /* ProjectEditComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_11__services_project_service__["a" /* ProjectService */]
            ]
        })
    ], ProductManagementModule);
    return ProductManagementModule;
}());



/***/ })

});
//# sourceMappingURL=product-management.module.chunk.js.map