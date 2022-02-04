import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import emailMask from 'text-mask-addons/dist/emailMask';
import * as _ from 'lodash';

/**
 * 전역 상수
 */
export class GlobalConstants {

  /** 사용여부 */
  static USE_YN = class {
    static USE = 'Y';
    static NOT_USE = 'N';
  };

  static ROLE_SEQ = class {
    static ROLE_1 = "1"; // 최고관리자
    static ROLE_2 = "2"; // 본사관리자
    static ROLE_3 = "3"; // 현장관리자
    static ROLE_4 = "4"; // 지점관리자
  }

  /** 마스킹 설정 */
  static MASK = {
    telephone: [/[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    businessNumber: [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/],    
    registerNumber: [/[0-9]/, /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    range: (limit: number, includeThousandsSeparator:boolean = true) => createNumberMask({
      prefix: '',
      suffix: '',
      includeThousandsSeparator: includeThousandsSeparator,
      integerLimit: limit
    }),
    email: emailMask,
    number: createNumberMask({
      prefix: '',
      suffix: ''
    }),
    alphaNumber: (val: string) => {
      let arr = _.toArray(val);
      let resultArr = [];
      _.each(arr, item => {
        let r = item.replace(/[^0-9a-zA-Z]/, "");
        if(!_.isEmpty(r)){
          resultArr.push(/[0-9a-zA-Z]/);
        }
      });
      return resultArr;
    }
  };


  static MAX_FILE_SIZE = 104857600; // 100MB
}
