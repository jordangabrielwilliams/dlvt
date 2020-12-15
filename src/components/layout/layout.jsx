import React from 'react';
import PropTypes from 'prop-types';
import 'fontsource-noto-sans-jp/300.css';

import './layout.css';

const propTypes = {
	children: PropTypes.element.isRequired,
};

function Layout({ children }) {
	return <div className="layout">{children}</div>;
}

Layout.propTypes = propTypes;

export default Layout;
