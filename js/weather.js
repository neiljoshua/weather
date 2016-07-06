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
		// 			var location = results.current_observation.display_location.full;
		// 			//console.log(location);
		// 			var temp = results.current_observation.feelslike_f;
		// 			var img = results.current_observation.icon_url;
		// 			var desc = results.current_observation.weather;
		// 			var wind = results.current_observation.wind_string;
		// 			//var test = $(this).find('.location').html(location);
		// 			element.find('.location').html(location);
		// 			element.find('.temp').html(temp);
		// 			element.find('.desc').html(desc);
		// 			element.find('.wind').html(wind);
		// 			element.find('.img').attr('src', img);
	// 		    }				
	// 	   });	    
	// })
	

	$('.user-form').submit(function( event ){
		event.preventDefault();
		console.log('Hola!');
	});

	$('#user-location').on('change', function(){
		var city = $(this).val();
		var element = $('#weather-results');
		console.log(city);
		var state = 'NY';
		var key = '6d21846ad7649b70';
		var Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+state+"/"+city+".json";
	    console.log(Weather);
	    console.log(city);
    	 $.ajax({
			  url : Weather,
			  dataType : "jsonp",
			  success : function(results) {
			  var location = results.current_observation.display_location.full;
			  console.log(location);
			  var temp = results.current_observation.feelslike_f;
			  console.log(temp);
			  var img = results.current_observation.icon_url;
			  element.find('#location-results').html(location);
			  element.find('#icon-results').attr('src', img);
			  element.find('#temp-results').html(temp);
		  	}
	    });

		$('#weather-results').removeClass('hide-results').addClass('show-results');	
	})

	$('.button-results')on(click,function(){
		$('#weather-results').removeClass('show-results').addClass('hide-results');
	})
}); // End of doc ready. 	