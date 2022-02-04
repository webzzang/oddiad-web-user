"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var angular2_text_mask_1 = require("angular2-text-mask");
var side_module_1 = require("../side/side.module");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var notice_component_1 = require("./notice.component");
var notice_form_component_1 = require("./notice-form/notice-form.component");
var notice_routing_1 = require("./notice.routing");
var NoticeModule = /** @class */ (function () {
    function NoticeModule() {
    }
    NoticeModule = __decorate([
        core_1.NgModule({
            declarations: [
                notice_component_1.NoticeComponent,
                notice_form_component_1.NoticeFormComponent
            ],
            imports: [
                common_1.CommonModule,
                angular2_text_mask_1.TextMaskModule,
                side_module_1.SideModule,
                notice_routing_1.NoticeRouting,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule
            ]
        })
    ], NoticeModule);
    return NoticeModule;
}());
exports.NoticeModule = NoticeModule;
