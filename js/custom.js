// menu nav start
$(function () {
    $(".mobile-menu").click(function () {
        var effect = 'slide';
        var options = {
            direction: $('left').val()
        };
        var duration = 500;
        $('nav').toggle(effect, options, duration);
    });
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }
});
// menu nav end

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
   if(scroll >= 100) {
        $("header").addClass("fixed-header");
    } else {
        $("header").removeClass("fixed-header");
    }
});

$(".scrollTo").click(function (event) {
    event.preventDefault();
    var $anchor = $('#' + this.hash.substring(1));
    $('html,body').animate({
        scrollTop: $anchor.offset().top - $anchor.attr('data-section-offset')
    }, 500);
});

function slickHeight() {
  var winWidth = $(window).width();
    if (winWidth > 767) {
        var sliderHeight = $('.slick-slider').height();
        console.log(sliderHeight);
        $('#slick-pager .slick-pager').css('height', sliderHeight - 60);
    }
}
jQuery(document).ready(function($) {

$('.center').slick({
   centerMode: true,
   slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
 //  autoplay: true,
   draggable:false,
   arrows:false,
   asNavFor: '.slick-pager',
   responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});



    $('.slick-pager').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
      //  autoplay: true,

        asNavFor: '.center',
        focusOnSelect: true,
        vertical: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                vertical: false,
                adaptiveHeight: true,
                slidesToShow: 1,
            }
        }
        ]
    });
});

