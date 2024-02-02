/* Mathematical Assignment Operators

Let’s consider how we can use variables and math operators to calculate new values and assign them to a variable. Check out the example below:

let w = 4;
w = w + 1;

console.log(w); // Output: 5

/*
In the example above, we created the variable w with the number 4 assigned to it. The following line, w = w + 1, increases the value of w from 4 to 5.

Another way we could have reassigned w after performing some mathematical operation on it is to use built-in mathematical assignment operators. We could re-write the code above to be:

let w = 4;
w += 1;

console.log(w); // Output: 5

/*
In the second example, we used the += assignment operator to reassign w. We’re performing the mathematical operation of the first operator + using the number to the right, then reassigning w to the computed value.

We also have access to other mathematical assignment operators: -=, *=, and /= which work in a similar fashion.

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4





/*
The Increment and Decrement Operator
Other mathematical assignment operators include the increment operator (++) and decrement operator (--).

The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1. For example:

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

/*
Just like the previous mathematical assignment operators (+=, -=, *=, /=), the variable’s value is updated and assigned as the new value of that variable.
*/


/*
String Concatenation with Variables

In previous exercises, we assigned strings to variables. Now, let’s go over how to connect, or concatenate, strings in variables.

The + operator can be used to combine two string values even if those values are being stored in variables:


let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

/*
In the example above, we assigned the value 'armadillo' to the myPet variable. On the second line, the + operator is used to combine three strings: 'I own a pet', the value saved to myPet, and '.'. We log the result of this concatenation to the console as:
I own a pet armadillo.*/



/* String Interpolation

In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:
*/

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

/*

Notice that:

*a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
*Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
*When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'

One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don’t have to worry about escaping double quotes or single quotes.

*/


/* typeof operator

While writing code, it can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable’s value, you can use the typeof operator.

The typeof operator checks the value to its right and returns, or passes back, a string of the data type

*/
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

/*
Let’s break down the first example. Since the value unknown1 is 'foo', a string, typeof unknown1 will return 'string'.
*/