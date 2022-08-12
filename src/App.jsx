import { useState } from 'react';

import './App.css';
import CardResidents from './components/CardResidents';
import LocationInfo from './components/LocationInfo';
import useFetch from './hooks/useFetch';

function App() {
	const randomLocation = Math.floor(Math.random() * (126 - 1) + 1);

	const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;

	const location = useFetch(URL);

	return (
		<div className="App">
			<h1>Rick and Morty</h1>
			<LocationInfo location={location} />
			<div>
				{location?.residents.map((url) => (
					<CardResidents key={url} url={url} />
				))}
			</div>
		</div>
	);
}

export default App;
