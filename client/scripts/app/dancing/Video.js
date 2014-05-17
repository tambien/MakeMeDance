define(["controller/Mediator", "data/Videos", "players/Players", "dancing/Thumbs"], function(Mediator, Videos, Players, Thumbs){
	var videoContainer = $("#VideoArena");

	var videoPlayer = videoContainer.find("video")[0];
	var videoPlayerSource = videoContainer.find("source")[0];

	var Dancers = {
		"A" : "Elijah",
		"B" : "Paulie",
		"C" : "Manolo",
	}

	var VoteLevel = {
		"-3" : "hate",
		"-2" : "hate",
		"-1" : "dislike",
		"0" : "like",
		"1" : "like",
		"2" : "love",
		"3" : "love",
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

	function findVideo(dj, dancer, genre, likeLevel){
		for (var i = 0; i < Videos.length; i++){
			var vid = Videos[i];
			if (vid.avatars[1] === dancer && vid.avatars[0] === dj && vid.genre === genre){
				return vid;
			}
		}
		//otherwise pick a random video, there was no match
		return randomVideo();
	}

	function randomVideo (){
		console.log("returning random video");
		var index = parseInt(Math.random() * Videos.length, 10);
		return Videos[index];
	}

	Mediator.route("dancing/Song/clicked", function(song){
		var likeLevel = VoteLevel[Thumbs.getVote()];
		var dj = Dancers[Players.getDJ()];
		var dancer = Dancers[Players.getDancer()];
		var video = findVideo(dj, dancer, song.genre, likeLevel);
		playVideo(video.url, song.bpm, video.bpm);
	});

	Mediator.route("reset", function(){
		videoPlayer.pause();
		videoPlayerSource.src = "";
		videoContainer.find("video").removeClass("Visible");
	});
});