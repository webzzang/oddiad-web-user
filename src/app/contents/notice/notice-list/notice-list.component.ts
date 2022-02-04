import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {NoticeService} from "../../../service/notice.service";
import {NoticeList} from "../../../domain/entity/notice";
import {PageType} from "../../../domain/vo/page-type.enum";

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {
  @Output() changeView = new EventEmitter();
  paramData;
  noticeList: NoticeList = new NoticeList();
  pageSize: any = 0;

  constructor(private router: Router,
              private confirm: ConfirmService,
              private noticeService: NoticeService) {
    this.paramData =this.router.getCurrentNavigation().extras.state;
  }


  ngOnInit(): void {
    if(this.paramData) {
      let num = this.paramData.num;
      this.detailNotice(num);
    } {
      this.getNoticeList();
    }
  }

  getNoticeList() {
    if (this.noticeList.total == this.pageSize) {
      return false;
    }

    this.pageSize = this.pageSize + 10;

    let param = {
      pageNo: 1,
      pageSize: this.pageSize
    }
    this.noticeService.getNoticeList(param).subscribe(res => {
      if (res) {
        this.noticeList.data = res.data;
        this.noticeList.pageNum = res.pageNum;
        this.noticeList.pages = res.pages;
        this.noticeList.total = res.total;
      }
    }, err => {
      console.log("# err -> ", err);
      if (err.body) {
        if (err.body.message) {
          this.confirm.alert(err.body.message);
        }
      }
    });
  }

  detailNotice(num) {
    this.changeView.emit({ pageType: PageType.FORM, selectedData: num } );
  }
}