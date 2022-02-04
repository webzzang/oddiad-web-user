import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {OddiListComponent} from "./oddi-list/oddi-list.component";
import {OddiMngFormComponent} from "./oddi-mng-form/oddi-mng-form.component";
import {InquireListComponent} from "./inquire-list/inquire-list.component";
import {OddiBilListComponent} from "./oddi-bil-list/oddi-bil-list.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {InquireViewComponent} from "../inquire/inquire-view/inquire-view.component";
import {InquireFormComponent} from "../inquire/inquire-form/inquire-form.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
export const routes: Routes = [
    {
        path: 'oddi-list', /*오디관리리스트*/
        component: OddiListComponent
    },
    {
      path: 'oddi-form', /*오디관리내역*/
      component: OddiMngFormComponent
    },
    {
      path: 'bill-list', /*결제내역리스트*/
      component: OddiBilListComponent
    },
    {
      path: 'inquire-list', /*1:1 문의 리스트*/
      component:InquireListComponent
    },
    {
        path: 'inquire-view', /*1:1 문의 상세보기*/
        component:InquireViewComponent
    },
    {
        path: 'inquire-form', /*1:1 문의 폼*/
        component:InquireFormComponent
    },
    {
      path: 'myAccount',
      component:MyAccountComponent
    },
    {
      path: 'changePassword',
      component:ChangePasswordComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MypageRouting { }
