/* **************************************** *
 * default
 * **************************************** */

var skr = null;
var $winW = $(window).width();
var $winH = $(window).height();


/**
/*
gnb
*/
var navFun = {
 init: function() {
  this.navAction();
  this.navAction2();
  // this.navAction2_nav();
  // this.navAction_freeweb();
 },

 navAction: function() {
  var gnb_link_01 = $('.depth .depth01:not(._product)').children('a');
  var gnb_link_02 = $('.sub_menu_list li').children('a');
  var gnb_link_03 = $('.sub_menu_list._product li').children('a');

  var url = window.location.href;
  src = url.split('/')[url.split('/').length - 1].split('.')[0];
  src01 = url.split('/')[url.split('/').length - 2];
  src02 = src.split('?')[0].split('-')[0]; //.slice(0, -3);
  src03 = url.split('/')[url.split('/').length - 1]; //.slice(0, -3);

  gnb_link_01.each(function() {
   var this_href = $(this).attr('href');
   var href = this_href.split('/')[this_href.split('/').length - 2];

   if (href == src01) {
    $(this).addClass('on');
    // $(this).siblings('.depth02_box').addClass('on');
   } else {
    $(this).removeClass('on');
   }
  });
  gnb_link_02.each(function() {
   var this_href = $(this).attr('href');
   var href = this_href.split('/')[this_href.split('/').length - 1].split('.')[0];
   if (href == src02) {
    $(this).addClass('on');
   } else {
    $(this).removeClass('on');
   }
  });

  gnb_link_03.each(function() {
   var this_href = $(this).attr('href');
   var href3 = this_href
    .split('/')[this_href.split('/').length - 1];

   // console.log('href3',href3,'<br>src03',src03);
   if (href3 == src03) {
    $(this).addClass('on');
   } else {
    $(this).removeClass('on');
   }
  });
 },

 navAction2: function() {
  var gnb_link = $('.pc_gnb_wrap .depth01').children('a');
  var all_a = $('.pc_gnb_wrap .gnb-box .all-link');
  var depth_02 = $('.pc_gnb_wrap .depth01 .depth02');
  var gnb_wrap = $('.pc_gnb_wrap');

  var nav_bg = $('.nav_bg_pc');
  var nav_line = $('.nav_line');

  $(gnb_link).each(function(index) {
   $(this).on('mouseover focus', function() {
    if ($(this).next('.depth02').length > 0) {
     $(depth_02).removeClass('on');

     $(this)
      .next('.depth02')
      .addClass('on');

     return false;
    } else {
     $(depth_02).removeClass('on');

     return false;
    }
   });
  });

  $('#header').on('mouseleave', function() {
   $(depth_02).removeClass('on');

   return false;
  });
 }
};

//  mobile smNav
//아코디언

var navMobile = {
 init: function() {
  this.moAction();
 },
 moAction: function() {
  var depth_1 = $('.gnb_mobile .depth01');
  var depth_2 = $('.gnb_mobile .depth02');
  var depth_3 = $('.gnb_mobile .depth03');
  var depth_1_down = $('.gnb_mobile .depth01_down');
  var depth_2_down = $('.gnb_mobile .depth02_down');
  var nav_bg = $('.nav_bg');

  $(depth_2).hide();
  $(depth_3).hide();
  $(nav_bg).hide();

  $(depth_1).each(function() {
   if ($(this).children('div').length > 0) {
    $(this)
     .children('a')
     .click(function() {
      if (
       $(this)
       .next('div')
       .css('display') === 'none'
      ) {
       $(depth_1)
        .children('a')
        .removeClass('selected1');
       $(this).addClass('selected1');
       $(depth_2).slideUp(200);
       $(this)
        .next()
        .stop()
        .slideDown(200);
      } else {
       $(this)
        .next('div')
        .slideUp(200);
       $(depth_1)
        .children('a')
        .removeClass('selected1');
      }

      return false;
     });
   } else {
    $(this)
     .find('a')
     .addClass('no');
   }
  });

  $('.gnb_mobile .lang_list').slideUp(100);

  // 메뉴

  $('.nav_btn').on('click', function() {
   if ($('.gnb_mobile').hasClass('on') === false) {
    $('.gnb_mobile').addClass('on');

    $(nav_bg).fadeIn(300);

    $(this).addClass('on');
   } else {
    $(this).removeClass('on');

    $('.gnb_mobile').removeClass('on');
    $(nav_bg).fadeOut(100);
    $(depth_2).hide();
    $(depth_3).hide();
    $(depth_1)
     .children('a')
     .removeClass('selected1');
    $(depth_2_down)
     .children('a')
     .removeClass('selected2');
   }
  });

  $('.nav_close').on('click', function() {
   $('.gnb_mobile').removeClass('on');
   $(nav_bg).fadeOut(100);
   $(depth_2).hide();
   $(depth_3).hide();
   $(depth_1)
    .children('a')
    .removeClass('selected1');
   $(depth_2_down)
    .children('a')
    .removeClass('selected2');

   $('.gnb_mobile .lang_list').slideUp(100);
  });
 }
};

