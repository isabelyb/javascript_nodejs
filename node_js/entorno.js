// definir variables de entorno
let nombre = process.env.NOMBRE || 'No nombre'
let web = process.env.WEB || 'No tengo web'

console.log('Hi ' + nombre);
console.log('Mi web es ' + web);
console.log('Mas cosas');
console.log('Otras cosas');

console.log('Cosas finales');