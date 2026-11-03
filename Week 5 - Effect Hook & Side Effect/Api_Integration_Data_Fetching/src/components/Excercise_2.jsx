import { useState, useEffect } from 'react'

function WeatherApp() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=5.9749&longitude=116.0724&current=temperature_2m,wind_speed_10m&timezone=Asia%2FSingapore");
            const data = await res.json();
            setWeather(data.current);
        }
        fetchWeather();
    }, []);

    if (!weather) return <p>Loading weather...</p>;

    return (
        <div>
            <h2>Current Weather</h2>
            <p>Temperature: {weather.temperature_2m}</p>
            <p>Windspeed: {weather.wind_speed_10m}</p>
        </div>
    );
}

export default WeatherApp