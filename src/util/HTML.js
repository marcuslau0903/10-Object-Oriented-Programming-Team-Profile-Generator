const generateManagerCard = (manager) => {
    return `<div class="card shadow bg-body rounded mt-5" id="manager" style="width: 300px">
    <div class="p-3 bg-primary">
            <h3 class="card-title text-white lh-base">${manager.name}</h3>
            <div class="d-flex">
            <i class="fas text-white fa-mug-hot p-2"></i>           
            <h5 class="card-title text-white lh-base">${manager.getRole()}</h5>
            </div>  
    </div>
    <div class="card-body bg-light">
    <ul class="list-group card list-group-flush mt-3">
        <li class="list-group-item">ID:${manager.id}</li>
        <li class="list-group-item">EMAIL:${manager.email}</li>
        <li class="list-group-item">OFFICE NUMBER:${manager.getOfficeNumber ()}</li>
    </ul>
    </div>
    </div>`
}

const generateEngineerCard = (engineer) => {
    return `
    <div class="card shadow bg-body rounded mt-5" id="engineer" style="width: 300px">
    <div class="p-3 bg-primary">
        <h3 class="card-title text-white lh-base">${engineer.name}</h3>
            <div class="d-flex">
            <i class="fas fa-glasses text-white p-2"></i>           
            <h5 class="card-title text-white lh-base">${engineer.getRole()}</h5>
            </div>  
    </div>
    <div class="card-body bg-light">
    <ul class="list-group card list-group-flush mt-3">
        <li class="list-group-item">ID:${engineer.id}</li>
        <li class="list-group-item">EMAIL:${engineer.email}</li>
        <li class="list-group-item">GITHUB:${engineer.getGithub()}</li>
    </ul>
    </div>
    </div>
    `
}

const generateInternCard = (intern) => {
    return  `<div class="card shadow bg-body rounded mt-5" id="intern" style="width: 300px">
            <div class="p-3 bg-primary">
                <h3 class="card-title text-white">${intern.name}</h3>
                    <div class="d-flex">
                    <i class="fas text-white fa-user-graduate p-2"></i>           
                    <h5 class="card-title text-white lh-base">${intern.getRole()}</h5>
                    </div>  
            </div>
            <div class="card-body bg-light">
            <ul class="list-group card list-group-flush mt-3">
                <li class="list-group-item">ID:${intern.id}</li>
                <li class="list-group-item">EMAIL:${intern.email}</li>
                <li class="list-group-item">SCHOOL:${intern.getSchool()}</li>
            </ul>
            </div>
        </div>`
}

const generateMainHtml = (team) => {
 return `<!doctype html>
 <html lang="en">
   <head>
     <!-- Required meta tags -->
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
 
     <!-- Bootstrap CSS, font awsome icons-->
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     <style>
         .jumbotron {
   padding: 2rem 1rem;
   margin-bottom: 2rem;
   background-color: #e9ecef;
   border-radius: .3rem;
 }
     </style>
     <title>Team Profile Generator</title>
   </head>
   <body>
     <div class="jumbotron text-center bg-danger ">
         <h1 class="display-4 fw-normal">Team Profile Generator</h1>
         <p class="lead fw-normal pt-4 fs-4">Summary of the Team</p>
         <hr class="my-4">
     </div>
 
     <div class="d-flex justify-content-evenly">
        ${team}
     </div>
   
     
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
   </body>
 </html>`
}

module.exports = {generateManagerCard,generateEngineerCard,generateInternCard,generateMainHtml}
