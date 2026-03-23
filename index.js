console.log("My name is Gaelle");
// variables is the container
// Declaring a variables using the var, let, or const keywords
// var is  function-scoped and can be redeclared and updated
var name= "Gaelle";
console.log(name);
name= "Uwizera Gaelle";
console.log(name);



// let is block-scoped and can be updated but not redeclared

let age=25;
console.log(age);
age=18;
console.log("My age has changed coz am just a girl" , age);

// const is block-scoped and cannot be updated or redeclared
const country= "Uganda";
console.log(country);
// country= "Kenya"; This will throw an error because const cant be reassigned

// Data types and they include; and typeof just shows the data type
// 1. String its values are in quotes
let greeting= "Hello, How are you?";
console.log(greeting);
console.log(typeof greeting);

// 2.Number it has no quotes
let x= 10;
let y= "12";
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);