/*텝*/
var Tab1 = {
 init: function() {
  this.mainTab();
 },
 mainTab: function() {
  $('.tab_area').each(function() {
   var tabBtn = $(this).find('.tab_wrap li a');
   var tab1st = $(this)
    .find('.tab_wrap li')
    .eq(0)
    .find('a');
   var conAll = $(this).find('.tab_con');
   var con1st = $(this)
    .find('.tab_con')
    .eq(0);

   $(tab1st).addClass('on');
   $(conAll).hide();
   $(con1st).show();

   $(tabBtn).click(function() {
    $(conAll).hide();
    tabHref = $(this).attr('href');
    console.log(tabHref);
    $(tabHref).show();
    $(tabBtn).removeClass('on');
    $(this).addClass('on');

    // new WOW().init({});

    return false;
   });
  });
 }
};

/*컨텐츠 보임*/
var conShow = {
 init: function() {
  this.click01(); //로그인
  this.click02(); //사이트맵
  this.click03(); //다국어
  this.click04(); //글로벌 맵
 },
 click01: function() {
  var btn = $('.btn_log_bx');
  var con = $('.log_bx_pop');

  $(btn).on('mouseover', function() {
   $(con).addClass('on');
  });

  $('.right_login_bx').on('mouseleave', function() {
   $(con).removeClass('on');
  });
 },

 click02: function() {
  $('.btn_sitemap').click(function() {
   $(this).toggleClass('on');
   $('#sitemap').toggleClass('on');

   $('.pc_gnb_wrap .depth01 .depth02')
    .stop()
    .slideUp(100);

   return false;
  });
 },

 click03: function() {
  var btn = $('.lang_sel_bx .btn_lang');
  var des = $('.lang_sel_bx .lang_list');
  $(btn).click(function() {
   $(des).slideToggle(200);

   return false;
  });
 },

 click04: function() {
  var btn = $('.global_map .area_bx a');
  var des = $('.global_map .tooltip_bx');

  $(btn).click(function() {
   var thisHref = $(this).attr('href');

   $(thisHref).fadeToggle(100);

   return false;
  });
 }
};

/**
 * qna
 * 아코디언
 */
var qnaFun = {
 init: function() {
  this.q();
 },
 q: function() {
  var qna = $('.qna'),
   header = qna.find('.qna-header'),
   header_a = qna.find('.qna-header a'),
   body = qna.find('.qna-body'),
   faq_chk = '';

  body.hide();

  header.on('click', function(event) {
   event.preventDefault();
   header.removeClass('select');
   header_a.removeClass('select'); //오른쪽 화살표 없애기
   body.hide();

   if (faq_chk != $(this).text()) {
    faq_chk = $(this).text();
    $(this).addClass('select');
    $(this)
     .children('a')
     .addClass('select'); //오른쪽 화살표 생기기
    $(this)
     .next('.qna-body')
     .show();
   } else {
    faq_chk = '';
   }
  });
 }
};

/*이미지 리사이즈*/

