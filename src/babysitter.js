function checkStart(start) {
	return start >= 17;
}

function calculateHours(start, end, bedtime) {
	if (checkStart(start) === true) {
		return 96;
	} else {
		return false;
	}
}

module.exports = calculateHours;