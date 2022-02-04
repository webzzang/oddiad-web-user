import { Component, OnInit } from '@angular/core';
import * as homeData from '../../../assets/data/homeData.json'
//import {Utils} from '../../shared/utils/utils'
import {StringFormatPipe} from "../../shared/pipe/string-format.pipe";
import { GoogleAnalyticsService } from "../../shared/google/google-analytics.service";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  title = '123456781910';
  partners = homeData.data;
  constructor(
      //private util: Utils
      private googleAnalyticsService: GoogleAnalyticsService
  ) { }
q
  ngOnInit(): void {
    console.log("=============sample googleAnalyticsService============");
    this.googleAnalyticsService.pageEvent('검색', '검색요청', '검색완료');
    console.log("=============sample googleAnalyticsService============");
  }
  submit(){
    console.log("=============submit googleAnalyticsService============");
    this.googleAnalyticsService.pageEvent('검색', '검색요청', '검색완료');
    console.log("=============submit googleAnalyticsService============");
  }

}
