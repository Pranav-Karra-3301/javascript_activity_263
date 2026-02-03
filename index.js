// Part 1: JavaScript Basics

// === Variables and Data Types ===

// Integer variable
let score = 100;

// Float variable
let temperature = 36.6;

// String variable
let greeting = "Hello, JavaScript!";

// Boolean variable
let isLearningFun = true;

// Print all variables
console.log("score:", score);
console.log("temperature:", temperature);
console.log("greeting:", greeting);
console.log("isLearningFun:", isLearningFun);

// === Objects and Arrays ===

// Create a student object
let student = {
    name: "John",
    age: 20,
    subjects: ["Math", "Science", "English"]
};

// Add a new property
student.isGraduated = false;

console.log("student:", student);

// Create an array of the first five prime numbers
let primeNumbers = [2, 3, 5, 7, 11];

// Change the second element to 4 (not prime)
primeNumbers[1] = 4;
console.log(primeNumbers[1], "Mistake detected");

// Correct the mistake
primeNumbers[1] = 3;
console.log("primeNumbers:", primeNumbers);

// === Operators ===

// Arithmetic operators
let a = 15;
let b = 4;
console.log("Sum:", a + b);
console.log("Product:", a * b);
console.log("Modulus:", a % b);

// Comparison operators
let x = 10;
let y = 20;
console.log("x == y:", x == y);
console.log("x != y:", x != y);
console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x >= y:", x >= y);
console.log("x <= y:", x <= y);

// Logical operators
let isTrue = true;
let isFalse = false;
console.log("isTrue && isFalse:", isTrue && isFalse);
console.log("isTrue || isFalse:", isTrue || isFalse);
console.log("!isTrue:", !isTrue);
