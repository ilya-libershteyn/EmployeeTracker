const inquirer = require("inquirer");
const { getEmployees } = require("./DB");

const db = require("./DB");
const connection = require("./DB/connection");

function runSearch() 
{
  inquirer
    .prompt( {
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add departments",
        "Add roles",
        "Add employees",
        "View employees",
        "View roles",
        "View departments",
        "Update employee roles"
      ]
    })
    .then((answer) => {
      switch (answer.action) 
      {
        case "View employees":
          getEmployees();
          return;
        
        case "View Jobs":
          getJobs();
          return;
        
        case "View departments":
          getDeparments();
          return;
        
        default:
          connection.end();
      }
    });
}

runSearch();

function viewDeparments() {
  db.getDepartments().then((results) => {

  });
}
function employeeInsert() 
{
  inquirer
    .prompt
    ({
      name: "employee",
      type: "input",
      message: "What employee would you like to add?"
    })
    .then(function(answer) 
    {  
      var query = "INSERT INTO employee ?";
      connection.query(query, {employee: answer.employee}, function(err, res) 
      {
        for (var i = 0; i < res.length; i++) 
        {
          console.log(res[i].artist);
        }
        runSearch();
      });
    });
}

function rangeSearch() 
{
  inquirer
    .prompt
    ([
      {
        name: "start",
        type: "input",
        message: "Enter starting position: ",
        validate: function(value) 
        {
          if (isNaN(value) === false) 
          {
            return true;
          }
          return false;
        }
      },
      {
        name: "end",
        type: "input",
        message: "Enter ending position: ",
        validate: function(value) 
        {
          if (isNaN(value) === false) 
          {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer)
    {
      var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
      connection.query(query, [answer.start, answer.end], function(err, res) {
        for (var i = 0; i < res.length; i++) 
        {
          console.log
          (
            "Position: " +
              res[i].position +
              " || Song: " +
              res[i].song +
              " || Artist: " +
              res[i].artist +
              " || Year: " +
              res[i].year
          );
        }
        runSearch();
      });
    });
}

function songSearch()
{
  inquirer
    .prompt
    ({
      name: "song",
      type: "input",
      message: "What song would you like to look for?"
    })
    .then(function(answer) 
    {
      console.log(answer.song);
      connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) 
      {
        console.log
        (
          "Position: " +
            res[0].position +
            " || Song: " +
            res[0].song +
            " || Artist: " +
            res[0].artist +
            " || Year: " +
            res[0].year
        );
        runSearch();
      });
    });
}

function songAndAlbumSearch() 
{
  inquirer
    .prompt
    ({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?"
    })
    .then(function(answer)
    {
      var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
      query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
      query += "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position";

      connection.query(query, [answer.artist, answer.artist], function(err, res) 
      {
        console.log(res.length + " matches found!");
        for (var i = 0; i < res.length; i++)
        {
          console.log
          (
            i+1 + ".) " +
              "Year: " +
              res[i].year +
              " Album Position: " +
              res[i].position +
              " || Artist: " +
              res[i].artist +
              " || Song: " +
              res[i].song +
              " || Album: " +
              res[i].album
          );
        }

        runSearch();
      });
    });
}
