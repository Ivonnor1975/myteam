//Main class for all employees

class Team {
    constructor(name, id, email, role='') {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getrole() {
      return 'employee';
    }
};
module.exports = Team;