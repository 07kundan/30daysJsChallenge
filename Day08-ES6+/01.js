let name = "nahi pta";
let age = "infinity";

console.log(`My name is ${name} and I am ${age} years old.`);

//multi line string using template litral
let multilineString = `This is a multi-line string.
It can span multiple lines.
And it can contain ${name} and ${age}.`;

console.log(multilineString);

// Destructuring
// task 3 - array destructuring to extract first and second elements

let arr = [1, 2, 3, 4, 5];
let [first, second] = arr;
let [, , , fourth, fifth] = arr;

console.log("first element:", first);
console.log("second element:", second);
console.log("fourth element:", fourth);
console.log("fifth element:", fifth);
console.log(arr);

// task 4 - object destructuring to extract properties
let book = new Object();

book.title = "pustak";
book.author = "kalam";
book.year = 2029;

const { title, author } = book;
console.log(book);
console.log(title, author);
