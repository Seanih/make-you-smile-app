import React from 'react';
import '../styles/Navbar.scss';
import logo from '../images/smiley.png';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<nav>
			<div className='navbar-container'>
				<ul className='nav_list'>
					<li>
						<img src={logo} alt='smiley face logo' className='logo' />
					</li>
					<li>
						{/* <a href='#our-mission' className='anchor'>
							Our Mission
						</a> */}
						<Link
							activeClass='active'
							to='our-mission'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Our Mission
						</Link>
					</li>
					<li>
						{/* <a href='#jokesters' className='anchor'>
							Jokesters
						</a> */}
						<Link
							activeClass='active'
							to='jokesters'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							Jokesters
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
