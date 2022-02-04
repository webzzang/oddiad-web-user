import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* account 서비스추가 */
@Injectable({ providedIn: 'root' })
export class AccountService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  checkEmail(account): Observable<any> {
      return this.post(account,`${ApiEndPoint.ACCOUNT.DUPLICATION}`);
  }

  verification(phoneNumber:any): Observable<any> {
       return this.post(null,`${ApiEndPoint.ACCOUNT.VERIFICATION(phoneNumber)}`);
  }

  verificationChk(account): Observable<any> {
       return this.post(account,`${ApiEndPoint.ACCOUNT.VERIFICATIONCHK}`);
  }

  add(account): Observable<any> {
    return this.post(account,`${ApiEndPoint.ACCOUNT.ADD}`);
  }

  getMyAccount(): Observable<any> {
    return this.get(`${ApiEndPoint.ACCOUNT.MY}`);
  }

  modify(my): Observable<any> {
    return this.put(my,`${ApiEndPoint.ACCOUNT.MODIFY}`);
  }

  passwordChange(password): Observable<any> {
    return this.post(password,`${ApiEndPoint.ACCOUNT.PASSWORDCHANGE}`);
  }

  resign(): Observable<any> {
    return this.post(null,`${ApiEndPoint.ACCOUNT.RESIGN}`);
  }

}





