var items = [
    { name: "Bicycle", price: 3000},
    { name: "TV", price: 2000},
    { name: "Book", price: 180},
    { name: "Smartphone", price: 2800},
    { name: "Earphones", price: 600},
    { name: "Microphone", price: 250},
];

var filteredItems = items.filter(function(item){
    return item.price <= 300
});

filteredItems;

//(2) [{…}, {…}]
// 0:
// name: "Book"
// price: 180
// __proto__: Object
// 1:
// name: "Microphone"
// price: 250
// __proto__: Object
// length: 2
// __proto__: Array(0)


var nameItems = items.map(function(item){
    return item.name
});

nameItems;

// (6) ["Bicycle", "TV", "Book", "Smartphone", "Earphones", "Microphone"]


