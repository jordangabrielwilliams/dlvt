import React, { useState } from 'react';

import { all, currentYear, supportedYears } from '../data/dlvt';

import Layout from '../components/layout/layout';
import Managers from '../components/managers/managers';

import styles from './index.module.css';

export default function Application() {
	const [year, setYear] = useState(currentYear);

	function handleChange(event) {
		setYear(event.target.value);
	}

	const yearOptions = supportedYears.map((y) => ({
		value: y,
		label: y,
	}));
	const options = [{ value: all, label: 'All' }, ...yearOptions];

	const dropdown = (
		<span className={styles.year_select}>
			Season:{' '}
			<select value={year} onChange={handleChange}>
				{options.map((o) => (
					<option value={o.value} key={o.value}>
						{o.label}
					</option>
				))}
			</select>
		</span>
	);

	return (
		<Layout>
			<h1 className={styles.header}>D L V T</h1>
			{dropdown}
			<Managers year={year} />
		</Layout>
	);
}
