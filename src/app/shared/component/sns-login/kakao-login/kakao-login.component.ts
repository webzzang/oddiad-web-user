import {Component, OnInit} from '@angular/core';
import {SnsLoginComponent} from "../sns-login.component";
import {MustadService} from "../../../../service/mustad.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ConfirmService} from "../../confirm/confirm.service";
import {environment} from "../../../../../environments/environment";

declare var Kakao;

/**
 * 카카오 로그인
 */
@Component({
  selector: 'app-kakao-login',
  templateUrl: './kakao-login.component.html',
  styleUrls: ['./kakao-login.component.scss']
})
export class KakaoLoginComponent extends SnsLoginComponent implements OnInit {

  constructor(protected mustadService: MustadService,
              protected spinner: NgxSpinnerService,
              protected confirm: ConfirmService) {

    super(mustadService, spinner, confirm);
  }

  ngOnInit(): void {
    if (!Kakao.isInitialized()) {
      Kakao.init(environment.sns.kakao.javascriptKey);
    }
  }

  /**
   *  로그인 팝업 오픈
   */
  loginPopupOpen(): void {
    let _this: KakaoLoginComponent = this;

    Kakao.Auth.loginForm({ // access_token 발급
      success: function(auth) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function(response) {
            var body = {
              userAccessToken: auth.access_token,
              userEmail: response.kakao_account.email,
              userName: response.kakao_account.profile.nickname
            }

            _this.logout(() => {
              _this.mustadService.kakaoAuthToken(body).subscribe((res) => {
                if (res.resultCode == '0000') {
                  _this.spinner.hide('main');
                  _this.convertFederatedToken(res.idToken);
                } else {
                  _this.notExistsUserAlertOpen().afterClosed().subscribe(() => {
                    _this.spinner.hide('main')
                  });
                }
              }, err => {
                console.log(err);
                _this.spinner.hide('main');
                _this.confirm.alertError();
              });
            });
          },
          fail: function(error) {
            console.log(error);
            _this.confirm.alertError();
          }
        });
      },
      fail: function(err) {
        alert(JSON.stringify(err))
      }
    });
  }

  /**
   * 로그아웃
   *
   * @param logoutAfterHandler
   */
  logout(logoutAfterHandler: Function): void {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.Auth.logout(function(){
        logoutAfterHandler();
      });
    } else {
      logoutAfterHandler();
    }
  }
}
