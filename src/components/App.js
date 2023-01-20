import '../styles/App.css';
import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';

function App(props) {
  const { location, forecasts } = props;

  return (
    <div className="weather-app">
      <LocationDetails
        city={location.city}
        country={location.country}
      />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
