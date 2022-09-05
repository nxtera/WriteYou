// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    /*0*/ "What is the name of your project?",
    /*1*/ "What is the description of the project?",
    /*2*/ "Provide instructions and examples for use of your project",
    /*3*/ "What are the steps required to install your project?",
    /*4*/ "How can others contribute to the project?",
    /*5*/ "What is the test information?",
    /*6*/ "Choose a license from the following options",
    /*7*/ "What is your Github handle?",  
    /*8*/ "What is your email address?",  
];

const generateREADME = () =>

inquirer
    .prompt([
        {
         type: 'input',
         name: 'name',
         message: questions[0],
        },
        {
         type: 'input',
         name: 'description',
         message: questions[1],
        },
        {
         type: 'input',
         name: 'usage',
         message: questions[2],
        },
        {
         type: 'input',
         name: 'installation',
         message: questions[3],
        },
        {
         type: 'input',
         name: 'contribute',
         message: questions[4],
        },
        {
         type: 'input',
         name: 'tests',
         message: questions[5],
        },
        {
         type: 'list',
         name: 'license',
         message: questions[6],
         choices: ['APACHE_2.0', "BSD_3", 'MIT', 'None'],
        },
        {
         type: 'input',
         name: 'githubHandle',
         message: questions[7]
        },
        {
         type: 'input',
         name: 'email',
         message: questions[8]
        },

    ])
    .then ((answers) => {
    const readmeContent = generateMarkdown(answers)
    writeToFile("./dist/README.md", readmeContent);
    console.log("Generated README sucessfully!")
    }
    )


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    generateREADME ()
}

// Function call to initialize app
init();
