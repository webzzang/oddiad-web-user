import { Routes, RouterModule } from '@angular/router';
import {PartnershipComponent} from "./partnership.component";
import {NgModule} from "@angular/core";
export const partnershiproutes: Routes = [
    {
        path: '',
        component: PartnershipComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(partnershiproutes)],
    exports: [RouterModule]
})

export class PartnershipRouting { }
