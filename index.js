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

let a = 5;
let b = 3;
console.log(a+b); 
console.log(a-b); 
console.log(a^b);       
console.log(a/b); 
console.log(a%b); 
console.log(a**b); 

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


// Conditionals in JS
// If statement
// definition of if statement
let condition=true;
let condition1=false;
let condition2=false;


if(condition) {
    // code to be executed if condition is true
}

// If else statement (true ) false-else
// definition of if else statement
if (condition1) {
    
    // code to be executed if conditional is true 
} else if (condition2) {
    // code to be executed if condition2 is true
    
} else{
    // code to be executed if both condition1 and condition2 are false
}
 
// Practice examples
let score =50

    if(score>69){
        console.log("Very good, you have passed the exam")
    } 

    if(score>= 70){
        console.log ("You have passed the exam")
    } else {
        console.log("You have failed the exam")
    }

    // Comparison operators
    // 1. Equal to (==)
    // 2.  Not Equal to (!=)
    // 3. Strict Equal to (===)
    // 4. Strict not Equal to (!==)
    // 5. Greater than (>)
    // 6. Less than (<)
    // 7. Greater than or Equal to (>=)
    // 8. less than or Equal to (<=)


    // Arrays: Its a data structure and it holds multiple data at once
    ["volvo", "benz", "kia", "toyota"]
    [1,2,3,4,5]

    let cars=  ["Volvo", "Benz", "Kia", "Toyota"];
    console.log(cars);
    console.log(cars[0]);

    // Mixed array
    let mixedArray = ["Gaelle", "23", "45", "Star", "78", "Watashi"];
    console.log(mixedArray);
    console.log(mixedArray[5]);
    
    
    // Objects
    // An empty object {}
    let person = {

        name: "Gaelle",
        age: 40,
        district: "Kampala",
        student: true,
        hobbies: ["eating", "sleeping"],
        address: {
            street: "123 Main St",
            city: "Kampala",
            country: "Uganda",
        }

    }
    console.log(person);
     console.log(person["name"]);
    //  Accessing the name property
     console.log(person.hobbies);
     console.log(person.hobbies[0]);
    //  Accessing the second hobby


    function calculateGrade(score) {
  if (score >= 80) {
    return 'A';
  } else if (score >= 75) {
    return 'B+';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 65) {
    return 'C';
     } else if (score >= 60) {
    return 'C+';
  }
   else if (score >=55) {
    return 'D+';
   } else if (score >= 50) {
    return 'D';
  }
   else {
    return 'F';
   }
}

// Example
const studentScore = 74;
const studentGrade = calculateGrade(studentScore);


console.log(`Student score: `,studentScore);
console.log(`Student grade: ${studentGrade}`);
const xr= `Student grade: ${studentGrade}`;


// Concatenation in JavaScript is the process of joining two or more strings into a single string.

let greetings = "Hello";
let subject = "World";
let space = ", ";
let exclamation = "!";
let fullGreeting = greetings.concat(space, subject,exclamation );
console.log(fullGreeting);

// Today's class : Loops
// In JavaScript, a loop is a way to run a block of code repeatedly until a specific condition is no longer true. Loops save you from writing the same code over and over for repetitive tasks, such as processing items in a list or performing a calculation multiple times
// An array called scores containing objects with each object having a name and score properties

let scores = [
    {name: "Annet", score: 85},
    {name: "Justine", score: 63},
    {name : "Samuel", score: 75},
    {name : "Martin", score: 57},
    {name : "Resty", score: 39},
    {name : "Liz", score: 75}
];
scores[2].score;

scores.forEach(student=>{
    let grade;
    if(student.score >= 90) {
        grade= "A"
    } else if (student.score >= 80){
        grade="B"
}
else if (student.score >= 70){
        grade="C"
}
else if (student.score >= 60){
        grade="D"
}
else if (student.score >= 50){
        grade="E"
}
else{
    grade="F"
}

console.log(student.name +":"+ student.score +":"+ grade)
}
)

// Functions: Are reusable blocks of code that perform a specific task. They take parameters and return variables.
// Function declaration: We use the fn keyword to declare a fn
function functionName(){
    // code to be executed
}

