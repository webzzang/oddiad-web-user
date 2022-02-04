import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {Utils} from "../../../shared/utils/utils";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import * as moment from 'moment';
import {MatDialog} from "@angular/material/dialog";
import {Zone} from "../../../domain/entity/zone";
import {Partner} from "../../../domain/entity/oddi";
import {Code} from "../../../domain/entity/code";
import {Member} from "../../../domain/entity/member";
import {AccountService} from "../../../service/account.service";
import {Account} from "../../../domain/entity/account";
import {AvdService} from "../../../service/avd.service";
import {TermsService} from "../../../service/terms.service";
import {TermFormComponent} from "../../account/term-form/term-form.component";
import {FileService} from "../../../service/file.service";
import {MustadLoginComponent} from "../../mustad/mustad-login/mustad-login.component";
import {Config} from "../../../domain/entity/config";
import {ImgPreviewPopComponent} from "../img-preview-pop/img-preview-pop.component";
import {PageType} from "../../../domain/vo/page-type.enum";
import {OddiService} from "../../../service/oddi.service";
import {GroupCodeService} from "../../../service/groupCode.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Observable} from "rxjs";
import {GlobalConstants} from "../../../domain/vo/global-constants";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import * as _ from 'lodash';

@Component({
  selector: 'app-zone-form',
  templateUrl: './zone-form.component.html',
  styleUrls: ['./zone-form.component.scss']
})

export class ZoneFormComponent implements OnInit ,AfterViewInit{
  @Input() searchData = {};
  @Output() changeView = new EventEmitter();
  Constants = GlobalConstants;
  tabType;
  seqs = [];  // 상품 또는 묶음상품 키
  advSeq; // 광고키가 존재하면 상세조회 후 뿌려줌 (상품인 경우엔 광고신청키, 묶음상품인 경우엔 묶음상품키)
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
  oddiAdvMaxDate:any;
  maxDate;
  minDate;
  designRequest:boolean = true;

