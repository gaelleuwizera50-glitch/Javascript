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
// Seven of them are called “primitive”, because their values contain only a single thing.

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


// 3.BigInt  Used for Numeric values larger than the standard Number type can hold.
// Dealing with very large numbers, such as IDs in large databases or precise scientific calculations.
// A BigInt value is created by appending n to the end of an integer

let z=1234567890123456789012345678901234567890n;
const bigInt = 1234567890123456789012345678901234567890n;
console.log(z);
console.log(typeof z);

// 4.Boolean (logical type)
// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

console.log(5==6);
console.log(5==5);


// 5. Null value
// Represents the intentional absence of any object value. It displays object
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let q= null;
console.log(q);
// console.log(typeof q);

// 6. Undefined value
// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
let height =100;
height= undefined;
// console.log(height);
console.log(typeof height);


// 7.Symbols Used for  unique identifiers.
let value1 = Symbol("program");
let value2 = Symbol("program");
console.log(value1===value2);



// 8. Objects is the only non-primitive data type: 
// In contrast, objects are used to store keyed collections of various data and more complex entities
// object  is used for more complex data structures.

// student object
const student = {
    firstName: "Jack",
    rollNo: 32, 
};
console.log(student);
console.log(typeof student);

