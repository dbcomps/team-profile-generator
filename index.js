const { prompt } = require('inquirer');
const fs = require('fs');

// employee questions
const managerQuestions = [
  {
    type: "input",
    message: "Please enter the manager's name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter the manager's employee ID number: ",
    name: "employeeID",
  },
  {
    type: "input",
    message: "Please enter the manager's email address: ",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the manager's office number: ",
    name: "officeNumber",
  }
];

const employeeOptions = [
  {
    type: "list",
    message: "Menu",
    choices: ["Add Engineer", "Add Intern", "Team Complete"],
    name: "menu",
  },
];

function startPrompt() {
	prompt(managerQuestions)
	.then((data) => {
		console.log(data);
		addEmployee();
	});
};

function addEmployee() {
	prompt(employeeOptions)
	.then((data) => {
		console.log(data);
	});
};

startPrompt();