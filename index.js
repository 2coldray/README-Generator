//Test node
console.log("Hello World")

//Import Modules
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./markdown.js")

//Inquirer
//Need inputs for title, description, installation, usage, and tests
//Need list for licence as well as badge to appear
//Github username inserted into link
//Need user to import email address as well

inquirer.prompt([
    {
        type: "input",
        message: "What's the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What's your project description?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage"
    },
    {
        type: "input",
        message: "List your collaborators if any.",
        name: "credits"
    },
    {
        type: "list",
        message: "What license do you want to use?",
        choices: ["MIT", "Apache", "GNU", "ISC"],
        name: "badge"
    },
    {
        type:
    }
]);
