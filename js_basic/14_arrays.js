var fruits = ["Apple", "Grape", "Cherry", "Banana"];
console.log(fruits);
//(4) ["Apple", "Grape", "Cherry", "Banana"]

console.log(fruits.length);
//4

console.log(fruits[0]);
//Apple

var addFruits = fruits.push("Guava");
console.log(fruits)
//(5) ["Apple", "Grape", "Cherry", "Banana", "Guava"]

var eliminateLastFruits = fruits.pop("Guava");
console.log(fruits)
// (4) ["Apple", "Grape", "Cherry", "Banana"]

var addInitialFruits = fruits.unshift("Guava");
console.log(fruits)
//(5) ["Guava", "Apple", "Grape", "Cherry", "Banana"]

var deleteInitialFruit = fruits.shift("Guava");
console.log(fruits)
//(4) ["Apple", "Grape", "Cherry", "Banana"]

var position = fruits.indexOf("Cherry");
position
//2

fruits[3];
//"Banana"

