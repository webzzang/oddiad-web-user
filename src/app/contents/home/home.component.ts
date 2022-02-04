import {Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {Home, HomePartners, HomeSlider} from '../../domain/entity/home';
import {SampleService} from '../../service/sample.service'
import {LiveService} from "../../service/live.service";


import * as homeData from '../../../assets/data/homeData.json'
import * as $ from 'jquery';
import 'jqueryui'
import 'slick-carousel';
import {FaqService} from "../../service/faq.service";
import {NoticeService} from "../../service/notice.service";
import {MainService} from "../../service/main.service";
import {ConfirmService} from "../../shared/component/confirm/confirm.service";
import {NoticeList} from "../../domain/entity/notice";
import {Faq} from "../../domain/entity/faq";
import {PageType} from "../../domain/vo/page-type.enum";
import {root} from "rxjs/internal-compatibility";
import {NavigationExtras, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('keyVisual') keyVisual: ElementRef;
  @ViewChild('partnerSlider') partnerSlider: ElementRef;
  @ViewChild('faqAccordion') faqAccordion: ElementRef;
  @ViewChild('videoDiv') videoDiv: ElementRef;

  totalSlideNo = 3;
  vo: HomePartners = new HomePartners();
  partners: Array<HomePartners> = [];
  sliders: HomeSlider[];
  partnerCnt: number = 0;
  faqList: Faq[];
  noticeList: NoticeList = new NoticeList();
  vodListOrderName: string;
  liveList: Array<any> = [];
  currentLive: any = {};
  hasLive : boolean;
  currentVod: any = {};
  playMode: string = '';
  faqLength:number = 0;
  videoHeight: number = 0;

  constructor(
      private confirm: ConfirmService,
      private service: SampleService,
      private faqService: FaqService,
      private noticeService: NoticeService,
      private mainService: MainService,
      private router: Router,
      private liveService: LiveService

  ) { }
  ngOnInit(): void {
    this.getFaqList();
    this.getNoticeList();
    this.getSliderAndPartner();
    //this.partners = homeData.data;

      this.liveService.getLiveStreamingList().subscribe((res) => {
          this.liveList = res;
      });

      this.liveService.getCurrentLiveStreaming().subscribe((res) => {
          this.currentLive = res.liveStreamResult;

          if (this.hasLive = res.liveScheduleResult) {
              this.currentLive.youtubeLiveUrl = this.youtubeLiveUrl(this.currentLive.liveStreamChannelId);
              this.changePlayMode('live');
          } else {
              this.changePlayMode('normal');
          }
      });

      setInterval(() => {
          this.liveService.getCurrentLiveStreaming().subscribe((res) => {
              this.currentLive = res.liveStreamResult;

              if (this.hasLive = res.liveScheduleResult) {
                  this.currentLive.youtubeLiveUrl = this.youtubeLiveUrl(this.currentLive.liveStreamChannelId);
              }
          });
      }, 60000);
  }

  ngAfterViewInit() {
    this.videoHeight = (this.videoDiv.nativeElement.offsetWidth / 16 * 9);
  }

  initMainSlider(){
      $(this.keyVisual.nativeElement).slick({
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          swipe: true,
          fade: true,

          draggable: true,
          touchMove: false,
          pauseOnHover: false,
          pauseOnDotsHover: false,
          pauseOnFocus: false,
      });
  }
  initPartnerSlider(){
      $(this.partnerSlider.nativeElement).slick({
          dots: false,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          swipe:true,
          swipeToSlide: true,
          draggable: true,

          touchMove: true,
          touchThreshold: 6, // 터치영역지정 5~10
          pauseOnHover:true,
          pauseOnFocus:true,
          centerMode: true,
          centerPadding: '0px',
          responsive: [ // 반응형 웹 구현 옵션
            {
              breakpoint: 1600, //화면 사이즈 1600px
              settings: { slidesToShow:6 }
            },
            {
              breakpoint: 1400, //화면 사이즈 1200px
              settings: { slidesToShow:5 }
            },
            {
              breakpoint: 992, //화면 사이즈 992px
              settings: { slidesToShow:4, centerMode: true, centerPadding: '60px' }
            },
            {
              breakpoint: 768, //화면 사이즈 768px
              settings: { slidesToShow:3, centerMode: true, centerPadding: '70px' }
            },
            {
              breakpoint: 650, //화면 사이즈 650px
              settings: { slidesToShow:3, centerMode: true, centerPadding: '50px' }
            },
            {
              breakpoint: 550, //화면 사이즈 550px
              settings: { slidesToShow:2, centerMode: true, centerPadding: '70px' }
            },
            {
              breakpoint: 420, //화면 사이즈 576px
              settings: { slidesToShow:1, centerMode: true, centerPadding: '90px' }
            },
          ]
      });
  }

  slideStart(){
    $(this.keyVisual.nativeElement).slick('slickPlay');
  }
  slidePause(){
    $(this.keyVisual.nativeElement).slick('slickPause');
  }


  getFaqList(){

    this.faqService.getFaqList({categoryCode:'top7'}).subscribe(res => {
        if(res){
          this.faqList = res;
          this.faqLength = this.faqList.length;

          setTimeout(() => {
            $(this.faqAccordion.nativeElement).accordion({
              collapsible: true,
              heightStyle: "content"
            });
          }, 200);

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

  getNoticeList(){
    let params = {
        pageNo:1,
        pageSize:3,
    };

    this.noticeService.getNoticeList(params).subscribe(res => {
        if(res){
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

  noticeDetail(num) {
    const navigationExtras: NavigationExtras = {
      state: {
        num: num
      }
    }

    this.router.navigate(['/notice/list'], navigationExtras );
  }

  getSliderAndPartner(){
      this.mainService.getMainList().subscribe(res=>{
          this.sliders = res.sliders;
          this.partners = res.partners;
          this.partnerCnt = res.partnerCnt;

          setTimeout(r=>{
              this.initPartnerSlider();
              this.initMainSlider();
          }, 100)

      })
  }

    changePlayMode(mode: string, youtubePlayId?: string): void {
        this.playMode = mode;

        switch (mode) {
            case 'live':
                break;
            case 'normal' :
                if (youtubePlayId) {
                    this.currentVod = {
                        youtubeVodUrl: this.youtubeVodUrl(youtubePlayId)
                    };
                } else {
                    this.liveService.getRecentVod().subscribe((res) => {
                        this.currentVod = res;
                        this.currentVod.youtubeVodUrl = this.youtubeVodUrl(this.currentVod.youtubePlayId);
                    });
                }

                break;
        }
    }

    /**
     * 유튜브 라이브 스트리밍 url 생성
     *
     * @param channelId
     */
    youtubeLiveUrl(channelId: string): string {
      if (channelId != undefined) {
        //return 'https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1&mute=1'.replace('${channelId}', channelId);
        return `${environment.youtubePlayUrl}/live_stream?channel=?${channelId}&autoplay=1&mute=1`;
      } else {
        return "";
      }
    }

    /**
     * 유튜브 vod url 생성
     *
     * @param youtubePlayId
     */
    youtubeVodUrl(youtubePlayId: string): string {
      if (youtubePlayId != undefined) {
        //return 'https://www.youtube.com/embed/${youtubePlayId}?autoplay=1&mute=1&loop=1&playlist=${youtubePlayId}'.replace(/\$\{youtubePlayId\}/g, youtubePlayId);
        return [environment.youtubePlayUrl ,youtubePlayId ,environment.youtubePlayOption].join('/')+youtubePlayId;
      } else {
        return "";
      }
    }

}
