import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter
} from '@angular/core';


import * as $ from 'jquery';
import {MatDialog} from "@angular/material/dialog";
import {HistoryPopComponent} from "../history-pop/history-pop.component";
import {PageType} from "../../../domain/vo/page-type.enum";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {OddiService} from "../../../service/oddi.service";
import {ImgPopComponent} from "../img-pop/img-pop.component";
import {Router} from "@angular/router";
import {ImgPreviewPopComponent} from "../img-preview-pop/img-preview-pop.component";
import {environment} from "../../../../environments/environment";
import {MustadLoginComponent} from "../../mustad/mustad-login/mustad-login.component";
declare var kakao;

@Component({
  selector: 'app-zone-view',
  templateUrl: './zone-view.component.html',
  styleUrls: ['./zone-view.component.scss']
})

export class ZoneViewComponent implements OnInit, AfterViewInit {

  @ViewChild('videoDiv') videoDiv: ElementRef;
  @ViewChild('map') mapEl: ElementRef;
  @Output() changeView = new EventEmitter();
  bounds = new kakao.maps.LatLngBounds();

  login = false;
  tab = 1;
  map: any;
  searchText: any;
  seqs = [];
  partners = [];
  productPartners = [];
  productSeq; // 묶음상품 seq
  partnerSeq; // 상품 seq
  markers = [];
  cnt;
  curYoutubeVodUrl;
  partnersLength:number = 0;
  productLength:number = 0;
  mapbounds:boolean = false;
  videoHeight: number = 0;

  constructor(private myElement: ElementRef,
              public dialog: MatDialog,
              private confirm: ConfirmService,
              private service: OddiService,
              private router: Router

  ) {
  }


