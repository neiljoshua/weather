$(document).ready(function() {

	var keyTriggered = 0;

	function local_weather() {
		var $element = $('.local-weather'),
				$details = $('.info-weather'),
				state = $element.data('state'),
				city = $element.data('city'),
				key = '6d21846ad7649b70',
				Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+state+"/"+city+".json";

		$.ajax({
	    url : Weather,
     	dataType : "jsonp",
  	  success : function(results) {
				var location = results.current_observation.display_location.full,
						temp = results.current_observation.temp_f,
					  desc = results.current_observation.weather,
					  icon =results.current_observation.icon,
					  feels =results.current_observation.feelslike_f,
					  wind = results.current_observation.wind_gust_mph,
					  humidity = results.current_observation.relative_humidity,
					  dewpoint = results.current_observation.dewpoint_f,
					  pressure = results.current_observation.pressure_mb;

				$element.find('.location').html(location);
				$element.find('.temp').html(Math.round(temp));
				$element.find('.desc').html(desc);
				$element.find('.icon').addClass(Icons[desc]);
				$details.find('.feels').html(Math.round(feels));
				$details.find('.wind').html(Math.round(wind));
				$details.find('.humidity').html(humidity);
				$details.find('.dew-point').html(dewpoint);
				$details.find('.pressure').html(pressure);
	    }
	  });
	}

	local_weather();

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

	function toggleResults() {
    var $listItems = $('li');

		$('.search__input').keyup(function(e)
		{
		    var key = e.keyCode,
		        $selected = $listItems.filter('.selected'),
		        $current;

		    if ( key != 40 && key != 38 && key != 13 ) return;

		    $listItems.removeClass('selected');

		    if ( key == 40 ) // Down key
		    {
		        if ( ! $selected.length || $selected.is(':last-child') ) {
		            $current = $listItems.eq(0);
		        }
		        else {
		            $current = $selected.next();
		        }
		        $current.addClass('selected');
		    }
		    else if ( key == 38 ) // Up key
		    {
		        if ( ! $selected.length || $selected.is(':first-child') ) {
		            $current = $listItems.last();
		        }
		        else {
		            $current = $selected.prev();
		        }
		        $current.addClass('selected');
		    }
		    else if ( key == 13 ) // Enter Key
		    {
		    	var $current = $selected.children('a').data('url');
		    	$('.search__results').empty();
		    	getWeather($current);
		    	$selected.empty();
		    	$('.search__input').blur();
		    }
		});
	}

	function getCities() {
		$('.search__results').empty();
		var cityName ='',
				line = '',
				city = $('.search__input').val(),
				element = $('.search__results'),
				Weather = "http://autocomplete.wunderground.com/aq?query=" + city + "&h=0",
				url = Weather + '&cb=?';

		$.getJSON(url, function(jsonp){
	    $('#json-results').html(JSON.stringify(jsonp, null, 1));
	    var locations = JSON.stringify(jsonp, null, 1);
	    locations = JSON.parse(locations);

	    for (var i = 0; i < locations.RESULTS.length; i++) {
	       var cityName = locations.RESULTS[i].name,
	       		 line = locations.RESULTS[i].l;

	       $('.search__results').append('<li value= "'+i+'" > <a href="#" class="filter-city" data-url="'+line+'">' +cityName+ '</a></li>');
	       $('.search__results').removeClass('hide-results').addClass('show-results');
	    }

	    $(".search__results li").hover(function() {
	   		$('.search__results li').removeClass('selected');
	   		$(this).addClass('selected');
	    });
	    toggleResults();

		});
	}

	function updateInput(location) {
		$('.search__input:text').val('');
	}

	function getWeather(cityLocation){

		$('.search').removeClass('visible');
		var $element = $('.local-weather'),
				$details = $('.info-weather'),
				key = '6d21846ad7649b70',
				weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+cityLocation+".json";

		$.ajax({
			url : weather,
			dataType : "jsonp",
			success : function(results) {
			  var temp = (results.current_observation.temp_f),
			      desc = (results.current_observation.weather),
			      location = (results.current_observation.display_location.full),
			      feels =results.current_observation.feelslike_f,
					  wind = results.current_observation.wind_gust_mph,
					  humidity = results.current_observation.relative_humidity,
					  dewpoint = results.current_observation.dewpoint_f,
					  pressure = results.current_observation.pressure_mb;

				$element.find('.location').html(location);
				$element.find('.temp').html(Math.round(temp));
				$element.find('.desc').html(desc);
				$element.find('.icon').addClass(Icons[desc]);
				$details.find('.feels').html(Math.round(feels));
				$details.find('.wind').html(Math.round(wind));
				$details.find('.humidity').html(humidity);
				$details.find('.dew-point').html(dewpoint);
				$details.find('.pressure').html(pressure);
			 }
	  });
		debugger
		$('.search__results').empty();
		$('header').removeClass('hidden');
    updateInput(location);

	}

	//Selects city from list on click event.

	$('.search__results').on('click', 'a',function(e){
		e.preventDefault();
		var cityLocation = $(this).data('url');
		getWeather(cityLocation);
	});

	$('.search__form').submit( function ( event ){
		event.preventDefault();
	});

	var check_Lenght_Input = function(){

		$('.search__input').keyup(function () {
			var keyEntered = $(this).val();
				if ( keyEntered == '') {
					$('.search__results').empty();
					keyTriggered = 0;
				}
		});

	}

	// Starts searching on search__input input.
	check_Lenght_Input();

	$('.search__input').on('keypress',function (){

		keyTriggered++;
		if (keyTriggered >=2 ){
			getCities();
		}

	});

	$('.find').on( 'click', function (e) {

		event.preventDefault();
		$('.search').addClass('visible');
		$('header').addClass('hidden');

	});

	$('.cancel').on( 'click', function (e) {

		event.preventDefault();
		$('.search').removeClass('visible');
		$('header').removeClass('hidden');
		$('.search__results').empty();
		$('.search__input').val('');

	});

}); // End of doc ready.

