import {Component, OnInit, ViewChild} from '@angular/core';
import {PageType} from "../../domain/vo/page-type.enum";
import {NoticeListComponent} from "./notice-list/notice-list.component";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  pageType = PageType;
  pageViewType = PageType.LIST;
  num = null;

  constructor() { }

  @ViewChild('noticeList') noticeList: NoticeListComponent;


  ngOnInit(): void {
  }

  /**
   * 화면 전환(list - form)
   * @param params
   */
  onChangeView(params: any) {
    this.pageViewType = params.pageType;
    if (this.pageViewType == this.pageType.FORM) {
      if (params.selectedData) {
        this.num = params.selectedData;
      }

    } else {
      this.num = null;
    }
    if (params.reload) {
      this.noticeList.getNoticeList();
    }
  }


}