import React from 'react';
import '../styles/ForecastDetails.css';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';

function ForecastDetails({forecast}) {
    const {
        date, temperature, description, icon,
        wind, humidity
      } = forecast;
    const formattedDate = new Date(date).toDateString();
    return (
        <div className="forecast-details">
        <div className="forecast-details__date">
            {formattedDate}
        </div>
        <div className="forecast-details__temperature-min">
            Minimum: {temperature.min}
            &deg;C
        </div>
        <div className="forecast-details__temperature-max">
            Maximum: {temperature.max}
            &deg;C
        </div>
        <div className="forecast-details__wind">
            Wind: {wind.speed} 
            {wind.direction}
        </div>
        <div className="forecast-details__humidity">
            Humidity: {humidity} 
        </div>
        <div className="forecast-details__description">
            {description}
        </div>
        <div className="forecast-details__icon" data-testid="forecast-icon">
            <WeatherIcon name="owm" iconId={icon}/>
        </div>
        </div>
    )
}

ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.number,
        temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
        }),
        description: PropTypes.string,
        icon: PropTypes.string,
        wind: PropTypes.shape({
            speed: PropTypes.number,
            direction: PropTypes.string,
        }),
        humidity: PropTypes.number,
    }).isRequired,
}

export default ForecastDetails;