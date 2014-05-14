var express = require('express');
var app = express();

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 4181});

///////////////////////////////////////////////////////////////////////////////
//	PLAYERS
///////////////////////////////////////////////////////////////////////////////

var onlinePlayers = {};

wss.on('connection', function(ws) {
	//add this player to the players
	var player = new Player(ws);
	console.log("new player: "+player.id);
});

///////////////////////////////////////////////////////////////////////////////
//	PLAYER
///////////////////////////////////////////////////////////////////////////////

var onlinePlayerIDs = 0;

var Player = function(ws){
	this.id = onlinePlayerIDs++;
	this.ws = ws;
	this.partner = null;
	this.timeout = -1;
	//listen for events
	ws.on('close', this.remove.bind(this));
	ws.on('message', this.recv.bind(this));
	//add myself to the list
	onlinePlayers[this.id] = this;
}

Player.prototype.remove = function(){
	if (this.partner !== null){
		console.log("match closed " + this.id +" and "+ this.partner.id);
	}
	delete onlinePlayers[this.id];
	clearTimeout(this.timeout);
	if (this.partner !== null){
		this.partner.disconnect();
	}
	this.ws = null;
}

Player.prototype.recv = function(msg){
	msg = JSON.parse(msg);
	if (msg.command === "match"){
		//find a match
		this.ready = true;
		this.findMatch();
	} else if (msg.command === "song"){
		//if it's a song choice, forward it to the partner
		if (this.partner !== null){
			this.partner.send(msg);
		}
	} else if (msg.command === "vote"){
		if (this.partner !== null){
			this.partner.send(msg);
		}
	} else if (msg.command = "reset"){
		this.reset();
	}
	//if it's a request to connect
}

Player.prototype.findMatch = function(){
	console.log("finding match");
	//get the first one that doesn't have a partner
	for (var playerid in onlinePlayers){
		if (parseInt(playerid, 10) !== this.id){
			var partner = onlinePlayers[playerid];
			if (partner.partner === null && partner.ready){
				//and set this as the partners match
				this.matched(partner, false);
				partner.matched(this, true);
				return;
			}
		} 
	}
	//if there are none, set a timeout and try again in a minute
	this.timeout = setTimeout(this.findMatch.bind(this), 1000);
}

Player.prototype.matched = function(partner, first){
	this.partner = partner;
	var reply = {"command" : "match", "partner" : this.partner.id, "meFirst" : first};
	this.send(reply);
	clearTimeout(this.timeout);
}

Player.prototype.send = function(msg){
	if (typeof msg !== "string"){
		msg = JSON.stringify(msg);
	}
	this.ws.send(msg);
}

Player.prototype.disconnect = function(){
	this.reset();
	this.send({"command" : "disconnect"});
}

Player.prototype.reset = function(){
	if (this.partner !== null){
		this.partner.partner = null;
		this.partner = null;
	}
	this.ready = false;
	clearTimeout(this.timeout);
}


///////////////////////////////////////////////////////////////////////////////
//	ROUTES
///////////////////////////////////////////////////////////////////////////////
	
//get the number of players online
app.get('/playercount', function(req, res){
	var count = 0;
	for(var i in onlinePlayers){
		count++;
	}
	res.send({"count" : count});
});

//static files
app.use(express.static(__dirname + '/client'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});