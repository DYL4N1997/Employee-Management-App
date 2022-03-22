DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE departments(
    id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    department VARCHAR(30) NOT NULL
);

