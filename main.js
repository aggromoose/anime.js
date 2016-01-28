var formatName = function(){
	var name = $("#inputField").val();
	name = name.toLowerCase().replace(/ /g, "-");
	$("#inputField").val(name);
}

var update = function(){
	$(".animejs").each(function(i){
		var classList = $(this).attr('class').split(/\s+/);
		classList[1] = $("#inputField").val();

		$(this).attr('class', classList.toString().replace(/,/g, " "));
	});

	updateAnimeJS();
}

$(document).ready(function(){
	$("#inputButton").click(function(){
		formatName();
		update();
	});

	$("#inputField").keyup(function (e) {
	    if (e.keyCode == 13) {
	    	formatName();
	        update();
	    }
	});

});