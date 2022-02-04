import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GlobalConstants} from "../../../domain/vo/global-constants";
import {Account} from "../../../domain/entity/account";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {LoginService} from "../../../service/login.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor( private fb: FormBuilder,
  private confirm: ConfirmService,
  private service: LoginService,) { }

  vo: Account = new Account();
  changeForm: FormGroup;
  Constants = GlobalConstants;


    ngOnInit(): void {
      this.changeForm = this.fb.group(
          {
              email: new FormControl('', [
                  Validators.required,
                  Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
              ]),
              phoneNumber: new FormControl('', [
                  Validators.required,
                  Validators.pattern(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)
              ]),
          }
      );
  }

    get email() { return this.changeForm.get('email')!; }
    get phoneNumber() { return this.changeForm.get('phoneNumber')!; }

  send() {
    // 비밀번호 변경 문자 발송

    if (!this.vo.email) {
      this.confirm.alertInputRequire("아이디(E-mail)");
      return;
    }

    if (!this.vo.phoneNumber) {
      this.confirm.alertInputRequire("전화번호");
      return;
    }

    let param = {
      email: this.vo.email,
      phoneNumber: this.vo.phoneNumber.replace(/\-/g, '')
    }

    this.service.password(param).subscribe(res => {
      if(res){
         this.confirm.alert("비밀번호가 전송되었습니다.").afterClosed().subscribe(result => {
           if (res){
              location.href = '/';
           }
       });
      }
    }, err => {
      console.log("# err -> ", err);
      if (err.message) {
        this.confirm.alert(err.message);
      }

    });

  }
}
