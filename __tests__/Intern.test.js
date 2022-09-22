const Intern = require('../lib/Intern.js');

console.log(new Intern());

test('create an Intern object', () => {
	const employee = new Intern();
	expect(typeof employee).toBe('object');
});