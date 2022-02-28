const inquirer = require("inquirer");
const fs = ("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const employees = [];

function addMember() {
    inquirer.prompt([{
        message: "Enter member's name",
        name: "name"
    },
    {
    }])
}