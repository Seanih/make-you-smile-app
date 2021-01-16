import React from 'react';
import JokeArea from './components/JokeArea';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
	return (
		<div className='App'>
			<header>
				<Navbar />
			</header>
			<JokeArea />
		</div>
	);
}

export default App;
