//Make function Markdown
//Include title, table of contents, installation, usage, license, contributing, tests, and questions
function markdown(title, description, installation, usage, credits, license, contribution, tests, email, github) {
    
return `# ${title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
    
## Description
${description}
    
## Installation
${installation}
    
## Usage
${usage}
    
## Credits
${credits}
    
## License
${license}
    
## Contributions
${contribution}
    
## Tests
${tests}
    
## Questions
My email is: ${email} 

My github can be found here: https://www.github.com/${github}`
};

//Export Module
module.exports = markdown;