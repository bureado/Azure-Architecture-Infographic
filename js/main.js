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

    if($(this).hasClass('icons-2A') || $(this).hasClass('answer--nav__2A'))  {
      
      $('.answer--details-2A').show();
      $('.active-nav').toggleClass('active-nav').siblings().removeClass('active-nav');    
      $('.answer--nav__2A').addClass('active-nav');
    }

    if($(this).hasClass('icons-2B') || $(this).hasClass('answer--nav__2B')) {
      
      $('.answer--details-2B').show();
      $('.active-nav').toggleClass('active-nav').siblings().removeClass('active-nav');    
      $('.answer--nav__2B').addClass('active-nav');
    }

    if($(this).hasClass('icons-2C') || $(this).hasClass('answer--nav__2C')) {

      $('.answer--details-2C').show();
      $('.active-nav').toggleClass('active-nav').siblings().removeClass('active-nav');    
      $('.answer--nav__2C').addClass('active-nav');
    }
  });

  
  // Toggling content via navigation
//  $('.answer--nav ul li').click(function() {
  //  $('.answer--infographic2 .answer--details').hide();

    // if($(this).hasClass('answer--nav__2A')) { 
    //   $('.answer--details-2A').show();
    //   $('.active-nav').toggleClass('active-nav').siblings().removeClass('active-nav');
    //   $('.answer--nav__2A').addClass('active-nav');
      
    // }

    // if() {
    //   $('.answer--details-2B').show();
    //   $('.active-nav').toggleClass('active-nav').siblings().removeClass('active-nav');    
    //   $('.answer--nav__2B').addClass('active-nav');
    //   $('.icons-2B').addClass('active').siblings().removeClass('active');
    // }

    // if() {
    //   $('.answer--details-2C').show();
    //   $('.active-nav').toggleClass('active-nav').siblings().removeClass('active-nav');    
    //   $('.answer--nav__2C').addClass('active-nav');
    //   $('.icons-2C').addClass('active').siblings().removeClass('active');
    // }
  //});


});

