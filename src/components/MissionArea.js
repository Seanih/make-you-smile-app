import React from 'react';
import '../styles/MissionArea.scss';
import huddlePic from '../images/huddle.jpg';
import brainstormPic from '../images/brainstormPic.jpg';

const MissionArea = () => {
	return (
		<div className='mission-area'>
			<div className='center-container'>
				<div className='mission-div'>
					<div className='mission-statement'>
						<h2>Our Mission</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
							veritatis molestias recusandae molestiae cupiditate delectus.
							Molestias esse possimus tempora nobis?
						</p>
					</div>
					<img src={huddlePic} alt='huddle' />
				</div>
				<div className='process-div'>
					<img src={brainstormPic} alt='brainstorming' />
					<div className='process-statement'>
						<h2>The Process</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
							hic impedit ipsa quia sit mollitia asperiores iusto odio tempore
							nesciunt.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MissionArea;
