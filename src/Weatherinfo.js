import React from "react";
import Updateday from "./Updateday";
import WeatherTemp from "./WeatherTemp";

export default function Weatherinfo(props) {

    return(
      <div className="weatherinfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <Updateday date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
              />
              <div className="float-left">
                <WeatherTemp celsius={props.data.temperature} />
                
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}</li>
              <li>Wind: {props.data.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
}