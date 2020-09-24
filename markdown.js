
//Make function Markdown
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