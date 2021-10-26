const Team = require('./Team');

class Engineer extends Team {
  constructor(name) {
    super(name);
    this.github = github ;
  }
}
module.exports = Engineer;