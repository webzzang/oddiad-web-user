import { Injectable } from '@angular/core';

declare var ga: Function; // 구글 아날릭티스 메소드

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() {
  }

  /**
   * 구글 아날리틱스에서 사용중 페이지 설정
   * @param url 사용 중인 페이지
   */
  pageView(url: string) {

    console.log("google analytics send!!!!!!!!!!!!!!!!");

    ga('send', 'pageview', url);
  }

  /**
   * 구글 아날리틱스에서 이벤트 설정
   * 참고 URL http://analyticsmarketing.co.kr/digital-analytics/google-analytics/537/
   * @param category 이벤트 유형을 나타내는 기본단위, ex)모바일전화연결
   * @param action 이벤트 카테고리에 대한 설명, ex)버튼클릭
   * @param label 추가 세분화 용도로 사용, ex)오피스
   */
  pageEvent(category: string, action: string, label: string){
    ga('send', 'event', category, action, label);
  }
}