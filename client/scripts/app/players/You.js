define(["controller/Mediator", "dancing/SongSelection"], function(Mediator, SongSelection){
	
	//AVATARS//

	var avatar = null;

	Mediator.route("player/you/avatar", function(av){
		avatar = av;
	});	

	function takeTurn(){
		//wait for song selection and send that to partner
	}

	function pickRandomSong(){
		
	}


	return {
		takeTurn : takeTurn
	}
});