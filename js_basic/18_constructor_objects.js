function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var newCar = new car("Tesla", "Model 3", 2020);

newCar
//car {brand: "Tesla", model: "Model 3", year: 2020}

var newCar2 = new car("MINI COOPER", "SE HARDTOP 2 DOOR", 2022);
newCar2
//car {brand: "MINI COOPER", model: "SE HARDTOP 2 DOOR", year: 2022}

