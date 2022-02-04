export const environment = {
  production: false,
  host: 'https://oddiad.co.kr',
  apiUrl: 'https://api.oddiad.co.kr/user',
  oddiAlarmTime:60000, // 마이페이지 알림 조회 간격
  youtubePlayUrl : 'https://www.youtube.com/embed',
  youtubePlayOption : '?autoplay=1&mute=1&loop=1&playlist=',
  serviceId: 'prod',
  defaultLang: 'ko',
  sns: {
    kakao: {
      javascriptKey: 'd1f392e2f99383f1ebe3fdabfc11a6f9'
    },
    google: {
      clientId: '957862087532-mmrticb85d7k91odtlc5omalautmkuie.apps.googleusercontent.com'
    },
    facebook: {
      appId: '141361416435532'
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

