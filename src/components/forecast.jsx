import React, { useState, useEffect } from "react";
import ForecastDay from "./forecastDay";

const Forecast = (props) => {
  const { forecast, tempScale } = props;
  const [days, setDays] = useState([]);

  useEffect(() => {
    if (forecast.list) {
      setDays(forecast.list.splice(0, 6));
    }
  }, [forecast]);

  return (
    <React.Fragment>
      <ul id="forecast_wrapper">
        {days.map((day, index) => (
          <ForecastDay
            key={index}
            tempScale={tempScale}
            clouds={day.weather[0]}
            weather={day.main}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Forecast;
