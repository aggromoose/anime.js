$(document).ready(function(){
	$("#inputButton").click(function(){
		$(".animejs").each(function(i){
			var classList = $(this).attr('class').split(/\s+/);
			classList[1] = $("#inputField").val();

			$(this).attr('class', classList.toString().replace(/,/g, " "));
		});

		updateAnimeJS();
	});
});