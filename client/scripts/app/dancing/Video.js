define(["controller/Mediator", "data/Videos", "players/Players"], function(Mediator, Videos, Players){
	var videoContainer = $("#VideoArena");

	var videoPlayer = videoContainer.find("video")[0];
	var videoPlayerSource = videoContainer.find("source")[0];

	var Dancers = {
		"A" : "Manolo",
		"B" : "Elijah",
		"C" : "Paulie"
	}

	function playVideo(url, bpm, videoBPM){
		videoPlayerSource.src = "../videos/" + url;
		videoPlayer.load();
		videoPlayer.playbackRate = bpm/videoBPM;
		videoPlayer.loop = true;
		videoPlayer.play();
		//make it visible
		videoContainer.find("video").addClass("Visible");
	}

	function findVideo(dj, dancer, genre){
		for (var i = 0; i < Videos.length; i++){
			var vid = Videos[i];
			if (vid.avatars[0] === dancer && vid.avatars[1] === dj && vid.genre === genre){
				return vid;
			}
		}
	}

	function randomVideo (){
		var index = parseInt(Math.random() * Videos.length, 10);
		return Videos[index];
	}

	Mediator.route("dancing/Song/clicked", function(song){
		var dj = Dancers[Players.getDJ()];
		var dancer = Dancers[Players.getDancer()];
		var video = findVideo(dj, dancer, song.genre);
		playVideo(video.url, song.bpm, video.bpm);
	});

	Mediator.route("reset", function(){
		videoPlayer.pause();
		videoPlayerSource.src = "";
		videoContainer.find("video").removeClass("Visible");
	});
});