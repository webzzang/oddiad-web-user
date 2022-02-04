export const environment = {
  production: false,
  host: 'https://stg.oddiad.co.kr',
  apiUrl: 'https://api.stg.oddiad.co.kr/user',
  oddiAlarmTime:60000, // 마이페이지 알림 조회 간격
  youtubePlayUrl : 'https://www.youtube.com/embed',
  youtubePlayOption : '?autoplay=1&mute=1&loop=1&playlist=',
  serviceId: 'stg',
  defaultLang: 'ko',
  sns: {
    kakao: {
      javascriptKey: 'f84e63307c482ac17177439626c9d483'
    },
    google: {
      clientId: '957862087532-mmrticb85d7k91odtlc5omalautmkuie.apps.googleusercontent.com'
    },
    facebook: {
      appId: '114899913931482'
    },
    apple: {
      key: '8466725HQP',
      clientId: 'com.lgsvl.showit'
    },
    cognito: {
      userPoolId: 'us-west-2_GaQjCUQXc',
      clientId  : '1gsi5pc36i0hfaq7qc3190loqe',
      serverHost: 'https://dispatcher.prod.api.promota.net'
    }
  }
};
