import axios from 'axios';

const getForecast = (setSelectedDate, setForecasts, setLocation, searchText) => {
    let endpoint = 'https://cmd-shift-weather-app.onrender.com/forecast';
    
    if(searchText) {
      endpoint += `?city=${searchText}`;
      console.log(`Trying to access ${endpoint} with from '${searchText}'`);
    }

    axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getForecast;