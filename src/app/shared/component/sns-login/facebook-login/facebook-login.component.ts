import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {MustadService} from "../../../../service/mustad.service";
import {ConfirmService} from "../../confirm/confirm.service";
import {NgxSpinnerService} from "ngx-spinner";
import {SnsLoginComponent} from "../sns-login.component";

declare var FB: any;

/**
 * 페이스북 로그인
 */
@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss']
})
export class FacebookLoginComponent extends SnsLoginComponent implements OnInit {

  constructor(protected mustadService: MustadService,
              protected spinner: NgxSpinnerService,
              protected confirm: ConfirmService) {

    super(mustadService, spinner, confirm);
  }

  ngOnInit(): void {
    FB.init({
      appId   : environment.sns.facebook.appId,
      cookie  : true,
      xfbml   : true,
      version : 'v2.8'
    });
  }

  /**
   *  로그인 팝업 오픈
   */
  loginPopupOpen(): void {
    let _this: FacebookLoginComponent = this;

    FB.login(function(loginRes) {
      console.log('loginRes', loginRes);
      if (loginRes?.authResponse?.accessToken) {
        _this.logout(() => {
          _this.convertFederatedToken(loginRes.authResponse.accessToken);
        });
      }
    });
  }

  /**
   * 로그아웃
   *
   * @param logoutAfterHandler
   */
  logout(logoutAfterHandler: Function): void {
    FB.getLoginStatus(function(response) {
      if ('connected' == response.status) {
        FB.logout(function(){
          logoutAfterHandler();
        });
      } else {
        logoutAfterHandler();
      }
    });
  }
}
