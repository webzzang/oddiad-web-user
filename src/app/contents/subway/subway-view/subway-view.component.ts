import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import * as $ from "jquery";
import {PageType} from "../../../domain/vo/page-type.enum";
import {SubwayService} from '../../../service/subway.service';
import {SubwayList} from '../../../domain/entity/subwayList';
import {SubwayPartners} from '../../../domain/entity/subway';
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {HistoryPopComponent} from "../../zone/history-pop/history-pop.component";
import {MatDialog} from "@angular/material/dialog";
import {OddiService} from "../../../service/oddi.service";
import {Router} from "@angular/router";
import {ImgPopComponent} from "../../zone/img-pop/img-pop.component";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-subway-view',
  templateUrl: './subway-view.component.html',
  styleUrls: ['./subway-view.component.scss']
})
export class SubwayViewComponent implements OnInit, AfterViewInit {

  @ViewChild('videoDiv') videoDiv: ElementRef;
  @ViewChild('subwaySlider') subwaySlider: ElementRef;
  @Output() changeView = new EventEmitter();
  subwayLineList = [];
  subwayNameList: Array<SubwayList>;
  subwayPartnerList: Array<SubwayPartners>
  chkAll = false;
  login = false;
  seqs = [];
  curYoutubeVodUrl;
  videoHeight: number = 0;

  constructor(
    private subwayService: SubwayService,
    private service: OddiService,
    public dialog: MatDialog,
    private confirm: ConfirmService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('accesstoken')) {
      this.login = true;
    }

