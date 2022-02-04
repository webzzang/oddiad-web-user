import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Utils} from "../../../shared/utils/utils";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import * as moment from "moment";
import {Zone} from "../../../domain/entity/zone";
import {Member} from "../../../domain/entity/member";
import {Partner} from "../../../domain/entity/oddi";
import {Code} from "../../../domain/entity/code";
import {Account} from "../../../domain/entity/account";
import {AvdService} from "../../../service/avd.service";
import {AccountService} from "../../../service/account.service";
import {TermsService} from "../../../service/terms.service";
import {FileService} from "../../../service/file.service";
import {TermFormComponent} from "../../account/term-form/term-form.component";
import {MustadLoginComponent} from "../../mustad/mustad-login/mustad-login.component";
import {Config} from "../../../domain/entity/config";
import {ImgPreviewPopComponent} from "../../zone/img-preview-pop/img-preview-pop.component";
import {OddiService} from "../../../service/oddi.service";
import {PageType} from "../../../domain/vo/page-type.enum";
import {GroupCodeService} from "../../../service/groupCode.service";
import {NgxSpinnerService} from "ngx-spinner";
import {GlobalConstants} from "../../../domain/vo/global-constants";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-subway-form',
  templateUrl: './subway-form.component.html',
  styleUrls: ['./subway-form.component.scss']
})

export class SubwayFormComponent implements OnInit,AfterViewInit {
  @Input() searchData = {};
  @Output() changeView = new EventEmitter();
  Constants = GlobalConstants;

  seqs = [];
  advSeq; // 광고키가 존재하면 상세조회 후 뿌려줌
  utils = Utils;
  vo: Zone = new Zone();
  memberInfo = new Member();
  pkList = [];
  partnerList: Partner[];
  codeList: Code[];
  config: Config;
  myInfo = new Account;
  advFileList = [];
  termsList = [];

  files = []; // 디자인파일들
  fileIndex = 0;
  file = null; // 사업자등록증파일
  bizFileInfo:any = {};
  fileList:Array<any> = [];
  newImgList = [];

  month;
  subwayAdvMaxStartDate;
  subwayAdvMaxDate;
  maxDate;
  designRequest:boolean = true;

  currDate = moment().format("YYYY-MM-DD");

  //법인사업자, 개인사업자 첫 선택 확인
  memberP:boolean = false; // 개인
  memberC:boolean = false; // 법인

  constructor(public dialog: MatDialog,
             private confirm: ConfirmService,
             private service: AvdService,
             private accountService: AccountService,
             private termsService: TermsService,
             private fileService: FileService,
             private oddiService: OddiService,
             private codeService: GroupCodeService,
             private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.seqs = this.searchData['seqs'];
    this.advSeq = this.searchData['advSeq'];
    this.init();
  }

  ngAfterViewInit(){
    scrollTo(0,0)
  }

  init() {
    this.getTermsList();
    if (this.advSeq != null) { // 이전광고보기 선택시
      this.getOddiDetail()
    } else {
      this.oddiCmmn();
      this.vo.code = "BCT003"; // 개인
    }

    this.getMyAccount();

  }

  // 월변경
  monthChange() {
    let endDate = moment(this.vo.startDate).add(+this.month, 'month').format("YYYY-MM-DD");
    this.vo.endDate = endDate;
    this.getPartnerSlot();
  }

  // 슬롯갯수 조회
  getPartnerSlot(){
    let params: any = {
      startDate : this.vo.startDate.replace(/-/g,""),
      endDate : this.vo.endDate.replace(/-/g,""),
      partnerSeqList: this.partnerList.map((partner) => { return partner.partnerSeq })
    };

    let query =  this.utils.makeQueryString(params);

    this.oddiService.getSubwayPartnerSlot(query).subscribe(res => {
      if (res) {

        let partnerSlotList = res.partnerSlotList;
        this.partnerList.forEach((par, index) => {
          partnerSlotList.forEach((slot, j) => {
            if (par.partnerSeq == slot.partnerSeq) {
              this.partnerList[index].slotArray = this.slotArrayFormat(slot.readySlot);
              this.partnerList[index].requestSlot = (Number(slot.readySlot) > 0) ? 1 : 0;
            }
          });
        });

        console.log(this.partnerList)
      }
    }, err => {
      console.log("# err -> ", err);
    });
  }

