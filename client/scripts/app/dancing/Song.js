define(["controller/Mediator"], function(Mediator){

	var Song = function(container, description, thumbs){
		this.track = description.track;
		this.artist = description.artist;
		this.uri = description.uri;
		this.bpm = description.bpm;
		this.genre = description.genre;

		this.element = $("<div>", {"class" : "Song"}).appendTo(container);

		if (thumbs){
			this.element.append($("<span>", {"id" : "Thumb"}));
		}
		this.element.append($("<span>", {"id" : "Artist"}).html(description.number + ". "+ this.artist));
		this.element.append($("<span>", {"id" : "Track"}).html(this.track));

		// listen for clicks
		this.element.click(function(){
			Mediator.send("dancing/Song/clicked", description);
		});
	}

	Song.prototype.setVote = function(vote){
		this.element.addClass(vote);
	}

	return Song;
});