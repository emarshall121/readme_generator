// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#Title of Application: ${data.title}

[![Image from Gyazo](https://i.gyazo.com/118297f2274b3547efb6a05d298f5081.gif)](https://gyazo.com/118297f2274b3547efb6a05d298f5081)

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}
  
`;
}

module.exports = generateMarkdown;