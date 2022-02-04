import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, Directive, Input, QueryList, ViewChildren } from '@angular/core';
import * as $ from 'jquery';
import {MatDialog} from "@angular/material/dialog";
import {PartnershipFormComponent} from "./partnership-form/partnership-form.component";
import {ConfirmService} from "../../shared/component/confirm/confirm.service";
import {PartnershipService} from '../../service/partnership.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit, AfterViewInit {

  @ViewChild('partnerSlider1') partnerSlider1: ElementRef;
  @ViewChild('partnerSlider2') partnerSlider2: ElementRef;

  @ViewChildren("pane") panes!: QueryList<ElementRef>;

  PartnerList = [];

  constructor(public dialog: MatDialog,
              private confirm: ConfirmService,
              private partnershipService: PartnershipService
              ) {
  }

  ngOnInit(): void {
    this.getPartners();
  }

  ngAfterViewInit() {


  }

  initSlider(){
    setTimeout(r=>{
      this.panes.forEach((div:ElementRef) =>{
        $(div.nativeElement).slick({
          dots: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          swipe: true,
          draggable: true,
          touchMove: false,
          pauseOnHover: false,
          pauseOnDotsHover: false,
          pauseOnFocus: false,

          responsive: [ // 반응형 웹 구현 옵션
            {
              breakpoint: 1200, //화면 사이즈 1200px
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 992, //화면 사이즈 992px
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768, //화면 사이즈 768px
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 580, //화면 사이즈 576px
              settings: {
                slidesToShow: 3
              }
            },
          ]

        });
      })
    }, 100)
  }

  openPartnershipDialog() {
      const dialog = this.dialog.open(PartnershipFormComponent, {
        position: {},
        disableClose: true,
        data: {}
      });
      dialog.afterClosed().subscribe(results => {
        if (results) {
        }
      }, err => {
        console.log('errror', err);
      });
    }

    getPartners(){
      this.partnershipService.getPartners().subscribe((r => {
        this.PartnerList = r;
        this.initSlider();
      }));
    }

}
