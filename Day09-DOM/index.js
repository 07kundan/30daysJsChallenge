// document.getElementsByTagName("h1") returns a collection (an array-like object) of all <h1> elements, even if there's only one. You'll need to access the first element in this collection if you want to change its text content.

function changeText() {
  // Get the first h1 element (assuming there's only one)
  let heading = document.getElementsByTagName("h1")[0];
  heading.innerText = "hello world";
  heading.style.background = "red";
}

document.getElementsByTagName("button")[0].onclick = changeText;

//other way to add events
// button.addEventListener("click", changeText);

// creating and appending
function createDiv() {
  let element = document.createElement("div");
  element.innerText = "element created";
  document.body.appendChild(element);
}

document.getElementById("create").onclick = createDiv;

function addli() {
  let li = document.createElement("li");
  li.innerText = "new fruit";
  let element = document.getElementById("list");
  element.appendChild(li);
}
document.getElementById("libutton").onclick = addli;

// removing element

function toRemove(element) {
  console.log(element);
  if (element.children.length > 0) {
    const lilast = element.lastElementChild;
    element.removeChild(lilast);
  } else document.body.removeChild(element);
}

const element = document.getElementById("remove");
const ulElement = document.getElementById("list");
// document.getElementById("removeButton").onclick = () => toRemove(element);
document.getElementById("removeButton").onclick = () => toRemove(ulElement);

// modifying attribute and classes
function changeAttributes(element) {
  element.src = "para";
}

const img = document.getElementById("img1");
document.getElementById("changeAttribute").onclick = () =>
  changeAttributes(img);

// adding removing classes

// function removeClass(element) {
//   element.classList.remove("css");
// }

// function addClass(element) {
//   element.classList.add("classAdded");
// }

function removeClass(element) {
  // Remove the 'css' class
  element.classList.remove("css");
}

function addClass(element) {
  element.classList.add("classAdded");
}

const classElement = document.getElementById("class");

document.getElementById("removeClass").onclick = () =>
  removeClass(classElement);
document.getElementById("addClass").onclick = () => addClass(classElement);
