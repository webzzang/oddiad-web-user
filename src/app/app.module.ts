import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule, DatePipe, registerLocaleData} from '@angular/common';
import localeKo from '@angular/common/locales/ko';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ResponsiveModule} from 'ngx-responsive';
import {AppRoutes} from './app.routing';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SideModule} from './contents/side/side.module';
import {LayoutModule} from './layout/layout.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FlatpickrModule} from 'angularx-flatpickr';
import {HttpRequestInterceptor} from './service/HttpRequestInterceptor';
import {TextMaskModule} from 'angular2-text-mask';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import {HomeComponent} from 'src/app/contents/home/home.component';
import { LiveComponent } from './contents/live/live.component';
import { FaqComponent } from './contents/faq/faq.component';
import { SampleComponent } from './contents/sample/sample.component';
import { NoPageComponent } from './contents/no-page/no-page.component';
import { RegisterSuccessComponent } from './contents/account/register-success/register-success.component';
import {CommonPipeModule} from "./shared/pipe/common-pipe.module";
import {LoginComponent} from "./contents/account/login/login.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LiveComponent,
        FaqComponent,
        SampleComponent,
        NoPageComponent,
        RegisterSuccessComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule.forRoot(AppRoutes, {enableTracing: false, onSameUrlNavigation: 'reload'}),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ResponsiveModule.forRoot(),
        TranslateModule.forRoot(),
        SharedModule.forRoot(),
        SideModule,
        LayoutModule,
        NgxSpinnerModule,
        FlatpickrModule.forRoot(),
        TextMaskModule,
        ChartsModule,
        NgbModule,
        CommonPipeModule
    ],
    providers: [
        DatePipe,
        { provide: LOCALE_ID, useValue: 'ko' },
        { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(localeKo);