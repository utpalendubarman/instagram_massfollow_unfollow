$(document).ready(function(){
  $("#Back").hide();
  $("#credit").hide();
  $("#About").click(function(){
    $("#content_main").hide();
	$("#Back").show();
	$("#About").hide();
	$("#credit").fadeIn(500);

  });
  $("#Back").click(function(){
	$("#credit").hide();
    $("#content_main").fadeIn(500);
	$("#Back").hide();
	$("#About").show();
  });
});
