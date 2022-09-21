import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {
  const { getWeather, api } = props;
  const [city, setCity] = useState("");

  //// URL to fetch defined weather data
  const city_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api}`;

  function handleChange(e) {
    return setCity(e.target.value);
  }

  function handleKeyUp(e) {
    if (e.key === "Enter") return getWeather(city_URL), setCity("");
    return;
  }

  return (
    <React.Fragment>
      <div id="search-wrapper">
        <input
          type="search"
          onChange={(e) => handleChange(e)}
          value={city}
          placeholder="Enter location"
          onKeyUp={(e) => handleKeyUp(e)}
        />
        <button
          onClick={() => {
            getWeather(city_URL);
            setCity("");
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Search;
