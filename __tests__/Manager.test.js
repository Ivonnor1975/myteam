const Team = require('../lib/Team.js');
const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager("dave",Math.floor(Math.random()*20),"dave@hotmail.com","Manager",8326477845);
    expect(manager.name).toEqual("dave");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual("dave@hotmail.com");
    expect(manager.role).toBe("Manager");
    expect(manager.officenumber).toEqual(expect.any(Number));
 });
