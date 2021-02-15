const inquirer = require("inquirer");

const db = require("./DB");
const connection = require("./DB/connection");

// Central function to prompt user
function runSearch() 
{
  inquirer
    .prompt
    ({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: 
      [
        //"Add departments",
        "Add roles",
        //"Add employees",
        "View employees",
        "View roles",
        "View departments",
        //"Update employee roles",
        "Exit"
      ]
    })
    .then((res) => 
    {
      switch (res.action) 
      {
        case "View employees":
          viewEmployees();
          return;
        
        case "View roles":
          viewJobs();
          return;
        
        case "View departments":
          viewDeparments();
          return;
        
        case "Add roles":
          createJob();
          return;

        default:
          connection.end();
      }
    });
};

// Functions to invoke database functions and display to console
function viewDeparments() 
{
  db.getDepartments().then((results) => 
  {
    console.table(results);
    runSearch();
  });
};

function viewEmployees() {
  db.getEmployees().then
  ((results) => 
    {
      console.table(results);
      runSearch();
    }
  );
};

function viewJobs() {
  db.getJobs().then
  ((results) => 
    {
      console.table(results);
      runSearch();
    }
  );
};

function createJob() 
{
  db.getDepartments().then
  ((departments) => 
    {
      inquirer.prompt 
      ([{
        name: "department_id",
        type: "list",
        message: "What department is this role for?",
        choices: departments.map
        ((department) => 
          ({
            value: department.id,
            name: department.dep_name
          })
        )
      },
      {
        name: "title",
        type: "input",
        message: "What is the name of the job?"
      },
      {
        name: "salary",
        type: "number",
        message: "What is the job's salary?"
      }]).then
      (res => 
        {
          db.insertJob(res).then((res) =>
          {
            console.log("New job added successfully")
            runSearch();
          })
          
        }
      );
    }
  );
};

runSearch();