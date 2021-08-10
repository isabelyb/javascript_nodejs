function soyAsincrona(miCallback){
    //crear asincronía
    setTimeout(function(){
        console.log('Estoy siendo Asincrona')
        miCallback();
    }, 1000);
}

console.log('Iniciando proceso');
soyAsincrona(function(){
    console.log('Terminando proceso');
});
