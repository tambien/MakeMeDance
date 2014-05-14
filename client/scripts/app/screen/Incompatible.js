define(["controller/Mediator", "screen/Screen"], function(Mediator, Screen){

	var dancing = new Screen("Incompatible");

	dancing.element.find(".Button").click(function(){
		Mediator.send("reset");
	});	
})