function conversor(number, initialUnit, unitToConvert, conversorType) {
    switch (conversorType) {
        case "temperature":
            return temperatureConversor(number, initialUnit, unitToConvert);
        case "metric":
            return metricConversor(number, initialUnit, unitToConvert);
        case "weight":
            return weightConversor(number, initialUnit, unitToConvert);
        default:
            return number;
    }
}
function temperatureConversor(number, initialUnit, unitToConvert) {
    switch (initialUnit) {
        case "Celsius":
            if (unitToConvert === "Fahrenheit") {
                return (number * 9 / 5) + 32;
            }
            else if (unitToConvert === "Kelvin") {
                return number + 273.15;
            }
            else {
                return number;
            }
        case "Fahrenheit":
            if (unitToConvert === "Celsius") {
                return (number - 32) * 5 / 9;
            }
            else if (unitToConvert === "Kelvin") {
                return (number - 32) * 5 / 9 + 273.15;
            }
            else {
                return number;
            }
        case "Kelvin":
            if (unitToConvert === "Celsius") {
                return number - 272.15;
            }
            else if (unitToConvert === "Fahrenheit") {
                return (number - 273.15) * 9 / 5 + 32;
            }
            else {
                return number;
            }
        default:
            return number;
    }
}
function metricConversor(number, initialUnit, unitToConvert) {
    switch (initialUnit) {
        case "Metros":
            if (unitToConvert === "Pies") {
                return number * 3.28084;
            }
            else if (unitToConvert === "Pulgadas") {
                return number * 39.3701;
            }
            else {
                return number;
            }
        case "Pies":
            if (unitToConvert === "Metros") {
                return number / 3.28084;
            }
            else if (unitToConvert === "Pulgadas") {
                return number * 12;
            }
            else {
                return number;
            }
        case "Pulgadas":
            if (unitToConvert === "Metros") {
                return number / 39.3701;
            }
            else if (unitToConvert === "Pies") {
                return number / 12;
            }
            else {
                return number;
            }
        default:
            return number;
    }
}
function weightConversor(number, initialUnit, unitToConvert) {
    switch (initialUnit) {
        case "Kilogramos":
            if (unitToConvert === "Libras") {
                return number * 2.20462;
            }
            else if (unitToConvert === "Onzas") {
                return number * 35.274;
            }
            else {
                return number;
            }
        case "Libras":
            if (unitToConvert === "Kilogramos") {
                return number / 2.20462;
            }
            else if (unitToConvert === "Onzas") {
                return number * 16;
            }
            else {
                return number;
            }
        case "Onzas":
            if (unitToConvert === "Kilogramos") {
                return number / 35.274;
            }
            else if (unitToConvert === "Libras") {
                return number / 16;
            }
            else {
                return number;
            }
        default:
            return number;
    }
}
console.log(conversor(2, "Celsius", "Fahrenheit", "temperature"));
console.log(conversor(10, "Metros", "Pulgadas", "metric"));
console.log(conversor(2, "Kilogramos", "Libras", "weight"));
console.log(conversor(2, "Fahrenheit", "Kelvin", "temperature"));
console.log(conversor(2, "Pies", "Pulgadas", "metric"));
