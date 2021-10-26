const Team = require('../lib/Team.js');

test("creates a team object", () => {
    const team = new Team("Ivonne",Math.floor(Math.random()*20),"ivonor@hotmail.com","Manager");
    
    expect(team.name).toBe("Ivonne");
    expect(team.id).toEqual(expect.any(Number));
    expect(team.email).toBe("ivonor@hotmail.com");
    expect(team.role).toBe("Manager");
});

