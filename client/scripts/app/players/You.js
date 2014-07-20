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

	Mediator.route("player/you/setUserInfo", setUserInfo);

	function setUserInfo(data){
		player.data = data;
		console.log("setting user info");
		console.log(this.data);
	}

	Mediator.route("player/you/getUserInfo", getUserInfo);

	function getUserInfo(){
		var playerLabels = $("#PlayerLabels");
		playerLabels.find(".youLabel").html("YOU: <a href='https://open.spotify.com/user/" +player.data.id + "'>"+player.data.id+"</a>");
		console.log(player);
		return player;
	}

	function pickedSong(){
		if (!songSelected){
			songSelected = true;
			player.blockSelection(true);
			player.setText("Waiting for their vote");
		}
	}

	Mediator.route("reset", function(){
		songSelected = true;
	});

	return player;
});