define(["controller/Mediator"], function(Mediator){
	var container = $("#Thumbs");

	var up = container.find("#Up");

	up.click(function(){
		Mediator.send("dancing/voted", "up");
		vote++;
		testVote();
	});

	var down = container.find("#Down");

	down.click(function(){
		Mediator.send("dancing/voted", "down");
		vote--;
		testVote();
	});


	var vote = 0;

	function testVote(){
		if (vote > 0){
			Mediator.send("dancing/over", true);
		} else if (vote < 0){
			Mediator.send("dancing/over", false);
		}
	}


})