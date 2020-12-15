import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import 'fontsource-noto-sans-jp/300.css';

import './layout.css';

const propTypes = {
	children: PropTypes.element.isRequired,
};

function Layout({ children }) {
	return (
		<div className="layout">
			<Helmet>
				<title>DLVT</title>
			</Helmet>
			{children}
		</div>
	);
}

Layout.propTypes = propTypes;

export default Layout;
