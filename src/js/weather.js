$(document).ready(function() {

  var counter = 0;

  $('.autocomplete__list').on('click', 'li',function(e) {
    e.preventDefault();

    var cityKey = $(this).data('key'),
        city = $(this).data('city'),
        country = $(this).data('country');

    loadLocalWeather(cityKey, city, country);
    loadTodayWeather(cityKey);
    $('.autocomplete__input:text').val('');
    $('.autocomplete__list').removeClass('visible');
    $('.autocomplete__list').empty();
    $('.autocomplete').removeClass('visible');
    $('.hamburger').removeClass('is-active');
  });

  $('.autocomplete__form').submit( function (e) {
    e.preventDefault();
  });

  $('.hamburger').on( 'click', function (e) {
    e.preventDefault();

    $(this).toggleClass('is-active');
    $('.autocomplete').toggleClass('visible');
  });

  $(document).keyup( '.autocomplete__input', function(e) {
    e.preventDefault();

    var key = e.which,
        listItems = $('li'),
        selected = listItems.filter('.selected'),
        city = $('.autocomplete__input').val(),
        current;

    if ( key != 40 && key != 38 && key != 13 && key != 8 ) {

      counter++;
      if ( counter >= 2) {
        $('.autocomplete__list').addClass('visible');
        loadCitiesList(city);
      }

    }
    else {
      listItems.removeClass('selected');

      if ( key == 40 ) // Down key
      {
          if ( ! selected.length || selected.is(':last-child') ) {
              current = listItems.eq(0);
          }
          else {
              current = selected.next();
          }
          current.addClass('selected');
      }
      else if ( key == 38 ) // Up key
      {
          if ( ! selected.length || selected.is(':first-child') ) {
              current = listItems.last();
          }
          else {
              current = selected.prev();
          }
          current.addClass('selected');
      }
      else if ( key == 8 ) // Delete key
      {
        if ( $('.autocomplete__input').val() == '') {
          $('.autocomplete__list').removeClass('visible');
          $('.autocomplete__list').empty();
        }
      }
      else if ( key == 13 ) // Enter Key
      {
        e.stopPropagation();
        var cityKey = selected.data('key'),
            city = selected.data('city'),
            country = selected.data('country');

        $('.autocomplete__list').empty();
        loadLocalWeather(cityKey, city , country);
        loadFiveDayForecast(cityKey);

        $('.autocomplete__input').val('');
        $('.autocomplete').removeClass('visible');
        $('.autocomplete__list').removeClass('visible');
        $('.autocomplete__list').empty();
        $('.hamburger').removeClass('is-active');
      }

    }
  });

  function loadCitiesList(city) {
    var cityName ='',
        line = '',
        city = city,
        apiKey='vyTIDsdrqTfCALrFfc11rXx4qQyqf8mx',
        element = $('.autocomplete__list'),
        url = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+apiKey+"&q="+city+"";

    $('.autocomplete__list').empty();
    $.getJSON(url, function(jsonp){
      $('#json-results').html(JSON.stringify(jsonp, null, 1));
      var cities = JSON.stringify(jsonp, null, 1);
      cities = JSON.parse(cities);
      arrayLength = cities.length;
      if (arrayLength > 1 ) {
        $('.autocomplete__list').attr('size',arrayLength);
      }
      for (var i = 0; i < arrayLength-1; i++) {
         var cityName = cities[i].LocalizedName,
             countryName = cities[i].Country.ID,
             cityKey = cities[i].Key;

         $('.autocomplete__list').append('<li class="autocomplete__item" value= "'+cityName+'" data-key="'+cityKey+'" data-city="'+cityName+'" data-country="'+countryName+'" >'+cityName+', '+countryName+'</li>');
         $('.autocomplete__list').removeClass('hide-results').addClass('show-results');
      }

      $(".autocomplete__item").hover(function() {
        $('.autocomplete__item').removeClass('selected');
        $(this).addClass('selected');
      });

    });
  }

  function readCityKey() {
    var $element = $('.local-weather'),
        cityKey = $element.data('citykey'),
        country = $element.data('country'),
        city = $element.data('city');

    loadLocalWeather(cityKey, city , country);
    loadFiveDayForecast(cityKey);

  }

  readCityKey();

  function loadLocalWeather(cityKey, city, country) {
    var $location =$('.location'),
        $element = $('.local-weather'),
        $details = $('.info-weather'),
        apiKey = 'vyTIDsdrqTfCALrFfc11rXx4qQyqf8mx',
        Weather ="http://dataservice.accuweather.com/currentconditions/v1/"+cityKey+"?apikey="+apiKey+"&details=true";

    $.ajax({
      url : Weather,
      dataType : "json",
      success : function(results) {
        var arrayLength = results.length;

        for(var i=0; i < arrayLength; i++) {
          var location = city+', '+country,
              temp = results[i].Temperature.Imperial.Value,
              desc = results[i].WeatherText,
              icon = results[i].WeatherIcon,
              humidity = results[i].RelativeHumidity,
              maximum = results[i].TemperatureSummary.Past6HourRange.Maximum.Imperial.Value,
              minimum = results[i].TemperatureSummary.Past6HourRange.Minimum.Imperial.Value,
              wind = results[i].Wind.Speed.Imperial.Value,
              dewPoint =results[i].DewPoint.Imperial.Value,
              pressure =results[i].Pressure.Imperial.Value,
              visibility = results[i].Visibility.Imperial.Value,
              feelsLike = results[i].RealFeelTemperature.Imperial.Value,
              uvIndex = results[i].UVIndex,
              uvIndexText = results[i].UVIndexText;

          $location.find('.location__title').html(location);
          $location.find('.location__icon').addClass(accuIcons[icon]);
          $element.find('.location').html(city);
          $element.find('.temp').html(Math.round(temp));
          $element.find('.desc').html(desc);
          $element.find('.icon').addClass(accuIcons[icon]);
          $details.find('.feels').html(feelsLike);
          $details.find('.wind').html(wind);
          $details.find('.humidity').html(humidity);
          $details.find('.maximum').html(maximum);
          $details.find('.minimum').html(minimum);
          $details.find('.dew-point').html(dewPoint);
          $details.find('.pressure').html(pressure);
          $details.find('.visibility').html(visibility);
          $details.find('.uv-index').html(uvIndex);
          $details.find('.uv-index-text').html(uvIndexText);

        }
      }
    });
  }

  function loadTodayWeather(cityKey) {
    var apiKey = 'vyTIDsdrqTfCALrFfc11rXx4qQyqf8mx',
        Weather ="http://dataservice.accuweather.com/forecasts/v1/daily/1day/"+cityKey+"?apikey="+apiKey,
        $details = $('.details-weather');

    $.ajax({
      url : Weather,
      dataType : "json",
      success : function(results) {
        var arrayLength = results.DailyForecasts.length,
            dayForecast = results.Headline.Text;

        for(var i=0; i < arrayLength; i++) {
          var day = results.DailyForecasts[i].Day.IconPhrase,
              night = results.DailyForecasts[i].Night.IconPhrase;

          $details.find('.morning').html(day);
          $details.find('.night').html(night);
        }
        $details.find('.today').html(dayForecast);
      }
    });
  }


  function loadFiveDayForecast(cityKey) {

    var $element = $('.forecast__col'),
        apiKey = 'vyTIDsdrqTfCALrFfc11rXx4qQyqf8mx',
        url = "http://dataservice.accuweather.com//forecasts/v1/daily/5day/"+cityKey+"?apikey="+apiKey;

    $.ajax({
      url : url,
      dataType : "jsonp",
      success : function(results) {
        var dataLength = results.DailyForecasts.length;

        for( var i=0; i <= dataLength - 1; i++ ) {
          var max = results.DailyForecasts[i].Temperature.Maximum.Value,
              min = results.DailyForecasts[i].Temperature.Minimum.Value,
              day = results.DailyForecasts[i].Day.IconPhrase,
              epoch = results.DailyForecasts[i].EpochDate,
              night = results.DailyForecasts[i].Night.IconPhrase,
              icon = results.DailyForecasts[i].Day.Icon,
              date = new Date(epoch*1000),
              month = monthNames[date.getMonth()],
              day = date.getDate(),
              count = i + 1;

          if( count >= 2) {
            $('.day-'+ count).find('.date').html( month+' '+day);
          }
          $('.day-'+ count).find('.icon').addClass(accuIcons[icon]);
          $('.day-'+ count).find('.max').html(max);
          $('.day-'+ count).find('.min').html(min);
        }
       }
    });

  }

  var accuIcons = {
    "1":"icon-sun",
    "2":"icon-cloud-sun",
    "3":"icon-cloud-sun",
    "4":"icon-cloud-sun",
    "5":"icon-cloud-sun",
    "6":"icon-cloud-sun",
    "7":"icon-clouds",
    "8":"icon-clouds",
    "11":"icon-fog-sun",
    "12":"icon-rain",
    "13":"icon-rain",
    "14":"icon-rain",
    "15":"icon-cloud-flash",
    "16":"icon-clouds-flash-alt",
    "17":"icon-clouds-flash-alt",
    "18":"icon-rain",
    "19":"icon-hail",
    "20":"icon-snow",
    "21":"icon-snow",
    "22":"icon-snow",
    "23":"icon-snow",
    "24":"icon-hail",
    "25":"icon-hail",
    "26":"icon-hail",
    "29":"icon-hail",
    "30":"icon-sun",
    "31":"icon-hail",
    "32":"icon-windy",
    "33":"icon-moon",
    "34":"icon-moon",
    "35":"icon-cloud-moon",
    "36":"icon-cloud-moon",
    "37":"icon-cloud-fog",
    "38":"icon-cloud-moon",
    "39":"icon-rain",
    "40":"icon-rain",
    "41":"icon-rain",
    "42":"icon-rain",
    "43":"icon-rain",
    "44":"icon-rain",
  }

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

});
