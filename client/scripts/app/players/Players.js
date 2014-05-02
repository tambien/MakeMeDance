define(["controller/Mediator", "players/Them", "players/You"], function(Mediator){

	var playerLabels = $("#PlayerColors");

	var players = [];
	var currentPlayerIndex = 0;

	function setPlayerOrder(meFirst){
		//pick an order randomly (for now)
		//color the selections
		if (meFirst){
			//first player is You,
			playerLabels.find("#Player0Label").html("YOU");
			playerLabels.find("#Player1Label").html("THEM");
			players = ["you", "them"];
		} else {
			playerLabels.find("#Player0Label").html("THEM");
			playerLabels.find("#Player1Label").html("YOU");
			players = ["them", "you"];
		}
		takeTurn();
	}

	function takeTurn(){
		var player = players[currentPlayerIndex++];
		currentPlayerIndex = currentPlayerIndex % 2;
		Mediator.send("player/"+player+"/takeTurn");
	}

	Mediator.route("player/them/arrived", function(meFirst){
		setPlayerOrder(meFirst);
	});

	//listen for the thumbs up/down
	Mediator.route("dancing/voted", function(){
		takeTurn();
	});
})