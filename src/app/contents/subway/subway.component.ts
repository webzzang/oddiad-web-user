import {Component, OnInit} from '@angular/core';
import {PageType} from "../../domain/vo/page-type.enum";

@Component({
  selector: 'app-subway',
  templateUrl: './subway.component.html',
  styleUrls: ['./subway.component.scss']
})


export class SubwayComponent implements OnInit {
  pageType = PageType;
  pageViewType = PageType.VIEW;
  searchData = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * 화면 전환(list - form)
   * @param params
   */
  onChangeView(params: any) {
    this.pageViewType = params.pageType;

    if (this.pageViewType == this.pageType.FORM || this.pageViewType == this.pageType.PAYMENT) {
      if (params.searchData) {
        this.searchData = params.searchData
      }

    } else {
      this.searchData = null;
    }
  }

}
