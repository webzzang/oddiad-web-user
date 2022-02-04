import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {SnsLoginComponent} from "../sns-login.component";
import {MustadService} from "../../../../service/mustad.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ConfirmService} from "../../confirm/confirm.service";

declare var AmazonCognitoIdentity;

/**
 * 코그니토 로그인
 */
@Component({
  selector: 'app-cognito-login',
  templateUrl: './cognito-login.component.html',
  styleUrls: ['./cognito-login.component.scss']
})
export class CognitoLoginComponent extends SnsLoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(protected mustadService: MustadService,
              protected spinner: NgxSpinnerService,
              protected confirm: ConfirmService) {

    super(mustadService, spinner, confirm);
  }

  ngOnInit(): void {
  }

  /**
   * cognito 로그인
   */
  login() {
    if (!this.email) {
      this.confirm.alertInputRequire('이메일');
      return;
    }

    if (!this.password) {
      this.confirm.alertInputRequire('비밀번호');
      return;
    }

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
      Username: this.email,
      Password: this.password
    });

    var userPool = new AmazonCognitoIdentity.CognitoUserPool({
      UserPoolId: environment.sns.cognito.userPoolId,
      ClientId: environment.sns.cognito.clientId
    });

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: this.email,
      Pool: userPool
    });

    this.spinner.show("main");
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        this.setFederatedToken(result.idToken.jwtToken);
        this.loginSuccessEmitter.emit(result.idToken.jwtToken);

        this.spinner.hide("main");
      },
      onFailure: (err) => {
        this.spinner.hide("main");
        this.notExistsUserAlertOpen();
      }
    });
  }
}