var imgResize = {
 init: function() {
  this.Resize01();
  this.Resize02(); //wow
  this.Resize03(); // 이미지
  this.Resize04(); // 드레그
 },

 Resize01: function() {
  var winW = $(window).width();
  var resize_img = $('.img_resize img');

  //png 이미지

  $(resize_img).each(function() {
   var img1 = $(this)
    .attr('src')
    .replace('_m.png', '.png');
   $(this).attr('src', img1);
  });
  if (winW < 1024) {
   $(resize_img).each(function() {
    var img2 = $(this)
     .attr('src')
     .replace('.png', '_m.png');
    $(this).attr('src', img2);
   });
  } else {
   $(resize_img).each(function() {
    var img3 = $(this)
     .attr('src')
     .replace('_m.png', '.png');
    $(this).attr('src', img3);
   });
  }

  //jpg 이미지

  var resize_img2 = $('.img_resize img');

  $(resize_img2).each(function() {
   var img1 = $(this)
    .attr('src')
    .replace('_m.jpg', '.jpg');
   $(this).attr('src', img1);
  });
  if (winW < 767) {
   $(resize_img2).each(function() {
    var img2 = $(this)
     .attr('src')
     .replace('.jpg', '_m.jpg');
    $(this).attr('src', img2);
   });
  } else {
   $(resize_img2).each(function() {
    var img3 = $(this)
     .attr('src')
     .replace('_m.jpg', '.jpg');
    $(this).attr('src', img3);
   });
  }
 },
 Resize02: function() {
  var winW = $(window).width();

  if (winW < 1024) {
   $('.wow').each(function() {
    $(this).removeClass('wow');
   });
  } else {
   $('.wow').each(function() {
    $(this).addClass('wow');
   });
  }
 },

 Resize03: function() {
  var big = $('.demo_index_sec .img_bx img');

  var imgBigH = $(big).width() * 0.5666666;
  $(big).css({
   height: imgBigH
  });
 },

 Resize04: function() {
  if ($winW > 1024) {
   /*팝업 드레그 */

   $('.start_pop').draggable({
    handle: '.modal-body'
   });
  }
 }
};

/*슬라이더*/

var slick = {
 init: function() {
  this.slick_01(); //메인 비주얼
  this.slick_02(); //제품상세

  this.slick_03(); //메인베스트 아이템

 },

 slick_01: function() {
  $('#main_slider').slick({
   autoplay: true,
   // autoplaySpeed: 5000,
   dots: true,
   fade: true,
   arrows: false,
   // vartical: true,
   swipe: true,
   draggable: true,
   speed: 1000,

   responsive: [{
    breakpoint: 1024,
    settings: {
     arrows: false
    }
   }]
  });
 },
 slick_02: function() {


  $('.view_slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   // fade: true,
   asNavFor: '.view_slider_nav',
   autoplay: false,

   prevArrow: '<a href="javascript:" class="view_prev"><i class="xi-angle-left-min"></i></a>',
   nextArrow: '<a href="javascript:" class="view_next"><i class="xi-angle-right-min"></i></a>'
  });




  $('.view_slider_nav').slick({
   slidesToShow: 5,
   arrows: true,
   slidesToScroll: 1,
   asNavFor: '.view_slider',
   dots: false,
   centerMode: false,
   focusOnSelect: true,
   responsive: [{
     breakpoint: 1024,
     settings: {
      slidesToShow: 4,
     }
    },

    {
     breakpoint: 767,
     settings: {
      slidesToShow: 3,
     }
    }
   ]

  });



 },

 slick_03: function() {



  $('.main_best_slider').slick({
   slidesToShow: 4,
   arrows: true,
   slidesToScroll: 1,
   dots: false,
   centerMode: false,
   focusOnSelect: true,

   prevArrow: ".custom_prev",
   nextArrow: ".custom_next",
   responsive: [{
     breakpoint: 1024,
     settings: {
      slidesToShow: 3,
     }
    },

    {
     breakpoint: 480,
     settings: {
      slidesToShow: 2,
     }
    }
   ]

  });

 }
};

/**
 * 硫붾돱 諛�
 */
