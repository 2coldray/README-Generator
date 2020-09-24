//Make function Markdown
//Include title, table of contents, installation, usage, license, contributing, tests, and questions
function markdown(title, installation, usage, credits, license, badge, contribution, tests, email, github) {
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
    ${badge}

    ## Contributions
    ${contribution}

    ## Tests
    ${tests}

    ## Questions
    ${email} [github link](https://www.github.com/${github})
    `
};

//Export Module
module.exports = markdown;