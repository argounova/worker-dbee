const cTable = require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'r32r33r34@GTR',
      database: 'employeeCMS_db'
    },
    console.log('Connected to the employeeCMS_db database.'),
    console.log("")
  );

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function mainMenu() {
    inquirer
      .prompt([
        {
          type: 'checkbox',
          name: 'choices',
          message: 'Select an option below:',
          choices: [
            new inquirer.Separator(),
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add A Department',
            'Add A Role',
            'Add An Employee',
            'Update An Employee'
            ],
        },
      ])
      .then(selection => {
        for (let i = 0; i < selection.choices.length; i++) {
          switch (selection.choices[i]) {
            case 'View All Departments':
                db.query('SELECT * FROM department;', (err, res) => {
                  if (err) throw (err);
                  console.table(res);
                  console.log("");
                  mainMenu();
                });
                break;
            case 'View All Roles':
                db.query('SELECT * FROM role;', (err, res) => {
                    if (err) throw (err);
                    console.table(res);
                    console.log("");
                    mainMenu();
                });
                break;
            case 'View All Employees':
                db.query('SELECT * FROM employee;', (err, res) => {
                  if (err) throw (err);
                  console.table(res);
                  console.log("");
                  mainMenu();
                });
                break;
            case 'Add A Department':
                inquirer
                  .prompt ([
                    {
                      type: 'input',
                      name: 'addDepartment',
                      message: 'What is the name of the new department?',
                    }
                  ])
                  .then((response) => {
                    db.query(`INSERT INTO department(department_name) VALUES ("${response.addDepartment}");`, err => {
                      if (err) throw (err);
                    });
                  });
                  mainMenu();
                break;
            case 'Add A Role':
              db.query(`SELECT department_name FROM department;`, (err, res) => {
                if (err) throw (err);
                console.log(res);
                let departmentNames = res;
              inquirer
              .prompt ([
                {
                  type: 'input',
                  name: 'addRole',
                  message: 'What is the name of the new role?',
                },
                {
                  type: 'input',
                  name: 'addSalary',
                  message: 'What is the salary of the new role?',
                },
                {
                  type: 'checkout',
                  name: 'addRoleDept',
                  message: 'What department does the new role belong to?',
                  choices: departmentNames.department_name,
                }
              ])
              .then((response) => {
                db.query(`INSERT INTO department(department_name) VALUES ("${response.addDepartment}");`, err => {
                  if (err) throw (err);
                });
              });
            });
              mainMenu();
                break;
            case 'Add An Employee':
                addEmployee();
                break;
            case 'Update An Employee':
                updateEmployee();
                break;
          }
        }
      });    
  }

mainMenu();

app.listen(PORT, () => {});