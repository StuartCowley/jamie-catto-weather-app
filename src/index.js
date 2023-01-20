import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import forecastData from './data/forecast.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App location={forecastData.location} forecasts={forecastData.forecasts} />
  </React.StrictMode>,
);
