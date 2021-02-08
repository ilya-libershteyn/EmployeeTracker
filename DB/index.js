const connection = require("./connection");

module.exports = {
  getDepartments() {
    return connection.query("SELECT * FROM department");
  },
  getJobs() {
    return connection.query("SELECT * FROM job");
  },
  getEmployees() {
    return connection.query("SELECT * FROM employee")
  }
}