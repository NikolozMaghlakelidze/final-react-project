import { useState } from 'react';
import './api.css'

const WeatherAPI = () => {
  const [weatherinformacia, setweatherinformacia] = useState(null);
  const [qalaqi, setqalaqi] = useState('');

  const key = async () => {
    const apiKey = 'f12b737d60cae0a1bdca05df9f2d1843';
    const linki = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${qalaqi}&appid=${apiKey}`
    );
    const jsoninformacia = await linki.json();
    setweatherinformacia(jsoninformacia);
  };

  const dacleareba = () => {
    setqalaqi('');
  };

  return (
    <div className="WeatherApp">
      <input
        type="text"
        placeholder='city name'
        value={qalaqi}
        onChange={(event) => setqalaqi(event.target.value)}
      />
      <button onClick={() => { key(); dacleareba(); }}>weather</button>
      {weatherinformacia && (
        <div>
          <p>{weatherinformacia.name}</p>
          <p>temperature:{(weatherinformacia.main.temp - 273.15).toFixed(2)} °c</p> 
          <p>wind:{weatherinformacia.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};
export default WeatherAPI;
// es kelvini ra iyo ar vicodi, gradusebs ar michvenebda da daaxloebit 273-it metia celsiusze