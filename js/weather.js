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

	function loadBackground(lLatitude, lLongitude, lTag) {
	
		console.log('lLatitude');
		console.log(lLongitude);
		console.log(lTag);
		var Key = '2212bc8253d6f3ed04b9e18ee5ddaa51';
		//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=360fe8488d7625a08f7e9a05f56f8711&tags=new+york&text=sunny+city+view&privacy_filter=1&lat=40.75013351&lon=-73.99700928&format=json&api_sig=5034ee17dfa772398655a916c1d5653c
	    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+Key+"&lat="+lLatitude+"&lon="+lLongitude+"&accuracy=1&tags="+lTag+"&sort=relevance&extras=url_l&format=json";
		//var url = "//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + Key + "&tags=" + weatherTag + "&text=" + weatherTag + "+view&privacy_filter=1&lat=" + locationLat + "&lon=" + locationLon + "&format=json&api_sig=5034ee17dfa772398655a916c1d5653c";
	    $.getJSON(url,function(jsonp){
	    	$('#json-results').html(JSON.stringify(jsonp, null, 1));
	    	var results = JSON.stringify(jsonp, null, 1);
	    	results = JSON.parse(results);
	    	for ( var i =0; i <2; i++){
	    		var photoId = results.photos.id;
	    		var photoServer = results.photo.server;
	    		var photoFarm = results.photo.farm;
	    		var photoSecret = ressults.photo.secret;
	    		var imgUrl = "https://farm" + photoFarm + ".staticflickr.com/" + photoServer + "/"+ photoId + "_" + photoSecret+"_m.jpg";
	    		$('#weather-results').css('background-image','url('+ imgUrl + ')')
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
				  console.log(locationLon);
				  weatherTag = results.current_observation.weather;
				  console.log(weatherTag);
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
		loadBackground(locationLat,locationLon,weatherTag);	
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