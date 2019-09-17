// Boolean Variables in JavaScript 

// Initialize variables 
let num_1 = 15;
let num_2 = 15;
let is_equal;
// Generally variables that hold boolean values start with is_

is_equal = num_1 == num_2;
console.log(is_equal);

num_2 = "15";
is_equal = num_1 == num_2;
console.log(is_equal);
// we get true even though num_1 is a number and num_2 is a string

// true and false are reserved keywords in JS, similar to Python (lower case).
// == is VALUE equality check
// === is VALUE AND TYPE equality check

is_equal = num_1 === num_2;
console.log(is_equal);
// we get false since num_1 and num_2 are not of the same type.
// USE the strict comparison operator rather than the value only operator. This is the standard.

// != not equal 
is_equal = num_1 != num_2;
console.log(is_equal);
// we get false for this one, remember the 1 equal sign 

is_equal = num_1 !== num_2;
console.log(is_equal);
// we get true for this one, here the double == after ! checks for both the type and value
// USE the strict !== for the not equal comparison operator. This is the standard. 

// Other comparison operators
/* 
<, >, <=, >=
There are no strict comparitors for this. There is only one = sign.

Summary:
==      Equality operator. value check only
===     Strict equality operator. type and value check (use this) 
!=      Not equal operator. value only check 
!==     Strict not equal operator. type and value check (use this)
>       Greater than operator
<       Less than operator
>=      Greater than or equal to operator
<=      Less than or equal to operator
*/

// AND OR operators in JavaScript:
// AND operator in JavaScript is && 
// OR operator in JavaScript is || 
