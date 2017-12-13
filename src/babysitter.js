const EARLIEST_START_TIME = 17;
const LATEST_END_TIME = 4;
const LAST_HOUR = 24;
const FIRST_HOUR = 0;
const MID_DAY = 12;

function checkStart(start) {
	if (start % 1 !== 0 ) {
		return false;
	} else {
		return start >= EARLIEST_START_TIME;
	}
}

function checkEnd(end) {
	if (end % 1 !== 0 ) {
		return false;
	} else if (end <= LATEST_END_TIME) {
		return true;
	} else if ( LAST_HOUR > end && end > EARLIEST_START_TIME) {
		return true;
	} else {
		return false;
	}
}

function checkBedtime(start, end, bedtime) {
	let convertEnd;
	if (bedtime % 1 !== 0) {
		return false;
	} else if (MID_DAY < bedtime && bedtime < start) {
		return false;
	} 

	if (MID_DAY >= end && end >= FIRST_HOUR) {
		convertEnd = 24 - end;
		if (bedtime > convertEnd) {
			return false;
		} else {
			return true;
		}
	} else if (end > MID_DAY) {
		if (bedtime > end) {
			return false;
		} else {
			return true;
		}
	}
}

function calculateHours(start, end, bedtime) {
	if (checkStart(start) === true && checkEnd(end) === true && checkBedtime(start, end, bedtime) === true) {
		let earlyHours;
		let laterHours;
		let latestHours;

		if (EARLIEST_START_TIME > bedtime && bedtime > FIRST_HOUR) {
			earlyHours = (LAST_HOUR - start) + (bedtime - FIRST_HOUR);
		} else if (EARLIEST_START_TIME < bedtime && bedtime <= LAST_HOUR) {
			earlyHours = bedtime - start;
		}

		if (EARLIEST_START_TIME > bedtime && bedtime > FIRST_HOUR) {
			laterHours = 0;
		} else if (EARLIEST_START_TIME < end && end < LAST_HOUR) {
			laterHours = end - bedtime;
		} else if ( end >= FIRST_HOUR) {
			laterHours = LAST_HOUR - bedtime;
		}

		if (EARLIEST_START_TIME > bedtime && bedtime > FIRST_HOUR) {
			latestHours = end - bedtime;
		} else if (EARLIEST_START_TIME >= end && end >= FIRST_HOUR) {
			latestHours = FIRST_HOUR + end;
		} else if (EARLIEST_START_TIME < end && end <= LAST_HOUR) {
			latestHours = 0;
		}	

		return ((earlyHours*12)+(laterHours*8)+(latestHours*16));
	} else {
		return false;
	}
}

module.exports = calculateHours;