// Arrow Functions in JavaScript

// Standard adding function:
/*
    let addNumbers = function() {
        console.log("The sum of 2 and 3 is: " (2+3));
    }
*/

// We remove the function keyword and add => after the ()
// If the function body has only 1 statement we can remove the {}. If we have more than 1 statement we need to use the {}.

/*
    let addNumbers = () => console.log("The sum of 2 and 3 is: " + (2 + 3));
*/

// Using parameters with the arrow function
// We add the parameters within the (). If we only have 1 parameter we can remove the ()
/*
    let addNumbers = num1 => console.log("The sum of " + num1 + "and 3 is: " + (num1 + 3));
*/ 
// This only works with 1 parameter. If we do not have any parameters or more than 1 parameter we must use the ().
// Standard coding practices is to use the () regardless of the number of parameters.
/*
    let addNumbers = (num1, num2) => console.log("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
*/

// define multi-line, and multi-parameter arrow function
let addNumbers = (num1, num2) => {
    let sum = num1 + num2;
    console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
}

// calling the addNumbers function
addNumbers(10, 20);
