'use strict';

/* 모달팝업 */
var startPop = function () {
  var winW = $(window).width();
  if (winW > 1024) {
    $('.start_pop').draggable({
      handle: '.modal-header',
      containment: 'html'
    });
  }
}

/* loading image */
$(window).on('load', function () {
  $('.loading-image').fadeOut(300);
});


/* GNB */
/*
var gnbdrop = {
  init: function () {
    // this.gnbdrop_all(); //모든 2depth+배경 노출
    // this.gnbdrop_box(); //호버한 1depth>link의 2depth 박스형태로 노출
    // this.gnbdrop_line(); //호버한 1depth>link의 2depth + 배경이 노출
  },
  gnbdrop_all: function () {
    //모든 2depth+배경 노출
    var $nav_bg = $('.nav__bg'),
    // $header = $('.header'),
      $nav_link = $('.header .nav .depth-1').children('.link'),
      $nav_drop = $('.header .nav .nav-list--depth2');

      $('.header .nav').each(function () {
        var maxHeight = 0;

        $(this)
        .find('.nav-list--depth2')
        .each(function () {
          if ($(this).outerHeight() > maxHeight) {
            maxHeight = $(this).outerHeight();
          }
        });

        $nav_bg.height(maxHeight);

        $(this)
        .find($nav_link)
        .each(function (index) {
          $(this).on('mouseover focus', function () {
            // $header.addClass('hover');
            $nav_bg.stop(false,true).fadeIn(200,"linear"); //slideDown(200);
            $nav_drop.stop(false,true).fadeIn(200,"linear"); //slideDown(200);
          });
        });

      $('.header').on('mouseleave', function () {
        // $header.removeClass('hover');
        $nav_drop.stop(false,true).fadeOut(200,"linear"); //slideUp(200);
        $nav_bg.stop(false,true).fadeOut(200,"linear"); //slideUp(200);
        });
      });
  },

  gnbdrop_box: function () {
    //호버한 1depth>link의 2depth 박스형태로 노출
    var $nav_link = $('.header .nav .depth-1').children('.link'),
      $nav_drop = $('.header .nav .nav-list--depth2');
    $('.header .nav').each(function () {
      $(this)
        .find($nav_link)
        .each(function (index) {
          $(this).on('mouseover focus', function () {
            if ($(this).next().length > 0) {
              $nav_drop.stop(false, true).fadeOut(100);//slideUp();
              $(this).next().stop(false, true).fadeIn(100);//slideDown();
            } else {
              $nav_drop.stop(false, true).fadeOut(100);//slideUp();
            }
          });
        });
      $(this).on('mouseleave', function () {
        $nav_drop.stop(false, true).fadeOut(100);//slideUp();
      });
    });
  },

  gnbdrop_line: function () {
    //호버한 1depth>link의 2depth + 배경이 노출
    var $nav_bg = $('.nav__bg'),
      $nav_link = $('.depth-1').children('.link'),
      $nav_drop = $('.nav-list--depth2');
    $('.header .nav').each(function () {
      var $nav_bg_height = $nav_drop.innerHeight();
      $nav_bg.height($nav_bg_height);
      $(this)
        .find($nav_link)
        .each(function (index) {
          $(this).on('mouseover focus', function () {
            if ($(this).next().length > 0) {
              $nav_drop.stop(false, true).hide();
              $nav_bg.stop(false, true).show();
              $(this).next().stop(false, true).css('archive','flex');//show();
            } else {
              $nav_drop.stop(false, true).hide();
              $nav_bg.stop(false, true).hide();
            }
          });
        });
      $(this).on('mouseleave', function () {
        $nav_drop.stop(false, true).hide();
        $nav_bg.stop(false, true).hide();
      });
    });
  },
};
*/

/* 모바일 네비게이션 */
var navMobile = {
  init: function () {
    this.nav_mobile_btn(); // 모바일네비 토글
    this.nav_mobile_active(); //활성화된 메뉴 열어두기
    this.nav_mobile_down(); //하위메뉴가 있는 항목 찾아서 addClass
    this.nav_mobile_action(); // 아코디언 메뉴
  },
  nav_mobile_btn: function () {
    var $navBtn = $('.nav-mobile__btn'),
        $navBg = $('.nav-mobile__bg'),
        $nav = $('.nav-mobile');
    var toggleNav = function () {
      $navBg.fadeToggle(200, "linear");
      $nav.toggleClass('active');
    };
    $navBtn.on('click', function () {
      toggleNav();
    });
    $navBg.on('click', function () {
      toggleNav();
    });
  },
  nav_mobile_active: function () {
    //활성화된 메뉴 열어두기(1depth)
    // $('.nav-mobile .depth-1 > .link.on').next('.nav-list--depth2').show();
    // $('.nav-mobile .depth-1 > .link.on').addClass('active');
    $('.nav-mobile .depth-1 > .link.on,.nav-mobile .depth-2 > .link.on').addClass('active').next().show();
  },
  nav_mobile_down: function () {
    // 하위메뉴가있는 메뉴에 드롭다운 표시를 위한 클래스 붙이기
    $('.nav-mobile .depth-1, .nav-mobile .depth-2').each(function () {
      if ($(this).children('').next().length > 0) {
        $(this).addClass('_down');
      } else {
        $(this).removeClass('_down');
      }
    });
  },
  nav_mobile_action: function () {
    var $depth1 = $('.nav-mobile .depth-1'),
        $depth2 = $('.nav-mobile .depth-2'),
        $depth2_list = $('.nav-mobile .nav-list--depth2'),
        // $depth3 = $('.nav-mobile .depth-3'),
        $depth3_list = $('.nav-mobile .nav-list--depth3');

    $depth1.children('.link').click(function () {
      if ($(this).next().length > 0) {
        if ($(this).next().css('display') === 'none') {
          $depth2.find('.link').removeClass('active');
          $depth1.children('.link').removeClass('active');
          $(this).addClass('active');
          $depth3_list.hide();
          $depth2.find('.link').removeClass('active');
          $depth2_list.slideUp(300);
          $(this).next().stop(false, true).slideDown(300);
        } else {
          $depth2.find('.link').removeClass('active');
          $(this).next().slideUp(200);
          $depth1.children('.link').removeClass('active');
        }
        return false;
      } else {
      }
    });

    $depth2.children('.link').click(function () {
      if ($(this).next().length > 0) {
        if ($(this).next().css('display') === 'none') {
          $depth3_list.find('.link').removeClass('active');
          $depth3_list.stop(false, true).slideUp(300);
          $(this).addClass('active');
          $(this).next().stop(false, true).slideDown(300);
        } else {
          $depth3_list.find('.link').removeClass('active');
          $(this).removeClass('active');
          $(this).next().stop(false, true).slideUp(300);
        }
        return false;
      } else {
      }
    });
  },
};

/* 서브 네비게이션 */
var subNav = {
  init: function () {
    this.depth_clone();
    this.drop_down();
  },
  depth_clone: function () {
    var $depth1Active = $('.nav').find('.depth-1 > .link'); // 1dp 가져오기
    var $depth2Active = $('.nav').find('.depth-1 > .link.on').next().find('.depth-2 > .link'); //활성화된 2depth
    var $depth3Active = $('.nav').find('.depth-2 > .link.on').next().find('.depth-3 > .link'); //활성화된 3depth

    // console.log(depth2Active);
    var $depth1List = $('.sub-nav-clone--depth1'); //depth1Active를 복사해 넣을 컨테이너
    var $depth2List = $('.sub-nav-clone--depth2'); //depth2Active를 복사해 넣을 컨테이너
    var $depth3List = $('.sub-nav-clone--depth3'); //depth3Active를 복사해 넣을 컨테이너

    //1뎁스 클론
    var $depth1Clone = $depth1Active.clone();
    //1뎁스 클론에 루프 하여 li생성후 넣기
    $.each($depth1Clone, function (index, ele) {
      var $li = $('<li class="item"></li>');
      var li = $li.appendTo($depth1List);
      $(ele).appendTo(li);
    });

    //2뎁스 클론
    var $depth2Clone = $depth2Active.clone();
    //2뎁스 내용 넣기
    $.each($depth2Clone, function (index, ele) {
      var $li = $('<li class="item"></li>');
      var li = $li.appendTo($depth2List);
      $(ele).appendTo(li);
    });

    //3뎁스 클론
    var $depth3Clone = $depth3Active.clone();
    //3뎁스 내용 넣기
    $.each($depth3Clone, function (index, ele) {
      var $li = $('<li class="item"></li>');
      var li = $li.appendTo($depth3List);
      $(ele).appendTo(li);
    });
  },

  drop_down: function () {
    var $dropDown = $('.sub-nav--dropdown .sub-nav__item'),
        $dropDownBtn = $('.sub-nav__button'),
        $dropDownList = $('.sub-nav__drawer');

    $dropDown.each(function () {
      $(this)
          .find($dropDownBtn)
          .click(function () {
            if ($(this).hasClass('on') == true) {
              $(this).removeClass('on');
              $(this).next().stop(false, true).slideUp(200);
            } else {
              $dropDownList.stop(false, true).hide();
              $dropDownBtn.removeClass('on');
              $(this).next().stop(false, true).slideDown(100);
              $(this).addClass('on');
            }
            return false;
          });
    });
  },
};

/* 서브네비게이션 스크롤 형태 */
var subNavScroll = {
  init: function () {
    this.sticky_nav();
  },

  sticky_nav: function () {
    var $subNav = $('.sub-nav--sticky'),
        $subNavWrap = $('.sub-nav--sticky .sub-nav__wrap');
    if ($subNav.length > 0) {
      var subNavOffset = $subNav.offset(),
          // subNavTop = subNavOffset.top;
          subNavTop = subNavOffset.top - $('.header').outerHeight(); // #헤더 고정형일때

      if ($(window).outerWidth() > 1024) {
        if ($(window).scrollTop() > subNavTop) {
          $subNav.addClass('fix');
          $subNavWrap.css('top', $('.header').outerHeight()); //#헤더 고정형일때
        } else {
          $subNav.removeClass('fix');
          $subNavWrap.css('top', 0); //#헤더 고정형일때
        }
      } else {
        if ($(window).scrollTop() > subNavTop) {
          $subNav.addClass('fix');
        } else {
          $subNav.removeClass('fix');
        }
      }
    }
  },
};

function getAttributes($node) {
  var attrs = {};
  $.each($node[0].attributes, function (index, attribute) {
    attrs[attribute.name] = attribute.value;
  });

  return attrs;
}

/* Magnific 팝업 */
var magnificPop = {
  init: function () {
    this.ajax(); //ajax 팝업
  },
  ajax: function () {
    $('.popup-link').magnificPopup({
      type: 'ajax',
      closeOnBgClick: false,
      mainClass: 'mfp-fade',
      callbacks: {
        parseAjax: function (mfpResponse) {
          var $content = $(this.content[0]);
          var dataList = '';
          var data = this.currItem.el[0].dataset;

          dataList += '<div class="mfp-data-list"';
          for (var i=0; i<Object.keys(data).length; i++) {
            dataList += 'data-' + Object.keys(data)[i] + '="'+ data[Object.keys(data)[i]] +'"';
          }
          dataList += '></div>\n';

          mfpResponse.data = dataList + mfpResponse.data;
        },
        ajaxContentAdded: function () {
          var $content = $(this.content[0]);
          var $pop = $content.find('.popup-in-popup');
          var aURL = '';

          if ($pop.length > 0) {
            aURL = $pop.attr('href');

            $pop.on('click', function (e) {
              e.preventDefault();

              $.ajax({
                url: aURL,
                dataType: 'html',
                success: function (data) {
                  var item = '<div class="pop-in-pop">';
                  item += data;
                  item += '</div>';

                  /* HTML append */
                  $content.append(item);

                  /* 닫기 버튼 append */
                  $('.pop-in-pop').children().append('<div class="pop-in-close"><i class="xi-close"></i></div>');

                  /* 닫기 버튼 */
                  $('.pop-in-close').on('click', function () {
                    $('.pop-in-pop').remove();
                  });
                }
              });
            });
          }
        }
      }
    }, 500);
  },
};

$('.sub-body .btn-top').on('click', function () {
  $('html,body').stop().animate({
    'scrollTop': 0
  }, 700);
});

function closePopup() {
  $.magnificPopup.close();
}

$(window).on('scroll', function () {
  subNavScroll.init();
});

$(window).on('resize', function () {
  subNavScroll.init();
});

$(document).on('mouseover', function () {
  magnificPop.init();
});

$(window).on('scroll', function () {
  var scrTop = $(this).scrollTop();
  var winWidth = $(this).outerWidth();
  var winHeight = $(this).outerHeight();

  if ($('.main-body').length) {
    // if (winWidth < 1800 || winHeight < 900) {
      if (scrTop > 0) {
        $('.header').addClass('scrolled');
      } else {
        $('.header').removeClass('scrolled');
      }
    // }
  } else {
    if (scrTop > 0) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }
  }
});

$(document).ready(function () {
  /* Navigation Active */
  $('.nav, .nav-mobile, .sub-nav--bar').navActive({
    depth1: '.depth-1',
    depth2: '.depth-2',
    depth3: '.depth-3',
    activeClass: 'on',
    callback: function () {
      // console.log('callback function');
    },
  });

  $('.link-sitemap').on('click', function(){
    $('.sitemap').toggleClass('on');
    $('.header').toggleClass('gnb-hover');
  });

  /* HEADER GNB Drop */
  $('.header').navDrop({
    type: 'all', // 기본값 udnefiend, 선언하지 않거나 없는 값을 선언할 경우 콘솔창에 경고문구 출력
    background: true, // 기본값 true, 배경 엘리먼트가 없을 경우 콘솔창에 경고문구 출력
    backgroundClass: '.nav__bg', // 기본값 .nav__bg
    backgroundAutoColor: false, // 기본값 false, depth2의 배경색을 자동으로 적용
    effect: 'fade', // 기본값 fade, 옵션값은 fade, slide
    delay: 200, // 출력시 delay
    callback: function () {
    }, // 콜백 함수
  });

  $('.header .nav-list--depth1 > .nav-list__item').on('mouseover', function(){
    var idx = $(this).index();

    $('.header-shortcuts .depth-img img').eq(idx).show().siblings().hide();
  });

  var mainNoticeSwiper = new Swiper('.main-notice .swiper-container', {
      loop: true,
      direction: 'vertical',
      navigation: {
        prevEl: '.main-notice .swiper-button-prev',
        nextEl: '.main-notice .swiper-button-next'
      }
    });

  /*
  $('[data-track]').scrollTrack({
    threshold: 0, // // 임계치 ( * 상단 고정영역 높이 )
    activeClass: 'active', // 활성 클래스 네이밍 (기본값 : active)
  });
  */

  /* 패밀리사이트 셀렉트 */
  $('.family-site select').on('change', function () {
    var selectedValue = $(this).val();

    if (selectedValue !== "") {
      window.open(selectedValue);
    }
  });


  $(window).scrollTrack({
    threshold: 0,
    activeClass: 'active',
  });


  //gnbdrop.init();
  navMobile.init();
  subNav.init();
  subNavScroll.init();
  startPop();

  var wowJS = new WOW().init();

  var wowrap = $('.wowrap');
  $(wowrap).each(function () {
    $(this)
      .find('.wow')
      .each(function (index) {
        var eq = index / 8 + 's';
        $(this).attr('data-wow-delay', eq);
      });
    $(this)
      .find('.animated')
      .each(function (index) {
        var eq = index * 250;
        $(this).attr('data-id', 'delay-' + eq);
      });
  });
  /*
    File Upload
    이벤트 버블링 방지를 위해 on('change') 형태로 변경함.
  */
  $('.file_box > input').on('change', function () {
    var tmp = $(this).val().replace(/^.*\\/, "");
    $(this).siblings('p').text(tmp);
    $(this).siblings('p').addClass('on');
  });

  /* Bullet List */
  $('.bullet-list').each(function () {
    if ($(this).hasClass('bullet-list--decimal')) {
      $(this)
          .children('.item')
          .each(function (index) {
            $(this).prepend('<span class="decimal-number">' + (index + 1) + '</span>');
          });
    }

    $(this).addClass('bullet-type--js');
  });

  /*
  min-width지정 rowscroll
  */
  $('.row-scrollwrap').each(function () {
    var $rowScrollTxtWidth = $(this).data('show'),
        $rowScrollTxt = $(this).find('.row-scrollwrap__txt');
    $(this).find('.row-scrollwrap__content').css('min-width', $rowScrollTxtWidth);
    // 가로스크롤 영역 min-width지정
    var $gutter = 40; // $container-gutter-width (_var.scss)
    if ($(window).width() < $rowScrollTxtWidth + $gutter) {
      $rowScrollTxt.show();
      // 지정된 rowScrollTxtWidth + (gutter) 해상도에서 안내문구 노출
    }
  });

  /* scrollbar js */
  $('.scrollbar-inner').scrollbar();
  // $('.scrollbar-outer').scrollbar();
  // $('.scrollbar-light').scrollbar();

  /* Resizing Check */
  var resizing = resizingCheck({
    breakpoints: {
      414: function () {
        // console.log('414 < width < 768');
      },
      768: function () {
        // console.log('768 < width < 1024');
      },
      1024: function () {
        // console.log('1024 < width < 1200');
      },
      1200: function () {
        // console.log('1200 < width');
      },
    },
  });
});


	// 전체메뉴 토글버튼
	$(document).ready(function () {
		$('.nav-all__btn').on('click', function () {
			$(this).stop().toggleClass('is-active');
		});
	});


//audio
$( function() { $( 'audio' ).audioPlayer(); } );
//Core audio
;(function( $, window, document, undefined )
{
	var isTouch		  = 'ontouchstart' in window,
		eStart		  = isTouch ? 'touchstart'	: 'mousedown',
		eMove		  = isTouch ? 'touchmove'	: 'mousemove',
		eEnd		  = isTouch ? 'touchend'	: 'mouseup',
		eCancel		  = isTouch ? 'touchcancel'	: 'mouseup',
		secondsToTime = function( secs )
		{
			var hours = Math.floor( secs / 3600 ), minutes = Math.floor( secs % 3600 / 60 ), seconds = Math.ceil( secs % 3600 % 60 );
			return ( hours == 0 ? '' : hours > 0 && hours.toString().length < 2 ? '0'+hours+':' : hours+':' ) + ( minutes.toString().length < 2 ? '0'+minutes : minutes ) + ':' + ( seconds.toString().length < 2 ? '0'+seconds : seconds );
		},
		canPlayType	  = function( file )
		{
			var audioElement = document.createElement( 'audio' );
			return !!( audioElement.canPlayType && audioElement.canPlayType( 'audio/' + file.split( '.' ).pop().toLowerCase() + ';' ).replace( /no/, '' ) );
		};

	$.fn.audioPlayer = function( params )
	{
		var params		= $.extend( { classPrefix: 'audioplayer', strPlay: 'Play', strPause: 'Pause', strVolume: '재생' }, params ),
			cssClass	= {},
			cssClassSub =
			{
				playPause:	 	'playpause',
				playing:		'playing',
				time:		 	'time',
				timeCurrent:	'time-current',
				timeDuration: 	'time-duration',
				bar: 			'bar',
				barLoaded:		'bar-loaded',
				barPlayed:		'bar-played',
				volume:		 	'volume',
				volumeButton: 	'volume-button',
				volumeAdjust: 	'volume-adjust',
				noVolume: 		'novolume',
				mute: 			'mute',
				mini: 			'mini'
			};

		for( var subName in cssClassSub )
			cssClass[ subName ] = params.classPrefix + '-' + cssClassSub[ subName ];

		this.each( function()
		{
			if( $( this ).prop( 'tagName' ).toLowerCase() != 'audio' )
				return false;

			var $this	   = $( this ),
				audioFile  = $this.attr( 'src' ),
				isAutoPlay = $this.get( 0 ).getAttribute( 'autoplay' ), isAutoPlay = isAutoPlay === '' || isAutoPlay === 'autoplay' ? true : false,
				isLoop	   = $this.get( 0 ).getAttribute( 'loop' ),		isLoop	   = isLoop		=== '' || isLoop	 === 'loop'		? true : false,
				isSupport  = false;

			if( typeof audioFile === 'undefined' )
			{
				$this.find( 'source' ).each( function()
				{
					audioFile = $( this ).attr( 'src' );
					if( typeof audioFile !== 'undefined' && canPlayType( audioFile ) )
					{
						isSupport = true;
						return false;
					}
				});
			}
			else if( canPlayType( audioFile ) ) isSupport = true;

			var thePlayer = $( '<div class="' + params.classPrefix + '">' + ( isSupport ? $( '<div>' ).append( $this.eq( 0 ).clone() ).html() : '<embed src="' + audioFile + '" width="0" height="0" volume="100" autostart="' + isAutoPlay.toString() +'" loop="' + isLoop.toString() + '" />' ) + '<div class="' + cssClass.playPause + '" title="' + params.strPlay + '"><a href="#">' + params.strPlay + '</a></div></div>' ),
				theAudio  = isSupport ? thePlayer.find( 'audio' ) : thePlayer.find( 'embed' ), theAudio = theAudio.get( 0 );

			if( isSupport )
			{
				thePlayer.find( 'audio' ).css( { 'width': 0, 'height': 0, 'visibility': 'hidden' } );
				thePlayer.append( '<div class="' + cssClass.time + ' ' + cssClass.timeCurrent + '"></div><div class="' + cssClass.bar + '"><div class="' + cssClass.barLoaded + '"></div><div class="' + cssClass.barPlayed + '"></div></div><div class="' + cssClass.time + ' ' + cssClass.timeDuration + '"></div><div class="' + cssClass.volume + '"><div class="' + cssClass.volumeButton + '" title="' + params.strVolume + '"><a href="#">' + params.strVolume + '</a></div><div class="' + cssClass.volumeAdjust + '"><div><div></div></div></div></div>' );

				var theBar			  = thePlayer.find( '.' + cssClass.bar ),
					barPlayed	 	  = thePlayer.find( '.' + cssClass.barPlayed ),
					barLoaded	 	  = thePlayer.find( '.' + cssClass.barLoaded ),
					timeCurrent		  = thePlayer.find( '.' + cssClass.timeCurrent ),
					timeDuration	  = thePlayer.find( '.' + cssClass.timeDuration ),
					volumeButton	  = thePlayer.find( '.' + cssClass.volumeButton ),
					volumeAdjuster	  = thePlayer.find( '.' + cssClass.volumeAdjust + ' > div' ),
					volumeDefault	  = 0,
					adjustCurrentTime = function( e )
					{
						theRealEvent		 = isTouch ? e.originalEvent.touches[ 0 ] : e;
						theAudio.currentTime = Math.round( ( theAudio.duration * ( theRealEvent.pageX - theBar.offset().left ) ) / theBar.width() );
					},
					adjustVolume = function( e )
					{
						theRealEvent	= isTouch ? e.originalEvent.touches[ 0 ] : e;
						theAudio.volume = Math.abs( ( theRealEvent.pageY - ( volumeAdjuster.offset().top + volumeAdjuster.height() ) ) / volumeAdjuster.height() );
					},
					updateLoadBar = setInterval( function()
					{
						barLoaded.width( ( theAudio.buffered.end( 0 ) / theAudio.duration ) * 100 + '%' );
						if( theAudio.buffered.end( 0 ) >= theAudio.duration )
							clearInterval( updateLoadBar );
					}, 100 );

				var volumeTestDefault = theAudio.volume, volumeTestValue = theAudio.volume = 0.111;
				if( Math.round( theAudio.volume * 1000 ) / 1000 == volumeTestValue ) theAudio.volume = volumeTestDefault;
				else thePlayer.addClass( cssClass.noVolume );

				timeDuration.html( '&hellip;' );
				timeCurrent.text( secondsToTime( 0 ) );

				theAudio.addEventListener( 'loadeddata', function()
				{
					timeDuration.text( secondsToTime( theAudio.duration ) );
					volumeAdjuster.find( 'div' ).height( theAudio.volume * 100 + '%' );
					volumeDefault = theAudio.volume;
				});

				theAudio.addEventListener( 'timeupdate', function()
				{
					timeCurrent.text( secondsToTime( theAudio.currentTime ) );
					barPlayed.width( ( theAudio.currentTime / theAudio.duration ) * 100 + '%' );
				});

				theAudio.addEventListener( 'volumechange', function()
				{
					volumeAdjuster.find( 'div' ).height( theAudio.volume * 100 + '%' );
					if( theAudio.volume > 0 && thePlayer.hasClass( cssClass.mute ) ) thePlayer.removeClass( cssClass.mute );
					if( theAudio.volume <= 0 && !thePlayer.hasClass( cssClass.mute ) ) thePlayer.addClass( cssClass.mute );
				});

				theAudio.addEventListener( 'ended', function()
				{
					thePlayer.removeClass( cssClass.playing );
				});

				theBar.on( eStart, function( e )
				{
					adjustCurrentTime( e );
					theBar.on( eMove, function( e ) { adjustCurrentTime( e ); } );
				})
				.on( eCancel, function()
				{
					theBar.unbind( eMove );
				});

				volumeButton.on( 'click', function()
				{
					if( thePlayer.hasClass( cssClass.mute ) )
					{
						thePlayer.removeClass( cssClass.mute );
						theAudio.volume = volumeDefault;
					}
					else
					{
						thePlayer.addClass( cssClass.mute );
						volumeDefault = theAudio.volume;
						theAudio.volume = 0;
					}
					return false;
				});

				volumeAdjuster.on( eStart, function( e )
				{
					adjustVolume( e );
					volumeAdjuster.on( eMove, function( e ) { adjustVolume( e ); } );
				})
				.on( eCancel, function()
				{
					volumeAdjuster.unbind( eMove );
				});
			}
			else thePlayer.addClass( cssClass.mini );

			if( isAutoPlay ) thePlayer.addClass( cssClass.playing );

			thePlayer.find( '.' + cssClass.playPause ).on( 'click', function()
			{
				if( thePlayer.hasClass( cssClass.playing ) )
				{
					$( this ).attr( 'title', params.strPlay ).find( 'a' ).html( params.strPlay );
					thePlayer.removeClass( cssClass.playing );
					isSupport ? theAudio.pause() : theAudio.Stop();
				}
				else
				{
					$( this ).attr( 'title', params.strPause ).find( 'a' ).html( params.strPause );
					thePlayer.addClass( cssClass.playing );
					isSupport ? theAudio.play() : theAudio.Play();
				}
				return false;
			});

			$this.replaceWith( thePlayer );
		});
		return this;
	};
})( jQuery, window, document );