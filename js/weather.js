$(document).ready(function() {

	// $('.weather-block').each(function() {
	// 	var element = $(this);
	//     var state = $(this).data('state');
	//     var city = $(this).data('city');	
 //        var key = '6d21846ad7649b70';
 //        var Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+state+"/"+city+".json"
	//     //console.log(Weather); 
 //       $.ajax({
	// 	        url : Weather,
	//      	dataType : "jsonp",
	//     	    success : function(results) {
	// 				var location = results.current_observation.display_location.full;
	// 				//console.log(location);
	// 				var temp = results.current_observation.feelslike_f;
	// 				var img = results.current_observation.icon_url;
	// 				var desc = results.current_observation.weather;
	// 				var wind = results.current_observation.wind_string;
	// 				//var test = $(this).find('.location').html(location);
	// 				element.find('.location').html(location);
	// 				element.find('.temp').html(temp);
	// 				element.find('.desc').html(desc);
	// 				element.find('.wind').html(wind);
	// 				element.find('.img').attr('src', img);
	// 		    }				
	// 	   });	    
	// })
	
	function getCities() {
		var cityName ='';
		var line = '';
		var city = $('#user-location').val();
		var element = $('#weather-results');
		console.log(city);
		var Weather = "http://autocomplete.wunderground.com/aq?query=" + city + "&h=0" ;
	    console.log(Weather);
	    var url = Weather + '&cb=?';
			$.getJSON(url, function(jsonp){
		    $('#json-results').html(JSON.stringify(jsonp, null, 1));
		    var locations = JSON.stringify(jsonp, null, 1);
		    locations = JSON.parse(locations);
		    // console.log(locations);
		    console.log(locations.RESULTS.length);

		    for (var i = 0; i < locations.RESULTS.length; i++) { 
		    	//console.log(locations.RESULTS[i].name);
		        cityName = locations.RESULTS[i].name;
		    	line = locations.RESULTS[i].l;
		    	// console.log(cityName);
		    	// console.log(line);
		    	$('ul#city-results').append('<li><a href="#" class="filter-city" data-url="'+line+'">' +cityName+ '</a></li>');
			    $('#results').removeClass('hide-results').addClass('show-results');
		    }
		});
	}		

	function loadBackground() {
		var locationLat = $('#location-results').data('lat');
		console.log(locationLat);
		var locationLon = $('#location-results').data('lon');
		console.log(locationLon);
		var weatherTag = $('#location-results').data('weather');
		console.log(weatherTag);
		var Key = '2212bc8253d6f3ed04b9e18ee5ddaa51';
	    var photoResult = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + Key + "&lat=" + locationLat + "&lon=" + locationLon + "&accuracy=1&tags=" + weatherTag + "&sort=relevance&extras=url_l&format=json";
	    console.log(photoResult);
	    $.ajax({
	    	url : photoResult,
	    	dataType : "jsonp",
	    	success : function(results){
	    		var photoLink = results.photos.page.url_l;
	    		var photoSource = results.photo.owner;
	    		var photoSourceId = results.photo.id.
	    		console.log(photoLink);
	    		console.log(photoSource);
	    		console.log(photoSourceId);
	    	}

	    });
	}

	function getWeather(){
		
		$('#city-results').on('click', 'a',function(e){
			e.preventDefault();
			var locationLat =' ';
			var locationLon =' ';
			var weatherTag = ' ';
			var cityLocation = $(this).data('url');
			console.log(cityLocation);
			var element = $('#weather-results');
			var key = '6d21846ad7649b70';
			var weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+cityLocation+".json";
			//console.log(weather);
			$.ajax({
				  url : weather,
				  dataType : "jsonp",
				  success : function(results) {
				  locationLat = results.current_observation.display_location.latitude;
				  console.log(locationLat);
				  locationLon = results.current_observation.display_location.longitude;
				  weatherTag = results.current_observation.weather;
				  var location = results.current_observation.display_location.full;
				  var temp = results.current_observation.feelslike_f;
				  var img = results.current_observation.icon_url;
				  element.find('#location-results').html(location);
				  element.find('#icon-results').attr('src', img);
				  element.find('#temp-results').html(temp);
				  element.find('#location-results').attr('data-lat',locationLat);
				  element.find('#location-results').attr('data-lon',locationLon);
				  element.find('#location-results').attr('data-weather',weatherTag);
			  	}
		    });

		loadBackground();	
	    $('#weather-results').removeClass('hide-results').addClass('show-results');
	    $('#results').removeClass('show-results').addClass('hide-results');
		});
	}


	$('.user-form').submit(function( event ){
		event.preventDefault();
		console.log('Hola!');
	});

	$('#user-location').on('change',function (){
		getCities();
	})

	getWeather();
	
	

	$('.button-results').on('click',function(){
		$('#weather-results').removeClass('show-results').addClass('hide-results');
	})
}); // End of doc ready. 	