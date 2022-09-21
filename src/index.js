import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faCloudBolt, faCloudRain, faMagnifyingGlass, faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faCloud, faCloudRain, faSun, faSnowflake, faCloudBolt);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
