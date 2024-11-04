class Calculator {
    /**
     * Method for addition.
     * Takes two numbers as arguments and returns their sum.
     * 
     * @param {number} a - The first number to add.
     * @param {number} b - The second number to add.
     * @returns {number} The sum of a and b.
     */
    add(a: number, b: number): number {
        return a + b;
    }

    /**
     * Method for subtraction.
     * Takes two numbers as arguments and returns the difference of the first minus the second.
     * 
     * @param {number} a - The number from which to subtract.
     * @param {number} b - The number to subtract from the first number.
     * @returns {number} The difference of a and b.
     */
    subtract(a: number, b: number): number {
        return a - b;
    }

    /**
     * Method for multiplication.
     * Takes two numbers as arguments and returns their product.
     * 
     * @param {number} a - The first number to multiply.
     * @param {number} b - The second number to multiply.
     * @returns {number} The product of a and b.
     */
    multiply(a: number, b: number): number {
        return a * b;
    }

    /**
     * Method for division.
     * Takes two numbers as arguments and returns the quotient of the first divided by the second.
     * It's important to handle the case where the divisor (b) is zero as this will result in an error.
     * 
     * @param {number} a - The number to be divided.
     * @param {number} b - The number by which to divide the first number.
     * @returns {number} The quotient of a and b or NaN if b is 0.
     */
    division(a: number, b:number): number {
        if (b === 0) {
            console.error("Division by zero is not allowed.");
            return NaN; // Return 'Not a Number' if division by zero is attempted
        }
        return a / b;
    }
}

// Instantiate a new Calculator object
let calculator = new Calculator();

// Perform operations using the calculator object
console.log(`Addition: ${calculator.add(5, 3)}`); // Outputs: Addition: 8
console.log(`Subtraction: ${calculator.subtract(5, 3)}`); // Outputs: Subtraction: 2
console.log(`Multiplication: ${calculator.multiply(5, 3)}`); // Outputs: Multiplication: 15
console.log(`Division: ${calculator.division(6, 2)}`); // Outputs: Division: 3

// Example of handling division by zero
console.log(`Division by zero: ${calculator.division(6, 0)}`); // Outputs: Division by zero: NaN and logs an error message to the console
