import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {TermsService} from "../../../service/terms.service";
import {TermFormComponent} from "../../account/term-form/term-form.component";
import {PageType} from "../../../domain/vo/page-type.enum";
import {PaymentService} from "../../../service/payment.service";
import * as moment from "moment";
import {AccountService} from "../../../service/account.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {invalid} from "moment";
import {Router} from "@angular/router";
import * as _ from "lodash";
import {GroupCodeService} from "../../../service/groupCode.service";

@Component({
  selector: 'app-zone-payment',
  templateUrl: './zone-payment.component.html',
  styleUrls: ['./zone-payment.component.scss']
})
export class ZonePaymentComponent implements OnInit ,AfterViewInit {
  @Input() searchData = {};
  @Output() changeView = new EventEmitter();

  advType;
  advSeq:any;
  payBtnClass= "btn-01 fs1 w100p";
  info:any = [];
  couponList:any = [];
  partnerList:Array<any> = [];
  fileList:any = [];
  myInfo:any = [];
  coupon="";
  vat;
  totalPrice;
  discountPrice=0;
  finalPrice;
  month;
  timeout: boolean = false;
  countDownTimer;
  remainTimeText;
  corporationCard: boolean = false;
  paymentParam:any = {};
  chkCoupon;
  promotionCoupon:any = {};
  oddiCancelDate;

  constructor(
      private router: Router,
      public dialog: MatDialog,
      private fb: FormBuilder,
      private confirm: ConfirmService,
      private termsService: TermsService,
      private accountService: AccountService,
      private service: PaymentService,

  ) { }

  paymentForm: FormGroup;
  termsList = [];

  ngOnInit(): void {
    this.partnerList = [];
    this.advType = this.searchData["advType"];
    this.advSeq = this.searchData["advSeq"];
    this.countDownTimer = "00:00";

    this.paymentForm = this.fb.group(
        {
          coupon: new FormControl('', [
          ])
          ,promotionCode: new FormControl('', [
          ])
          , designRequest: new FormControl('', [
          ])
          , requestSlot: new FormControl('', [
          ]),
          corporationCard: new FormControl('', [
          ]),
          nonRequired: new FormControl('', []),
          infoRequired: new FormControl('', [Validators.required]),
          cancelRequired: new FormControl('', [Validators.required]),
        }, {
          validator: [
          ]
        }
    );

    this.startTimer();
    this.getMyAccount();
    this.getPaymentInfo();
    this.getTermsList();
    this.startTimer(); // ????????? ?????? ??? 10?????? ????????? ????????????
  }

  ngAfterViewInit(){
    scrollTo(0,0)
  }

  startTimer() {
    let limitTime = moment(new Date()).add(10, 'minute');
    let regex = /[^0-9]/g;
    this.countDownTimer = setInterval(() => {
      let now = moment(new Date());
      this.remainTimeText = moment.utc(moment(limitTime, "mm:ss").diff(moment(now, "mm:ss"))).format("mm:ss")
      let chk = parseInt(this.remainTimeText.replace(regex, ""));
      if (chk < 1) {
        this.timeout = true;
        clearInterval(this.countDownTimer);
        this.countDownTimer = "00:00";
        this.paymentForm.disable();
      }
    }, 1000);
  }

