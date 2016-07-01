$(document).ready(function() {

	$('.weather-block').each(function() {
		var element = $(this);
	    //var state = $('.inner .forecast').attr('data-state'); 
	    var state = $(this).data('state');
	    var city = $(this).data('city');	
	    //var city = $(this).data("city");	
        var key = '3af49458477b67aa';
	    var Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+state+"/"+city+".json";
	    console.log(Weather); 
	    $.ajax({
		    url : Weather,
	    	dataType : "jsonp",
	    	success : function(results) {
				var location = results.current_observation.display_location.full;
				console.log(location);
				var temp = results.current_observation.feelslike_f;
				var img = results.current_observation.icon_url;
				var desc = results.current_observation.weather;
				var wind = results.current_observation.wind_string;
				//var test = $(this).find('.location').html(location);
				element.find('.location').html(location);
				element.find('.temp').html(temp);
				element.find('.desc').html(desc);
				element.find('.wind').html(wind);
				element.find('.img').attr('src', img);
			}				
		});	    
	})



	//var location =data['response']['current_observation']['display_location']['full'];
	//var temp = data['response']['current_observation']['feels_likef'];
	//var img = data['response']['current_observation']['image']['url'];
	//var desc = data['response']['current_observation']['weather'];
	//var wind = data['response']['current_observation']['wind_string'];
	//setting the spans to the correct parameters
	

}); // End of doc ready. 	