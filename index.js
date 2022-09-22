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

const engineerQuestions = [
  {
    type: "input",
    message: "Please enter the engineer's name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter the engineer's employee ID number: ",
    name: "employeeID",
  },
  {
    type: "input",
    message: "Please enter the engineer's email address: ",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the engineer's GitHub username: ",
    name: "githubUser",
  }
];

const internQuestions = [
  {
    type: "input",
    message: "Please enter the intern's name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Please enter the intern's employee ID number: ",
    name: "interID",
  },
  {
    type: "input",
    message: "Please enter the intern's email address: ",
    name: "email",
  },
  {
    type: "input",
    message:
      "Please enter the name of the intern's school: ",
    name: "school",
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

function addEngineer() {
	prompt(engineerQuestions)
	.then((data) => {
		console.log(data)
	});
};

function addIntern() {
	prompt(internQuestions)
	.then((data) => {
		console.log(data)
	});
};

startPrompt();