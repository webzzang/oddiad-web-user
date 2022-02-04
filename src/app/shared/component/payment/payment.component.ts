import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {PaymentService} from "../../../service/payment.service";
import {ConfirmService} from "../confirm/confirm.service";

/**
 * 결제 컴포넌트
 */
@Component({
  selector: 'app-payment',

  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input('paymentParam')  paymentParam: any = {};
  @Input('buttonClass')   buttonClass : string = '';
  @Input('isDisabled')    isDisabled : boolean;
  @Output('openPayment')  openPayment : EventEmitter<any> = new EventEmitter<any>();
  @Output('closePayment') closePayment: EventEmitter<any> = new EventEmitter<any>();

  checkPopupIntervalId: any;
  popup: any;
  data: any = {};
  url: string = "";

  constructor(private spinnerService: NgxSpinnerService
              ,private service: PaymentService,
              private confirm: ConfirmService
  ) {
  }

  ngOnInit(): void {
  }

  /**
   * 결제 요청 페이지 로드
   */
  openInicisPaymentPopup(): void {

    let ob: Observable<any>;

    if (!this.paymentParam.paymentSeq) {
      ob = this.registerPayment();
    } else {
      ob = new Observable<any>((observer) => {
        observer.next(null);
      });
    }

    ob.subscribe((res) => {
      if (!this.paymentParam.paymentSeq) {
        this.paymentParam.paymentSeq = res;
      }

      if (this.popup && !this.popup.closed) {
        this.closePopup();
      }

      this.openPopup();
      this.openPopupAfter();
    });
  }

  /**
   * 결제 팝업 열기
   */
  openPopup(): void {
    let url: string = [environment.apiUrl, 'payment/inicis/auth', this.paymentParam.paymentSeq, this.paymentParam.couponCode || 'nothing'].join('/');
    this.popup = window.open(url, 'inicis-payment-popup', 'width=820px,height=600px,toolbars=no,scrollbars=1');
  }

  /**
   * 결제 팝업 닫기
   */
  closePopup(): void {
    if (this.popup) {
      this.popup.close();
    }
  }

  /**
   * 결제 팝업 오픈 후처리
   */
  openPopupAfter(): void {
    this.openPayment.emit(this.paymentParam);

    this.spinnerService.show('main');
    this.checkPopupIntervalId = setInterval(() => {
      if (this.popup.closed) {
        clearInterval(this.checkPopupIntervalId);
        this.spinnerService.hide('main');
        this.checkPopupIntervalId = null;

        /**
         * Todo 결제정보 조회하여 paymentParam에 대입하여 이벤트 송출
         */
        this.service.resultInfo(this.paymentParam.paymentSeq).subscribe(res => {
          if(res){
            console.log(res)
            this.closePayment.emit(res);
          }
        }, err => {
          console.log("# err -> ", err);
          if (err.body) {
            if (err.body.message) {
              this.confirm.alert("결제가 실패되었습니다. 다시 결제해주세요.");
              this.closePayment.emit(null);
            }
          }
        });
      }
    }, 1000);
  }

  /**
   * 결제금액이 0 원일때
   */
  paymentSave(): void {

    this.service.save(this.paymentParam).subscribe(res => {
      if(res){
        let param = {
          responseCode : '0000',
          paymentSeq : res
        }

        this.closePayment.emit(param);
      }
    }, err => {
      console.log("# err -> ", err);
      if (err.body) {
        if (err.body.message) {
          this.confirm.alert("결제가 실패되었습니다. 다시 결제해주세요.");
          this.closePayment.emit(null);
        }
      }

    });
  }

  /**
   * 결제정보 등록
   */
  registerPayment(): Observable<any> {
    return this.service.save(this.paymentParam);
  }
}