var menuFun = {
 init: function() {
  this.menu_01();
  this.menu_02();
 },
 menu_01: function() {
  var menu_link = $('.menu-js .menu-btn-js');
  var menu_con = $('.menu-js .menu-con-js');

  //泥ル쾲夷� 硫붾돱
  var menu_title = $('.menu-js .title-con-js');
  var menu_txt = $('.title-js');
  var menu_at = menu_txt.text();
  menu_title.text(menu_at);

  //�먮쾲夷� 硫붾돱
  var menu_title_02 = $('.menu-js .title-con-js-02');
  var menu_txt_02 = $('.title-js-02');

  var menu_txt_02_prd = $('.prd-title-js-02');
  var menu_at_02 = menu_txt_02.text();

  var menu_at_02_prd = $('.prd_list_dep02 li a.on').text(); //현재 위치  텍스트
  menu_title_02.text(menu_at_02);
  menu_txt_02_prd.text(menu_at_02_prd);

  // console.log(menu_at_02_prd)

  menu_link.on('click', menuOpen);
  $('.main.subpage').on('click', function() {
   menu_con.slideUp(200);
  });
  $('.menu-js').on('mouseleave', function() {
   menu_con.slideUp(200);
  });

  function menuOpen() {
   if (
    $(this)
    .siblings('.menu-con-js')
    .css('display') === 'none'
   ) {
    $(this)
     .siblings('.menu-con-js')
     .slideDown(200);
   } else {
    $(this)
     .siblings('.menu-con-js')
     .slideUp(200);
   }
  }
 },

 menu_02: function() {
  var btn = $('.btn_sub_menu');
  var des = $('.sub_menu_list .des_con');
  var btn_list = $('.sub_menu_list .des_con a');

  $('.sub_menu_list > li').each(function() {
   var onLinkText = $(this)
    .find('.active')
    .text(); //현재 위치  텍스트

   console.log('링크 이름 ', onLinkText);

   $(this)
    .find('.btn_sub_menu')
    .text(onLinkText);

   $(this)
    .find('.btn_sub_menu')
    .click(function() {
     $('.sub_menu_list .des_con')
      .stop()
      .slideUp();

     $(btn).removeClass('on');

     $(this)
      .next()
      .stop()
      .slideToggle();
     $(this).toggleClass('on');
     return false;
    });

   $(this)
    .find('.des_con a')
    .click(function() {
     $(this)
      .find('.des_con a')
      .removeClass('active');

     var onLinkTextThis = $(this).text();

     $(this).addClass('active');

     $(this)
      .parent()
      .parent()
      .parent()
      .prev()
      .text(onLinkTextThis);

     $(this)
      .parent()
      .parent()
      .parent()
      .slideUp();

     $(btn).removeClass('on');
    });
  });
 }
};

/* 파일첨부 */

function addFile_init() {
 function file_upload() {
  var tmp = $(this).val();
  $(this)
   .siblings('p')
   .text(tmp);
 }
 $('.file_box > input').change(file_upload);
}

//ajax pop
var magnificPop = {
 init: function() {
  this.pop_01(); //ajax 팝업
  this.pop_02(); //ajax 팝업
  this.pop_03(); //갤러리 팝업
 },

 pop_01: function() {
  $('.popup_link').magnificPopup({
   type: 'ajax',
   closeOnBgClick: false,

   callbacks: {
    ajaxContentAdded: function() {
     slick.slick_05(); //이벤트 상세 뷰
     magnificPop.pop_01(); //ajax 팝업
     addFile_init(); //첨부파일
    },
    beforeOpen: function() {

    },

    open: function() {
     $('body').addClass('m_fixed');
    },

    close: function() {
     $('body').removeClass('m_fixed');
    }
   }
  });
 },
 pop_02: function() {
  $('.popup_link_fixed').magnificPopup({
   type: 'ajax',
   overflowY: 'scroll',

   removalDelay: 300,
   mainClass: 'my_mfp_zoom_in',
   callbacks: {
    ajaxContentAdded: function() {
     $('.pop_con').removeClass('out');

     $('.pop_con').addClass('open');

     $('.mfp-close').click(function() {
      $('.pop_con').removeClass('open');
      $('.pop_con').addClass('out');
     });
    },
    beforeOpen: function() {},

    open: function() {
     $('body').addClass('m_fixed');
    },

    close: function() {
     $('body').removeClass('m_fixed');
    }
   }
  });
 },

 pop_03: function() {
  $('.popup_gallery').magnificPopup({
   delegate: 'a',
   type: 'image',
   tLoading: 'Loading image #%curr%...',
   mainClass: 'mfp-img-mobile',
   gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
    // tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    // titleSrc: function(item) {
    //     return item.el.attr('title') + '<small></small>';
    // }
   }
  });
 }
};

/*툴팁
 */

var tooltip = {
 init: function() {
  this.tooltip(); //상단 팝업
 },

 tooltip: function() {
  $('.btn_tooltip').tooltipster({
   delay: 0,
   // maxWidth: 500,
   speed: 100,
   interactive: true,

   animation: 'fade',
   trigger: 'click'
  });
 }
};

