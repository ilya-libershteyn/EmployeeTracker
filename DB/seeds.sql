USE employeedb;

INSERT INTO department
  (dep_name)
VALUES 
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');
  
INSERT INTO job
(title, salary, department_id)
VALUES
  ('Sales Lead', 100000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Accountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, NULL),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 2, 1),
('Kevin', 'Tupik', 3, NULL),
('Malia1', 'Brown', 4, NULL),
('Sarah', 'Lourd', 5, 5),
('Tom', 'Allen', 5, 5),
('Christian', 'Eckenrode', 6, NULL)
