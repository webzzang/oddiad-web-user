import {Terms} from "./terms";
import {Member} from "./member";

export class Partner{
  mallName: string;
  name: string;
  productName: string;
  productSeq: string;
  seq: string;
  partnerSeq: string;
  slotPrice: Number;
  totalSlot: Number;
  requestSlot:Number;
  readySlot:Number;
  slotArray:Array<any>
}


export class OddiInfo{
  advFileList: Array<any>;
  advPartnerList:Partner[];
  auditCode: string;
  auditCodeName: string;
  businessLicenseNumber: string;
  businessTypeCode: string;
  businessTypeName: string;
  ceo: string;
  channelType: string;
  channelTypeName: string;
  contentType: string;
  corporation: string;
  designRequest: boolean;
  endDate: string;
  etcBusinessName: string;
  extension: string;
  fileName: string;
  fileSeq: number;
  mappingDone: string;
  memberGbn: string;
  memberGbnName: string;
  memberTerms: Array<any>;
  name: string;
  partnerConfigList:Array<any>;
  path: string;
  price: string;
  progressCode: string;
  progressCodeName: string;
  regDate: string;
  rejectionCode: string;
  rejectionCodeName: string;
  rejectionDate: string;
  rejectionReason: string;
  s3Bucket: string;
  s3FileKey: string;
  startDate: string;
  title: string;
  productName:string;
  productSeq:string;
  memberCompanySeq:number;
  paymentSeq:number;
  advSeq:number;
  oddiAdvCancelDate:number;
}



