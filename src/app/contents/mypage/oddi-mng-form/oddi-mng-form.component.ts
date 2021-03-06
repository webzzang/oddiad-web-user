import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OddiService} from "../../../service/oddi.service";
import {OddiInfo, Partner} from "../../../domain/entity/oddi";
import * as moment from "moment";
import {AccountService} from "../../../service/account.service";
import {Member} from "../../../domain/entity/member";
import {Account} from "../../../domain/entity/account";
import {NgxSpinnerService} from "ngx-spinner";
import {ImgPreviewPopComponent} from "../../zone/img-preview-pop/img-preview-pop.component";
import {MustadLoginComponent} from "../../mustad/mustad-login/mustad-login.component";
import {Code} from "../../../domain/entity/code";
import {Config} from "../../../domain/entity/config";
import {Zone} from "../../../domain/entity/zone";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {MatDialog} from "@angular/material/dialog";
import {FileService} from "../../../service/file.service";
import {GroupCodeService} from "../../../service/groupCode.service";
import {Utils} from "../../../shared/utils/utils";
import {AvdService} from "../../../service/avd.service";
import {PaymentService} from "../../../service/payment.service";
import {Observable} from "rxjs";
import {GlobalConstants} from "../../../domain/vo/global-constants";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-odd-mng-form',
  templateUrl: './oddi-mng-form.component.html',
  styleUrls: ['./oddi-mng-form.component.scss']
})
export class OddiMngFormComponent implements OnInit {

