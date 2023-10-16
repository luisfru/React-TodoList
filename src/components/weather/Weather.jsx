import React from 'react';
import "./Weather.css";
import cloud_icon from "../Assets/cloud.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
function Weather() {
  return (
    <div className="container">
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24ºC</div>
      <div className="weather-location">Rotterdam</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" />
          <div className="data">
            <div className="humidity-percent">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Weather;
