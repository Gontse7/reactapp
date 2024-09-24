import React from "react";
import Weathericon from "./Weathericon";

export default function WeatherForecastDay(props){
function maxTemp(){
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
}

function minTemp() {
  let temperature = Math.round(props.data.temperature.minimum);
  return `${temperature}`;
}

function day(){
    let date = new Date(props.data.time*1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}

    return(
        <div>
 <div className="ForecastDay">{day()}
        </div>
        <div className="ForecastIcon">
          <Weathericon code={props.data.condition.icon} size={36} />
        </div>
        <div className="ForecastTemp">
          <span className="Forecasttemp-max">{maxTemp()}°</span>
          <span className="Forecasttemp-min">{minTemp()}°</span>
        </div>
        </div>
    )
}