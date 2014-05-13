define(["controller/Mediator", "screen/Screen", "screen/Avatar"], function(Mediator, Screen, Avatar){

	var selection = new Screen("Selection");

	var titleText = selection.element.find("#Title");

	//make the avatars
	var avatars = [];

	function makeAvatars(){
		var avatarContainer = selection.element.find("#Avatars");
		var a = new Avatar("A", avatarContainer);
		a.onclick(clicked);
		var b = new Avatar("B", avatarContainer);
		b.onclick(clicked);
		var c = new Avatar("C", avatarContainer);
		c.onclick(clicked);
	}

	var youSelection = null;
	var themSelection = null;

	function clicked(selected){
		if (youSelection === null){
			youSelection = selected;
			youSelection.gray();
			titleText.html("WHO DO YOU WANT TO BE MATCHED WITH?");
			Mediator.send("player/you/avatar", youSelection.name);
		} else {
			themSelection = selected;
			themSelection.gray();
			Mediator.send("player/them/avatar", themSelection.name);
			//add a short delay
			setTimeout(function(){
				Mediator.send("screen/Selection/chosen");
			}, 300)
		}
	}

	Mediator.route("screen/Selection/display", function(){
		//get the online player count
		$.ajax({
			url: window.location.origin + "/playercount",
			type : "GET",
			success: function(data){
				selection.element.find("#Count").html(data.count + " USERS ONLINE");
			},
			dataType: "json"
		});
	});

	//initialize
	makeAvatars();
})