// Declaratives

function myFunction() {
    return 3;
}

miFunction()

//Expression or anonymous

var miFunction = function(a,b){
    return a + b;
}

miFunction();


// complex functions -> In the Browser

function greetingStudent(student) {
    console.log(student) // console.log() <- to print something in the browser
}

greetingStudent("Isa")


// string with variables

function greetingStudent(student) {
    console.log(`Hi, ${student}`);
}

greetingStudent("Isa")

