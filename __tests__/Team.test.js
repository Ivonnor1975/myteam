const Team = require('../lib/Team.js');

test("creates a team object", () => {
    const team = new Team("Ivonne",Math.floor(Math.random()*20),"ivonor@hotmail.com","Manager");

    expect(team.name).toBe("Ivonne");
    expect(team.id).toEqual(expect.any(Number));
    expect(team.email).toBe("ivonor@hotmail.com");
    expect(team.role).toBe("Manager");
});

test("return the name of the employee", () => {
    const team = new Team("Ivonne",Math.floor(Math.random()*20),"ivonor@hotmail.com","Manager");
    expect(team.getName()).toEqual("Ivonne")
})

test("return the employee id", () => {
    const team = new Team("Ivonne",20,"ivonor@hotmail.com","Manager");
    expect(team.getId()).toEqual(20);
});

test("return the employee email address", () => {
    const team = new Team("Ivonne",20,"ivonor@hotmail.com","Manager");
    expect(team.getEmail()).toEqual("ivonor@hotmail.com")
});

test("return the employee's role", () => {
    const team = new Team("Ivonne",20,"ivonor@hotmail.com","Manager");
    expect(team.getrole()).toEqual("employee")
});    


