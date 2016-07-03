$(document).ready(function() {

	// $('.weather-block').each(function() {
	// 	var element = $(this);
	//     var state = $(this).data('state');
	//     var city = $(this).data('city');	
 //        var key = '6d21846ad7649b70';
 //        var Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+state+"/"+city+".json"
	//     //console.log(Weather); 
 //       $.ajax({
	// 	    url : Weather,
	//     	dataType : "jsonp",
	//     	success : function(results) {
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
	// 		}				
	// 	});	    
	// })
	

	$('#user-location').on('change', function(){
	 var city = $(this).val();
	 console.log(city);
	 var element = $('.weather-block');
	 // console.log(element);
	var key = '3af49458477b67aa';
	// var state = 'NY';
     var Weather = "http://api.wunderground.com/api/"+key+"/conditions/q/"+city+".json";
        console.log(Weather); 
    $.ajax({
         url : Weather,
         dataType : "jsonp",
         success : function(results){
           	var location = results.current_observation.display_location.full;
           	console.log(results);
				// console.log(location);
				var temp = results.current_observation.feelslike_f;
				var img = results.current_observation.icon_url;
				var desc = results.current_observation.weather;
				var wind = results.current_observation.wind_string;
				var test = element.find('.location').html(location);
				element.find('.location').html(location);
				console.log(location);
				element.find('.temp').html(temp);
				element.find('.desc').html(desc);
				element.find('.wind').html(wind);
				element.find('.img').attr('src', img);
           }                
       });   
	})

}); // End of doc ready. 	