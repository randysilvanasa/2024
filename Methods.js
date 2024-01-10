/*
Methods are actions we can perform. 
Data types have access to specific methods that allow us to handle instances of that data typeof.

We call, or use, these methods by appending an instance with:
*A period (the dot operator)
*The name of the method
*Opening and closing parentheses
*/

Example:
console.log('hello'.toUpperCase());
console.log('Hey'.startsWith('H'));
console.log('Hi'.toLowerCase());

const obj = {
    a: "foo",
    b() {
      return this.a;
    },
  };
  console.log(obj.b()); // "foo"
 
