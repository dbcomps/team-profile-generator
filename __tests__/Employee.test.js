const Employee = require('../lib/Employee.js');

console.log(new Employee());

test('create an employee object', () => {
	const employee = new Employee('Rick');
	
	expect(typeof employee).toBe('object');
	expect(employee.name).toBe('Rick');
});


