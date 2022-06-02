const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  it("getName method test", () => {
    const employee = new Employee("Rufus", 4, "rufus@gmail.com");
    expect(employee.getName()).toBe("Rufus");
  });

  it("getId method test", () => {
    const employee = new Employee("Rufus", 4, "rufus@gmail.com");
    expect(employee.getId()).toBe(4);
  });

  it("getEmail method test", () => {
    const employee = new Employee("Rufus", 4, "rufus@gmail.com");
    expect(employee.getEmail()).toBe("rufus@gmail.com");
  });

  it("getRole method test", () => {
    const employee = new Employee("Rufus", 4, "rufus@gmail.com");
    expect(employee.getRole()).toBe("Employee");
  });
});
