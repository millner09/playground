// Type JavaScript here and click "Run Code" or press Ctrl + s

const { SSL_OP_EPHEMERAL_RSA } = require("constants");
const { setInterval } = require("timers");

// CHALLENGE 1
function createFunction() {
  const sayHello = () => console.log("Hello, world!");

  return sayHello;
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  const inputPrinter = () => console.log(input);

  return inputPrinter;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter("sample");
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

function addByX(x) {
  const addFunction = (value) => x + value;

  return addFunction;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); // => should return 8
console.log(addByFour(5)); // => should return 9

// CHALLENGE 4
function once(func) {
  let output;
  let hasBeenCalledOnce = false;
  const callBackHandler = (value) => {
    if (hasBeenCalledOnce) return output;
    else {
      output = func(value);
      hasBeenCalledOnce = true;
      return output;
    }
  };

  return callBackHandler;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
  let timesCalled = 0;

  const myFunc = () => {
    timesCalled++;
    return timesCalled >= count ? func() : "";
  };

  return myFunc;
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed

// CHALLENGE 6
// function delay(func, wait) {
//   let canCall = false;
//   setTimeout(() => {
//     canCall = true;
//   }, wait);

//   const delayedFunction = () => {
//     if (canCall) {
//       func();
//     }
//   };

//   return delayedFunction;
// }

// myDelay = delay(() => console.log("hello world!"), 1000);
// myDelay();

// setTimeout(() => {
//   myDelay();
// }, 1000);

// CHALLENGE 7
function rollCall(names) {
  const numNames = names.length;
  let currentIndex = 0;

  const rollCallFunction = () => {
    if (currentIndex < numNames) {
      const nameToReturn = names[currentIndex];
      currentIndex++;
      console.log(nameToReturn);
    } else {
      console.log("Everyone accounted for.");
    }
  };

  return rollCallFunction;
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  const returnObj = {};
  const myFunc = (value) => {
    if (value === magicWord) {
      return returnObj;
    } else {
      const calculatedVal = func(value);
      returnObj[value] = calculatedVal;
      return calculatedVal;
    }
  };

  return myFunc;
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let currentIndex = 0;

  const cycler = () => {
    const returnValue = array[currentIndex];
    currentIndex++;

    if (currentIndex == array.length) {
      currentIndex = 0;
    }

    return returnValue;
  };

  return cycler;
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  const myFunc = (value) => {
    return func(arg, value);
  };
  return myFunc;
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  const myFunc = (value) => {
    const result = {};
    result.date = Date.now();
    result.output = func(value);
    return result;
  };

  return myFunc;
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  const stringSwapArray = [];
  const myCensor = (...strings) => {
    if (strings.length === 1) {
      let returnString = strings[0];

      stringSwapArray.forEach((swapObj) => {
        returnString = returnString.replace(swapObj.from, swapObj.to);
      });

      return returnString;
    } else {
      // store the new swapper
      const swap = {};
      swap.from = strings[0];
      swap.to = strings[1];
      stringSwapArray.push(swap);
    }
  };

  return myCensor;
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  const secretHolder = {};

  secretHolder.getSecret = () => {
    return secret;
  };

  secretHolder.setSecret = (value) => (secret = value);

  return secretHolder;
}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5);
console.log(obj.getSecret()); // => returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // => returns 2

// CHALLENGE 14
function callTimes() {
  let numTimesCalled = 0;

  const myFunc = () => {
    numTimesCalled++;
    return numTimesCalled;
  };

  return myFunc;
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2

// CHALLENGE 15
function russianRoulette(num) {
  let currentIndex = 0;
  const clickClickBang = () => {
    currentIndex++;
    if (currentIndex < num) {
      return "click";
    } else if (currentIndex == num) {
      return "bang";
    } else {
      return "reload to play again";
    }
  };

  return clickClickBang;
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'

// CHALLENGE 16
function average() {
  let numNumbersPassed = 0;
  let total = 0;
  const myAverager = (...values) => {
    if (values.length == 0) {
      return numNumbersPassed == 0 ? 0 : total / numNumbersPassed;
    } else {
      total += values[0];
      numNumbersPassed++;
      return total / numNumbersPassed;
    }
  };

  return myAverager;
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  const testRunner = (func) => {
    let result;
    arrOfTests.forEach((element) => {
      result = func(element[0]) == element[1] ? true : false;
    });

    return result;
  };

  return testRunner;
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  const history = [];
  const myHistoryHandler = (value) => {
    let valueToReturn;
    if (value == "undo") {
      if (history.length > 0) {
        valueToReturn = `${history.pop()} undone`;
      } else {
        valueToReturn = "nothing to undo";
      }
    } else {
      history.push(value);
      valueToReturn = `${value} done`;
    }
    return valueToReturn;
  };

  return myHistoryHandler;
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions("jump")); // => should log 'jump done'
console.log(myActions("undo")); // => should log 'jump undone'
console.log(myActions("walk")); // => should log 'walk done'
console.log(myActions("code")); // => should log 'code done'
console.log(myActions("pose")); // => should log 'pose done'
console.log(myActions("undo")); // => should log 'pose undone'
console.log(myActions("undo")); // => should log 'code undone'
console.log(myActions("undo")); // => should log 'walk undone'
console.log(myActions("undo")); // => should log 'nothing to undo'
