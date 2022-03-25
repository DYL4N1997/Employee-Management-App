const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require ('console.table');
const db = require(".");

const dbConnect = mysql.createConnection(

    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees_db',
    });


dbConnect.connect(function(err) {
    if (err) throw err.message;
    console.log("You are connected to the employee manager" );

    beginPrompt();
});

function beginPrompt() {
    inquirer
     .prompt({
         type: "list",
         choices: [
             "View all departments",
             "View all roles",
             "View all employees",
             "Add a department",
             "Add a role",
             "Add an employee",
             "Update an employees role",
             "Quit"
         ],
         name: "data",
         message: "What would you like to view in the database?"
     })
     .then(function(choice) {
         console.log("Your choice was: " + choice.data);

         
     })
}

