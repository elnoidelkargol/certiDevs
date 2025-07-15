"use strict";
function greet(name) {
    return `Hello ${name}! Welcome to typescript`;
}
const user = "Developer";
console.log(greet(user));
const developer = {
    firstName: "Uri",
    lastName: "Sanchez",
    age: 38
};
console.log(`Developer: ${developer.firstName}  ${developer.lastName}, Age:  ${developer.age} years old`);
