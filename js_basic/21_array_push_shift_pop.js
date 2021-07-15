var items = [
    { name: "Bicycle", price: 3000},
    { name: "TV", price: 2000},
    { name: "Book", price: 180},
    { name: "Smartphone", price: 2800},
    { name: "Earphones", price: 600},
    { name: "Microphone", price: 250},
];

items.push({ name: "Electric Car", price: 12000})

items;
//(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: "Bicycle", price: 3000}
// 1: {name: "TV", price: 2000}
// 2: {name: "Book", price: 180}
// 3: {name: "Smartphone", price: 2800}
// 4: {name: "Earphones", price: 600}
// 5: {name: "Microphone", price: 250}
// 6: {name: "Electric Car", price: 12000}


items.shift();
//{name: "Bicycle", price: 3000}

items;

// (6) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: "TV", price: 2000}
// 1: {name: "Book", price: 180}
// 2: {name: "Smartphone", price: 2800}
// 3: {name: "Earphones", price: 600}
// 4: {name: "Microphone", price: 250}
// 5: {name: "Electric Car", price: 12000}


items.pop();
// {name: "Electric Car", price: 12000}

items;
// (5) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: "TV", price: 2000}
// 1: {name: "Book", price: 180}
// 2: {name: "Smartphone", price: 2800}
// 3: {name: "Earphones", price: 600}
// 4: {name: "Microphone", price: 250}