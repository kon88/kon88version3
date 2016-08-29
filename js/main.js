
$(document).ready(function(){

  (function scrollanim(){

var controller = new ScrollMagic.Controller();
$('.wbText').lettering();
var letters = $('.wbText span');
var headerLogo = $('.header .header-logo');
var headerBtn = $('.header .header-button');
var tl = new TimelineMax({delay: .75});

tl.from(headerLogo, .75, {autoAlpha:0, rotation: 180, ease: Back.easeOut})
.from(headerBtn, .75, {autoAlpha: 0, y: 50, ease: Back.easeOut}, "-=.5")
.staggerFrom(letters, .25, {
  autoAlpha: 0,
  cycle: {
    x: function() {
      return Math.random() * 200;
    }
  },
  ease: Back.easeOut
}, .1);

var scene = new ScrollMagic.Scene({
    triggerElement: ".header", offset:0
}).setTween(tl).addTo(controller);

/*var mobilePics = $('.mobile-section #angular, #ionic');
var mobileH1 = $('.mobile-right h1');
var mobileTL = new TimelineMax;

mobileTL.from(mobilePics, 1, {autoAlpha: 0, x: -50}).
from(mobileH1, 1, {autoAlpha:0,});

var scene1 = new ScrollMagic.Scene({
    triggerElement: ".mobile-section", offset: 0
}).setTween(mobileTL).addTo(controller); 

var heading = $('.portfolio h1');
var cards = $('.portfolio [class^="col"]');
var footer = $('footer ul li');
var tl2 = new TimelineMax();

tl2.from(heading, 1, {autoAlpha:0, scale:2}).
staggerFrom(cards, 1, {autoAlpha:0},.4).
staggerFrom(footer, 1, {delay: .5, autoAlpha:0, rotation:180, scale:1.5},.2);  
    
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".portfolio", offset:0
}).setTween(tl2).addTo(controller); */
})();

// Slick Slider

$('.mySlider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    cssEase: 'linear',
    responsive: [
    {
      breakpoint: 1600,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1120,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 760,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

$('.mySlider2').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    cssEase: 'linear',
    responsive: [
    {
      breakpoint: 1600,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1120,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 760,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

$('.c-pens .container .row .cp-right .cp-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
// header animation

});


    
        