const Manager = require("../lib/Manager");

describe("Manager Class", () => {


  it("getOfficeNumber method test", () => {
    const manager = new Manager("Rufus", 4, "rufus@gmail.com",42);
    expect(manager.getOfficeNumber()).toBe(42);
  });

  it("getRole method test", () => {
    const manager = new Manager("Rufus", 4, "rufus@gmail.com",42);
    expect(manager.getRole()).toBe("Manager");
  });

});