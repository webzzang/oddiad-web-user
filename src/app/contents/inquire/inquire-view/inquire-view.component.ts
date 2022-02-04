import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router, ActivatedRoute} from '@angular/router';
import {ConfirmService} from '../../../shared/component/confirm/confirm.service';
import {InquireService} from '../../../service/inquire.service';
import {Inquire} from '../../../domain/entity/Inquire';
import {FileService} from '../../../service/file.service';

@Component({
  selector: 'app-inquire-view',
  templateUrl: './inquire-view.component.html',
  styleUrls: ['./inquire-view.component.scss']
})

export class InquireViewComponent implements OnInit {
  paramData;
  seq;
  seq_noAuth;
  vo: Inquire = new Inquire();
  isLogin
  constructor(
      private confirm: ConfirmService,
      private router: Router,
      private activateRoute:ActivatedRoute,
      private inquireService: InquireService,
      private fileService: FileService,
  ) {
    this.paramData =this.router.getCurrentNavigation().extras.state;

  }


  ngOnInit(): void {
    this.activateRoute.params.subscribe(r=>{
      this.seq_noAuth = r.seq;
    });



    if (sessionStorage.getItem('accesstoken')) {
      this.isLogin = true;
    }

    if(this.paramData){
      this.seq = this.paramData.seq;
      this.getDetail();
    }else if(this.seq_noAuth){
      this.getDetailNoMember();
    }else{
      this.confirm.alert('잘못된 접근입니다..').afterClosed().subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  getDetail(){
    this.inquireService.getDetailMember(this.seq).subscribe(r=>{
      this.vo = r;
    })
  }

  getDetailNoMember(){
    console.log(this.seq_noAuth);
    this.inquireService.getDetailNoMember(this.seq_noAuth).subscribe(r=>{
      this.vo = r;
    },err =>{
      this.confirm.alert('잘못된 접근입니다..').afterClosed().subscribe(() => {
        this.router.navigate(['/']);
      });
    })
  }

  fileDownload(seq, name){
    let params = {
      "seq": seq,
      "fileName": name
    }
    this.fileService.contractFileDownload(params).subscribe(r=>{
      console.log(r);
    });
  }

  modify(){
      const navigationExtras: NavigationExtras = {
        state: {
          seq: this.seq
        }
      }

      this.router.navigate(['/mypage/inquire-form'], navigationExtras );
  }
}
