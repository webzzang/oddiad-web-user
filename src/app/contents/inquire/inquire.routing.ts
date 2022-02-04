import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {InquireFormComponent} from "./inquire-form/inquire-form.component";
import {InquireViewComponent} from "./inquire-view/inquire-view.component";
export const routes: Routes = [
  {
    path: 'form', /*1:1 문의 작성하기*/
    component:InquireFormComponent
  },
  {
    path: ':seq',  /*1:1 문의 상세보기*/
    component:InquireViewComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquireRouting { }
