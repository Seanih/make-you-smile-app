import React, { useState, useEffect } from 'react';
import '../styles/JokeArea.scss';
import axios from 'axios';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const JokeArea = () => {
	const [showJoke, setShowJoke] = useState(false);
	const [joke, setJoke] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {});

	const fetchJoke = () => {
		setLoading(true);

		axios
			.get(
				'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?blacklistFlags=racist,explicit&type=single'
			)
			.then(response => {
				setShowJoke(true);
				setJoke(response.data.joke);
				setLoading(false);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<main className='body-container'>
			<div className='joke-box'>
				{loading ? (
					<Loader type='ThreeDots' color='#00BFFF' height={100} width={100} />
				) : showJoke ? (
					<h3>{joke}🤣</h3>
				) : (
					<h1>
						Have you smiled or laughed today yet? Well 🤔... What are you
						waiting for? Start smiling!
					</h1>
				)}
				<button className='joke-button' onClick={fetchJoke}>
					{joke ? 'Get another joke!' : 'Make me smile'}
				</button>
			</div>
			<div className='downArrow bounce'>
				<img
					width='40'
					height='40'
					alt=''
					src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4='
				/>
			</div>
		</main>
	);
};

export default JokeArea;
