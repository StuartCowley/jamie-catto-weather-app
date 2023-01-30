import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';

function ForecastSummary(props) {
  const { forecast } = props;
  const {
    date, temperature, description, icon,
  } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        {formattedDate}
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">
        {description}
      </div>
      <div className="forecast-summary__icon">
        <WeatherIcon name="owm" iconId={icon}/>
      </div>
    </div>
  );
}

ForecastSummary.propTypes = {
  forecasts: PropTypes.PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    description: PropTypes.string,
    icon: PropTypes.string}).isRequired
};

export default ForecastSummary;
