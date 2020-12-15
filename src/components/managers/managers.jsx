import React from 'react';
import { map } from 'lodash';

import DLVT from '../../data/dlvt';

import Card from '../card/card';

import styles from './managers.module.css';

function Managers() {
	const managers = map(DLVT, (manager) => (
		<Card manager={manager} key={manager.fullName} year="2020" />
	));

	return <div className={styles.wrapper}>{managers}</div>;
}

export default Managers;
