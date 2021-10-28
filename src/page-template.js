const generateTeam = (team)=>{
    
        const generatemanager = (manager) => {
        return `<div class="card w-35 employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2">${manager.getRole()}</i></h3>
            </div>
            <div class="card-bod
            y">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:{${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>

        </div>
        `;
    }
    const generateEngineers = Engineer =>{
           return `
               <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${Engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${Engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${Engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:{${Engineer.getEmail()}}">${Engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="${Engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${Engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
    const generateInterns = Interns =>{
        return `
           <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${Interns.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${Interns.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${Interns.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:{${Interns.getEmail()}}">${Interns.getEmail()}</a></li>
                    <li class="list-group-item">School: ${Interns.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    }
  
    const arrman=[];
    arrman.push(...team.filter(employee => employee.getRole() === "Manager").map(manager=> generatemanager(manager)));
    arrman.push(...team.filter(employee => employee.getRole() === "Engineer").map(engies=> generateEngineers(engies)));
    arrman.push(...team.filter(employee => employee.getRole() === "Intern").map(inties => generateInterns(inties)));
    return arrman.join('');
    
}

// export function to generate entire page
module.exports = (memployees) => {
   // destructure page data by section
         return `
  <!DOCTYPE html>
  <html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(memployees)} 
            </div>
        </div>
    </div>
</body>

</html>
   `;
};
