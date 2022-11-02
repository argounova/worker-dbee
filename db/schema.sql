DROP DATABASE IF EXISTS employeeCMS_db;
CREATE DATABASE employeeCMS_db;
USE employeeCMS_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT(10,2) PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT(10,3) PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT AUTO_INCREMENT(1000,127),
    manager_id INT AUTO_INCREMENT(100,12) REFERENCES (id),
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);