import aaronImage from '../images/aaron.jpg';
import alexImage from '../images/alex.jpg';
import benImage from '../images/ben.jpg';
import chaseImage from '../images/chase.png';
import codyImage from '../images/cody.jpg';
import collinImage from '../images/collin.png';
import danImage from '../images/dan.jpg';
import jordanImage from '../images/jordan.png';
import kennyImage from '../images/kenny.png';
import maxImage from '../images/max.png';

// Managers
export const aaron = 'aaron';
export const alex = 'alex';
export const ben = 'ben';
export const chase = 'chase';
export const cody = 'cody';
export const collin = 'collin';
export const dan = 'dan';
export const jordan = 'jordan';
export const kenny = 'kenny';
export const max = 'max';

export const managers = [
	aaron,
	alex,
	ben,
	chase,
	cody,
	collin,
	dan,
	jordan,
	kenny,
	max,
];

// Years
export const twentytwenty = '2020';

export const currentYear = twentytwenty;

// Data Model
const DLVT = {
	[aaron]: {
		fullName: 'Aaron Mack',
		teamName: 'Nothing but a (Jimmy) G Thang',
		description: 'Moved to Seattle for sex',
		image: aaronImage,
		years: {
			[twentytwenty]: {
				award: 'Award 1',
				manager: aaron,
				place: 6,
				pointsAgainst: 1486.8,
				pointsFor: 1465.18,
				record: {
					wins: 7,
					losses: 6,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
	[alex]: {
		fullName: 'Alex Piering',
		teamName: 'Master Pie',
		description: 'Started Frank Gore and won',
		image: alexImage,
		years: {
			[twentytwenty]: {
				award: 'Award 1',
				manager: alex,
				place: 1,
				pointsAgainst: 1516.68,
				pointsFor: 1709.12,
				record: {
					wins: 11,
					losses: 2,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
	[ben]: {
		fullName: 'Ben Johnson',
		teamName: 'Let Russ Cook',
		description: 'Only drafts Seahawks players',
		image: benImage,
		years: {
			[twentytwenty]: {
				award: 'Award 1',
				manager: ben,
				place: 3,
				pointsAgainst: 1626.06,
				pointsFor: 1764.7,
				record: {
					wins: 8,
					losses: 5,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
	[chase]: {
		fullName: 'Chase Pritchett',
		teamName: 'Team RG3PO',
		description: 'Lives in Europe',
		image: chaseImage,
		years: {
			[twentytwenty]: {
				award: 'Award 1',
				manager: chase,
				place: 2,
				pointsAgainst: 1520.68,
				pointsFor: 1546.4,
				record: {
					wins: 9,
					losses: 4,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
	[cody]: {
		fullName: 'Cody Fields',
		teamName: 'Team Fields',
		description: 'Forever 5th place',
		image: codyImage,
		years: {
			[twentytwenty]: {
				award: 'Award 1',
				manager: cody,
				place: 4,
				pointsAgainst: 1363.5,
				pointsFor: 1501.1,
				record: {
					wins: 8,
					losses: 5,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
	[collin]: {
		fullName: 'Collin Barrett',
		teamName: 'Comeback Kid',
		description: 'Always looking for a serviceable flex',
		image: collinImage,
		years: {
			[twentytwenty]: {
				award: 'Award 2',
				manager: collin,
				place: 9,
				pointsAgainst: 1553.16,
				pointsFor: 1411.74,
				record: {
					wins: 3,
					losses: 10,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
	[dan]: {
		fullName: 'Dan Eckman',
		teamName: 'Touchdown Tom',
		description: "Former champ who won't stop whining",
		image: danImage,
		years: {
			[twentytwenty]: {
				award: 'Award 2',
				manager: dan,
				place: 10,
				pointsAgainst: 1792.0,
				pointsFor: 1532.2,
				record: {
					wins: 2,
					losses: 11,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
	[jordan]: {
		fullName: 'Jordan Williams',
		teamName: 'Lord Commander',
		description: 'Most likely to draft 2 QBs',
		image: jordanImage,
		years: {
			[twentytwenty]: {
				award: 'Award 1',
				manager: jordan,
				place: 8,
				pointsAgainst: 1640.3,
				pointsFor: 1545.6,
				record: {
					wins: 5,
					losses: 8,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
	[kenny]: {
		fullName: 'Kenny Copsey',
		teamName: "Keeping Up With The Copsey's",
		description: 'Basically Bill Belichick',
		image: kennyImage,
		years: {
			[twentytwenty]: {
				award: 'Award 1',
				manager: kenny,
				place: 7,
				pointsAgainst: 1698.32,
				pointsFor: 1589.48,
				record: {
					wins: 5,
					losses: 8,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
	[max]: {
		fullName: 'Max Houston',
		teamName: 'Hut Hut HEIKS',
		description: 'Supposedly the strongest',
		image: maxImage,
		years: {
			[twentytwenty]: {
				award: 'Award 1',
				manager: max,
				place: 5,
				pointsAgainst: 1550.8,
				pointsFor: 1682.78,
				record: {
					wins: 7,
					losses: 6,
					ties: 0,
				},
				year: twentytwenty,
			},
		},
	},
};

// Potentially do arrays by year and just compute the object above>?

export default DLVT;
