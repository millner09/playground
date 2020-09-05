// createFunction = () => {
//   const multiplyByTwo = (value) => value * 2;

//   return multiplyByTwo;
// };

// createdFunction = createFunction();

// console.log(createdFunction(2));

const squareFactory = (numberToSquare) => {
  let value = numberToSquare;

  const squareNumber = () => {
    value *= numberToSquare;
    return value;
  };

  return squareNumber;
};

const numTimesCalledReporter = () => {
  let numTimesCalled = 0;
  const numTimesCaller = () => {
    numTimesCalled++;
    console.log(`I've been called ${numTimesCalled} times!`);
  };

  return numTimesCaller;
};

const mySquareFactory = squareFactory(4);
console.log(mySquareFactory());

const numCaller = numTimesCalledReporter();
numCaller();

const functionCallerFactory = (myFunction) => {
  const functionCaller = (value) => {
    return myFunction(value);
  };

  return functionCaller;
};

myFunctionCaller = functionCallerFactory((value) => {
  return value * 2;
});

console.log(myFunctionCaller(2));
console.log(myFunctionCaller(4));
