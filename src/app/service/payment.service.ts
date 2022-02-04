import { ApiEndPoint } from '../domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';

/* 결제 서비스추가 */
@Injectable({ providedIn: 'root' })
export class PaymentService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  getPaymentInfo(advSeq:any): Observable<any> {
    return this.post(null,`${ApiEndPoint.PAYMENT.INFO(advSeq)}`);
  }

  save(payment): Observable<any> {
    return this.post(payment,`${ApiEndPoint.PAYMENT.SAVE}`);
  }

  resultInfo(paymentSeq:any): Observable<any> {
    return this.post(null,`${ApiEndPoint.PAYMENT.RESULT(paymentSeq)}`);
  }

  cancel(oddi): Observable<any> {
    return this.put(oddi,`${ApiEndPoint.PAYMENT.CANCEL(oddi.paymentSeq,oddi.advSeq)}`);
  }

  promotionCoupon(couponCode:any): Observable<any> {
    return this.get(`${ApiEndPoint.PAYMENT.PROMOTIONCOUPON(couponCode)}`);
  }

  //알림톡발송
  notification(oddi): Observable<any> {
    return this.put(oddi,`${ApiEndPoint.PAYMENT.NOTIFICATION(oddi.advSeq)}`);
  }
}





