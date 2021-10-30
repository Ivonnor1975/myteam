//Create objects for Engineers

const Team = require('./Team');

class Engineer extends Team {
  constructor(name, id, email, role, github) {
    super(name, id, email, role);
    this.github = github ;
    this.role = "Engineer";
  }
  getRole() {
    return this.role;
  }
  getGithub() {
    return `https://github.com/${this.github}`;
  }
}
module.exports = Engineer;