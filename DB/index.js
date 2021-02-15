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
    return connection.query("SELECT * FROM employee")
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
    /*title = connection.query("SELECT title FROM job WHERE id = ?" data.role_id);
    return connection.query("SELECT id FROM employee INNER JOIN job ON" 
    + "(employee.role_id = job.id)"
    + "WHERE (job.title = 'Lead%' OR job.title = '%Manager') AND job.id = ?", data);*/
  },
  insertJob(data) 
  {
    return connection.query("INSERT INTO job SET ?", data);
  },
  insertDepartment(data)
  {
    return connection.query("INSERT INTO department SET ?", data);
  }
}