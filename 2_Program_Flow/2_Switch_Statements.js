// Switch statments in JavaScript

// Gneral syntax of the switch statement:
/* 
let num = 2;

switch (variable to compare, in this case num) {
    case value_to_compare_to ():
        console.log("case 1")
    break; 
    
    break statement is REQUIRED!

    case 2:
        console.log("case 2")
    break;

    what if num has a value other than 1 or 2 in this case? We can use the default keyword for all other cases.
    default:
        console.log("Default case statement that is not in the switch structure")
    break; 
}

We can use expression evaluation in the Switch statements:
let num = 100;
switch (true) {
    
    // here the case is checking to see if the expression evaluates to true, this is the true within the () at the top 
    // next to the switch keyword.
    case num === 10; // check to see if num === 10, if it evaluates to true then execute the code block, else it will move onto the next case
                     // statement.
        console.log("1st case, num is equal to 10")
    break;
    case num >= 100;
        console.log("2nd case, num is greater than 100")
    break;
    default;
        console.log("Default case statement");
    break;
}   
*/

// The final break; statement in the switch case is optional, but generally it is good practice to write it. Having a default case is optional.
