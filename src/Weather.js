import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <h1>Paros</h1>
      <ul>
        <li>Tuesday 5:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
            id="icon"
          />
          11°
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 15km/h%</li>
          </ul>
        </div>
      </div>
      Hello
    </div>
  );
}
