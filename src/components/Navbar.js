import React from 'react';
import '../styles/Navbar.scss';
import logo from '../images/smiley.png';

const Navbar = () => {
	return (
		<nav>
			<div className='navbar'>
				<ul className='nav_list'>
					<li>
						<img src={logo} alt='smiley face logo' className='logo' />
					</li>
					<li>
						<a href='#mission' className='anchor'>
							Mission
						</a>
					</li>
					<li>
						<a href='#process' className='anchor'>
							Process
						</a>
					</li>
					<li>
						<a href='#our_team' className='anchor'>
							Our Team
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
