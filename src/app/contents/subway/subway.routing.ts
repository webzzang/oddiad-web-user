import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {SubwayComponent} from "./subway.component";
export const routes: Routes = [
    {
        path: '',
        component: SubwayComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class SubwayRouting { }