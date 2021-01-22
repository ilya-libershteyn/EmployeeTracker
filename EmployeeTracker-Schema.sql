DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee
(
  id INTEGER NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  role_id INTEGER NOT NULL,
  manager_id INTEGER NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE job
(
  deparment_id INT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL NULL,
  id INTEGER  NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE department
(
  id INTEGER NOT NULL,
  dep_name VARCHAR(30),
  PRIMARY KEY(id)
);
