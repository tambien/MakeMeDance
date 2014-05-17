define(["controller/Mediator", "dancing/Tab", "data/HipHop", "data/EDM", "data/PopSongs"], 
function(Mediator, Tab, HipHop, EDM, PopSongs){

	var container = $("#SongSelection");

	var tabs = [];

	var allSongs = [];

	//add genre to the description
	EDM.forEach(function(song){
		song.genre = "EDM";
	})
	//add genre to the description
	PopSongs.forEach(function(song){
		song.genre = "Pop";
	})
	//add genre to the description
	HipHop.forEach(function(song){
		song.genre = "HipHop";
	})
	
	/*//make a tab for each of the styles
	var edm = new Tab(container.find("#EDM"), EDM, "EDM");
	edm.onclick(clicked);
	var popSongs = new Tab(container.find("#Pop"), PopSongs, "POP");
	popSongs.onclick(clicked);
	var hipHop = new Tab(container.find("#HipHop"), HipHop, "HIPHOP");
	hipHop.onclick(clicked);
	tabs = [edm, popSongs, hipHop];*/

	var allSongs = EDM.concat(PopSongs, HipHop);

	function shuffleArray(arr) {
		var o = arr.slice(0);
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	//randomize the array
	allSongs = shuffleArray(allSongs);

	var popSongs = new Tab(container.find("#Pop"), allSongs, "Songs");
	
	//start with pop selected
	popSongs.select();


	function clicked(tab){
		for (var i = 0; i < tabs.length; i++){
			var t = tabs[i];
			if (t === tab){
				t.select();
			} else {
				t.unselect();
			}
		}
	}

	function getRandomSong(){
		var randSong = allSongs[parseInt(Math.random()*allSongs.length, 10)];
		return randSong;
	}

	return {
		getRandomSong : getRandomSong,
		getSongFromURI : function(uri){
			for (var i = 0; i < allSongs.length; i++){
				var song = allSongs[i];
				if (song.uri === uri){
					return song;
				}
			}
			console.log("returning random song");
			return getRandomSong();
		}
	}

});