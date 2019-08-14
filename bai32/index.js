//JSON object
//1. stringify - Convert an object to JSON string
//2. parse - Convert a JSON string to an object
var Student = {
    name: 'sonLee',
    age: 23
}
var StudentString = JSON.stringify(Student);
console.log(Student);
console.log(StudentString);

var myTeacher = '{ "name": "Thuan", "Age": 35}';
var myTeacherObject = JSON.parse(myTeacher);
console.log(myTeacher);
console.log(myTeacherObject);

//Execrise
var readLineSync = require('readline-sync');
var fs = require('fs');
 
var questions = readLineSync.question('your choose, please! (1 or 2 or 3): ');
//1. Show all student
if(questions == 1){
    var allStudent = fs.readFileSync('bai32/data.json.txt', {encoding: 'utf8'});
    var allStudentObject = JSON.parse(allStudent);
    console.log(allStudentObject);
}
//2. Create a new student
else
    if(questions == 2){
        var name = readLineSync.question('name student: ');
        var age = readLineSync.question('age student: ');
        var answer = readLineSync.question('do you save? (yes or no) ');
        if(answer == 'yes'){
            var student = {};
            student.name = name;
            student.age = age;
            var allStudent = fs.readFileSync('bai32/data.json.txt', {encoding: 'utf8'});
            var allStudentObject = JSON.parse(allStudent);         
            allStudentObject.push(student);
            allStudentString = JSON.stringify(allStudentObject);
            fs.writeFileSync('bai32/data.json.txt', allStudentString);
            console.log('Done!');
        }
        if(answer == 'no'){
            console.log('exit');
        }
    }
//3. Save & exit
