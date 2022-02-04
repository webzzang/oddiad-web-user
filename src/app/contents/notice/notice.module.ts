import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TextMaskModule} from 'angular2-text-mask';
import {SideModule} from '../side/side.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NoticeComponent} from "./notice.component";
import {NoticeFormComponent} from "./notice-form/notice-form.component";
import {NoticeRouting} from "./notice.routing";
import { NoticeListComponent } from './notice-list/notice-list.component';

@NgModule({
    declarations: [
        NoticeComponent,
        NoticeFormComponent,
        NoticeListComponent
    ],
    imports: [
        CommonModule,
        TextMaskModule,
        SideModule,
        NoticeRouting,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class NoticeModule { }