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
             "Close"
         ],
         name: "data",
         message: "What would you like to view in the database?"
     })
     .then(function(choice) {
         console.log("Your choice was: " + choice.data);

         switch (choice.data) {
            case "View all departments":
                view_Departments();
                break;

            case "View all roles":
                view_Roles();
                break;
            
            case "View all employees":
                view_Employees();
                break;

            case "Add a department":
                add_Department();
                break;
            
            case "Add a role":
                add_Role();
                break;

            case "Add an employee":
                add_Employee();
                break;
            
            case "Update an employees role":
                add_EmployeeRole();
                break;
                
            default:
                
            close();
         }
     });
}

function view_Departments() {
    let sql = "SELECT * FROM department";
    connection.query(sql, function(err, res) {
        if (err) throw err.message;
        console.table(res);
        beginPrompt();
    });
}

function view_Roles() {
    let sql = "SELECT * FROM roles";
    connection.query(sql, function(err, res) {
        if (err) throw err.message;
        console.table(res);
        beginPrompt();
    });
}

function view_Employees() {
    let sql = "SELECT * FROM employees";
    connection.query(sql, function(err, res) {
        if (err) throw err.message;
        console.table(res);
        beginPrompt();
    });
}




function close() {
    connection.end();
    process.exit();
}

