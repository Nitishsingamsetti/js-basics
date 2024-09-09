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
