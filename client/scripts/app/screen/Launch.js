define(["controller/Mediator", "screen/Screen"], function(Mediator, Screen){

	var launch = new Screen("Launch");

	launch.element.find(".Button").click(function(){
		Mediator.send("screen/Launch/clicked");
	})
	
})