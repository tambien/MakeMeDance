define(["controller/Mediator", "songs/Curators", "dancing/SongSelection"], function(Mediator, Curators, SongSelection){

	var inControl = false;
	var curator = null;

	function chooseRandomCurator(){
		var curIndex = parseInt(Math.random() * Curators.length, 10);
		curator = Curators[curIndex];
	}
		
	function takeControl(){
		chooseRandomCurator();
		inControl = true;
		console.log("curator taking control");
	}

	function makeSelection(){
		setTimeout(function(){
			//choose the next song which hasn't already been played
			var randomSongIndex = parseInt(Math.random() * curator.songs.length, 10);
			var uri = curator.songs[randomSongIndex];
			var song = SongSelection.getSongFromURI(uri);
			Mediator.send("dancing/Song/clicked", song);
		}, 4000);
		
	}

	function vote(msg){
		setTimeout(function(){
			//check if current song is in the mysongs list
			for (var i = 0; i < curator.songs.length; i++){
				var song = curator.songs[i];
				if (msg.uri === song){
					Mediator.send("dancing/voted", "up");	
					console.log("in list");
					return;
				}
			}
			//the song was not in the list, vote randomly. Vote after a random amount of time has passed
			Mediator.send("dancing/voted", Math.random() > .4 ? "up" : "down");
		}, Math.random()*45000) + 2000;
	}

	Mediator.route("reset", function(){
		inControl = false;
	})

	return {
		takeControl : takeControl,
		getName : function(){
			return curator.name;
		},
		makeSelection : makeSelection,
		inControl : function(){
			return inControl;
		},
		vote : vote,
	}

});
