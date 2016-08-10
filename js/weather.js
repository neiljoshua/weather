$(document).ready(function() {

	//dynamically give divs a random color.

	// var bgcolorlist=new Array( "#A0157A", "#4105A0", "#03FCD8", "#B52AD1", "#1821F4", "#6B9010", "#D4C306", "#AB25DB", "#8BEF7A", "#2CB3A6", "#56BAF1", "#00CECB", "#E4115E", "#47E1EE", "#B32533", "#A928AC", "#24AD5B", "#6F2B5D", "#B15FCE", "#36A12F", "#F0EE8C", "#F6BD5B", "#072F69" );
	// var usedIndex=new Array();

	// $('.weather-block div').each(function(){
	// var element = this;	
	// var randomIndex = Math.floor(Math.random()*bgcolorlist.length);
	// 	for(var i=0; i < bgcolorlist.length; i++){
	// 		if ( bgcolorlist[randomIndex] != bgcolorlist[i] ) {
	// 			//console.log("Hello");
	// 			$(element).css("background-color", bgcolorlist[randomIndex]);
	// 			usedIndex.push(bgcolorlist.splice(randomIndex,1));	
	// 			console.log(usedIndex);
	// 			break;
	// 		}
	// 	}
 //    });

	//Calls weather for each div.
	// $('.weather-block').each(function() {
	// 	var element = $(this);
	//     var state = $(this).data('state');
	//     var city = $(this).data('city');	
 // 	       var key = '6d21846ad7649b70';
	//        var Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+state+"/"+city+".json"
	//     //console.log(Weather); 
 // 	      $.ajax({
	// 	    url : Weather,
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
	// 				element.find('.icon').addClass(Icons[desc]);
	// 		    }				
	// 	   });	    
	// })

	$('.weather-block').each(function() {
		var element = $(this);
	    var state = $(this).data('state');
	    var city = $(this).data('city');	
 	       var key = '6d21846ad7649b70';
	       var Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+state+"/"+city+".json"
	    //console.log(Weather); 
 	      $.ajax({
		    url : Weather,
	     	dataType : "jsonp",
	    	    success : function(results) {
					var location = results.current_observation.display_location.full;
					var temp = results.current_observation.feelslike_f;
					//var img = results.current_observation.icon_url;
					var desc = results.current_observation.weather;
					var icon =results.current_observation.icon;
					console.log(icon);
					element.find('.location').html(location);
					element.find('.temp').html(temp);
					element.find('.desc').html(desc);
					element.find('.icon').addClass(Icons[desc]);
			    }				
		   });	    
	})

	var Icons = {
		"Drizzle":"icon-rain",
		"Light Drizzle":"icon-rain",
		"Heavey Drizzle":"icon-rain",
		"Rain":"icon-rain",
		"Light Rain":"icon-rain",
		"Heavy Rain":"icon-rain",
		"Snow":"icon-snow",
		"Light Snow":"icon-snow",
		"Heavy Snow":"icon-snow",
		"Light Snow Grains":"icon-snow",
		"Heavy Snow Grains":"icon-snow",
		"Snow Grains":"icon-snow",
		"Light Ice Crystals":"icon-hail",
		"Heavey Ice Crystals":"icon-hail",
		"Ice Crystals":"icon-hail",
		"Light Ice Pellets":"icon-hail",
		"Heavey Ice Pellets":"icon-hail",
		"Pellets":"icon-hail",
		"Mist":"icon-clouds",
		"Light Mist":"icon-clouds",
		"Heavy Mist":"icon-clouds",
		"Fog":"icon-clouds",
		"Light Fog":"icon-clouds",
		"Heavy Fog":"icon-clouds",
		"Fog Patches":"icon-clouds",
		"Light Fog Patches":"icon-clouds",
		"Heavy Fog Patches":"icon-clouds",
		"Smoke":"icon-clouds",
		"Light Smoke":"icon-clouds",
		"Heavy Smoke":"icon-clouds",
		"Volcanic Ash":"icon-clouds",
		"Light Volcanic Ash":"icon-clouds",
		"Heavy Volcanic Ash":"icon-clouds",
		"Wide Spread Dust":"icon-clouds",
		"Light Wide Spread Dust":"icon-clouds",
		"Heavy Wide Spread Dust":"icon-clouds",	
		"Sand":"icon-clouds",
		"Light Sand":"icon-clouds",
		"Heavy Sand":"icon-clouds",
		"Haze":"icon-clouds",
		"Light Haze":"icon-clouds",
		"Heavy Haze":"icon-clouds",
		"Spray":"icon-clouds",
		"Light Spray":"icon-clouds",
		"Heavy Spray":"icon-clouds",
		"Dust Whirls":"icon-clouds",
		"Light Dust Whirls":"icon-clouds",
		"Heavy Dust Whirls":"icon-clouds",
		"Sand Storm":"icon-clouds",
		"Light Sand Storm":"icon-clouds",
		"Heavy Sand Storm":"icon-clouds",
		"Low Drifting Snow":"icon-snow",
		"Light Low Drifting Snow":"icon-snow",
		"Heavy Low Drifting Snow":"icon-snow",
		"Low Drifting Widespread Dust":"icon-clouds",
		"Light Low Drifting Widespread Dust":"icon-clouds",
		"Heavy Low Drifting Widespread Dust":"icon-clouds",
		"Low Drifting Sand":"icon-clouds",
		"Light Low Drifting Sand":"icon-clouds",
		"Heavy Low Drifting Sand":"icon-clouds",
		"Blowing Snow":"icon-snow-alt",
		"Light Blowing Snow":"icon-snow-alt",
		"Heavy Blowing Snow":"icon-snow-alt",
		"Blowing Widespread Dust":"icon-clouds",
		"Light Blowing Widespread Dust":"icon-clouds",
		"Heavy Blowing Widespread Dust":"icon-clouds",
		"Blowing Sand":"icon-clouds",
		"Light Blowing Sand":"icon-clouds",
		"Heavy Blowing Sand":"icon-clouds",
		"Rain Mist":"icon-rain",
		"Light Rain Mist":"icon-rain",
		"Heavy Rain Mist":"icon-rain",
		"Rain Showers":"icon-rain",
		"Light Rain Showers":"icon-rain",
		"Heavy Rain Showers":"icon-rain",
		"Snow Showers":"icon-snow",
		"Light Snow Showers":"icon-snow",
		"Heavy Snow Showers":"icon-snow",
		"Snow Blowing Snow Mist":"icon-snow",
		"Light Snow Blowing Snow Mist":"icon-snow",
		"Heavy Snow Blowing Snow Mist":"icon-snow",
		"Ice Pellets Showers":"icon-hail",
		"Light Ice Pellets Showers":"icon-hail",
		"Heavy Ice Pellets Showers":"icon-hail",
		"Ice Pellets Showers":"icon-rain",
		"Light Ice Pellets Showers":"icon-rain",
		"Heavy Ice Pellets Showers":"icon-rain",
		"Hail Showers":"icon-rain",
		"Light Hail Showers":"icon-rain",
		"Heavy Hail Showers":"icon-rain",
		"Small Hail Showers":"icon-rain",
		"Light Small Hail Showers":"icon-rain",
		"Heavy Small Hail Showers":"icon-rain",
		"Thunderstorm":"icon-clouds-flash",
		"Light Thunderstorm":"icon-clouds-flash",
		"Heavy Thunderstorm":"icon-clouds-flash",
		"Thunderstorm and Rain":"icon-clouds-flash",
		"Light Thunderstorm and Rain":"icon-clouds-flash",
		"Heavy Thunderstorm and Rain":"icon-clouds-flash",
		"Thunderstorm and Snow":"icon-clouds-flash",
		"Light Thunderstorm and Snow":"icon-clouds-flash",
		"Heavy Thunderstorm and Snow":"icon-clouds-flash",
		"Thunderstorm and Ice Pellets":"icon-clouds-flash",
		"Light Thunderstorm and Ice Pellets":"icon-clouds-flash",
		"Heavy Thunderstorm and Ice Pellets":"icon-clouds-flash",
		"Thunderstorm and Hail":"icon-clouds-flash",
		"Light Thunderstorm and Hail":"icon-clouds-flash",
		"Heavy Thunderstorm and Hail":"icon-clouds-flash",
		"Freezing Drizzle":"icon-rain",
		"Light Freezing Drizzle":"icon-rain",
		"Heavy Freezing Drizzle":"icon-rain",
		"Freezing Rain":"icon-rain",
		"Light Freezing Rain":"icon-rain",
		"Heavy Freezing Rain":"icon-rain",
		"Freezing Fog":"icon-clouds",
		"Light Freezing Fog":"icon-clouds",
		"Heavy Freezing Fog":"icon-clouds",
		"Patches of Fog":"icon-clouds",
		"Shallow Fog":"icon-clouds",
		"Partial Fog":"icon-cloud-sun",
		"Overcast":"icon-sun",
		"Scattered Clouds":"icon-cloud-sun",
		"Small Hail":"icon-hail",
		"Partly Cloudy": "icon-cloud-sun",
		"Cloudy":"icon-clouds",
		"Chance of Flurries":"icon-snow-alt",
		"Chance of Rain":"icon-rain",
		"Freezing Rain":"icon-hail",
		"Sleet":"icon-hail",
		"Sunny":"icon-sun",
		"Thunderstorms":"icon-clouds-flash-alt",	
		"Thunderstorm":"icon-clouds-flash",
		"Unkown":'icon-help-circled-alt',
		"Scattered Clouds":"icon-cloud-sun",
		"Clear":"icon-sun",
		"Mostly Cloudy":"icon-clouds",
	}

	function getCities() {
		$('ul#city-list').empty();
		var cityName ='';
		var line = '';
		var city = $('#user-location').val();
		var element = $('#weather-results');
		var Weather = "http://autocomplete.wunderground.com/aq?query=" + city + "&h=0" ;
	    var url = Weather + '&cb=?';
			$.getJSON(url, function(jsonp){
		    $('#json-results').html(JSON.stringify(jsonp, null, 1));
		    var locations = JSON.stringify(jsonp, null, 1);
		    locations = JSON.parse(locations);

		   $("#city-list li:first-child").addClass('selected');

		    for (var i = 0; i < locations.RESULTS.length; i++) { 
		        cityName = locations.RESULTS[i].name;
		    	line = locations.RESULTS[i].l;
		    	$('ul#city-list').append('<li><a href="#" class="filter-city" data-url="'+line+'">' +cityName+ '</a></li>');
				$('#results').removeClass('hide-results').addClass('show-results');
		    }
		    $("#city-list li").hover(function(){
		   		$("#city-list li").removeClass('selected');
		   		$(this).addClass('selected');
		   })
		    $('#city-results li').keyup(function (e) {
				if (e.keyCode == 40) {
					alert('Enter key pressed!');
				}
				$('.selected').next().addClass('selected');
			});
		});
	}		


	function loadBackground(lLatitude, lLongitude, lTag, lTag2) {
		$('.weather-results').css('background-image','none');
		//console.log('tag', lTag);
		var Key = '2212bc8253d6f3ed04b9e18ee5ddaa51';
		var flickrApi = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+Key+"&lat="+lLatitude+"&lon="+lLongitude+"&tags="+lTag+"%2C"+lTag2+"%2C"+"landscape"+"%2C"+"street"+"&sort=relevance&page=1&in_gallery=true&format=json&jsoncallback=?";
		var url = flickrApi + '&cb=?';
		//console.log(url);
	    $.getJSON(url,function (jsonp){
	    	$('#json-results').html(JSON.stringify(jsonp, null, 1));
	    	var results = JSON.stringify(jsonp, null, 1);
	    	results = JSON.parse(results);
	    	console.log(results.photos.photo.length);
	    	if ( results.photos.photo.length > 0 ){
		    	var randomPhoto = results.photos.photo[Math.floor(Math.random() * results.photos.photo.length)];
	    		console.log(randomPhoto);
				var photoId = randomPhoto.id;
				console.log(photoId);
				var photoServer = randomPhoto.server;
				var photoFarm = randomPhoto.farm;
				var photoSecret = randomPhoto.secret;
				var imgUrl = "https://farm" + photoFarm + ".staticflickr.com/" + photoServer + "/"+ photoId + "_" + photoSecret+"_h.jpg";
				$('.weather-results').css('background-image','url('+imgUrl+')');
				$('.weather-results').css('background-size','100% 100%');
			}else{
				$('.weather-results').css('background-color','#87767E');
			}
			$('#user-search').children('input').val('');	
	    });
	}

	function updateInput(location) {
		$('#user-location:text').val('');
	}

	function getWeather(){
		
		$('#city-list').on('click', 'a',function(e){
			e.preventDefault();
			var locationLat =' ';
			var locationLon =' ';
			var weatherTag = ' ';
			var cityLocation = $(this).data('url');
			var element = $('.weather-results');
			var key = '6d21846ad7649b70';
			var weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+cityLocation+".json";
			$.ajax({
				  url : weather,
				  dataType : "jsonp",
				  success : function(results) {
				  locationLat = results.current_observation.display_location.latitude;
				  locationLon = results.current_observation.display_location.longitude;
				  weatherTag = results.current_observation.weather;
				  //console.log('weather', weatherTag);
				  wetherIcon = results.current_observation.icon;
				  console.log('weather', weatherTag);
				  var location = results.current_observation.display_location.full;
				  var flickrLocation = location.split(',');
				  flickrCity = flickrLocation[0];
				  flickrCountry = flickrLocation[1];
				  loadBackground(locationLat, locationLon, flickrCity, flickrCountry);
				  updateInput(location);
				  var temp = Math.round(results.current_observation.feelslike_f);
				  element.find('.location-results').html(location);
				  //element.find('#icon-results').attr('src', img);
				  element.find('.temp-results').html(temp);
				 
			  	}
		    });
		$('ul#city-list').empty();	
	    $('.weather-results').removeClass('hide-results').addClass('show-results');
	    $('#results').removeClass('show-results').addClass('hide-results');
		});
	}

	//open and closes user input window.

	$('.show-header').on('click',function(e){
		e.preventDefault();
		$('#search-wrapper').removeClass('inactive').addClass('active');
		$(this).removeClass('active').addClass('inactive');
		$('.beta-msg').addClass('white-color');
	});

	$('.close-header').on('click', function(e){
		e.preventDefault();	
		$(this).removeClass('inactive').addClass('active');
		$('.beta-msg').removeClass('white-color');
		$('#user-search').find('input').val('');
		$('ul#city-list').empty();
		$('#results').removeClass('show-results').addClass('hide-results');
		$('.show-header').removeClass('inactive').addClass('active');
		$('#search-wrapper').removeClass('active').addClass('inactive');
	});


	$('#user-search').submit(function( event ){
		event.preventDefault();
		console.log('Hola!');
	});

	$('#user-location').on('keyup',function (){
		var keyEntered = $(this).val();
		if (keyEntered == ''){
			$('ul#city-list').empty();
			$('#results').removeClass('show-results').addClass('hide-results');
			//$('#user-search').get[0].reset()
		}else{
			getCities();
		}
	})

	getWeather();

	$('.close-results').on('click',function(e){
		e.preventDefault();
		 $('.weather-results').removeClass('show-results').addClass('hide-results');
	});

	$('#user-location').blur(function(){
		$('#results').removeClass('show-results').addClass('hide-results');
	});
	$('#user-location:text').focusin(function(){
		$('#results').removeClass('hide-results').addClass('show-results');
	});

}); // End of doc ready. 	
