var introNeed=function(){$("textarea#main").fadeIn();var n=$("textarea#main").val();""==n&&($(".intro").fadeIn(),introFade())},introFade=function(){$(".intro").click(function(){$(this).fadeOut(),$("textarea#main").focus()})};$(window).load(function(){introNeed()}),$(document).ready(function(){});