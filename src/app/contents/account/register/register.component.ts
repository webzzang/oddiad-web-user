import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Register} from "../../../domain/entity/account";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {AccountService} from "../../../service/account.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Utils} from "../../../shared/utils/utils";
import {GlobalConstants} from "../../../domain/vo/global-constants";
import * as moment from 'moment';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TermFormComponent} from "../term-form/term-form.component";
import {TermsService} from "../../../service/terms.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
      private router: Router,
      private fb: FormBuilder,
      private dialog: MatDialog,
      private confirm: ConfirmService,
      private service: AccountService,
      private termsService: TermsService
  ) {
  }

  Constants = GlobalConstants;
  vo: Register = new Register();
  loginForm: FormGroup;
  remainTimeDisabled: boolean = false;
  isCheckedDoubleEmail: boolean = false;
  /*중복체크여부*/
  checkDoubleEmailStatus: boolean;
  /*아이디중복체크상태*/
  timeout: boolean = false;
  countDownTimer;
  remainTimeText;
  certificationNumber;
  certificationNumberChk;
  termsAllToggle: boolean = false;
  termsList = [];
  adultChk: boolean = false;

  ngOnInit(): void {
    this.isCheckedDoubleEmail = false;
    this.getTermsList();
    this.loginForm = this.fb.group(
        {
          name: new FormControl('', [
            Validators.required
          ]),
          email: new FormControl('', [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
          ]),
          password: new FormControl('', [
            Validators.required
          ]),
          passwordConfirm: new FormControl('', [
            Validators.required
          ]),
          phoneNumber: new FormControl('', [ Validators.required]),
          certificationNumber: new FormControl('', [ Validators.required]),
          termsAll: new FormControl('', [ Validators.required]),
          nonRequired: new FormControl('', []),
          adultTerms: new FormControl('', [
            Validators.required
          ])
        }, {
          validator: [
            this.passwordConfirmChk,
            this.valPatternChk
          ]
        }
    );
  }

  getTermsList() {
    // 전체약관조회
    this.termsService.getTermsList(0).subscribe(res => {
      if(res){
        this.termsList = res;
        //약관추가
        this.termsList.forEach(t => {
          if (t.required){
            this.loginForm.addControl(t.code, new FormControl('', Validators.required));
          }
        });

      }
    }, err => {
      console.log("# err -> ", err);
      if (err.body) {
        if (err.body.message) {
          this.confirm.alert(err.body.message);
        }
      }
    });
  }

  get name() {
    return this.loginForm.get('name')!;
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get passwordConfirm() {
    return this.loginForm.get('passwordConfirm')!;
  }

  get phoneNumber() {
    return this.loginForm.get('phoneNumber')!;
  }

  valPatternChk(group: FormGroup) {
    var password = group.get('password');
    if (password.value) {
      if (!Utils.validPassword2(password.value)) {
        password.setErrors({'pattern': true});
      }
    }

    var phoneNumber = group.get('phoneNumber');
    if (phoneNumber.value) {
      if (!Utils.autoMobileTelNumber(phoneNumber.value)) {
        phoneNumber.setErrors({'pattern': true});
      }
    }

  }

  passwordConfirmChk(group: FormGroup) {
    var password = group.get('password');
    var passwordConfirm = group.get('passwordConfirm');
    if (password.dirty && passwordConfirm.dirty && password.value != passwordConfirm.value) {
      passwordConfirm.setErrors({'match': true});
    }
  }

  startTimer() {
    let limitTime = moment(new Date()).add(3, 'minute');
    let regex = /[^0-9]/g;
    this.countDownTimer = setInterval(() => {
      let now = moment(new Date());
      this.remainTimeText = moment.utc(moment(limitTime, "mm:ss").diff(moment(now, "mm:ss"))).format("mm:ss")
      let chk = parseInt(this.remainTimeText.replace(regex, ""));
      if (chk < 1) {
        this.timeout = true;
        clearInterval(this.countDownTimer);
        this.countDownTimer = "00:00";
        this.remainTimeDisabled = false;

      }
    }, 1000);
  }

  // 약관팝업
  openTermFormDialog(seq) {
    const dialog = this.dialog.open(TermFormComponent, {
      position: {},
      disableClose: true,
      data: {
        seq: seq,
        status:0
      }
    });
    dialog.afterClosed().subscribe(results => {
      if (results) {
        console.log("확인" + results)
      }
    }, err => {
      console.log('errror', err);
    });

  }

  //약관전체동의
  termsAllChk($event) {
    if (this.termsAllToggle == true) {
      this.termsList.forEach(term => {
        term.checked = false;
        this.adultChk = false;
      });
    } else {
      this.termsList.forEach(term => {
        term.checked = true;
        this.adultChk = true;
      });
    }
  }

  nonReqClick($event) {
    var req = $event.target.checked;
    if (req == false){
      this.termsAllToggle = false;
    }
  }

  emailValueChange() {
    this.checkDoubleEmailStatus = null;
    this.isCheckedDoubleEmail = false;
  }

  checkDoubleEmail() {

    if (this.vo.email == undefined) {
      this.confirm.alertInputRequire("아이디(E-mail)");
      return;
    }

    if (!Utils.isEmail(this.vo.email)) {
      this.confirm.alert("이메일 주소가 잘못 되었습니다. 확인바랍니다.");
      return;
    }

    this.checkDoubleEmailStatus = null;
    this.isCheckedDoubleEmail = null;

    this.vo.email = this.vo.email;
    this.service.checkEmail(this.vo).subscribe(res => {
      if (res) {
        this.checkDoubleEmailStatus = true;
        this.isCheckedDoubleEmail = true;
      }
    }, err => {
      //console.log("# err -> ", err);
      if (err.status == "007") { /*이메일중복*/
        this.checkDoubleEmailStatus = false;
        this.isCheckedDoubleEmail = true;
      } else {
        this.confirm.alertError();
        this.checkDoubleEmailStatus = false;
        this.isCheckedDoubleEmail = null;
      }
    });
  }

  send() {
    if (this.vo.phoneNumber == undefined) {
      this.confirm.alertInputRequire("휴대전화번호");
      return;
    }

    if (!Utils.autoMobileTelNumber(this.vo.phoneNumber)) {
      this.confirm.alert("휴대전화번호가 잘못 되었습니다. 확인바랍니다.");
      return;
    }

    this.vo.phoneNumber = this.vo.phoneNumber.replace(/\-/g, '');

    this.service.verification(this.vo.phoneNumber).subscribe(res => {
      if (res) {
        this.confirm.alert("인증번호가 전송되었습니다.");
        this.remainTimeDisabled = true;
        this.countDownTimer = "00:00";
        this.startTimer();
      }
    }, err => {
      console.log("# err -> ", err);
      this.confirm.alert("인증요청에 실패했습니다. 휴대전화번호 확인 후 다시 시도해주세요.");
    });
  }

  resend() {
    this.timeout = false;
    this.remainTimeDisabled = true;
    clearInterval(this.countDownTimer);

    this.send();
  }

  // 인증번호확인
  checkCertificationNumber() {
    if (this.certificationNumber == undefined) {
      this.confirm.alert("인증번호를 입력해주세요");
      return;
    }

    this.vo.phoneNumber = this.vo.phoneNumber.replace(/\-/g, '');

    let param = {
      phoneNumber: this.vo.phoneNumber,
      verificationNumber: this.certificationNumber
    }

    this.service.verificationChk(param).subscribe(res => {
      if (res) {
        this.confirm.alert("휴대전화번호 인증이 성공적으로 완료되었습니다.");
        clearInterval(this.countDownTimer);
        this.remainTimeDisabled = false;
        this.certificationNumberChk = true;
      }
    }, err => {
      console.log("# err -> ", err);
      this.confirm.alert("인증번호가 일치하지 않습니다. 다시 확인해주세요.");
      this.certificationNumberChk = null;
    });
  }


  // 회원가입
  addUser() {

    if (!this.vo.name) {
      this.confirm.alertInputRequire("이름");
      return;
    }

    if (!this.vo.email) {
      this.confirm.alertInputRequire("아이디(E-mail)");
      return;
    }

    if (!this.vo.password) {
      this.confirm.alertInputRequire("비밀번호");
      return;
    }

    if (!this.isCheckedDoubleEmail && !this.checkDoubleEmailStatus) {
      this.confirm.alert("아이디(E-mail) 중복여부를 체크 하십시요.");
      return;
    }

    if (!this.checkDoubleEmailStatus) {
      this.confirm.alert("이미 등록된 이메일입니다. 다른 이메일을 입력해주세요");
      return;
    }

    if (!this.certificationNumberChk) {
      this.confirm.alert("휴대전화 인증을 해주세요.");
      return;
    }

    this.vo.phoneNumber = this.vo.phoneNumber.replace(/\-/g, '');

    // 약관동의
    this.vo.terms = [];
    this.termsList.forEach(term => {
      if (term.code == "TRM004"){ // 마케팅수신여부동의 == 광고수신여부동의
        if (term.checked) {
          this.vo.receiveConsent = true;
        } else {
          this.vo.receiveConsent = false;
        }
      }

      this.vo.terms.push({ termsSeq: term.seq, termsAgree: term.checked });
    });


    this.confirm.confirm("회원가입 하시겠습니까?").afterClosed().subscribe(result => {
      if (result == "Y") {
        //저장
        this.service.add(this.vo).subscribe(res => {
          if (res) {
            this.saveAlert();
          }
        }, err => {
          console.log("# err -> ", err);
          this.confirm.alertError();
        });
      }
    });
  }

  private saveAlert() {
    this.router.navigate(['/account/success']);
  }
}
