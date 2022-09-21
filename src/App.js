import React, { useState, useEffect } from 'react';
import './App.css';
import './responsive.css';
import Search from './components/search';
import Weather from './components/weather';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [currentLocation, setCurrentLocation] = useState({});
  const [forecast, setForecast] = useState({});
  const [forecastData, setForecastData] = useState({});

  const API = 'd2adc91f206376303d6863ab662fe18c';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.lat}&lon=${currentLocation.lon}&units=imperial&appid=${API}`;
  const forecast_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${forecast.lat}&lon=${forecast.lon}&units=imperial&appid=${API}`;

  async function getWeatherByCity(url) {
    try {
      const { data } = await axios.get(url);
      if (data) return setData(data), setForecast({ lat: data.coord.lat, lon: data.coord.lon });
      return;
    } catch (ex) {
      return alert(ex.response.data.message);
    }
  }

  async function getCurrentLocationWeather(url) {

    if (Object.keys(currentLocation).length < 2) return;
    const { data } = await axios.get(url);
    return setData(data), setForecast({ lat: data.coord.lat, lon: data.coord.lon });
  }

  async function getForecastWeather(url) {
    if (Object.keys(forecast).length < 2) return;
    const { data } = await axios.get(url);
    return setForecastData(data);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { longitude, latitude } = coords;
        const obj = { lon: longitude, lat: latitude };
        setCurrentLocation(obj);
      })
    } else {
      alert("Geolocation is not supported!!!")
    }
  }, []);

  useEffect(() => {
    getCurrentLocationWeather(URL);
  }, [currentLocation]);

  useEffect(() => {
    getForecastWeather(forecast_URL);
  }, [forecast]);

  return (
    <div className="App">
      <Search
        setLocation={setLocation}
        getWeather={getWeatherByCity}
        location={location}
        api={API}
      />

      <Weather
        info={data}
        forecast={forecastData}
      />
    </div>
  );
}

export default App;
