(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

function animate() {
      $('.mainicon').animate({marginTop:'35px'}, 500, function(){
          $('.mainicon').animate({marginTop:'25px'}, 700, function(){
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

  $(".tiles").mouseover(function(){
    $(".tiles").css({"cursor":"pointer"});
  })

  $(".tiles").click(function(){
    window.location.href = $(this).attr('data-page');
  })
