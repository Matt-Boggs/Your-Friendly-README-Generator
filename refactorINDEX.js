const fs = require('fs');
const inq = require('inquirer');

makeReadMe = ()=>{
    inq.prompt([
        {
            type: "input",
            message: "Project Title:",
            name: "title"
        },
        {
            type: "input",
            message: "Description:",
            name: "description"
        },
        {
            type: "list",
            message: "License:",
            choices: ["MIT","Apache","GPL"],
            name: "license"
        },
        {
            type: "input",
            message: "How to contribute:",
            name: "contribute"
        },
        {
            type: "input",
            message: "github user:",
            name: "gituser"
        },
        {
            type: "input",
            message: "Email:",
            name: "email"
        },
    ])
    .then(function(response){
        fs.appendFile("sample.md",`hello
        ${response.title}
        hello`,(err)=>{
            if(err){return console.log(err)}
        })
    })
}
makeReadMe()