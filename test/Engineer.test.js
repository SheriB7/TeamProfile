const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {


  it("getGithub method test", () => {
    const engineer = new Engineer("Rufus", 4, "rufus@gmail.com","rufusgithub");
    expect(engineer.getGithub()).toBe("rufusgithub");
  });

  it("getRole method test", () => {
    const engineer = new Engineer("Rufus", 4, "rufus@gmail.com","rufusgithub");
    expect(engineer.getRole()).toBe("Engineer");
  });

});