var subFun = {
 init: function() {
  this.type03();
 },
 type03: function() {
  var btn = $('.btn_sub_menu');
  var con = $('.sub_menu_list');

  $(btn).click(function() {
   $(con).slideToggle();
  });
  var btn = $('.sub_menu_type_c .btn_sub_menu');
  var des = $('.sub_menu_type_c .updown_list .des_con');
  var btn_list = $('.sub_menu_type_c .updown_list .des_con a');

  //dep1
  var onDep01 = $('.gnb_wrap .depth01 > a.on').text();
  // $('.sub_menu_type_c .li_01 .btn_sub_menu').text(onDep01);

  $('.sub_menu_type_c .updown_list > li').each(function() {
   $(this)
    .find('.btn_sub_menu')
    .click(function() {
     if ($(this).hasClass('on') == true) {
      $(this).removeClass('on');
      $(this)
       .next()
       .stop()
       .hide();
     } else {
      $(des)
       .stop()
       .hide();
      $(btn).removeClass('on');
      $(this)
       .next()
       .stop()
       .show();
      $(this).addClass('on');
     }
     return false;
    });
   $(this)
    .find('.des_con a')
    .click(function() {
     $(this)
      .find('.des_con a')
      .removeClass('on');
     $(this).addClass('on');
     $(this)
      .parent()
      .parent()
      .parent()
      .hide();
     $(btn).removeClass('on');
    });
  });
 }
};

/**
 * lnbFun :
 *
 */

var lnbFun = {
 init: function() {
  this.lnbClick();
 },
 lnbClick: function() {
  var lnb_01 = $('.lnb   ul  li'),
   lnb_02 = $('.lnb .lnb_depth02'),
   lnb_03 = $('.lnb  ul  li  .lnb_depth03'),
   last_fo = $('.lnb .lastfocus'), //포커스
   first_fo = $('.lnb .firstfocus'),
   lnburl = location.pathname;

  var url = window.location.href; //링크

  url02 =
   url
   .split('/')[url.split('/').length - 1].split('-')[0]
   .split('.')[0] + url.split('/')[url.split('/').length - 1].slice(-21); //-view 다음부터 제거 //.html? 카테고리

  //1뎁스 클릭

  $(lnb_01)
   .find('.lnb_tit')
   .click(function() {
    if ($(this).next('ul').length > 0) {
     //2뎁스 있을 경우

     //  alert("exist!")

     console.log('exist');

     if (
      $(this)
      .next('ul')
      .css('display') === 'none'
     ) {
      $(lnb_01)
       .children('.lnb_tit')
       .removeClass('click');
      $(this).addClass('click');
      $(lnb_02)
       .children('.lnb_tit')
       .removeClass('click');
      $(lnb_02).slideUp(300);
      $(this)
       .next()
       .stop()
       .slideDown(300);
     } else {
      $(this)
       .next('ul')
       .slideUp(200);
      $(lnb_01)
       .children('.lnb_tit')
       .removeClass('click');
     }
     return false;
    } else {
     //2뎁스 없을 경우

     // alert("Doesn't exist!")
     console.log("Doesn't exist");
     $(this).addClass('click');
    }

    return false;
   });

  // 상태 값

  $(lnb_02)
   .children('li')
   .children('a')
   .each(function() {
    var this_href = $(this).attr('href');
    var href = this_href.split('/')[this_href.split('/').length - 1];
    // console.log("lnb 두번째" + href);
    // console.log("lnb url 2 " + url02);

    // 하위메뉴 링크가 같을경우

    // if (url02 == href) {

    //   console.log("exist!");

    //   $(this).parent().parent().stop().slideDown(0); // 선택된 항목의 링크값의 ul 보이기

    //   $(this).parent().parent().prev().addClass('on'); // 선택된 항목의 링크값의 부모 title 활성화

    //   $(this).addClass('on');

    // }
    //하위메뉴 링크가 on일경우

    if ($(this).hasClass('on') === true) {
     $(this)
      .parent()
      .parent()
      .stop()
      .slideDown(0); // 선택된 항목의 링크값의 ul 보이기

     $(this)
      .parent()
      .parent()
      .prev()
      .addClass('on'); // 선택된 항목의 링크값의 부모 title 활성화
    }
   });
 }
};

/*wow */

function wow_init() {
 new WOW().init(wowOption);

 var wowOption = {
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 150,
  mobile: true, // default
  live: true // default
 };

 $('.wow_wrap').each(function() {
  $(this)
   .find('.wow')
   .each(function(index) {
    var up = (index + 1) * 0.1 + 's';
    $(this).attr('data-wow-delay', up);
   });
 });
}

