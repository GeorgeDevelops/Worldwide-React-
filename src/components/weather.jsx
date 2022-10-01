import React, { useState } from "react";
import Forecast from "./forecast";
import icon from "../utils/icon";

const Weather = (props) => {
  const { info, forecast } = props;
  const [fahrenheit, setFahrenheit] = useState();

  function changeTempScale() {
    if (!fahrenheit) return setFahrenheit(true);
    return setFahrenheit(false);
  }

  return (
    <React.Fragment>
      <div id="weather-wrapper">
        <div className="city">{info ? <p>{info.name}</p> : null}</div>
        <div className="weather">
          {info.main ? (
            <span>
              {icon(info.weather[0].main)}
              {
                <p>
                  {!fahrenheit
                    ? (((info.main.temp - 32) * 5) / 9).toFixed()
                    : info.main.temp.toFixed()}
                  &nbsp;
                  <span
                    style={{ opacity: !fahrenheit ? 1 : 0.3 }}
                    className="fahrenheit"
                    onClick={changeTempScale}
                  >
                    °C
                  </span>
                  &nbsp;|
                  <span
                    style={{ opacity: !fahrenheit ? 0.3 : 1 }}
                    className="fahrenheit"
                    onClick={changeTempScale}
                  >
                    °F
                  </span>
                </p>
              }
            </span>
          ) : null}
        </div>
        <div className="clouds">
          {info.main ? (
            <p>
              {info.weather[0].main} | {info.weather[0].description} | Feels
              like{" "}
              {!fahrenheit
                ? (((info.main.feels_like - 32) * 5) / 9).toFixed()
                : info.main.feels_like.toFixed()}
              {!fahrenheit ? "°C" : "°F"}
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
        <Forecast tempScale={fahrenheit} forecast={forecast} />
      </div>
    </React.Fragment>
  );
};

export default Weather;
