import { Component, OnInit } from '@angular/core';
import {SnsLoginComponent} from "../sns-login.component";
import {MustadService} from "../../../../service/mustad.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ConfirmService} from "../../confirm/confirm.service";

declare var gapi;

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent extends SnsLoginComponent implements OnInit {

  constructor(protected mustadService: MustadService,
              protected spinner: NgxSpinnerService,
              protected confirm: ConfirmService) {

    super(mustadService, spinner, confirm);
  }

  ngOnInit(): void {
    console.log('gapi', gapi);
    console.log('gapi.auth2', gapi.auth2);

    gapi.load('auth2', function() {
      console.log('auth2.arguments', arguments);

      console.log('gapi.auth2.GoogleAuth', gapi.auth2.GoogleAuth);

      gapi.auth2.init({ client_id: '804094287856-vvsp4lk8864of7gmqosrkke2dg0kipg4.apps.googleusercontent.com' }).then(function() {
        console.log('GoogleAuth.then.arguments', arguments);
      });
    });
  }

  /**
   *  googleInit
   */
  googleInit(): void {
    gapi.load('auth2', function() {
      gapi.auth2.init();
      let options = new gapi.auth2.SigninOptionsBuilder();
      options.setPrompt('select_account');
      // 추가는 Oauth 승인 권한 추가 후 띄어쓰기 기준으로 추가
      options.setScope('email profile openid https://www.googleapis.com/auth/user.birthday.read');
      // 인스턴스의 함수 호출 - element에 로그인 기능 추가
      // GgCustomLogin은 li태그안에 있는 ID, 위에 설정한 options와 아래 성공,실패시 실행하는 함수들
      gapi.auth2.getAuthInstance().attachClickHandler('GgCustomLogin', options, (a?, b?, c?) => {
        console.log('google success', a, b, c);
      }, (a?, b?, c?) => {
        console.log('google failure', a, b, c);
      });
    });

    window['googleLoginSuccessHandler'] = (a?, b?, c?) => {
      console.log(a, b, c);
    }
  }


  /**
   *  google로그인
   */
  googleSignin(googleUser): void {
    var access_token = googleUser.getAuthResponse().access_token
    $.ajax({
      // people api를 이용하여 프로필 및 생년월일에 대한 선택동의후 가져온다.
      url: '//people.googleapis.com/v1/people/me'
      // key에 자신의 API 키를 넣습니다.
      , data: {personFields:'birthdays', key:'AIzaSyBOdmeC4SOSzXmPGLEM2vZueqiBSWKg3wk', 'access_token': access_token}
      , method:'GET'
    })
    .done(function(e){
      //프로필을 가져온다.
      var profile = googleUser.getBasicProfile();
      console.log(profile)
    })
    .fail(function(e){
      console.log(e);
    })
  }
}
