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
		    console.log(locations.RESULTS.length);

		    for (var i = 0; i < locations.RESULTS.length; i++) { 
		        cityName = locations.RESULTS[i].name;
		    	line = locations.RESULTS[i].l;
		    	$('ul#city-results').append('<li><a href="#" class="filter-city" data-url="'+line+'">' +cityName+ '</a></li>');
			    $('#results').removeClass('hide-results').addClass('show-results');
		    }
		});
	}		

	function jsonFlickrApi (response){
		for ( var i =0; i < response.photo.length; i++){
			var photoId = response.photos.id;
			var photoServer = response.photo.server;
			var photoFarm = response.photo.farm;
			var photoSecret = response.photo.secret;
			var imgUrl = "https://farm" + photoFarm + ".staticflickr.com/" + photoServer + "/"+ photoId + "_" + photoSecret+"_m.jpg";
			console.log(imgUrl);
			$('#weather-results').attr('background-image','url('+ imgUrl + ')');
		}	
	}

	function loadBackground(lLatitude, lLongitude, lTag) {
	
		console.log('lLatitude');
		console.log(lLongitude);
		console.log(lTag);
		var Key = '2212bc8253d6f3ed04b9e18ee5ddaa51';
		//var Key = '360fe8488d7625a08f7e9a05f56f8711';
		//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=360fe8488d7625a08f7e9a05f56f8711&tags=new+york&text=sunny+city+view&privacy_filter=1&lat=40.75013351&lon=-73.99700928&format=json&api_sig=5034ee17dfa772398655a916c1d5653c
	    var flickrApi = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+Key+"&lat="+lLatitude+"&lon="+lLongitude+"&accuracy=1&tags="+lTag+"&sort=relevance&format=json&jsoncallback=?";
		//var flickrApi = "//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + Key + "&tags=" + lTag + "&text=" + lTag + "+view&privacy_filter=1&lat=" + lLatitude + "&lon=" + lLongitude + "&format=json&api_sig=5034ee17dfa772398655a916c1d5653c";
	    var url = flickrApi + '&cb=?';
	    $.getJSON(url,function (jsonp){
	    	$('#json-results').html(JSON.stringify(jsonp, null, 1));
	    	var results = JSON.stringify(jsonp, null, 1);
	    	results = JSON.parse(results);
	    	console.log(results);
	    	for ( var i =0; i < 2; i++){
				var photoId = results.photos.photo.id;
				console.log(photoId);
				var photoServer = results.photos.photo.server;
				console.log(photoServer);
				var photoFarm = results.photos.photo.farm;
				console.log(photoFarm);
				var photoSecret = results.photos.photo.secret;
				console.log(photoSecret);
				var imgUrl = "https://farm" + photoFarm + ".staticflickr.com/" + photoServer + "/"+ photoId + "_" + photoSecret+"_m.jpg";
				console.log(imgUrl);
				$('#weather-results').attr('background-image','url('+ imgUrl + ')');
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
				  locationLon = results.current_observation.display_location.longitude;
				  weatherTag = results.current_observation.weather;
				  loadBackground(locationLat, locationLon, weatherTag);
				  var location = results.current_observation.display_location.full;
				  var temp = results.current_observation.feelslike_f;
				  var img = results.current_observation.icon_url;
				  element.find('#location-results').html(location);
				  element.find('#icon-results').attr('src', img);
				  element.find('#temp-results').html(temp);
				  // element.attr('data-lat',locationLat);
				  // element.attr('data-lon',locationLon);
				  // element.attr('data-weather',weatherTag);
			  	}
		    });

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
	//loadBackground();
	$('.button-results').on('click',function(){
		$('#weather-results').removeClass('show-results').addClass('hide-results');
	})
}); // End of doc ready. 	