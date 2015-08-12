var introNeed = function(){

  $('textarea#main').fadeIn();
  var text = $('textarea#main').val();

  if(text == ''){

    $('.intro').fadeIn();
    introFade();

  }
}

var introFade = function(){

  $('.intro').click(function(){

    $(this).fadeOut();

    $('textarea#main').focus();

  });

}

$(window).load(function() {

introNeed();

});

$(document).ready(function() {


});
