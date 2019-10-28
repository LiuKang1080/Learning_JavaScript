// For loops in JavaScript 
// for loops in JS is based off of the C lang, the syntax will be the same
// for loops take in 3 arguements, seperated by ;
// 1st argument = decleration of the looping variable, by tradition the variable is i
// 2nd argument = specifies the ending limit condition
// 3rd argument = increment operator. Specifies the amount of change for the iterator per loop, generally we will use i++ or i--
// pay attention to what the iteration varaible starts as, and when the loop will end!

/* 
General syntax of a for loop
for(let i=0; i<10; i++) {
    // code block in the for loop
}
*/

// basic loop example
// for(let i=0; i<10; i++) {
//     console.log("Iteration number: " + i);
// }

// console.log("============================");

// // looping backwards
// for(let i=5; i>0; i--) {
//     console.log("Iteration number: " + i);
// }

// We can also have nested loops. 
// note on nested loops, because of the new let keyword in modern JS, we can have the iterator varaible in the nested loop be the same variable
// as the iterator in the outer loop. Generally it is not recommended and the nested iterator varaible should be a different varaible

// console.log("============================");

// for(let i=0; i<5; i++) {
//     for(let i=0; i<3; i++) {
//         console.log("Inner Loop iteration: " + i);
//     }

//     console.log("============================");
//     console.log("Outer Loop iteration: " + i);
// }

// contuinue keyword: if continue is reached, then it will skip the rest of the code block, and immediately move onto to the next iteration of the loop.
// break keyword: we will break out of the current loop we are in if break is reached.

// IMPORTANT!!!
// variables within code blocks: variables that are created in blocks will only exist as long as we are within that block, 
// once we leave the block the variable will be deleted from memory.

/* 
Challenge:
- loop from 1 to 10
- in each loop multiply whatever the loop number is by 5
- create the sum of products from the last step
- output the products of each iteration of the loop
- show the grand total of the sum at the end
*/

// create a variable to keep track of the sum of prducts
sum_of_products = 0;

for(let i=1; i<=10; i++){
    // multiply the iterator by 5
    let product = i * 5;
    console.log("===");
    console.log("Current product is: " + product);
    
    // add the product of the current iteration to the sum of products
    sum_of_products += product;
    console.log("Current total sum is: " + sum_of_products);
}

console.log("===");
console.log("Grand total of the sum of products: " + sum_of_products);
