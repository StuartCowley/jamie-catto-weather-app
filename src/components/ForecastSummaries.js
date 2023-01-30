import '../styles/ForecastSummaries.css'
import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './ForecastSummary';

function ForecastSummaries(props) {
    const { forecasts } = props;
    return (
        <div className="forecast-summaries">
            {forecasts.map((forecast) => {
                return <ForecastSummary 
                date={forecast.date}
                description={forecast.description}
                icon={forecast.icon}
                temperature={forecast.temperature}
                key={forecast.date} />
            })}
        </div>
    )
}

ForecastSummaries.propTypes = {
    forecasts: PropTypes.arrayOf(PropTypes.shape).isRequired
}

export default ForecastSummaries;