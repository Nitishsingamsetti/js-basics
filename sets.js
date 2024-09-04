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

//has()-- checks whether the element is in the set

console.log(b.has(5))

//delete()--removes specific element from the set and returns true if the value is prsent else false
console.log(b.delete(1))
console.log(b)


console.log(b.entries())

//forEach
b.forEach((value)=>{
    console.log(value*2)
})

//keys()
console.log(b.keys())

//size--total number of elements
console.log(b.size)




