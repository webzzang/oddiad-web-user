import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TextMaskModule} from 'angular2-text-mask';
import {SideModule} from '../side/side.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ZoneComponent} from "./zone.component";
import {ZoneFormComponent} from "./zone-form/zone-form.component";
import {ZoneRouting} from "./zone.routing";
import {SharedModule} from "../../shared/shared.module";
import { HistoryPopComponent } from './history-pop/history-pop.component';
import { ZoneViewComponent } from './zone-view/zone-view.component';
import {MustadLoginComponent} from "../mustad/mustad-login/mustad-login.component";
import { ImgPopComponent } from './img-pop/img-pop.component';
import { ImgPreviewPopComponent } from './img-preview-pop/img-preview-pop.component';
import { ZonePaymentComponent } from './zone-payment/zone-payment.component';
import {CommonPipeModule} from "../../shared/pipe/common-pipe.module";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
    declarations: [
        ZoneComponent,
        ZoneFormComponent,
        HistoryPopComponent,
        MustadLoginComponent,
        ZoneViewComponent,
        ImgPopComponent,
        ImgPreviewPopComponent,
        ZonePaymentComponent
    ],
    imports: [
        CommonModule,
        TextMaskModule,
        SideModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        ZoneRouting,
        SharedModule.forRoot(),
        CommonPipeModule,
        DragDropModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ZoneModule { }