$(document).ready(function() {

	function getWeather() {
	  var state ='NY'; 	
	  var city = 'new_york';	
      var key = '3af49458477b67aa';
	  var Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+state+"/"+city+".json";

	  $.ajax({
		url : Weather,
		dataType : "jsonp",
		success : function(results) {
			var location1 = results.current_observation.display_location.full;
			var temp1 = results.current_observation.feelslike_f;
			var img1 = results.current_observation.icon_url;
			var desc1 = results.current_observation.weather;
			var wind1 = results.current_observation.wind_string;
			// get all the information
			//console.log(img1);
			$('#location1').html(location1);
		    $('#temp1').html(temp1);
			$('#desc1').html(desc1);
			$('#wind1').html(wind1);
			//filling the image src attribute with the image url
			$('#img1').attr('src', img1);
		}
		});
	}
	getWeather();


	//var location =data['response']['current_observation']['display_location']['full'];
	//var temp = data['response']['current_observation']['feels_likef'];
	//var img = data['response']['current_observation']['image']['url'];
	//var desc = data['response']['current_observation']['weather'];
	//var wind = data['response']['current_observation']['wind_string'];
	//setting the spans to the correct parameters
	

}); // End of doc ready. 	