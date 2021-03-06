import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, forEach, round } from 'lodash';

import formatRecord from '../../data/format-record';
import { all, supportedYears } from '../../data/dlvt';

import styles from './card.module.css';

const propTypes = {
	manager: PropTypes.shape({
		championships: PropTypes.string,
		description: PropTypes.string.isRequired,
		fullName: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		teamName: PropTypes.string.isRequired,
		years: PropTypes.shape({}),
	}).isRequired,
	year: PropTypes.oneOf([all, ...supportedYears]).isRequired,
};

function ConsolidatedData({ manager } = {}) {
	if (isEmpty(manager)) return null;

	const { years } = manager;

	let consolidatedWins = 0;
	let consolidatedLosses = 0;
	let consolidatedTies = 0;
	let consolidatedPointsFor = 0;
	let consolidatedPointsAgainst = 0;

	// Maybe a good opportunity for reduce?
	forEach(years, (year) => {
		consolidatedWins += year.record.wins;
		consolidatedLosses += year.record.losses;
		consolidatedTies += year.record.ties;
		consolidatedPointsFor += year.pointsFor;
		consolidatedPointsAgainst += year.pointsAgainst;
	});

	const consolidatedTotalMatches =
		consolidatedWins + consolidatedLosses + consolidatedTies;
	const averagePointsFor = consolidatedPointsFor / consolidatedTotalMatches;
	const averagePointsAgainst =
		consolidatedPointsAgainst / consolidatedTotalMatches;

	const record = {
		wins: consolidatedWins,
		losses: consolidatedLosses,
		ties: consolidatedTies,
	};
	const formattedRecord = formatRecord(record);

	return (
		<div className={styles.card_body}>
			<table className={styles.card_table}>
				<tr>
					<td>All-time Record</td>
					<td>Total PF</td>
					<td>Total PA</td>
					<td>PF(A)</td>
					<td>PA(A)</td>
				</tr>
				<tr>
					<td>{formattedRecord}</td>
					<td>{round(consolidatedPointsFor, 1)}</td>
					<td>{round(consolidatedPointsAgainst, 1)}</td>
					<td>{round(averagePointsFor, 1)}</td>
					<td>{round(averagePointsAgainst, 1)}</td>
				</tr>
			</table>
		</div>
	);
}

function YearData({ manager, year } = {}) {
	if (isEmpty(manager) || !year) return null;

	const { years } = manager;

	// Alex didn't join fantasy until the 2019 season
	if (!years[year]) return 'N/A';

	const { award, record, place, pointsAgainst, pointsFor } = years[year];
	const { wins, losses, ties } = record;
	const totalMatches = wins + losses + ties;
	const formattedRecord = formatRecord(record);

	return (
		<div className={styles.card_body}>
			<table className={styles.card_table}>
				<tr>
					<td>Place</td>
					<td>Record</td>
					<td>PF</td>
					<td>PA</td>
					<td>PF(A)</td>
					<td>PA(A)</td>
					<td>Award</td>
				</tr>
				<tr>
					<td>{place}</td>
					<td>{formattedRecord}</td>
					<td>{pointsFor}</td>
					<td>{pointsAgainst}</td>
					<td>{round(pointsFor / totalMatches, 1)}</td>
					<td>{round(pointsAgainst / totalMatches, 1)}</td>
					<td>{award}</td>
				</tr>
			</table>
		</div>
	);
}
function Card({ manager, year } = {}) {
	if (isEmpty(manager)) return null;

	const { championships, description, fullName, image, teamName } = manager;

	const data =
		year === 'all' ? (
			<ConsolidatedData manager={manager} />
		) : (
			<YearData manager={manager} year={year} />
		);

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
					<h4>{fullName}</h4>
					<p>
						<i>{description}</i>
					</p>
					{championships}
				</div>
			</div>
			{data}
		</div>
	);
}

Card.propTypes = propTypes;

export default Card;
