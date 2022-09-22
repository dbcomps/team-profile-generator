const Manager = require('../lib/Manager.js');

console.log(new Manager());

test('create an manager object', () => {
	const employee = new Manager();
	expect(typeof employee).toBe('object');
});