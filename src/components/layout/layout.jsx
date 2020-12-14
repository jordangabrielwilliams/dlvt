import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

const propTypes = {
	/** The child component to render */
	children: PropTypes.element,
};

const defaultProps = {
	children: null,
};

function Layout({ children }) {
	return <div className="layout">{children}</div>;
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
