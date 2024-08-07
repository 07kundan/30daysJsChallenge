// console.log("Object Creation Representing Book and its Properties");
// Method 1:
let book = new Object();

book.title = "pustak";
book.author = "kalam";
book.year = 2029;

console.log("Book: ", book);

// adding Book Properties
book.details = function () {
  return `Title of Book: ${this.title} , 
            Author of Book: ${this.author},
            Year of Book: ${this.year}`;
};

console.log("loggin book properties using details property of object");
console.log(book.details());
// method 2

let book2 = {
  title: "ek kitaab",
  author: "unknown",
  year: 2024,

  // adding method to the object that updates the book's year
  changeYear: function (updateYear) {
    this.year = updateYear;
    console.log(book2);
  },
};

console.log("title " + book2.title, "author ", book2.author, book2);
console.log("after updating the year");
book2.changeYear(2000);

// tasks 5 - nested object representing a library with properties like name and books(an array of books) and log the library object to the console

let library = {
  name: "Book",
  books: [
    { title: "pustak", author: "kalam", year: 2029 },
    { title: "ek kitaab", author: "unknown", year: 2024 },
    { title: "30 shakhs", author: "kalam", year: 2020 },
    { title: "40 shakhs", author: "unknown", year: 2025 },
  ],
  // adding a method to the library object that logs all the books in the library
  logBooks: function () {
    console.log(`Library name: ${this.name}`);
    console.log("Books: ");
    this.books.forEach((book) => {
      console.log(
        `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`
      );
    });
  },
  // adding a method to the library object that adds a new book to the library
  addBook: function (booktoadd) {
    this.books.push(booktoadd);
    console.log(`Book ${booktoadd.title} added successfully to the library`);
  },
};

console.log("Library: ", library);
library.logBooks();
const booktoadd = {
  title: "naya shakhs",
  author: "unknown",
  year: 2026,
};
library.addBook(booktoadd);
console.log("Library: ", library);

// task 6 -: log the library name and access the title of all books;

console.log("Library name: ", library.name);

console.log("loggin the title of all books");

library.books.forEach((book) => console.log(book.title));

// task 8 -:for in loop to iterate over the properties of the library objects and  log each property and its value

console.log(
  "for in loop to iterate over the properties of the library objects"
);

//loops through the properties of an object
for (let property in library) {
  console.log(property, ":", library[property]);
}

// task 9 -: use object.key and object.value methods to log all keys and values of the library

console.log(
  "loggin all keys and values of the library using object.key and object.value methods"
);

for (let key of Object.keys(library)) {
  console.log(key, ":", library[key]);
}

console.log("values of library");
for (let value of Object.values(library)) {
  console.log(value);
}
