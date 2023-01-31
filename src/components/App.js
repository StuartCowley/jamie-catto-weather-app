import '../styles/App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';

function App({location, forecasts}) {
  const {city, country} = location;
  const [selectedDate, setSelectedDate] = useState(forecasts[1].date);
  const selectedForecast = forecasts.find((forecast) => forecast.date === selectedDate);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  }

  return (
    <div className="weather-app">
      <LocationDetails
        city={city}
        country={country}
      />
      <ForecastSummaries forecasts={forecasts}
      onForecastSelect={handleForecastSelect} />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  forecasts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
