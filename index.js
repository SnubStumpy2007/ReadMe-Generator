// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    name: "title",
    message: "What is the title of your project?", 
  },
  {
    type: "input",
    message: "Please enter a one-sentence description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please tell us your user story:",
    name: "about", 
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation", 
  },
  {
    type: "input",
    message: "What is the link to clone the repo?",
    name: "clone", 
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license you used for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
    ],
  },
  {
    type: "input",
    message: "Please enter any testing protocols you used for your project?",
    name: "test", 
  },
  {
    type: "input",
    name: "author",
    message: "What is your name?", 
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your email?",  
  },
  {
    type: "input",
    name: "URL",
    message: "What is the URL of the live site?",
  },
  {
    type: "input",
    name: "repo",
    message: "What is the URL of the github repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

//TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    await writeToFile("created-README.md", generateMarkdown({...answers}));
  } catch (err) {
    throw err;
  }
}

// Function call to initialize app
init();

// sources
// Tutor Daniel Sires
// https://geshan.com.np/blog/2023/03/inquirer-js/
// https://github.com/jfisher396/readme-generator
// https://stackoverflow.com/questions/67013842/trying-to-place-license-badge-within-readme-md-using-node-js-but-getting-error-a
