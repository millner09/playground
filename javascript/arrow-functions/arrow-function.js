const multiplyByTwo = (input) => input * 2;

const array = [1, 2, 3];

const result = array.map((value) => multiplyByTwo(value));
const otherResult = array.map((value) => value * 2);

console.log(array);
console.log(result);
console.log(otherResult);
