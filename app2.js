const { array } = require("yargs");

function addFirst(element) {
  //takes an element 

  //returns a function that takes an array
    return function addItem(arr) {
      //and returns a new array with element as the first index, followed by the rest 
      return [element, ...arr];
    }
  // return addItem();
}

//arrow notation version of addFirst function (above)
const betterAddFirst = (element) => (arr) => [element, ...arr];


function addPunctuation(punctuation) {
  return function addEmotion(string) {
    return `${string}` + `${punctuation}`
  }
}

const betterAddPunctuation = (punctuation) => (string) => `${string}` + `${punctuation}`;


function rootSumDigit(n) {
  if (n <= 9) return n;
  //takes in a number(n)
  //if n is more than 1 digit,
  //convert to string and split into array of digits
  const digits = n.toString().split('');
  const numbers = digits.map(d => +d);
  const sum = numbers.reduce((a, b) => a + b);
  return sum >= 10 ? rootSumDigit(sum) : sum;
  } 

function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++)  {
    if (!predicate(arr[i])) {
      return false;
    }
  }
  return true;
}


function fib(n) {
  //takes an integer n as an argument
  //that integer corresponds to an index in the fibonacci sequence array
    if (n === 0) return 0;
    if (n === 1) return 1;
    //the function returns the fibonacci value at integer 'n'
    //which is the sum of the previous two indices in the array
    return fib(n-1) + fib(n-2);
  };


function filter(arr, predicate) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


module.exports = { addFirst, betterAddFirst, addPunctuation, betterAddPunctuation, rootSumDigit, every, fib, filter };