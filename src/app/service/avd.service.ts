import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* 광고신청 서비스추가 */
@Injectable({ providedIn: 'root' })
export class AvdService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getPartnerOddiCmmn(oddi): Observable<any> {
    return this.post(oddi,`${ApiEndPoint.ADV.PARTNERCMMN}`);
  }

  getProductPartnerOddiCmmn(oddi): Observable<any> {
    return this.post(oddi,`${ApiEndPoint.ADV.PRODUCTPARTNERCMMN}`);
  }

  getSubwayOddiCmmn(oddi): Observable<any> {
    return this.post(oddi,`${ApiEndPoint.ADV.SUBWAYCMMN}`);
  }


  oddiSave(oddi): Observable<any> {
    return this.post(oddi, `${ApiEndPoint.ADV.ODDIADD}`);
  }

  oddiModify(oddi): Observable<any> {
    return this.put(oddi, `${ApiEndPoint.ADV.ODDIUPDATE(oddi.advSeq)}`);
  }

  subwaySave(subway): Observable<any> {
      return this.post(subway,`${ApiEndPoint.ADV.SUBWAYADD}` );
  }
}





