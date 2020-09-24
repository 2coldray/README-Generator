//Test node
console.log("Hello World");

//Import Modules
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./markdown.js");

//Inquirer
//Need inputs for title, description, installation, usage, and tests
//Need list for licence as well as badge to appear
//Github username inserted into link
//Need user to import email address as well

inquirer
  .prompt([
    {
      type: "input",
      message: "What's the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What's your project description?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the steps to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use.",
      name: "usage",
    },
    {
      type: "input",
      message: "List your collaborators if any.",
      name: "credits",
    },
    {
      type: "list",
      message: "What license do you want to use?",
      choices: [
        {
          name: "MIT",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]\
            (https://opensource.org/licenses/MIT)",
        },
        "Apache",
        "GNU",
        "ISC",
      ],
      name: "badge",
    },
    {
      type: "input",
      message:
        "Add guidelines for how other contributors can add to any packages you created.",
      name: "contribution",
    },
    {
      type: "input",
      message:
        "Write tests for your app, and provide examples how to use them here.",
      name: "tests",
    },
    {
      type: "input",
      message: "What's your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What's your Github username?",
      name: "github",
    },
  ])
  .then((data) => {
      console.log(data)
    // const readmeString = markdown(
    //     data
    // )
    // fs.writeFile("README.md", answers, (err) => {
    //     if (err) throw err;
    //     console.log("Markdown file was successfully created")
    // })
  });
