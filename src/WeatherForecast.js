import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);

        function handleResponse(response){
            setForecast(response.data.daily);
            setLoaded(true);
        }
   
if(loaded){
    console.log(forecast);
return (
  <div className="WeatherForecast">
    <div className="row">
        {forecast.map(function(dailyforecast, index) {
            if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyforecast} />
              </div>
            );
        } else {
            return null;
        }
        })}
      
    </div>
  </div>
);


} else{
 let apiKey = "0t043164f467od1445504fadcb9bc012";
 let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}&units=metric`;

 axios.get(apiUrl).then(handleResponse);
 return null;

}
}