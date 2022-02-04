import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../service/account.service";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Utils} from "../../../shared/utils/utils";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor( private service: AccountService,
               private confirm: ConfirmService,
               private fb: FormBuilder
  ) { }

  passwordForm: FormGroup;
  passwordParam:any = {};

  ngOnInit(): void {
    this.passwordForm = this.fb.group(
        {
          password: new FormControl('', [ Validators.required]),
          newPassword: new FormControl('', [Validators.required]),
          newPasswordConfirm: new FormControl('', [Validators.required]),
        }, {
          validator: [
            this.valPatternChk,
            this.newPasswordConfirmChk
          ]
        }
    );
  }

  get newPasswordConfirm() {
    return this.passwordForm.get('newPasswordConfirm')!;
  }
  get newPassword() {
    return this.passwordForm.get('newPassword')!;
  }

  valPatternChk(group: FormGroup) {
    var newPassword = group.get('newPassword');
    if (newPassword.value) {
      if (!Utils.validPassword2(newPassword.value)) {
        newPassword.setErrors({'pattern': true});
      }
    }
  }

  newPasswordConfirmChk(group: FormGroup) {
    var newPassword = group.get('newPassword');
    var newPasswordConfirm = group.get('newPasswordConfirm');
    if (newPassword.dirty && newPasswordConfirm.dirty && newPassword.value != newPasswordConfirm.value) {
      newPasswordConfirm.setErrors({'match': true});
    }
  }


  /**
   * 비밀번호변경
   */
  changePassword() {

    if (this.passwordParam["password"] == undefined) {
      this.confirm.alert("현재 비밀번호를 입력해주세요.");
      return;
    }

    if (this.passwordParam["newPassword"] == undefined) {
      this.confirm.alert("새로운 비밀번호를 입력해주세요.");
      return;
    }

    if (this.passwordParam["newChangePassword"] == undefined) {
      this.confirm.alert("새로운 비밀번호와 동일한 비밀번호를 입력해주세요.");
      return;
    }

    this.confirm.confirm("비밀번호를 변경하시겠습니까?").afterClosed().subscribe(result => {
      if (result == "Y") {
        this.service.passwordChange(this.passwordParam).subscribe(res => {
          if (res) {
            this.confirm.alert("비밀번호가 변경되었습니다. 다시 로그인해주세요.").afterClosed().subscribe(result => {
              if (res) {
                Utils.deleteAllCookies();
                sessionStorage.clear();
                location.href = '/';
              }
            });
          }
        }, (error) => {
          this.confirm.alert(error.message);
        });
      }
    });
  }
}
