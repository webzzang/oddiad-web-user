import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NoticeService} from "../../../service/notice.service";
import {NoticeInfo} from "../../../domain/entity/notice";

@Component({
  selector: 'app-notice-form',
  templateUrl: './notice-form.component.html',
  styleUrls: ['./notice-form.component.scss']
})
export class NoticeFormComponent implements OnInit {
  @Input() num;

  info: NoticeInfo = new NoticeInfo();

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private noticeService: NoticeService) {
  }

  ngOnInit(): void {
    this.getNoticeDetail(this.num);
  }

  getNoticeDetail(num) {
    this.num = num;

    if (num) {
      this.noticeService.getNoticeDetail(num).subscribe(res => {
        if (res) {
          this.info = res;
          var contents = res.contents.replace(/\n/g,"<br>");
          this.info.contents = contents;
        }
      }, err => {
        console.log("# err -> ", err);
        if (err.body) {
          if (err.body.message) {
          }
        }
      });

    } else {
      //목록으로 되돌아가기
      this.router.navigateByUrl(`notice/list`);
    }
  }
}
