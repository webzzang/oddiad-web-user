import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LiveService} from "../../service/live.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit, AfterViewInit {

  @ViewChild('videoDiv') videoDiv: ElementRef;

  pageSize: any = 0;
  total: any = -1;
  hasLive : boolean;
  playMode: string = '';
  currentVod: any = {};
  vodList: Array<any> = [];
  currentLive: any = {};
  liveList: Array<any> = [];

  tab: any = {};

  vodListOrderName: string;
  videoHeight: number = 0;

  constructor(private liveService: LiveService) {
    this.vodListOrderName = 'isNewOrder';

    this.changeTab('');

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

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.videoHeight = (this.videoDiv.nativeElement.offsetWidth / 16 * 9);
  }

  /**
   * 플레이 방식 변경 (실시간 <-> 일반)
   *
   * @param mode (live | normal)
   */
  changePlayMode(mode: string, youtubePlayId?: string): void {

    scrollTo(0,0);

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
   * 조회조건 탭 변경
   *
   * @param type
   */
  changeTab(type: string): void {
    this.tab.channelType = type;
    this.pageSize = 0;
    this.total = -1;
    this.getVodList();
  }

  /**
   * vod 리스트 조회
   *
   * @param type
   */
  getVodList(): void {

    if (this.total != 0 && this.pageSize != 0) {
      if (this.total < this.pageSize) {
        return;
      }
    }

    this.pageSize = this.pageSize + 12;

    let params: any = {
      channelType: this.tab.channelType,
      pageNo: 1,
      pageSize: this.pageSize
    };

    params[this.vodListOrderName] = true;
    this.liveService.getVodList(params).subscribe((res) => {
      console.log(res)
      this.vodList = res.data;
      this.total = res.total;
    });
  }

  /**
   * 정렬순서 변경
   */
  changeOrder(): void {
    this.changeTab(this.tab.channelType);
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
     // return 'https://www.youtube.com/embed/${youtubePlayId}?autoplay=1&mute=1&loop=1&playlist=${youtubePlayId}'.replace(/\$\{youtubePlayId\}/g, youtubePlayId);
      return [environment.youtubePlayUrl ,youtubePlayId ,environment.youtubePlayOption].join('/')+youtubePlayId;
    } else {
      return "";
    }
  }
}
