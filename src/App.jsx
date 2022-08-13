import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardResidents from './components/CardResidents';
import LocationInfo from './components/LocationInfo';

function App() {
	const [searchInput, setSearchInput] = useState('');
	const [location, setLocation] = useState();

	useEffect(() => {
		let numberLocation;
		if (searchInput === '') {
			numberLocation = Math.floor(Math.random() * (126 - 1) + 1);
		} else {
			numberLocation = searchInput;
		}

		const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`;
		axios
			.get(URL)
			.then((res) => setLocation(res.data))
			.catch((err) => console.log(err));
	}, [searchInput]);

	//Busqueda por input

	const handleSumit = (e) => {
		e.preventDefault();
		setSearchInput(e.target.search.value);
	};

	return (
		<div className="App">
			<h1>Rick and Morty</h1>
			<form onSumit={handleSumit}>
				<input id="search" type="text" />
				<button>Search</button>
			</form>
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
