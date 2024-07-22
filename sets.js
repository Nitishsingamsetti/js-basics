const arr = [1, 1, 3, 4, 5, 5]
let b = new Set(arr)  //new is used while creating a set-- removes duplicates
console.log(b)

//add new element
b.add('madrid');
console.log(b)

for (const i of b) {
    console.log(i)
}

console.log(b instanceof Set);

//clear()--clears all values in the set
//console.clear(b)

