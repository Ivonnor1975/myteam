
const employees= [
    {
    Manager:{
      name: 'Ivonne',
      id: 23,
      email: 'Ivonor@gmail.com',
      role: 'Manager',
      officenumber: 8326471138
       }
    },
    {
     Engineer: {
      name: 'Rosa',
      id: 23,
      email: 'rosa@hotmail.com',
      role: 'Engineer',
      github: 'rosa23'
     }
    },
    {
    Intern:{
      name: 'martha',
      id: 45,
      email: 'martha@yahoo.com',
      role: 'Intern',
      school: 'rice'
      }
    }
  ]

const { man: {Manager} } = employees

//let moreThan5Array =employees.filter(e => e.role === 'Manager');
console.log(man);
