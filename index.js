const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

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

//capture team member options
const promptoptions = ()  => {
   return inquirer.prompt([
   {
    type: 'list',
    messaage: 'What type of team member would you like to add?',
    name: 'role',
    choices: ['Engineer', 'Intern', "I don't want to add more team members"]
  }
  ]).then(options = options=>{
      if(options.role=="Engineer"){
           PromptEngineer()
          .then(data= data=>{
           const engineer = new Engineer(data.name, data.id, data.email,data.role,data.github);
           employees.push(engineer); 
           return promptoptions()
          })
      }
      if(options.role=="Intern"){  
          PromptIntern()
          .then(data= data=>{
           const intern = new Intern(data.name, data.id, data.email,data.role,data.school);
           employees.push(intern); 
           return promptoptions()
          })
      }    
      return  
   })      
};

//capture data for Engineers
const PromptEngineer = () => {
    return inquirer.prompt([
      {
      type: 'input',
      name: 'name',
      message: "What is the team Engineer's Name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter name!");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: "What is the team Engineer's Id? (Required)",
      ...validateNumbers(),
    },
    {
      type: "input",
      name: "email",
      message: "What is Engineer email address?",
      ...validateEmails(),
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the Engineer's github? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter name!");
          return false;
        }
      }
    },
]);
};

// capture Intern data
const PromptIntern = () => {
  return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is the intern's Name? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter Githube name!");
        return false;
      }
    }
  },
  {
    type: 'number',
    name: 'id',
    message: "What is the Intern's Id? (Required)",
    ...validateNumbers(),
  },
  {
    type: "input",
    name: "email",
    message: "What is Intern's email address?",
    ...validateEmails(),
  },
  {
    type: 'input',
    name: 'school',
    message: "What is the Intern's School? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter School!");
        return false;
      }
    }
  },
]);
};

// TODO: Create a function to initialize app
function init() {
  promptManager()
  .then(data  = data =>{
        const teammanager = new Manager(data.name, data.id, data.email,data.role,data.officenumber);
        promptoptions()
        return generatePage(teammanager);
   }).then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
 };
// Function call to initialize app
init();
