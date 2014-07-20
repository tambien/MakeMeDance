define(["controller/Mediator", "screen/Screen"], function(Mediator, Screen){

	var loading = new Screen("Loading");

	// Mediator.route("fileLoaded", fileLoaded);
  loading.element.show();
	//pretend to load until there are files
	loading.element.animate({
		width: "100%"
	}, 800, function(){
    loading.element.hide();
    Mediator.send("allLoaded");
	})


})