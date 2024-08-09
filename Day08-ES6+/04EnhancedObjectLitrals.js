// task 8 use enhanced object literals to create an object with method and properties

const title = "pustak";
const author = "unknown";
const year = "2024";

const book = {
  // Shorthand property names (same as title: title)
  title,
  author,
  year,
  details() {
    return `Title of Book: ${this.title}, 
Author of Book: ${this.author}, 
Year of Book: ${this.year}`;
  },

  // task 9 create an object with computed property names based on variables and log the object to the console

  // Computed property name
  [`published${year}`]: true,
};

console.log(book);
console.log(book.details());
console.log(book[`published${year}`]);
