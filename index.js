const fs = require("fs")
const inquirer = require("inquirer")
const Employee = require(" ");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

{
    type: 'input',
    message: 'Manager',
    name: 'name',
},

{
    type: 'list',
    message: 'Select Role',
        choices: ["Engineer", "Intern", "Manager"],
    validate: (value=>{ if (value){return 'i need a value to continue'}
    })
},

//----------MANAGER
// enter the team manager’s 
// name, 
// employee ID, 
// email address, and 
// office number 
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

//----------ENGINEER
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s 
// name,
//  ID, 
//  email, and 
//  GitHub username, and 
//  I am taken back to the menu


//---------INTERN
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s 
// name, 
// ID, 
// email, and 
// school, and 
// I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated