const employee={
    clacTax(){
        console.log('tax rate is 10%')
    }
};

const cr={
    salary: 50000,
};

cr.__proto__ = employee;
//every object have inbuilt prototype methods
//__proto__ by using this we can access other objects prototype properties

//basic class-construstor

class realMadrid {
    constructor(trophies,country){
        this.trophies =trophies,
        this.country=country
    }
    start(){
        console.log('ucl champions')
    }
    stop(){
        console.log('they wont stop')
    }
}

let vini = new realMadrid(2,'brazil');
let bellingoal = new realMadrid(1,'england');
console.log(vini.trophies)

//inheritence
//properties and methods from parent carried to child class

class Parent {
    hello(){
        console.log('hello')
    }
};

class Child extends Parent{

}

let obj= new Child()
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
    constructor(){
        console.log('enter parent constructor')
        this.species='homo sapiens'
    }
    eat(){
        console.log('eat')
    }
   
};

class Engineer extends Person{
    constructor(branch){
        console.log('enter child constructor');
        super();//to invoke parent constructor
        this.branch=branch;
        console.log('exit child constuctor')
    }
    work(){
        console.log('build projects')
    }
};

let objnew = new Engineer()

