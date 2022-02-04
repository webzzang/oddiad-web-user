import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TextMaskModule} from 'angular2-text-mask';
import {SideModule} from '../side/side.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SharedModule} from "../../shared/shared.module";
import {SubwayComponent} from "./subway.component";
import {SubwayFormComponent} from "./subway-form/subway-form.component";
import {SubwayRouting} from "./subway.routing";
import { SubwayViewComponent } from './subway-view/subway-view.component';
import { SubwayPaymentComponent } from './subway-payment/subway-payment.component';
import {CommonPipeModule} from "../../shared/pipe/common-pipe.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
@NgModule({
    declarations: [
        SubwayComponent,
        SubwayFormComponent,
        SubwayViewComponent,
        SubwayPaymentComponent
    ],
    imports: [
        CommonModule,
        TextMaskModule,
        SideModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        SubwayRouting,
        SharedModule.forRoot(),
        CommonPipeModule,
        DragDropModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SubwayModule { }
