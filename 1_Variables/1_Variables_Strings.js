// Variables and Strings in JavaScript

// let keyword = tells JS that we're declaring a variable. Reserved keyword. The new standard in ECMAScript 2017
// Before ECMAScript 2017 we used the reserved keyword var. We can still use var, but let is the new standard.

// JavaScript is case sensitive!
// JavaScript ignores whitespace!

// For variables, JavaScript does not care what type of data the variable will hold.
// We do not need to assign data to a variable upon decleration, we can assign at a later time.
let my_variable;

let my_greeting = "Hello from JavaScript";
console.log(my_greeting);

// Assign data to variable now:
my_variable = 52;
console.log(my_variable);
// We CANNOT say let my_variable = 52; when we already declared it on line 11. We will get an error: "Identifier has already been declared"

var my_name;
var my_name = "Shiva";
console.log(my_name);
// Notice how we can use var in both declaring and assigning even on multiple lines. 
// We will not get an error if we use var for multiple decalre statements.
// With let we cannot do this. Use let since it is the current standard.

// Concatenation 
console.log("Hello " + my_name + "!");

// Small Challenge:
/* 
Write a small program that will print "Congratualtions FIRST_NAME LAST_NAME !" 
Create 2 variables:
    1) variable to hold first name 
    2) variable to hold last name
*/

let first_name = "Shiva";
let last_name = "Mahakali";

console.log("Congratulations! " + first_name + " " + last_name + "!");