  //묶음상품 키, 이름, 슬롯금액
  productSeq;
  productName;
  productPrice;

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
              private spinnerService: NgxSpinnerService,
  ) {}

  ngOnInit(): void {

    this.tabType = this.searchData['tabType'];
    this.seqs = this.searchData['seqs'];
    this.advSeq = this.searchData['advSeq'];
    this.init();
  }

  ngAfterViewInit(){
    scrollTo(0,0)
  }

  init(){
    this.getTermsList();

    if (this.advSeq != null) { // 결제화면에서 뒤로 넘어왔거나, 이전광고보기 선택시
      this.getOddiDetail()
    } else { // 오디존 신청에서 넘어옴
      this.oddiCmmn();
      this.vo.code = "BCT003"; // 개인
      this.vo.designRequest = true;
    }

    this.getMyAccount();
  }

  // 광고신청 상세내역 조회
  getOddiDetail(){
    if (this.tabType == 1) { // 개별

      this.oddiService.getOddiDetail(this.advSeq).subscribe(res => {
        if (res) {
          this.fileList = res.advFileList;
          this.partnerList = res.advPartnerList;
          this.getTypeConfig(res.partnerConfigList);

          this.vo.title = res.title;
          this.vo.designRequest = res.designRequest;
          this.vo.businessTypeCode = res.businessTypeCode;
          this.vo.etcBusinessName = res.etcBusinessName;
          this.vo.code = res.memberGbn;
          this.memberInfo.companyName = res.memberGbnName;
          this.memberInfo.ceo = res.ceo;
          this.memberInfo.businessLicenseNumber = res.businessLicenseNumber;

          this.memberInfo.businessLicenseFile = res.fileSeq;
        }
      }, err => {
        console.log("# err -> ", err);
      });

    } else {

      this.oddiService.getProductOddiDetail(this.advSeq).subscribe(res => {
        if (res) {
          this.fileList = res.advFileList;
          this.partnerList = res.advPartnerList;
          this.getTypeConfig(res.partnerConfigList);

          this.vo.businessTypeCode = res.businessTypeCode;
          this.vo.etcBusinessName = res.etcBusinessName;
          this.vo.title = res.title;
          this.vo.designRequest = res.designRequest;
          this.vo.code = res.memberGbn;
          this.memberInfo.companyName = res.memberGbnName;
          this.memberInfo.ceo = res.ceo;
          this.memberInfo.businessLicenseNumber = res.businessLicenseNumber;

          this.memberInfo.businessLicenseFile = res.fileSeq;

          this.productSeq = res.productSeq;
          this.productName = res.productName;
          this.productPrice = res.price;
        }
      }, err => {
        console.log("# err -> ", err);
      });
    }

  }

  getTypeConfig(partnerConfigList){
    let startDate:any;

    let currDate = moment().format("YYYY-MM-DD");
    partnerConfigList.forEach(c => {
      if (c.type == "PTT001"){
        let startDate = moment(currDate).add(+c.oddiAdvFromStartDate, 'day').format("YYYY-MM-DD");
        let maxDate = moment(currDate).add(+c.oddiAdvToStartDate, 'day').format("YYYY-MM-DD");
        this.vo.startDate = startDate;
        this.minDate = startDate;
        this.maxDate = maxDate;
        this.month = 1;
        this.monthChange();

        this.vo.designRequest = c.designRequest;
        this.designRequest = c.designRequest;
        this.oddiAdvMaxDate = Number(c.oddiAdvMaxDate);

        this.config = c;
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

    let ob: Observable<any>;
    if (this.tabType == 1){
      ob = this.service.getPartnerOddiCmmn({seqs:this.seqs})
    } else {
      ob = this.service.getProductPartnerOddiCmmn({seqs:this.seqs})
    }

    ob.subscribe((res) => {
      if (res) {
        this.partnerList = res.advList;
        this.codeList = res.advTypeCodeList;
        this.config = res.partnerConfig[0];
        this.vo.businessTypeCode = this.codeList[0].code;

        let currDate = moment().format("YYYY-MM-DD");
        let startDate = moment(currDate).add(+this.config.oddiAdvFromStartDate, 'day').format("YYYY-MM-DD");
        let maxDate = moment(currDate).add(+this.config.oddiAdvToStartDate, 'day').format("YYYY-MM-DD");
        this.vo.startDate = startDate;
        this.minDate = startDate;
        this.maxDate = maxDate;
        this.month = 1;
        this.monthChange();

        if (this.tabType == 2){
          this.productSeq = this.partnerList[0].productSeq;
          this.productName = this.partnerList[0].productName;
          this.productPrice = this.partnerList[0].slotPrice;
        }

        this.vo.designRequest = this.config.designRequest;
        this.designRequest = this.config.designRequest;
        this.oddiAdvMaxDate = Number(this.config.oddiAdvMaxDate);
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
        this.memberInfo.email = this.myInfo.email;
        this.memberInfo.regName = this.myInfo.name;
        this.memberInfo.phoneNumber = this.myInfo.phoneNumber;
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

    this.oddiService.getOddiPartnerSlot(query).subscribe(res => {
      if (res) {

        let partnerSlotList = res.partnerSlotList;
        this.partnerList.forEach((par, index) => {
          partnerSlotList.forEach((slot, j) => {
            if (par.partnerSeq == slot.partnerSeq) {
              if (this.tabType == 1) {
                this.partnerList[index].slotArray = this.slotArrayFormat(slot.readySlot);
                this.partnerList[index].requestSlot = (Number(slot.readySlot) > 0) ? 1 : 0;
              } else {
                this.partnerList[index].requestSlot = (Number(slot.readySlot) > 0) ? 1 : 0;
              }
              console.log('this.tabType', this.tabType);
              console.log('slot.readySlot', slot.readySlot);
              console.log('this.partnerList[index].slotArray', this.partnerList[index].slotArray);
            }
          });
        });
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


  fileChange(files: FileList, type) {
    if (type == "img"){
      let cnt = this.fileList.length + files.length;
      if (cnt > 3) {
        this.confirm.alert("이미지 파일은 최대 3개 까지만 등록 가능합니다.");
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
        if (i == files.length-1) {popup = "last"}
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
      if (res) {
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
      }
    }, err => {
      console.log("# err -> ", err);
      this.confirm.alert("파일업로드에 실패했습니다.")

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

    if (this.vo.code == "BCT002") {
      this.spinnerService.show('main');
      this.fileService.uploadPbizLicense(formData).subscribe((res) => {
        this.bizFileInfo = res;
        this.memberInfo.businessLicenseFile = res.fileSeq;
        this.spinnerService.hide('main');

      }, err => {
        console.log("# err -> ", err);
        this.spinnerService.hide('main');
      });

    } else if(this.vo.code == "BCT001"){
      this.spinnerService.show('main');
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
      let cnt = this.fileList.length + (results.template?.length || 0);
      if (cnt > 3) {
        this.confirm.alert("이미지 파일은 최대 3개 까지만 등록 가능합니다.");
      } else  {
        // 기존파일에 비디오가 존재하면 삭제
        _.some(this.fileList, (file,index) => {
          if (file.type == "AFT002") {
            this.fileList = [];

            return false;
          }
        });

        if (results.template) {
          results.template.map(t => {
            this.fileList.push(t)
          });
        }
      }
    }, err => {
      console.log('errror', err);
    });
  }

  // 심사신청
  save() {

    let slotCnt = 0;
    this.partnerList.forEach((p,index) => {
      slotCnt = slotCnt + Number(p.requestSlot);
    });

    if (this.tabType == 2){
      // 오디존 묶음 상품 - 슬롯갯수가 모두 1이어야 신청가능
      if (slotCnt != this.partnerList.length){
        this.confirm.alert("묶음 광고의 슬롯 갯수는 모두 1이어야 광고신청이 가능합니다.");
        return;
      }
    } else {
      // 오디존 - 슬롯갯수가 모두 0인 광고는 신청 불가능
      if (slotCnt <= 0){
        this.confirm.alert("파트너의 슬롯갯수가 모두 0인 광고는 신청이 불가합니다.");
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
        "오디존 광고신청을 접수하시겠습니까?",
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
            partnerSeq: p.partnerSeq,
            requestSlot: p.requestSlot
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

        this.vo.productSeq = this.productSeq;
        this.vo.oddiAdvCancelDate = this.config.oddiAdvCancelDate;

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
        this.service.oddiSave(this.vo).subscribe(res => {
          if (res) {
            console.log(res)
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

    let advType = this.tabType == 1 ? "partner" : "product";
    let searchData = {
      advType: advType, advSeq: advSeq
    }

    this.changeView.emit({pageType: PageType.PAYMENT, searchData: searchData});
  }
}