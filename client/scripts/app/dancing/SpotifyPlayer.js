define(["controller/Mediator"], function(Mediator){

	//elements
	var element = $("#SpotifyPlayer");
	var audioEl = element.find("audio");
	var selectSong = element.find("#Blocker");

	Mediator.route("dancing/Song/clicked", getSongJSON);

	// Mediator.route("dancing/Song/stop", stopSong);

	function getSongJSON(song){
		var spotifyJSON = "https://api.spotify.com/v1/tracks/"+song.uri;
		jQuery.getJSON(spotifyJSON, playSong)
	}

	function playSong(data){
		var srcStr = data.preview_url;
		audioEl.attr("src", srcStr);
		// audioEl[0].currentTime = 0;
		selectSong.remove();
	}

	function stopSong(stop){
		audioEl.attr("src", null);
    audioEl[0].pause();
    audioEl[0].looping = false;
		console.log('stopped song!');
	}

})