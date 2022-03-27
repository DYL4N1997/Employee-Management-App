# Employee-Management-App

# Introduction

A command line application administered by inquirer to manage a company's employee database, based within MySQL and controlled through Node.js.

# Technologies Used

- Node.js
- Javascript
- MySQL

# Instructions

Clone the repo

Make sure all dependencies are installed by running npm i in the terminal

Start the app byt entering, 'node index.js' into your terminal, then follow the instructions to edit the database

Make sure to create the database first aswell, by entering source schema.sql when running the database

# Summary

Once the user runs the app the following instructions are provided:

- View all departments (The user is presented with a table showing department names and department ids)
- View all roles (The user is presented with a table showing the job title, role id, the department that role belongs to, and the salary for that role)
- View all employees (The user is presented with a table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to)
- Add a department (The user is prompted to enter the name of the department and that department is added to the database)
- Add a role (The user is prompted to enter the name, salary, and department id for the role and that role is added to the database)
- Add an employee (The user is prompted to enter the employee’s first name, last name, role id, and manager id, and that employee is added to the database)
- Update an employee's role (The user is prompted to enter an employees name to update and their new role and this information is updated in the database)
- Close (Close the application down)

# Video Demo

https://user-images.githubusercontent.com/82978161/160305466-9cdfb3a3-7e3f-4319-a48f-4742b10bd35f.mp4


