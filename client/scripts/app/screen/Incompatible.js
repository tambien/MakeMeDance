define(["controller/Mediator", "screen/Screen"], function(Mediator, Screen){

	var dancing = new Screen("Incompatible");

  Mediator.send("dancing/Song/stopSong");

	dancing.element.find(".Button").click(function(){
		Mediator.send("reset");
    console.log('reset');
	});	
})