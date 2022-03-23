const inquirer = require('inquirer');
const mysql = require('mysql2');
const tTable = require ('terminal.table');


  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);