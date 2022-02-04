import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';
import * as $ from "jquery";

/* account 서비스추가 */
@Injectable({ providedIn: 'root' })
export class OddiService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  oddiList(param:any): Observable<any> {
    return this.get( `${ApiEndPoint.ODDI.LIST}`, param);
  }

  oddiProductList(searchText:any): Observable<any> {
    return this.get( `${ApiEndPoint.ODDI.PRODUCTLIST}`, searchText);
  }

  getOddiDetail(advSeq:any): Observable<any> {
    return this.post(null,`${ApiEndPoint.ODDI.DETAIL(advSeq)}`);
  }

  getProductOddiDetail(productSeq:any): Observable<any> {
    return this.post(null,`${ApiEndPoint.ODDI.PRODUCTDETAIL(productSeq)}`);
  }

  oddiHistory(): Observable<any> {
    return this.get( `${ApiEndPoint.ODDI.HISTORY}`);
  }
/*
  getOddiPartnerSlot(query: any): Observable<any> {
    return this.get( `${ApiEndPoint.ODDI.ODDISLOT}?`+query);
  //  console.log(['/oddi/adv/partner/slot/', param.startDate,param.endDate,param.partnerSeqList].join('/'));
  //  return this.get(['/oddi/adv/partner/slot/', param.startDate,param.endDate,param.partnerSeqList].join('/'));
  }*/

  getOddiPartnerSlot(query: any): Observable<any> {
    return this.get( `${ApiEndPoint.ODDI.ODDISLOT}?`+query);
  }

  getSubwayPartnerSlot(query: any): Observable<any> {
    return this.get( `${ApiEndPoint.ODDI.SUBWAYSLOT}?`+query);
  }

  getRecentAdvVod(channelType:any): Observable<any> {
    return this.get( `${ApiEndPoint.ODDI.RECENTADVVOD(channelType)}`);
  }
}





