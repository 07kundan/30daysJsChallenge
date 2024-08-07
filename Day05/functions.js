// function to check if the non is even or not

function isNoEven(no) {
  if (no % 2 == 1) console.log("no is odd");
  else console.log("no is even");
}

isNoEven(4);

// function to calculate the square of the number

function square(num) {
  return num * num;
}

console.log("square of no", square(5));

// function to find maximum of two numbers

function maxTwoNumbers(a, b) {
  return a > b ? a : b;
}

console.log("maximum of 5 and 10 is", maxTwoNumbers(5, 10));

// function to concatinate the two strings

function concatenateStrings(str1, str2) {
  return str1 + str2;
}

console.log("concatenated string is", concatenateStrings("Hello ", "World"));

// arrow function to calulate sum of two numbers

const sumNumbers = (a, b) => a + b;

console.log("sum of 3 and 5 is", sumNumbers(3, 5));

// arrow function to check if the string contains a specific character

const containsCharacter = (str, char) => str.includes(char);

console.log("string contains 'l'?", containsCharacter("Hello World", "l"));

// function to return the product of two numbers and set second parameter's default value

function multiplyNumbers(a, b = 4) {
  return a * b;
}

console.log("product of 5 and 4 or second parameter is", multiplyNumbers(5));

// function to return the greeting message for a person

function greeting(name, age = 20) {
  return `Hello, ${name}!`;
}

console.log("greeting message is", greeting("John Doe"));

// higher order function that takes function and a number and calls the function that many times

function repeatFunction(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

repeatFunction(() => console.log("hello"), 5);

// a higher-order function in JavaScript that takes two functions and a value, applies the first function to the value, and then applies the second function to the result:

function applyFunctions(func1, func2, value) {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
}

// Example functions
function addTwo(num) {
  return num + 2;
}

function multiplyByThree(num) {
  return num * 3;
}

// Test the higher-order function
let value = 5;
let result = applyFunctions(addTwo, multiplyByThree, value);
console.log(`The result is ${result}`); // Output: The result is 21