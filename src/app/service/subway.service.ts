import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* 지하철 서비스추가 */
@Injectable({ providedIn: 'root' })
export class SubwayService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getSubwayList(): Observable<any> {
      return this.get(`${ApiEndPoint.SUBWAY.SUBWAYLIST}`);
  }

  getPartnerList(param:any): Observable<any> {
    return this.get(`${ApiEndPoint.SUBWAY.PARTNERLIST}`, param);
  }

}





