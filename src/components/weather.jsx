import React from "react";
import Forecast from "./forecast";
import icon from "../utils/icon";

const Weather = (props) => {
  const { info, forecast } = props;

  return (
    <React.Fragment>
      <div id="weather-wrapper">
        <div className="city">{info ? <p>{info.name}</p> : null}</div>
        <div className="weather">
          {info.main ? (
            <span>
              {icon(info.weather[0].main)}
              {<p>{(((info.main.temp - 32) * 5) / 9).toFixed()} °C</p>}
            </span>
          ) : null}
        </div>
        <div className="clouds">
          {info.main ? (
            <p>
              {info.weather[0].main} | {info.weather[0].description} | Feels
              like {(((info.main.feels_like - 32) * 5) / 9).toFixed()} °C
            </p>
          ) : null}
        </div>
        <div className="details">
          {info.main ? (
            <div>
              <p className="wind">Wind: {info.wind.speed.toFixed()} km/h</p>
              <p className="humidity">
                Humidity: {info.main.humidity.toFixed()}%
              </p>
              <p className="pressure">
                Pressure: {info.main.pressure.toFixed()} mb
              </p>
              <p className="visibility">
                Visibility: {info.visibility.toFixed() / 1000} km
              </p>
            </div>
          ) : null}
        </div>
        <Forecast forecast={forecast} />
        <footer>All rights reserved &copy; George Quezada</footer>
      </div>
    </React.Fragment>
  );
};

export default Weather;
