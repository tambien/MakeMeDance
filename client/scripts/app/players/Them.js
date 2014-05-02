define(["controller/Mediator", "players/Player"], function(Mediator, Player){
	
	var player = new Player("you");

	var themTurn = false;

	function takeTurn(){
		console.log("their turn");
		themTurn = true;
		player.setText("A song is being chosen for you!<br>Sit back and relax.");
		player.blockSelection(true);
		setTimeout(function(){
			//choose a random song
			Mediator.send("dancing/Song/clicked", player.pickRandomSong());
		}, 3000);
	}

	Mediator.route("player/them/takeTurn", takeTurn);

	Mediator.route("dancing/Song/clicked", function(){
		if (themTurn){
			themTurn = false;
			player.removeText();
		} else {
			//waiting for vote
			//send dummy vote
			setTimeout(function(){
				var rand = Math.random() > .5;
				Mediator.send("dancing/voted", rand ? "up" : "down");
			}, 3000);
		}
	});


	//get the them player on session start//

	function startSession(){
		var youFirst = Math.random() > .5;
		player.setText("Matching you...");
		player.blockSelection(true);
		setTimeout(function(){
			console.log(youFirst);
			Mediator.send("player/them/arrived", youFirst);
		}, 3000);
	}

	Mediator.route("screen/Dancing/display", startSession);

});