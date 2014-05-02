define(["controller/Mediator", "screen/Screen"], function(Mediator, Screen){

	var loading = new Screen("Loading");

	// Mediator.route("fileLoaded", fileLoaded);

	//pretend to load until there are files
	loading.element.animate({
		width: "100%"
	}, 2000, function(){
		Mediator.send("allLoaded");
	})


})