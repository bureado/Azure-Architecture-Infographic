$(document).ready(function(){
  // IE Version flagging
  if(Function('/*@cc_on return document.documentMode===9@*/')()){ $("html").addClass("ie9"); }
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie10"); }



  // 'X' icon to close the panels
  $('.fa-close').click(function() {
     $(this).closest('.answer').hide();
     $('.icons').removeClass('active');
  });


  // Toggling SVG icons when clicked
  $('.question--infographic2 .icons').click(function() {
    $('.answer--infographic2').show();
    $(this).toggleClass('active').siblings().removeClass('active');
  });


  // Toggling content via icons
  $('.question--infographic2 .icons, .answer--nav ul li').click(function() {
    $('.answer--infographic2 .answer--details').hide();

    // Scrolling answer container to top of screen    
    $('html, body').animate({
        scrollTop: $(".answer--infographic2").offset().top -0
    }, 500);
    


    if($(this).hasClass('icons-2A') || $(this).hasClass('answer--nav__2A'))  {
      $('.icons-2A').addClass('active').siblings().removeClass('active');               // Showing corresponding active icon below answers
      $('.answer--details-2A').show();                                                  // Showing corresponding answer panel
      $('.answer--nav__2A').addClass('active-nav').siblings().removeClass('active-nav');  // Toggling corresponding answer side-nav
      
    }

    if($(this).hasClass('icons-2B') || $(this).hasClass('answer--nav__2B')) {
      $('.icons-2B').addClass('active').siblings().removeClass('active'); 
      $('.answer--details-2B').show();
      $('.answer--nav__2B').addClass('active-nav').siblings().removeClass('active-nav');    
    }

    if($(this).hasClass('icons-2C') || $(this).hasClass('answer--nav__2C')) {
      $('.icons-2C').addClass('active').siblings().removeClass('active'); 
      $('.answer--details-2C').show();
      $('.answer--nav__2C').addClass('active-nav').siblings().removeClass('active-nav');    
    }
  });

});

