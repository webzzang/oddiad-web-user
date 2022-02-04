import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import * as $ from "jquery";
import {FaqService} from "../../service/faq.service";
import {Faq} from "../../domain/entity/faq";
import {ConfirmService} from "../../shared/component/confirm/confirm.service";
import {ActivatedRoute} from "@angular/router";
import {Code} from "../../domain/entity/code";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @ViewChild('faqAccordion') faqAccordion: ElementRef;
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

  constructor(
      private router: ActivatedRoute,
      private faqService: FaqService,
      private confirm: ConfirmService
  ) { }

  categoryCode:String = 'all';
  codeList: Code[];
  faqList: Faq[];
  faqLen:number = 0;

  ngOnInit(): void {
    this.router.queryParams
    .subscribe(params => {
      if (params.categoryCode != undefined)
      this.categoryCode = params.categoryCode;
    });
    this.getFaqTypeList();
    this.getFaqList();
  }

  ngAfterViewInit() {
  }

  getFaqTypeList(){
    this.faqService.getFaqTypeCode().subscribe(res => {
      if(res){
        this.codeList = res;
        this.checkToggle();
      }
    }, err => {
      console.log("# err -> ", err);
      if (err.body) {
        if (err.body.message) {

        }
      }
    });
  }

  getFaqList() {
    this.faqService.getFaqList({categoryCode:this.categoryCode}).subscribe(res => {
      if(res){
        this.faqList = res;

        if (this.faqLen != 0) {
          $(this.faqAccordion.nativeElement).accordion( "destroy" );
        }

        this.faqLen = this.faqList.length;

        if (this.faqLen != 0) {
          setTimeout(() => {
            $(this.faqAccordion.nativeElement).accordion({
              collapsible: true,
              heightStyle: "content"
            });
          }, 100);
        }
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

  tabClick($event){
    this.categoryCode = $event.target.id;
    this.checkToggle();
    this.getFaqList();
  }

  checkToggle() {
    this.checkboxes.forEach((element) => {
      if (element.nativeElement.id == this.categoryCode) {
        element.nativeElement.checked = true;

      } else {
        element.nativeElement.checked = false;
      }
    });
  }
  
  // faq 조회수 업데이트
  faqClick(seq) {
    this.faqService.updateClickCount(seq).subscribe(res => {
      if(res){
      }
    }, err => {
      console.log("# err -> ", err);
      if (err.body) {
        if (err.body.message) {
        }
      }
    });
  }
}
