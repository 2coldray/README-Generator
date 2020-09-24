//Make function Markdown
//Include title, table of contents, installation, usage, license, contributing, tests, and questions
function markdown(data) {
    return `
    # Title
    ${data.title}

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Credits
    ${data.credits}

    ## License
    ${badge}
    
    ## Contributions
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    ${data.email} [github link](https://www.github.com/${data.github})
    `
};

//Export Module
module.exports = {
    markdown : markdown
}