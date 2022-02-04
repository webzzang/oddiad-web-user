// 메인 슬라이더
$(function() {
  $(".key-visual").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    swipe:true,
    fade:true,

    draggable: true,
    touchMove: false,
    pauseOnHover:false,
    pauseOnDotsHover: false,
    pauseOnFocus:false,
  });

  // 슬라이더 총 페이지 수
  function key_visual_pageNumber(){
    var totalSlideNo = $('.key-visual-wrap .key-visual .visual-01').length;
    $('.key-visual-wrap .total-slide-no').html(totalSlideNo);
  };
  key_visual_pageNumber();

  // 슬라이더 시작,정지 버튼
  $('.start-button').on('click', function(){
    $('.key-visual').slick('slickPlay');
  });
  $('.pause-button').on('click', function(){
    $('.key-visual').slick('slickPause');
  });


  $(".partner-slider").slick({
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    swipe:true,
    SwipeToSlide: true,
    draggable: true,

    touchMove: true,
    touchThreshold: 1,
    pauseOnHover:true,
    pauseOnFocus:true,
    centerMode: true,
    centerPadding: '0px',

    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 1600, //화면 사이즈 1600px
        settings: { slidesToShow:6 }
      },
      {
        breakpoint: 1400, //화면 사이즈 1200px
        settings: { slidesToShow:5 }
      },
      {
        breakpoint: 992, //화면 사이즈 992px
        settings: { slidesToShow:4, centerMode: true, centerPadding: '60px' }
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: { slidesToShow:3, centerMode: true, centerPadding: '70px' }
      },
      {
        breakpoint: 650, //화면 사이즈 650px
        settings: { slidesToShow:3, centerMode: true, centerPadding: '50px' }
      },
      {
        breakpoint: 550, //화면 사이즈 550px
        settings: { slidesToShow:2, centerMode: true, centerPadding: '70px' }
      },
      {
        breakpoint: 420, //화면 사이즈 576px
        settings: { slidesToShow:1, centerMode: true, centerPadding: '90px' }
      },
    ]

  });


  $( function() {
    $( ".faq-accordion" ).accordion({
      collapsible: true,
      heightStyle: "content"
    });
  } );


  // 헤더 드래그
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 100) {
      jQuery("header").addClass("scroll");
    } else {
      jQuery("header").removeClass("scroll");
    }
  });

  // 오디존 탭
  $('.tab-k > li > a').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tab-k > li > a').removeClass('active');
    $('.tab-content').removeClass('current');

    $(this).addClass('active');
    $("#"+tab_id).addClass('current');
  })


  // 북마크 토글클래스
  $(".book-mark").click(function(){
    $(this).toggleClass("on");
  });


  // 지하철 슬라이더
  $(".subway-slider").slick({
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    swipe:true,
    SwipeToSlide: true,
    draggable: true,

    touchMove: true,
    touchThreshold: 1,
    pauseOnHover:true,
    pauseOnFocus:true,
    centerMode: true,
    centerPadding: '0px',

    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 1600, //화면 사이즈 1600px
        settings: { slidesToShow:6 }
      },
      {
        breakpoint: 1400, //화면 사이즈 1200px
        settings: { slidesToShow:5 }
      },
      {
        breakpoint: 992, //화면 사이즈 992px
        settings: { slidesToShow:4, centerMode: true, centerPadding: '60px' }
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: { slidesToShow:3, centerMode: true, centerPadding: '70px' }
      },
      {
        breakpoint: 650, //화면 사이즈 650px
        settings: { slidesToShow:3, centerMode: true, centerPadding: '50px' }
      },
      {
        breakpoint: 550, //화면 사이즈 550px
        settings: { slidesToShow:2, centerMode: true, centerPadding: '70px' }
      },
      {
        breakpoint: 420, //화면 사이즈 576px
        settings: { slidesToShow:1, centerMode: true, centerPadding: '90px' }
      },
    ]

  });

  // 파트너 소개 슬라이더 강남구
  $(".partner-introduce-slider").slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    SwipeToSlide: true,
    touchThreshold: 1,
    swipe:true,
    draggable: true,
    touchMove: true,
    pauseOnHover:false,
    pauseOnDotsHover: false,
    pauseOnFocus:false,

    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 1200, //화면 사이즈 1200px
        settings: {
          slidesToShow:5
        }
      },
      {
        breakpoint: 992, //화면 사이즈 992px
        settings: {
          slidesToShow:4
        }
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          slidesToShow:4
        }
      },
      {
        breakpoint: 580, //화면 사이즈 576px
        settings: {
          slidesToShow:3
        }
      },
    ]

  });

  // 파트너 소개 슬라이더 서초구
  $(".partner-introduce-slider-2").slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    SwipeToSlide: true,
    touchThreshold: 1,
    swipe:true,
    draggable: true,
    touchMove: true,
    pauseOnHover:false,
    pauseOnDotsHover: false,
    pauseOnFocus:false,

    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 1200, //화면 사이즈 1200px
        settings: {
          slidesToShow:5
        }
      },
      {
        breakpoint: 992, //화면 사이즈 992px
        settings: {
          slidesToShow:4
        }
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          slidesToShow:4
        }
      },
      {
        breakpoint: 580, //화면 사이즈 576px
        settings: {
          slidesToShow:3
        }
      },
    ]

  });



  $(".pop-slider").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    swipe:true,
    SwipeToSlide: true,
    draggable: true,

    touchMove: true,
    touchThreshold: 5,
    pauseOnHover:false,
    pauseOnDotsHover: false,
    pauseOnFocus:false,
    centerMode: true,
    centerPadding: '0px',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]

  });


// 드랍다운
  $(".dropdown-toggle").click(function(event) {
    event.stopPropagation();
    var parent = $(this).parent(".top-dropdown");
    $('.top-dropdown').not(parent).removeClass("open");
    parent.toggleClass("open");
    $(".btn_tnb").toggleClass("on");
  });
  $(window).click(function() {
    $(".top-dropdown").removeClass("open");
    $(".btn_tnb").removeClass("on");
  });










  // 	이미지 클릭시 해당 이미지 모달
  $(".m-img").click(function() {
    $(".modal-img").show();
    // 해당 이미지 가져오기
    var imgSrc = $(this).children("img").attr("src");
    var imgAlt = $(this).children("img").attr("alt");
    $(".modalBox img").attr("src", imgSrc);
    $(".modalBox img").attr("alt", imgAlt);

    // 해당 이미지 텍스트 가져오기
    // var imgTit =  $(this).children("p").text();
    // $(".modalBox p").text(imgTit);

    // 해당 이미지에 alt값을 가져와 제목으로
    //$(".modalBox p").text(imgAlt);
  });

  //.modal안에 button을 클릭하면 .modal닫기
  $(".modal-img button").click(function() {
    $(".modal-img").hide();
  });

  //.modal밖에 클릭시 닫힘
  $(".modal-img").click(function(e) {
    if (e.target.className != "modal-img") {
      return false;
    } else {
      $(".modal-img").hide();
    }
  });

  //datepicker
  $(".datepicker").each(function() {
    $(this).datepicker({
      dateFormat: 'yy-mm-dd',
      showOtherMonths: true,
      showMonthAfterYear: true,
      yearSuffix: ".",
      monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      buttonImageOnly: true
    });
    // $(this).datepicker('setDate', 'today');
  });


});