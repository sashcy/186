function collapseNavbar(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}$(window).scroll(collapseNavbar),$(document).ready(collapseNavbar),$(function(){document.documentElement.lang;$("#language_select select").on("change",function(){var a=$(this).val();window.location.href="/"+("en"===a?"":a)}),$(".nav-button").click(function(){$(".nav-button,.primary-nav").toggleClass("open")})}),$(function(){$("a.page-scroll").bind("click",function(a){var n=$(this);$("html, body").stop().animate({scrollTop:$(n.attr("href")).offset().top},800,"easeInOutExpo"),a.preventDefault()})});



$("#sun").mouseout(function() {
  TweenMax.to("#sun2-window *, #sun1-window *", 0.5, {fill:"red", ease: Power4.easeInOut});
  //TweenMax.to("#sun11-window *", 0.5, {fill:"#F8A805", ease: Power4.easeInOut});
});

$("#Headphone").mouseover(function() {
  TweenMax.to("#Headphone *", 0.5, {stroke:"red", ease: Power4.easeInOut});
  TweenMax.to("#Web_Designer #Board", 0.5, {x:-1000, y:0, scale:3,  ease: Power4.easeInOut});
  TweenMax.to("#DeskTop ", 0.5, {opacity:0,  ease: Power4.easeInOut});
  TweenMax.to("#sunT .test", 0.5, {fill:"red", ease: Power4.easeInOut});
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
