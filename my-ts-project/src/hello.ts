function greet(name:string):string {
    return `Hello ${name}! Welcome to typescript`;
}

const user : string = "Developer";

console.log(greet(user));

interface Person {
    firstName: string;
    lastName:  string;
    age: number;
}

const developer: Person = {
    firstName: "Uri",
    lastName: "Sanchez",
    age: 38
}; 

console.log(`Developer: ${developer.firstName}  ${developer.lastName}, Age:  ${developer.age} years old`);