import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TextMaskModule} from 'angular2-text-mask';
import {SideModule} from '../side/side.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {OddiListComponent} from "./oddi-list/oddi-list.component";
import {MypageRouting} from "./mypage.routing";
import { OddiMngFormComponent } from './oddi-mng-form/oddi-mng-form.component';
import { OddiBilListComponent } from './oddi-bil-list/oddi-bil-list.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { InquireListComponent } from './inquire-list/inquire-list.component';
import {SharedModule} from "../../shared/shared.module";
import { ChangePasswordComponent } from './change-password/change-password.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
    declarations: [
        OddiListComponent,
        OddiMngFormComponent,
        OddiBilListComponent,
        MyAccountComponent,
        InquireListComponent,
        ChangePasswordComponent,
    ],
    imports: [
        CommonModule,
        TextMaskModule,
        SideModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MypageRouting,
        SharedModule.forRoot(),
        DragDropModule
    ]
})
export class MypageModule { }