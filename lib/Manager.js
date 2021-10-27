const Team = require('./Team');

class Manager extends Team {
    constructor(name,id,email,role,officenumber) {
        super(name, id, email,role);
        this.officenumber = officenumber;
        this.role= "Manager"
    }
    getOfficeNumber() {
        return this.officenumber;
    }
    getRole() {
        return this.role;
    }
 }
module.exports = Manager;
