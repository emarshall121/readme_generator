const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('You need to enter a project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project? (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions or examples of use.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose an open source license for your project',
    choices: ['MIT', 'Apache', 'Mozilla']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are your guidelines for contributing to this project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Tests for your application'
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const outputString = generateMarkdown(data)
  fs.writeFile(fileName, outputString, function(err){
    if(err){console.error(err)}
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(responses){
      console.log(responses)
      writeToFile("./output/Readme.md", responses)
    })
}

// Function call to initialize app
init();
