$(document).ready(function(){
  // IE Version flagging
  if(Function('/*@cc_on return document.documentMode===9@*/')()){ $("html").addClass("ie9"); }
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie10"); }


  // Mobile navigation
  $('.navigation--mobile .navigation--active a').click(function() {
    $(this).toggleClass('navigation--active-clicked');
    $('.navigation--mobile li').toggleClass('expanded');
  });


  // 'X' icon to close the answer panels
  $('.close-panel').click(function() {
     $(this).closest('.answer').slideUp(500);
     $('.icons').removeClass('active');
  });



  // Function to toggle the answers
  function doTheThing(whichPanel, whichQuestionIcon, whichAnswerContainer) {        
    // Showing the corresponding answer container
    $(whichAnswerContainer).slideDown(500);

    // Scrolling the corresponding answer container to the top
    $('html, body').animate({
        scrollTop: $(whichAnswerContainer).offset().top -0
    }, 500);

    // Hiding the open answer, so that no more than 1 are open at a time
    $(whichAnswerContainer).find('.answer--details').hide()

    // Setting active icons, and showing active answer
    if(whichPanel.hasClass('icons-A') || whichPanel.hasClass('answer--nav__A'))  {
      $(whichQuestionIcon).find('.icons-A').addClass('active').siblings().removeClass('active');                  // Setting active icon
      $(whichAnswerContainer).find('.answer--details-A').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__A').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-B') || whichPanel.hasClass('answer--nav__B')) {
      $(whichQuestionIcon).find('.icons-B').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-B').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__B').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-C') || whichPanel.hasClass('answer--nav__C')) {
      $(whichQuestionIcon).find('.icons-C').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-C').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__C').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-D') || whichPanel.hasClass('answer--nav__D')) {
      $(whichQuestionIcon).find('.icons-D').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-D').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__D').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-E') || whichPanel.hasClass('answer--nav__E')) {
      $(whichQuestionIcon).find('.icons-E').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-E').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__E').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-F') || whichPanel.hasClass('answer--nav__F')) {
      $(whichQuestionIcon).find('.icons-F').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-F').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__F').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-G') || whichPanel.hasClass('answer--nav__G')) {
      $(whichQuestionIcon).find('.icons-G').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-G').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__G').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-H') || whichPanel.hasClass('answer--nav__H')) {
      $(whichQuestionIcon).find('.icons-H').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-H').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__H').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-I') || whichPanel.hasClass('answer--nav__I')) {
      $(whichQuestionIcon).find('.icons-I').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-I').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__I').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-J') || whichPanel.hasClass('answer--nav__J')) {
      $(whichQuestionIcon).find('.icons-J').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-J').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__J').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-K') || whichPanel.hasClass('answer--nav__K')) {
      $(whichQuestionIcon).find('.icons-K').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-K').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__K').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-L') || whichPanel.hasClass('answer--nav__L')) {
      $(whichQuestionIcon).find('.icons-L').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-L').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__L').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-M') || whichPanel.hasClass('answer--nav__M')) {
      $(whichQuestionIcon).find('.icons-M').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-M').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__M').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-N') || whichPanel.hasClass('answer--nav__N')) {
      $(whichQuestionIcon).find('.icons-N').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-N').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__N').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-O') || whichPanel.hasClass('answer--nav__O')) {
      $(whichQuestionIcon).find('.icons-O').addClass('active').siblings().removeClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-O').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__O').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }

    if(whichPanel.hasClass('icons-Triple') || whichPanel.hasClass('answer--nav__Triple')) {
      $(whichQuestionIcon).find('.icons-Triple').addClass('active');                    // Setting active icon
      $(whichAnswerContainer).find('.answer--details-Triple').show();                                                    // Showing answer 
      $(whichAnswerContainer).find('.answer--nav__Triple').addClass('active-nav').siblings().removeClass('active-nav');  // Setting active side-nav
    }
  }

  // Calling the Toggle function with customizations for each panel.

  // Infographic 1.2
  $('.question--infographic2 .icons, .answer--infographic2 .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic2', '.answer--infographic2');
  });

  // Infographic 1.3
  $('.question--infographic3 .icons, .answer--infographic3 .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic3', '.answer--infographic3');
  });

  // Infographic 1.4
  $('.question--infographic4 .icons, .answer--infographic4 .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic4', '.answer--infographic4');
  });

  // Infographic 1.5
  $('.question--infographic5 .icons, .answer--infographic5 .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic5', '.answer--infographic5');
  });

  // Infographic 1.6
  $('.question--infographic6 .icons, .answer--infographic6 .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic6', '.answer--infographic6');
  });

  // Infographic 1.7
  $('.question--infographic7 .icons, .answer--infographic7 .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic7', '.answer--infographic7');
  });

  // Infographic 1.7 Left half circle
  $('.question--infographic7left .icons, .answer--infographic7left .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic7left', '.answer--infographic7left');
    $('.answer--infographic7right').hide();
    $('.question--infographic7right .icons').removeClass('active');
    $('.question--infographic7left .icons').addClass('active');
  });

  // Infographic 1.7 Right half circle
  $('.question--infographic7right .icons, .answer--infographic7right .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic7right', '.answer--infographic7right');
    $('.answer--infographic7left').hide();
    $('.question--infographic7left .icons').removeClass('active');
    $('.question--infographic7right .icons').addClass('active');

  });

  // Infographic 1.8
  $('.question--infographic8 .icons, .answer--infographic8 .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic8', '.answer--infographic8');
  });

  // Infographic 1.9
  $('.question--infographic9 .icons, .answer--infographic9 .answer--nav ul li').click(function() {
    doTheThing($(this), '.question--infographic9', '.answer--infographic9');
  });

});

// $('.icons-A').on('click', function(){
//   $('.icons-A').addClass('active').siblings().removeClass('button'); ; 
//   console.log('clicked!');
// });
