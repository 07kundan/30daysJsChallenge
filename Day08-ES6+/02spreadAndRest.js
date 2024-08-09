let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

let arr2 = [...arr, 8, 9];
console.log(arr2);

// The rest operator (...) in JavaScript is used to gather the remaining elements of an array or the remaining properties of an object into a new array or object. It is often used in function parameters, array destructuring, and object destructuring.

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// The rest operator must always be the last parameter in a function or the last element in destructuring.
// In array destructuring, the rest operator gathers the "rest" of the elements after the specified indices.
// In object destructuring, the rest operator gathers the remaining properties not explicitly destructured.
