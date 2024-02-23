class Calculator {
    // Method for addition
    add(a: number, b: number): number {
        return a + b;
    }

    // Method for subtraction
    subtract(a: number, b: number): number {
        return a - b;
    }

    // Method for multiplication
    multiply(a: number, b: number): number {
        return a * b;
    }

    // Method for division
    division(a: number, b:number): number {
        return a / b;
    }
}

let calculator = new Calculator();
console.log(`Addition: ${calculator.add(5, 3)}`);
console.log(`Subtraction: ${calculator.subtract(5, 3)}`);
console.log(`Multiplication: ${calculator.multiply(5, 3)}`);
console.log(`Division: ${calculator.division(6, 2)}`);
