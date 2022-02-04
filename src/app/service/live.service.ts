import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RestClient} from '../shared/http/rest-client';
import {Injectable} from '@angular/core';
import {ApiEndPoint} from "../domain/vo/api-end-point";

/* account 서비스추가 */
@Injectable({ providedIn: 'root' })
export class LiveService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  /**
   * 최신 vod 단건 조회
   */
  getRecentVod(): Observable<any> {
    return this.get(ApiEndPoint.LIVE.RECENT_VOD);
  }

  /**
   * 현재기준(서버시간) 라이브 스트리밍 단건 조회
   */
  getCurrentLiveStreaming(): Observable<any> {
    return this.get(ApiEndPoint.LIVE.CURRENT_LIVE);
  }

  /**
   * 라이브 스트리밍 다건 조회
   */
  getLiveStreamingList(): Observable<any> {
    return this.get(ApiEndPoint.LIVE.LIVE_LIST);
  }

  /**
   * vod 다건 조회
   */
  getVodList(params): Observable<any> {
    return this.get(ApiEndPoint.LIVE.VOD_LIST, params);
  }
}





