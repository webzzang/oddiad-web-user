import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* 파트너십 서비스추가 */
@Injectable({ providedIn: 'root' })
export class InquireService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }



  getList(param:any): Observable<any> {
    return this.get(`${ApiEndPoint.INQUIRE.LIST}`, param);
  }

  getCodes(): Observable<any> {
      return this.get(`${ApiEndPoint.INQUIRE.CODES}`);
  }

  addNoMember(param): Observable<any> {
    return this.post(param,`${ApiEndPoint.INQUIRE.ADDNOMEMEBER}`);
  }

  addMember(param): Observable<any> {
    return this.post(param,`${ApiEndPoint.INQUIRE.ADDMEMEBER}`);
  }

  modifyForMember(param): Observable<any> {
    return this.put(param,`${ApiEndPoint.INQUIRE.MODIFY(param.seq)}`);
  }

  getDetailMember(seq): Observable<any> {
    return this.get(`${ApiEndPoint.INQUIRE.DETAIL(seq)}`);
  }

  getDetailNoMember(seq:any): Observable<any> {
    return this.get(`${ApiEndPoint.INQUIRE.DETAILNOMEMBER(seq)}`);
  }

}





