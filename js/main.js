$(document).ready(function(){
  // IE Version flagging
  if(Function('/*@cc_on return document.documentMode===9@*/')()){ $("html").addClass("ie9"); }
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie10"); }


  // 'X' icon to close the answer panels
  $('.fa-close').click(function() {
     $(this).closest('.answer').hide();
     $('.icons').removeClass('active');
  });

  // Function to toggle the answers
  function doTheThing(whichPanel, whichQuestionIcon, whichAnswerContainer) {        
    // Showing the corresponding answer container
    $(whichAnswerContainer).show()

    // Scrolling the corresponding answer container to the top
    $('html, body').animate({
        scrollTop: $(whichAnswerContainer).offset().top -0
    }, 0);

    // Hiding the open answer, so that no more than 1 are open at a time
    $(whichAnswerContainer).find('.answer--details').hide()

    // Setting active icons, and showing active answer
    if(whichPanel.hasClass('icons-A') || whichPanel.hasClass('answer--nav__A'))  {
      $(whichQuestionIcon).find('.icons-A').addClass('active').siblings().removeClass('active');                    // Setting active icon
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

});

