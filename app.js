function push(arr, item) {
  arr[arr.length] = item;
  return arr;
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

module.exports = { push };