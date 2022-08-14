import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardResidents from './components/CardResidents';
import LocationInfo from './components/LocationInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchCard from './components/SearchCard';

function App() {
	const [location, setLocation] = useState();

	return (
		<div className="App">
			<Header />
			<SearchCard setLocation={setLocation} />
			<LocationInfo location={location} />
			<div className="card__container">
				{location?.residents.map((url) => (
					<CardResidents key={url} url={url} />
				))}
			</div>
			<Footer />
		</div>
	);
}

export default App;
