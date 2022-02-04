import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {Router} from '@angular/router';

import * as $ from 'jquery';
import {Utils} from '../../../shared/utils/utils';
import {MypageService} from "../../../service/mypage.service";
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})

@HostListener('window:scroll', ['$event'])
export class TopComponent implements OnInit {
  @ViewChild('dropdownToggle') dropdownToggle: ElementRef;
  @ViewChild('topDropdown') topDropdown: ElementRef;
  @ViewChild('btn_tnb') btn_tnb: ElementRef;

  @Input() home;
  scroll = false;
  login = false;
  newNotice = {};

  constructor(
      public router:Router,
      private mypageService: MypageService
  ) {
  }

  ngOnInit() {
    if(sessionStorage.getItem('accesstoken')){
      this.login = true;
      this.notice();
      setInterval(() => {
        this.notice();
      }, 60000);
    }
  }

  droupDown($event) {
    // 드랍다운
    $event.stopPropagation();
    var parent = $(this.dropdownToggle.nativeElement).parent(this.topDropdown.nativeElement);
    $(this.topDropdown.nativeElement).not(parent).removeClass("open");
    parent.toggleClass("open");
    $(".btn_tnb").toggleClass("on");
    window.onclick = function(e) {
      $(this.topDropdown).removeClass("open");
      parent.removeClass("open");
      $(".btn_tnb").removeClass("on");
    }
  }

  logout() {
    Utils.deleteAllCookies();
    sessionStorage.clear();
    location.href = '/';
  }

  selMenu(e){
    console.log(e);
  }

  onWindowScroll(e){
    this.scroll = window.pageYOffset > 100;
  }

  isActive(link): boolean {
    return this.router.isActive(link, true);
  }

  /**
   * 마이페이지 신규 알림확인
   */
  notice(){
    this.mypageService.getNotice().subscribe((res)=> {
      if (res){
        this.newNotice = res;
      }
    })
  }
}
