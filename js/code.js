
$(document).ready(function(){

    var skycons = new Skycons({
                            "color": "#90E5FD"
                        });
    var latlon;
    var link= "https://api.forecast.io/forecast/5effb18e2860e72b6280a0a6d8ee9fe6/";
    var newlink;
    var location;
    var temperature;
    var weather;
    var summary;
    var icon;
    var current;
    var daily;
    var hours;
    setInterval(getTime,1000);
   //run the geocoder to get the IP
   navigator.geolocation.getCurrentPosition(success, error, options);
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function success(pos) {
        var crd = pos.coords;
        var lat=crd.latitude;
        var long=crd.longitude;
        console.log("time");
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat +","+long+"&key=AIzaSyAySpWk9d1vW4zr55muNkZBFRXoclO3n3c",
         
            // Tell jQuery we're expecting JSONP
            dataType: "json",
            // Work with the response
            success: function( response ) {
                console.log( response.results[1].formatted_address);
                location=response.results[1].formatted_address;

                 // server response
            }
        });
           $.ajax({
            url: "https://api.forecast.io/forecast/5effb18e2860e72b6280a0a6d8ee9fe6/"+lat +","+long,
         
            // Tell jQuery we're expecting JSONP
            dataType: "jsonp",
            // Work with the response
            success: function( response ) {
                console.log( response);
                skycons.set("icon1",response.currently.icon);
                console.log(response.currently.icon);

                temperature=Math.round(response.currently.apparentTemperature);
                current=response.currently;
                var sunset=response.daily.data[0].sunsetTime;
                var sunrise=response.daily.data[0].sunriseTime;
                weather=response.currently.summary;
                summary=response.daily.summary;
                $('#location').html(location);
                $('#temperature').append(temperature);
                $('#temperature').attr("value", temperature);
                $('#weather').html(weather);
                $('#summary').html(summary);
                console.log(current.time + "&"+sunrise + sunset )
                if(current.time > sunrise && current.time < sunset)
                {
                    console.log("here");
                    $('.circle').css("background", "url(/images/cold_fall.jpg) ");
                    //$('.circle').css("background-size", "400px 400px");
                }
                else{
                    console.log("or her ajbvsjkhcvlksbvs");
                    $('.circle').css("background", "url(/images/lightsnow.jpg) no-repeat ");
                    //$('.circle').css("background-size", "3 px 399px");
                   // $('#circle').css('background-image', 'url(' + "/images/warmsunset.jpg" + ')');
                }
            }
        });
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
    };
        
    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    skycons.play();
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    function getTime(){
       var date = new Date();
    // Hours part from the timestamp
       hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
 
    //manipulation the DOm with the location data 
   
    $('#time').html(formattedTime);
    
    }
 
    function changeToCel() {
        var temp=$("#temperature");
        var cel=$("#cel");
        var far=$("#far");
        var tempVal=parseFloat(temp.text());
         console.log(tempVal);
         console.log("celc clickec")
        if(cel.hasClass("active")){
            console.log("already in celcius");
        }
        else
        {
           var cTempVal = (tempVal - 32) * (5 / 9); 
           console.log("converted to"+ cTempVal);
            temp.html(cTempVal);
            cel.addClass('active');
            far.removeClass('active');
            far.addClass('inactive');
            
        }
      
    }
    
    function changeToFar() {
        var temp=$("#temperature");
        var cel=$("#cel");
        var far=$("#far");
        var tempVal=parseFloat(temp.text());
         console.log(tempVal);
         console.log("fahr clickec")
        if(far.hasClass("active")){
            console.log("already in fahrenhwit");
        }
        else
        {
           var fTempVal = (tempVal * (9 / 5)) + 32; 
           console.log("converted to"+ fTempVal);
            temp.html(fTempVal);
            cel.removeClass('active');
            cel.addClass('inactive');
            far.addClass('active');
            
        }
      
    }
    $('#far').on('click', changeToFar);
    $('#cel').on('click', changeToCel);
    
    /*change background depending on the time*/
//         function changeBackground(){
            
//           // if(hours>1){
//                 $('#circle').css({"background":url:"/images"});
// //}
            
            
//         }
    // setbackground($('#temperature').attr("value"), $('#degrees').attr("value" ), current, daily);
/*    
    
    console.log(promise1);
    $.when(promise1)
    
    .then(function(data){
        latlon=data.loc;
        location.push(data.region);
        location.push(data.city);
        location.push(data.country);
     
        //manipulation the DOm with the location data 
        $('#location').append(location[1] + ", ");
        $('#location').append(location[0] + ", ");
        $('#location').append(location[2]);
     
        return latlon;
    })
     
     //below function uses the return from the above function as the parameter.
    .then(function(data){
        newlink= link.concat(data);
        console.log(newlink);
        return $.ajax({
            url:newlink,
            dataType:"jsonp"
        });
    })
    
    .done(function(data){
        //Todo 
        //manipulate the DOM with the Temperature and other weather Elements 
        console.log(data.currently.icon);
        skycons.set("icon1",data.currently.icon);
        $('#temperature').html(Math.round(data.currently.apparentTemperature));
        $('#temperature').attr("value", Math.round(data.currently.apparentTemperature));
        $('#weather').html(data.currently.summary);
        $('#summary').html(data.daily.summary);
    })
    skycons.play();
    //   $( "button" ).click(function() {
    //     var temp= $('#temperature').val();
    //     console.log(temp);
    //      });
    

    function changeText() {
        var temp;
        if ($('#degrees').attr("value") === "°F") {
            $('#degrees').attr("value","°C");
            temp = ($('#temperature').attr("value") - 32) * 5/9;
        }
        else {
            $('#degrees').attr("value","°F");
            temp = ($('#temperature').attr("value") * 9/5) + 32;
        }
        temp = Math.round(temp);
        $('#temperature').html(temp);
        $('#temperature').attr("value", temp);
    }

    $('#degrees').on('click', changeText);


    //If weather is in F, based on  F degrees and rain/sunny/windy to display background
    if ($('#degrees').attr("value") === "°F") {
        //range of temperatures that are warm
            //if warm and sunny
            //if warm and cloudy
            //if warm and rainy
            
        //range of temp that are mild
            //if mild and sunny
            //if mild and cloudy
            //if mild and rainy
            
        //range of temp that are cold
            //if cold and sunny
            //if cold and cloudy
            //if cold and windy
            //if cold and rainy
            //if cold and icy or snowy
            
    }
    //Else weather is in C, based on C degrees and rain/sunny/windy to display background
    else { 
        //range of temperatures that are warm
            //if warm and sunny
            //if warm and cloudy
            //if warm and rainy
            
        //range of temp that are mild
            //if mild and sunny
            //if mild and cloudy
            //if mild and rainy
            
        //range of temp that are cold
            //if cold and sunny
            //if cold and cloudy
            //if cold and windy
            //if cold and rainy
            //if cold and icy or snowy    
    }




*/


});
 
//  /* Forecast api key 
//  5effb18e2860e72b6280a0a6d8ee9fe6
//  */