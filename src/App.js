import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';

function App() {
	const [ weather, setWeather ] = useState([]);

	const APIKEY = '874a1b8c00dacaa9d15a7e520e259b16';

	async function fetchData(e) {
		const city = e.target.elements.city.value;
		e.preventDefault();

		const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${APIKEY}`)
			.then((res) => res.json())
			.then((data) => data);
		if (city) {
			setWeather({
				data: apiData,
				city: apiData.name,
				country: apiData.sys.country,
				main: apiData.weather[0].main,
				description: apiData.weather[0].description,
				temp_min: apiData.main.temp_min,
				temp_max: apiData.main.temp_max,
				location: apiData.coord.lat + ', ' + apiData.coord.lon.toFixed(1),

				error: ''
			});
		} else {
			setWeather({
				data: '',
				city: '',
				country: '',
				main: '',
				description: '',
				temp_min: '',
				temp_max: '',
				location: '',

				error: 'Please Type A City Name'
			});
		}
	}

	return (
		<div className="App">
			<h1>Weather</h1>
			<Form getWeather={fetchData} />
			<Weather
				city={weather.city}
				country={weather.country}
				main={weather.main}
				description={weather.description}
				temp_min={weather.temp_min}
				temp_max={weather.temp_max}
				location={weather.location}
				error={weather.error}
			/>
			{console.log(weather.data)}
		</div>
	);
}

export default App;
