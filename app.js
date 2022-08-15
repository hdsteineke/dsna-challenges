function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

function pop(arr) {
  const popped = arr[arr.length -1];
  arr.length = arr.length - 1;
  return popped;
}

function unshift(arr, item) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    arr[0] = item;
  }
  return arr.length + 1;
}

function fizzBuzz(number) {
  for(i = 0; i <= number; i++) {
    let array = [];
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
      } 
      else if (i % 5 === 0) {
        array.push('Buzz');
      } 
      else if ( i % 3 === 0 ) {
        array.push('Fizz');
      }
  }
    return array;
}

module.exports = { push, pop, unshift };