  slotArrayFormat(readySlot){
    readySlot = Number(readySlot) || 0;

    let array = [];

    let sIndex = (0 >= readySlot) ? 0 : 1;
    let eIndex = (0 >= readySlot) ? 0 : readySlot;

    for (sIndex; sIndex <= eIndex; sIndex++) {
      array.push(sIndex)
    }

    return array;
  }

  // 광고신청 상세내역 조회
  getOddiDetail(){

    this.oddiService.getOddiDetail(this.advSeq).subscribe(res => {
      if (res) {
        this.fileList = res.advFileList;
        this.partnerList = res.advPartnerList;
        this.getTypeConfig(res.partnerConfigList);

        this.vo.title = res.title;
        this.vo.designRequest = res.designRequest;
        this.vo.businessTypeCode = res.businessTypeCode;
        this.vo.code = res.memberGbn;
        this.memberInfo.companyName = res.memberGbnName;
        this.memberInfo.ceo = res.ceo;
        this.memberInfo.businessLicenseNumber = res.businessLicenseNumber;
      }
    }, err => {
      console.log("# err -> ", err);
    });
  }

  getTypeConfig(partnerConfigList){
    let startDate:any;

    partnerConfigList.forEach(c => {
      if (c.type == "PTT002"){
        this.config = c;
        // 광고 시작일은 익월 광고 마감일 전까지만 시작 가능, 해당일을 넘으면 익익월 1일부터 시작 가능
        let currDay = Number(moment().format("D"));

        // 익월 광고 마감일
        let subwayAdvLastDate = Number(this.config.subwayAdvLastDate);

        let startDate = "";
        if (currDay <= subwayAdvLastDate) {
          // 신청일의날짜가 익월 광고 마감일 안쪽일때
          startDate = moment().format("YYYY-MM-DD");
        } else {
          // 익월 광고 마감일을 넘겼을때 다음달 1일로
          startDate = moment(this.currDate).add(+1, 'month').startOf('month').format("YYYY-MM-DD");
        }


        this.vo.startDate = startDate;
        this.month = 1;
        this.monthChange();

        this.subwayAdvMaxDate = Number(this.config.subwayAdvMaxDate);

        // 최대 광고 시작일
        this.subwayAdvMaxStartDate = this.config.subwayAdvMaxStartDate;
        let maxStartDate = moment(this.currDate).add(+this.subwayAdvMaxStartDate, 'day').format("YYYY-MM-DD");
        this.maxDate = maxStartDate;
      }
    });


    // 공통코드 조회
    this.codeService.getGroupCodeList("BST").subscribe(res => {
      if (res) {
        this.codeList = res // 광고업종코드리스트
      }
    });

  }

  // 파트너 정보, 공통코드 조회
  oddiCmmn() {
    this.service.getSubwayOddiCmmn({seqs:this.seqs}).subscribe(res => {
      if (res) {
        this.partnerList = res.advList;
        this.codeList = res.advTypeCodeList;
        this.config = res.partnerConfig[0];
        this.vo.businessTypeCode = this.codeList[0].code;
        this.vo.designRequest = this.config.designRequest;
        this.designRequest = this.config.designRequest;

        // 광고 시작일은 익월 광고 마감일 전까지만 시작 가능, 해당일을 넘으면 익익월 1일부터 시작 가능
        let currDay = Number(moment().format("D"));

        // 익월 광고 마감일
        let subwayAdvLastDate = Number(this.config.subwayAdvLastDate);

        let startDate = "";
        if (currDay <= subwayAdvLastDate) {
          // 신청일의날짜가 익월 광고 마감일 안쪽일때
          startDate = moment().format("YYYY-MM-DD");
        } else {
          // 익월 광고 마감일을 넘겼을때 다음달 1일로
          startDate = moment(this.currDate).add(+1, 'month').startOf('month').format("YYYY-MM-DD");
        }


        this.vo.startDate = startDate;
        this.month = 1;
        this.monthChange();

        this.subwayAdvMaxDate = Number(this.config.subwayAdvMaxDate);

        // 최대 광고 시작일
        this.subwayAdvMaxStartDate = this.config.subwayAdvMaxStartDate;
        let maxStartDate = moment(this.currDate).add(+this.subwayAdvMaxStartDate, 'day').format("YYYY-MM-DD");
        this.maxDate = maxStartDate;

      }
    }, err => {
      console.log("# err -> ", err);
    });
  }


