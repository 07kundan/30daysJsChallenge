let a = 43;

a < 0 ? console.log("no is negative") : console.log("no is positive");
a >= 18
  ? console.log("person is eligible to vote")
  : console.log("person is not eligible to vote");

let num1 = 4,
  num2 = 6,
  num3 = 7;

if (num1 > num2) {
  if (num1 > num3) console.log("num1 is greater");
} else if (num2 > num3) {
  console.log("num2 is greater");
} else console.log("num3 is greatest");

// switch case:

switch (new Date().getDay()) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("invalid");
    break;
}

function getGrade(score) {
  let grade;

  switch (true) {
    case score >= 90 && score <= 100:
      grade = "A";
      break;
    case score >= 80 && score < 90:
      grade = "B";
      break;
    case score >= 70 && score < 80:
      grade = "C";
      break;
    case score >= 60 && score < 70:
      grade = "D";
      break;
    case score >= 0 && score < 60:
      grade = "F";
      break;
    default:
      grade = "Invalid score";
  }

  return grade;
}

let score = 85;
let grade = getGrade(score);
console.log(`The grade for a score of ${score} is ${grade}`);

let isNo = 2;

isNo & 1 ? console.log("no is odd") : console.log("no is even");

// leap year

// let year = new Date().getFullYear();
let year = 3000;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year`);
    } else {
      console.log(`${year} is not a leap year`);
    }
  } else {
    console.log(`${year} is a leap year`);
  }
} else {
  console.log(`${year} is not a leap year`);
}
