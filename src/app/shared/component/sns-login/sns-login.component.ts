import {MustadService} from "../../../service/mustad.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ConfirmService} from "../confirm/confirm.service";
import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";
import * as moment from "moment";

@Component({
  selector: 'app-sns-login',
  templateUrl: './sns-login.component.html',
  styleUrls: ['./sns-login.component.scss']
})
export class SnsLoginComponent implements OnInit {

  public static readonly STORAGE_NAME: string = 'sns.login';

  @Output('loginSuccessEvent') protected loginSuccessEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected mustadService: MustadService,
              protected spinner: NgxSpinnerService,
              protected confirm: ConfirmService) {
  }

  ngOnInit() {
  }

  /**
   * 사용자 토큰으로 변환
   *
   * @param token
   */
  convertFederatedToken(token: string): void {
    this.spinner.show('full');
    this.setFederatedToken(null);

    this.mustadService.federatedToken(token).subscribe((response) => {
      if ('0000' == response.data?.resultCode) {
        this.setFederatedToken(response.data.token);

        this.loginSuccessEmitter.emit(response.data.token);
      } else {
        this.notExistsUserAlertOpen();
      }

      this.spinner.hide('full');
    },
    (error) => {
      this.spinner.hide('full');
      this.confirm.alertError();
      console.log('error', error);
    });
  }

  /**
   * 사용자 정보 없을시 알림창
   */
  notExistsUserAlertOpen(): MatDialogRef<any> {
    return this.confirm.alert('사용자 정보가 존재하지 않습니다.');
  }

  /**
   * sns 로그인 상태 보관
   *
   * @param name
   * @param value
   */
  setStatus(name: string, value: any): void {
    if (name) {
      let sns: any = JSON.parse(sessionStorage.getItem(SnsLoginComponent.STORAGE_NAME) || '{}');

      sns[name] = value;

      sessionStorage.setItem(SnsLoginComponent.STORAGE_NAME, JSON.stringify(sns));
    }
  }

  /**
   * sns 로그인 상태 제거
   *
   * @param name
   */
  getStatus(name: any): any {
    let sns: any = JSON.parse(sessionStorage.getItem(SnsLoginComponent.STORAGE_NAME) || '{}');

    return sns[name];
  }

  /**
   * 사용자 토큰 저장
   *
   * @param value
   */
  setFederatedToken(value: string): void {
    this.setStatus('federatedToken', value);
    console.log('issueDatetime', moment().format('YYYYMMDDHHmmss'));
    this.setStatus('issueDatetime', moment().format('YYYYMMDDHHmmss'));
  }

  /**
   * 사용자 토큰
   */
  getFederatedToken(): string {
    return this.getStatus('federatedToken');
  }
}
