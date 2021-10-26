const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

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
const promptMember = membersData => {
   // If there's no 'members' array property, create one
   if (!membersData.team) {
        membersData.team = [];
   }
   return inquirer.prompt([
   {
    type: 'list',
    messaage: 'What type of team member would you like to add?',
    name: 'role',
    choices: ['Engineer', 'Intern', "I don't want to add more team members"]
  }
])
.then(memberoption =>{
   if(memberoption.role=="I don't want to add more team members"){

   }else{
    console.log(membersData);
    return membersData;
   };
});
};

// TODO: Create a function to initialize app
function init() {
  promptManager().then(promptMember)
  .catch(err => {console.log(err)});
};
// Function call to initialize app
init();
