$(document).ready(function () {
	
//Shows Ryu in the "Ready" positon when the mouse enters the div
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

//Ryu moves into the "Still" positon when the mouse leaves the div
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})

//Ryu moves into the "Throwing" positon when the mouse button is clicked
	.mousedown(function() {
		//Play Hadouken sound
		$('.ryu-ready').hide();	
		$('.ryu-throwing').show();
		$('.hadouken').show();		//Animate Hadouken to the right of the screen
	})

//Ryu returns to the "Still" positon when the mouse button is released
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});

});