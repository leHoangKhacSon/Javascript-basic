//npm - node package manager
//developer 
var readLineSync = require('readline-sync');

var languages = [];
var language = readLineSync.question('What is your mother languge?'); // Wait for user's response
languages.push(language);
console.log(languages);

//
var students = {};
var name = readLineSync.question('Student name: ');
var age = readLineSync.question('Student age: ');
var gender = readLineSync.question('Student gender (male / female): ');
var weight = readLineSync.question('Student weight: ');

students.Name = name;
students.Age = age;
students.Gender = gender;
students.Weight = parseInt(weight) //chuyen string thanh kieu int

console.log(students);
