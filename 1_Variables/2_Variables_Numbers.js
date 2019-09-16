// Numerical variables in JavaScript
// Numerical operators in JS

// JS does not care about the data type when assigning variables, which means we can assign whole integers or floating-points
let num_1 = 5;
let num_2 = 10;

num_1 = 25.55;
// console.log(num_1 + num_2);

// multiple print statements in console.log
// console.log(num_1, num_2);

/* 
Numerical Operators in JS:
    + addition operator 
    - subtration operator
    * multiplication operator
    / division operator 
*/

// const reserved keyword: constant, the value of the variable cannot be changed in an expression
// let total = num_1 + num_2;
// the whole line above is called an statement, generally statements end in an ; the part num_1 + num_2 is known as an expression

/* 
Variables challenges
    1) Convert a Fahrenheit number into Celsius using the formula C = (F - 32) * 5/9
    2) Convert Celsius to Fahrenheit using the formula F = (C * 9/5) + 32
    3) Convert Miles to Kilometers using the formula 1 Mile = 1.609344 KM 
    4) Convert Kilometers to Miles using the formula 1 KM = (1/1.609344) Miles 
*/

// Challenge 1:
let fahrenheit = 100;
let celsius = (fahrenheit - 32) * (5/9);
console.log(fahrenheit + " Degrees Fahrenheit converted into Celsius is: " + celsius);

// Challenge 2:
let celsius_2 = 60;
let fahrenheit_2 = (celsius_2 * (9/5)) + 32;
console.log(celsius_2 + " Degrees Celsius converted into Fahrenheit is: " + fahrenheit_2);

// Challenge 3:
let miles = 200;
let kilometers = (1.609344 * miles);
console.log(miles + " Miles converted into Kilometers is: " + kilometers + " KM");

// Challenge 4:
let kilometers_2 = 200;
let miles_2 = (1/1.609344) * kilometers_2
console.log(kilometers_2 + " Kilometers converted into Miles is: " + miles_2 + " Miles");
