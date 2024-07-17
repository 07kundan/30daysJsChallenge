let a = 5;
let b = 8;

console.log("sum", a + b);
console.log("subtract", a - b);
console.log("multiplication", a * b);
console.log("division", a / b);
console.log("modulus", a % b);

console.log("+=", (a += 6));
console.log("-=", (a -= 6));

console.log(">", a > b);
console.log("<", a < b);

console.log(">=", a > b);
console.log("<=", a < b);

console.log("==", a == b);
console.log("===", a === b);

if (a < 10 && b < 10) {
  console.log("&&", true);
}

if (a < 10 || b < 10) {
  console.log("||", true);
}

if (!a > 10) {
  console.log("!", true);
}

a >= 0
  ? console.log("ternary operator :positive")
  : console.log("ternary operator : negative");
