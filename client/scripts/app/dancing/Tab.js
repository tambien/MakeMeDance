define(["controller/Mediator", "dancing/Song"], function(Mediator, Song){

	var Tab = function(element, songsDescriptions, genre){

		this.element = element;

		this.title = this.element.find("#Title");

		this.songs = [];

		var songContainer = element.find("#Songs");

		for (var i = 0; i < songsDescriptions.length;i++){
			var desc = songsDescriptions[i];
			desc.genre = genre;
			desc.number = i+1;
			var s = new Song(songContainer, desc);
			this.songs.push(s);
		}
		
		this.title.click(this.clicked.bind(this));

		this._callback = function(){};

	}

	Tab.prototype.clicked = function(e){
		e.preventDefault();
		this._callback(this);
	}
	
	Tab.prototype.select = function(){
		this.element.addClass("Selected");
	}

	Tab.prototype.unselect = function(){
		this.element.removeClass("Selected");
	}

	Tab.prototype.onclick = function(callback){
		this._callback = callback;
	}

	return Tab;


});