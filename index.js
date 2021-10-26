const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Prompt = require('inquirer/lib/prompts/base');

const employees = [];
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
      ...validateEmails(),
    },
    {
      type: 'number',
      name: 'officenumber',
      message: "What is the team Manager's office number? (Required)",
      ...validateNumbers(),
    },
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
//Validate emails
const validateEmails = () =>({
  validate: answer => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(answer)) {
        console.log("Please provide a valid email address!");
        return false;
    }
    return true;
 }
})

//captue team members
const promptoptions = ()  => {
   return inquirer.prompt([
   {
    type: 'list',
    messaage: 'What type of team member would you like to add?',
    name: 'role',
    choices: ['Engineer', 'Intern', "I don't want to add more team members"]
  }
  ])
};
// TODO: Create a function to initialize app
function init() {
  promptManager()
  .then(data  = data =>{
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(manager);  
  })
  .catch(err => {
    console.log(err);
  });
  promptoptions()
  .then (option= option =>{
    switch(memberoption.role) {
      case "I don't want to add more team members":
        console.log(membersData);
        return membersData
      case "Engineer":
          //return engineer.getQuestions();
      case "Intern":
          //return intern.getQuestions();
      //default:
         // return [];
      }
  }) .catch(err => {
    console.log(err);
  });
};
// Function call to initialize app
init();
