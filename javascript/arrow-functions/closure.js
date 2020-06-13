// createFunction = () => {
//   const multiplyByTwo = (value) => value * 2;

//   return multiplyByTwo;
// };

// createdFunction = createFunction();

// console.log(createdFunction(2));

squareFactory = (numberToSquare) => {
  let value = numberToSquare;

  const squareNumber = () => {
    value *= numberToSquare;
    return value;
  };

  return squareNumber;
};

const mySquareFactory = squareFactory(4);

console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
console.log(mySquareFactory());
