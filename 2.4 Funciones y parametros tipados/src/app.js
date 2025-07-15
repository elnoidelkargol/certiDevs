var suma = function (a, b) { return (a + b); };
var resta = function (a, b) { return (a - b); };
var multiplicacion = function (a, b) { return (a * b); };
function division(a, b) {
    if (b === 0) {
        return "Error: division por 0 no admitida";
    }
    return (a / b);
}
function calculadora(a, b, operacion) {
    switch (operacion) {
        case "suma":
            return suma(a, b);
            break;
        case "resta":
            return resta(a, b);
            break;
        case "multiplicacion":
            return multiplicacion(a, b);
        case "division":
            return division(a, b);
        default:
            break;
    }
}
console.log(calculadora(5, 3, "suma"));
console.log(calculadora(5, 3, "resta"));
console.log(calculadora(5, 3, "multiplicacion"));
console.log(calculadora(5, 3, "division"));
console.log(calculadora(5, 0, "division"));
