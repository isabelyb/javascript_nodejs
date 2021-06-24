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

greetingStudent("Isa") // Isa


// string with variables

function greetingStudent(student) {
    console.log(`Hi, ${student}`);
}

greetingStudent("Isa") // Hi, Isa

// using return

function sum(a,b) {
    var result = a + b
    return result;
}

sum(1,2); // 3


// another way

function sum(a,b) {
    return a  + b;
}

sum(2,2); // 4
