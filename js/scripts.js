
$(document).ready(function(){
    $(".text").hide();
  $(".port-cont").hover(function(){
      $(this).find(".text").toggle(500);
  });
  
  });