  // 로그인 유저 정보조회
  getMyAccount(){
    this.accountService.getMyAccount().subscribe(res => {
      if (res) {
        this.myInfo = res;
        this.memberInfo.memberId = this.myInfo.email;
        this.memberInfo.regName = this.myInfo.name;
      }
    }, err => {
      console.log("# err -> ", err);
    });

  }

  // 약관조회
  getTermsList(){
    // 광고약관조회
    this.termsService.getTermsList(1).subscribe(res => {
      if(res){
        this.termsList = res;
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

  // 약관팝업
  openTermFormDialog(seq) {
    const dialog = this.dialog.open(TermFormComponent, {
      position: {},
      disableClose: true,
      data: {
        seq: seq,
        status:1
      }
    });
    dialog.afterClosed().subscribe(results => {
      if (results) {
      }
    }, err => {
      console.log('errror', err);
    });

  }

  // 달력날짜변경
  selectDate(date){
    this.vo.startDate = date;
    this.monthChange();
  }

  memberChange(member) {
    if (this.advSeq == null) {
      if (member == 'P') {
        if (!this.memberP) {
          this.memberP = true;
          this.memberInfo.companyName = this.myInfo.pcompanyName;
          this.memberInfo.businessLicenseNumber = this.myInfo.pbusinessLicenseNumber;
          this.memberInfo.companyName = this.myInfo.pcompanyName;
          this.memberInfo.ceo = this.myInfo.pceo;
          this.memberInfo.businessLicenseFile = this.myInfo.pbusinessLicenseFileSeq;
          this.bizFileInfo = {
            fileSeq : this.myInfo.pbusinessLicenseFileSeq,
            originName : this.myInfo.pbusinessLicenseFileName,
            url : this.myInfo.pbusinessLicenseFilePath
          }
        }
      } else {
        if (!this.memberC) {
          this.memberC = true;
          this.memberInfo.companyName = this.myInfo.ccompanyName;
          this.memberInfo.businessLicenseNumber = this.myInfo.cbusinessLicenseNumber;
          this.memberInfo.companyName = this.myInfo.ccompanyName;
          this.memberInfo.ceo = this.myInfo.cceo;
          this.memberInfo.businessLicenseFile = this.myInfo.cbusinessLicenseFileSeq;
          this.bizFileInfo = {
            fileSeq : this.myInfo.cbusinessLicenseFileSeq,
            originName : this.myInfo.cbusinessLicenseFileName,
            url : this.myInfo.cbusinessLicenseFilePath
          }
        }
      }
    }
  }

  // 이미지 파일 추가
  fileChange(files: FileList, type) {
    if (type == "img"){
      let cnt = this.fileList.length + files.length;
      if (cnt > 6) {
        this.confirm.alert("이미지 파일은 최대 6개 까지만 등록 가능합니다.");
        return;
      }

      // 기존파일에 비디오가 존재하면 삭제
      this.fileList.forEach((file,index) => {
        if (file.type == "AFT002") {
          this.fileList = [];
        }
      });

      let popup = "";
      for (var i = 0; i < files.length; i++) {
        if ((i+1) == files.length) {popup = "last"}
        this.imgPreview(files[i],popup);
      }

    } else if (type == "video") {
      // 동영상 선택시 기존 파일 리스트 제거
      this.fileList = [];

      for (var i = 0; i < files.length; i++) {
        this.videoPreview(files[i]);
      }
    }
  }

  imgPreview(f,popup) {
    if (f.length === 0)
      return;

    var mimeType = f.type;
    if (mimeType.match(/image\/*/) == null) {
      this.confirm.alert("jpg, png 파일만 업로드 해주세요.");
      return;
    }

    // 파일용량 20mb 까지
    if (f.size > 20 * 1024 * 1024) {
      this.confirm.alert('20MB 이하의 파일만 업로드 가능합니다.');
      return;
    }

    let formData = new FormData();
    formData.append('file', f);

    this.spinnerService.show('main');
    this.fileService.uploadSingleImageFile(formData).subscribe((res) => {
      let img = {
        fileIndex: this.fileIndex
        , name: res.originName
        , uniqFileName: res.uniqFileName
        , fileSeq: res.fileSeq
        , path: res.url
        , type: "AFT001"
      };

      this.fileList.push(img);
      this.newImgList.push(img);

      this.spinnerService.hide('main');
      if (popup == "last") {
        setTimeout(() => {
          this.imgPreviewPop();
        },300);
      }
    }, err => {
      console.log("# err -> ", err);
      this.spinnerService.hide('main');
    });
  }

  imgPreviewPop(){
    const dialog = this.dialog.open(ImgPreviewPopComponent, {
      position: {},
      disableClose: true,
      data: {fileList:this.newImgList}
    });
    dialog.afterClosed().subscribe(results => {
      this.newImgList = [];
      if (results) {}
    }, err => {
      console.log('errror', err);
    });
  }

  videoPreview(f) {
    if (f.length === 0)
      return;

    var mimeType = f.type;
    if (mimeType.match(/video\/*/) == null) {
      this.confirm.alert("동영상 파일만 업로드 해주세요.");
      return;
    }

    // 파일용량 200mb 까지
    if (f.size > 200 * 1024 * 1024) {
      this.confirm.alert('200MB 이하의 파일만 업로드 가능합니다.');
      return;
    }

    let formData = new FormData();
    formData.append('file', f);
    this.spinnerService.show('main');
    this.fileService.uploadVideoFile(formData).subscribe((res) => {
      let video = {
        fileIndex: this.fileIndex
        , name: res.originName
        , uniqFileName: res.uniqFileName
        , fileSeq: res.fileSeq
        , path: 'assets/images/img-videothum.png' // 비디오 이미지 썸네일
        , type: "AFT002"
      };

      this.fileList.push(video);

      this.spinnerService.hide('main');
    }, err => {
      console.log("# err -> ", err);
      this.spinnerService.hide('main');
    });
  }

  /**
   * 파일 순번 이동
   *
   * @param event
   */
  dragFile(event: CdkDragDrop<string[]>) {
    let prevIndex: number = event.previousIndex;
    let currIndex: number = event.currentIndex;

    let dragItem: any = this.fileList[prevIndex];

    this.fileList.splice(prevIndex, 1);
    this.fileList.splice(currIndex, 0, dragItem);
  }

  // 파일삭제
  deleteFile(num, file) {
    const delidx = this.files.findIndex(function (item) {
      return item.fileIndex === file.fileIndex
    });
    if (delidx > -1) this.files.splice(delidx, 1);
    this.fileList.splice(num, 1);
  }

  /** 이미지 클릭시 팝업으로 이미지 보여줌
   * */
  imgClick(type,path){
    if (type != 'AFT002') {
      this.newImgList.push({'path':path});
      this.imgPreviewPop();
    }
  }

  //사업자등록증
  bizFileChange(files: FileList) {
    if (files.length === 0){
      return;
    }
    this.file = files[0];

    var mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.confirm.alert("jpg, png 파일만 업로드 해주세요.");
      return;
    }

    let formData = new FormData();
    formData.append('file', this.file);
    this.spinnerService.show('main');
    if (this.vo.code == "BCT002") {
      this.fileService.uploadPbizLicense(formData).subscribe((res) => {
        this.bizFileInfo = res;

        this.memberInfo.businessLicenseFile = res.fileSeq;
        this.spinnerService.hide('main');
      }, err => {
        console.log("# err -> ", err);
        this.spinnerService.hide('main');
      });
    } else if(this.vo.code == "BCT001"){
      this.fileService.uploadCbizLicense(formData).subscribe((res) => {
        this.bizFileInfo = res;
        this.memberInfo.businessLicenseFile = res.fileSeq;
        this.spinnerService.hide('main');
      }, err => {
        console.log("# err -> ", err);
        this.spinnerService.hide('main');
      });
    } else {}
  }

  // 사업자등록증파일삭제
  deleteBizFile() {
    this.bizFileInfo = {};
  }

  fileDownload(seq, name){
    let params = {
      "seq": seq,
      "fileName": name
    }
    this.spinnerService.show('main');
    this.fileService.fileDownload(params).subscribe(r=>{
      this.spinnerService.hide('main');
    }, err => {
      console.log("# err -> ", err);
      this.spinnerService.hide('main');
    });
  }

  openMustadPopDialog() {
    const dialog = this.dialog.open(MustadLoginComponent, {
      position: {},
      disableClose: true,
      data: {}
    });
    dialog.afterClosed().subscribe(results => {
      let cnt = this.fileList.length + results.template.length;
      if (cnt > 6) {
        this.confirm.alert("이미지 파일은 최대 6개 까지만 등록 가능합니다.");
      } else  {
        // 기존파일에 비디오가 존재하면 삭제
        this.fileList.forEach((file,index) => {
          if (file.type == "AFT002") {
            this.fileList = [];
          }
        });

        results.template.map(t => {
          console.log(t);
          this.fileList.push(t)
        });
      }
    }, err => {
      console.log('errror', err);
    });
  }

  // 심사신청
  save() {

    // 파트너의 슬롯갯수가 다 0인경우
    let slotCnt = 0;
    this.partnerList.forEach((p,index) => {
      slotCnt = slotCnt + Number(p.requestSlot);
    });
    if (slotCnt <= 0){
      this.confirm.alert("파트너의 슬롯갯수가 모두 0인 광고는 신청이 불가합니다.");
      return;
    }

    if (String(this.vo.designRequest) == "false") {
      // 파일 확인
      if (this.fileList.length == 0) {
        this.confirm.alert("디자인 파일을 등록 해주세요.");
        return;
      }
    }

    if (this.vo.code != "BCT003") {
      let businessLicenseNumber:any  = Utils.unmask(this.memberInfo.businessLicenseNumber,"businessNumber");
      // 사업자번호 확인
      if (businessLicenseNumber.length != 10){
        this.confirm.alert("사업자등록번호를 확인 해주세요.");
        return;
      }
    }

    this.confirm.confirm([
        "지하철 광고신청을 접수하시겠습니까?",
        "<br><br>",
        "(아이폰, 사파리브라우저는 사파리 설정에서 팝업 차단을 해제해 주셔야 신청 및 결제가 가능합니다.)"
    ].join('')).afterClosed().subscribe(result => {
      if (result == "Y") {

        // 사업자일떄만  memberInfo 포함
        if (this.vo.code != "BCT003") {
          this.memberInfo.corporation = (this.vo.code == "BCT001" ? true : false);
          this.vo.memberInfo = this.memberInfo;
        }

        this.partnerList.forEach((p,index) => {
          let param = {
            partnerSeq : p.partnerSeq,
            requestSlot : p.requestSlot
          }
          this.pkList.push(param)
        });

        this.fileList.forEach((file,index) => {
          let param = {
            fileSeq: file.fileSeq,
            type: file.type,
            viewOrder: index+1,
          }
          this.advFileList.push(param)
        });

        this.vo.partnerList = this.pkList;
        this.vo.advFileList = this.advFileList;

        let startDate = moment(this.vo.startDate).format("YYYYMMDD");
        let endDate = moment(this.vo.endDate).format("YYYYMMDD");

        this.vo.startDate = startDate;
        this.vo.endDate = endDate;

        this.vo.oddiAdvCancelDate = this.config.subwayAdvCancelDate;

        // 약관동의
        this.vo.termsSeq = [];
        this.termsList.forEach(term => {
          if (term.checked) {
            this.vo.termsSeq .push(term.seq);
          }
        });

        console.log("심사신청");
        console.log(this.vo);

        //저장
        this.service.subwaySave(this.vo).subscribe(res => {
          if (res) {
            this.saveAlert(res);
          }
        }, err => {
          console.log("# err -> ", err);
          this.pkList = [];
          this.advFileList = [];
          this.confirm.alertError();
        });
      }
    });
  }

  private saveAlert(advSeq) {
    let searchData = {
      adtType: "subway", advSeq: advSeq
    }

    this.changeView.emit({pageType: PageType.PAYMENT, searchData: searchData});
  }

}
