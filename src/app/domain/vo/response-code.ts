/**
 * 서버 응답 코드 상수
 */
export class ResponseCode {

  static Auth = class {
    static OK_CODE = '000';
    static NOT_MATCHED = '001';
    static OLD_TIME_USE = '002';
    static BLOCK = '004';
    static TEMP_PASSWORD = '009';
    static CHANGE_PWD = '010';
  };

  static Error = class {
    static NORMAL = '001';
    static DUPLICATE = '002';
    static NOT_ENOUGH_PERMISSION = '102';
    static NOT_RESERVABLE = '106';
    static NOT_FOUNT_ENTRANCE = '108';
    static MAXIMUM_NUMBER_OF_RESERVATIONS_EXCEEDED = '109';
  };

  static Password = class {
    static INVALID_PASSWORD = '005';
    static INVALID_PASSWORD_LENGTH = '006';
    static NOT_CHANGED_PASSWORD = '007';
    static CONTAINS_ID_IN_PASSWORD = '008';
    static CONTAINS_TEL_NO_IN_PASSWORD = '009';
    static TEMP_PASSWORD = '010';
    static OLD_PASSWORD = '011';
  }
}
