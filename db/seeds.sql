-- Dummy data
INSERT INTO departments(name)
VALUES ("Sales"),
       ("Tehcnical Engineer"),
       ("Finance"),
       ("Legal");


INSERT INTO roles (title, salary department_ID)
VALUES ("Sales Lead", "100000", 1),
       ("Salesperson", "80000", 1),
       ("Lead Engineer", "150000", 2),
       ("Software Engineer", "120000", 2),
       ("Account Manager", "160000", 3),
       ("Accountant", "125000", 3),
       ("Legal Team Lead", "250000", 4),
       ("Lawyer", "190000", 4);