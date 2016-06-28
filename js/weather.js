$(document).ready(function() {

	function getWeather() {
	    var state = $('.inner .forecast').attr('data-state'); 	
	    var city = $('.inner .forecast').attr('data-city');	
        var key = '3af49458477b67aa';
	    var Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+state+"/"+city+".json";
	    $.ajax({
		    url : Weather,
	    	dataType : "jsonp",
	    	success : function(results) {
				var location = results.current_observation.display_location.full;
				var temp = results.current_observation.feelslike_f;
				var img = results.current_observation.icon_url;
				var desc = results.current_observation.weather;
				var wind = results.current_observation.wind_string;
				// get all the information
				//console.log(img1);	
				$('.location').html(location);
			    $('.temp').html(temp);
				$('.desc').html(desc);
				$('.wind').html(wind);
				//filling the image src attribute with the image url
				$('.img').attr('src', img);
			}				
		});	
	};	    

	getWeather();


	//var location =data['response']['current_observation']['display_location']['full'];
	//var temp = data['response']['current_observation']['feels_likef'];
	//var img = data['response']['current_observation']['image']['url'];
	//var desc = data['response']['current_observation']['weather'];
	//var wind = data['response']['current_observation']['wind_string'];
	//setting the spans to the correct parameters
	

}); // End of doc ready. 	