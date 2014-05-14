define(["controller/Mediator"], function(Mediator){
	var videoContainer = $("#VideoArena");

	var videoPlayer = videoContainer.find("video")[0];
	var videoPlayerSource = videoContainer.find("source")[0];

	var videoCounts = {
		"HIPHOP" : 19,
		"POP" : 16,
		"EDM" : 14
	}

	Mediator.route("dancing/Song/clicked", function(song){
		var randIndex = parseInt(Math.random() * videoCounts[song.genre], 10) + 1;
		if (randIndex < 10){
			randIndex = "0" + randIndex;
		}
		var videoUrl = ["./videos/", song.genre , "_" , randIndex , ".mp4"].join("");
		videoPlayerSource.src = videoUrl;
		videoPlayer.load();
		videoPlayer.playbackRate = song.bpm/120;
		videoPlayer.loop = true;
		/*//why doesn't it loop?
		videoPlayer.onended = function(){
			videoPlayer.currentTime = 0;
			videoPlayer.play();	
		}*/
		videoPlayer.play();
		//make it visible
		videoContainer.find("video").addClass("Visible");
	});

	Mediator.route("reset", function(){
		videoPlayer.pause();
		videoPlayerSource.src = "";
		videoContainer.find("video").removeClass("Visible");
	});
});