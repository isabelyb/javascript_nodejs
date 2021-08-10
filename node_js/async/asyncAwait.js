async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });

}

function hablar(callbackHablar){
        setTimeout(function(){
        console.log('Bla, bla, bla, bla...');
        callbackHablar();
    }, 1000);
}


function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

async function main(){
    await hola('Pepe'); 
}

main();