define(["controller/Mediator", "players/Player"], function(Mediator, Player){
	
	var player = new Player("you");

	var songSelected = true;

	function takeTurn(){
		songSelected = false;
		player.blockSelection(false);
		player.setText("You have ten seconds to choose a song!");

	}

	Mediator.route("dancing/Song/clicked", pickedSong);

	Mediator.route("player/you/takeTurn", takeTurn);

	function pickedSong(){
		if (!songSelected){
			songSelected = true;
			player.blockSelection(true);
			player.setText("Waiting for their vote");
		}
	}


});