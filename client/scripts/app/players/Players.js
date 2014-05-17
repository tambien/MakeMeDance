define(["controller/Mediator", "players/Them", "players/You"], function(Mediator, Them, You){

	var players = [];
	var currentPlayerIndex = 0;

	function setPlayerOrder(meFirst){
		var playerLabels = $("#PlayerLabels");
		//color the selections
		if (meFirst){
			//first player is You,
			playerLabels.find("#Label0").text("YOU");
			playerLabels.find("#Label1").text("THEM");
			players = ["you", "them"];
		} else {
			playerLabels.find("#Label0").text("THEM");
			playerLabels.find("#Label1").text("YOU");
			players = ["them", "you"];
		}
		playerLabels.addClass("Visible");
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

	Mediator.route("reset", function(meFirst){
		$("#PlayerLabels").removeClass("Visible");
		currentPlayerIndex = 0;
		players = [];
	});

	//listen for the thumbs up/down
	Mediator.route("dancing/takeTurn", takeTurn);

	return {
		getDJ : function(){
			var playerStr = players[currentPlayerIndex];
			if (playerStr === 'you'){
				return You.avatar;
			} else {
				return Them.avatar;
			}
		},
		getDancer : function(){
			var otherIndex = (currentPlayerIndex + 1) % 2;
			var playerStr = players[otherIndex];
			if (playerStr === 'you'){
				return You.avatar;
			} else {
				return Them.avatar;
			}
		}
	}
})