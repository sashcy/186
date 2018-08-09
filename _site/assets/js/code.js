
function collapseNavbar(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){document.documentElement.lang;$("#language_select select").on("change",function(){var a=$(this).val();window.location.href="/"+("en"===a?"":a)}),$(".nav-button").click(function(){$(".nav-button,.primary-nav").toggleClass("open")})}),$(function(){$("a.page-scroll").bind("click",function(a){var n=$(this);$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top},800,"easeInOutExpo"),a.preventDefault()})});



$("#sun").mouseout(function() {
  TweenMax.to("#sun2-window *, #sun1-window *", 0.5, {fill:"red", ease: Power4.easeInOut});
  //TweenMax.to("#sun11-window *", 0.5, {fill:"#F8A805", ease: Power4.easeInOut});
});

$("#sunT").mouseover(function() {
  TweenMax.to("#sunT .outer", 0.5, {fill:"blue", ease: Power4.easeInOut});
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





// Clock

$(document).ready(function() {
    var datetime = new Date(),
      h = datetime.getHours(),
      m = datetime.getMinutes(),
      s = datetime.getSeconds();
  
    var myPointerH = $(".clockH");
    var myPointerM = $(".clockM");
    var myPointerS = $(".clockS");
  
    var oneSecond = 60 / 60; // 1 second
    var oneHour = 60 * 60; //1 hour tween
    var twelveHours = 12 * 60 * 60; //12 hour tween
  
    TweenMax.set(".second, .hour, .minute", {
      yPercent: -50,
      transformOrigin: "50% 100%"
    });
  
    var hourTween = TweenMax.to(myPointerH, twelveHours, {
      rotation: "360_cw",
      ease: Linear.easeNone,
      repeat: -1,
      paused: true
    });
  
    var minuteTween = TweenMax.to(myPointerM, oneHour, {
      rotation: "360",
      ease: Linear.easeNone,
      repeat: -1,
      paused: true
    });
  
    var secondsTween = TweenMax.to(myPointerS, oneSecond, {
      rotation: "360",
      ease: Linear.easeNone,
      repeat: -1,
      paused: true
    });
  
    function showTime() {
      (datetime = new Date()),
        (h = datetime.getHours()),
        (m = datetime.getMinutes()),
        (s = datetime.getSeconds());
  
      minutesAsSeconds = m * 60;
      hoursAsSeconds = h * 60 * 60;
      secondsAsSeconds = s / 60;
  
      hourTween.progress(hoursAsSeconds / twelveHours);
      minuteTween.progress(minutesAsSeconds / oneHour);
      secondsTween.progress(secondsAsSeconds / oneSecond);
      console.log(hoursAsSeconds, minutesAsSeconds, secondsAsSeconds);
    }
    showTime();
  
    setInterval(function() {
      showTime();
    }, 1000);
  });



  // Test
  var player = DM.player(document.getElementById('player'), {
    video: 'k7EQh890op4QYyrwieo',
    width: '100%',
    height: '100%',
    params: {
      autoplay: false,
      related: false,
      controls: true,
      mute: false
    }
  });
  player.addEventListener('end', function (evt) { evt.target.currentTime = 0; evt.target.play() } );
  function func_Play()
    { player.play(); }
  function func_Pause()
    { player.pause(); }