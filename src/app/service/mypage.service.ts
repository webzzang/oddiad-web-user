import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* 마이페이지 서비스추가 */
@Injectable({ providedIn: 'root' })
export class MypageService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getMyOddiList(my): Observable<any> {
    return this.post(my,`${ApiEndPoint.MYPAGE.ODDIlIST}`);
  }

  getMyPaymentList(param:any): Observable<any> {
    return this.post(param,`${ApiEndPoint.MYPAGE.PAYMENT}`);
  }

  getNotice(): Observable<any> {
    return this.get(`${ApiEndPoint.MYPAGE.NOTICE}`);
  }

}





