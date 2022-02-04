import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MustadService} from "../../../service/mustad.service";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {NgxSpinnerService} from "ngx-spinner";
import {SnsLoginComponent} from "../../../shared/component/sns-login/sns-login.component";
import * as moment from "moment";

declare var gapi: any;

@Component({
  selector: 'app-mustad-login',
  templateUrl: './mustad-login.component.html',
  styleUrls: ['./mustad-login.component.scss']
})
export class MustadLoginComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<MustadLoginComponent>,
              private confirm: ConfirmService,
              private spinner: NgxSpinnerService,
              private service: MustadService) {
  }

  viewType: string = '';  // login : 머스타드 로그인 화면, list 템플릿 리스트
  cnt: number = 0;
  mustadList: Array<any> = [];

  ngOnInit(): void {
    let snsLoginInfo: any = JSON.parse(sessionStorage.getItem(SnsLoginComponent.STORAGE_NAME) || '{}');
    let federatedToken: string = snsLoginInfo.federatedToken;
    let issueDatetime : string = snsLoginInfo.issueDatetime;

    if (federatedToken) {
      let diffMin: number = moment.duration(moment().diff(moment(issueDatetime, 'YYYYMMDDHHmmss'))).asMinutes();

      if (10 > diffMin) {
        this.getMustadTemplate(federatedToken);
      }
    } else {
      this.viewType = 'login';
    }
  }

  /**
   * 로그인 성공 이벤트 핸들러
   *
   * @param federatedToken
   */
  loginSuccessEventHandler(federatedToken) {
    if (federatedToken) {
      this.getMustadTemplate(federatedToken);
    }
  }

  /**
   * 현재 창 닫기
   */
  closeDialog() {
    this.dialogRef.close(false);
  }

  /**
   * MustadTemplate 조회 공통
   * 사용자 토큰으로 머스타드 템플릿 조회
  */
  getMustadTemplate(jwtToken) {
    this.spinner.show('popup');
    this.service.getMustadTemplate({'token':jwtToken}).subscribe((res)=>{
      this.mustadList = [];
      console.log('res', res);
      if (res.body.data.resultCode = '0000'){
        let mustadToken = res.body.data.mustadToken;
        // boardType = Youtube 제외

        if (res.body.data.providerMetadata) {
          res.body.data.providerMetadata.forEach((data) => {
            if (data.providerMetadata.boardType != 'Youtube') {
              data.providerMetadata.resource = data.providerMetadata.resource+"&authorization="+mustadToken;

              if (data.name.startsWith('portrait_')) {
                data.transform = data.name.endsWith('left') ? '90deg' : '270deg';
              }

              this.mustadList.push(data);
            }
          });
        }

        this.viewType = 'list';
      } else if (res.body.data.resultCode = '9999'){ // 토큰만료
        this.removeFederatedToken();
        this.viewType = 'login';
      } else {
        this.confirm.alert("머스타드 템플릿 조회에 실패했습니다.");
      }

      this.spinner.hide("popup");
    }, err => {
      let errMsg = err['body']['message'];
      this.spinner.hide("popup");
      this.confirm.alert(errMsg);
    });
  }

  isChecked($event: any, id: String) {
    this.cnt = 0;
    this.mustadList.forEach((mustad, index) => {
      if (id == mustad.id) {
        mustad.checked = $event.target.checked;
      }
      if (mustad.checked) {++this.cnt}
    });

  }

  /**
   * 템플릿 선택
   */
  addTemplate(){
    if (this.cnt == 0){
      this.confirm.alert("선택된 템플릿이 없습니다.");
      return;
    }
    let tempList = [];
    this.spinner.show('main')
    this.mustadList.forEach((mustad, index) => {
      if (mustad.checked) {
        console.log('mustad', mustad);
        return;
        //머스타드 파일 저장
        this.service.mustadFileSave({'mustadUrl':mustad.providerMetadata.resource,'mustadId':mustad.providerMetadata.id,'name':mustad.providerMetadata.name}).subscribe((res)=> {
          let img = {
            fileIndex: index
            , name: res.originName
            , uniqFileName: res.uniqFileName
            , fileSeq: res.fileSeq
            , path: res.url
            , type: res.originName
          };

          tempList.push(img);
          if ((index+1) == this.cnt ){
            this.spinner.hide("main");
            this.dialogRef.close({'template' : tempList});
          }
        }, err => {
          let errMsg = err['body']['message'];
          this.spinner.hide("main");
          this.confirm.alert(errMsg);
          return;
        });
      }
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
      url: 'https://people.googleapis.com/v1/people/me'
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

  /**
   * 기존에 발급받은 통합토큰 제거
   */
  removeFederatedToken(): void {
    let snsLoginInfo: any = JSON.parse(sessionStorage.getItem(SnsLoginComponent.STORAGE_NAME) || '{}');

    delete snsLoginInfo.federatedToken;
    delete snsLoginInfo.issueDatetime;

    sessionStorage.setItem(SnsLoginComponent.STORAGE_NAME, JSON.stringify(snsLoginInfo));
  }

  @HostListener('document:keyup.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.closeDialog();
  }
}