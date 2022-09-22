const Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name, employeeID, email, school){
        super(name, employeeID, email);
        this.school = school;
        this.role = "Intern"
    }

    getRole(){
        return this.role;
    }
}

module.exports = Intern;