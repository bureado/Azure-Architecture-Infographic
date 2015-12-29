$(document).ready(function(){
  // IE Version flagging
  if(Function('/*@cc_on return document.documentMode===9@*/')()){ $("html").addClass("ie9"); }
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie10"); }



  // SVG Class toggling

  $('#infographic2--optionA').hover(function() {
    console.log('hovered');
  });
});