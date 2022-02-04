import { Component, OnInit } from '@angular/core';
import {ConfirmService} from '../../../shared/component/confirm/confirm.service';
import {InquireService} from '../../../service/inquire.service';
import {FormBuilder} from '@angular/forms';
import {FileService} from '../../../service/file.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router, NavigationExtras} from '@angular/router';
import {Inquire} from '../../../domain/entity/Inquire';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-inquire-list',
  templateUrl: './inquire-list.component.html',
  styleUrls: ['./inquire-list.component.scss']
})
export class InquireListComponent implements OnInit {

  dataList : Inquire[];
  currentPage = 1;
  pageNo = 1;
  pages;
  pageTotal = 0;


  constructor(
      private confirm: ConfirmService,
      private inquireService: InquireService,
      private fb: FormBuilder,
      private fileService: FileService,
      private spinner: NgxSpinnerService,
      private router: Router,
  ) { }



  ngOnInit(): void {
    this.getInquireList();
  }

  getInquireList() {
    let i = 0;
    if(this.dataList){
      i = this.dataList.length;
    }
    let param = {
      pageNo: 0,
      pageSize: i + 10
    }
    this.inquireService.getList(param).subscribe(r => {
      this.pageTotal = r.total;
      this.dataList = r.data;
      this.pages = r.pages;
    });
  }
 detail(seq){
   const navigationExtras: NavigationExtras = {
     state: {
       seq: seq
     }
   }

   this.router.navigate(['/mypage/inquire-view'], navigationExtras );
 }


}
