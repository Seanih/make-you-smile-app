import React from 'react';
import '../styles/MissionArea.scss';
import huddlePic from '../images/huddle.jpg';
import brainstormPic from '../images/brainstormPic.jpg';

const MissionArea = () => {
	return (
		<div id='our-mission' className='mission-area'>
			<div className='center-container'>
				<div className='mission-div'>
					<div className='mission-statement'>
						<h2>Our Mission</h2>
						<p>
							Let's face it, this last year hasn't been the best for a lot of
							people. In a time when there is so much to be sad about, we
							figured we would fight this dark cloud with the most powerful
							weapon there is - <span className='span-text'>a SMILE</span>
						</p>
					</div>
					<img src={huddlePic} alt='huddle' />
				</div>
				<div className='process-div'>
					<img src={brainstormPic} alt='brainstorming' />
					<div className='process-statement'>
						<h2>The Process</h2>
						<p>
							Our team of world-class writers has come up with a brilliant
							formula to produce some of the{' '}
							<span className='span-text'>best</span> content that is
							<span className='span-text'> 100% guaranteed</span> to bring a
							smile to your face...at some point 😅: they throw everything at
							the wall to see what bounces!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MissionArea;
