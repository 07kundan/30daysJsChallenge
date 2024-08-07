let arr = [3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((num) => console.log(num));
console.log(arr);
console.log(arr[arr.length - 1]);

console.log("operations");

arr.push(11);
console.log("pushing element", arr);

arr.pop();
console.log("poping element", arr);

arr.shift();
console.log("shifting element", arr);
arr.unshift(1);
console.log("unshifting element", arr);

let arr2 = arr.map(function (element) {
  return element * 2;
});

console.log("map", arr2);

let evenarray = arr.filter(function (element) {
  return element % 2 == 0;
});
console.log("filter", evenarray);

let sum = arr.reduce(function (sum, element) {
  return sum + element;
}, 0);
console.log("sum of array", arr, "is", sum);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.forEach(function (element) {
  console.log(element);
});

let multiDimensionArray = [];
let num = 1;
for (let i = 0; i < 5; i++) {
  let temp = new Array(5);
  multiDimensionArray.push(temp);
  for (let j = 0; j < 5; j++) {
    multiDimensionArray[i][j] = num;
    num++;
  }
}

console.log(multiDimensionArray);
console.log(multiDimensionArray[0][4]);
