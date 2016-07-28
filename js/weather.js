$(document).ready(function() {



	var bgcolorlist=new Array( "#A0157A", "#4105A0", "#03FCD8", "#B52AD1", "#1821F4", "#6B9010", "#D4C306", "#AB25DB", "#8BEF7A", "#2CB3A6", "#56BAF1", "#00CECB", "#E4115E", "#47E1EE", "#B32533", "#A928AC", "#24AD5B", "#6F2B5D", "#B15FCE", "#36A12F", "#F0EE8C", "#F6BD5B", "#072F69" );
	var usedIndex=new Array();

	$('.weather-block').each(function(){
	console.log(bgcolorlist);	
	var element = this;	
	var randomIndex = Math.floor(Math.random()*bgcolorlist.length);
		for(var i=0; i < bgcolorlist.length; i++){
			if ( bgcolorlist[randomIndex] != bgcolorlist[i] ) {
				//console.log("Hello");
				$(element).css("background-color", bgcolorlist[randomIndex]);
				usedIndex.push(bgcolorlist.splice(randomIndex,1));	
				console.log(usedIndex);
				break;
			}
		}
    });

	$('.open-slide').on('click',function(e){
		e.preventDefault();
		$('.user-form').removeClass('slide-up').addClass('slide-down');
		$(this).removeClass('active').addClass('inactive');
	});

	$('.close-slide').on('click', function(e){
		e.preventDefault();
		$('#search-wrapper .user-form').removeClass('slide-down').addClass('slide-up');
		$('a.open-slide').removeClass('inactive').addClass('active');
	});

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
		$('ul#city-results').empty();
		var cityName ='';
		console.log(cityName);
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
		    	console.log(cityName);
			    $('#results').removeClass('hide-results').addClass('show-results');
		    }
		});
	}		


	function loadBackground(lLatitude, lLongitude, lTag) {
		$('.inner #weather-results').css('background-image','none');
		$('.inner #weather-results').css('background-color','#ffffff');
		console.log(lLatitude);
		console.log(lLongitude);
		console.log(lTag);
		var Key = '2212bc8253d6f3ed04b9e18ee5ddaa51';
		var flickrApi = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+Key+"&lat="+lLatitude+"&lon="+lLongitude+"&accuracy=1&tags="+lTag+"&sort=relevance&format=json&jsoncallback=?";
		var url = flickrApi + '&cb=?';
	    $.getJSON(url,function (jsonp){
	    	$('#json-results').html(JSON.stringify(jsonp, null, 1));
	    	var results = JSON.stringify(jsonp, null, 1);
	    	results = JSON.parse(results);
	    	console.log(results.photos.photo.length);
	    	if ( results.photos.photo.length > 0 ){
		    	var randomPhoto = results.photos.photo[Math.floor(Math.random() * results.photos.photo.length)];
	    		console.log(randomPhoto);
				var photoId = randomPhoto.id;
				var photoServer = randomPhoto.server;
				var photoFarm = randomPhoto.farm;
				var photoSecret = randomPhoto.secret;
				var imgUrl = "https://farm" + photoFarm + ".staticflickr.com/" + photoServer + "/"+ photoId + "_" + photoSecret+"_m.jpg";
				console.log(imgUrl);
				$('.inner #weather-results').css('background-image','url('+imgUrl+')');
				$('.inner #weather-results').css('background-size','100% 100%');
			}else{
				$('.inner #weather-results').css('background-color','#928BC2');
			}
			$('.user-form').children('input').val('')	
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

	$('#user-location').on('keyup',function (){
		var keyEntered = $(this).val();
		if (keyEntered == ''){
			$('ul#city-results').empty();
			$('#results').removeClass('show-results').addClass('hide-results');
			$('#user-search').get[0].reset()
		}else{
			getCities();
		}
	})

	getWeather();

	$('.button-results').on('click',function(){
		 $('#weather-results').removeClass('show-results').addClass('hide-results');
	})

}); // End of doc ready. 	