//datepicker

function datepicker_init() {
 $('.datepicker').datepicker({
  showMonthAfterYear: true,
  monthNames: [
   '1월',
   '2월',
   '3월',
   '4월',
   '5월',
   '6월',
   '7월',
   '8월',
   '9월',
   '10월',
   '11월',
   '12월'
  ],
  monthNamesShort: [
   '1월',
   '2월',
   '3월',
   '4월',
   '5월',
   '6월',
   '7월',
   '8월',
   '9월',
   '10월',
   '11월',
   '12월'
  ],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],

  weekHeader: 'Wk',
  dateFormat: 'yy-mm-dd',
  prevText: '이전 달',
  nextText: '다음 달',
  changeMonth: true,
  changeYear: true,
  beforeShowDay: no_view
 });

 function no_view(date) {
  var tmp_chk = 1;
  if (date.getDate() == '21' && date.getMonth() == '11') {
   tmp_chk = 0;
  }
  return [tmp_chk != 0, ''];
 }
}

//header
function header_init() {

 if ($('#header').length > 0 && !$('.detail_tab').length && !$('.member_top').length ) {

  var headerTop = $('#header').offset().top;
  $(window).scroll(function() {
   if ($(this).scrollTop() > 10) {
    $('#header').addClass('on');
   } else {
    $('#header').removeClass('on');
   }
  });

  $(window).trigger('scroll');

 }
}

/*커스텀 체크박스 */
(function() {
 $('.custom_chk > input:checkbox').click(function() {
  if ($(this).is(':checked')) {
   $(this).prop('checked', true);
   $(this)
    .parent()
    .addClass('on');
  } else {
   $(this).prop('checked', false);
   $(this)
    .parent()
    .removeClass('on');
  }
 });


 $('.custom_radio > input:radio').click(function() {
  $('input:radio')
   .parent()
   .removeClass('on');
  $('input:radio:checked')
   .parent()
   .addClass('on');
 });
})();




$(document).ready(function() {
 /* ********************************************* *
  * init
  * ********************************************* */
 navFun.init(); // 네비 제이쿼리
 navMobile.init(); //모바일 네비
 Tab1.init(); //메인 텝
 conShow.init(); //컨텐츠
 qnaFun.init(); //qna
 imgResize.init(); //이미지 리사이즈
 magnificPop.init();

 slick.init(); //슬라이드
 menuFun.init(); //메뉴 바
 subFun.init(); //메뉴텝
 lnbFun.init(); //lnb
 addFile_init(); //첨부파일
 wow_init(); //animate
 datepicker_init(); //달력
 header_init();

 /* **************************************** *
  * ON RESIZE
  * **************************************** */
 $(window).resize(function() {
  imgResize.init(); //이미지 리사이즈
 });






 /* ********************************************* *
  * HELPERS
  * ********************************************* */
 // SIMPLE MOBILE CHECK

 function is_mobile() {
  return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
   navigator.userAgent || navigator.vendor || window.opera
  );
 }

 function is_mobile_ios() {
  return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
 }

 // SIMPLE BROWSER CHECK
 function is_browser_chrome() {
  return /Chrome/.test(navigator.userAgent);
 }

 function is_browser_safari() {
  return (
   /Safari/.test(navigator.userAgent) &&
   /Apple Computer/.test(navigator.vendor)
  );
 }

 function is_browser_firefox() {
  return /Firefox/.test(navigator.userAgent);
 }

 function is_browser_ie() {
  return (
   navigator.appName == 'Microsoft Internet Explorer' ||
   (navigator.appName == 'Netscape' &&
    new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})').exec(
     navigator.userAgent
    ) !== null)
  );
 }

 function is_browser_ie9() {
  return $.browser.msie && parseInt($.browser.version, 10) <= 9 ?
   true :
   false;
 }

 // SIMPLE OS CHECK
 function is_mac_os() {
  return navigator.platform.indexOf('Mac') > -1;
 }

 // SIMPLE SCREEN CHECK
 function is_screen(max_width) {
  if (!!window.matchMedia) {
   return window.matchMedia('(max-width:' + max_width + 'px)').matches;
  }
 }




 (function($) {
  skel.breakpoints({
   xlarge: '(max-width: 1680px)',
   large: '(max-width: 1280px)',
   medium: '(max-width: 1024px)',
   small: '(max-width: 736px)',
   xsmall: '(max-width: 480px)'
  });

  var $window = $(window),
   $body = $('body');


  // Mobile?
  if (skel.vars.mobile) $body.addClass('is-mobile');
  else
   skel
   .on('-medium !medium', function() {
    $body.removeClass('is-mobile');
   })
   .on('+medium', function() {
    $body.addClass('is-mobile');



   });

 });

});
// End jQuery

