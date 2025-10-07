class Calculator {
    add(a, b) {
        return a + b;
    }

    add(a, b, c) {
        return a + b + c; // overwrites previous add method
    }
}

const calc = new Calculator();
console.log(calc.add(2, 3));    // NaN, because third parameter is undefined
console.log(calc.add(2, 3, 4)); // 9
