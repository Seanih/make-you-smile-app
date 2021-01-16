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
		</main>
	);
};

export default JokeArea;
