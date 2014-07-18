define(["controller/Mediator", "screen/Screen", "players/Them", "players/You"], function(Mediator, Screen, Them, You){

	var dancing = new Screen("Compatible");

	//add the avatars
	Mediator.route("screen/Compatible/display", function(){
		dancing.element.find("#Avatar0").addClass(Them.avatar);
		dancing.element.find("#Avatar1").addClass(You.avatar);
		console.log(Them.avatar, You.avatar);
		Mediator.send("dancing/SpotifyPlayer/stop");
	});

	Mediator.route("screen/Compatible/disappear", function(){
		dancing.element.find("#Avatar0").removeClass(Them.avatar);
		dancing.element.find("#Avatar1").removeClass(You.avatar);
	});
	

	dancing.element.find(".Button").click(function(){
		Mediator.send("reset");
	});
})