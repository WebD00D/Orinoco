(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

function animate() {
      $('.mainicon').animate({marginTop:'15px'}, 'slow', function(){
          $('.mainicon').animate({marginTop:'0px'}, 'slow', function(){
            animate();
          });
      });
  }
 animate();

  $("#scrollDownIcon").click(function(){
    $('html, body').animate({
        scrollTop: $("#allTheContent").offset().top
    }, 700);
  })
