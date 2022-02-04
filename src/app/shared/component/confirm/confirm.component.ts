import {Component, OnInit, Inject, Optional, ViewEncapsulation} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  template: `
    <div class="dim">
      <div class="pop error">
        <div class="pop-header">
          <i class="close" (click)="onClickNo($event)"></i>
        </div>
        <div class="pop2-body">
          <p [innerHTML]="confirmMessage"></p>
        </div>

        <ng-template [ngIf]="windowType == 'alert'">
          <div class="pop-bottom t-center">
            <button type="button" class="btn-01 w100p h40" (click)="onClickOk()">확인</button>
          </div>
        </ng-template>
        <ng-template [ngIf]="windowType == 'confirm'">
          <div class="pop-bottom t-center">
              <button type="button" class="btn-01 base-form w120" (click)="onClickYes($event)">확인</button>
              <button type="button" class="btn-02 base-form w120 ml20" (click)="onClickNo($event)">취소</button>
            </div>
        </ng-template>
      </div>
    </div>
  `,
  styleUrls:['./confirm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmComponent implements OnInit {
  confirmTitle = 'title';
  confirmMessage = 'message';

  windowType = 'confirm';
  messageAlign = "center";

  option: any;

  constructor(@Inject(MatDialogRef) private dialogRef: MatDialogRef<ConfirmComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.windowType = data.type;
    this.confirmTitle = data._title;
    this.confirmMessage = data._message;
    this.option = data.option;
    if(this.option){
      if(this.option.align){
        this.messageAlign = this.option.align;
      }
    }
  }

  ngOnInit() {
  }

  onClickYes(event: any) {
    this.dialogRef.close('Y');
  }

  onClickNo(event: any) {
    this.dialogRef.close('N');
  }

  onClickOk() {
    this.dialogRef.close();
  }


}
