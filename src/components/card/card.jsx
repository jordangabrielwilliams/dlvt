import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import formatRecord from '../../data/format-record';
import { currentYear } from '../../data/dlvt';

import styles from './card.module.css';

const propTypes = {
	manager: PropTypes.shape({
		description: PropTypes.string.isRequired,
		fullName: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		teamName: PropTypes.string.isRequired,
		years: PropTypes.shape({}),
	}).isRequired,
};

function Card({ manager } = {}) {
	if (isEmpty(manager)) return null;

	const { description, fullName, image, teamName, years } = manager;
	const { record } = years[currentYear];
	const formattedRecord = formatRecord(record);

	return (
		<div className={styles.card}>
			<div className={styles.card_header}>
				<img
					src={image}
					alt={`${fullName} profile`}
					className={styles.card_header_image}
				/>
				<div className={styles.card_header_content}>
					<h3>{teamName}</h3>
					<h4>
						{fullName} ({formattedRecord})
					</h4>
					<p>
						<i>{description}</i>
					</p>
					{/* Make this emoji count dynamic */}
					🏆🏆💩
				</div>
			</div>
		</div>
	);
}

Card.propTypes = propTypes;

export default Card;
