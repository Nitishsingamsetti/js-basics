const a={name:'cr7',age:39,team:'alnassar',jersey:7};
const b=a;

// b['age']=40;

// console.log(a)
// console.log(b)

// delete a['team'];
// console.log(a)

// const c={name:'cr7',age:39,team:'alnassar',
//     x:function()
//     {return this.name+"hi"}
// };
// console.log(c.x)
//-----------------------------------
//assign ---values in c are updated in a

// const c={name:'mb9',age:25,team:'madrid'
// };

// Object.assign(a,c)

// console.log(a)
//----------------------------------

//constructor

// console.log(a.constructor)

//----------------------------------
//create-create a new object from exicting object

let c=Object.create(a,{name:{value:'benzama'}})
console.log(c) 

//defineproperties--add new properties or redifine exixting properties

Object.defineProperties(a,{
    name:{value:"marcelo"},
    nationality:{value:"Brazil"}
})
console.log(a)

console.log(Object.entries(a))

//-------------------------------
//freeze()-- cant change any properties of object

// Object.freeze(a)
// a['name']="nitish"
// console.log(a)
//---------------------

console.log(Object.getOwnPropertyDescriptors(a))
console.log(Object.getOwnPropertyNames(a))//RETURN KEYS IN A ARRAY

console.log(Object.keys(a))

// const a1={fname:"ni",lname:'ba',md:'si'};
// Object.preventExtensions(a1)
// a1['edu']="btech";
// console.log(a1)
// a1['fname']="nitish"
// console.log(a1)
//preventExtension()--we cant add new property,but we can modify and delete property

//seal()-we cant add or delete property,but can be modified

console.log(Object.toString(a))



