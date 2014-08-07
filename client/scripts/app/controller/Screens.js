define(["controller/Mediator", "screen/Launch", "screen/Loading", "screen/Dancing", "screen/Selection", "screen/Compatible", "screen/Incompatible"], function(Mediator){

	var container = $("#Container");

	//start with the loading screen
	Mediator.send("screen/Launch/display", container);

	var currentScreen = null;

	//wait for everything to load
	Mediator.route("allLoaded", function(){
		//after it's loaded, go to the launch screen
		// transition("Loading", "Launch");
		// 
		// 
		//get the user info
		$.ajax({
			url: window.location.origin + "/userinfo",
			type : "GET",
			success: function(data){
				console.log(data.spotData);
				Mediator.send("player/you/setUserInfo", data.spotData);
			},
			dataType: "json"
		});
	});

	//when launch is clicked, go to the play screen	
	Mediator.route("screen/Launch/clicked", function(){
		transition("Launch", "Selection");
	});

	//after the players are selected
	Mediator.route("screen/Selection/chosen", function(){
		//go to the dance screen
		transition("Selection", "Dancing");
	});

	Mediator.route("dancing/over", function(compatible){
		if (compatible){
			transition("Dancing", "Compatible");
		} else {
			transition("Dancing", "Incompatible");
		}
	});

	Mediator.route("reset", function(){
		transition(currentScreen, "Selection");
	});

	Mediator.route("player/them/disconnected", function(){
		if (currentScreen === "Dancing"){
			Mediator.send("reset");
		}
	});

	function transition(from, to){
		Mediator.send("screen/"+from+"/disappear", container);
		Mediator.send("screen/"+to+"/display", container);
		currentScreen = to;
	}

})