export const environment = {
  production: false,
  host: 'http://localhost:4200',
  apiUrl: 'http://localhost:28090/user',
  oddiAlarmTime: 60000, // 마이페이지 알림 조회 간격
  youtubePlayUrl : 'https://www.youtube.com/embed',
  youtubePlayOption : '?autoplay=1&mute=1&loop=1&playlist=',
  serviceId: 'local',
  defaultLang: 'ko',
  sns: {
    kakao: {
      javascriptKey: 'f84e63307c482ac17177439626c9d483'
    },
    google: {
      clientId: '691448265885-7eieim9kaa4dbvglnbtf979noc2i0ist.apps.googleusercontent.com'
    },
    facebook: {
      appId: '114899913931482'
    },
    apple: {
      key     : 'ZFMB64A3G4',
      clientId: 'com.lgsvl.showit.dev'
    },
    cognito: {
      userPoolId: 'us-west-2_Q3sEdUfZG',
      clientId  : '5fp56pmi0bf13cu1ue644m6336',
      serverHost: 'https://dispatcher.dev.showit.sbcsvl.com'
    }
  }
};