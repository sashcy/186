
$("#sun").mouseover(function() {
  TweenMax.to("#sun2-window .navyblue", 0.5, {fill:"#e98024", ease: Power4.easeInOut});
  TweenMax.to("#sun1-window .navyblue", 0.5, {fill:"#e98024", ease: Power4.easeInOut});
});
$("#sun").mouseout(function() {
  TweenMax.to("#sun2-window .navyblue", 0.5, {fill:"#2a3052", ease: Power4.easeInOut});
  TweenMax.to("#sun1-window .navyblue", 0.5, {fill:"#2a3052", ease: Power4.easeInOut});
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
