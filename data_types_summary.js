// datatype : 1. primitive(call by value) 2. non-primitive (reference type)

// primtive:
// 7 types: String,number(int + float),Boolean,null(empty),undefined,Symbol(to make some value unique),BigInt

// refrenece type (non-primitive) --> return type will be an object
// Array, Objects

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false
// const bigNumber = 3948340573074139471037n // ---> BigInt

// arrays:
const heros = ["shaktimaan","naagraj","doga"];
// object:
const myObj = {
  name : "Rudra",
  age : 12
}

// we can treate funcions as variable in js
const myFunction = function(){
  console.log("hello world");
}

// myFunction(); // function calling
// console.log(typeof(myFunction)); // object-function 
let outsideTemp = null;
// console.log(typeof(outsideTemp)); // object

