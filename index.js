const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const myTeam = [];

function roleSelection() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select Role",
        name: "Role",
        choices: ["Engineer", "Intern", "Build Template"],
        //   validate: (value) => {
        //     if (value) {
        //       return "i need a value to continue";
        //     }
        //   },
      },
    ])
    .then((data) => {
      console.log(data);
    });
}

function employeeInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Employee Name",
        name: "name",
      },
      {
        type: "input",
        message: "Enter Employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter Employee's Email",
        name: "email",
      },
    ])
    .then((data) => {
      //   console.log(data);
      managerInfo(data);
    });
}

function managerInfo(employeeData) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Office Number",
        name: "officeNumber",
      },
    ])
    .then((data) => {
      //   console.log(data);
      //   console.log(employeeData);
      const manager = new Manager(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        data.officeNumber
      );
      myTeam.push(manager);
      //   console.log(manager);
    });
}

function engineerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter GitHub Username",
        name: "github",
      },
    ])
    .then((data) => {
      //   console.log(data);
      const engineer = new Engineer(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        data.github
      );
      myTeam.push(engineer);
    });
}

function internInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter School Name",
        name: "school",
      },
    ])
    .then((data) => {
      //   console.log(data);
      const intern = new Intern(
        employeeData.name,
        employeeData.id,
        employeeData.email,
        data.school
      );
      myTeam.push(intern);
    });
}

employeeInfo();

//----------MANAGER
// enter the team manager’s
// name,
// employee ID,
// email address,
// office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

//----------ENGINEER
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s
// name,
//  ID,
//  email,
//  GitHub username, and
//  I am taken back to the menu

//---------INTERN
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s
// name,
// ID,
// email,
// school, and
// I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
