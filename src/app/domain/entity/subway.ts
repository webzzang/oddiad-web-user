export class Subway{
  startDate: string;
  month: Number;
  slot: string;
  title: string;
  business: string;
  desion: string;
  imagePath: string;
  name: string;
  email: string;
  phoneNumber: string;
  subname: string;
  subtitle: string;
  subno: string;
  subpath: string;
}

export class SubwayLine {
  title: string;
  line: string;
  state: string;
}

export class SubwayPartners {
  seq: number;
  checked:boolean;
  mallName: string;
  summary: string;
  description: string;
  badgeCode: string;
  totalSlot: number;
  slotVideoTime: number;
  slotPrice: string;
  operationStartTime:string;
  operationEndTime:string;
  location:string;
  display:string;
  subwayLineList;
  subwayImageList;
  youtube:{};
}