$(function() {
 //로딩중
 var $window = $(window),
  $body = $('body');

 $body.addClass('is-loading');

 $window.on('load', function() {
  window.setTimeout(function() {
   $body.removeClass('is-loading');
  }, 100);
 });
});

/* 하위 브라우져 경고창*/
var IE = document.all ? true : false;

function IE_Ver() {
 if (navigator.appName.match(/Explorer/i)) {
  return navigator.appVersion.match(/MSIE \d+.\d+/)[0].split(' ')[1];
 } else return 0;
}
if (IE && IE_Ver() < 10) {
 // IE의 브라우저를 적는 부분

 alert(
  '인터넷익스플로러 버전이 10 이하입니다 현재 브라우저에서는 정상적인 이용이 불가능 합니다.  보안과 최적화를 위해 업데이트 해주세요!'
 );

 window.location.href =
  'https://support.microsoft.com/ko-kr/help/17621/internet-explorer-downloads';
}




/*
 * Youtube video auto-resizer script
 * Created by Skipser.com
 */

$(document).ready(function() {
 if (typeof YOUTUBE_VIDEO_MARGIN == 'undefined') {
  YOUTUBE_VIDEO_MARGIN = 5;
 }
 $('iframe').each(function(index, item) {
  if (
   $(item)
   .attr('src')
   .match(/(https?:)?\/\/www\.youtube\.com/)
  ) {
   var w = $(item).attr('width');
   var h = $(item).attr('height');
   var ar = (h / w) * 100;
   ar = ar.toFixed(2);
   //Style iframe
   $(item).css('position', 'absolute');
   $(item).css('top', '0');
   $(item).css('left', '0');
   $(item).css('width', '100%');
   $(item).css('height', '100%');
   $(item).css('max-width', w + 'px');
   $(item).css('max-height', h + 'px');
   $(item).wrap(
    '<div style="max-width:' +
    w +
    'px;margin:0 auto; padding:' +
    YOUTUBE_VIDEO_MARGIN +
    'px;" />'
   );
   $(item).wrap(
    '<div style="position: relative;padding-bottom: ' +
    ar +
    '%; height: 0; overflow: hidden;" />'
   );
  }
 });
});


// 레이어 오픈

function modalLayer($this) {
 var layer = $this;
 $(layer).fadeIn();
 $(layer).find('.modal_inner').addClass('transition_in');
 $('body').append('<div class="layer_backdrop">' + '</div>');
 // $('body').addClass('fixed');

}


//레이어 공통닫기

function LayerClose() {
 var layer = $('.layer_container'),
  backdrop = $('.layer_backdrop');
 $(layer).fadeOut();
 $(layer).find('.modal_inner').removeClass('transition_in')
 $(backdrop).remove();
 // $('body').removeClass('fixed');
}



//mypage date click
$('.order_search_date a').on('click', function() {
 $('.order_search_date a').removeClass('on');
 $(this).addClass('on');
});





//frame resize

$(function() {



 //프레임높이값
 $('.frame').load(function() {

  $(window).resize(function() {

   if ($winW < 1024) {

    //초기화
    $('.frame').css('height', 0)
    frameH = $('.frame').contents().height();
    resizeH(frameH);
   } else {
    //초기화
    $('.frame').css('height', 0)
    frameH = $('.frame').contents().height();

    resizeH(frameH);

   }


  });

  function resizeH($height) {

   console.log("frame load " + $height);
   $('.frame').css("height", $height);

  }

  $(window).trigger('resize')


 });


});



//   $(document).on('click',function() {


//   $('.add_area').append("<a href='../pop/review.html' class='popup_link'>팝업</a>");

//   });

//   $(document).on('click','.popup_link',function() {

//   magnificPop.init(); // 아작스팝업

//   $('.popup_link').magnificPopup('open');

//   $.magnificPopup.open();

// });



