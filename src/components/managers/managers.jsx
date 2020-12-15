import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import DLVT, { all, supportedYears } from '../../data/dlvt';

import Card from '../card/card';

import styles from './managers.module.css';

const propTypes = {
	year: PropTypes.oneOf([all, ...supportedYears]).isRequired,
};

function Managers({ year } = {}) {
	const managers = map(DLVT, (manager) => (
		<Card manager={manager} key={manager.fullName} year={year} />
	));

	return <div className={styles.managers_wrapper}>{managers}</div>;
}

Managers.propTypes = propTypes;

export default Managers;
