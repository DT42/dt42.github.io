
    $(".contentContainer").css("min-height", $(window).height());
    $("#landing").css("height", $(window).height());
    $(".column").css("height", $(window).height());
    

    $(function(){


      $("#learnmore1").click(function(){
        $('html,body').animate({scrollTop:$('#about').offset().top},400);
      });

      $("#gotop").click(function(){
          jQuery("html,body").animate({
            scrollTop:0
          },300);
      });
      $(window).scroll(function() {
          if ( $(this).scrollTop() > 100){
              $('#gotop').fadeIn("fast");
            } 
          else {
              $('#gotop').stop().fadeOut("fast");
            }
      });

    });