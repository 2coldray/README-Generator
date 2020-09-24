//Make function Markdown
//Include title, table of contents, installation, usage, license, contributing, tests, and questions
function markdown(data) {
    return `
    # ${data.title}

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## ${data.description}

    ## ${data.installation}

    ## ${data.usage}

    ## ${data.credits}

    ## ${data.license}

    ## ${data.contributing}

    ## ${data.tests}

    ## ${data.questions}
    `
};

//Export Module
module.exports = {
    markdown : markdown
}