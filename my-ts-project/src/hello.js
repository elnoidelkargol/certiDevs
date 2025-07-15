function greet(name) {
    return "Hello ".concat(name, "! Welcome to typescript");
}
var user = "Developer";
console.log(greet(user));
var developer = {
    firstName: "Uri",
    lastName: "Sanchez",
    age: 38
};

console.log("Developer: ".concat(developer.firstName, "  ").concat(developer.lastName, ", Age:  ").concat(developer.age, " years old"));