  getPaymentInfo() {
    this.service.getPaymentInfo(this.advSeq).subscribe(res => {
      if(res){
        this.info = res;
        this.partnerList = res.advPartnerList;
        this.fileList = res.advFileList;
        this.couponList = res.couponList;

        //????????? 10?????? ??????
        this.totalPrice = res.totalPrice;
        this.setPrice();

        this.paymentParam.advEndDate    = this.info.endDate;
        this.paymentParam.advName       = this.info.title;
        this.paymentParam.advSeq        = this.info.advSeq;
        this.paymentParam.advStartDate  = this.info.startDate;
        this.paymentParam.buyerEmail    = this.info.endDate;
        this.paymentParam.channelType   = this.advType == 'subway' ? 'PTT002' : 'PTT001';
        this.paymentParam.goodName      = this.info.title;
        this.paymentParam.productName   = this.info.title;

        let startDate = moment(this.info.startDate).format("YYYY.MM.DD");
        let endDate = moment(this.info.endDate).format("YYYY.MM.DD");

        this.info.startDate = startDate;
        this.info.endDate = endDate;

        let diff =  moment(this.info.endDate).diff(moment(this.info.startDate), 'months');
        this.month = diff;

        //????????????????????? oddiCancelDate
        res.partnerConfig.forEach(c => {
          if (c.type == 'PTT001'){
            this.oddiCancelDate = c.oddiAdvCancelDate;
          }
        });

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

  // ????????? ?????? ????????????
  getMyAccount(){
    this.accountService.getMyAccount().subscribe(res => {
      if (res) {
        this.myInfo = res;
        this.paymentParam.memberId      = this.myInfo.email;
        this.paymentParam.buyerTel      = this.myInfo.phoneNumber;
        this.paymentParam.buyerName     = this.info.memberGbn == 'BCT003' ? this.myInfo.name : this.info.name ;// ????????????????????? ?????????
      }
    }, err => {
      console.log("# err -> ", err);
    });

  }

  getTermsList() {
    // ??????????????????
    this.termsService.getTermsList(1).subscribe(res => {
      if(res){
        this.termsList = res;

        //????????????
        this.termsList.forEach(t => {
          if (t.required){
            this.paymentForm.addControl(t.code, new FormControl('', Validators.required));
          }
        });

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

  // ????????????
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
        console.log("??????" + results)
      }
    }, err => {
      console.log('errror', err);
    });

  }

  //????????????
  couponChange($event){
    let seq = $event.target.value;

    if (seq == 0) { // ????????????
      this.promotionCoupon.code = "";
      this.promotionCoupon.price = "";
    } else {
      this.couponList.forEach(coupon => {
        if (seq == coupon.couponSeq) {
          this.chkCoupon = coupon;
        }
      });
    }

    this.setPrice();
  }

  usePromotionCoupon(){
    if (!this.promotionCoupon.code) {
      this.promotionCoupon.code = "";
      this.promotionCoupon.price = 0;
      this.discountPrice = 0;
      this.setPrice();
      this.confirm.alert("??????????????? ??????????????????.");
      return;
    }

    this.service.promotionCoupon(this.promotionCoupon.code).subscribe(res => {
      if(res){
        if (_.isEmpty(res)) {
          this.confirm.alert("?????????????????? ???????????????.");
          return;
        } else {
          // ??????????????????
          let currDate = moment().format("YYYY-MM-DD");
          let expiredDate =  moment(res.expiredDate).format("YYYY-MM-DD");

          if (currDate > expiredDate) {
            this.confirm.alert("????????????????????? ?????????????????????.");
            this.promotionCoupon.code = "";
            this.promotionCoupon.price = 0;
            this.discountPrice = 0;
            this.setPrice();
            return;
          }

          this.promotionCoupon.price = res.discountPrice;
          this.setPrice();
        }
      }
    }, err => {
      console.log("# err -> ", err);
      if (err.body) {
        if (err.body.message) {
          this.promotionCoupon.code = "";
          this.promotionCoupon.price = 0;
          this.discountPrice = 0;
          this.setPrice();
          this.confirm.alert(err.body.message);
        }
      }
    });
  }

  setPrice() {

    if (this.coupon == "") {
      this.discountPrice = 0;
      this.paymentParam.couponNumber  = "";

    } else if (this.coupon == "0") { // ????????????
      this.discountPrice = this.promotionCoupon.price;
      this.paymentParam.couponNumber  = this.promotionCoupon.code;

    } else {
      this.discountPrice = this.chkCoupon.discountPrice;
      this.paymentParam.couponNumber  = this.chkCoupon.couponCode;
    }

    let price = Number(this.info.totalPrice) - Number(this.discountPrice);
    this.totalPrice = (price < 0 ? 0 : price);
    this.vat = this.totalPrice * 0.1;
    // ????????? ????????? ??????
    this.vat =  Math.floor(this.vat);

    this.finalPrice = price + this.vat;
    if (this.finalPrice  < 0) {
      this.finalPrice = 0;
    }

    this.paymentParam.price         = this.finalPrice
  }


  openPayment($event) {}

  closePayment(params) {
    if (params.responseCode == '0000' || params.responseCode == '00') { // ??? ????????? : 0000 ,  ????????? ????????? : 00
      // ????????? ???????????? ??????
      let type = '';
      if (this.advType == 'partner') {
        type = 'partner'
      } else {
        type = 'product'
      }

      this.router.navigate(['/mypage/oddi-form']
          ,{queryParams : {seq: this.advSeq , type: type }
            , skipLocationChange: true}
      );
    } else {
      // ??????, ????????? ????????? ??????
      this.confirm.alert("????????? ?????????????????????. ??????????????? ??????????????????.")
    }
  }

  /*
  backTest() {

    let tab = this.advType == "partner" ? 1 : 2;
    let searchData = {
      tabType: tab , seqs: null
      ,advSeq: this.advSeq
    }

    this.changeView.emit({pageType: PageType.FORM, searchData: searchData});
  }*/
}
