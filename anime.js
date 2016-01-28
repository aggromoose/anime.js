var manageData = function(obj, classList, data){
	if (obj.prop("tagName") == "IMG"){
		obj.attr("src", data[classList[2]]);
	} else {

		if (classList[2] == "genres"){
			var genres = data[classList[2]];
			var genresString = new Array(genres.length);
			for (var i = 0; i < genres.length; i++) {
				genresString[i] = genres[i]['name'];
			};
			obj.html(genresString.toString().replace(/,/g, ", "));
		} else {
			obj.html(data[classList[2]]);
		}
	}
}

var makeRequest = function(obj){
	var cors = "http://cors.io/?u=";
	var url = 'http://hummingbird.me/api/v1/anime/';

	var classList = obj.attr('class').split(/\s+/);

	$.getJSON(cors + url + classList[1], function(data){
		manageData(obj, classList, data);
	});
}

var updateAnimeJS = function(){
	$(".animejs").each(function(i){
		var obj = $(this);
		makeRequest(obj);
	});
}

$(document).ready(function(){
	updateAnimeJS();
});