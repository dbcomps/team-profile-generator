const { prompt } = require('inquirer');
const fs = require('fs');

// bring the classes
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// gather the employees into a team
const team = [];

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

const addEmployeeOption = [
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
		const manager = new Manager(
			data.name,
			data.employeeID,
			data.email,
			data.officeNumber
		);
		team.push(manager);
		console.log(team);
	});
};

function addEmployee() {
	prompt(addEmployeeOption)
	.then((data) => {
		if(data.menu === 'Add Engineer') {
			addEngineer();	
		} else if (data.menu == 'Add Intern') {
			addIntern();
		} 
	});
};

function addEngineer() {
	prompt(engineerQuestions)
	.then((data) => {
		console.log(data);
		const engineer = new Engineer(
			data.name,
			data.employeeID,
			data.email,
			data.githubUser
		);
		team.push(engineer);
		console.log(team);
	});
};

function addIntern() {
	prompt(internQuestions)
	.then((data) => {
		console.log(data);
		const intern = new Intern(
			data.name,
			data.employeeID,
			data.email,
			data.school
		);
		team.push(intern);		
	});
};

startPrompt()
// 	.then(addEmployee())
// 	.catch(err => {
// 		console.log(err);
// 	});
	