import React from 'react';
import './styles/App.css';
import JokeArea from './components/JokeArea';
import Navbar from './components/Navbar';
import MissionArea from './components/MissionArea';
import JokestersArea from './components/JokestersArea';
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';

function App() {
	return (
		<div className='App'>
			<header>
				<Navbar />
			</header>
			<JokeArea />
			<InfoSection>
				<MissionArea />
				<JokestersArea />
				<Footer />
			</InfoSection>
		</div>
	);
}

export default App;
