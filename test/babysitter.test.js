const calculateHours = require('../src/babysitter');

describe("babysitter function", function() {
	it("babysitter starts no earlier than 5pm", function() {
		expect(calculateHours(17,2,19)).toBe(96);
	});

	it("babysitter starts no earlier than 5pm", function() {
		expect(calculateHours(16,2,19)).toBe(false);
	});

	it("babysitter leaves no later than 4am", function() {
		expect(calculateHours(17,5,19)).toBe(false);
	});

	it("babysitter leaves no later than 4am", function() {
		expect(calculateHours(17,22,20)).toBe(52);
	});

	it("babysitter leaves no later than 4am", function() {
		expect(calculateHours(17,8,20)).toBe(false);
	});

	it("babysitter leaves no later than 4am", function() {
		expect(calculateHours(17,4,20)).toBe(132);
	});

	it("provided bedtime is after midnight", function() {
		expect(calculateHours(17,4,1)).toBe(144);
	});

	it("provided end time is before the start time", function() {
		expect(calculateHours(17,16,1)).toBe(false);
	});

	it("provided end time is before the start time", function() {
		expect(calculateHours(22,11,1)).toBe(false);
	});

	it("provided bedtime is after the end time", function() {
		expect(calculateHours(18,20,23)).toBe(false);
	});
});