define(["controller/Mediator"], function(Mediator){

	var Song = function(container, description, thumbs){
		this.track = description.track;
		this.artist = description.artist;
		this.uri = description.uri;
		this.bpm = description.bpm;
		this.genre = description.genre;
		this.description = description;

		this.element = $("<div>", {"class" : "Song"}).appendTo(container);

		if (thumbs){
			this.element.append($("<span>", {"id" : "Thumb"}));
		}

		// shortening artist and track so that they don't overflow into the next line
		var artistName = this.artist;
		var trackTitle = this.track;
		if (this.artist.length + this.track.length >= 32) {
			// console.log(this.artist + " " + this.track + " are too large for display");
			// if song title is too long, shorten it for display
			if (this.track.length > 19) {
				trackTitle = this.track.slice(0, 16) + "...";
			}
			// if artist name is too long, shorten it for display
			if (artistName.length > 17) {
				artistName = this.artist.slice(0, (36 - trackTitle.length - 5)) + "...";
			}
		}

		this.element.append($("<span>", {"id" : "Artist"}).html(description.number + ". "+ artistName));
		this.element.append($("<span>", {"id" : "Track"}).html(trackTitle));

		// listen for clicks
		this.element.click(this.onclick.bind(this));
	}

	Song.prototype.setVote = function(vote){
		this.element.addClass(vote);
	}

	Song.prototype.onclick = function(vote){
		Mediator.send("dancing/Song/clicked", this.description);
	}

	return Song;
});
