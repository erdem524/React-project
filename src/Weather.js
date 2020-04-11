import React from 'react';

// destructure props from api call state
const Weather = ({ city, country, main, description, temp_min, temp_max, location, error }) => {
	return (
		//&& operator test true value for data input

		<div className="weatherbox">
			{city &&
			country && (
				<h2>
					{city}, {country}
				</h2>
			)}

			{main && <h3> {main}</h3>}
			{description && <span> {description}</span>}
			{temp_min && <p> temp_min: {(temp_min - 273.15).toFixed(1)}°C</p>}
			{temp_max && <p> temp_max: {(temp_max - 273.15).toFixed(1)}°C</p>}
			{location && <p> Location: {location}</p>}
			{error && <p>{error}</p>}
		</div>
	);
};

export default Weather;
