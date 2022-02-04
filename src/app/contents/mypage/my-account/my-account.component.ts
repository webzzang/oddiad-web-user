import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../service/account.service";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {TermsService} from "../../../service/terms.service";
import {TermFormComponent} from "../../account/term-form/term-form.component";
import {Utils} from "../../../shared/utils/utils";
import {MatDialog} from "@angular/material/dialog";
import {Account} from "../../../domain/entity/account";
import * as moment from "moment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgxSpinnerService} from "ngx-spinner";
import {FileService} from "../../../service/file.service";
import {GlobalConstants} from "../../../domain/vo/global-constants";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  Constants = GlobalConstants;
  accountForm: FormGroup;
  account:Account = new Account();
  terms:any  = {};
  isCheckedDoubleEmail: boolean = true;
  /*중복체크여부*/
  checkDoubleEmailStatus: boolean;
  /*아이디중복체크상태*/
  remainTimeDisabled: boolean = false;
  timeout: boolean = false;
  countDownTimer;
  remainTimeText;
  certificationNumber;
  certificationNumberChk;
  oriEmail; //변경 전 이메일
  oriPhoneNumber; //변경 전 전화번호
  file = null; // 사업자등록증파일

  constructor(
      private dialog: MatDialog,
      private fb: FormBuilder,
      private confirm: ConfirmService,
      private termsService: TermsService,
      private service: AccountService,
      private spinnerService: NgxSpinnerService,
      private fileService: FileService,

  ) {
  }

  ngOnInit(): void {
    this.getMyAccount()
    this.getTermsList();
    this.accountForm = this.fb.group(
        {
          name: new FormControl('', [
          ]),
          email: new FormControl('', [
            Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
          ]),
          phoneNumber: new FormControl('', []),
          certificationNumber: new FormControl('', []),
          nonRequired: new FormControl('', []),
          pcompanyName: new FormControl('', []),
          pceo: new FormControl('', []),
          pbusinessLicenseNumber: new FormControl('', []),
          pbusinessLicenseFileName: new FormControl('', []),
          ccompanyName: new FormControl('', []),
          cceo: new FormControl('', []),
          cbusinessLicenseNumber: new FormControl('', []),
          cbusinessLicenseFileName: new FormControl('', []),
          terms: new FormControl('', [])
        }, {
          validator: [
            this.valPatternChk,
          ]
        }
    );
  }

  get email() {
    return this.accountForm.get('email')!;
  }
  get phoneNumber() {
    return this.accountForm.get('phoneNumber')!;
  }

  valPatternChk(group: FormGroup) {
    var phoneNumber = group.get('phoneNumber');
    if (phoneNumber.value) {
      if (!Utils.autoMobileTelNumber(phoneNumber.value)) {
        phoneNumber.setErrors({'pattern': true});
      }
    }
  }

  getMyAccount() {
    this.service.getMyAccount().subscribe((res) => {
      this.account = res;
      this.oriEmail = res.email;
      this.oriPhoneNumber = res.phoneNumber;
    });
  }

  getTermsList() {
    // 전체약관조회
    this.termsService.getTermsList(0).subscribe(res => {
      if(res){
        //마케팅수신여부동의만
        res.forEach((term,index) => {
          if (term.code ="TRM004"){ //마케팅 이용 수집
            this.terms = term;
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

  emailValueChange() {
    this.checkDoubleEmailStatus = null;
    this.isCheckedDoubleEmail = false;
  }




  /**
   * 인증문자 전송
   */
  send() {
    if (this.account.phoneNumber == undefined) {
      this.confirm.alertInputRequire("휴대전화번호");
      return;
    }

    if (!Utils.autoMobileTelNumber(this.account.phoneNumber)) {
      this.confirm.alert("휴대전화번호가 잘못 되었습니다. 확인바랍니다.");
      return;
    }

    this.account.phoneNumber = this.account.phoneNumber.replace(/\-/g, '');

    this.service.verification(this.account.phoneNumber).subscribe(res => {
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

  resend() {
    this.timeout = false;
    this.remainTimeDisabled = true;
    clearInterval(this.countDownTimer);

    this.send();
  }

  /**
   * 인증문자 확인
   */
  certification(): void {
    if (this.certificationNumber == undefined) {
      this.confirm.alert("인증번호를 입력해주세요");
      return;
    }

    this.account.phoneNumber = this.account.phoneNumber.replace(/\-/g, '');

    let param = {
      phoneNumber: this.account.phoneNumber,
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

  /**
   * 약관보기 팝업
   */
  openTermPopup(seq): void {
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

  /**
   * 이메일 중복체크
   */
  checkEmailDuplication(): void {
    if (this.account.email == undefined) {
      this.confirm.alertInputRequire("아이디(E-mail)");
      return;
    }

    if (this.account.email == this.oriEmail) {
      this.confirm.alert("변경전 이메일과 일치합니다.");
      return;
    }

    if (!Utils.isEmail(this.account.email)) {
      this.confirm.alert("이메일 주소가 잘못 되었습니다. 확인바랍니다.");
      return;
    }

    this.checkDoubleEmailStatus = null;
    this.isCheckedDoubleEmail = null;

    this.service.checkEmail(this.account).subscribe(res => {
      if (res) {
        this.checkDoubleEmailStatus = true;
        this.isCheckedDoubleEmail = true;
      }
    }, err => {
      console.log("# err -> ", err);
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


  //사업자등록증
  bizFileChange(files: FileList, type:string) {
   if (files.length === 0){
      return;
    }
    this.file = files[0];

    var mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.confirm.alert("jpg, png 파일만 업로드 해주세요.");
      return;
    }

    let formData = new FormData();
    formData.append('file', this.file);

    this.spinnerService.show('main');
    if (type == "BCT002") {
      this.fileService.uploadPbizLicense(formData).subscribe((res) => {
        this.account.pbusinessLicenseFileSeq = res.fileSeq;
        this.account.pbusinessLicenseFileName = res.originName;
        this.spinnerService.hide('main');

      }, err => {
        console.log("# err -> ", err);
        this.spinnerService.hide('main');
      });
    } else if(type == "BCT001"){
      this.fileService.uploadCbizLicense(formData).subscribe((res) => {
        this.account.cbusinessLicenseFileSeq = res.fileSeq;
        this.account.cbusinessLicenseFileName = res.originName;
        this.spinnerService.hide('main');
      }, err => {
        console.log("# err -> ", err);
        this.spinnerService.hide('main');
      });
    } else {}
  }

  // 사업자등록증파일삭제
  deleteBizFile(type) {
    if (type == "BCT002") {
      this.account.pbusinessLicenseFileSeq = "";
      this.account.pbusinessLicenseFileName = "";
    } else {
      this.account.cbusinessLicenseFileSeq = "";
      this.account.cbusinessLicenseFileName = "";
    }
  }

  fileDownload(seq, name){
    let params = {
      "seq": seq,
      "fileName": name
    }
    this.fileService.contractFileDownload(params).subscribe(r=>{
      console.log(r);
    });
  }

  /**
   * 회원탈퇴
   */
  withdrawal(): void {
    this.confirm.confirm("회원탈퇴를 하시겠습니까?").afterClosed().subscribe(result => {
      if (result == "Y") {
        this.service.resign().subscribe(res => {
          if (res) {
            Utils.deleteAllCookies();
            sessionStorage.clear();
            location.href = '/';
          }
        }, err => {
          this.confirm.alert(err.message);
        });
      }
    });
  }

  /**
   * 회원정보 수정
   */
  modify(): void {


  // 사업자정보가 있으면 사업자등록증이랑, 사업자 번호가 잘 들어가있는지 확인
    if (this.account.pcompanyName != null) {

      if (!this.account.pceo) {
        this.confirm.alertInputRequire("개인사업자 사업자명");
        return;
      }

      if (!this.account.pbusinessLicenseNumber) {
        this.confirm.alertInputRequire("개인사업자 사업자 등록번호");
        return;
      }

      let businessLicenseNumber:any  = Utils.unmask(this.account.pbusinessLicenseFileSeq,"businessNumber");
      // 사업자번호 확인
      if (businessLicenseNumber.length != 10){
        this.confirm.alert("개인사업자 사업자등록번호를 확인 해주세요.");
        return;
      }

      if (!this.account.pbusinessLicenseFileSeq) {
        this.confirm.alertInputRequire("개인사업자 사업자 등록증");
        return;
      }
    }

    if (this.account.ccompanyName != null) {
      if (!this.account.cceo) {
        this.confirm.alertInputRequire("법인사업자 사업자명");
        return;
      }

      if (!this.account.cbusinessLicenseNumber) {
        this.confirm.alertInputRequire("법인사업자 사업자 등록번호");
        return;
      }

      let businessLicenseNumber:any  = Utils.unmask(this.account.cbusinessLicenseFileSeq,"businessNumber");
      // 사업자번호 확인
      if (businessLicenseNumber.length != 10){
        this.confirm.alert("법인사업자 사업자등록번호를 확인 해주세요.");
        return;
      }

      if (!this.account.cbusinessLicenseFileSeq) {
        this.confirm.alertInputRequire("법인사업자 사업자 등록증");
        return;
      }
    }

    // 핸드폰번호 인증 유무
    if (this.oriPhoneNumber != this.account.phoneNumber) {
      if (!this.certificationNumberChk) {
        this.confirm.alert("휴대전화 인증을 해주세요.");
        return;
      }
    }

    // 이메일 변경시 중복조사 여부
    if (this.oriEmail != this.account.email) {
      if (!this.isCheckedDoubleEmail) {
        this.confirm.alert("이메일 중복조사를 해주세요.");
        return;
      }
    }

    this.confirm.confirm("회원정보를 수정하시겠습니까?").afterClosed().subscribe(result => {
      if (result == "Y") {
        this.service.modify(this.account).subscribe(res => {
          if (res) {
            this.confirm.alert("회원정보를 수정하였습니다.");
            this.getMyAccount();
          }
        }, err => {
          this.confirm.alert(err.message);
        });

      }
    });

  }
}
