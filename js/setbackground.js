(function(temp, degrees, current, daily) {
  "use strict";

    var circle= $('#circle');
    //If weather is in F, based on  F degrees and rain/sunny/windy to display background
    if (current.time < daily.sunsetTime) {
      //day time
      if (degrees === "°F") {
         //Fahrenheit
        switch(true) {
            case (temp>60)      :   circle.css('background-image', 'url(' + "../images/warmsunset.jpg" + ')');
                                    break;
            case ((temp>35) 
                && (temp<=60))  :   circle.css('background-image', 'url(' + "../images/warmsunset.jpg" + ')');
                                    break;
            case (temp<=35)     :   circle.css('background-image', 'url(' + "../images/warmsunset.jpg" + ')');
                                    break;
            default             :   circle.css('background-image', 'url(' + "../images/warmsunset.jpg" + ')');
                                
}
        //range of temperatures that are warm
        //if warm and sunny
        temp              
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
    }
    else
    //night
//Icon values: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy,
//partly-cloudy-day, partly-cloudy-night

//sunrise, sunset?
  
  
}(this));