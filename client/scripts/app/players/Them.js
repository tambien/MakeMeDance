define(["controller/Mediator", "dancing/SongSelection"], function(Mediator, SongSelection){
	
	//AVATARS//

	var avatar = null;

	Mediator.route("player/them/avatar", function(av){
		avatar = av;
	});		

	function takeTurn(){
		//puts up a blocker until response comes in
		setTimeout(function(){
			Mediator.send("dancing/Song/clicked", description);
			var song = SongSelection.getRandomSong();
			Mediator.send("dancing/Song/clicked", song);
		}, 5000);
	}


	return {
		takeTurn : takeTurn
	}
});