define(["controller/Mediator"], function(Mediator){
	var container = $("#Thumbs");

	var up = container.find("#Up");

	up.click(function(){
		vote++;
		Mediator.send("dancing/voted", "up");
	});

	var down = container.find("#Down");

	down.click(function(){
		vote--;
		Mediator.send("dancing/voted", "down");
	});


	var vote = 0;

	function testVote(){
		if (vote > 1){
			Mediator.send("dancing/over", true);
		} else if (vote < -1){
			Mediator.send("dancing/over", false);
		}
	}

	Mediator.route("dancing/voted", testVote);

})