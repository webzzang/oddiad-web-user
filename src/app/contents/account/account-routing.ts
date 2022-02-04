import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component'
import { NgModule } from '@angular/core';
import {RegisterSuccessComponent} from "./register-success/register-success.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {NoSessionGuard} from "./noSession.guard"
export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
        canActivate:[NoSessionGuard]
      },
    {
        path: 'success',
        component: RegisterSuccessComponent,
        canActivate:[NoSessionGuard]
    },
    {
        path: 'changePassword',
        component: ChangePasswordComponent,
        canActivate:[NoSessionGuard]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRouting { }