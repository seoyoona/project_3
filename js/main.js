$(document).ready(function(){
    
    // 로드 전 최상단으로
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    // PC때 모바일 스크린 숨김
    $(function(){
        if($(window).width() > 1280){
            $(".mobile-screen").removeClass("active");
            $(".m_btn").removeClass("active");
            $(".mobile-inner").stop().fadeOut();
        }

        $(window).resize(function(){
            if($(window).width() > 1280){
                $(".mobile-screen").removeClass("active");
                $(".m_btn").removeClass("active");
                $(".mobile-inner").stop().fadeOut();
            }
        })
    })

    // 최근 스크롤 값
    let beforeScroll = 0;

    // 상단스크롤 - 헤더보임 & 하단스크롤 - 헤더숨김
    $(window).scroll(function(){
        if(beforeScroll < $(window).scrollTop()){
            $("#header").css("top",-$("#header").outerHeight());
            beforeScroll = $(window).scrollTop();
        }
        else {
            $("#header").css("top",0);
            beforeScroll = $(window).scrollTop();
        }
        // 헤더 배경
        if($(window).scrollTop() > 80){
            $("#header").addClass("on");
        }
        else{
            $("#header").removeClass("on");
        }
    })

    // GNB 클릭 시 섹션 이동
    $("#header .gnb li a, .mobile-screen .link-list > li:not(.depth) > a, .link-list > li > ul > li a").on("click",function(){
        let st = $($(this).attr("href")).offset().top;
        $("html, body").stop().animate({scrollTop : st}, 700)
        return false;
    })

    $(".section01 a.aa").click((e) => {
        $("html, body").stop().animate({scrollTop : $(".section11").offset().top}, 700);
        return false;
    })

    // 모바일 GNB 클릭 시 닫기 트리거
    $(".mobile-screen .link-list > li:not(.depth) > a, .link-list > li > ul > li a").on("click",function(){
        $(".m_btn").trigger("click")
    })

    // 모바일 버튼 클릭 시
    $(".m_btn").on("click",function(){
        // 모바일 스크린 ON / OFF
        $(this).toggleClass("active")
        $(".mobile-screen").toggleClass("active")
        $(".mobile-inner").stop().fadeToggle();
        $(".link-list .depth").removeClass("active");
        $(".link-list .depth ul").slideUp();

        // 모바일 시 스크롤 잠금
        if($(window).width() <= 1280){
            $("html").toggleClass("lock");
        }
        else{
            $("html").removeClass("lock");
        }

        $(window).resize(function(){
            if($(window).width() <= 1280){
                $("html").toggleClass("lock");
            }
            else{
                $("html").removeClass("lock");
            }
        })
    })

    // 모바일 gnb depth
    $(".mobile-screen .link-list .depth > a").on("click",function(){
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).siblings().stop().slideToggle().parent().siblings().find("ul").slideUp();
        return false;
    })
  // 민트 가이드 버튼	
    $(".btn-mint").on("click",function(){
        $(".guide-list").slideToggle();
        return false;
    })
	

    // 최상단 이동 버튼
    $(".top_btn").on("click",function(){
        $("html, body").stop().animate({scrollTop : 0}, 700)
    })

    const story02_thumb = new Swiper(".story02_thumb", {
        loop : false,
        autoplay : {
            delay : 10500,
            disableOnInteraction: false
        },
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,
        speed:750,
        breakpoints : {
            781 : {
                loop:false,
                slidesPerView : 4,
                spaceBetween : 10
            },
            1 : {
                loop:true,
                slidesPerView : 2,
                spaceBetween : 10
            }
        }
    })

    const story02_slide = new Swiper(".story02_slide", {
        loop : true,
        autoplay : {
            delay : 10500,
            disableOnInteraction: false
        },
        allowTouchMove: false,
        speed:750,
        effect : "fade",
        thumbs: {
            swiper: story02_thumb,
        },
    })

    // popup
    const closeBtn = document.querySelector('.close_btn');
    const popup = document.querySelector('.popup');
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });


    // 스토리 버튼
    $(function(){
        $(".story_box.story02 .prev_btn").on("click",function(){
            story_bg.slidePrev();
            desc_box.slidePrev();
        })

        $(".story_box.story02 .next_btn").on("click",function(){
            story_bg.slideNext();
            desc_box.slideNext();
        })
    })
	
    const section03_slide = new Swiper(".section03_slide",{
        loop : true,
        allowTouchMove: false,
        speed: 4000,
        freeMode: true,
        autoplay : {
            delay : 4,
            disableOnInteraction: false
        },
        slidesPerView : 5,
        spaceBetween : 40,
        breakpoints : {
            781 : {
                slidesPerView : 5,
                spaceBetween : 40
            },
            1 : {
                slidesPerView : 2,
                spaceBetween : 20
            }
        }
    })

    const section06_slide = new Swiper(".section06_slide",{
        /*autoplay : {
            delay:3500,
            disableOnInteraction: false,
        },*/
        slidesPerView : 2,
        spaceBetween : 100,
        pagination: {
            el: ".section06_slide .pagination",
            clickable : true
        },
        breakpoints : {
            1025 : {
                slidesPerView : 2,
                spaceBetween : 100,
            },
            1 : {
                slidesPerView : 1,
                spaceBetween : 0
            }
        }
    })

    $.jScrollability([
        {
            'selector': '.section02 .wrap:nth-child(1)',
            'start': function($el) {return $(".section02").offset().top - 500},
            'end': function($el) {return ($(".section02").offset().top + $(".section02").outerHeight()) + 200},
            'fn': {
                'left': {
                    'start': 18,
                    'end': -2,
                    'unit': '%'
                }
            }
        },
        {
            'selector': '.section02 .wrap:nth-child(2)',
            'start': function($el) {return $(".section02").offset().top - 500},
            'end': function($el) {return ($(".section02").offset().top + $(".section02").outerHeight()) + 200},
            'fn': {
                'left': {
                    'start': -18,
                    'end': 2,
                    'unit': '%'
                }
            }
        },
        {
            'selector': '.section02 .wrap:nth-child(3)',
            'start': function($el) {return $(".section02").offset().top - 500},
            'end': function($el) {return ($(".section02").offset().top + $(".section02").outerHeight()) + 200},
            'fn': {
                'left': {
                    'start': 18,
                    'end': -2,
                    'unit': '%'
                }
            }
        },
        {
            'selector': '.story_box.nft_project .img_box img',
            'start': function($el) {return $(".story_box.parall").offset().top - 500},
            'end': function($el) {return ($(".story_box.parall").offset().top + $(".story_box.parall").outerHeight()) + 500},
            'fn': {
                'margin-top': {
                    'start': 20,
                    'end': -4,
                    'unit': '%'
                }
            }
        }
    ]);
})