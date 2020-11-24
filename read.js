const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const readGen = require('./generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'githubusername',
      message: 'Enter your github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email',
    },
    {
      type: 'input',
      name: 'title',
      message: "What is the project's name",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please add a small description about the project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please indicate the steps you took for the installation.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide the usage of your project.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose the current license you are using.',
      choices: ["Apache", "MIT", "MPL 2.0", "GPL 3.0"],
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'If this was a group project please indicate how others contributed.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'If you tested your project please provide any test results.',
    },
  ]);
};
promptUser()
    .then(function(data){
        if (data.license === "Apache"){
            data.icon = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }
        if (data.license === "MIT"){
            data.icon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        if (data.license === "MPL2.0"){
            data.icon = "[![License: MPL2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        }
        if (data.license === "GPL 3.0"){
            data.icon = "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }
        const readMe = readGen(data)
        return writeFileAsync("myREADME.md", readMe)
    })
    .then(function (){
        console.log("Success");
    });

