// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Test - What command should be run to start the test
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![${license}](https://img.shields.io/badge/license-${license}-green)`
  }
  else if (license === "APACHE_2.0") {
    return `![${license}](https://img.shields.io/badge/license-${license}-blue)`
  }
  else if (license === "BSD_3") {
    return `![${license}](https://img.shields.io/badge/license-${license}-red)`
  }
  else if (license === "None") {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `- [License](#license)`;
    } 
    else {
    return ''
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== 'None'){
  return `## License

  This project is licensed under the ${license} license.`;
  
  } else {
  return ''
  }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents
- [Usage](#usage)
- [Installation](#installation)
- [Contribute](#contribute)
- [Tests](#tests)
${renderLicenseLink(data.license)}
- [Questions](#questions)


## Usage
${data.usage}


## Installation
${data.installation}


## Contribute 
${data.contribute}


## Tests
${data.tests}


${renderLicenseSection(data.license)}


## Questions
If you have any questions you can contact me directly at ${data.email} 
or alternatively you can visit my github page at https://github.com/${data.githubHandle}  
`;
}

module.exports = generateMarkdown;
