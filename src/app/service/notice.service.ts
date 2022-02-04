import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* 공지사항 서비스추가 */
@Injectable({ providedIn: 'root' })
export class NoticeService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getNoticeList(param:any): Observable<any> {
      return this.get(`${ApiEndPoint.NOTICE.LIST}`, param);
  }

  getNoticeDetail(num:any): Observable<any> {
    return this.get(`${ApiEndPoint.NOTICE.DETAIL(num)}` );
  }
}





