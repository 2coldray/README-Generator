//Make function Markdown
//Include title, table of contents, installation, usage, license, contributing, tests, and questions
function markdown(title, description, installation, usage, credits, badge, contribution, tests, email, github) {
    return `
    # Title
    ${title}

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
    My github can be found here: <a href="https://wwww.github.com/${github}">https://www.github.com/${github}</a>
    `
};

//Export Module
module.exports = markdown;