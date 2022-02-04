export class ApiEndPoint {

  static readonly COMMON_CODE = '/codes';
  static readonly FILE_UPLOAD = '/file';

  static COMMON = class {
    static readonly EDITOR_IMAGE_DELETE = '/editor/image/delete';
  };

  static CODE = class {
    static readonly MEMBER_TYPE = '/temp';
  };

  static FILE = class {
    static readonly UPLOADADVSINGLEIMAGE = '/file/advSingle';
    static readonly UPLOADSINGLEIMAGE = '/file/single';
    static readonly UPLOADVIDEO = '/file/video';
    //개인 사업자 등록증 업로드
    static readonly UPLOAD_P_BIZ_LICENSE = '/file/p-business-license';
    //법인 사업자 등록증 업로드
    static readonly UPLOAD_C_BIZ_LICENSE = '/file/c-business-license';
    static readonly INFO = (fileSeq: any) => `/file/info/${fileSeq}`;

    static readonly DOWNLOAD = (seq: any) => `/file/${seq}`;

    // 영상 HLS 미디어 컨버팅 (영상 플레이할때 http 프로토콜 이용해서 영상 플레이시 사용)
    static readonly VIDEOFILE_CONVERT = (uniqFileName: any) => `file/${uniqFileName}/convert/hls`;




    static readonly UPLOADIMAGE = '/file';
    static readonly UPLOAD = '/file/upload';
    static readonly DELETE = '/file/delete';
    static readonly LIST = '/file/list';

    //계약 관련 파일 다운로드 API
    static readonly DOWN_CON_FILE = (seq: any) => `/file/${seq}`;
  };


  static readonly SAMPLE = class {
    static readonly ORDERLIST = '/order/cafe';
    static readonly ORDERDETAIL = (id: any) => `/order/cafe/${id}`;
    static readonly LIST = '/product/cafe';
    static readonly CREATE = '/product/cafe';
    static readonly CODES = '/product/cafe/codes';
    static readonly ORDERCODES = '/order/cafe/codes';
    static readonly READ = (id: any) => `/product/cafe/${id}`;
    static readonly MENUREAD = (id: any) => `/product/cafe/menus/${id}`;
    static readonly UPDATE = (id: number) => `/product/cafe/${id}`;
    static readonly MENUDELETE = (seq: any) => `/product/cafe/menus/${seq}`;
  };

  static FAQ = class {
    static readonly TYPE = `/faq/type`;
    static readonly LIST = `/faq`;
    static readonly UPDATE = (seq: any) => `/faq/${seq}`;
  };

  static NOTICE = class {
    static readonly LIST = `/notice`;
    static readonly DETAIL = (num: any) => `/notice/${num}`;

  };

  static ACCOUNT = class {
    static readonly ADD = `/account`;
    static readonly DUPLICATION = `/account/duplication`;
    static readonly VERIFICATION = (phoneNumber: any) => `/verification-number/${phoneNumber}`;
    static readonly VERIFICATIONCHK = `/verification-number/check`;
    static readonly MY = `/account/my`;
    static readonly MODIFY = `/account/my`;
    static readonly PASSWORDCHANGE = `/account/my/passwordChange`;
    static readonly RESIGN = `/account/my/resign`;
  };

  static readonly AUTH = class {
    static readonly LOGIN = '/signin';
    static readonly PASSWORD = `/password`;

  };

  static readonly TERMS = class {
    static readonly LIST = (status: any) => `/terms/${status}`;
  };

  static readonly ADV = class {
    static readonly PARTNERCMMN = `/adv/partner/comm`;
    static readonly PRODUCTPARTNERCMMN = `/adv/product/comm`;
    static readonly SUBWAYCMMN = `/adv/subway/comm`;
    static readonly ODDIADD = `/oddi`;
    static readonly ODDIUPDATE = (seq: number) =>  `/oddi/${seq}`;
    static readonly SUBWAYADD = `/subway`;
  };

  static readonly ODDI = class {
    static readonly LIST = `/oddi`;
    static readonly PRODUCTLIST = `/oddi/product`;
    static readonly DETAIL = (advSeq: any) => `/oddi/${advSeq}`;
    static readonly PRODUCTDETAIL = (productSeq: any) => `/oddi/product/${productSeq}`;
    static readonly HISTORY = `/oddi/history`;
    static readonly ODDISLOT =  `/oddi/adv/partner/slot`;
    static readonly SUBWAYSLOT =  `/subway/adv/partner/slot`;

    static readonly RECENTADVVOD = (channelType: any) => `/adv-vod/${channelType}`;
  };

  static readonly SUBWAY = class {
    static readonly SUBWAYLIST = `/subway/list`;
    static readonly PARTNERLIST = `/subway/partners`;
  };

  static readonly LIVE = class {
    static readonly RECENT_VOD = '/oddi-live/is-new-vod';
    static readonly CURRENT_LIVE = '/oddi-live/live-streaming';
    static readonly LIVE_LIST = '/oddi-live/live-schedule';
    static readonly VOD_LIST  = '/oddi-live/vod-list';
  }

  static readonly PARTNERSHIP = class {
    static readonly CODES = `/partner/codes`;
    static readonly GETNAME = `/partner/name`;
    static readonly PARTNERS = `/partner`;
    static readonly ADD = `/partner`;
  };

  static readonly INQUIRE = class {
    static readonly LIST = `/inquire/member`;
    static readonly DETAIL = (seq: any) => `/inquire/member/${seq}`;
    static readonly DETAILNOMEMBER = (seq: any) => `/inquire/nomember/${seq}`;
    static readonly CODES = `/inquire/codes`;
    static readonly ADDNOMEMEBER = `/inquire/nomember`;
    static readonly ADDMEMEBER = `/inquire/member`;
    static readonly MODIFY = (seq:any) => `/inquire/member/${seq}`;
  };

  static readonly GROUPCODE = class {
    static readonly LIST = `/codes/group`;
    static readonly GROUPLIST = (groupCode: any) => `/codes/${groupCode}`;
  };

  static readonly PAYMENT = class {
    static readonly SAVE = `/payment`;
    static readonly INFO = (advSeq: any) => `/payment/${advSeq}`;
    static readonly RESULT = (paymentSeq: any) => `/payment/result/${paymentSeq}`;
    static readonly CANCEL = (paymentSeq: any, advSeq: any) => `/payment/${paymentSeq}/${advSeq}`;
    static readonly PROMOTIONCOUPON = (couponCode: any) => `/promotion/${couponCode}`;
    static readonly NOTIFICATION = (advSeq: any) => `/notification/paymentCancel/${advSeq}`;
  };

  static readonly MYPAGE = class {
    static readonly ODDIlIST = `/my/oddi`;
    static readonly PAYMENT = `/my/payment`;
    static readonly NOTICE = `/my/oddi`;
  };

  static readonly MUSTAD = class {
    static readonly LIST = (token: any) => `/mustad/content/${token}`;
    static readonly FILESAVE = `/file/mustad`;
    static readonly KAKAOAUTHTOKEN = `/mustad/kakao/auth/token`;
    static readonly FEDERATEDTOKEN  =`/mustad/federated/token`;
  };

  static readonly MAIN = class {
    static readonly LIST = `/home`;
  };

}
