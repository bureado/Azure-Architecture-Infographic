$(document).ready(function(){
  // IE Version flagging
  if(Function('/*@cc_on return document.documentMode===9@*/')()){ $("html").addClass("ie9"); }
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie10"); }



  // SVG Class toggling

  $('.question--infographic2 .icons').click(function() {
    $('.answer--infographic2').show();
    $(this).toggleClass('active').siblings().removeClass('active');
  });
});