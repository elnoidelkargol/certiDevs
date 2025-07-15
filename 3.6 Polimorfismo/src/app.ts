abstract class Employee{
    constructor(
        public name: string,
        public id: number,
    ){}

    abstract calculateSalary(): number;

    public getInfo(): string{
        return `Id:${this.id} Name: ${this.name}`;
    }
}

class FullTimeEmployee extends Employee implements Payable{
    public salary: number;
    constructor(name: string, id:number, salary: number)
    {
        super(name,id);
        this.salary = salary;
    }

    calculateSalary(): number {
        return this.salary;
    }

    generatePaymentReport(): string {
        return `${this.calculateSalary()} is paid`;
    }

    
}

class HourlyEmployee extends Employee implements Payable{
    public hourlyRate: number;
    public hoursWorked: number;

    constructor(name: string, id:number, hourlyRate: number, hoursWorked: number)
    {
        super(name,id);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    generatePaymentReport(): string {
        return `${this.calculateSalary()} is paid`;
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
    
}

interface Payable {
    generatePaymentReport(): string;
}