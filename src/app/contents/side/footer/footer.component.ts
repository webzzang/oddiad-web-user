import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TermsService} from "../../../service/terms.service";
import {TermFormComponent} from '../../account/term-form/term-form.component';
import {MatDialog} from '@angular/material/dialog';
import {PartnershipService} from '../../../service/partnership.service';
import * as $ from "jquery";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('footerAccordion') footerAccordion: ElementRef;

  constructor(
      public dialog: MatDialog,
      private partnershipService: PartnershipService,
      private termService: TermsService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $(this.footerAccordion.nativeElement).accordion({
        collapsible: true,
        active:1,
        heightStyle: "content"
      });
    }, 200);
  }

  // 약관팝업오픈
  openTermDialog(code) {
    let seq;
    this.termService.getTermsList(0).subscribe(r=>{
      r.filter(value => {
        if(value.code == code){
          this.openDialog(value.seq);
        }
      });
    })
  }

  openDialog(seq){
    const dialog = this.dialog.open(TermFormComponent, {
      position: {},
      disableClose: true,
      data: {
        seq: seq,
        status:0
      }
    });
  }
}
