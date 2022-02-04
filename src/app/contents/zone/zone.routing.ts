import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {ZoneComponent} from "./zone.component";
import {ZoneFormComponent} from "./zone-form/zone-form.component";
export const routes: Routes = [
    {
        path: '',
        component: ZoneComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ZoneRouting { }