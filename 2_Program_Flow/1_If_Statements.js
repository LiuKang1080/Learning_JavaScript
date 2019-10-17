// Generally JavaScript will execute coce line by line in sequential order, but we can use control flow to execute code out of order

/*
General syntax for an if statement:
if (boolean expression) {
    // code block. Statements within the code block will only execute if the boolean expression is evaluated to be true.
} else if (other boolean expression) {
    // we can have multiple if condictional checks before evaluating the optional else statement 
} else {
    // optional else code block.
}

code execution within if blocks stop after hitting the FIRST true block. If there are multiple true expressions within if statements,
only the first true expression JavaScript reaches will be the only one to run, no following true blocks will execute. 
In certain situations the order of the if-else blocks may matter. If we have a lot of if-else statements it might be better 
to use a switch structure instead.
*/ 

// standard example of using statements
let number = 150;

if (0 < number && number <= 50) {
    console.log("number is between 0 and 50");
} else if (50 < number && number <= 100) {
    console.log("number is between 50 and 100");
} else {
    console.log("number exists outside the range of 0-100");
}
