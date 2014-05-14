define(["controller/Mediator", "players/Player"], function(Mediator, Player){
	
	var player = new Player("them");

	var websocket = new WebSocket("ws://"+window.location.hostname + ":4181/");

	websocket.onopen = function(){
		console.log("connected to server");
	}

	websocket.onmessage = function(msg){
		//route all the messages
		msg = JSON.parse(msg.data);
		if (msg.command === "match" && !amMatched){
			amMatched = true;
			Mediator.send("player/them/arrived", msg.meFirst);
		} else if (msg.command === "song" && amMatched && themTurn){
			//got a song from the other person
			Mediator.send("dancing/Song/clicked", msg);
		} else if (msg.command === "vote" && amMatched && themTurn){
			//got a song from the other person
			Mediator.send("dancing/voted", msg.choice);
		} else if (msg.command == "disconnect"){
			player.setText("Your partner has disconnected. <br> You will be redirected to the starting screen");
			setTimeout(function(){
				Mediator.send("player/them/disconnected");
			}, 1000);
		}
	}

	var themTurn = false;

	var amMatched = true;

	function takeTurn(){
		themTurn = true;
		player.setText("A song is being chosen for you!<br>Sit back and relax.");
		player.blockSelection(true);
	}

	Mediator.route("player/them/takeTurn", takeTurn);

	Mediator.route("dancing/Song/clicked", function(msg){
		if (themTurn){
			themTurn = false;
			player.removeText();
		} else {
			//send the song data to the other person
			msg.command = "song";
			websocket.send(JSON.stringify(msg));
			//waiting for vote
			themTurn = true;
		}
	});


	Mediator.route("dancing/voted", function(msg){
		if (!themTurn){
			websocket.send(JSON.stringify({
				command : "vote",
				choice : msg
			}));
		}
	});


	//get the them player on session start//

	function startSession(){
		var youFirst = Math.random() > .5;
		player.setText("Matching you...");
		player.blockSelection(true);
		amMatched = false;
		var command = {"command" : "match"};
		websocket.send(JSON.stringify(command));
	}

	Mediator.route("screen/Dancing/display", startSession);


	Mediator.route("reset", function(){
		amMatched = false;
		themTurn = false;
		var command = {"command" : "reset"};
		websocket.send(JSON.stringify(command));
	});

	return player;
});