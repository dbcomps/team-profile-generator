const Manager = require('../lib/manager');

console.log(new Manager());

test('create an manager object', () => {
	const employee = new Manager();
	expect(typeof employee).toBe('object');
});