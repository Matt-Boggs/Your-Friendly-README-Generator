const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown")

function makeTitle(){
    inquirer.prompt({
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    }).then(function(response){
        fs.writeFile("sample.md", "# " + response.title + "\n", function(err){
            if (err){
                return console.log(err);
            };
            makeDescription();

        });
    });

};
function makeDescription(){
    inquirer.prompt({
        type: "input",
        message: "write a brief description of your project here",
        name: "description"
    }).then(function(response){
        fs.appendFile("sample.md", "\n## Info: \n" + response.description + "\n", function(err){
            if (err){
                return console.log(err);
            };
            makeTOC();
        });
    });
};
function makeTOC(){ // 
    fs.appendFile("sample.md","\n## Table of Contents \n Installation \n Usage \n License \n Contributing \n Tests \n Questions", function(err){
        if (err){
            return console.log(err);
        }
    })
};


// function to write README file
// fs.appendFile("sample.md", data, function(err){
//     if (err){
//         return console.log(err);
//     }
// });

// function to initialize program
function init() {
    makeTitle();
}

// function call to initialize program
init();


// * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions