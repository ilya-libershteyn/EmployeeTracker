DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department
(
  id INT NOT NULL AUTO_INCREMENT,
  dep_name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE job
(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL NULL,
  department_id INT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee
(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INTEGER NULL,
  manager_id INTEGER NULL,
  FOREIGN KEY (role_id) REFERENCES job(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);
