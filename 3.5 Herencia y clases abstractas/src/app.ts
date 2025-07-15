abstract class Vehicle{
    constructor(
    protected brand: string,
    protected year: number,
    ){

    }

    abstract getSpecifications(): string;
    getAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
class Car extends Vehicle {
    doors: number;
    constructor(brand: string, year: number, doors: number) {
        super(brand,year);
        this.doors = doors;
    }
    getSpecifications(): string {
        return `${this.brand} (${this.year}) - ${this.doors} puertas`;
    }


}

class Motorcycle extends Vehicle{
    engineSize: number;
    constructor(brand: string, year: number, engineSize: number) {
        super(brand,year);
        this.engineSize = engineSize;
    }
    getSpecifications(): string {
        return `${this.brand} (${this.year}) - ${this.engineSize}cc`
    }

    
}