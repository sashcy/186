// jQuery to collapse the navbar on scroll
function collapseNavbar() {
  if ($('.navbar').offset().top > 50) {
      $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
      $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
}
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


// jQery for page scrolling feature - requires jQuery Easing plugin
$('.page-scroll').bind('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top,
  }, 800, 'easeInOutExpo');
    if ($(window).width() < 1200) {
      $('.topnav').toggle(500, 'easeInOutExpo');
    }
  event.preventDefault();
});

$(document).ready(function(){
  var windowWidth;
  function recalculate() {
    windowWidth = $(window).width();
    if ( windowWidth < 1200) {
      $('.page-scroll').addClass('mobile');
      $('.topnav').css('display', 'none' );
    }
    else {
        $('.page-scroll').removeClass('mobile');
        if ($('.topnav').css('display') == 'none' ){
          $('.topnav').removeAttr( 'style' );
      }
    }
  };    
  recalculate();
  $(window).resize(recalculate);
  });

  $('.logo-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top,
    }, 800, 'easeInOutExpo');
    windowWidth = $(window).width();
    if (( windowWidth < 1200) && $('.topnav').css('display') == 'block' ){
        $('.topnav').toggle(500, 'easeInOutExpo');
      }
    event.preventDefault();
  });

$('a.mobile').click(function(){
  $('.topnav').toggle(500, 'easeInOutExpo');
});

$('#push').click(function(){
  $('.topnav').toggle(500, 'easeInOutExpo');
});



$("#sun").mouseout(function() {
  TweenMax.to("#sun2-window *, #sun1-window *", 0.5, {fill:"red", ease: Power4.easeInOut});
  //TweenMax.to("#sun11-window *", 0.5, {fill:"#F8A805", ease: Power4.easeInOut});
});

$("#table").mouseover(function() {
  TweenMax.to("#table *", 0.5, {stroke:"red", ease: Power4.easeInOut});
  //TweenMax.to("#table", 0.5, {x:-1000, y:0, scale:3,  ease: Power4.easeInOut});
  //TweenMax.to("#table ", 0.5, {opacity:0,  ease: Power4.easeInOut});
  TweenMax.to("#table *", 0.5, {fill:"red", ease: Power4.easeInOut});
});
$("#Headphone").mouseout(function() {
  TweenMax.to("#BTC .cls-8", 0.5, {stroke:"red", ease: Power4.easeInOut});
  TweenMax.to("#Web_Designer #Board", 0.5, {x:0, y:0, scale:1,  ease: Power4.easeInOut});
  TweenMax.to("#DeskTop ", 0.5, {opacity:1,  ease: Power4.easeInOut});
  TweenMax.to("#sunT .test", 0.5, {fill:"red", ease: Power4.easeInOut});
});
$("#sunT").mouseout(function() {
  TweenMax.to("#sunT .outer", 0.5, {fill:"#F5C525", ease: Power4.easeInOut});
  TweenMax.to("#sunT .test ", 0.5, {fill:"#F8A805", ease: Power4.easeInOut});
});

$("#tree3-window").mouseover(function() {
  TweenMax.to("#tree3-window *", 0.5, {fill:"blue", ease: Power4.easeInOut});
});
$("#tree3-window").mouseout(function() {
  TweenMax.to("#tree3-window *", 0.5, {fill:"#F5C525", ease: Power4.easeInOut});
});



//TweenMax.to(".s-box", 0.5, {boxShadow: "0 27px 55px 0 rgba(0, 0, 0, 0.3)", ease: Power4.easeInOut});
//TweenMax.to("##sun2-window", 0.5, {filter: "drop-shadow(12px 12px 7px rgba(0,0,0,0.5))", ease: Power4.easeInOut});
$(".s-box").mouseover(function() {
  TweenMax.to(".s-box", 0.3, {boxShadow: "0 27px 55px 0 rgba(0, 0, 0, 0.3)", ease: Power4.easeInOut});
});
$(".s-box").mouseout(function() {
  TweenMax.to(".s-box", 0.3, {boxShadow: "none", ease: Power4.easeInOut});
});
$(".s-box").click(function() {
  TweenMax.to(".s-box", 0.3, {boxShadow: "0 27px 55px 0 #e98024", ease: Power4.easeInOut});
});

$("#bird").mouseover(function() {
  TweenMax.to("#bird", 0.3, {boxShadow: "0 27px 55px 0 rgba(0, 0, 0, 0.3)", ease: Power4.easeInOut});
});


$('#accordion').accordion({
    heightStyle: 'content',
    collapsible: true,
    active     : false,

});

var podcast = document.getElementById('bannerPodcast'); 
var podcastPlaying = false;

$('.podcast-playback').click(function playAudio() {
  if (podcast.paused) {
  podcast.play();
  $('.podcast-playback').addClass('podcast-pause');
  $('.podcast-playback').removeClass('podcast-play');
  } else {
  podcast.pause();
  $('.podcast-playback').addClass('podcast-play');
  $('.podcast-playback').removeClass('podcast-pause');
  }
});

var audio1 = document.getElementById("bannerPodcast");
audio1.onended = function() {
  $('.podcast-playback').addClass('podcast-play');
  $('.podcast-playback').removeClass('podcast-pause');
};
