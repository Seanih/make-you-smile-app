import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<a
					href='https://www.facebook.com/'
					class='fa fa-facebook'
					target='_blank'
					rel='noreferrer'
				>
					acebook
				</a>
				<p>&copy;2021 Make-U-Smile</p>
				<a
					href='https://twitter.com/'
					class='fa fa-twitter'
					target='_blank'
					rel='noreferrer'
				>
					twitter
				</a>
			</div>
		</div>
	);
};

export default Footer;
