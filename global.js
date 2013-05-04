$(document).ready(function(){
  $("textarea").on('focus', function(e){
    $(this).text("");
  });
  
  $("#chirp_button").on('click', function(e){
    
    $("#stat1").text("1");
    $("#responses").fadeIn();
    
    function show_response(){
      // $('html, body').animate({scrollTop: 9999}, 'fast');
      $(".response:hidden").first().fadeIn();
      
      // Update the birds-eye-count.
      var b = parseInt($("#stat3").text());
      $("#stat3").text(b+1);
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
    
    e.preventDefault();
  });
});