import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';
import {Data} from "@angular/router";

/* 머스타드 서비스추가 */
@Injectable({ providedIn: 'root' })
export class MustadService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getMustadTemplate(param): Observable<any> {
    return this.put(param,`${ApiEndPoint.MUSTAD.LIST(param.token)}`);
  }

  mustadFileSave(param): Observable<any> {
    return this.post(param,`${ApiEndPoint.MUSTAD.FILESAVE}`);
  }

  kakaoAuthToken(param): Observable<any> {
    return this.post(param,`${ApiEndPoint.MUSTAD.KAKAOAUTHTOKEN}`);
  }

  federatedToken(token): Observable<any> {
    return this.post({token: token},`${ApiEndPoint.MUSTAD.FEDERATEDTOKEN}`);
  }
}