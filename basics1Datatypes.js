//Hello World
console.log("Hello World");

//Print any data type & Use of typeof(var)
//ES6 introduced keywords: let, const along with keyword:var(ES5) 
//number
var int = 3;
console.log("var " + int + " is of Datatype " + typeof (int));
//string
var string = 'India';
console.log("var " + string + " is of Datatype " + typeof (string));
//boolean 
var bool = false;
console.log("var " + bool + " is of Datatype " + typeof (bool));

//null - data type object
var nullDT = null;
console.log("var " + nullDT + " is of Datatype " + typeof (nullDT));

//undefined
var undefinedVar;
console.log("var " + undefinedVar + " is of Datatype " + typeof (undefinedVar));

//Difference bw var and let 
//var - can redeclare the same name identifier b,c 
var a = 2;
var b = 3;
var c = a * b;
console.log("output of var a*b is " + c);

var b = 6;
var c = a * b;
console.log("output of var a*b with redeclaring b is " + c);

b = 88;
var c = a * b;
console.log("output of var a*b with reassigning b is " + c);

//let - cannnot redeclare within same scope 
let d = 6;
let e = 9;
let f = d * e;
console.log("output of let d*e is " + f + " redeclaration with let is not possible");

/*let e = 6;
let f = d*e;
console.log(f);*/

//Reassigning 
d = 6;
f = d * e;
console.log("output of let d*e with reassigning is " + f);

/*let e = 6;
let f = d*e;
console.log(f);*/

const g = 9;
const h = 10;
const i = g * h;
console.log("output of const g*h is " + i + " reassigning to const is not possible");

var name1 = "Ram";
var name2 = "Sita";
var t = 8;
var bool = true;
var name3 = (name1 + t) + (bool);
console.log(name3);

//NaN:-"Not a Number".Special value representing an unrepresentable or undefined value in arithmetic operations.
var name3 = name1 * bool;

console.log(typeof (NaN)); //object

//negation operator possible 
console.log("Negation of Boolean bool is " + !bool);

/*In programming, type conversion is the overarching process of transforming values between data types,
 type coercion is the automatic and implicit form of conversion performed by the language during operations, and casting, 
 although not a term commonly associated with JavaScript, refers to the explicit and controlled conversion of values by the programmer 
 when needed.*/

// String Conversion
let stringOperand = "42";
let resultString = "Result: " + stringOperand; // The number 42 is implicitly converted to a string
console.log(resultString);  // Output: "Result: 42"

// Numeric Conversion
let numericOperand = "25";
let resultNumeric = numericOperand - 5; // The string "25" is implicitly converted to the number 25
console.log(resultNumeric);  // Output: 20

// Boolean Conversion
let booleanOperand = "Hello"; // Any non-empty string is truthy
let resultBoolean = booleanOperand && true; // The string "Hello" is truthy and converted to true
console.log(resultBoolean);  // Output: true

