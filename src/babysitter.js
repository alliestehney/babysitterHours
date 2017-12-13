function checkStart(start) {
	return start >= 17;
}

function checkEnd(end) {
	if (end > 4) {
		return false;
	} else {
		return true;
	}
}

function calculateHours(start, end, bedtime) {
	if (checkStart(start) === true && checkEnd(end) === true) {
		return 96;
	} else {
		return false;
	}
}

module.exports = calculateHours;