var myName = "Juana"; //Global Scope

function completeName(){
    var lastName = "De Arco"; // Local Scope
    console.log(myName + " " + lastName)
}

completeName();