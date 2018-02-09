var przemowa = new Audio("audio/przemowa.wav");

$(document).ready(function() {
	$(".swastyka").click(function() {
		$("#adolf").fadeIn(1000);
	})

	$("#adolf").click(function() {
		przemowa.play();
	});
});