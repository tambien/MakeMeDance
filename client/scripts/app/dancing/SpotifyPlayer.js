define(["controller/Mediator"], function(Mediator){

	//elements
	var element = $("#SpotifyPlayer");
	var iframe = element.find("iframe");
	var selectSong = element.find("#Blocker");

	Mediator.route("dancing/Song/clicked", playSong);

	function playSong(song){
		var srcStr = "https://embed.spotify.com/?uri=spotify:track:"+song.uri;
		iframe.attr("src", srcStr);
		selectSong.remove();
	}
})