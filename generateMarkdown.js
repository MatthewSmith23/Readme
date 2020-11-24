// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License 
  This application is covered under the following license: [${data.license}](https://choosealicense.com/licenses/).
  ### Contributing
  ${data.contribution}
  ### Tests
  ${data.test}
  ### Questions 
  Email me if you have any questions or concerns: ${data.email}. Thank you.
  Check Out My Github Page:
  [Github](https://github.com/${data.githubusername})

`;
}

module.exports = generateMarkdown;
