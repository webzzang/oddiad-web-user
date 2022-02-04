import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OddiService} from "../../../service/oddi.service";
import * as moment from "moment";
import {PageType} from "../../../domain/vo/page-type.enum";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import * as _ from "lodash";

@Component({
  selector: 'app-history-pop',
  templateUrl: './history-pop.component.html',
  styleUrls: ['./history-pop.component.scss']
})
export class HistoryPopComponent implements OnInit {

  @Output() changeView = new EventEmitter();
  channelType = "";
  list:any = [];
  advSeq = "";
  info = {};

  constructor(private dialogRef: MatDialogRef<HistoryPopComponent>
            ,@Inject(MAT_DIALOG_DATA) private data: any
            ,private service: OddiService
            ,private confirm: ConfirmService
  ) {
    if (_.isEmpty(data['channelType']) === false) {
      this.channelType = data['channelType'];
    } else {
      this.channelType = 'PTT001';
    }
  }



  ngOnInit(): void {
    this.getOddiHistory();
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

  getOddiHistory(){
    this.service.oddiHistory().subscribe(res => {
      if (res) {
        this.list = res;
        this.list.forEach(r=>{
          r.regDate = moment(r.regDate).format("YYYY-MM-DD");
          r.startDate = moment(r.startDate).format("YYYY-MM-DD");
          r.endDate = moment(r.endDate).format("YYYY-MM-DD");
        })

      }
    }, err => {
      console.log("# err -> ", err);
    });[]
  }

  //광고가져오기
  oddiClick() {

    console.log(this.info["advSeq"] ==  undefined);
    if (this.info["advSeq"] ==  undefined){
      this.confirm.alert("이전광고를 선택해주세요.");
      return;
    }

    let searchData = {
      info: this.info
    };

    this.dialogRef.close(searchData);
  }

}