function funcName(parameter){
   // code to be executed
   return parameter;  
    // returning parameter 
}

function funcWithParameters( parameter1, parameter2, parameter3) {
    // code to  be executed
    return parameter1 + parameter2 + parameter3;
    // returning the sum of the parameters
}
// Working example of a function 
function returnSomeValue(){
    let value = "This is my first function in JavaScript";
    console.log(value);
}
returnSomeValue(); 
// This is how you call a function to execute the code inside it

function returnParameter(parameter) {
    return parameter;
}
// console.log (returnParameter{Hello. This is my second fn in Js});
const result = returnParameter ("Hello, this is my second function in JavaScript");
console.log(result);

function addNumbers (x,y){
    return x + y;
}
const sum = addNumbers (4, 5);
console.log (sum);


// Loops: Loops in JavaScript are used to execute a block of code repeatedly until a specific condition is no longer met.
// Loops offer a quick and easy way to do something repeatedly.

// 1. For loop: The for loop
// A for loop has three main parts:
// Initialization: Sets up a counter variable (e.g., let i = 0). This runs only once at the beginning.
// Condition: A condition that is checked before each iteration. If it's true, the loop continues; if false, the loop ends.
// Update: An expression to increment or decrement the counter after each iteration (e.g., i++).

// Example

for (let i= 0; i < 7; i++) {
    console.log (i);
}
for(let i=7; i>0; i--){
    console.log(i)
}


const myCars=["Volvo", "Benz", "Kia", "Toyota"];
console.log(myCars);
const numberofCars = myCars.length;
console.log(numberofCars);
const KiaPosition = myCars.indexOf("Kia");
console.log("The position of Kia in the array is", KiaPosition);

for(let i=0; i< myCars.length; i++){
    console.log(myCars[i]);
}

for (let car of myCars){
function printCarPosition(car){
    const index = myCars.indexOf(car);
console.log ("The position of " + car + " in the array is " + index);
}
 printCarPosition(car);
 console.log(car);   


}






// 2. While Loop: Repeats a block of code as long as a specified condition remains true. Use this when you don't know the exact number of iterations beforehand, for example, waiting for a user to type 'yes'

let count = 0;
while (count < 3) {
  console.log("Count is: " + count);
  count++;
}

let id = 0;
while ( id< 7){
    console.log("From the while loop", id);
    id++;
}
let p = 7;
while ( p > 0){
    console.log("From the second while loop", p);
    p--;
}

let password = "";
while (password !== "1234"){
    password = prompt ("Please enter the correct password");
}

// 3. Do while Loop: Similar to a while loop, but it guarantees the code block runs at least once before checking the condition.
let i=0;
do
   {
    i += 1;
    console.log(i);
   }
while (i<5);



// 4. For of Loop: A simpler way to iterate over the values of iterable objects like arrays or strings.

const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Arrow functions: They're are simple ways to write functions in Js
// They are used for Simple, short  fn

// Traditional function expression
const traditionalFunction = function(){
    console.log("This is a traditional function");
}
traditionalFunction();


function anotherTraditionalFunction (){
    console.log("Thisis another traditional function");
}
anotherTraditionalFunction();

// Arrow function expression
const arrowFunc = () => {
    console.log ("This is an arrow function");
}
arrowFunc ();
const add = ( a,b) => {
    console.log (a + b);
}
add(3,4)


// JSON means JavaScript Object Notation
// Javascript Object
const task = {
    id:1,
    title: "Complete Javascript assignment",
    completed:false
}
console.log(task);

// JSON string
const taskJSON = JSON.stringify(task);
console.log(taskJSON);

// Persing JSON string back to JavaScript object
const persedTask = JSON.parse(taskJSON);
console.log(persedTask);

// Local storage
// Storing data in local storage
localStorage.setItem("Name", "Uwizera Gaelle");
localStorage.setItem("task", "taskJSON");

// Retrieving data from local storage
const nameFromStorage = localStorage.getItem("Name");
console.log("Name from local storage:", nameFromStorage);

const taskFromStorage = localStorage.getItem("task")
console.log(taskFromStorage);