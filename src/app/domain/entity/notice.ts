export class NoticeList{
  total:Number;
  pages:Number;
  pageNum:Number;
  data: Array<any>
}

export class NoticeInfo{
  contents: string;
  fileExtension: string;
  fileName: string;
  filePath: string;
  fileSeq: 0;
  fileType: string;
  nextRegDate: string;
  nextRownum: string;
  nextTitle: string;
  preRegDate: string;
  preRownum: string;
  preTitle: string;
  regDate: string;
  rownum: string;
  s3FileKey: string;
  seq: string;
  title: string
}