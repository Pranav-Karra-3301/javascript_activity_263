// pranav karra
// cmpsc 263 - javascript activity

// variables and data types
let score = 100;
let temperature = 36.6;
let greeting = "Hello, JavaScript!";
let isLearningFun = true;

console.log("score:", score);
console.log("temperature:", temperature);
console.log("greeting:", greeting);
console.log("isLearningFun:", isLearningFun);

// objects and arrays
let student = {
    name: "John",
    age: 20,
    subjects: ["Math", "Science", "English"]
};

student.isGraduated = false;
console.log("student:", student);

// first five primes
let primeNumbers = [2, 3, 5, 7, 11];

// oops changing second element to 4
primeNumbers[1] = 4;
console.log(primeNumbers[1], "Mistake detected");

// fixing it back to 3
primeNumbers[1] = 3;
console.log("primeNumbers:", primeNumbers);

// operators
let a = 15;
let b = 4;
console.log("Sum:", a + b);
console.log("Product:", a * b);
console.log("Modulus:", a % b);

// comparing x and y
let x = 10;
let y = 20;
console.log("x == y:", x == y);
console.log("x != y:", x != y);
console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x >= y:", x >= y);
console.log("x <= y:", x <= y);

// logical stuff
let isTrue = true;
let isFalse = false;
console.log("isTrue && isFalse:", isTrue && isFalse);
console.log("isTrue || isFalse:", isTrue || isFalse);
console.log("!isTrue:", !isTrue);

// control flow
if (score > 50) {
    console.log("Great job!");
} else {
    console.log("Keep trying!");
}

// looping through primes
for (let i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i]);
}

// while loop to bring score down to 0
while (score > 0) {
    score--;
}
console.log("Score after while loop:", score);

// functions

// this function basically takes in a future date and figures out how long until that date
// it gets the current time with new Date() and the event time, subtracts them to get milliseconds
// then it just divides down to get days/hours/mins/secs and uses % to get the remainders
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

// swap function - moves a to b, b to c, c to a using a temp variable
function swap(a, b, c) {
    let temp = a;
    a = b;
    b = c;
    c = temp;
    console.log("After swap: a =", a, ", b =", b, ", c =", c);
}

console.log("Before swap: a = 1, b = 2, c = 3");
swap(1, 2, 3);

// finds the longest word by splitting the sentence and looping through
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
