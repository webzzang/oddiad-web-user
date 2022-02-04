import {Component, Inject, OnInit} from '@angular/core';
import {GlobalConstants} from "../../../domain/vo/global-constants";
import {Privilege} from "../../../domain/vo/privilege.enum";
import {Utils} from "../../../shared/utils/utils";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ConfirmService} from "../../../shared/component/confirm/confirm.service";
import * as _ from "lodash";
import {FileService} from "../../../service/file.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-event-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  mData: any;

  Constants = GlobalConstants;
  privilege = Privilege;
  utils = Utils;

  editorConfig = {height: '100%'};

  isImg = true;
  imageUrlInfo;
  fileReader = new FileReader();

  defaultWidth = 600;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private confirm: ConfirmService,
              private service: FileService,
              private sanitizer: DomSanitizer,
              private dialogRef: MatDialogRef<PreviewComponent>) {
    if (data) {
      this.mData = {};
      _.keys(data).forEach(key => {
        this.mData[key] = data[key];
      });
      if (_.isEmpty(data['width']) === true) {
        this.mData['width'] = this.defaultWidth;
      }
    } else {
      this.mData = {};
      this.mData['width'] = this.defaultWidth;
    }
  }

  ngOnInit(): void {
    this.getFileUrl();
  }

  getFileUrl() {
    if (this.mData['fileSeq']) {
      let params = {
        targetType: this.mData['targetType'],
        targetSeq: this.mData['seq'],
        fileSeq: this.mData['fileSeq'],
      }
      this.service.fileUrl(params).subscribe(fileRes => {
        if (fileRes) {
          this.imageUrlInfo = this.sanitizer.bypassSecurityTrustUrl(fileRes);
        }
      });
    } else {
      if (this.mData.file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imageUrlInfo = e.target.result as string;
        };
        reader.readAsDataURL(this.mData.file);
      } else {
        this.isImg = false;
      }
    }
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