  imgPreviewPop(){
    const dialog = this.dialog.open(ImgPreviewPopComponent, {
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

  ngOnInit(): void {
    if (sessionStorage.getItem('accesstoken')) {
      this.login = true;
    }
    this.productSeq = 0;
    this.partnerSeq = 0;
    this.cnt = 0;
    this.searchText = "";
    // 매장조회
    this.getOddiList();

    setTimeout(() => {
      // 광고사례 가장최신 1건 VOD조회
      this.getRecentAdvVod();
    }, 300);

    setTimeout(() => {
      const options = {
        center: new kakao.maps.LatLng(37.4850725318802, 126.878884450061),
        level: 5
      };

      //지도생성
      this.map = new kakao.maps.Map(document.getElementById('map'), options);
      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      this.mapbounds = true;
      this.addPlaces();
    }, 1000);
  }

  ngAfterViewInit() {
    this.videoHeight = (this.videoDiv.nativeElement.offsetWidth / 16 * 9);
  }

  addPlaces() {

    if (this.tab == 1) {
      this.cnt = 0;
      this.partners.forEach((place, index) => {
        let imgPath = '../assets/images/marker-off.png';
        if (place.checked) {
          imgPath = '../assets/images/marker-on.png';
          ++this.cnt;
        }

        const image = new kakao.maps.MarkerImage(
            imgPath,
            new kakao.maps.Size(35, 43),
            {offset: new kakao.maps.Point(40 ,80)}
        );

        const marker = new kakao.maps.Marker({
          clickable: true,// 클릭가능
          position: new kakao.maps.LatLng(place.latitude, place.longitude), //위치
          image
        });

        marker.setMap(this.map);

        this.markers.push(marker);

        kakao.maps.event.addListener(marker, 'click', () => { // 클릭이벤트

          if (place.checked == undefined ||  place.checked == false) {
            place.checked = true;
            var id = "tab1_" + place.seq;
            let el = document.getElementById(id);
            let el2 = this.myElement.nativeElement.ownerDocument.getElementById(id);
            $('.zone-item-list').animate({
              scrollTop: el.offsetHeight * index
            });

            this.playVod(place.youtube);
          } else {

            place.checked = false;
          }

          this.addPlaces();
        });

        if (this.mapbounds){
          this.bounds.extend(new kakao.maps.LatLng(place.latitude, place.longitude));
          if (index == this.partners.length - 1) {
            this.setBounds();
            this.mapbounds = false
          }
        }

      });
    } else {
      this.bounds = new kakao.maps.LatLngBounds();
      this.productPartners.forEach((product, index) => {
        if (product.productSeq == this.productSeq) {
          let imgPath = '../assets/images/marker-off.png';
          if (product.checked) {
            imgPath = '../assets/images/marker-on.png';
          }

          product.partnerList.forEach((partner, index) => {
            const image = new kakao.maps.MarkerImage(
                imgPath,
                new kakao.maps.Size(30, 38),
                {offset: new kakao.maps.Point(27, 69)}
            );

            const marker = new kakao.maps.Marker({
              clickable: true,
              position: new kakao.maps.LatLng(partner.latitude, partner.longitude),
              image
            });

            marker.setMap(this.map);

            this.markers.push(marker);

            kakao.maps.event.addListener(marker, 'click', () => {
              product.checked = true;
              var id = "tab2_" + product.productSeq;
              let el = document.getElementById(id);
              let el2 = this.myElement.nativeElement.ownerDocument.getElementById(id);
              $('.zone-item-list').animate({
                scrollTop: el.offsetHeight * index
              });

              this.playVod(product.youtube);
              this.addPlaces();
            });

            this.bounds.extend(new kakao.maps.LatLng(partner.latitude, partner.longitude));
            if (index == this.partners.length - 1) {
              this.setBounds();
            }
          })
        }
      });
    }
  }

  setBounds() {
    this.map.setBounds(this.bounds, 90, 30, 10, 30);
  }

  // 광고사례 가장최신 1건 VOD조회
  getRecentAdvVod(){
    this.service.getRecentAdvVod("PTT001").subscribe(res => {
      if (res) {
        this.curYoutubeVodUrl = this.youtubeVodUrl(res.youtubePlayId);
      }
    }, err => {
      console.log("# err -> ", err);
    });
    //vod
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

  tagClick(tab, type) {
    if (type=="tag") {
      this.tab = tab;
      this.searchText = "";
    } else {
      tab = this.tab;
    }

    this.productSeq = 0;

    this.productPartners.forEach(r => {
      r.checked = false;
    })

    this.partners.forEach(r => {
      r.checked = false;
    })

    if (tab == 1) {
      this.getOddiList();
    } else {
      this.getOddiProductList();
    }

    setTimeout(() => {
      // 마커제거
      this.setMarker(null);
      this.addPlaces();
    }, 500);
  }

  productChange() {
    this.addPlaces();
    this.productPartners.forEach((product, index) => {
      if (this.productSeq == product.productSeq) {
        product.checked = true;
        this.playVod(product.youtube);
      } else {
        product.checked = false;

      }
    });
  }

  // 마커셋팅
  setMarker(marker) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(marker);
    }
  }

  isChecked($event, seq: String) {
    this.partners.forEach((place, index) => {
      if (seq == place.seq) {
        place.checked = $event.target.checked;
        if (place.checked == true){
          this.playVod(place.youtube);
          var moveLatLon = new kakao.maps.LatLng(place.latitude, place.longitude); //위치
          // 지도 중심을 이동 시킵니다
          this.map.setCenter(moveLatLon);
        }
      }
    });

    this.addPlaces();
  }

  /**
   * 상품조회
   *
   */

  getOddiList() {
    this.service.oddiList({searchText: this.searchText}).subscribe(res => {
      if (res) {
        this.partners = res;
        this.partnersLength = this.partners.length;
        this.partners.forEach((p, index) => {
          // 파트너 시간 format
          let startTime = (p.operationStartTime == null) ? '0000' : p.operationStartTime;
          let endTime   = (p.operationEndTime == null) ? '2359' : p.operationEndTime;

          //am, pm 설정
          let shh = startTime.substr(0, 2);
          shh = (Number(shh) < 13)?  `AM ${shh}` : `PM ${shh}`;

          let ehh = endTime.substr(0, 2);
          ehh = (Number(ehh) < 13)?  `AM ${ehh}` : `PM ${ehh}`;

          this.partners[index].operationStartTime = shh+':'+startTime.substr(2, 2);
          this.partners[index].operationEndTime = ehh+':'+startTime.substr(2, 2);
        });

      }
    }, err => {
      console.log("# err -> ", err);
    });

  }


  /**
   * 묶음상품조회
   *
   */
  getOddiProductList() {
    this.cnt = 0;
    this.service.oddiProductList({searchText: this.searchText}).subscribe(res => {
      if (res) {
        this.productPartners = res;
        this.productLength = this.productPartners.length;
        console.log(this.productPartners)
        this.productPartners.forEach((product, index) => {

          if (this.productSeq == 0) {
            if (index == 0) {
              this.productSeq = product.productSeq;
              this.partnerSeq = product.partnerList[0].partnerSeq;
              product.checked = true;
              this.cnt = 1;
              this.playVod(product)
            }
          }

          if (product.productSeq == this.productSeq) {
            this.partners = product.partnerList;
          }
        });

      }
    }, err => {
      console.log("# err -> ", err);
    });

  }

  isCheckedProduct($event: any, seq: String) {
    this.cnt = 0;
    this.productPartners.forEach((product, index) => {
      if (seq == product.productSeq) {
        product.checked = $event.target.checked;
      }

      if (product.checked) {++this.cnt}
    });

    this.addPlaces();
  }


  // 상품 이미지 팝업
  imgClick(type:string, seq:string){

    var fileList = [];
    if (type == 'product') {
      this.productPartners.forEach((product, index) => {
        if (this.productSeq == product.productSeq) {
          fileList = product.fileList;
        }
      });
    } else {
      this.partners.forEach((partner, index) => {
        if (seq == partner.seq) {
          fileList = partner.fileList;
        }
      });
    }

    const dialog = this.dialog.open(ImgPopComponent, {
      position: {},
      disableClose: true,
      data: {
        fileList : fileList
        ,title:"매장"
      }
    });
    dialog.afterClosed().subscribe(results => {
      if (results) {
      }
    }, err => {
      console.log('errror', err);
    });
  }

  openHistoryPopDialog() {
    const dialog = this.dialog.open(HistoryPopComponent, {
      position: {},
      disableClose: true,
      data: {
        channelType : 'PTT001'
      }
    });
    dialog.afterClosed().subscribe(results => {
      if (results) {

        let searchData = {
          tabType: (results.info.productSeq != 0 ? 2 : 1)
          , seqs: null
          , advSeq: results.info.advSeq
        }

       this.changeView.emit({pageType: PageType.FORM, searchData: searchData});

      }
    }, err => {
      console.log('errror', err);
    });
  }

  openZoneForm() {

    if (!this.login) {
      this.confirm.confirm("로그인시 광고신청하기 진행 가능합니다.").afterClosed().subscribe(result => {
        if (result == "Y") {
          this.router.navigate(['/login']);
        }
      });
    } else {
      //tab == 1 광고신청
      //tab == 2 묶음광고신청

      if (this.tab == 1) {
        this.partners.forEach((partner, index) => {
          if (partner.checked) {
            this.seqs.push(partner.seq)
          }
        });
      } else {
        this.productPartners.forEach((product, index) => {
          if (product.checked) {
            this.seqs.push(product.productSeq)
          }
        });
      }

      if (this.seqs.length <= 0) {
        this.confirm.alert("파트너를 선택해주세요.");
        return;
      }

      let searchData = {
        tabType: this.tab
        , seqs: this.seqs
        , advSeq: null
      }

      this.curYoutubeVodUrl = "";
      this.changeView.emit({pageType: PageType.FORM, searchData: searchData});
    }
  }







}
