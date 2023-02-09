import React from 'react';
import PropTypes from 'prop-types';

function LocationDetails(props) {
  const { city, country, errorMessage } = props;

  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-header">
      {`${city}, ${country}`}
    </h1>
  );
}

LocationDetails.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

LocationDetails.defaultProps = {
  errorMessage: ''
}

export default LocationDetails;
