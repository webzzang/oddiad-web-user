import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  login(param: any): Observable<any> {
      return this.post(param, `${ApiEndPoint.AUTH.LOGIN}`); // login
  }

  password(param:any): Observable<any> {
    return this.post(param, `${ApiEndPoint.AUTH.PASSWORD}`);
  }
}





