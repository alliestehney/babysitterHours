const calculateHours = require('../src/babysitter');

describe("babysitter function", function() {
	it("babysitter starts no earlier than 5pm", function() {
		expect(calculateHours(17,2,19)).toBe(96);
	});
});