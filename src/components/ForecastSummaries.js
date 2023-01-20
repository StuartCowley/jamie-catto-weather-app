import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './ForecastSummary';

function ForecastSummaries(props) {
    const { forecasts } = props;
    return (
        <div className="forecast-summaries">
            {forecasts.map((forecast) => {
                return <ForecastSummary 
                forecast={forecast} />
            })}
        </div>
    )
}

ForecastSummaries.propTypes = {
    forecasts: PropTypes.arrayOf(PropTypes.shape)
}

export default ForecastSummaries;