const inquirer = require('inquirer');
const mysql = require('mysql2');
const tTable = require ('terminal.table');

const db = mysql.createConnection(

    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees_db',
    },
    console.log(`A connection to the employees_db database has been established.`)
);

const showAllDeparts = () => {
    const sql = `SELECT * FROM departments`;

    db.query (sql, (err, rows) => {
        if (err) {
            console.log(err.message);
            return;
        } else {
            terminal.table(rows);
            init();
        }
    });
};

const showAllRoles = () => {
    const sql = `SELECT roles_id AS id, roles.title AS title, department.name AS department, 
    roles.salary AS salary FROM roles JOIN department ON roles.department_id = department.id;`;

    
}