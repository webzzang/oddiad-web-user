import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* 그룹코드 서비스추가 */
@Injectable({ providedIn: 'root' })
export class GroupCodeService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getCodeList(): Observable<any> {
    return this.get(`${ApiEndPoint.GROUPCODE.LIST}`);
  }

  getGroupCodeList(groupCode:any): Observable<any> {
    return this.get(`${ApiEndPoint.GROUPCODE.GROUPLIST(groupCode)}`);
  }
  
}





