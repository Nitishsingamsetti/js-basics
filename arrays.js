/*const a=[10,40,50,'name']

//tostring
console.log(a.toString())

//pop()--removes last element
console.log(a.pop())

//shift()--removes first element
let b=a.shift()
console.log(b)

//push--pushes new element to the end and displayes the new length as output
let c=a.push('ram')
console.log(c)

//unshift()--adds new element at the beginning and displays new length
let d=a.unshift(100)
console.log(d)

console.log(a)

//concat()
const e=[65,98,136,56,100]

console.log(a.concat(e))//return a new array doesnt update array 'a'
console.log(a)

console.log(a.splice(0,2))//removes elements from a meaning effects the original array
console.log(a)

let f=e.slice(0,2)//slice doesnt effect the original array
console.log(f)
console.log(e)*/

//sorting

/*const x = [40, 100, 1, 5, 25, 10,100,98];

console.log(x.sort())//numbers are compared as strings
//output--[1, 10, 100, 100, 25, 40, 5, 98]

let compare=(a,b)=>{
    return a-b//for ascorder ,b-a for desc order
}
console.log(x.sort(compare)) */

// const a = [40, 100, 1, 5, 25, 10, 100, 98];

// let len = a.length;
// let min = Infinity;
// let i = 0

// while (i < len) {
//     if (a[i] < min) {
//         min = a[i];
        
//     }
//     i++;

// }
// console.log(min)

a=[1,4,5,8,9,10];
//forEach
a.forEach((element) => {
    console.log(element*10)
});

//for of---value
for(let i of a){
    console.log(i)
}

//for in-- keys/indexes
for(let i in a){
    console.log(i)
}




