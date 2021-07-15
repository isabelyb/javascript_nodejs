var myCar = {
    brand: "RENAULT",
    model: "TWIZY",
    year: 2021,
    detailCar: function(){
        console.log(`Car ${this.model} ${this.year}`);
    }
};

myCar.year
//2021

myCar.model
//"TWIZY"

myCar.detailCar();
// Car TWIZY 2021