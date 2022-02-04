import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class NoSessionGuard implements CanActivate {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private spinner: NgxSpinnerService ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    //return true;
    if (sessionStorage.getItem('accesstoken')) {
      this.router.navigate(['/']);
      return true;
    }
  }

}
