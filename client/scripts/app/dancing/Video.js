define(["controller/Mediator", "data/Videos", "players/Players", "dancing/Thumbs"], function(Mediator, Videos, Players, Thumbs){
	var videoContainer = $("#VideoArena");

	var videoPlayer = videoContainer.find("video");
	var videoPlayerSource = videoContainer.find("source");

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

	var lastGenre = "Intro";


	function playVideo(url, bpm, videoBPM, loop){
		//make a new video and source. 
		var newVid = $("<video>").appendTo(videoContainer);
		var newSource = $("<source>").appendTo(newVid);
		//set the source and attributes
		newSource[0].src = "../videos/" + url;
		newVid[0].load();
		newVid[0].playbackRate = bpm/videoBPM;
		newVid[0].loop = loop;
		newVid[0].play();
		//fade it in
		newVid.fadeTo(1000, 1, function(){
			//set the video to the old one
			videoPlayer.remove();
			videoPlayer = newVid;
		});
		//fade out the old one
		videoContainer.fadeTo(0, 1000);
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

	function findOutro(dj, dancer, compatible){
		var vidMood = compatible ? "Out_Up" : "Out_Down";
		console.log('OUTRO: ' + compatible + ' MOOD: ' + vidMood);
		for (var i = 0; i < Videos.length; i++){
			var vid = Videos[i];
			if (vid.avatars.indexOf(dj) !== -1 && vid.avatars.indexOf(dancer) !== -1 && vid.mood === vidMood){
				return vid;
			}
		}
	}

	function findIntro(dj, dancer){
		for (var i = 0; i < Videos.length; i++){
			var vid = Videos[i];
			if (vid.avatars.indexOf(dj) !== -1 && vid.avatars.indexOf(dancer) !== -1 && vid.mood === "Intro"){
				return vid;
			}
		}
	}

	function findTransition(from, to){
		var transitionString = from+"_"+to;
		for (var i = 0; i < Videos.length; i++){
			var vid = Videos[i];
			if (vid.genre === transitionString){
				return vid;
			}
		}
	}

	function randomVideo (){
		console.log("returning random video");
		var index = parseInt(Math.random() * Videos.length, 10);
		return Videos[index];
	}


	function playSong(song){
		var likeLevel = VoteLevel[Thumbs.getVote()];
		var dj = Dancers[Players.getDJ()];
		var dancer = Dancers[Players.getDancer()];
		var video = findVideo(dj, dancer, song.genre, likeLevel);
		playVideo(video.url, song.bpm, video.bpm, true);
	}


	Mediator.route("dancing/Song/clicked", function(song){
		if (song.genre !== lastGenre){
			//play the transition and then play the video		
			var vid = findTransition(lastGenre, song.genre);
			lastGenre = song.genre;	
			playVideo(vid.url, 120, 120, false);
			setTimeout(function(){
				playSong(song);
			}, 3000);
		} else {
			playSong(song);
		}
		
	});

	//play an intro video on screen start
	Mediator.route("screen/Dancing/display", function(){
		var dj = Dancers[Players.getDJ()];
		var dancer = Dancers[Players.getDancer()];
		var video = findIntro(dj, dancer);
		playVideo(video.url, 120, 120, false);
	});


	Mediator.route("dancing/outro", function(compatible){
		var dj = Dancers[Players.getDJ()];
		var dancer = Dancers[Players.getDancer()];
		var vid = findOutro(dj, dancer, compatible);
		playVideo(vid.url, 120, 120, false);
		//get the duration
		var duration = vid.duration || 7;
		setTimeout(function(){
			Mediator.send("dancing/over", compatible);
		}, duration * 1000);
	});

	Mediator.route("reset", function(){
		lastGenre = "Intro";
		videoPlayer.pause();
		videoPlayerSource.src = "";
		videoContainer.find("video").removeClass("Visible");
	});
});