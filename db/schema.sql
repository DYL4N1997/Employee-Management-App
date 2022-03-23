-- Creating database and adding properties
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

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_ID INT(11) NOT NULL,
    manager_ID INT(11),
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_ID)
    REFERENCES role(id)
    ON DELETE SET NULL
);