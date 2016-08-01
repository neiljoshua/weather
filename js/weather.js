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
					//console.log(location);
					var temp = results.current_observation.feelslike_f;
					var img = results.current_observation.icon_url;
					var desc = results.current_observation.weather;
					var wind = results.current_observation.wind_string;
					//var test = $(this).find('.location').html(location);
					element.find('.location').html(location);
					element.find('.temp').html(temp);
					element.find('.desc').html(desc);
					element.find('.wind').html(wind);
					element.find('.icon').addClass(Icons[desc]);
			    }				
		   });	    
	})

	var Icons = {
		"Partly Cloudy": "icon-cloud-sun",
		"Cloudy":"icon-clouds",
		"Chance of Flurries":"icon-snow-alt",
		"Chance of Rain":"icon-rain",
		"Freezing Rain":"icon-hail",
		"Rain":"icon-rain",
		"Sleet":"icon-hail",
		"Snow":"icon-snow",
		"Sunny":"icon-sun",
		"Thunderstorms":"icon-clouds-flash-alt",	
		"Thunderstorm":"icon-clouds-flash",
		"Unkown":'icon-help-circled-alt',
		"Scattered Clouds":"icon-cloud-sun",
		"Clear":"icon-sun",
		"Mostly Cloudy":"icon-clouds",
	}

	// var weatherTag = "Partly Cloudy";
	
// console.log(Icons[weatherTag]);

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
		$('.inner #weather-results div').css('background-image','none');
		//$('.inner #weather-results div').css('background-color','#87767E');
		console.log('tag', lTag);
		var Key = '2212bc8253d6f3ed04b9e18ee5ddaa51';
		var flickrApi = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+Key+"&lat="+lLatitude+"&lon="+lLongitude+"&tags="+lTag+"%2C"+lTag2+"%2C"+"landscape"+"%2C"+"street"+"&sort=relevance&page=1&in_gallery=true&format=json&jsoncallback=?";
		var url = flickrApi + '&cb=?';
		console.log(url);
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
				var imgUrl = "https://farm" + photoFarm + ".staticflickr.com/" + photoServer + "/"+ photoId + "_" + photoSecret+"_h.jpg";
				$('.inner #weather-results div').css('background-image','url('+imgUrl+')');
				$('.inner #weather-results div').css('background-size','100% 100%');
			}else{
				$('.inner #weather-results div').css('background-color','#87767E');
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
			console.log(cityLocation);
			var element = $('#weather-results');
			var key = '6d21846ad7649b70';
			var weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+cityLocation+".json";
			console.log(weather);
			$.ajax({
				  url : weather,
				  dataType : "jsonp",
				  success : function(results) {
				  locationLat = results.current_observation.display_location.latitude;
				  locationLon = results.current_observation.display_location.longitude;
				  weatherTag = results.current_observation.weather;
				  console.log('weather', weatherTag);
				  var location = results.current_observation.display_location.full;
				  var flickrLocation = location.split(',');
				  flickrCity = flickrLocation[0];
				  flickrCountry = flickrLocation[1];
				  loadBackground(locationLat, locationLon, flickrCity, flickrCountry);
				  updateInput(location);
				  var temp = results.current_observation.feelslike_f;
				  element.find('#location-results').html(location);
				  element.find('#icon-results').attr('src', img);
				  element.find('#temp-results').html(temp);
				 
			  	}
		    });

	    $('#weather-results').removeClass('hide-results').addClass('show-results');
	    $('#results').removeClass('show-results').addClass('hide-results');
		});
	}

	//open and closes user input window.

	$('.show-header').on('click',function(e){
		e.preventDefault();
		$('close-header').removeClass('inactive').addClass('active');
		$('#search-wrapper').removeClass('inactive').addClass('active');
		$(this).removeClass('active').addClass('inactive');
	});

	$('.close-header').on('click', function(e){
		e.preventDefault();	
		$(this).removeClass('inactive').addClass('active');
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
			$('ul#city-list').empty();
		}
	})

	getWeather();

	$('.button-results').on('click',function(){
		 $('#weather-results').removeClass('show-results').addClass('hide-results');
	});

	$('#user-location').blur(function(){
		$('#results').removeClass('show-results').addClass('hide-results');
	});
	$('#user-location:text').focusin(function(){
		$('#results').removeClass('hide-results').addClass('show-results');
	});

}); // End of doc ready. 	