// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
    $("#faq dt").click(function() {
		$(this).fadeOut("slow");
	});
    $("h3").click(function() {
		$("dt").fadeIn("slow");
	});
	$("#orderedlist").addClass("red");
	$("#orderedlist li").addClass("blue");
	$("#orderedlist li:last").hover(function() {
	     $(this).addClass("green");
	   },function(){
	     $(this).removeClass("green");
	});
	$("#orderedlist2").addClass("red");
	$("#orderedlist2 li").addClass("blue");
	$("#orderedlist2 li:last").hover(function() {
	     $(this).addClass("green");
	   },function(){
	     $(this).removeClass("green");
	});
});
