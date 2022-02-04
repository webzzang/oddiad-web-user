import {Component, Inject, OnInit} from '@angular/core';
import {GlobalConstants} from "../../../domain/vo/global-constants";
import {Privilege} from "../../../domain/vo/privilege.enum";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ConfirmService} from "../confirm/confirm.service";
import * as _ from "lodash";
import {FileService} from "../../../service/file.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Utils} from "../../utils/utils";

@Component({
  selector: 'app-file-upload-pop',
  templateUrl: './file-upload-pop.component.html',
  styleUrls: ['./file-upload-pop.component.scss']
})
export class FileUploadPopComponent implements OnInit {

  utils = Utils;
  mData: any;

  Constants = GlobalConstants;
  privilege = Privilege;

  file:any;
  fileSize;
  fileName;
  isAttachFile = false;
  isSample = false;

  defaultWidth = 800;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private confirm: ConfirmService,
              private spinner: NgxSpinnerService,
              private dialogRef: MatDialogRef<FileUploadPopComponent>,
              private service: FileService) {
    if (data) {
      this.mData = {};
      _.keys(data).forEach(key => {
        this.mData[key] = data[key];
      });
      if (_.isEmpty(data['width']) === true) { this.mData['width'] = this.defaultWidth; }
    } else {
      this.mData = {};
      this.mData['width'] = this.defaultWidth;
    }

    if (_.isEmpty(this.mData['title'])) {
      this.mData['title'] = '파일';
    }

    if (this.mData['sampleUrl']) {
      this.isSample = true;
    }
  }

  ngOnInit() {

  }

  fileChange(files: FileList) {
    this.file = files[0];
    this.fileSize = this.utils.humanFileSize(this.file.size, 1024);
    this.isAttachFile = true;
    this.fileName = this.file.name;
  }

  getSample() {
    this.service.sampleDownload(this.mData['sampleUrl']).subscribe(() => {}, err => {});
  }

  uploadFile() {
    if (this.file) {
      let formData = new FormData();
      formData.append("file", this.file);
      this.spinner.show("main");
      this.service.uploadExcel(this.mData['uploadUrl'], formData).subscribe(res => {
        this.spinner.hide("main");
        this.dialogRef.close(res);
      }, err => {
        let errMsg = err['body']['message'];
        this.spinner.hide("main");
        this.confirm.alert(!_.isEmpty(errMsg) ? errMsg : "파일업로드 오류");
      });
    }

  }

  completeAlert(msg) {
    this.confirm.alert(`${this.mData['title'] + ' ' + msg}`).afterClosed().subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
