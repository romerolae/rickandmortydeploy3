import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchCard = ({ setLocation }) => {
	const [searchInput, setSearchInput] = useState('');
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

	//Search by input

	const handleSumit = (e) => {
		e.preventDefault();
		setSearchInput(e.target.search.value);
	};

	return (
		<div>
			<div className="app__form ">
				<h2>Rick and Morty</h2>
				<form className="app__form__input" onSubmit={handleSumit}>
					<input
						id="search"
						type="text"
						placeholder="Type a location id 1-125"
					/>
					<button>Search</button>
				</form>
			</div>
		</div>
	);
};

export default SearchCard;
