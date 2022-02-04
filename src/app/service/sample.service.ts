import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* 샘플 서비스추가 */
@Injectable({ providedIn: 'root' })
export class SampleService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getSampleDetail(seq: any): Observable<any> {
    return this.get(`${ApiEndPoint.SAMPLE.READ(seq)}`);
  }

 getLoungeCode(): Observable<any> {
    return this.get(`${ApiEndPoint.SAMPLE.CODES}`);
  }

  add(form): Observable<any> {
    return this.post(form, `${ApiEndPoint.SAMPLE.CREATE}`);
  }

  deleteMenu(seq): Observable<any> {
    return this.delete(`${ApiEndPoint.SAMPLE.MENUDELETE(seq)}`);
  }

  modify(form): Observable<any> {
    return this.put(form, `${ApiEndPoint.SAMPLE.UPDATE(form.seq)}`);
  }

}





