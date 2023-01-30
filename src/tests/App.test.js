import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../components/App';
import forecastData from '../data/forecast.json';

describe('App', () => {
  it('renders App component correctly', () => {
    render(<App location={forecastData.location} 
            forecasts={forecastData.forecasts} />);
    const h1element = screen.getByText(/Manchester, Uk/i);
    expect(h1element).toBeInTheDocument();
  })
})
