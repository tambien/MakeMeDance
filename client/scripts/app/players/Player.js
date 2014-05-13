define(["controller/Mediator", "dancing/SongSelection"], function(Mediator, SongSelection){
		
	var Player = function(name){
		this.avatar = null;
		this.name = name;
		Mediator.route("player/"+this.name+"/avatar", this.setAvatar.bind(this));
	}

	Player.prototype.setAvatar = function(av){
		this.avatar = av;
	}

	Player.prototype.blockSelection = function(bool){
		var songPanelBlocker = $("#SongPanel #PlayerBlocker");
		if (bool){
			songPanelBlocker.addClass("Visible");
		} else {
			songPanelBlocker.removeClass("Visible");
		}
	}

	Player.prototype.pickRandomSong = function(){
		return SongSelection.getRandomSong();
	}

	Player.prototype.setText = function(text){
		var dancingScreenText = $("#DanceArena #PlayerText");
		dancingScreenText.find("#Text").html(text);
		dancingScreenText.addClass("Visible");
	}

	Player.prototype.removeText = function(){
		var dancingScreenText = $("#DanceArena #PlayerText");
		dancingScreenText.removeClass("Visible");
	}

	return Player;

});