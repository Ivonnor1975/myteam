const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptManager = () => {
  console.log(`
  =======================
  Please Built your Team!
  =======================
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team Manager's Name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter Manager's name!");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: "What is the team Manager's Id? (Required)",
      ...validateNumbers(),
    },
    {
      type: "input",
      name: "email",
      message: "What is Manager email address?",
      validate: (answer) => {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
         if(!emailRegex.test(answer)) {
             console.log("You have to provide a valid email address!");
             return false;
         }
         return true;
      }
    },
    {
      type: 'number',
      name: 'officenumber',
      message: "What is the team Manager's office number? (Required)",
      ...validateNumbers(),
    }
]);
};

//validate numbers
const validateNumbers = moreValidationChecks => ({
  validate: input => {
      if (input === '') {
          return 'Please provide a valid number greater then 0'
      }
      return moreValidationChecks ? moreValidationChecks(input) : true
  },
  filter: input => {
      // clear the invalid input
      return Number.isNaN(input) || Number(input) <= 0 ? '' : Number(input)
  },
})


// TODO: Create a function to initialize app
function init() {
  promptManager().then(promptMember)
  .catch(err => {console.log(err)});
};
// Function call to initialize app
init();
