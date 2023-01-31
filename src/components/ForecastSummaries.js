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
                icon={forecast.icon.toString()}
                temperature={forecast.temperature}
                key={forecast.date}
                onSelect={props.onForecastSelect} />
            })}
        </div>
    )
}

ForecastSummaries.propTypes = {
    forecasts: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.number,
        description: PropTypes.string,
        icon: PropTypes.number,
        temperature: PropTypes.shape({
            max: PropTypes.number,
            min: PropTypes.number,
        }),
    })).isRequired,
    onForecastSelect: PropTypes.func.isRequired
}

export default ForecastSummaries;