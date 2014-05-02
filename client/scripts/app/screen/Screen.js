define(["controller/Mediator"], function(Mediator){

	var Screen = function(name){
		this.element = $("#Fragments #"+name);
		this.element.detach();
		this.name = name;
		Mediator.route("screen/"+name+"/display", this.display.bind(this));
		Mediator.route("screen/"+name+"/disappear", this.disappear.bind(this));
	}

	Screen.prototype.display = function(container){
		container.html(this.element);
		container.addClass(this.name);
		this.element.delay(300).fadeTo(500, 1);
	}

	Screen.prototype.disappear = function(container){
		var el = this.element;
		this.element.fadeTo(500, 0, function(){
			el.detach();
		})
		container.removeClass(this.name);
	}

	return Screen;
})