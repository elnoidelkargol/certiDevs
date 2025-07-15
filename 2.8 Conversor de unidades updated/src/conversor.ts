// Constantes de conversión
const KELVIN_OFFSET = 273.15;
const METRO_A_PIES = 3.28084;
const METRO_A_PULGADAS = 39.3701;

const KILOGRAMO_A_LIBRAS = 2.20462;
const KILOGRAMO_A_ONZAS = 35.274;

// Tipos
type ConversionInput = TemperatureConversion | MetricConversion | WeightConversion;
type TemperatureUnit = "Celsius" | "Fahrenheit" | "Kelvin";
type MetricUnit = "Metros" | "Pies" | "Pulgadas";
type WeightUnit = "Kilogramos" | "Libras"  | "Onzas";

type TemperatureConversion = {
  type: "temperature";
  value: number;
  from: TemperatureUnit;
  to: TemperatureUnit;
};

type MetricConversion = {
  type: "metric";
  value: number;
  from: MetricUnit;
  to: MetricUnit;
};

type WeightConversion = {
  type: "weight";
  value: number;
  from: WeightUnit;
  to: WeightUnit;
};


function conversor(input:ConversionInput): number
{
    switch (input.type) {
        case "temperature":
            return temperatureConversor({
                type:input.type,
                value: input.value,
                from: input.from as TemperatureUnit,
                to: input.to as TemperatureUnit
            });
        case "metric":
            return metricConversor({
                type:input.type,
                value:input.value,
                from:input.from as MetricUnit,
                to: input.to as MetricUnit
            });
        case "weight":
            return weightConversor({
                type:input.type,
                value: input.value,
                from: input.from as WeightUnit,
                to: input.to as WeightUnit
            });
        default:
            throw Error("Conversion no aceptada");
    }
}
function temperatureConversor (input: TemperatureConversion): number{
    
    const { value, from, to } = input;

    if (from === "Kelvin" && value < 0) {
        throw new Error("No se puede tener temperatura negativa en Kelvin.");
    }
    
    if (from === to) return value;

    switch (from) {
        case "Celsius":
            if(to === "Fahrenheit"){
                return (value * 9/5) + 32;
            }else if(to === "Kelvin"){
                return value + KELVIN_OFFSET;
            }else{
                return value;
            }
        case "Fahrenheit":
            if(to === "Celsius"){
                return (value - 32) * 5/9
            }else if(to === "Kelvin"){
                return (value - 32) * 5 / 9 + KELVIN_OFFSET;
            }else{
                return value;
            }
        case "Kelvin":
            if(to === "Celsius"){
                return value - KELVIN_OFFSET;
            }else if(to === "Fahrenheit"){
                 return (value - KELVIN_OFFSET) * 9 / 5 + 32;
            }else{
                return value;
            }
        default:
            throw new Error("Conversión de temperatura no válida.");
    }

}
function metricConversor (input:MetricConversion): number{

    const {from,to,value} = input;

    if (from === to) return value;

    // Convertir a metros primero
    let metros: number;

    switch (from) {
    case "Metros": metros = value; break;
    case "Pies": metros = value / METRO_A_PIES; break;
    case "Pulgadas": metros = value / METRO_A_PULGADAS; break;
    }

    // Convertir desde metros
    switch (to) {
    case "Metros": return metros;
    case "Pies": return metros * METRO_A_PIES;
    case "Pulgadas": return metros * METRO_A_PULGADAS;
    }

  throw new Error("Conversión métrica no válida.");
}
function weightConversor (input:WeightConversion): number{

    const {value,from,to} = input;
    
      if (from === to) return value;

  // Convertir a kilogramos primero
  let kilos: number;
  switch (from) {
    case "Kilogramos": kilos = value; break;
    case "Libras": kilos = value / KILOGRAMO_A_LIBRAS; break;
    case "Onzas": kilos = value / KILOGRAMO_A_ONZAS; break;
  }

  // Convertir desde kilogramos
  switch (to) {
    case "Kilogramos": return kilos;
    case "Libras": return kilos * KILOGRAMO_A_LIBRAS;
    case "Onzas": return kilos * KILOGRAMO_A_ONZAS;
  }

  throw new Error("Conversión de peso no válida.");
}
console.log(conversor({
    type: "temperature",
    value: 100,
    from: "Fahrenheit",
    to: "Celsius"
}));

console.log(conversor({
    type: "metric",
    value: 98,
    from: "Metros",
    to: "Pulgadas"
}))

console.log(conversor({
    type: "weight",
    value: 54,
    from: "Libras",
    to: "Onzas"
}))

console.log(conversor({
    type: "temperature",
    value: 87,
    from: "Kelvin",
    to: "Celsius"
}))

console.log(conversor({
    type: "weight",
    value: 44,
    from: "Libras",
    to: "Kilogramos"
}))