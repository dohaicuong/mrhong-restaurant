$(function(){var prevScrollPos=$(document).scrollTop();var hideHeaderNav=!1;$(document).scroll(function(){var currScrollPos=$(document).scrollTop();if((prevScrollPos>=currScrollPos||currScrollPos<=86)&&hideHeaderNav===!1){$("#header-nav").fadeIn(600)}else if($("#main-nav").hasClass("show")===!1){$("#header-nav").fadeOut(600)}
prevScrollPos=currScrollPos;$(".hideme").each(function(){var bottom_of_object=$(this).position().top+$(this).outerHeight();var bottom_of_window=$(window).scrollTop()+$(window).height();if(bottom_of_window>bottom_of_object){$(this).animate({"opacity":"1"},1286,"easeInOutExpo")}})});$(".page-scroll a").on("click",function(e){e.preventDefault();var mainNav=$("#main-nav");if(mainNav.hasClass("show")){changeMenuIcon();mainNav.removeClass("show")}
hideHeaderNav=!0;$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},1286,"easeInOutExpo",function(){setTimeout(function(){hideHeaderNav=!1},600)})});$("#menu-btn").on("click",function(){changeMenuIcon()});function changeMenuIcon(){if($("#main-nav").hasClass("show")){$("#icon-close").hide();$("#icon-menu").show()}else{$("#icon-menu").hide();$("#icon-close").show()}}
$.ajax({dataType:"jsonp",url:'https://api.instagram.com/v1/users/self',data:{access_token:'14821470568.6461f7d.64795bac63434b3c9a2573007597194f'},success:function(response){if(response.meta.code===200){var user=response.data;$("#insta-info").append('<a href="https://www.instagram.com/mrhongwestend" target="_blank"><div class="media">'+'<img class="mr-3" src="'+user.profile_picture+'" alt="">'+'<div class="media-body">'+'<p id="insta-username">'+user.username+'</p>'+'<p id="insta-fullname">'+user.full_name+'</p>'+'<p>'+user.bio.replace(/(\r\n|\n|\r)/g,"<br />")+'</p>'+'<p><a href="">mrhong.com.au</a></p>'+'</div>'+'</div></a>')}}});$.ajax({dataType:"jsonp",url:'https://api.instagram.com/v1/users/self/media/recent',data:{access_token:'14821470568.6461f7d.64795bac63434b3c9a2573007597194f'},success:function(response){if(response.meta.code===200){var count=0;for(item in response.data){if(count==6){break}
$("#insta-photos").append('<li class="text-center">'+'<img class="insta-photo img-fluid hideme" src="'+response.data[item].images.standard_resolution.url+'">'+'</li>');count++}}}})})