const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(name, employeeID, email, githubUser) {
    super(name, employeeID, email);
    this.githubUser = githubUser;
    this.role = "Engineer";
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;