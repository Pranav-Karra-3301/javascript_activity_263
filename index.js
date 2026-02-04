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

// === Control Flow ===

// If-else statement
if (score > 50) {
    console.log("Great job!");
} else {
    console.log("Keep trying!");
}

// For loop over primeNumbers
for (let i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i]);
}

// While loop decrementing score to 0
while (score > 0) {
    score--;
}
console.log("Score after while loop:", score);

// === Functions ===

// Event countdown function
// This function takes a date string as input and calculates how much time is left until that date.
// It creates two Date objects: one for now and one for the event. It subtracts them to get the
// difference in milliseconds, then converts that into days, hours, minutes, and seconds using
// Math.floor and the modulus operator (%). It returns a formatted string showing the countdown.
function eventCountdown(eventDate) {
    const now = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - now;
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
}

const countdownMessage = eventCountdown('December 31, 2024 23:59:59');
console.log(countdownMessage);

// Swap function: a -> b, b -> c, c -> a
function swap(a, b, c) {
    let temp = a;
    a = b;
    b = c;
    c = temp;
    console.log("After swap: a =", a, ", b =", b, ", c =", c);
}

console.log("Before swap: a = 1, b = 2, c = 3");
swap(1, 2, 3);

// Find longest word function
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
