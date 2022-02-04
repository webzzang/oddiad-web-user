import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {ConfirmService} from '../../../shared/component/confirm/confirm.service';
import {Utils} from '../../../shared/utils/utils';
import {Location} from '@angular/common';

import * as _ from 'lodash';
import {LoginService} from '../../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email: string;
  password: string;
  autoLogin: boolean = false;
  emailMsg: string;
  passwordMsg: string;
  util: Utils;
  constructor(
      private spinner: NgxSpinnerService,
      private confirm: ConfirmService,
      private service: LoginService,
      private location: Location,
      private router: Router

  ) { }

  ngOnInit(): void {
  }

  login() {

      if (_.isEmpty(this.email)) {
      this.confirm.alertInputRequire('이메일');
      return;
    } else if(!Utils.isEmail(this.email)){
      this.emailMsg = '올바른 이메일 주소를 입력해주세요.';
      this.confirm.alert('올바른 이메일 주소를 입력해주세요.');
      return;
    }else if (_.isEmpty(this.password)) {
      this.confirm.alertInputRequire('비밀번호');
      return;
    }

    this.spinner.show("main")
    this.service.login({ email: this.email, password: this.password.trim() , autoLogin: this.autoLogin})
        .subscribe((res) => {
          this.spinner.hide("main");
          if (res) {

            if (this.autoLogin === true) {
              this.setLoginCookies(res);
            } else {
              this.deleteLoginCookies();
            }

            sessionStorage.clear();
            sessionStorage.setItem('id', res.id);
            sessionStorage.setItem('accesstoken', res.accessToken);
            sessionStorage.setItem('refreshtoken', res.refreshToken);

           //  비밀번호 초기화 사용자에 경우 비밀번호 재설정 화면으로 이동
            if (!res.passwordReset) {
              this.router.navigate(['mypage/changePassword']);
          } else {
              this.location.back();
            }
          }
        }, (error) => {
          console.log(error);
          this.confirm.alert(error.message);

          this.spinner.hide("main");
        });
  }

  inputChange(event){
    if(event === 'id'){
      this.emailMsg = '';
      if(!Utils.isEmail(this.email)){
        this.emailMsg = '올바른 이메일 주소를 입력해주세요.';
      }
    }
  }

  setLoginCookies(res){
    Utils.setCookie('id', res.id, 30);
    Utils.setCookie('accesstoken', res.accessToken, 30);
    Utils.setCookie('refreshtoken', res.refreshtoken, 30);
  }
  deleteLoginCookies(){
    Utils.deleteCookie('id');
    Utils.deleteCookie('accesstoken');
    Utils.deleteCookie('refreshtoken');
  }
}