  @Output() changeView = new EventEmitter();

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private service: OddiService,
              private accountService: AccountService,
              private spinnerService: NgxSpinnerService,
              private confirm: ConfirmService,
              private fileService: FileService,
              private paymentService: PaymentService,
              private codeService: GroupCodeService,
              private avdService: AvdService,

  ) { }

  Constants = GlobalConstants;

  zone: Zone = new Zone();
  vo: OddiInfo = new OddiInfo();

  partnerList: Partner[];
  myInfo = new Account;
  advFileList = [];
  codeList: Code[];
  config: Config;
  configList: Config[];
  memberInfo = new Member();
  utils = Utils;
  pkList = [];

  files = []; // ??????????????????
  fileIndex = 0;
  file = null; // ????????????????????????
  bizFileInfo:any = {};
  fileList:any = [];
  newImgList = [];
  mustadImg:boolean=false;
  cencalChk;

  /** ???????????? ?????? param
   * ????????? , ?????? ?????? : true
   * ????????????-?????????-contents
   * ????????????-???????????????-member
   * ????????????-??????-false
   * **/
  isDisabled: any;

  /** ???????????? ??????
   * ????????? : subway
   * ????????? : partner
   * ???????????? : product
   * **/
  type;
  seq; // ?????? seq

  title;
  month;
  designRequest;
  cancelDay:any; // ?????????
  cancelDay_chk:any; // ?????????????????? ?????????
  memberGben; // ?????? ???????????????

  ngOnInit(): void {
    this.cencalChk = true;

    this.activeRoute.queryParams.subscribe((queryParams) => {
      this.seq = queryParams['seq']; // get the values of your queryParams
      this.type = queryParams['type'];
    });

    if (this.type == 'product') {
      this.title = '????????? ??????'
    } else if (this.type == 'partner') {
      this.title = '????????? ??????'
    } else {
      this.title = '?????????'
    }

    this.getOddiDetail();
    this.getMyAccount();
  }

  getOddiDetail(){

    let ob: Observable<any>;
    if (this.type == "product"){
      ob = this.service.getProductOddiDetail(this.seq)
    } else {
      ob = this.service.getOddiDetail(this.seq)
    }

    ob.subscribe((res) => {
      if (res) {
        this.vo = res;
        this.partnerList = res.advPartnerList;
        this.configList = res.partnerConfigList;
        this.memberGben = res.memberGben;
        this.fileList = res.advFileList;

        console.log(this.fileList)

        this.bizFileInfo = {
          fileSeq : res.fileSeq,
          originName : res.fileName,
          url : res.path,
        };

        let startDate = moment(this.vo.startDate).format("YYYY-MM-DD");
        let endDate = moment(this.vo.endDate).format("YYYY-MM-DD");

        this.vo.startDate = startDate;
        this.vo.endDate = endDate;

        let diff =  moment(this.vo.endDate).diff(moment(this.vo.startDate), 'months');
        this.month = diff;

        //???????????????????????? ??????
        let cancelDay = moment(startDate).subtract(this.vo.oddiAdvCancelDate,'days').format("MM??? DD???");
        let cancelDay_chk = moment(startDate).subtract(this.vo.oddiAdvCancelDate,'days').format("YYYY-MM-DD");
        this.cancelDay = cancelDay;
        this.cancelDay_chk = cancelDay_chk;

        this.getTypeConfig();

        this.isDisabled = true;
        if (res.rejectionCode == "RJT003") { // ?????? - ??????
          this.isDisabled = false;
        }

        if (res.progressCode == 'PGT004' || res.progressCode == 'PGT005') { // ????????????,??????????????? ??????
          this.vo.rejectionCode = ""; // ???????????? ?????????
          this.isDisabled = true;
          this.cencalChk = false;
        }
      }
    }, err => {
      console.log("# err -> ", err);
    });
  }

  getTypeConfig(){
    let startDate = moment(this.vo.startDate).format("YYYY-MM-DD");

    let type = this.type == 'subway' ? 'PTT002' : 'PTT001';

    this.configList.forEach(c => {
      if (c.type == type){
        this.designRequest = c.designRequest;
        this.config = c;
      }
    });


    // ???????????? ??????
    if (this.vo.auditCode == 'ADT003') {
      this.codeService.getGroupCodeList("BST").subscribe(res => {
        if (res) {
          this.codeList = res // ???????????????????????????
        }
      });
    }

    this.vo.startDate = startDate;
    this.month = 1;
  }


  // ????????? ?????? ????????????
  getMyAccount(){
    this.accountService.getMyAccount().subscribe(res => {
      if (res) {
        this.myInfo = res;
      }
    }, err => {
      console.log("# err -> ", err);
    });

  }


  /** ?????? ?????? - ?????? ??????
   *
   * **/


  // ????????? ?????? ??????
  fileChange(files: FileList, type) {
    this.newImgList = [];

    if (type == "img"){
      if (this.fileList.length >= 6 || files.length > 6) {
        this.confirm.alert(" ????????? ?????? 6??? ????????? ?????? ???????????????.");
        return;
      }

      // ?????? ????????? ???????????? ????????? ?????? ??????
      if (this.mustadImg){
        this.fileList = [];
        this.mustadImg = false;
      }

    // ??????????????? ???????????? ???????????? ??????
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
      // ????????? ????????? ?????? ?????? ????????? ??????
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
      this.confirm.alert("jpg, png ????????? ????????? ????????????.");
      return;
    }

    // ???????????? 20mb ??????
    if (f.size > 20 * 1024 * 1024) {
      this.confirm.alert('20MB ????????? ????????? ????????? ???????????????.');
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
      this.confirm.alert("????????? ????????? ????????? ????????????.");
      return;
    }

    // ???????????? 200mb ??????
    if (f.size > 200 * 1024 * 1024) {
      this.confirm.alert('200MB ????????? ????????? ????????? ???????????????.');
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
        , path: 'assets/images/img-videothum.png' // ????????? ????????? ?????????
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
   * ?????? ?????? ??????
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

  // ????????????
  deleteFile(num, file) {
    const delidx = this.files.findIndex(function (item) {
      return item.fileIndex === file.fileIndex
    });
    if (delidx > -1) this.files.splice(delidx, 1);
    this.fileList.splice(num, 1);
  }

  /** ????????? ????????? ???????????? ????????? ?????????
   * */
  imgClick(type,path){
    if (type != 'AFT002') {
      this.newImgList.push({'path':path});
      this.imgPreviewPop();
    }
  }

  //??????????????????
  bizFileChange(files: FileList) {
    if (files.length === 0){
      return;
    }
    this.file = files[0];

    var mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.confirm.alert("jpg, png ????????? ????????? ????????????.");
      return;
    }

    let formData = new FormData();
    formData.append('file', this.file);
    this.spinnerService.show('main');

    let ob: Observable<any>;
    if (this.vo.memberGbn == "BCT002") {
      ob = this.fileService.uploadPbizLicense(formData)
    } else if(this.vo.memberGbn == "BCT001") {
      ob =this.fileService.uploadCbizLicense(formData)
    } else {
      ob = new Observable<any>((observer) => {
        observer.next(null);
      });
    }

    this.spinnerService.show('main');
    ob.subscribe((res) => {
      this.bizFileInfo = res;
      this.spinnerService.hide('main');
    }, err => {
      console.log("# err -> ", err);
      this.spinnerService.hide('main');
    });
  }

  // ??????????????????????????????
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
      if (results) {
        this.fileList = results.template;
        this.mustadImg = true;
      }
    }, err => {
      console.log('errror', err);
    });
  }

  oddiCancel(){

    // ??????????????? ?????? ?????? ????????? ?????? ***************************************************************************************************/
    if (this.vo.auditCode == 'ADT002')  {
      // ???????????????????????? ??????
      let currDate = moment().format("YYYY-MM-DD");
      if (currDate > this.cancelDay_chk) {
        this.confirm.alert("????????????????????? ???????????????.");
        return;
      }
    }

    this.confirm.confirm("??????????????? ?????????????????????????").afterClosed().subscribe(result => {
      if (result == "Y") {
        let param = {
          paymentSeq : this.vo.paymentSeq,
          advSeq : this.vo.advSeq
        }

        this.paymentService.cancel(param).subscribe(res => {
          if (-1 < ['00', '01'].indexOf(res.body.data.resultCode)) {
            // ????????? ??????
            this.paymentService.notification({'advSeq':this.vo.advSeq}).subscribe(res => {
              if(res){
                this.saveAlert(this.zone.advSeq, "cancel")
              }
            });
          } else {
            this.confirm.alert('???????????? ????????? ?????????????????????.');
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

  reapply(){

    this.confirm.confirm("????????? ????????? ?????????????????????????").afterClosed().subscribe(result => {
      if (result == "Y") {

        this.zone.advSeq = this.seq;
        this.zone.title = this.vo.title;
        this.zone.businessTypeCode = this.vo.businessTypeCode;
        this.zone.designRequest = this.vo.designRequest;
        this.zone.channelType = this.type == 'subway' ? 'PTT002' : 'PTT001';
        this.zone.progressCode = this.vo.progressCode;

        // ????????? ??????2
        // ?????? -> ???????????? ????????? memberCompanySeq ????????? ??????
        // ????????? -> ???????????? ????????? memberCompanySeq ????????? ??????
        if (this.memberGben != this.vo.memberGbn) { // ?????????
          if (this.vo.memberGbn == 'BCT003') {
            this.zone.memberCompanySeq = null;
          }
        } else {
          this.zone.memberCompanySeq = this.vo.memberCompanySeq;
        }

        // ??????????????????  memberInfo ??????
        this.zone.code = this.vo.memberGbn;
        if (this.zone.code != "BCT003") {

          this.memberInfo.corporation = (this.zone.code == "BCT001" ? true : false);
          this.memberInfo.businessLicenseNumber = this.vo.businessLicenseNumber;
          this.memberInfo.ceo = this.vo.ceo;
          this.memberInfo.companyName = this.vo.name;
          this.memberInfo.memberId = this.myInfo.email;
          this.memberInfo.regName = this.myInfo.name;
          this.memberInfo.businessLicenseFile = this.bizFileInfo.fileSeq;
          this.zone.memberInfo = this.memberInfo;
        }

        this.fileList.forEach((file,index) => {
          let param = {
            fileSeq: file.fileSeq,
            type: file.type,
            viewOrder: index+1,
          }
          this.advFileList.push(param)
        });
        this.zone.advFileList = this.advFileList;


        this.partnerList.forEach((p,index) => {
          let param = {
              partnerSeq: p.partnerSeq,
              requestSlot: p.requestSlot
            }
          this.pkList.push(param)
        });

        this.zone.partnerList = this.pkList;

        this.zone.termsSeq = [];
        this.vo.memberTerms.forEach(term => {
          this.zone.termsSeq .push(term.seq);
        });

      }

      let startDate = moment(this.vo.startDate).format("YYYYMMDD");
      let endDate = moment(this.vo.endDate).format("YYYYMMDD");

      this.zone.startDate = startDate;
      this.zone.endDate = endDate;


      console.log("?????????");
      console.log(this.zone);

     this.avdService.oddiModify(this.zone).subscribe(res => {
        if (res) {
          console.log(res)
          this.saveAlert(this.zone.advSeq, "modify")
        }
      }, err => {
        console.log("# err -> ", err);
        this.pkList = [];
        this.advFileList = [];
        this.confirm.alertError();
      });
    });

  }

  private saveAlert(advSeq, service) {
    if (service == "modify") {
      this.router.navigate(['/mypage/oddi-form']
          ,{queryParams : {seq: advSeq , type:  this.type}
            , skipLocationChange: true}
      );
    } else {
      this.router.navigate(['/mypage/oddi-list']);
    }
  }
}