const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
// const manager1 = new Manager("sheri", 4, "sheri@email.com", 42);
// console.log(manager1);

module.exports = Manager;