    this.getSubwayList();
    this.getPartnerList('all', 0);
    this.getRecentAdvVod();
  }

  ngAfterViewInit() {
    console.log(this.videoDiv.nativeElement.offsetWidth);
    this.videoHeight = (this.videoDiv.nativeElement.offsetWidth / 16 * 9);
  }

  getSubwayList(){
    this.subwayLineList = [{code: "all", name:"전체", checked: true}, {code: "transfer", name: "환승", checked: false}];
    this.subwayService.getSubwayList().subscribe(r=>{
      this.subwayNameList = r.subwayNameList;

      this.subwayNameList.forEach(r=>{
        r.subwayCodeList = r.subwayCode.split(',');
      })
      r.subwayLineList.forEach(res=>{
        this.subwayLineList.push(res);
      })

      setTimeout(r=>{
        this.setSlickSlider();
      }, 500)

    })
  }

  getPartnerList(type, value){
    let param;
    if(type == 'line'){
      param = {subwayCode: value}
    }else if(type == 'name'){
      param = {subwayName: value};
    }
    this.subwayService.getPartnerList(param).subscribe(r=>{
      this.subwayPartnerList = r;
      this.subwayPartnerList.forEach((p, index) => {
        // 파트너 시간 format
        let startTime = (p.operationStartTime == null) ? '0000' : p.operationStartTime;
        let endTime   = (p.operationEndTime == null) ? '2359' : p.operationEndTime;

        //am, pm 설정
        let shh = startTime.substr(0, 2);
        shh = (Number(shh) < 13)?  `AM ${shh}` : `PM ${shh}`;

        let ehh = endTime.substr(0, 2);
        ehh = (Number(ehh) < 13)?  `AM ${ehh}` : `PM ${ehh}`;

        this.subwayPartnerList[index].operationStartTime = shh+':'+startTime.substr(2, 2);
        this.subwayPartnerList[index].operationEndTime = ehh+':'+startTime.substr(2, 2);
      });
    })
  }

  setSlickSlider(){
    $(this.subwaySlider.nativeElement).slick({
      dots: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      swipe: true,
      draggable: true,
      touchMove: false,
      pauseOnHover: true,
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
  }

  openHistoryPopDialog() {
    const dialog = this.dialog.open(HistoryPopComponent, {
      position: {},
      disableClose: true,
      data: {
        channelType : 'PTT002'
      }
    });
    dialog.afterClosed().subscribe(results => {
      if (results) {
        console.log(results.info.advSeq)

        let searchData = {
          seqs:null, advSeq : results.info.advSeq
        }

        this.changeView.emit({pageType: PageType.FORM, searchData: searchData});

      }
    }, err => {
      console.log('errror', err);
    });
  }

  // 이미지 팝업
  imgClick(gubun:string,seq:number){

    let fileList = [];
    let type = '';
    let title = '';
    if (gubun == 'img') { // 이미지 모달
      type = 'mult';
      title = '매장';
      this.subwayPartnerList.forEach((subway, index) => {
        if (seq == subway.seq) {
          fileList = subway.subwayImageList
        }
      });

    } else { // 도면모달
      type = 'single';
      title = '도면';
      this.subwayPartnerList.forEach((subway, index) => {
        if (seq == subway.seq) {
          console.log(subway)
          fileList.push(subway.subwayLineList[0]);
        }
      });
    }

    const dialog = this.dialog.open(ImgPopComponent, {
      position: {},
      disableClose: true,
      data: {
        fileList : fileList
        ,type:type
        ,title:title
      }
    });
    dialog.afterClosed().subscribe(results => {
      if (results) {
      }
    }, err => {
      console.log('errror', err);
    });
  }


  openSubwayForm(){
    if (!this.login) {
      this.confirm.confirm("로그인시 광고신청하기 진행 가능합니다.").afterClosed().subscribe(result => {
        if (result == "Y") {
          this.router.navigate(['/login']);
        }
      });

    } else {
      this.subwayPartnerList.forEach((subway,index) => {
        if (subway.checked){
          this.seqs.push(subway.seq)
        }
      });

      if (this.seqs.length <= 0) {
        this.confirm.alert("지하철을 선택해주세요.");
        return;
      }



      let searchData = {
        seqs:this.seqs
        , advSeq: null
      }
      this.curYoutubeVodUrl = "";
      this.changeView.emit({ pageType: PageType.FORM ,searchData:searchData});
    }
  }

  selectSubwaySlider(name, index){
    $(this.subwaySlider.nativeElement).slick('slickPause');
    this.subwayNameList.filter(value => value.checked = false);
    this.subwayNameList[index].checked = true;
    this.getPartnerList('name', name);
    this.chkAll = false;
  }

  startSlider(){
    this.subwayNameList.filter(value => value.checked = false);
    $(this.subwaySlider.nativeElement).slick('slickPlay');
  }

  selectSubwayLine(code){
    this.startSlider();
    this.chkAll = false;
    this.subwayLineList.forEach(r=>{
      if(r.code == code){
        r.checked = true;
      }else{
        r.checked = false;
      }
    })

    if(code != 'all'){
      this.getPartnerList('line', code);
    }else{
      this.getPartnerList('all',0)
    }
  }

  checkAll(e){
    if(e.target.checked){
      this.subwayPartnerList.filter(value => value.checked = true);
    }else{
      this.subwayPartnerList.filter(value => value.checked = false);
    }
  }


  // 광고사례 가장최신 1건 VOD조회
  getRecentAdvVod(){
    this.service.getRecentAdvVod("PTT002").subscribe(res => {
      if (res) {
        this.curYoutubeVodUrl = this.youtubeVodUrl(res.youtubePlayId);
      }
    }, err => {
      console.log("# err -> ", err);
    });
    //vod
  }

  selectSubwayPartner(e,seq){
    this.subwayPartnerList.forEach((subway, index) => {
      if ( e.target.checked && seq == subway.seq){
        this.playVod(subway.youtube);
      }
    });
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

  /**
   * 유튜브 vod url 생성
   *
   * @param youtubePlayId
   */
  playVod(youtube):void {
    if (youtube != null && youtube.youtubePlayId != null) {
      this.curYoutubeVodUrl = this.youtubeVodUrl(youtube.youtubePlayId);
    }
  }

}
