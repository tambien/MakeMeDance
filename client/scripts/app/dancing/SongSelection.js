define(["controller/Mediator", "dancing/Tab", "songs/HipHop", "songs/EDM", "songs/PopSongs"], 

	function(Mediator, Tab, HipHop, EDM, PopSongs){

	var container = $("#SongSelection");

	//make a tab for each of the styles
	var edm = new Tab(container.find("#EDM"), EDM, "EDM");
	edm.onclick(clicked);
	var popSongs = new Tab(container.find("#Pop"), PopSongs, "POP");
	popSongs.onclick(clicked);
	var hipHop = new Tab(container.find("#HipHop"), HipHop, "HIPHOP");
	hipHop.onclick(clicked);

	var tabs = [edm, popSongs, hipHop];
	
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
		var randTab = tabs[parseInt(Math.random()*tabs.length, 10)];
		var randSong = randTab.songs[parseInt(Math.random()*randTab.songs.length, 10)];
		return randSong;
	}

	return {
		getRandomSong : getRandomSong
	}

});