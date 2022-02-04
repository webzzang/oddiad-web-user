import { Component } from '@angular/core';
import { NavigationService } from './shared/service/navigation.service';
import { TranslateService } from '@ngx-translate/core';
import { LocationStrategy } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import {Utils} from './shared/utils/utils';
import { Location } from '@angular/common';
//import { GoogleAnalyticsService } from "./shared/google/google-analytics.service";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: any;
  title = '오디';

  constructor(
      public translate: TranslateService
      , public navigationService: NavigationService
      , private _router: Router
      , private locationStrategy: LocationStrategy
      , private location: Location
      //, private googleAnalyticsService: GoogleAnalyticsService
  ) {

    this.navigationService.loadRouting();
    this.locationStrategy.onPopState(() => {
      this.navigationService.isBackClicked = true;
      return false;
    });

    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this._router.events.subscribe((evt) => {

      // 구글 아날리틱스 SPA 페이지 구분
      let newRoute = this.location.path() || '/';
      // 라우터가 변경될때 아날리틱스로 전송
      if (this.currentRoute != newRoute) {

        console.log("================================google analytics");
        console.log("this.currentRoute : "+this.currentRoute);
        console.log("newRoute : "+newRoute);

        // this.googleAnalyticsService.pageView(newRoute);
         this.currentRoute = newRoute;

        // if(evt instanceof NavigationEnd){
          gtag('config', 'G-4F85SS165D',
              {
                'pate_title' : newRoute
                , 'page_path': newRoute
                , 'send_page_view' : true
              }
          );

        gtag('event',newRoute,
            {
              'event_category' : newRoute
              , 'event_label' : newRoute
            }
            );
        // }

        console.log("================================google analytics");
      }

      if (evt instanceof NavigationEnd) {
        this._router.navigated = false;
        window.scrollTo(0, 0);
      }
    });

    this.navigationService.loadRouting();
    this.locationStrategy.onPopState(() => {
      this.navigationService.isBackClicked = true;
      return false;
    });
  }

  ngOnInit() {
    if(Utils.getCookie('id')){
      sessionStorage.setItem('id', Utils.getCookie('id'));
      sessionStorage.setItem('accesstoken', Utils.getCookie('accesstoken'));
      sessionStorage.setItem('refreshtoken', Utils.getCookie('refreshtoken'));
    }

  }
}
