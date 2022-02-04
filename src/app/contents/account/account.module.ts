import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from 'src/app/contents/account/register/register.component'
import {TextMaskModule} from 'angular2-text-mask';
import { AccountRouting } from './account-routing';
import {SideModule} from '../side/side.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TermFormComponent } from './term-form/term-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
      RegisterComponent,
      TermFormComponent,
      ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    TextMaskModule,
    SideModule,
    AccountRouting,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule.forRoot()
  ],
   exports:[
    TermFormComponent
   ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AccountModule { }