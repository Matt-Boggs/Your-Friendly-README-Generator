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
    fs.appendFile("sample.md","\n## Table of Contents \n [Installation](#Installation) \n [Usage](#Usage) \n [License](#License) \n [Contributing](#Contributing) \n [Tests](#Tests) \n [Questions](#Questions)", function(err){
        if (err){
            return console.log(err);
        }
        makeInstall();
    })
};
function makeInstall(){
    fs.appendFile("sample.md", "\n\n### Installation:\n 1. Clone this repo\n 2. Run npm install\n 3. Run node index.js\n", function(err){
        if (err){
            console.log(err);
        }
        makeUsage();
    })
}
function makeUsage(){
    fs.appendFile("sample.md", "\n\n### Usage:\n This is a step by step guided process for making a readme, answer all the questions presented, and at the end you will have a readme generated for you with the information that was entered!")
}


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