import React from 'react';
import PropTypes from 'prop-types';

function ForecastSummary(props) {
  const { forecast } = props;
  const {
    date, temperature, description, icon,
  } = forecast;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        {date}
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">
        {description}
      </div>
      <div className="forecast-summary__icon">
        {icon}
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
