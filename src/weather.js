import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Kiev",
    temperature: 28,
    date: "Sunday 18:40",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 2
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <div className="col-9">
            <div className="overview">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>Last updated: {weatherData.date}</li>
                <li>{weatherData.description}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
