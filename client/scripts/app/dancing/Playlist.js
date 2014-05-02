define(["controller/Mediator", "dancing/Song"], function(Mediator, Song){

	var container = $("#Playlist");

	var songContainer = container.find("#Songs");

	var songCount = 1;

	Mediator.route("dancing/Song/clicked", addSong);

	function addSong(description){
		description.number = songCount++;
		var s = new Song(songContainer, description);
		if (songCount % 2 === 1){
			s.element.addClass("Even");
		} else {
			s.element.addClass("Odd");
		}
	}

	Mediator.route("reset", function(){
		songContainer.empty();
	});


});