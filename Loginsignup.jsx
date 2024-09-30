import React, { useState } from 'react';
import "./LoginSignup.css"

const CityEntry = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setError(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cityChange = city.trim();

    if (!cityChange) {
      setError('City name cannot be empty or whitespace.');
      return;
    }

    if (cities.includes(cityChange)) {
      setError('City name already exists.');
      return;
    }

    setCities((prevCities) => [...prevCities, cityChange]);
    setCity(''); 
    setError(''); 
  };

  return (
   
    <div className='city'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
          aria-label="City name "
        />
        <button type="submit"> Add City</button>
      </form>
      {error && (
        <p style={{ color: 'red' }} aria-live="assertive">
          {error}
        </p>
      )}
      <div className='cityname'>
      <ul>
        {cities.map((c) => (
          <table><tr>
          <li key={c}>{c}</li> </tr></table>
        ))}
      </ul>
      </div>
    </div>
    
  );
};

export default CityEntry;
