const Engineer = require('../lib/Engineer.js');

console.log(new Engineer());

test('create an Engineer object', () => {
	const employee = new Engineer();
	expect(typeof employee).toBe('object');
});