import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
/*
      var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYW5hZ2VyIjpmYWxzZSwiaXNzIjoiZXBpc29kZSIsImlkIjoiVEVTVDAwMDEiLCJleHAiOjE2NDk0ODcwNDZ9.FMnT3dH_dERAV9KSJCx8dSPWoKoZEDcVQs-ZUtUDhu8";
      var newHeader: HttpHeaders = req.headers;
      newHeader = newHeader.set('Content-Type', 'application/json');
      if(token) newHeader = newHeader.set('x-access-token', token);
      const newReq = req.clone({headers: newHeader});
      return next.handle(newReq);
      */
      /*
      req = req.clone({
         withCredentials: true
      });
      */


      /*
      const secureReq = req.clone({
        url: req.url.replace('http://', 'https://')
      });
      // send the cloned, "secure" request to the next handler.
      return next.handle(secureReq);
      */

      return next.handle(req);
  }
}