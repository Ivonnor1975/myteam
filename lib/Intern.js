const Team = require('./Team');

class Intern extends Team {
    constructor(name, id, email,role, school) {
    super(name, id, email,role);
    this.school= school;
    this.role= "Intern";
 }
 getSchool() {
    return this.school;
 }
 getRole() {
        return this.role;
 }
}
module.exports = Intern;
