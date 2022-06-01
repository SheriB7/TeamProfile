const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, getGitHub) {
    super(name, id, email);
    this.getGitHub = getGitHub;
  }

  getGitHub() {
    console.log("GitHubName");
  }
  getRole() {
    console.log("Engineer");
  }
}
module.exports = Engineer;
