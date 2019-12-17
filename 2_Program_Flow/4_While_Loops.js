// While and Do-While loops in JavaScript

// Generally for for loops we use them when we know how many iterations we will make. For while loops we generally 
// will loop and test conditions to see if they're true / false.

// Pay attention to the condition that starts the while loop, and the exiting condition. Pay attention to infinite loops...
// use breaks within if statements.

/* 
General syntax for a while loop:

while (condition to test truth value) {
    // code block
}
*/

// The while loop will only start and continue to run if the condition within the ( ) evaluates to true.
// We do not need to explicitly write the test condition with == or ===, we can simply use the variable
// JavaScript will perform the evaluation of the varaible or expression. 

// General syntax for the do-while loop:
/*  
do {
    if (condition within the code block) {
        // do something;
        break;
    }
    console.log("Logging statement");
    count ++ / iterator change;
} while (truth condition check)
*/

// example for a do-while loop

// initial variable declaration
let test_condition = false;
let count = 0;

// loop 
do {
    if (count==3) {
        test_condition = false;
        break;
    } console.log("Count is: " + count);
    count++;
} while (test_condition)

// if we runs this do-while loop, we can see that regardless of what test_condition is in the while block, the loop will st least run once

// We can use do-while loops to ensure that loops run at least once.
