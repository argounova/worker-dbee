const inquirer = require("inquirer");


function mainMenu() {
    inquirer
      .prompt([
        {
          type: 'checkbox',
          name: 'choices',
          message: 'Select an option below to get started:',
          choices: [
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
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add A Department':
                addDepartment();
                break;
            case 'Add A Role':
                addRole();
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

  module.exports = mainMenu();