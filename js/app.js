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
		playHadouken();
		$('.ryu-ready').hide();	
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
  			{'left': '1145px'},
  			500,
  			function() {
    	  		$(this).hide();
    	  		$(this).css('left', '645px');
    	});
	})

//Ryu returns to the "Ready" positon when the mouse button is released
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});

//Pressing the "x" key moves Ryu into the "Cool" position
	$(document).keydown(function(event) {
		if (event.which == 88) {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').show();
	  }
	})
//Ryu Leaves the "Cool position when the "x" key is released
	.keyup(function(event) {
		if (event.which == 88) {
		$('.ryu-still').show();
		$('.ryu-cool').hide();  
	  }
	});

});
//Hadouken sound
	function playHadouken () {
  		$('#hadouken-sound')[0].volume = 0.5;
  		$('#hadouken-sound')[0].load();
  		$('#hadouken-sound')[0].play();
	}
