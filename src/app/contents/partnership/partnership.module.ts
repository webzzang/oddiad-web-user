import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TextMaskModule} from 'angular2-text-mask';
import {SideModule} from '../side/side.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PartnershipFormComponent} from "./partnership-form/partnership-form.component";
import {PartnershipComponent} from "./partnership.component";
import {PartnershipRouting} from "./partnership-routing";

@NgModule({
    declarations: [
        PartnershipComponent,
        PartnershipFormComponent
    ],
    imports: [
        CommonModule,
        TextMaskModule,
        SideModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        PartnershipRouting,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PartnershipModule { }