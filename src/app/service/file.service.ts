import { ApiEndPoint } from 'src/app/domain/vo/api-end-point';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestClient } from '../shared/http/rest-client';
import { Injectable } from '@angular/core';
import {Utils} from '../shared/utils/utils'

@Injectable({ providedIn: 'root' })
export class FileService extends RestClient {

  constructor(protected http: HttpClient) {
    super('', http);
  }

  uploadAdvSingleImageFile(formData: FormData): Observable<any> {
    return this.upload(`${ApiEndPoint.FILE.UPLOADADVSINGLEIMAGE}`, formData);
  }

  uploadSingleImageFile(formData: FormData): Observable<any> {
    return this.upload_noToken(`${ApiEndPoint.FILE.UPLOADSINGLEIMAGE}`, formData);
  }

  uploadSingleImageFileNoToken(formData: FormData): Observable<any> {
    return this.upload_noToken(`${ApiEndPoint.FILE.UPLOADSINGLEIMAGE}`, formData);
  }

  uploadVideoFile(formData: FormData): Observable<any> {
    return this.upload(`${ApiEndPoint.FILE.UPLOADVIDEO}`, formData);
  }

  uploadPbizLicense(formData: FormData): Observable<any> {
    return this.upload(`${ApiEndPoint.FILE.UPLOAD_P_BIZ_LICENSE}`, formData);
  }

  uploadCbizLicense(formData: FormData): Observable<any> {
    return this.upload(`${ApiEndPoint.FILE.UPLOAD_C_BIZ_LICENSE}`, formData);
  }



  uploadImageFile(formData: FormData): Observable<any> {
    return this.upload(`${ApiEndPoint.FILE.UPLOADIMAGE}`, formData);
  }



  uploadFile(formData: FormData): Observable<any> {
    return this.upload(`${ApiEndPoint.FILE.UPLOAD}`, formData);
  }

  deleteFile(params: any): Observable<any> {
    return this.delete(`${ApiEndPoint.FILE.DELETE}`, params);
  }

  fileDownload(params: any): Observable<any> {
    return this.downloadPdfFile(`${ApiEndPoint.FILE.DOWN_CON_FILE(params.seq)}`, params);
  }

  fileList(params: any): Observable<any> {
    return this.get(`${ApiEndPoint.FILE.LIST}`, params);
  }

  fileUrl(params: any): Observable<any> {
    return this.fileUrlData(`${ApiEndPoint.FILE.DOWNLOAD}`, params);
  }

  sampleDownload(url): Observable<any> {
    return this.download(url);
  }

  uploadExcel(uploadUrl, formData: FormData): Observable<any> {
    return this.upload(uploadUrl, formData);
  }

  contractFileDownload(params: any): Observable<any> {
    return this.downloadPdfFile(`${ApiEndPoint.FILE.DOWN_CON_FILE(params.seq)}`, params);
  }

  /**
   * 파일 다운로드
   *
   * @param seq
   */
  downloadFile(seq: number, fileName?: string): Observable<any> {
    let op: Observable<any> = this.download([seq].join(''));
    op.subscribe((res) => {
      if (res && fileName) {
        Utils.downloadFile(res, fileName);
      }
    });

    return op;
  }

}


