var express = require('express');
var app = express();
var http = require('http')
var WebSocketServer = require('ws').Server
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var handlebars = require('hbs');

// set view engine to use handlebars
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


///////////////////////////////////////////////////////////////////////////////
//	ROUTES
///////////////////////////////////////////////////////////////////////////////
	
app.get('/', function(req, res){
	var body = {};
	body.id = null;
	res.render(__dirname + '/client/index', body);
});

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

var server = http.createServer(app);
server.listen(port);

console.log('http server listening on %d', port);

///////////////////////////////////////////////////////////////////////////////
//	WEBSOCKET
///////////////////////////////////////////////////////////////////////////////


var wss = new WebSocketServer({server: server});

console.log('websocket server created');

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
//	SPOTIFY API
///////////////////////////////////////////////////////////////////////////////
var client_secret = process.env.spotSecret;
var client_id = process.env.spotID;
if (port === 5000) {
	var redirect_uri = 'http://localhost:5000/callback'; // Your redirect uri
} else {
	var redirect_uri = 'http://makemedance.herokuapp.com/callback';
}


var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';
var storedState;
app.use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  storedState = state;
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});


app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter
  var code = req.query.code || null;
  var state = req.query.state || null;
  // var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code',
        client_id: client_id,
        client_secret: client_secret
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body.id);
          console.log(body.external_urls.spotify);
          console.log(body.images[0].url);
          res.render(__dirname + '/client/index', body);
        });

        // var template = handlebars.compile('/index');
        // we can also pass the token to the browser to make requests from there
        // res.redirect('/#' +
        //   querystring.stringify({
        //     access_token: access_token,
        //     refresh_token: refresh_token
        //   }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/success', function(req, res) {
	// console.log(req);
	res.redirect('/#');
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});
