import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MypageService} from "../../../service/mypage.service";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {GroupCodeService} from "../../../service/groupCode.service";
import * as moment from "moment";

@Component({
  selector: 'app-oddi-list',
  templateUrl: './oddi-list.component.html',
  styleUrls: ['./oddi-list.component.scss']
})
export class OddiListComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private confirm: ConfirmService,
              private service: MypageService,
              private codeService: GroupCodeService) { }

  oddList:any = [];
  codeList = [];
  pageSize: any = 0;
  total: any = -1;
  auditCode: string = 'all';

  ngOnInit(): void {
    this.getPttCode();
    this.getMyOddiList()
  }

  getPttCode(){
    // 공통코드 조회
    this.codeList = [{code: "all", name:"전체", checked: true}];
    this.codeService.getGroupCodeList("ADT").subscribe(res => {
      if (res) {
        res.forEach(r=>{
          if (r.code == 'ADT001') {r.name = '승인 진행 중'}
          else if(r.code == 'ADT002') {r.name = '승인 완료'}
          else if(r.code == 'ADT003') {r.name = '승인 보류'}
          else {}
          this.codeList.push(r);
        })
      }
    });

    console.log(this.codeList)
  }

  codeClick($event) {
    this.auditCode = $event.target.id;
    this.codeList.forEach(r=>{
      if(r.code == this.auditCode){
        r.checked = true;
      }else{
        r.checked = false;
      }
    })

    this.pageSize = 0;
    this.total = 0;
    this.getMyOddiList();
  }

  getMyOddiList(){
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
      auditCode : (this.auditCode == 'all' ? '' : this.auditCode)
    }

    this.service.getMyOddiList(param).subscribe(res => {
      if (res) {
        this.oddList = [];
        this.total = res.total;
        let currDate = moment().format("YYYY-MM-DD");
        res.data.forEach(r=>{
          r.startDate = moment(r.startDate).format("YYYY-MM-DD");
          r.endDate = moment(r.endDate).format("YYYY-MM-DD");
          r.regDate = moment(r.regDate).format("YYYY-MM-DD");

          if (r.auditCode == 'ADT001') {
            r.auditName = '진행 중'
          }else if(r.auditCode == 'ADT002') {
            r.auditName = '승인';

            // 광고시작 날짜를 기준으로 확인
            if (currDate <  r.startDate ) {
              r.appStatue = '광고 대기'
            } else {
              if (moment(currDate).isBetween( r.startDate , r.endDate)) {
                r.appStatue = '광고 중'
              } else {
                r.appStatue = '광고 종료'
              }
            }
          }else  {r.auditName = '보류'}

          //취소
          if (r.progressCode == 'PGT004' || r.progressCode == 'PGT005') {r.auditName = '취소'} // 결제취소,신청취소시 취소
          
          this.oddList.push(r);

        })
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

  oddiInfoClick(oddi) {

    let type = '';
    if (oddi.channelType == 'PTT001' && oddi.productSeq == 0) {
      type = 'partner'
    } else if (oddi.channelType == 'PTT001' && oddi.productSeq != 0) {
      type = 'product'
    } else {
      type = 'subway'
    }

    this.router.navigate(['/mypage/oddi-form']
        ,{queryParams : {seq: oddi.advSeq , type: type } //product subway
          , skipLocationChange: true}
    );
  }

}
