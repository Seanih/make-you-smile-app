import React from 'react';
import '../styles/JokestersArea.scss';
import goku from '../images/goku.jpg';
import grumpyFace from '../images/grumpy-face.jpg';
import kidFace from '../images/kid-face.jpg';
import snoopy from '../images/snoopy.jpg';

const JokestersArea = () => {
	return (
		<div id='jokesters' className='jokesters-area'>
			<h2>Meet The Team</h2>
			<div className='jokesters-box'>
				<div className='set-one'>
					<div className='jokester one'>
						<h3>Henry A.</h3>
						<img src={goku} alt='goku' />
						<p>Founder and anime lover</p>
					</div>
					<div className='jokester two'>
						<h3>Joseph B.</h3>
						<img src={grumpyFace} alt='grumpy face' />
						<p>Hates waking up early</p>
					</div>
				</div>
				<div className='set-two'>
					<div className='jokester three'>
						<h3>Brandon C.</h3>
						<img src={kidFace} alt='little kid' />
						<p>A kid at heart</p>
					</div>
					<div className='jokester four'>
						<h3>Jessica D.</h3>
						<img src={snoopy} alt='cool guy' />
						<p>Thinks she's the best writer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JokestersArea;
