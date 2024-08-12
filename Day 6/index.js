//Classes in javaScript

// A Person class to hold all the details :
console.log(`Displaying Person details using Class:`);
class Person {

    constructor(name,age,city){
        this.name =name;
        this.age =age;
        this.city = city;
    }

    displayDetails(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`City : ${this.city}`);
    }

}

//Creating an objects to access a class & passing arguments to constructor.
let p1 =new Person("Hari",26,"Chennai");
let p2 = new Person("Muthu",32,"coimbatore");

//Displaying Person details using objects.
console.log(`\n`);
console.log(`Person-1 Details : \n`);
p1.displayDetails();

console.log(`\n Person-2 Details : \n`);
p2.displayDetails();
console.log(`\n`);


// A class to calculating Uber price :
console.log(`Calculating a Uber price using Class : `)
class Uberprice{

    constructor(vehicle,km){

        if(vehicle=="bike"){
            this.vehicle= vehicle;
            this.km= km;
            this.pkm=10;
        }
        if(vehicle=="auto"){
            this.vehicle= vehicle;
            this.km=km;
            this.pkm= 15;
        }
        if(vehicle=="car"){
            this.vehicle= vehicle;
            this.km= km;
            this.pkm= 25;
        }
    }

    // function to calculate and display the price
    displayPrice(){
        let price = this.km * this.pkm;
        return price;
    }

}
console.log(`\n`);

//Creating an objects to access a class & passing arguments to constructor.
let a = new Uberprice("auto",10);
console.log(`Price for 10KM in a Auto : Rs.${a.displayPrice()}`);

let b = new Uberprice("bike",10);
console.log(`Price for 10KM in a Bike : Rs.${b.displayPrice()}`);

let c = new Uberprice("car",10);
console.log(`Price for 10KM in a Car : Rs.${c.displayPrice()}`);