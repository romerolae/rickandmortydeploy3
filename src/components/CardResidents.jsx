import React from 'react';
import useFetch from '../hooks/useFetch';

const CardResidents = ({ url }) => {
	const resident = useFetch(url);

	return (
		<div className="card wrapper">
			<div className="card__main">
				<header className="card__header">
					<img src={resident?.image} alt={`image of ${resident?.name}`} />
					<div>
						<div className="circle"></div>
						<span>{resident?.status}</span>
					</div>
				</header>
				<div className="card__info">
					<h3>{resident?.name}</h3>
					<ul>
						<li>
							<span>Species: </span>
							{resident?.species}
						</li>
						<li>
							<span>Origin: </span>
							{resident?.origin.name}
						</li>
						<li>
							<span>Episodes where appear: </span>
							{resident?.episode.length}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CardResidents;
