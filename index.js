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
