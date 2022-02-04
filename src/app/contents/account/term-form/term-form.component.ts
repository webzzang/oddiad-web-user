import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import * as _ from "lodash";
import {TermsService} from "../../../service/terms.service";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import {Terms} from "../../../domain/entity/terms";
import * as $ from "jquery";

@Component({
  selector: 'app-term-form',
  templateUrl: './term-form.component.html',
  styleUrls: ['./term-form.component.scss']
})
export class TermFormComponent implements OnInit  ,AfterViewInit{
  @ViewChild('popBody') popBody: ElementRef;
  seq: any;
  status: any;
  termsList = [];
  vo:Terms = new Terms();

  constructor(private dialogRef: MatDialogRef<TermFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private service: TermsService,
              private confirm: ConfirmService
  ) {  if (data) {
    this.status = data['status'];
    if (_.isEmpty(data['seq']) === false) {
        this.seq = data['seq'];
    }
  }
}

  ngOnInit(): void {
    //약관내용조회
    this.getTermInfo(this.status)
  }

  ngAfterViewInit(){
  //  $(this.popBody.nativeElement).scrollTop(0);
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

  getTermInfo(status){
    this.service.getTermsList(status).subscribe(res => {
      if(res){
        this.termsList = res;

        this.termsList.forEach((term,index) => {
          if (this.seq == term.seq){
            this.vo = term;
            return;
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

  confirmTerm() {
      this.dialogRef.close(this.seq);
  }
}