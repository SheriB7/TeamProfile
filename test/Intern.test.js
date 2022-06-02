const Intern = require("../lib/Intern");

describe("Intern Class", () => {


  it("getSchool method test", () => {
    const intern = new Intern("Rufus", 4, "rufus@gmail.com","PuppySchool");
    expect(intern.getSchool()).toBe("PuppySchool");
  });

  it("getRole method test", () => {
    const intern = new Intern("Rufus", 4, "rufus@gmail.com","PuppySchool");
    expect(intern.getRole()).toBe("Intern");
  });

});