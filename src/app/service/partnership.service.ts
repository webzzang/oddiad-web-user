import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* 파트너십 서비스추가 */
@Injectable({ providedIn: 'root' })
export class PartnershipService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getCodes(): Observable<any> {
      return this.get(`${ApiEndPoint.PARTNERSHIP.CODES}`);
  }

  getPartners(): Observable<any> {
    return this.get(`${ApiEndPoint.PARTNERSHIP.PARTNERS}`);
  }

  getName(): Observable<any> {
    return this.get(`${ApiEndPoint.PARTNERSHIP.GETNAME}`);
  }
  add(param): Observable<any> {
    return this.post(param,`${ApiEndPoint.PARTNERSHIP.ADD}`);
  }
}





