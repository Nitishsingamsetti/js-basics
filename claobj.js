const employee = {
    clacTax() {
        console.log('tax rate is 10%')
    }
};

const cr = {
    salary: 50000,
};

cr.__proto__ = employee;
//every object have inbuilt prototype methods
//__proto__ by using this we can access other objects prototype properties

//basic class-construstor

// class realMadrid {
//     constructor(trophies,country){
//         this.trophies =trophies,
//         this.country=country
//     }
//     start(){
//         console.log('ucl champions')
//     }
//     stop(){
//         console.log('they wont stop')
//     }
// }

// let vini = new realMadrid(2,'brazil');
// let bellingoal = new realMadrid(1,'england');
// console.log(vini.trophies)

//inheritence
//properties and methods from parent carried to child class

class Parent {
    hello() {
        console.log('hello')
    }
};

class Child extends Parent {

}

let obj = new Child()
console.log(obj.hello())

// class Person {
//     eat(){
//         console.log('eat')
//     }
//     sleep(){
//         console.log('sleep')
//     }
//     work(){
//         console.log('do nothing')
//     }
// };

// class Engineer extends Person{
//     work(){
//         console.log('build projects')
//     }
// };

// let ramos = new Engineer();
// console.log(ramos.eat())
// console.log(ramos.sleep())
// console.log(ramos.work())//child class functions get invoked not parent funstion
// method overriding the work function

//super();

class Person {
    constructor() {
        console.log('enter parent constructor')
        this.species = 'homo sapiens'
    }
    eat() {
        console.log('eat')
    }

};

class Engineer extends Person {
    constructor(branch) {
        console.log('enter child constructor');
        super();//to invoke parent constructor
        this.branch = branch;
        console.log('exit child constuctor')
    }
    work() {
        console.log('build projects')
    }
};

let objnew = new Engineer('ece')


//------------
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, model) {
//         super(brand);
//         this.model = model;
//     }
//     show() {
//         return super.present() + ', it is a ' + this.model;
//     }
// }

// let mycar = new Model("Ford", "Mustang");

//----------
let data = 'old data'
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    veiwData() {
        console.log(data)
    }
}

let stu1 = new User('pepe', 'pepe@gmail')
let stu2 = new User('arbeola', 'arbeola@gmail')

//------
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data = 'new version of data'

    }
};

let admin1 = new Admin('iker', 'ike@gmail');

//inheritence
//-hides the complex details and shows only essential features of a object or function


class Engine {
    constructor(horsepower) {
        this.horsepower = horsepower;
    }

    start() {
        console.log(`engine started with ${this.horsepower} horsepower`)
    }

    stop() {
        console.log('engine stopped')
    }
}

class Car {
    constructor(make, model, horsepower) {
        this.make = make,
            this.model = model,
            //details of engine are not shown
            this.engine = new Engine(horsepower)
    }
    start() {
        console.log(`Starting the ${this.make} ${this.model}...`);
        this.engine.start();
    }
    stop() {
        console.log(`Stopping the ${this.make} ${this.model}...`);
        this.engine.stop();
    }
}

const myCar = new Car('toyota','corolla',150)
myCar.start();
myCar.stop();







