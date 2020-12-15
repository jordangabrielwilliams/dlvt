import { isEmpty } from 'lodash';

function formatRecord(record) {
	if (isEmpty(record)) return `x-x-x`;

	const { wins, losses, ties } = record;

	return `${wins}-${losses}-${ties}`;
}

export default formatRecord;
