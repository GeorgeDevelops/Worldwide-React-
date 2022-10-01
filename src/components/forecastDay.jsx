import React from "react";
import icon from "../utils/icon";

const ForecastDay = (props) => {
  const { clouds, weather, tempScale } = props;
  return (
    <li className="day">
      <h2>{clouds.main}</h2>
      <h5>{clouds.description}</h5>
      {icon(clouds.main)}
      <p>
        {`${(((weather.temp - 32) * 5) / 9).toFixed()} ${
          !tempScale ? "°C" : "°F"
        } / ${(((weather.feels_like - 32) * 5) / 9).toFixed()} ${
          !tempScale ? "°C" : "°F"
        }`}
      </p>
    </li>
  );
};

export default ForecastDay;
