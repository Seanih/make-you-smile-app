import React, { useState } from 'react';
import '../styles/JokeArea.scss';
import axios from 'axios';
import spinner from '../images/spinner.gif';

const JokeArea = () => {
	const [showJoke, setShowJoke] = useState(false);
	const [joke, setJoke] = useState('');
	const [loading, setLoading] = useState(false);

	const fetchJoke = () => {
		setLoading(true);
		axios
			.get(
				'https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky?blacklistFlags=racist,explicit&type=single'
			)
			.then(response => {
				setLoading(!loading);
				setShowJoke(true);
				setJoke(response.data.joke);
			})
			.catch(error => {
				setLoading(false);
				console.log(error);
			});
	};

	return (
		<main className='body-container'>
			<div className='joke-box'>
				<h1>
					{showJoke
						? joke
						: 'Have you smiled today yet? Well 🤔... What are you waiting for? Click the button!!'}
				</h1>
				<button className='joke-button' onClick={fetchJoke}>
					{joke ? 'Get another joke!' : 'Make me smile...'}
				</button>
			</div>
		</main>
	);
};

export default JokeArea;
