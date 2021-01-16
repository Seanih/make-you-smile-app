import React, { useState } from 'react';
import '../styles/JokeArea.scss';

const JokeArea = () => {
	const [showJoke, setShowJoke] = useState(false);
	const [joke, setJoke] = useState('');
	return (
		<main className='body-container'>
			<div className='joke-box'>
				<h1>
					{showJoke
						? joke
						: 'Have you smiled today yet? Well 🤔... what are you waiting for? Click the button!!'}
				</h1>

				<button className='joke-button'>Grab a joke!</button>
			</div>
		</main>
	);
};

export default JokeArea;
