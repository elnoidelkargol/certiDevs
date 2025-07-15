type Operator = "suma" | "resta" | "multiplicacion" | "division";

const suma = (a: number, b: number): number =>  {return (a + b)}
const resta = (a: number, b: number): number =>  {return (a - b)}
const multiplicacion = (a: number, b: number): number =>  {return (a * b)}
function division (a: number, b: number): number | string {
    if (b === 0)
    {
        return "Error: division por 0 no admitida";
    }
    return (a / b)
}

function calculadora (a: number, b: number, operacion: Operator): number | string{
    switch (operacion) {
        case "suma":
            return suma(a,b);
            break;
        case "resta":
            return resta(a,b);
            break;
        case "multiplicacion":
            return multiplicacion(a,b);
            break;
        case "division":
            return division(a,b);
            break;
        default:
            return "operacion no valida";
            break;
    }

    return "alalalla";
}

console.log(calculadora(5,3,"suma"));
console.log(calculadora(5,3,"resta"));
console.log(calculadora(5,3,"multiplicacion"));
console.log(calculadora(5,3,"division"));
console.log(calculadora(5,0,"division"));