import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {NoticeComponent} from "./notice.component";
import {NoticeFormComponent} from "./notice-form/notice-form.component";
export const routes: Routes = [
    {
        path: 'list',
        component: NoticeComponent
    },
    {
        path: 'form/:seq',
        component: NoticeFormComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NoticeRouting { }
