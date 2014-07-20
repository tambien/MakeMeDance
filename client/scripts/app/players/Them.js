define(["controller/Mediator", "players/Player", "players/Curator"], function(Mediator, Player, Curator){
	
	var player = new Player("them");

	var host = location.origin.replace(/^http/, 'ws')
	var websocket = new WebSocket(host);
	var themTurn = false;
	var amMatched = true;
	var curTimeout = -1;


	websocket.onopen = function(){
		console.log("connected to server");
	}

	websocket.onmessage = function(msg){
		//route all the messages
		msg = JSON.parse(msg.data);
		console.log(msg);
		if (msg.partnerSpotData){
			player.spotData = msg.partnerSpotData;
			player.spotifyUser = msg.partnerSpotData.id;
			console.log(player.spotifyUser);
		}
		if (msg.command === "match" && !amMatched){
			amMatched = true;
			Mediator.send("player/them/arrived", msg.meFirst);
			console.log
			clearTimeout(curTimeout);
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


	function takeTurn(){
		themTurn = true;
		player.setText("A song is being chosen for you!<br>Sit back and relax.");
		player.blockSelection(true);
		if (Curator.inControl()){
			Curator.makeSelection();
		}
	}

	Mediator.route("player/them/takeTurn", takeTurn);

	Mediator.route("player/them/getUserInfo", getUserInfo);

	function getUserInfo(){
		var playerLabels = $("#PlayerLabels");
		playerLabels.find(".themLabel").append("<a href=&quot; https://open.spotify.com/user/" +player.spotifyUser + "&quot;>"+player.spotifyUser+"</a>");
		return player;
	}


	Mediator.route("dancing/Song/clicked", function(msg){
		if (themTurn){
			themTurn = false;
			player.removeText();
		} else {
			//waiting for vote
			themTurn = true;
			if (Curator.inControl()){
				Curator.vote(msg);
			} else {
				//send the song data to the other person
				msg.command = "song";
				websocket.send(JSON.stringify(msg));
			}
		}
	});


	Mediator.route("dancing/voted", function(msg){
		if (!themTurn && !Curator.inControl()){
			websocket.send(JSON.stringify({
				command : "vote",
				choice : msg
			}));
		}
	});

	function startCurator(){
		Curator.takeControl();
		amMatched = true;
		sendReset();
		player.setText("You will be matched with MakeMeDance Curator : "+Curator.getName());
		player.spotifyUser = Curator.getSpotifyUser();
		console.log(player.spotifyUser);
		amMatched = true;
		setTimeout(function(){
			Mediator.send("player/them/arrived", true);
		}, 3000);
	}


	//get the them player on session start//

	function startSession(){
		var youFirst = Math.random() > .5;
		player.setText("Matching you...");
		player.blockSelection(true);
		amMatched = false;
		var command = {"command" : "match"};
		websocket.send(JSON.stringify(command));
		curTimeout = setTimeout(startCurator, 10000);
	}

	function sendReset(){
		var command = {"command" : "reset"};
		websocket.send(JSON.stringify(command));
	}

	Mediator.route("screen/Dancing/display", startSession);


	Mediator.route("reset", function(){
		amMatched = false;
		themTurn = false;
		sendReset();
	});

	return player;
});
