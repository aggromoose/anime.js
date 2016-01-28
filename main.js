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
		update();
	});

	$("#inputField").keyup(function (e) {
	    if (e.keyCode == 13) {
	        update();
	    }
	});

});