function checkStart(start) {
	return start >= 17;
}

function checkEnd(end) {
	if (end <= 4) {
		return true;
	} else if ( 24 > end && end > 17) {
		return true;
	} else {
		return false
	}
}

function calculateHours(start, end, bedtime) {
	if (checkStart(start) === true && checkEnd(end) === true) {
		const earlyHours = bedtime - start;
		let laterHours;
		let latestHours;

		if (17 < end && end < 24) {
			laterHours = end - bedtime;
		} else if ( end >= 0) {
			laterHours = 24 - bedtime;
		}


		if (17 >= end && end >= 0) {
			latestHours = 0 + end;
		} else if ( 17 < end && end <= 24) {
			latestHours = 0;
		}	

		return ((earlyHours*12)+(laterHours*8)+(latestHours*16));
	} else {
		return false;
	}
}

module.exports = calculateHours;