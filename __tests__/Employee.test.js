const Employee = require('../lib/employee.js');

// console.log(new Employee());

test('create an employee object', () => {
	const employee = new Employee('Rick');
	
	expect(typeof employee).toBe('object');
	expect(employee.name).toBe('Rick');
});


