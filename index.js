const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const template = require("./src/render");


let teamMembers = [];

function init() {
    managerQuery();
}

function managerQuery() {
    inquirer.prompt([{
        type: 'input',
        message: "What is the team Manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team Manager's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team Manager's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team Manager's office number?",
        name: 'office',
    }

    ]).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        console.log(manager)
        teamMembers.push(manager);
        addTeamMember();
    })
};

function addTeamMember() {
    inquirer.prompt([{
        type: "list",
        name: "what_type",
        message: "Add an engineer or intern to the team?",
        choices: ["Engineer", "Intern", "Maybe Later"]
    }]).then(data => {

        if (data.what_type === "Engineer") {
            engineerQuery();
        } else if (data.what_type === "Intern") {
            internQuery();
        } else {
            createTeamFile();
        }
    })
}


function engineerQuery() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "Engineer's ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Engineer's email address:"
    },
    {
        type: "input",
        name: "github",
        message: "What is the URL of the Engineer's GitHub profile?"
    }
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        console.log(engineer);
        teamMembers.push(engineer);
        addTeamMember();
    })


};

function internQuery() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "Intern's ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Intern's email address:"
    },
    {
        type: "input",
        name: "school",
        message: "What school does/did the intern attend?"
    }
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamMembers.push(intern);
        addTeamMember();
    })


};

function createTeamFile() {
    let html = template(teamMembers);
    fs.writeFile('./dist/renderTeamfile.html', html, (err) =>
        err ? console.log(err) : console.log("Your Team Portfolio is Ready!"));
};

init();