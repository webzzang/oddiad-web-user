import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {TextMaskModule} from 'angular2-text-mask';
import {SideModule} from '../side/side.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {InquireRouting} from "./inquire.routing";
import {InquireViewComponent} from "./inquire-view/inquire-view.component";
import {InquireFormComponent} from "./inquire-form/inquire-form.component";

@NgModule({
  declarations: [
    InquireViewComponent,
    InquireFormComponent
  ],
  imports: [
    CommonModule,
    TextMaskModule,
    SideModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    InquireRouting
  ]
})
export class InquireModule { }