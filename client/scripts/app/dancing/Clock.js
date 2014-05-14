define(["controller/Mediator", "dancing/SongSelection"], function(Mediator, SongSelection){
	var container = $("#Clock");
	var hand = container.find("#Hand");
	var time = container.find("#Time");
	var timePassed = 0;

	var intvl = -1;

	Mediator.route("player/you/takeTurn", startTimer);
	Mediator.route("dancing/Song/clicked", stopTimer);

	function startTimer(){
		hand.addClass("Rotate");
		timePassed = 0;
		intvl = setInterval(updateTimer, 1000);
	}

	function stopTimer(){
		hand.removeClass("Rotate");
		clearInterval(intvl);
		time.text("00:00");
	}

	function updateTimer(){
		timePassed++;
		if (timePassed < 10){
			time.text("00:0"+timePassed);
		} else {
			time.text("00:"+timePassed);
			stopTimer();
			//pick the next song
			Mediator.send("dancing/Song/clicked", SongSelection.getRandomSong());
		}
	}
});	