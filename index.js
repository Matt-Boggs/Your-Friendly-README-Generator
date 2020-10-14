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
function makeTOC(){
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
    fs.appendFile("sample.md", "\n\n### Usage:\n This is a step by step guided process for making a readme, answer all the questions presented, and at the end you will have a readme generated for you with the information that was entered!\n", function(err){
        if (err){
            console.log(err)
        }
        makeLicense();
    })
}
function makeLicense(){
    inquirer.prompt({
        type: "list",
        message: "What kind of license would you like your project to have?",
        choices: ["MIT", "Apache", "GPL"],
        name: "license"
    }).then(function(response){
        fs.appendFile("sample.md", "\n\n### License:\n This project is licensed under the " + response.license + " license.\n ![License](https://img.shields.io/badge/license-" + response.license + "-blue.svg)", function(err){
            if (err){
                console.log(err)
            }
            makeContribute();
        })
    })
}
function makeContribute(){
    inquirer.prompt({
        type: "input",
        message: "How can others contribute to this project?",
        name: "contribute"
    }).then(function(response){
        fs.appendFile("sample.md", "\n\n### Contributing:\n" + response.contribute + "\n", function(err){
            if (err){
                console.log(err)
            }
        })
        makeTests();
    })
}
function makeTests(){
    fs.appendFile("sample.md", "\n\n### Tests:\nTesting at this stage is as simple as trying to break the application", function(err){
        if (err){
            console.log(err)
        }
    })
    makeQuestions();
}
function makeQuestions(){
    console.log("so close")
}
// function to initialize program
function init() {
    makeTitle();
}

// function call to initialize program
init();
