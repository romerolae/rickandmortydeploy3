import React from 'react';

const LocationInfo = ({ location }) => {
	console.log(location);
	return (
		<div>
			<h1 className="wrapper">Residents</h1>
			<article className="location wrapper">
				<h2>{location?.name}</h2>
				<div className="location__item">
					<ul>
						<li>
							<span>Type </span> {location?.type}
						</li>
						<li>
							<span>Dimension </span> {location?.dimension}
						</li>
						<li>
							<span>Population </span> {location?.residents.length}
						</li>
					</ul>
				</div>
			</article>
		</div>
	);
};

export default LocationInfo;
