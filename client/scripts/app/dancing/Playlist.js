define(["controller/Mediator", "dancing/Song"], function(Mediator, Song){

	var container = $("#Playlist");

	var songContainer = container.find("#Songs");

	var songCount = 1;

	var currentSong = 0;

	Mediator.route("dancing/Song/clicked", addSong);

	function addSong(description){
		description.number = songCount++;
		var s = new Song(songContainer, description, true);
		if (songCount % 2 === 1){
			s.element.addClass("Even");
		} else {
			s.element.addClass("Odd");
		}
		currentSong = s;
		container.find("#Scroller").animate({
			scrollTop : 300
		}, 300);
	}

	Mediator.route("reset", function(){
		songContainer.empty();
	});


	Mediator.route("dancing/voted", function(vote){
		currentSong.setVote(vote);
	});



	Mediator.route("screen/Dancing/disappear", function(){
		container.detach();
	});

	Mediator.route("screen/Compatible/display", function(screenContainer){
		screenContainer.append(container);
	});


});