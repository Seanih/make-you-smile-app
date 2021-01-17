import React from 'react';

const infoStyle = {
	background: 'linear-gradient(#daedf3, #87e4f8, #00d4ff)',
};

const InfoSection = ({ children }) => {
	return <div style={infoStyle}>{children}</div>;
};

export default InfoSection;
