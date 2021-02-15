const connection = require("./connection");

module.exports = 
{
  getDepartments() 
  {
    return connection.query("SELECT * FROM department");
  },
  getJob(data)
  {
    return connection.query("SELECT title FROM job WHERE id = ?", data);
  },
  getJobs() 
  {
    return connection.query("SELECT * FROM job");
  },
  getEmployees() 
  {
    return connection.query("SELECT employee.*, job.title, department.dep_name "
                          + "FROM employee LEFT JOIN job ON (employee.role_id = job.id) "
                          + "INNER JOIN department ON (job.department_id = department.id)");
  },
  getManagers()
  {
    let query = "SELECT employee.id, first_name, last_name FROM employee "
              + "LEFT JOIN job ON (employee.role_id = job.id) "
              + "WHERE title LIKE 'Lead%' OR title LIKE '%Manager'"
    return connection.query(query);
  },
  insertEmployee(data)
  {
    return connection.query("INSERT INTO employee SET ?", data);
  },
  insertJob(data) 
  {
    return connection.query("INSERT INTO job SET ?", data);
  },
  insertDepartment(data)
  {
    return connection.query("INSERT INTO department SET ?", data);
  },
  updateEmployee(data)
  {
    return connection.query
          ("UPDATE employee SET ? WHERE ?",
            [
                {
                    role_id: data.role_id,
                },
                {
                    id: data.id
                }
            ]
          );
  }
}