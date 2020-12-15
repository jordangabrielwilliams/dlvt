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
export const twentynineteen = '2019';
export const twentyeighteen = '2018';

export const supportedYears = [twentytwenty, twentynineteen, twentyeighteen];

export const currentYear = twentytwenty;
export const all = 'all';

// Data Model
const DLVT = {
	[aaron]: {
		championships: undefined,
		fullName: 'Aaron Mack',
		teamName: 'Nothing but a (Jimmy) G Thang',
		description: 'Moved to Seattle for sex',
		image: aaronImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: '?',
				manager: aaron,
				place: 2,
				pointsAgainst: 1598,
				pointsFor: 1555,
				record: {
					wins: 8,
					losses: 5,
					ties: 0,
				},
				year: twentynineteen,
			},
			[twentyeighteen]: {
				award: 'N/A',
				manager: aaron,
				place: 4,
				pointsAgainst: 1585,
				pointsFor: 1722,
				record: {
					wins: 9,
					losses: 4,
					ties: 0,
				},
				year: twentyeighteen,
			},
		},
	},
	[alex]: {
		championships: undefined,
		fullName: 'Alex Piering',
		teamName: 'Master Pie',
		description: 'Started Frank Gore and won',
		image: alexImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: 'Rookie of the Year',
				manager: alex,
				place: 6,
				pointsAgainst: 1421,
				pointsFor: 1511,
				record: {
					wins: 8,
					losses: 5,
					ties: 0,
				},
				year: twentynineteen,
			},
		},
	},
	[ben]: {
		championships: undefined,
		fullName: 'Ben Johnson',
		teamName: 'Let Russ Cook',
		description: 'Only drafts Seahawks players',
		image: benImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: '?',
				manager: ben,
				place: 8,
				pointsAgainst: 1595,
				pointsFor: 1547,
				record: {
					wins: 5,
					losses: 8,
					ties: 0,
				},
				year: twentynineteen,
			},
			[twentyeighteen]: {
				award: 'N/A',
				manager: ben,
				place: 2,
				pointsAgainst: 1514,
				pointsFor: 1525,
				record: {
					wins: 6,
					losses: 7,
					ties: 0,
				},
				year: twentyeighteen,
			},
		},
	},
	[chase]: {
		championships: '🏆',
		fullName: 'Chase Pritchett',
		teamName: 'Team RG3PO',
		description: 'Lives in Europe',
		image: chaseImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: '?',
				manager: chase,
				place: 4,
				pointsAgainst: 1406,
				pointsFor: 1507,
				record: {
					wins: 9,
					losses: 3,
					ties: 1,
				},
				year: twentynineteen,
			},
			[twentyeighteen]: {
				award: 'N/A',
				manager: chase,
				place: 1,
				pointsAgainst: 1477,
				pointsFor: 1691,
				record: {
					wins: 10,
					losses: 3,
					ties: 0,
				},
				year: twentyeighteen,
			},
		},
	},
	[cody]: {
		championships: undefined,
		fullName: 'Cody Fields',
		teamName: 'Team Fields',
		description: 'Forever 5th place',
		image: codyImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: '?',
				manager: cody,
				place: 5,
				pointsAgainst: 1608,
				pointsFor: 1529,
				record: {
					wins: 6,
					losses: 7,
					ties: 0,
				},
				year: twentynineteen,
			},
			[twentyeighteen]: {
				award: 'N/A',
				manager: cody,
				place: 9,
				pointsAgainst: 1646,
				pointsFor: 1589,
				record: {
					wins: 5,
					losses: 8,
					ties: 0,
				},
				year: twentyeighteen,
			},
		},
	},
	[collin]: {
		championships: undefined,
		fullName: 'Collin Barrett',
		teamName: 'Comeback Kid',
		description: 'Always looking for a serviceable flex',
		image: collinImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: 'MVP',
				manager: collin,
				place: 3,
				pointsAgainst: 1514,
				pointsFor: 1550,
				record: {
					wins: 8,
					losses: 5,
					ties: 0,
				},
				year: twentynineteen,
			},
			[twentyeighteen]: {
				award: 'N/A',
				manager: collin,
				place: 3,
				pointsAgainst: 1521,
				pointsFor: 1591,
				record: {
					wins: 6,
					losses: 7,
					ties: 0,
				},
				year: twentyeighteen,
			},
		},
	},
	[dan]: {
		championships: '🏆💩',
		fullName: 'Dan Eckman',
		teamName: 'Touchdown Tom',
		description: "Former champ who won't stop whining",
		image: danImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: '?',
				manager: dan,
				place: 10,
				pointsAgainst: 1515,
				pointsFor: 1484,
				record: {
					wins: 4,
					losses: 9,
					ties: 0,
				},
				year: twentynineteen,
			},
			[twentyeighteen]: {
				award: 'N/A',
				manager: dan,
				place: 8,
				pointsAgainst: 1617,
				pointsFor: 1524,
				record: {
					wins: 4,
					losses: 9,
					ties: 0,
				},
				year: twentyeighteen,
			},
		},
	},
	[jordan]: {
		championships: undefined,
		fullName: 'Jordan Williams',
		teamName: 'Lord Commander',
		description: 'Most likely to draft 2 QBs',
		image: jordanImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: '?',
				manager: jordan,
				place: 9,
				pointsAgainst: 1716,
				pointsFor: 1504,
				record: {
					wins: 3,
					losses: 9,
					ties: 1,
				},
				year: twentynineteen,
			},
			[twentyeighteen]: {
				award: 'N/A',
				manager: jordan,
				place: 5,
				pointsAgainst: 1641,
				pointsFor: 1695,
				record: {
					wins: 8,
					losses: 5,
					ties: 0,
				},
				year: twentyeighteen,
			},
		},
	},
	[kenny]: {
		championships: '🏆🏆🏆',
		fullName: 'Kenny Copsey',
		teamName: "Keeping Up With The Copsey's",
		description: 'Filipino Bill Belichick',
		image: kennyImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: '?',
				manager: kenny,
				place: 1,
				pointsAgainst: 1323,
				pointsFor: 1385,
				record: {
					wins: 8,
					losses: 5,
					ties: 0,
				},
				year: twentynineteen,
			},
			[twentyeighteen]: {
				award: 'N/A',
				manager: kenny,
				place: 7,
				pointsAgainst: 1733,
				pointsFor: 1532,
				record: {
					wins: 5,
					losses: 8,
					ties: 0,
				},
				year: twentyeighteen,
			},
		},
	},
	[max]: {
		championships: '🏆',
		fullName: 'Max Houston',
		teamName: 'Hut Hut HEIKS',
		description: 'Supposedly the strongest',
		image: maxImage,
		years: {
			[twentytwenty]: {
				award: 'TBD',
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
			[twentynineteen]: {
				award: 'Dad of the Year',
				manager: max,
				place: 7,
				pointsAgainst: 1445,
				pointsFor: 1569,
				record: {
					wins: 5,
					losses: 8,
					ties: 0,
				},
				year: twentynineteen,
			},
			[twentyeighteen]: {
				award: 'N/A',
				manager: max,
				place: 6,
				pointsAgainst: 1631,
				pointsFor: 1725,
				record: {
					wins: 6,
					losses: 7,
					ties: 0,
				},
				year: twentyeighteen,
			},
		},
	},
};

// Potentially do arrays by year and just compute the object above?

export default DLVT;
