const fs = require("fs");

const firstHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./style.css" />
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <!-- <div class="container"> -->
        <h1 class="display-4">MY TEAM</h1>
    </div>
    </div>

    <div class="container-fluid">
        <div class="row row-cols-1 row-cols-md-2">
        
`;

const bottomHtml = `
</div>
    </div>
</body>
</html>

`;

function generateHtml(myTeam) {
    const templateArray = myTeam.map((employeeObject) => {
        if (employeeObject.getRole() === "Engineer") {
            return `  <div class="col-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employeeObject.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employeeObject.getRole()}</h6>
                        <ul style="list-style-type:none;">
                        <li class="list-group-item">ID: ${employeeObject.id
                }</li>
                        <li class="list-group-item">Email: ${employeeObject.email
                }</li>
                        <li class="list-group-item">GitHub: ${employeeObject.gitHub
                }</li>                            
                        </ul>
                    </div>
                </div>
            </div>
        
        `;
        } else if (employeeObject.getRole() === "Intern") {
            return `  <div class="col-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employeeObject.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employeeObject.getRole()}</h6>
                        <ul style="list-style-type:none;">
                        <li class="list-group-item">ID: ${employeeObject.id
                }</li>
                        <li class="list-group-item">Email: ${employeeObject.email
                }</li>
                        <li class="list-group-item">School: ${employeeObject.school
                }</li>                            
                        </ul>
                    </div>
                </div>
            </div>
            
            `;
        } else if (employeeObject.getRole() === "Manager") {
            return `<div class="col-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${employeeObject.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employeeObject.getRole()}</h6>
                        <ul style="list-style-type:none;">
                            <li class="list-group-item">ID: ${employeeObject.id
                }</li>
                            <li class="list-group-item">Email: ${employeeObject.email
                }</li>
                            <li class="list-group-item">Office Number: ${employeeObject.officeNumber
                }</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        `;
        }
    });

    const finalTemplate = `${firstHtml} ${templateArray.join("")} ${bottomHtml}`;
    fs.writeFile("./dist/output.html", finalTemplate, (err) =>
        err ? console.error(err) : console.log("My Team is Full")
    );
}
module.exports = generateHtml;
