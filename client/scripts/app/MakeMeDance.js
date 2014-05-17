require.config({
	baseUrl : "./scripts/app",
	paths : {
		"deps" : "../deps"
	}
});

require(["controller/Mediator", "controller/Screens", "deps/domReady!", "players/Players"], function(Mediator){
	console.log("MAKE ME DANCE v02");

	Mediator.route("update", function(){

	})
})