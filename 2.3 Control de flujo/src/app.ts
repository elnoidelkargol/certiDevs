function classifyNumber(number:number): string{
    if (number < 0){
        return "Negative"; 
    }
    if (number%3 === 0 && number %5 === 0){
        return "FizzBuzz";
    }else if(number%3 === 0){
        return "Fizz";
    }else if(number%5 === 0){
        return "Buzz";
    }else{
        return number.toString();
    }
}

console.log(classifyNumber(6));
console.log(classifyNumber(10));
console.log(classifyNumber(30));
console.log(classifyNumber(-6));
console.log(classifyNumber(1));