const inquirer = require("inquirer") 
const fs  = require("fs")
const path = require("path")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const {generateManagerCard,generateEngineerCard,generateInternCard,generateMainHtml} = require("./util/HTML")
const outputDirectory = path.resolve(__dirname, "dist")
const outputPath = path.join(outputDirectory, "team.html");
let inProgress = true
const team = []

const jobTitleQuestions = [
    {
        type:"list",
        message:"Select the job title",
        choices: [
            {
                name:"Manager",
                value:"manager",
                short:"manager",
            },
            {
                name:"Engineer",
                value:"engineer",
                short:"engineer",
            },
            {
                name:"Intern",
                value:"intern",
                short:"intern",
            },
            {
                name:"Done",
                value:"done",
                short:"done",
            }
        ],
        name:"jobTitle"
    }
]   

const createManager = async () => {
    managerQuestions = [
        {
            type:"input",
            message: "Input your name here",
            name: "personName"
        },
        {
            type:"number",
            message: "Input your id here",
            name: "id"
        },
        {
            type:"input",
            message: "Input your email here",
            name: "email"
        },
        {
            type:"number",
            message: "Input your officeNumber here",
            name: "officeNumber"
        }
    ]
    const {personName,id,email,officeNumber} = await inquirer.prompt(managerQuestions)
    const manager = new Manager(personName,id,email,officeNumber)
    const managerString = generateManagerCard(manager)
    team.push(managerString)
}
const createEngineer = async () => {
    EngineerQuestions = [
            {
                type:"input",
                message: "Input your name here",
                name: "personName"
            },
            {
                type:"number",
                message: "Input your id here",
                name: "id"
            },
            {
                type:"input",
                message: "Input your email here",
                name: "email"
            },
            {
                type:"input",
                message: "Input your GitHub here",
                name: "github"
            }
    ]
    const {personName,id,email,github} = await inquirer.prompt(EngineerQuestions)
    const engineer = new Engineer(personName,id,email,github)
    const engineerString = generateEngineerCard(engineer)
    team.push(engineerString)
}
const createIntern = async () => {
    InternQuestions = [
            {
                type:"input",
                message: "Input your name here",
                name: "personName"
            },
            {
                type:"number",
                message: "Input your id here",
                name: "id"
            },
            {
                type:"input",
                message: "Input your email here",
                name: "email"
            },
            {
                type:"input",
                message: "which school do you attend",
                name: "school"
            }
    ]
    const {personName,id,email,school} = await inquirer.prompt(InternQuestions)
    const intern = new Intern(personName,id,email,school)
    const internString = generateInternCard(intern)
    team.push(internString)
}

const prompt = async () => {
    const { jobTitle } = await inquirer.prompt(jobTitleQuestions)

    if (jobTitle === "manager") {
        await createManager()
    }
    if (jobTitle === "engineer") {
       await createEngineer()
    }
    if (jobTitle === "intern") {
       await createIntern()
    }
    if (jobTitle === "done") {
        inProgress = false
    }
}
const writeToFile = (team) => {
console.log("html generated")
fs.writeFileSync("team.html",team)
}

const init = async () => {
while(inProgress) {
    await prompt()
}
team.join("")
const mainHtml = generateMainHtml(team)
writeToFile(mainHtml, outputPath)
}

init()