var students = ["Mary", "Rose", "John"];

function greetStudents(student){
    console.log(`Hi, ${student}!`);
}


for(var i = 0; i < students.length; i++){
    console.log(students[i]);
}
//Mary
//Rose
//John


for(var i = 0; i < students.length; i++){
    greetStudents(students[i]);
}
// Hi, Mary!
// Hi, Rose!
// Hi, John!


for(var student of students){
    greetStudents(student);
}
// Hi, Mary!
// Hi, Rose!
// Hi, John!