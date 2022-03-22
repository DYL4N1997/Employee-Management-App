DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE departments(
    id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    department VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
    id INT(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(12,2) NOT NULL,
    department_ID INT,
    FOREIGN KEY (department_ID)
    REFERENCES department(id)
    ON DELETE SET NULL
);

