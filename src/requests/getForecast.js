import axios from 'axios';

const getForecast = (setSelectedDate, setForecasts, setLocation, setErrorMessage, searchText) => {
    let endpoint = 'https://cmd-shift-weather-app.onrender.com/forecast';
    
    if(searchText) {
      endpoint += `?city=${searchText}`;
      console.log(`Trying to access ${endpoint} with from '${searchText}'`);
    }

    axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
      // setErrorMessage('');
    })
    .catch((err) => {
      const { status } = err.response;
      if (status === 404) {
        setErrorMessage('Cannot find the town/city. Please try again.')
        console.error('Invalid location', err);
      }
      if (status === 500) {
        setErrorMessage('Oops, server error. Please try again later.')
        console.error('Server error', err);
      }
    });
};

export default getForecast;