// //map,filter doesnt change the original array

// //map
// //returns a new array
// const a=[100,200,300,450,500];
// let b=a.map((value,index,array)=>{
//     return value*2
// })
// console.log(b)

// //filter

// let c=a.filter((value)=>{
//     return value>400
// })

// console.log(c)

// //reduce

// let d= a.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(d)

// let g= a.reduce(jk,300) //setting the initial value

// function jk(h1,h2){
//     return h1+h2
// }
// console.log(g)

// let a=100;
// function h(){
//     let a=200
//     console.log(a)
// }
// h()
// // let b='babu'
// function h2(){
//     let b='ni'
//     console.log(b)
// }
// h2()
// console.log(b)

// function x(){
//     let a=10;
//     function y(){
//         console.log(a)
//     }
//     a=40;
//     y();
//     a=100;//this is waste

// }

// x();

function x() {
    let a = 10;
    function y() {
        
        console.log(a)
    }
    a=900;
    return y
    
}
let z = x();
console.log(z)
z()



