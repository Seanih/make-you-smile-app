import React from 'react';
import '../styles/Navbar.scss';
import logo from '../images/smiley.png';

const Navbar = () => {
	return (
		<nav>
			<div className='navbar-container'>
				<ul className='nav_list'>
					<li>
						<img src={logo} alt='smiley face logo' className='logo' />
					</li>
					<li>
						<a href='#our-mission' className='anchor'>
							Our Mission
						</a>
					</li>
					<li>
						<a href='#jokesters' className='anchor'>
							Jokesters
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
