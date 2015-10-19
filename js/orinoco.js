(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

function animate() {
      $('.mainicon').animate({marginTop:'25px'}, 500, function(){
          $('.mainicon').animate({marginTop:'35px'}, 700, function(){
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

  $('#menupoper').on('click', function(e) {
    e.preventDefault();
    var isShowing = $(this).attr('data-showingmain');
    if ( isShowing === 'true'){
        $(this).attr('data-showingmain','false');
        $("#maincontent").hide();
        $("#contentcolumn").css("background-color","black");
        $("#menuitem").removeClass("fa fa-bars");
        $("#menuitem").addClass("fa fa-times");
        $("#menucontent").show();
    } else {
        $(this).attr('data-showingmain','true');
        $("#maincontent").show();
        $("#contentcolumn").css("background-color","white");
        $("#menuitem").removeClass("fa fa-times");
        $("#menuitem").addClass("fa fa-bars");
        $("#menucontent").hide();
    }



});
