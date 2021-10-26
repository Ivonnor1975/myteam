const Team = require('../lib/Team.js');
const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer("Ivonne",Math.floor(Math.random()*20),"ivonor@hotmail.com","Engineer", "ivonor1975");
    expect(engineer.name).toEqual("Ivonne");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual("ivonor@hotmail.com");
    expect(engineer.github).toEqual("ivonor1975");
});

test('return GitHub url of the employee', () => {
    const engineer = new Engineer("Ivonne",Math.floor(Math.random()*20),"ivonor@hotmail.com","ivonor1975","Engineer");
    expect(engineer.getGithub()).toEqual(`https://github.com/${engineer.github}`);
});