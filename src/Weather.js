import React, { useState } from "react";
import axios from "axios";
import Updateday from "./Updateday";

import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true ,
            temperature: response.data.main.temp ,
            date: new Date(response.data.dt * 1000) ,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAb5JREFUeNrtmtuNgzAQRSmBElwCJbgESuBzy6AESnAJlEAJ/PJHOqAD73g10QJa8sJ4huUiXSlyHMX3jM34lXnvsysrAwAAAAAAAAAAAAAAAAAAAIDfwg8ff/sypIrkSD3Jb6jnOqGuyRI/0QGQCUtqHxh+pvBbezoAbLzbYXytLgWI3QCokTmpiWh8rUYtADbfH2h+/p7IVQGgBhWkKYH5u8bwnyoAcORTmp9DyEUBJOz2m8NBGkAjaD76i/EtAJzqvBJZCQCdIgBdUgDKoh+tF7wDoFUIoE0CgBc2XqnyFAAqYZNhtVjyMLT8OZTVoX3DMBiSI00kz5q4zMQA4KRy/rPZHxksVsbXCt8VewH0QuZzanxQ/Ud0a478I/Pz+mYPAInoFxzh/gWDr8idCYBj83Uk8z+94CMAQhmgZABTRAD+LD0gzDYNj31/gBbZQRuAavZ2PwrAIjtoAlCx8ZI0Hmx+kR00pMFuZt4nltMwEbpHfxQAMGmYCtsEY35T4ouhTPBRsRw+C4Brb4hcfksMm6LYFsfBCI7GcDiK43FckMAVGVySuto1OdwUBQAAAAAAAAAAAAAAAAAA+Pf6Bm5v6/1bJGiwAAAAAElFTkSuQmCC" ,
            humidity: response.data.main.humidity
        });
        
    }



if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="type a city"
                className="form-control"
                autoFocus="on"
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

        <h1>{weatherData.city}</h1>
        <ul>
          <li><Updateday date={weatherData.date}/></li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
} else {
const apiKey = "0t043164f467od1445504fadcb9bc012";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

}
}