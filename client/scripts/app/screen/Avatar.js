define(["controller/Mediator"], function(Mediator){

	var Avatar = function(name, container){
		this.name = name;
		this.element = $("<div>", {"class" : "Avatar", "id" : name}).appendTo(container);
		this.selected = $("<div>", {"class": "Selected"}).appendTo(this.element);
		this.element.click(this.clicked.bind(this));
		this._callback = function(){};

		Mediator.route("reset", this.reset.bind(this));
	}
	
	Avatar.prototype.clicked = function(e){
		e.preventDefault();
		//invoke the callback
		this._callback(this);
	}

	Avatar.prototype.onclick = function(callback){
		this._callback = callback;
	}

	Avatar.prototype.gray = function(){
		this.element.addClass("Gray");
	}

	Avatar.prototype.reset = function(){
		this.element.removeClass("Gray");
	}

	return Avatar;
})