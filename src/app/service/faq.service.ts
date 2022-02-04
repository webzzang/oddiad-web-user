import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* qna 서비스추가 */
@Injectable({ providedIn: 'root' })
export class FaqService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getFaqList(param:any): Observable<any> {
      return this.get(`${ApiEndPoint.FAQ.LIST}`, param);
  }

  getFaqTypeCode(): Observable<any> {
    return this.get(`${ApiEndPoint.FAQ.TYPE}`, null);
  }

  updateClickCount(seq:any): Observable<any> {
    return this.get(`${ApiEndPoint.FAQ.UPDATE(seq)}` );
  }
}





