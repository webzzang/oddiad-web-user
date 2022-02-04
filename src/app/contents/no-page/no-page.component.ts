import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.scss']
})
export class NoPageComponent implements OnInit {

  constructor(
      private activeRoute: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void {
    const path = this.activeRoute.snapshot.queryParams['path'];
    if (path){
      this.router.navigate([path]);
    }
  }
}
