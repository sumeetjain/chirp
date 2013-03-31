$(document).ready(function(){
  $("#chirp_button").on('click', function(e){
    
    var responses = $(".response:hidden").length;
    
    function show_response(){
      $('html, body').animate({scrollTop: 9999}, 'fast');
      $(".response:hidden").first().fadeIn();
    }
    
    window.setTimeout(show_response, 3*1000);
    window.setTimeout(show_response, 4*1000);
    window.setTimeout(show_response, 6*1000);
    window.setTimeout(show_response, 7*1000);
    window.setTimeout(show_response, 8*1000);
    window.setTimeout(show_response, 9*1000);
    window.setTimeout(show_response, 10*1000);
    window.setTimeout(show_response, 11*1000);
    window.setTimeout(show_response, 11*1000);
    window.setTimeout(show_response, 11*1000);
    window.setTimeout(show_response, 12*1000);
    window.setTimeout(show_response, 14*1000);
    window.setTimeout(show_response, 15*1000);
    window.setTimeout(show_response, 16*1000);
    window.setTimeout(show_response, 17*1000);
    
    e.preventDefault();
  });
});