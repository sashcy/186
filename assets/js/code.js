



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
