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



