define(["controller/Mediator"], function(Mediator){

	var Screen = function(name){
		this.element = $("#Container #"+name);
		// this.element.detach();
		this.name = name;
		Mediator.route("screen/"+name+"/display", this.display.bind(this));
		Mediator.route("screen/"+name+"/disappear", this.disappear.bind(this));
	}

	Screen.prototype.display = function(container){
		// container.html(this.element);
		container.delay(300).addClass(this.name);
		this.element.delay(300).addClass("Visible");
		this.element.delay(300).fadeTo(500, 1);
	}

	Screen.prototype.disappear = function(container){
		var el = this.element;
		this.element.fadeTo(300, 0, function(){
			el.removeClass("Visible");
		})
		container.removeClass(this.name);
	}

	return Screen;
})