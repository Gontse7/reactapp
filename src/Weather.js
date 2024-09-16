import React, { useState } from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";

import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
          ready: true,
          temperature: response.data.temperature.current,
          date: new Date(response.data.time * 1000),
          wind: response.data.wind.speed,
          city: response.data.city,
          description: response.data.condition.description,
          iconUrl:
            `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
          humidity: response.data.temperature.humidity,
        });
        
    }

    function search(){
const apiKey = "0t043164f467od1445504fadcb9bc012";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
      event.preventDefault();
      search();
    }

    function handleCityChange(event) {
      event.preventDefault();
      setCity(event.target.value);
    }



if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="type a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData}/>

       
      </div>
    );
} else {
search();
return "loading..."
}
}