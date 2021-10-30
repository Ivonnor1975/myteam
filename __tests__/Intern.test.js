const Team = require('../lib/Team.js');
const Intern = require('../lib/Intern.js');

test('creates an Manager object', () => {
    const intern = new Intern("Lisa",Math.floor(Math.random()*20),"lisa@hotmail.com","Intern","Rice");
    expect(intern.name).toEqual("Lisa");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual("lisa@hotmail.com");
    expect(intern.role).toBe("Intern");
    expect(intern.school).toBe("Rice");
 });

 test('returns Intern as role of the employee', () => {
    const intern = new Intern("Lisa",Math.floor(Math.random()*20),"lisa@hotmail.com","Intern","Rice");
    expect(intern.getRole()).toEqual("Intern");
});

test('returns the school that the intern attends', () => {
    const intern = new Intern("Lisa",Math.floor(Math.random()*20),"lisa@hotmail.com","Intern","Rice");
    expect(intern.getSchool()).toEqual(intern.school);
});