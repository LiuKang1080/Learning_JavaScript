// Functions in JavaScript

// Functions are blocks of code that we can re-use as many times as we want.

// Creating Functions:
function sum() {
    let x = 5;
    let y = 10;
    let sum = x + y;

    console.log("Sum of " + x + " and " + y + " is: " + sum);
}

// The function name, the parenthesis, and the contents within the parenthesis are knows as the function signature.

// Calling the function:
sum();

// There is more than one way to declare a function:
let minus = function() {
    let a = 10;
    let b = 2;
    let minus = a - b;

    // console.log("Subtraction of " + a + " and " + b + " is: " + minus);
    return "Subtraction of " + a + " and " + b + " is: " + minus;
}

// We can have a variable be assigned to the keyword function, the variable becomes the function name. 
// This style of function declaration is called a Function Expression. 
// Regardless of what syntax style we use, in order to call and run the function we must use the name of the function followed by the ().
// If we just console.log(sum) we will get the information telling us [Function: sum]
// console.log(sum);

console.log(minus());
// Notice how we get undefined, this is because the function does not return anything nor is minus being used.
// In JavaScript if we define a variable but do not give it a value, the default value for the variable is undefined.

// Return keyword - Usually the last statement in a function. Once return is reached the function will pass on the data within the expression
// to whatever called the function, and no more statements will be executed within the function.

let total = minus;
console.log(total());
// Here the varaiable total is pointing to the same memory address as what minus is pointing to, we then run the function.

// Passing Data to functions: We pass in data to function using PARAMETERS when creating the function
let greeting = function(firstName="Whoever", lastName="Whomever") {
    return "Hello " + firstName + " " + lastName;
}

// We can now call the function as many times as we want, and pass in data as ARGUMENTS.
console.log(greeting("Adam", "Smith"));
console.log(greeting("Andrew", "52"));
console.log(greeting("Alice", 100));

greeting();
// Since we have default values, passing in nothing as the arguments will still log Whoever and Whomever. 
// If we don't pass in anything when there are no defualt values for the parameters we will get undefined for the arguments.

// We will use arrays to pass in n number of arguments.
