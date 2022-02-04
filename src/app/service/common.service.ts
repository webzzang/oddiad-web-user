import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestClient} from '../shared/http/rest-client';
import {Observable} from 'rxjs';
import {ApiEndPoint} from '../domain/vo/api-end-point';

@Injectable({
  providedIn: 'root'
})
export class CommonService  extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  deleteEditorImg(deleteUrl): Observable<any> {
    return this.delete(`${ApiEndPoint.COMMON.EDITOR_IMAGE_DELETE}`, { imageUrl: deleteUrl });
  }
}
