var students = ["Mary", "John", "Rose"];

function greetStudents(student){
    console.log(`Hi, ${student}!`);
}

while(students.length > 0){
    var student = students.shift();
    greetStudents(student);
}
// Hi, Mary!
// Hi, Rose!
// Hi, John!


while(students.length > 0){
    console.log(students)
    var student = students.shift();
    greetStudents(student);
}

// (3) ["Mary", "John", "Rose"]
// Hi, Mary!
// (2) ["John", "Rose"]
// Hi, John!
// ["Rose"]
// Hi, Rose!