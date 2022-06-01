class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    console.log(this.name);
  }
  getId() {
    console.log(this.id);
  }
  getEmail() {
    console.log(this.email);
  }
  getRole() {
    console.log("employee");
  }
}
const employee1 = new Employee("sheri", 1, "sherib70@gmail.com");
const employee2 = new Employee("Ben", 2, "ben@gmail.com");
console.log(employee2.getEmail());
console.log(employee1.getEmail());
module.exports = Employee
