import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {SimplePagingComponent} from './component/simple-paging/simple-paging.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmService} from './component/confirm/confirm.service';
import {ConfirmComponent} from './component/confirm/confirm.component';
import {StringFormatPipe} from './pipe/string-format.pipe';
import {CommonPipeModule} from './pipe/common-pipe.module';
import {StringToDate} from './pipe/string-to-date.pipe';
import {NavigationService} from './service/navigation.service';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DatepkComponent} from './component/datepk/datepk.component';
import {DatepkTimeComponent} from './component/datepkTime/datepkTime.component';
import {FlatpickrModule} from 'angularx-flatpickr';
import {EditorComponent} from './component/editor/editor.component';
import {NgxSummernoteModule} from 'ngx-summernote';
import {FileUploadPopComponent} from './component/file-upload-pop/file-upload-pop.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2ChartComponent} from './component/ng2-chart/ng2-chart.component';
import {ChartsModule} from 'ng2-charts';
import {PaymentComponent} from './component/payment/payment.component';
import {FacebookLoginComponent} from './component/sns-login/facebook-login/facebook-login.component';
import {SnsLoginComponent} from './component/sns-login/sns-login.component';
import {KakaoLoginComponent} from './component/sns-login/kakao-login/kakao-login.component';
import {CognitoLoginComponent} from './component/sns-login/cognito-login/cognito-login.component';
import {GoogleLoginComponent} from "./component/sns-login/google-login/google-login.component";
import {AppleLoginComponent} from "./component/sns-login/apple-login/apple-login.component";

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      CommonPipeModule,
      TranslateModule,
      NgxSpinnerModule,
      NgbModalModule,
      FlatpickrModule.forRoot(),
      ChartsModule,
      NgxSummernoteModule
    ],
    declarations: [
      ConfirmComponent,
      SimplePagingComponent,
      DatepkComponent,
      DatepkTimeComponent,
      Ng2ChartComponent,
      EditorComponent,
      FileUploadPopComponent,
      PaymentComponent,
      SnsLoginComponent,
      FacebookLoginComponent,
      KakaoLoginComponent,
      CognitoLoginComponent,
      GoogleLoginComponent,
      AppleLoginComponent,
      FacebookLoginComponent
    ],
    entryComponents: [
      ConfirmComponent,
      SimplePagingComponent,
      DatepkComponent,
      DatepkTimeComponent,
      Ng2ChartComponent,
      EditorComponent
    ],
    providers: [
      ConfirmService,
      TranslateService
    ],
  exports: [
    StringFormatPipe,
    StringToDate,
    ConfirmComponent,
    SimplePagingComponent,
    DatepkComponent,
    DatepkTimeComponent,
    Ng2ChartComponent,
    EditorComponent,
    PaymentComponent,
    KakaoLoginComponent,
    CognitoLoginComponent,
    GoogleLoginComponent,
    AppleLoginComponent,
    FacebookLoginComponent
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: NavigationService }
      ]
    };
  }
}
