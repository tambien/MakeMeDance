define(["controller/Mediator"], function(Mediator){
	var container = $("#Thumbs");

	var up = container.find("#Up");
	var down = container.find("#Down");
	var vote = 0;

	up.click(function(){
		Mediator.send("dancing/voted", "up");
	});


	down.click(function(){
		Mediator.send("dancing/voted", "down");
	});

	Mediator.route("dancing/voted", function(direction){
		if (direction === "up"){
			vote++;
		} else if (direction === "down"){
			vote--;
		}
	});

	Mediator.route("dancing/voted", testVote);

	function testVote(){
		//set the arrow level
		if (vote >= 3){
			Mediator.send("dancing/over", true);
		} else if (vote <= -3){
			Mediator.send("dancing/over", false);
		} else if (vote === 0){ //set hte thumb images
			up.css({
				"background" : "url('../images/Up_0.png')"
			});
			down.css({
				"background" : "url('../images/Down_0.png')"
			});
		} else if (vote < 0){
			down.css({
				"background" : "url('../images/Down_"+Math.abs(vote)+".png')"
			});
		} else {
			up.css({
				"background" : "url('../images/Up_"+vote+".png')"
			});
		}
	}

	Mediator.route("reset", function(){
		vote = 0;
		testVote();
	});

	return {
		getVote : function(){
			return vote;
		}
	}

});