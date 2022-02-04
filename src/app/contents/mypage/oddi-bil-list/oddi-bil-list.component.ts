import { Component, OnInit } from '@angular/core';
import {MypageService} from "../../../service/mypage.service";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import * as moment from "moment";

@Component({
  selector: 'app-odd-bil-list',
  templateUrl: './oddi-bil-list.component.html',
  styleUrls: ['./oddi-bil-list.component.scss']
})
export class OddiBilListComponent implements OnInit {

  constructor(private service: MypageService, private confirm: ConfirmService) { }

  billList:any = [];
  pageSize: any = 0;
  total: any = -1;

  ngOnInit(): void {
    this.getBillList()
  }

  getBillList(){
    if (this.total != 0 && this.pageSize != 0) {
      if (this.total < this.pageSize) {
        return;
      }
    }

    this.pageSize = this.pageSize + 10;

    let param = {
      orderBy:"regDate",
      pageNo: 1,
      pageSize: this.pageSize,
    }

    this.service.getMyPaymentList(param).subscribe(res => {
      if(res){
        this.billList = res.data;
        this.billList.forEach(r=>{
          r.regDate = moment(r.regDate).format("YYYY-MM-DD");
          r.advStartDate = moment(r.advStartDate).format("YYYY-MM-DD");
          r.advEndDate = moment(r.advEndDate).format("YYYY-MM-DD");
          if (r.applDate != null){
            r.applDate = moment(r.applDate,'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm')
          } else {
            r.applDate = "";
          }
        });

        this.total = res.total;
      }
    }, err => {
      console.log("# err -> ", err);
      if (err.body) {
        if (err.body.message) {
          this.confirm.alert(err.message);
        }
      }

    });  }

}
