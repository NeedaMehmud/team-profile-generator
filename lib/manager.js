const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    };

    getOfficeNumber() {
        if (this.officeNumber === undefined || this.officeNumber === '') {
            return 'N/A';
        }
        return this.officeNumber;
    }
}
module.exports = Manager;