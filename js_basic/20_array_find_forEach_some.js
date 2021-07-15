var items = [
    { name: "Bicycle", price: 3000},
    { name: "TV", price: 2000},
    { name: "Book", price: 180},
    { name: "Smartphone", price: 2800},
    { name: "Earphones", price: 600},
    { name: "Microphone", price: 250},
];

var findItem = items.find(function(item){
    return item.name === "TV"
});

findItem;
//{name: "TV", price: 2000}


items.forEach(function(item){
    console.log(item.name);
});
// Bicycle
// TV
// Book
// Smartphone
// Earphones
// Microphone


var cheapItems = items.some(function(item){
    return item.price < 600;
});

cheapItems;
//true