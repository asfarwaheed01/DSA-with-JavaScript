// write a function which takes two parameters all students and student and return the student if its present in the students list

var FindStudents = function(students,student){
    let newStudent = students.indexOf(student);
    if(newStudent && newStudent >=0){
        return students[newStudent]
    }else if(newStudent === 0){
        return students[0]
    }else{
        return -1;
    }
}

const findStudent = (students, student) =>{
    for (let i = 0; i<students.length; i++){
        if(students[i] === student){
            return student
        }else{
            return -1
        }
    }
}

const students = ["Ali", "Asfar", "Asjad", "hero", "World"];
const student = "Ali"

console.log(FindStudents(students,student));
console.log(findStudent(students,student));