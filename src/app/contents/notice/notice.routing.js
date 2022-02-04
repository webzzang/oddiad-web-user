"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeRouting = exports.routes = void 0;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var notice_component_1 = require("./notice.component");
var notice_form_component_1 = require("./notice-form/notice-form.component");
exports.routes = [
    {
        path: 'list',
        component: notice_component_1.NoticeComponent
    },
    {
        path: 'form',
        component: notice_form_component_1.NoticeFormComponent
    },
];
var NoticeRouting = /** @class */ (function () {
    function NoticeRouting() {
    }
    NoticeRouting = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(exports.routes)],
            exports: [router_1.RouterModule]
        })
    ], NoticeRouting);
    return NoticeRouting;
}());
exports.NoticeRouting = NoticeRouting;
