"use strict";$(document).ready(function(){$(".navbox").hover(function(){$(".navbox a").next().css({display:"block"})},function(){$(".navpanel").css({display:"none"})})}),$(document).ready(function(){$(".panel-item").each(function(e){$(this).hover(function(){$(".panel-item").eq(e).addClass("addclass")},function(){$(".panel-item").eq(e).removeClass("addclass")})})}),$(document).ready(function(){$(".navbox a").each(function(e){$(this).hover(function(){$(".panel-item").eq(e-1).addClass("addclass"),$(".navbox a").next().css({display:"block"})},function(){$(".panel-item").eq(e-1).removeClass("addclass")})})}),$(document).ready(function(){$(".lesson-classfiy-nav li").each(function(e){$(this).hover(function(){$(".lesson-classfiy-nav .lesson-list-show").eq(e).addClass("abcss")},function(){$(".lesson-classfiy-nav .lesson-list-show").eq(e).removeClass("abcss")})})}),$(function(){function e(e){var n=parseInt(i.css("left"))+e;e=e>0?"+="+e:"-="+Math.abs(e),i.animate({left:e},30,function(){n>-200&&i.css("left",-560*d),n<-560*d&&i.css("left",-560)})}function n(){c.eq(f-1).addClass("on").siblings().removeClass("on")}function s(){a=setTimeout(function(){r.trigger("click"),s()},m)}function t(){clearTimeout(a)}var a,o=$("#imgBox"),i=$("#imgBoxList"),c=$("#imgBoxButtons span"),l=$("#prev"),r=$("#next"),f=1,d=5,m=3e3;r.bind("click",function(){i.is(":animated")||(5==f?f=1:f+=1,e(-560),n())}),l.bind("click",function(){i.is(":animated")||(1==f?f=5:f-=1,e(560),n())}),c.each(function(){$(this).bind("click",function(){if(!i.is(":animated")&&"on"!=$(this).attr("class")){var s=parseInt($(this).attr("index")),t=-560*(s-f);e(t),f=s,n()}})}),o.hover(t,s),s()}),$(document).ready(function(){function e(){for(var e=0;e<i.length;e++)if("on"==i[e].className){i[e].className="";break}i[d-1].className="on"}function n(e){function n(){i<0&&parseInt(o.style.left)>s||i>0&&parseInt(o.style.left)<s?(o.style.left=parseInt(o.style.left)+i+"px",setTimeout(n,a)):(m=!1,o.style.left=s+"px",s>r&&(o.style.left=(f-6)*r+"px"),s<(f-6)*r&&(o.style.left=r+"px"))}if(0!=e){m=!0;var s=parseInt(o.style.left)+e,t=300,a=10,i=e/(t/a);n()}}function s(){clearTimeout(t)}var t,a=document.getElementById("imgBox2"),o=document.getElementById("imgBoxList2"),i=document.getElementById("imgBoxButtons2").getElementsByTagName("span"),c=document.getElementById("imgBoxPrev2"),l=document.getElementById("imgBoxNext2"),r=parseInt(o.style.left),f=parseInt(o.getElementsByTagName("img").length-2),d=1,m=!1;c.onclick=function(){m||(n(-r),1==d?d=f:d-=1,e())},l.onclick=function(){m||(n(r),d==f?d=1:d+=1,e())};for(var u=0;u<i.length;u++)i[u].onclick=function(){if("on"!=this.className){var s=parseInt(this.getAttribute("index")),t=r*(s-d);d=s,n(t),e()}};a.onmouseover=s}),$(document).ready(function(){$("#recommendName li").each(function(e){$(this).hover(function(){$(".recommendName_on").removeClass("recommendName_on"),$(this).addClass("recommendName_on")})}),$(".one-classfiy-lesson li").each(function(e){$(this).hover(function(){$(".one-classfiy-lesson li").eq(e).css({"z-index":"100"}),$(".lesson-infor").eq(e).css({height:"145px"}),$(".lesson-infor p").eq(e).css({display:"block"}),$(".zhongji").eq(e).css({display:"block"}),$(".learn-number").eq(e).css({display:"block"}),$(".lessonicon-box").eq(e).css({bottom:"-35px"})},function(){$(".lesson-infor").eq(e).css({height:"88px"}),$(".lesson-infor p").eq(e).css({display:"none"}),$(".zhongji").eq(e).css({display:"none"}),$(".learn-number").eq(e).css({display:"none"}),$(".lessonicon-box").eq(e).css({bottom:"14px"}),$(".one-classfiy-lesson li").eq(e).css({"z-index":"0"})})})}),$(document).ready(function(){$(".index-public-title .way").mouseover(function(){$(".way-infor").css({opacity:"1","margin-left":"0"})}).mouseout(function(){$(".way-infor").css({opacity:"0","margin-left":"-5px"})}),$(".wikibox .lesson-card").each(function(e){$(this).hover(function(){$(".lesson-card .describe").eq(e).css({opacity:"1",visibility:"visible"})},function(){$(".lesson-card .describe").eq(e).css({opacity:"0",visibility:"hidden"})})})});var animate_three=function(){var e=157*j,n=e+"px";$(".swiper-wrapper_three").css({"margin-left":n})},j=0;$("#banner-left3").click(function(){j--,animate_three(),j==-8&&(j=2),console.log(j)}),$("#banner-right3").click(function(){j++,animate_three(),10==j&&(j=0),console.log(j)}),$("#startegy-box").hover(function(){$("#banner-left3").addClass("abcss").removeClass("ancss"),$("#banner-right3").addClass("abcss").removeClass("ancss")},function(){$("#banner-left3").addClass("ancss").removeClass("abcss"),$("#banner-right3").addClass("ancss").removeClass("abcss")});var animate_four=function(){var e=130*j+"px";$(".swiper-wrapper_four").css({"margin-left":e})},j=0;$("#banner-left4").click(function(){j--,animate_four(),j==-9&&(j=4),console.log(j)}),$(".swiper-car-box .strategy-box").hover(function(){$("#banner-left4").addClass("abcss").removeClass("ancss"),$("#banner-right4").addClass("abcss").removeClass("ancss")},function(){$("#banner-left4").addClass("ancss").removeClass("abcss"),$("#banner-right4").addClass("ancss").removeClass("abcss")}),$("#banner-right4").click(function(){j++,animate_four(),12==j&&(j=-1)});